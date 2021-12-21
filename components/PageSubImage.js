import "tailwindcss/tailwind.css";

function PageSubImage({ src, alt }) {
  return <img src={src} alt={alt} className="mr-auto ml-auto" />;
}

export default PageSubImage;
