import createChildComponent from "./createChildComponent";

import setSkip from "./setSkip";

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
function createComponentsFromMd(htmlString) {
  try {
    // Creates an html document from the markdown string.
    const doc = new DOMParser().parseFromString(htmlString, "text/html");

    // Selects the body's children
    const { children } = doc.children[0].children[1];
    const childrenArray = Array.from(children);

    // Used to skip over half images.
    let skip = -1;

    const components = childrenArray.map((child, index) => {
      if (skip === index) {
        return null;
      }
      const childComponent = createChildComponent(child, index, childrenArray);
      skip = setSkip(childComponent, index);
      return childComponent;
    });
    return components;
  } catch {
    return [];
  }
}

export default createComponentsFromMd;
