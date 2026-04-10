export default {
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    { name: "title", title: "Titre", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 } },
    { name: "summary", title: "Résumé", type: "text" },
    { name: "details", title: "Détails", type: "text" },
    { name: "icon", title: "Icône", type: "string" },
  ],
};
