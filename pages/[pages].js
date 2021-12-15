import { useRouter } from "next/router";
import { getMarkdownData } from "./api/staticPropsAPI";
import loadingAPI from "./api/loadingAPI";

import { getDefaultStaticPaths } from "./api/staticPropsAPI";
import createMarkup from "./api/createMarkup";

const CreatedPages = ({ data }) => {
  const router = useRouter();
  const { asPath } = router;

  console.log(data);

  const loaded = loadingAPI(data, router);
  if (loaded !== undefined) {
    return <loaded />;
  }

  return (
    <>
      <h1>Page: {asPath}</h1>
      <div dangerouslySetInnerHTML={createMarkup(data)}></div>
    </>
  );
};

export const getStaticProps = async (context) => {
  const pageData = getMarkdownData(context, "page");
  return pageData;
};

export async function getStaticPaths() {
  return getDefaultStaticPaths();
}

export default CreatedPages;
