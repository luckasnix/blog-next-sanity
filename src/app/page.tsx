import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { type Article, ArticleCard } from "#/components/article-card";
import { Hero } from "#/components/hero";

const articles: Article[] = [
  {
    title: "Getting Started with Next.js 16",
    excerpt:
      "Discover what's new in Next.js 16 and how it can transform your web projects with performance and simplicity.",
    date: "Feb 20, 2026",
    tag: "Next.js",
  },
  {
    title: "Material UI: A Practical Guide",
    excerpt:
      "Learn how to use Material UI components to build modern and accessible interfaces quickly.",
    date: "Feb 15, 2026",
    tag: "Material UI",
  },
  {
    title: "TypeScript for Beginners",
    excerpt:
      "A comprehensive introduction to TypeScript and why it's essential for scalable front-end projects.",
    date: "Feb 10, 2026",
    tag: "TypeScript",
  },
  {
    title: "Headless CMS with Sanity",
    excerpt:
      "See how to integrate Sanity CMS into your Next.js project and create a blog with dynamic content.",
    date: "Feb 5, 2026",
    tag: "Sanity",
  },
  {
    title: "Deploy to Vercel in 5 Minutes",
    excerpt:
      "A step-by-step guide to publishing your Next.js app on Vercel with a custom domain and automatic CI/CD.",
    date: "Feb 1, 2026",
    tag: "DevOps",
  },
  {
    title: "React Server Components in Practice",
    excerpt:
      "Understand how Server Components work and when to use them to optimize your React application.",
    date: "Jan 28, 2026",
    tag: "React",
  },
];

const Home = () => (
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
        {articles.map((article) => (
          <Grid key={article.title} size={{ xs: 12, sm: 6, md: 4 }}>
            <ArticleCard article={article} />
          </Grid>
        ))}
      </Grid>
    </Container>
  </>
);

export default Home;
