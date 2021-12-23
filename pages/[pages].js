import { useRouter } from "next/router";

import loadingAPI from "./api/loadingAPI";
import randomNumber from "./api/randomNumber";
import { getMarkdownData } from "./api/staticPropsAPI";
// import createComponents from "./api/createComponents";
import { getDefaultStaticPaths } from "./api/staticPropsAPI";
import createComponentsFromMd from "./api/createComponentsFromMd";

// Components
import { Logo } from "../components/ImageComponents";
import { MainImage } from "../components/ImageComponents";
import { PageTitle } from "../components/HeadingComponents";
import { CenterContainer } from "../components/ContainerComponents";

// Images
import logo from "../public/img/logo.png";

const CreatedPages = (props) => {
  const { mainImage, pageTitle, data, loadingError } = props;
  const router = useRouter();

  const loaded = loadingAPI(loadingError, router);
  if (loaded !== undefined) {
    return <loaded />;
  }

  const image = {
    src: mainImage,
    alt: "testing alt",
  };

  // const components = createComponents(data);
  const components = createComponentsFromMd(data);

  return (
    <>
      <Logo image={{ src: logo.src, alt: "Union Gables Inn Logo" }} />
      {mainImage && <MainImage image={image} />}
      <PageTitle>{pageTitle}</PageTitle>

      <CenterContainer>
        {components.map((component, index) => {
          return (
            <HigherOrder
              index={index}
              component={component}
              key={randomNumber()}
            />
          );
        })}
      </CenterContainer>
    </>
  );
};

function HigherOrder({ component: Component, index }) {
  if (typeof Component === "function") {
    return Component();
  } else {
    return Component; // Most likely an image component.
  }
}

export const getStaticProps = async (context) => {
  const pageData = getMarkdownData(context, "page");
  return pageData;
};

export async function getStaticPaths() {
  return getDefaultStaticPaths();
}

export default CreatedPages;
