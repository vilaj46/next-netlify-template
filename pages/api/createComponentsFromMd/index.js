// Helper Functions
import combineChildren from "./combineChildren";
import combineTwoSubImages from "./combineTwoSubImages";

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

    // All the children in the body as an array.
    const childrenArray = Array.from(children);

    // Iterate through the childrens array.
    const elements = childrenArray.map((element) => {
      const { childNodes } = element;

      const newChild = combineChildren(childNodes);

      // <p> elements can be anything on the inside.
      // For this case, <p> elements hold img elements.
      // We have to dive into each <p> element and assume it is not text.

      return newChild;
    });

    // Combine only two consecutive PageSubImage components.
    const combinedElements = combineTwoSubImages(elements);
    return combinedElements;
  } catch {
    return [];
  }
}

export default createComponentsFromMd;
