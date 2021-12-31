// Helper Functions
import getImageProps from "./getImageProps";

// Components
import { PageSubHalfImage } from "../../../../components/ImageComponents";
import { TwoImagesContainer } from "../../../../components/ContainerComponents";

/**
 * @param {Element} currentElement - The current element we are creating.
 * @param {Element} nextElement - The next element we also need to create.
 * @returns TwoImagesContainer component.
 *
 * Grabs the properties from the two images
 * and creates a two images container.
 *
 * skipNext property is used in createComponentsFromMd
 * and will determine whether or not we skip over creating the next element.
 */
export default function createTwoImageContainer(currentElement, nextElement) {
  const nextProperties = getImageProps(nextElement);
  const currentProperties = getImageProps(currentElement);
  return (
    <TwoImagesContainer skipNext={true}>
      <PageSubHalfImage
        src={currentProperties.src}
        alt={currentProperties.alt}
      />
      <PageSubHalfImage src={nextProperties.src} alt={nextProperties.alt} />
    </TwoImagesContainer>
  );
}
