import "tailwindcss/tailwind.css";

function PageTitle({ children }) {
  return (
    <h1 className="text-lightRed text-4xl text-center uppercase font-custom">
      {children}
    </h1>
  );
}

export default PageTitle;
