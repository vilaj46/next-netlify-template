import Link from "next/link";
import { useRouter } from "next/router";

import loadingAPI from "./api/loadingAPI";
import createComponents from "./api/createComponents";
import { getMarkdownData } from "./api/staticPropsAPI";
import { getDefaultStaticPaths } from "./api/staticPropsAPI";

// Components
import Logo from "../components/Logo";
import MainImage from "../components/MainImage";
import PageTitle from "../components/PageTitle";
import CenterContainer from "../components/CenterContainer";

// Images
import logo from "../public/img/logo.png";

const CreatedPages = (props) => {
  const { mainImage, pageTitle, data, loadingError } = props;
  const router = useRouter();
  const { asPath } = router;

  const loaded = loadingAPI(loadingError, router);
  if (loaded !== undefined) {
    return <loaded />;
  }

  const image = {
    src: mainImage,
    alt: "testing alt",
  };

  const components = createComponents(data);

  return (
    <>
      <Logo image={{ src: logo.src, alt: "Union Gables Inn Logo" }} />
      {mainImage && <MainImage image={image} />}
      <PageTitle>{pageTitle}</PageTitle>

      <CenterContainer>
        {components.map((component, index) => {
          return (
            <HigherOrder
              component={component}
              index={index}
              key={Math.floor(Math.random() * 100000)}
            />
          );
        })}
      </CenterContainer>
    </>
  );
};

function HigherOrder({ component: Component, index }) {
  return <Component key={index} index={index} />;
}

export const getStaticProps = async (context) => {
  const pageData = getMarkdownData(context, "page");
  return pageData;
};

export async function getStaticPaths() {
  return getDefaultStaticPaths();
}

export default CreatedPages;
