import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { type Article, ArticleCard } from "#/components/article-card";
import { Hero } from "#/components/hero";

const articles: Article[] = [
  {
    title: "Getting Started with Next.js 16",
    slug: "getting-started-with-nextjs-16",
    description:
      "Discover what's new in Next.js 16 and how it can transform your web projects with performance and simplicity.",
    date: "Feb 20, 2026",
    tags: ["Next.js"],
  },
  {
    title: "Material UI: A Practical Guide",
    slug: "material-ui-a-practical-guide",
    description:
      "Learn how to use Material UI components to build modern and accessible interfaces quickly.",
    date: "Feb 15, 2026",
    tags: ["Material UI"],
  },
  {
    title: "TypeScript for Beginners",
    slug: "typescript-for-beginners",
    description:
      "A comprehensive introduction to TypeScript and why it's essential for scalable front-end projects.",
    date: "Feb 10, 2026",
    tags: ["TypeScript"],
  },
  {
    title: "Headless CMS with Sanity",
    slug: "headless-cms-with-sanity",
    description:
      "See how to integrate Sanity CMS into your Next.js project and create a blog with dynamic content.",
    date: "Feb 5, 2026",
    tags: ["Sanity", "Next.js"],
  },
  {
    title: "Deploy to Vercel in 5 Minutes",
    slug: "deploy-to-vercel-in-5-minutes",
    description:
      "A step-by-step guide to publishing your Next.js app on Vercel with a custom domain and automatic CI/CD.",
    date: "Feb 1, 2026",
    tags: ["DevOps", "Vercel"],
  },
  {
    title: "React Server Components in Practice",
    slug: "react-server-components-in-practice",
    description:
      "Understand how Server Components work and when to use them to optimize your React application.",
    date: "Jan 28, 2026",
    tags: ["React"],
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
          <Grid key={article.slug} size={{ xs: 12, sm: 6, md: 4 }}>
            <ArticleCard article={article} />
          </Grid>
        ))}
      </Grid>
    </Container>
  </>
);

export default Home;
