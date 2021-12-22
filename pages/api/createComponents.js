import Link from "next/link";

// Components
import RedLink from "../../components/RedLink";
import PageSubTitle from "../../components/PageSubTitle";
import PageSubImage from "../../components/PageSubImage";
import PageSubHalfImage from "../../components/PageSubHalfImage";
import TwoImagesContainer from "../../components/TwoImagesContainer";

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

    const combinations = {};

    // Iterate through the childrens array.
    const components = childrenArray.map((element, index) => {
      const { childNodes } = element;

      // Iterate over the children of the child we are going through.
      // Combine them into a single react component.
      const childNodesArray = Array.from(childNodes);

      const componentChildren = childNodesArray.map((child) => {
        const { nodeName, parentNode } = child;
        if (nodeName === "#text") {
          if (parentNode.nodeName === "P") {
            return getParagrahText(child);
          } else if (parentNode.nodeName === "H2") {
            return createSubTitleComponent(child);
          }
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
          try {
            const nextElement = childrenArray[index + 1];
            const { firstChild } = nextElement;
            const nextNodeName = firstChild.nodeName;
            if (nextNodeName === "IMG") {
              combinations[index] = index + 1;
            }
          } catch {
            // do nothing.
          }

          return createImageComponent(child);
        }
      });

      // Getting an error, element type is invalid: expected a string.
      // By making this a function makes it a react component.
      const newCompElement = getElementForNewComponent(componentChildren);
      return () => createNewComponent(newCompElement, componentChildren);
    });

    const combinationKeys = Object.keys(combinations);

    combinationKeys.forEach((k) => {
      // Component we are going to combine to
      const component1 = components[k]();
      const component2 = components[combinations[k]]();

      // Combine the two image components.
      const c1Src = component1.props.children[0].props.src;
      const c1Alt = component1.props.children[0].props.alt;
      const c2Src = component2.props.children[0].props.src;
      const c2Alt = component2.props.children[0].props.alt;

      const newComponent1 = createImageComponent(
        { src: c1Src, alt: c1Alt },
        "half"
      );

      const newComponent2 = createImageComponent(
        { src: c2Src, alt: c2Alt },
        "half"
      );

      const imageContainer = (
        <TwoImagesContainer>
          {newComponent1}
          {newComponent2}
        </TwoImagesContainer>
      );

      // // Replace components[k] with our new div.
      components[k] = () => imageContainer;
      // // Remove components[combiations[k]].
      components.splice(combinations[k], 1);
    });

    return components;
  } catch {
    return [];
  }
}

function getElementForNewComponent(children) {
  const first = children[0];
  if (typeof first === "string") {
    return <p></p>;
  } else {
    // type is object or our react component.
    // In this case it is our custom image component.
    if (first.type.name === "PageSubImage") {
      return <></>;
    } else if (first.type.name === "PageSubTitle") {
      return <></>;
    }
  }
}

function createImageComponent(child, type) {
  const { src, alt } = child;
  if (type === undefined) {
    return <PageSubImage src={src} alt={alt} key={randNumber()} />;
  } else {
    return <PageSubHalfImage src={src} alt={alt} key={randNumber()} />;
  }
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

function createSubTitleComponent(child) {
  const { nodeValue } = child;
  return <PageSubTitle key={randNumber()}>{nodeValue}</PageSubTitle>;
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
