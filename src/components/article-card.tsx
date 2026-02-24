import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";

export type Article = {
  title: string;
  excerpt: string;
  date: string;
  tag: string;
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
      <Typography variant="caption" color="text.disabled" sx={{ mt: 2 }}>
        {article.date}
      </Typography>
    </CardContent>
  </Card>
);
