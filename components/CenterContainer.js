import "tailwindcss/tailwind.css";

function CenterContainer({ children }) {
  return <div className="w-11/12 lg:w-9/12 mr-auto ml-auto">{children}</div>;
}

export default CenterContainer;
