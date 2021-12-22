import "tailwindcss/tailwind.css";

function TwoImagesContainer({ children }) {
  return (
    <div className="flex overflow-hidden flex-wrap basis-1/3">{children}</div>
  );
}

export default TwoImagesContainer;
