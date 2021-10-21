import fs from "fs";
import matter from "gray-matter";

function join(first, second) {
  return first + second;
}

const postsDirectory = join(process.cwd(), "/pages/posts\\[id]");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `/${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContents);
  return data;
}

export function getAllPosts() {
  const slugs = getPostSlugs();
  const markdownFiles = slugs.filter((slug) => {
    return slug.indexOf(".md") === slug.length - 3;
  });

  const posts = markdownFiles.map((slug) => {
    return getPostBySlug(slug);
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
