import Link from "next/link";

// Components
import RedLink from "../../components/RedLink";
import PageSubImage from "../../components/PageSubImage";

/**
 * @param {String} htmlString
 * @returns Array of react components.
 *
 * Iterate over the given children, usually a <p>.
 * Extract the children and create react components.
 *
 * FUTURE:
 * I don't like how the STRONG element is played out.
 *
 * Figure out where to place classNames.
 * <Strong>elements...</strong> works but <a><strong>... wont work.
 *
 * Maybe replace randNumber with an id library.
 */
function createComponents(htmlString) {
  try {
    // Creates an html document from the markdown string.
    const doc = new DOMParser().parseFromString(htmlString, "text/html");

    // Selects the body's children
    const { children } = doc.children[0].children[1];

    // All the children in the body as an array.
    const childrenArray = Array.from(children);

    // Iterate through the childrens array.
    const components = childrenArray.map((element, index) => {
      const { childNodes } = element;

      // Iterate over the children of the child we are going through.
      // Combine them into a single react component.
      const childNodesArray = Array.from(childNodes);

      const componentChildren = childNodesArray.map((child) => {
        const { nodeName } = child;
        if (nodeName === "#text") {
          return getParagrahText(child);
        } else if (nodeName === "A") {
          return createLinkComponent(child);
        } else if (nodeName === "STRONG") {
          // Dive into the children to get the link as well.
          const strongNodesArray = Array.from(child.children);

          // Iterate over the children and create a strong component.
          const strongChildren = strongNodesArray.map((child) => {
            const { nodeName } = child;
            if (nodeName === "#text") {
              return getParagrahText(child);
            } else if (nodeName === "A") {
              return createLinkComponent(child);
            }
          });
          return createNewComponent(<strong></strong>, strongChildren);
        } else if (nodeName === "IMG") {
          return createImageComponent(child);
        }
      });

      // Getting an error, element type is invalid: expected a string.
      // By making this a function makes it a react component.
      return () => createNewComponent(<p></p>, componentChildren);
    });
    return components;
  } catch {
    return [];
  }
}

function createImageComponent(child) {
  const { src, alt } = child;
  return <PageSubImage src={src} alt={alt} key={randNumber()} />;
}

/**
 * @param {Element} element
 * @param {Array} children
 * @returns React Component
 *
 * We need to add all the children together into one React Component.
 * It is either going to be a <p> or an <a>. We create a new
 * blank element for all of the properties and then replace
 * the children we've already created.
 */
function createNewComponent(element, children) {
  const tempComponent = element;
  const newComponent = {
    ...tempComponent,
    props: {
      ...tempComponent.props,
      children,
    },
    key: randNumber(),
  };
  return newComponent;
}

/**
 * @param {Element} child // Not quite an html element, #text.
 * @returns String of the innerText/innerHTML.
 *
 * Retrieves and returns the partial text of the paragraph element.
 */
function getParagrahText(child) {
  const { nodeValue } = child;
  return nodeValue;
}

/**
 * @param {Element} child
 * @returns Link Component
 *
 * Given an anchor tag, creates a NextJS Link component.
 */
function createLinkComponent(child) {
  const { pathname, innerText } = child;
  return (
    <RedLink href={pathname} key={randNumber()}>
      {innerText}
    </RedLink>
  );
}

/**
 * @returns Number
 *
 * Randomizes and rounds a number out of a billion.
 */
function randNumber() {
  return Math.floor(Math.random() * 1000000000);
}

export default createComponents;
