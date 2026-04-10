import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "yourProjectId";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: "2024-04-01",
  useCdn: process.env.NODE_ENV === "production",
});

export const urlFor = (source: SanityImageSource) => imageUrlBuilder(sanityClient).image(source);
