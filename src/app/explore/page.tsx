import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import type { Metadata } from "next";
import { Suspense } from "react";

import { type Article, ArticleCard } from "#/components/article-card";
import { ExploreFilters } from "#/components/explore-filters";
import { client } from "#/integrations/sanity";

export const metadata: Metadata = {
  title: "Explore Articles",
  description: "Search and filter articles by topic.",
};

const ARTICLES_QUERY: string = `*[_type == "post"
  && ($search == "" || title match $search + "*" || description match $search + "*")
  && ($tag == "" || $tag in tags)
] | order(publishedAt desc) {
  title,
  "slug": slug.current,
  description,
  publishedAt,
  tags
}`;

const TAGS_QUERY: string = `array::unique(*[_type == "post"].tags[])`;

type ExplorePageProps = {
  searchParams: Promise<{ search?: string; tag?: string }>;
};

const ExplorePage = async ({ searchParams }: ExplorePageProps) => {
  const { search = "", tag = "" } = await searchParams;

  const params = { search, tag };

  const [posts, tags] = await Promise.all([
    client.fetch<
      {
        title: string;
        slug: string;
        description: string;
        publishedAt: string;
        tags: string[] | null;
      }[]
    >(ARTICLES_QUERY, params as Record<string, string>),
    client.fetch<string[]>(TAGS_QUERY),
  ]);

  const articles: Article[] = posts.map((post) => ({
    title: post.title,
    slug: post.slug,
    description: post.description,
    date: new Date(post.publishedAt).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }),
    tags: post.tags ?? [],
  }));

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      <Button href="/" startIcon={<ArrowBackIcon />} sx={{ mb: 3 }}>
        Back to home
      </Button>
      <Typography variant="h4" component="h1" fontWeight={700} gutterBottom>
        Explore Articles
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Search and filter articles by topic.
      </Typography>
      <Suspense>
        <ExploreFilters tags={tags} />
      </Suspense>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        {articles.length > 0 ? (
          articles.map((article) => (
            <Grid key={article.slug} size={{ xs: 12, sm: 6, md: 4 }}>
              <ArticleCard article={article} />
            </Grid>
          ))
        ) : (
          <Grid size={12}>
            <Typography
              variant="body1"
              color="text.secondary"
              textAlign="center"
              sx={{ py: 8 }}
            >
              No articles found. Try adjusting your filters.
            </Typography>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default ExplorePage;
