// Helper Checks
import { isValidHalfImage, isValidImage } from "../checks";

// Helper Functions
import isTripAdvisor from "./isTripAdvisor";
import randomNumber from "../../randomNumber";
import createTwoImageContainer from "./createTwoImageContainer";

// Components
import {
  RedLinkDomestic,
  RedLinkForeign,
} from "../../../../components/LinkComponents";
import { RedBallList, RedBall } from "../../../../components/ListComponents";
import {
  PageSubImage,
  TripAdvisor,
} from "../../../../components/ImageComponents";
import { RegularParagraph } from "../../../../components/TextComponents";

/**
 * @param {Element} child - Current element we have to make into a react component.
 * @param {Number} index - Index of the current child element.
 * @param {Array} children - All of the children elements on the page.
 * @returns React component.
 */
export function createImage(child, index, children) {
  const childsChildren = Array.from(child.children);

  // Check we aren't really using because
  // netlify cms images come as one child in a paragraph element.
  if (childsChildren.length === 1) {
    // Trip Advisor
    if (isTripAdvisor(childsChildren)) {
      const image = childsChildren[0];
      const { alt, src } = image;
      return <TripAdvisor src={src} alt={alt} />;
    }

    // Determine whether it is a pagesubhalfimage
    const prevElement = children[index - 1];
    const nextElement = children[index + 1];

    if (isValidHalfImage(prevElement, nextElement)) {
      // Create image container and images.
      const twoImages = createTwoImageContainer(child, nextElement);
      return twoImages;
    } else {
      const image = childsChildren[0];
      const { alt, src } = image;
      return <PageSubImage src={src} alt={alt} />;
    }
  } else {
    // We have to search for the the image
    // among the children. This is unlikely in the
    // netlify cms.
    // Determine whether it is a pagesubhalfimage
  }
}

/**
 * @param {Element} child - Current element we have to make into a react component.
 * @param {Number} index - Index of the current child element.
 * @param {Array} children - All of the children elements on the page.
 * @returns Paragraph element.
 *
 * Grabs all the children element and creates
 * properly formatted elements which will be used to
 * as the future children in our paragraph element.
 *
 * If the next element is also a paragraph we half the margin.
 */
export function createParagraph(child, index, children) {
  const childsChildren = Array.from(child.childNodes);
  const formattedChildren = childsChildren.map((element) => {
    const { nodeName } = element;
    if (nodeName === "#text") {
      const { nodeValue } = element;
      return nodeValue;
    } else if (nodeName === "A") {
      const link = createLink(element);
      return link;
    } else if (nodeName === "STRONG") {
      const { innerText } = element;
      return <strong key={randomNumber()}>{innerText}</strong>;
    }
  });

  const nextChild = children[index + 1];
  const center = child.nodeName === "H6";
  if (nextChild !== undefined && isValidImage(nextChild) === false) {
    return (
      <RegularParagraph smallMargin={true} center={center}>
        {formattedChildren}
      </RegularParagraph>
    );
  } else {
    return (
      <RegularParagraph center={center}>{formattedChildren}</RegularParagraph>
    );
  }
}

/**
 * @param {Element} anchor - Anchor element.
 * @returns React component.
 *
 * Determines whether or not we are creating
 * an anchor element using the next Link component
 * or regular anchor element.
 *
 * The random keys are used just to take away warnings.
 *
 * This will stay here instead of a helper function
 * because I'll probably have to use it as a separate entity
 * down the line.
 */
function createLink(anchor) {
  const { href, innerText } = anchor;

  if (href.includes("http")) {
    // Foreign Link
    return (
      <RedLinkForeign href={href} key={randomNumber()}>
        {innerText}
      </RedLinkForeign>
    );
  } else {
    // Domestic Link
    return (
      <RedLinkDomestic href={href} key={randomNumber()}>
        {innerText}
      </RedLinkDomestic>
    );
  }
}

export function createListComponent(child) {
  const children = Array.from(child.children);
  const items = children.map((item, index) => {
    const childNodes = Array.from(item.childNodes);
    const itemChildren = childNodes.map((element) => {
      const { nodeName } = element;
      if (nodeName === "#text") {
        const { nodeValue } = element;
        return nodeValue;
      } else if (nodeName === "A") {
        const link = createLink(element);
        return link;
      } else if (nodeName === "STRONG") {
        const { innerText } = element;
        return <strong key={randomNumber()}>{innerText}</strong>;
      } else if (nodeName === "EM") {
        const { innerText } = element;
        return <em key={randomNumber()}>{innerText}</em>;
      }
    });

    return (
      <li key={randomNumber()}>
        {index !== 0 && <RedBall />}
        {itemChildren}
      </li>
    );
  });
  return <RedBallList>{items}</RedBallList>;
}
