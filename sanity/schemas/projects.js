export default {
  name: "projects",
  type: "document",
  title: "Projects",
  fields: [
    { name: "title", type: "string", title: "Title" },
    { name: "tag", type: "string", title: "Tag" },
    { name: "description", type: "string", title: "Description" },
    {
      name: "img",
      type: "image",
      title: "Image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
    { name: "live", type: "url", title: "Live" },
    { name: "repo", type: "url", title: "Repo" },
    {
      name: "tags",
      type: "array",
      title: "Tags",
      of: [{ type: "string", title: "Tag" }],
    },
  ],
};
