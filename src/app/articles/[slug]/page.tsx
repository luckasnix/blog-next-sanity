import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { PortableTextBlock } from "@portabletext/react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PortableText } from "#/components/portable-text";
import { client, urlFor } from "#/integrations/sanity";

const ARTICLE_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  title,
  "slug": slug.current,
  description,
  coverImage,
  "date": publishedAt,
  tags,
  body
}`;

type SanityArticle = {
  title: string;
  slug: string;
  description: string;
  coverImage?: {
    asset: { _ref: string };
    alt?: string;
  };
  date: string;
  tags: string[] | null;
  body: PortableTextBlock[];
};

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export const generateMetadata = async ({
  params,
}: ArticlePageProps): Promise<Metadata> => {
  const { slug } = await params;
  const article = await client.fetch<SanityArticle | null>(ARTICLE_QUERY, {
    slug,
  });

  if (!article) return { title: "Article not found" };

  return {
    title: article.title,
    description: article.description,
  };
};

const ArticlePage = async ({ params }: ArticlePageProps) => {
  const { slug } = await params;
  const article = await client.fetch<SanityArticle | null>(ARTICLE_QUERY, {
    slug,
  });

  if (!article) notFound();

  const formattedDate = new Date(article.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Container maxWidth="md" sx={{ py: { xs: 4, md: 8 } }}>
      <Button
        href="/"
        startIcon={<ArrowBackIcon />}
        sx={{ mb: 3 }}
      >
        Back to home
      </Button>
      {article.coverImage?.asset && (
        <Box
          component="img"
          src={urlFor(article.coverImage).width(960).auto("format").url()}
          alt={article.coverImage.alt ?? article.title}
          sx={{
            width: "100%",
            height: "auto",
            maxHeight: 440,
            objectFit: "cover",
            borderRadius: 2,
            mb: 4,
          }}
        />
      )}
      <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: "wrap" }}>
        {article.tags?.map((tag) => (
          <Chip key={tag} label={tag} size="small" color="primary" />
        ))}
      </Stack>
      <Typography variant="h3" component="h1" fontWeight={700} gutterBottom>
        {article.title}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
        {article.description}
      </Typography>
      <Typography variant="caption" color="text.disabled">
        {formattedDate}
      </Typography>
      <Divider sx={{ my: 4 }} />
      {article.body && <PortableText value={article.body} />}
    </Container>
  );
};

export default ArticlePage;
