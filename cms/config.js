export default {
  cms_manual_init: true,
  backend: {
    name: "github",
    repo: "vilaj46/next-netlify-template",
    branch: "main",
  },
  media_folder: "/public/img",
  public_folder: "/img",
  collections: [
    {
      name: "pages",
      label: "Pages",
      label_singular: "Page",
      description: "Pages to the website.",
      folder: "pages",
      create: true,
      slug: "{{fields.slug}}",
      fields: [
        {
          label: "Main Image",
          name: "mainImage",
          widget: "image",
          choose_url: true,
        },
        {
          label: "Page Title",
          name: "pageTitle",
          widget: "string",
        },
        {
          label: "Post Body",
          name: "postBody",
          widget: "markdown",
        },
        {
          label: "Slug",
          name: "slug",
          required: true,
          widget: "string",
          pattern: [
            "^[a-z0-9]+(?:-[a-z0-9]+)*$",
            "A slug can have no spaces or special characters",
          ],
          hint: ">- The post URL (do not include folder or file extension)",
        },
        {
          label: "Test Widget",
          name: "test",
          widget: "test",
        },
      ],
    },
    {
      name: "posts",
      label: "Posts",
      label_singular: "Post",
      description: "The description is a great place for tone setting.",
      folder: "pages/posts/[id]",
      create: true,
      slug: "{{fields.slug}}",
      fields: [
        {
          label: "Post Title",
          name: "post_title",
          widget: "string",
        },
        {
          label: "Custom One",
          name: "custom_one",
          widget: "customone",
        },
        {
          label: "Post Body",
          name: "post_body",
          widget: "markdown",
        },
        {
          label: "Tags",
          name: "tags",
          widget: "list",
          default: ["news"],
        },
        {
          label: "Slug",
          name: "slug",
          required: true,
          widget: "string",
          pattern: [
            "^[a-z0-9]+(?:-[a-z0-9]+)*$",
            "A slug can have no spaces or special characters",
          ],
          hint: ">- The post URL (do not include folder or file extension)",
        },
        {
          label: "Snippet",
          name: "snippet",
          required: true,
          widget: "string",
          hint: ">- Used on the main page to describe what the post is about.",
        },
        {
          label: "Date Published",
          name: "date_published",
          required: true,
          widget: "date",
        },
      ],
    },
  ],
};
