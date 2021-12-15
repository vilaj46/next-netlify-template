import "tailwindcss/tailwind.css";
import { useRouter } from "next/router";

import loadingAPI from "../../api/loadingAPI";
import createMarkup from "../../api/createMarkup";

import {
  getDefaultStaticPaths,
  getMarkdownData,
} from "../../api/staticPropsAPI";

const Post = ({ data = {} }) => {
  const router = useRouter();
  const { id } = router.query;

  const loaded = loadingAPI(data, router);
  if (loaded !== undefined) {
    return <loaded />;
  }

  return (
    <>
      <h1>Post: {id}</h1>
      <div dangerouslySetInnerHTML={createMarkup(data)}></div>
    </>
  );
};

export async function getStaticProps(context) {
  const postData = getMarkdownData(context, "post");
  return postData;
}

// Needed by framework but does not provide any value right now.
export async function getStaticPaths() {
  return getDefaultStaticPaths();
}

export default Post;
