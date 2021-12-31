/**
 * @param {Element} element
 * @returns object - Image src and alt properties.
 *
 * Grabs the image from the paragraph element.
 */
export default function getImageProps(element) {
  const { children } = element;
  const childrenArray = Array.from(children);

  let image = null;
  if (childrenArray.length === 1) {
    image = childrenArray[0];
  } else {
    // Iterates over the paragraph element if we need to.
    childrenArray.forEach((e) => {
      const { nodeName } = e;
      if (nodeName === "IMG") {
        image = e;
      }
    });
  }

  const { src, alt } = image;
  return {
    src,
    alt,
  };
}
