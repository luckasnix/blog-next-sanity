import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export const Hero = () => (
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
          Articles about web development, technology, and software engineering
          best practices.
        </Typography>
        <Button
          href="/explore"
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
);
