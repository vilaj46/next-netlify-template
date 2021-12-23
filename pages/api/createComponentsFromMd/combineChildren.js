// Components
import {
  RedLinkDomestic,
  RedLinkForeign,
} from "../../../components/LinkComponents";
import { PageSubImage } from "../../../components/ImageComponents";
import { PageSubTitle } from "../../../components/HeadingComponents";
import { RegularParagraph } from "../../../components/TextComponents";

// Helper functions
import randomNumber from "../randomNumber";

export default function combineChildren(childNodes) {
  const nodes = Array.from(childNodes);
  // Headers and paragraph elements starting with #text so far.
  // Look at the parentElement if the first index is #text.

  // What type of element all of the children are in.
  const containerElement = getParentElement(nodes[0]);

  const containerChildren = createChildren(nodes);

  // Children are not being replaced so
  // we just take the first one.
  if (containerElement.type.name === "PageSubImage") {
    return containerChildren[0];
  } else {
    // Returning the regular paragraph component.
    return () => ({
      ...containerElement,
      props: {
        ...containerElement.props,
        children: containerChildren,
      },
    });
  }
}

function createChildren(nodes) {
  return nodes.map((node) => {
    const { nodeName } = node;
    if (nodeName === "#text") {
      const { nodeValue } = node;
      return nodeValue;
    } else if (nodeName === "A") {
      return createLink(node);
    } else if (nodeName === "IMG") {
      const { alt, src } = node;
      return <PageSubImage src={src} alt={alt} />;
    }
  });
}

function createLink(node) {
  const { href, innerText } = node;
  // outside address, don't use the Link component.
  if (href.includes("http")) {
    return <RedLinkForeign href={href}>{innerText}</RedLinkForeign>;
  } else {
    return <RedLinkDomestic href={href}>{innerText}</RedLinkDomestic>;
  }
}

function getParentElement(firstNode) {
  // First appearance of the element
  // where we can access the real parentElement.
  const { parentElement, nodeName } = firstNode;
  const { tagName } = parentElement;

  // If firstNode is an img, it is not a <p>
  // Currently we are returning a <p> for the image tag.
  if (nodeName === "IMG") {
    return <PageSubImage />;
  } else if (tagName === "P") {
    return <RegularParagraph></RegularParagraph>;
  } else if (tagName === "H2") {
    // return <h2></h2>;
    return <PageSubTitle></PageSubTitle>;
  }
}
