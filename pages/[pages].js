import { useRouter } from "next/router";
import { getMarkdownData } from "./api/staticPropsAPI";
import loadingAPI from "./api/loadingAPI";

import { getDefaultStaticPaths } from "./api/staticPropsAPI";
import createMarkup from "./api/createMarkup";

// Components
import Logo from "../components/Logo";
import MainImage from "../components/MainImage";
import PageTitle from "../components/PageTitle";

import logo from "../public/img/logo.png";

// const CreatedPages = ({ data, mainImage, pageTitle }) => {
const CreatedPages = (props) => {
  const { mainImage, pageTitle, postBody, data } = props;
  const router = useRouter();
  const { asPath } = router;

  const loaded = loadingAPI(data, router);
  if (loaded !== undefined) {
    return <loaded />;
  }

  const image = {
    src: mainImage,
    alt: "testing alt",
  };

  return (
    <>
      <Logo image={{ src: logo.src, alt: "Union Gables Inn Logo" }} />
      {mainImage && <MainImage image={image} />}
      <PageTitle>{pageTitle}</PageTitle>
      <div dangerouslySetInnerHTML={createMarkup(data)}></div>
      <div>aaaa</div>
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
