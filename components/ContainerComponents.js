import "tailwindcss/tailwind.css";

export function CenterContainer({ children }) {
  return (
    <div
      className="w-10/12 lg:w-10/12 
                 mr-auto ml-auto"
    >
      {children}
    </div>
  );
}

export function TwoImagesContainer({ children }) {
  return (
    <div
      className="flex overflow-hidden flex-wrap 
                 basis-1/3 lg:justify-between"
    >
      {children}
    </div>
  );
}
