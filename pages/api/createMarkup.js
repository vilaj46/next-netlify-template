export default function createMarkup(html) {
  try {
    return { __html: html };
  } catch {
    return { __html: html };
  }
}
