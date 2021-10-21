import "tailwindcss/tailwind.css";
import Link from "next/link";
import { getAllPosts } from "./api/getAPI";

// https://jakeprins.com/blog/how-to-implement-netlify-cms-with-next-js
// https://github.com/vercel/next.js/blob/canary/examples/blog-starter/pages/index.js

const HomePage = ({ posts }) => {
  posts.forEach((post) => {
    console.log(post);
  });
  return (
    <>
      <h1>Main Page</h1>
      <ul>
        {posts.map((post, index) => {
          return (
            <li key={index}>
              <Link href={`posts/${post.slug}`}>
                <a>{post.post_title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export const getStaticProps = async () => {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
  };
};

export default HomePage;
