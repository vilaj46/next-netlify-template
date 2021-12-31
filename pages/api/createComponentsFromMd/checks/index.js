/**
 * @param {Element} child
 * @returns Boolean - whether or not the child is an image.
 *
 * Iterate over the child element, usually only 1 child
 * with the netlify cms. Finds and img tag and returns true.
 */
export function isValidImage(child) {
  let isImage = false;
  const children = Array.from(child.children);
  // Iterate over the children and find an image.
  children.forEach((c) => {
    const { nodeName } = c;
    if (nodeName === "IMG") {
      isImage = true;
    }
  });
  return isImage;
}

/**
 * @param {Element} prevElement - Previous element from our current element.
 * @param {Element} nextElement - Next element from our current element.
 * @returns boolean - Whether or not this is supposed to be a half image.
 *
 * Our current element is an image.
 * Since our current element is an image we want to check
 * to see if the previous or next one is also an image.
 *
 * This will currently always trigger on the nextElement.
 *
 * We shouldn't even be checking the previous element since
 * when we create the TwoImagesContainer we only use the next image.
 */
export function isValidHalfImage(prevElement, nextElement) {
  try {
    if (isValidImage(prevElement) || isValidImage(nextElement)) {
      return true;
    } else {
      return false;
    }
  } catch {
    // Not sure yet, something went wrong.
  }
  return false;
}
