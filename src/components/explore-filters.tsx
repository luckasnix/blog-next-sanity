"use client";
import { useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";

type ExploreFiltersProps = {
  tags: string[];
};

export const ExploreFilters = ({ tags }: ExploreFiltersProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentSearch = searchParams.get("search") ?? "";
  const currentTag = searchParams.get("tag") ?? "";

  const updateParams = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());

      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }

      const query = params.toString();
      router.push(query ? `/explore?${query}` : "/explore");
    },
    [router, searchParams],
  );

  return (
    <Stack spacing={3}>
      <TextField
        placeholder="Search articles..."
        defaultValue={currentSearch}
        onChange={(e) => updateParams("search", e.target.value)}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          },
        }}
        fullWidth
      />
      {tags.length > 0 && (
        <Stack spacing={1}>
          <Typography variant="subtitle2" color="text.secondary">
            Filter by tag
          </Typography>
          <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", gap: 1 }}>
            {tags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                color={tag === currentTag ? "primary" : "default"}
                variant={tag === currentTag ? "filled" : "outlined"}
                onClick={() =>
                  updateParams("tag", tag === currentTag ? "" : tag)
                }
              />
            ))}
          </Stack>
        </Stack>
      )}
    </Stack>
  );
};
