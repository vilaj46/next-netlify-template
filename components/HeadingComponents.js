import "tailwindcss/tailwind.css";

export function PageTitle({ children }) {
  return (
    <h1
      className="
      text-lightRed text-4xl text-center uppercase font-custom
        mt-14 mb-4
      "
    >
      {children}
    </h1>
  );
}

export function PageSubTitle({ children }) {
  return (
    <h1 className="text-superDarkRed text-3xl text-center uppercase font-custom mt-14 mb-4">
      {children}
    </h1>
  );
}
