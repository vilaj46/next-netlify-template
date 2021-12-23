import { RegularParagraphHalfMargin } from "../../../components/TextComponents";

export default function combineMultipleParagraphs(elements) {
  // const combinations = {};
  const temp = [...elements];

  temp.forEach((element, index) => {
    if (typeof element === "function") {
      // Maybe a paragraph or heading.
      const Element = element();

      const { name } = Element.type;
      try {
        if (name === "RegularParagraph") {
          const NextElement = temp[index + 1]();
          if (NextElement.type.name === "RegularParagraph") {
            const { children } = Element.props;

            const newElement = (
              <RegularParagraphHalfMargin>
                {children}
              </RegularParagraphHalfMargin>
            );
            temp[index] = newElement;
          }
        }
      } catch {
        // There is no next element.
      }
    }
  });
  return temp;
}
