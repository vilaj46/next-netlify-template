import "tailwindcss/tailwind.css";

/**
 * @param {Array} children -
 * @param {Boolean} smallMargin -
 * @returns
 *
 * Links in the paragraph were getting the key warning.
 * This wasn't game breaking and just annoying. Since
 * the key property is read only, I have to create an all
 * together new component and add the random key.
 */
export function RegularParagraph({
  children,
  smallMargin = false,
  center = false,
}) {
  // If given smallMargin prop, the next element is also a parapraph.
  const marginBottom = smallMargin ? "mb-3" : "mb-14";

  const textAlign = center ? "text-center" : "";
  return (
    <p
      className={`${marginBottom} ${textAlign} text-base leading-loose font-droid text-lightBlack`}
    >
      {children.map((child) => {
        if (typeof child !== "string") {
          const tempChild = {
            ...child,
          };
          return tempChild;
        } else {
          return child;
        }
      })}
    </p>
  );
}
