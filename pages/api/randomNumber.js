/**
 * @returns Number
 *
 * Randomizes and rounds a number out of a billion.
 */
export default function randomNumber() {
  return Math.floor(Math.random() * 1000000000);
}
