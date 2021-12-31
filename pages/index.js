import "tailwindcss/tailwind.css";
import Link from "next/link";
import { getAllPosts } from "./api/getAPI";

import nightTimePorch from "../public/img/nightTimePorch.jpg";

// https://jakeprins.com/blog/how-to-implement-netlify-cms-with-next-js
// https://github.com/vercel/next.js/blob/canary/examples/blog-starter/pages/index.js

// Figure out where errors come from the netlify cms.
// STRONG component is alittle sketchy right now.
// Fragmented sections also bizzaro

// DISPLAY H6 is a centered paragraph somewhere?
// Trip Advisor needs to be in the name

const HomePage = ({ posts }) => {
  const image = {
    src: nightTimePorch.src,
    alt: "Night Time Porch",
  };
  return (
    <>
      <h1>Main Page</h1>
      {/* <ul>
        {posts.map((post, index) => {
          return (
            <li key={index}>
              <Link href={`/posts/${post.slug}`}>
                <a>{post.post_title}</a>
              </Link>
            </li>
          );
        })}
      </ul> */}
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
