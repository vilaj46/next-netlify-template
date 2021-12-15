import remarkHtml from "remark-html";
import remarkParse from "remark-parse";
import { unified } from "unified";

/**
 * Turns markdown into html with libraries.
 * @param {String} markdown
 * @returns
 */
export default async function markdownToHtml(markdown) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(markdown);

  const { value } = result;
  return value;
}
