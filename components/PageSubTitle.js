import "tailwindcss/tailwind.css";

function PageSubTitle({ children }) {
  return (
    <h1 className="text-superDarkRed text-4xl text-center uppercase font-custom">
      {children}
    </h1>
  );
}

export default PageSubTitle;
