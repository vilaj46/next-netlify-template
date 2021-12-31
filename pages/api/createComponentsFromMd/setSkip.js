/**
 * @param {Element} child
 * @param {Number} currIndex
 * @returns Number
 *
 * If we are skipping the next element, return
 * the next index so we can replace the current skip value.
 *
 * Otherwise return -1 so we don't do anything.
 */
export default function setSkip(child, currIndex) {
  const { props } = child;
  const { skipNext } = props;
  if (skipNext) {
    return currIndex + 1;
  } else {
    return -1;
  }
}
