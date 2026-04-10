import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schema";

export default defineConfig({
  projectId: "yourProjectId",
  dataset: "production",
  title: "Bookkeeping Site CMS",
  apiVersion: "2024-04-01",
  basePath: "/studio",
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
});
