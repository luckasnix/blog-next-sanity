import { createClient,  } from "next-sanity";
import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";

export const client = createClient({
  projectId: "k7fq1ji7",
  dataset: "production",
  apiVersion: "2026-02-24",
  useCdn: false,
});

const builder = createImageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => builder.image(source);
