export default {
  cms_manual_init: true,
  backend: {
    name: "github",
    repo: "vilaj46/next-netlify-template",
    branch: "main",
  },
  media_folder: "public/img",
  public_folder: "img",
  collections: [
    {
      name: "pages",
      label: "Pages",
      label_singular: "Page",
      description: "The description is a great place for tone setting.",
      folder: "/content/pages",
      create: true,
      slug: "{{slug}}",
      // slug: "{{year}}-{{month}}-{{day}}_{{slug}}",
      create: true,
      fields: [
        {
          label: "Hero Title",
          name: "hero_title",
          widget: "string",
        },
        {
          label: "Hero Description",
          name: "hero_description",
          widget: "markdown",
        },
        {
          label: "Slug",
          name: "slug",
          required: true,
          widget: "string",
          // pattern: [
          //   "^[a-z0-9]+(?:-[a-z0-9]+)*$",
          //   "A slug can have no spaces or special characters",
          // ],
          // hint: ">- The post URL (do not include folder or file extension)",
        },
      ],
    },
    {
      name: "posts",
      label: "Posts",
      label_singular: "Post",
      description: "The description is a great place for tone setting.",
      folder: "pages/posts",
      create: true,
      slug: "{{slug}}",
      // slug: "{{year}}-{{month}}-{{day}}_{{slug}}",
      create: true,
      fields: [
        {
          label: "Hero Title",
          name: "hero_title",
          widget: "string",
        },
        {
          label: "Hero Description",
          name: "hero_description",
          widget: "markdown",
        },
        {
          label: "Slug",
          name: "slug",
          required: true,
          widget: "string",
          // pattern: [
          //   "^[a-z0-9]+(?:-[a-z0-9]+)*$",
          //   "A slug can have no spaces or special characters",
          // ],
          // hint: ">- The post URL (do not include folder or file extension)",
        },
      ],
    },
  ],
};
