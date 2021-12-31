export default function isTripAdvisor(children) {
  const img = children[0];
  const { alt, title } = img;

  const text = "Trip Advisor";
  const text2 = "tripadvisor";

  if (alt.includes(text) || title.includes(text2)) {
    return true;
  }
  return false;
}
