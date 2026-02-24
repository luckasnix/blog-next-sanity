import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { type Article, ArticleCard } from "#/components/article-card";
import { Hero } from "#/components/hero";
import { client } from "#/integrations/sanity";

const ARTICLES_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  title,
  "slug": slug.current,
  description,
  publishedAt,
  tags
}`;

type SanityPost = {
  title: string;
  slug: string;
  description: string;
  publishedAt: string;
  tags: string[] | null;
};

const Home = async () => {
  const posts = await client.fetch<SanityPost[]>(ARTICLES_QUERY);

  const fetchedArticles: Article[] = posts.map((post) => ({
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
    <>
      <Hero />
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Typography variant="h4" component="h2" fontWeight={600} gutterBottom>
          Recent Articles
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Check out the latest posts published on the blog.
        </Typography>
        <Grid container spacing={3}>
          {fetchedArticles.map((article) => (
            <Grid key={article.slug} size={{ xs: 12, sm: 6, md: 4 }}>
              <ArticleCard article={article} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
