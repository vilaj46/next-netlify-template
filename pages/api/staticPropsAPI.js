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
    const { postBody } = markdown;
    const data = await markdownToHtml(postBody);

    return {
      props: {
        ...markdown,
        data,
        loadingError: false,
      },
    };
  } catch {
    return {
      props: {
        loadingError: true,
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
