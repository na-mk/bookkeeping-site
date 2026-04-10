export default {
  name: "blogPost",
  title: "Article",
  type: "document",
  fields: [
    { name: "title", title: "Titre", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 } },
    { name: "excerpt", title: "Extrait", type: "text" },
    { name: "publishedAt", title: "Date de publication", type: "datetime" },
    { name: "author", title: "Auteur", type: "object", fields: [{ name: "name", title: "Nom", type: "string" }] },
    { name: "mainImage", title: "Image principale", type: "image" },
    { name: "body", title: "Contenu", type: "array", of: [{ type: "block" }, { type: "image" }] },
  ],
};
