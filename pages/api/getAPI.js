import fs from "fs";
import matter from "gray-matter";

const pagesDirectory = join(process.cwd(), "/pages");
const postsDirectory = join(process.cwd(), "/pages/posts\\[id]");

/**
 * @param {String} first
 * @param {String} second
 * @returns adds two strings together.
 */
function join(first, second) {
  return first + second;
}

/**
 * Helper function which reads a local directory
 * and filters out the md files.
 * @param {String} directory
 * @returns Array of markdown files.
 */
function getMarkdownFilesInDirectory(directory) {
  const files = fs.readdirSync(directory);
  const markdownFiles = files.filter((file) => {
    return file.indexOf(".md") === file.length - 3;
  });
  return markdownFiles;
}

/**
 * Formats markdown file name then reads and makes into json.
 * @param {String} slug - File name / slug.
 * @param {String} directory Folder name .
 * @returns
 */
export function getMarkdownBySlug(slug, directory) {
  const realSlug = slug.replace(/\.md$/, "");

  if (directory === "pagesDirectory") {
    directory = pagesDirectory;
  } else {
    directory = postsDirectory;
  }

  const fullPath = join(directory, `/${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContents);
  return data;
}

/**
 * Retrives posts, formats them in date order.
 * @returns
 */
export function getAllPosts() {
  const markdownFiles = getMarkdownFilesInDirectory(postsDirectory);

  const posts = markdownFiles.map((slug) => {
    return getMarkdownBySlug(slug, postsDirectory);
  });

  const sortedDates = posts.sort((a, b) => {
    return b.date_published - a.date_published;
  });

  const dateToStringPosts = sortedDates.map((post) => {
    const { date_published } = post;
    return {
      ...post,
      date_published: `${date_published}`,
    };
  });

  return dateToStringPosts;
}
