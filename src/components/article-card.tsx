import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export type Article = {
  title: string;
  slug: string;
  description: string;
  date: string;
  tags: string[];
};

export type ArticleCardProps = {
  article: Article;
};

export const ArticleCard = ({ article }: ArticleCardProps) => (
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
    <CardActionArea
      href={`/articles/${article.slug}`}
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
      }}
    >
      <CardContent
        sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
      >
        <Stack direction="row" spacing={1} sx={{ mb: 1.5, flexWrap: "wrap" }}>
          {article.tags.map((tag) => (
            <Chip key={tag} label={tag} size="small" color="primary" />
          ))}
        </Stack>
        <Typography variant="h6" component="h3" gutterBottom>
          {article.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ flexGrow: 1 }}
        >
          {article.description}
        </Typography>
        <Typography variant="caption" color="text.disabled" sx={{ mt: 2 }}>
          {article.date}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);
