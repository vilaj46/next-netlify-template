// Helper Checks
import { isValidImage } from "./checks";
import { createImage, createParagraph, createListComponent } from "./creators";

// Components
import { PageSubTitle } from "../../../components/HeadingComponents";

/**
 * @param {Element} child - Current element we have to make into a react component.
 * @param {Number} index - Index of the current child element.
 * @param {Array} children - All of the children elements on the page.
 * @returns
 */
export default function createChildComponent(child, index, children) {
  // How we'll determine which element we have to create.
  const { nodeName } = child;

  if (nodeName === "H2") {
    const { innerText } = child;
    return <PageSubTitle>{innerText}</PageSubTitle>;
  } else if (nodeName === "P") {
    // Determine whether we are an image or not
    // since cms is making them paragraphs.
    const isImage = isValidImage(child);
    if (isImage) {
      const imageComponent = createImage(child, index, children);
      return imageComponent;
    } else {
      const paragraphComponent = createParagraph(child, index, children);
      return paragraphComponent;
    }
  } else if (nodeName === "UL") {
    const listComponent = createListComponent(child);
    return listComponent;
  } else if (nodeName === "H6") {
    const paragraphComponent = createParagraph(child, index, children);
    // return <p>h6!!</p>;
    return paragraphComponent;
  } else {
    return <p>Filler</p>; // Taking space for the ul currently.
  }
}
