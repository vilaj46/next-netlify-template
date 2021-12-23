import "tailwindcss/tailwind.css";
import randomNumber from "../pages/api/randomNumber";

/**
 * @param {*} param0
 * @returns
 *
 * Links in the paragraph were getting the key warning.
 * This wasn't game breaking and just annoying. Since
 * the key property is read only, I have to create an all
 * together new component and add the random key.
 */
export function RegularParagraph({ children }) {
  // text-lg or text-base not sure which.
  return (
    <p className="mb-14 text-lg">
      {children.map((child) => {
        if (typeof child !== "string") {
          const tempChild = {
            ...child,
            key: randomNumber(),
          };
          return tempChild;
        } else {
          return child;
        }
      })}
    </p>
  );
}
