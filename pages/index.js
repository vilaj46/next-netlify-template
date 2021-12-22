import "tailwindcss/tailwind.css";
import Link from "next/link";
import { getAllPosts } from "./api/getAPI";

import nightTimePorch from "../public/img/nightTimePorch.jpg";

// https://jakeprins.com/blog/how-to-implement-netlify-cms-with-next-js
// https://github.com/vercel/next.js/blob/canary/examples/blog-starter/pages/index.js

// Create custom tj components.

// Hook up Page Title on the html title/tab.
// Post Body heading tag needs to be a custom component.

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

// export function MainImage({ image }) {
//   return (
//     <div className="w-full h-full lg:h-192 bg-cover bg-center object-cover overflow-hidden">
//       <img
//         src={image.src}
//         alt={image.alt}
//         className="w-full bg-cover bg-center object-cover"
//       />
//     </div>
//   );
// }

export const getStaticProps = async () => {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
  };
};

export default HomePage;
