import { useRouter } from "next/router";
import "tailwindcss/tailwind.css";
import markdownToHtml from "../../api/markdownToHtml";
import { getPostBySlug } from "../../api/getAPI";

import Custom404 from "../../404.js";

const Post = ({ data = {} }) => {
  const router = useRouter();
  const { id } = router.query;

  if (Object.keys(data).includes("error") === true) {
    // Redirect to 404 page.
    try {
      router.push("/404");
    } catch {
      return <Custom404 />;
    }
  }

  function createMarkup(html) {
    return { __html: html };
  }

  return (
    <>
      <h1>Post: {id}</h1>
      <div dangerouslySetInnerHTML={createMarkup(data)}></div>
    </>
  );
};

export async function getStaticProps(context) {
  try {
    const post = getPostBySlug(context.params.id);
    const { post_body } = post;
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

// Needed by framework but does not provide any value right now.
export async function getStaticPaths() {
  try {
    return {
      paths: [{ params: { id: "1" } }],
      fallback: true,
    };
  } catch {
    return {};
  }
}

export default Post;
