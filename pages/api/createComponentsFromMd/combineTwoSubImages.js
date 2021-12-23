// Components
import { PageSubHalfImage } from "../../../components/ImageComponents";
import { TwoImagesContainer } from "../../../components/ContainerComponents";

export default function combineSubImages(elements) {
  const combinations = {};
  const temp = [...elements];
  temp.forEach((element, index) => {
    try {
      const { name } = element.type;

      if (name === "PageSubImage") {
        const nextElement = temp[index + 1];
        if (nextElement.type.name === "PageSubImage") {
          // Combine the two.
          combinations[index] = index + 1;
        }
      }
    } catch {
      // a function
    }
  });

  const keys = Object.keys(combinations);
  keys.forEach((k) => {
    // Combine elements[k] and elements[combinations[k]]
    const currentElement = temp[k];
    const nextElement = temp[combinations[k]];
    const newElement = (
      <TwoImagesContainer>
        <PageSubHalfImage
          src={currentElement.props.src}
          alt={currentElement.props.alt}
        />
        <PageSubHalfImage
          src={nextElement.props.src}
          alt={nextElement.props.alt}
        />
      </TwoImagesContainer>
    );

    temp[k] = newElement;
  });

  const values = Object.values(combinations);
  const filtered = temp.filter((element, index) => {
    if (values.includes(index) === false) {
      return element;
    }
  });

  return filtered;
}
