import { getMarkdownBySlug } from "./getAPI";
import markdownToHtml from "./markdownToHtml";

/**
 * Depending on page or post we use the parameters
 * to obtain the markdown data.
 * @param {Object} context
 * @param {String} type
 * @returns Object with needed data.
 */
export async function getMarkdownData(context, type) {
  try {
    let identifier;
    let location;
    if (type === "post") {
      identifier = context.params.id;
      location = "postsDirectory";
    } else {
      identifier = context.params.pages;
      location = "pagesDirectory";
    }

    const markdown = getMarkdownBySlug(identifier, location);
    const { post_body } = markdown;
    const data = await markdownToHtml(post_body);

    return {
      props: { data }, // will be passed to the page component as props
    };
  } catch {
    return {
      props: {
        data: {
          error: true,
        },
      },
    };
  }
}

export function getDefaultStaticPaths() {
  try {
    return {
      paths: [],
      fallback: true,
    };
  } catch {
    return {};
  }
}
