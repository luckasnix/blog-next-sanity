import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

type Article = {
  title: string;
  excerpt: string;
  date: string;
  tag: string;
};

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

export default function Home() {
  return (
    <>
      <Box
        sx={{
          bgcolor: "primary.main",
          color: "primary.contrastText",
          py: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="md">
          <Stack spacing={2} alignItems="center" textAlign="center">
            <AutoStoriesIcon sx={{ fontSize: 56 }} />
            <Typography variant="h3" component="h1" fontWeight={700}>
              Welcome to the Blog
            </Typography>
            <Typography variant="h6" component="p" sx={{ opacity: 0.85 }}>
              Articles about web development, technology, and software
              engineering best practices.
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              sx={{ mt: 2 }}
            >
              Explore articles
            </Button>
          </Stack>
        </Container>
      </Box>
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
              <Card
                variant="outlined"
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "box-shadow 0.2s",
                  "&:hover": { boxShadow: 4 },
                }}
              >
                <CardContent
                  sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
                >
                  <Chip
                    label={article.tag}
                    size="small"
                    color="primary"
                    sx={{ alignSelf: "flex-start", mb: 1.5 }}
                  />
                  <Typography variant="h6" component="h3" gutterBottom>
                    {article.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ flexGrow: 1 }}
                  >
                    {article.excerpt}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.disabled"
                    sx={{ mt: 2 }}
                  >
                    {article.date}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
