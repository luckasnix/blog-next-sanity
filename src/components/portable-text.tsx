import {
  PortableText as PortableTextReact,
  type PortableTextBlock,
  type PortableTextComponents,
} from "@portabletext/react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import { urlFor } from "#/integrations/sanity";

export type SanityImage = {
  _type: "image";
  _key: string;
  asset: { _ref: string };
  alt?: string;
  caption?: string;
};

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <Typography variant="body1" paragraph>
        {children}
      </Typography>
    ),
    h2: ({ children }) => (
      <Typography
        variant="h4"
        component="h2"
        fontWeight={600}
        sx={{ mt: 4, mb: 2 }}
      >
        {children}
      </Typography>
    ),
    h3: ({ children }) => (
      <Typography
        variant="h5"
        component="h3"
        fontWeight={600}
        sx={{ mt: 3, mb: 1.5 }}
      >
        {children}
      </Typography>
    ),
    h4: ({ children }) => (
      <Typography
        variant="h6"
        component="h4"
        fontWeight={600}
        sx={{ mt: 2, mb: 1 }}
      >
        {children}
      </Typography>
    ),
    blockquote: ({ children }) => (
      <Box
        component="blockquote"
        sx={{
          borderLeft: 4,
          borderColor: "primary.main",
          pl: 3,
          py: 1,
          my: 2,
          bgcolor: "grey.50",
          borderRadius: 1,
          fontStyle: "italic",
        }}
      >
        <Typography variant="body1" color="text.secondary">
          {children}
        </Typography>
      </Box>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <Box component="ul" sx={{ pl: 3, mb: 2 }}>
        {children}
      </Box>
    ),
    number: ({ children }) => (
      <Box component="ol" sx={{ pl: 3, mb: 2 }}>
        {children}
      </Box>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <Typography component="li" variant="body1" sx={{ mb: 0.5 }}>
        {children}
      </Typography>
    ),
    number: ({ children }) => (
      <Typography component="li" variant="body1" sx={{ mb: 0.5 }}>
        {children}
      </Typography>
    ),
  },
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    underline: ({ children }) => <u>{children}</u>,
    "strike-through": ({ children }) => <s>{children}</s>,
    code: ({ children }) => (
      <Box
        component="code"
        sx={{
          bgcolor: "grey.100",
          px: 0.75,
          py: 0.25,
          borderRadius: 0.5,
          fontFamily: "monospace",
          fontSize: "0.875em",
        }}
      >
        {children}
      </Box>
    ),
    link: ({ children, value }) => (
      <Link
        href={value?.href}
        target={value?.blank ? "_blank" : undefined}
        rel={value?.blank ? "noopener noreferrer" : undefined}
      >
        {children}
      </Link>
    ),
  },
  types: {
    image: ({ value }: { value: SanityImage }) => (
      <Box sx={{ my: 3, textAlign: "center" }}>
        <Box
          component="img"
          src={urlFor(value).width(800).auto("format").url()}
          alt={value.alt ?? ""}
          sx={{
            maxWidth: "100%",
            height: "auto",
            borderRadius: 2,
          }}
        />
        {value.caption && (
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ mt: 1, display: "block" }}
          >
            {value.caption}
          </Typography>
        )}
      </Box>
    ),
  },
};

export type PortableTextProps = {
  value: PortableTextBlock[];
};

export const PortableText = ({ value }: PortableTextProps) => (
  <PortableTextReact value={value} components={components} />
);
