import "tailwindcss/tailwind.css";

function PageSubHalfImage({ src, alt }) {
  return (
    <img src={src} alt={alt} className="mr-auto ml-auto w-full lg:w-6/12" />
  );
}

export default PageSubHalfImage;
