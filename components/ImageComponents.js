import Link from "next/link";
import "tailwindcss/tailwind.css";

export function Logo({ image }) {
  return (
    <div className="absolute w-1/3 lg:w-1/6 cursor-pointer">
      <Link href="/">
        <img src={image.src} alt={image.alt} className="" />
      </Link>
    </div>
  );
}

export function MainImage({ image }) {
  return (
    <div className="w-full h-full xl:h-192 overflow-hidden">
      <img
        src={image.src}
        alt={image.alt}
        // Can probably clean this css up a bit.
        className="w-full bg-cover bg-center object-cover"
      />
    </div>
  );
}

export function PageSubHalfImage({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className="mr-auto ml-auto w-full lg:w-5/12 mb-4"
    />
  );
}

export function PageSubImage({ src = "", alt = "" }) {
  return <img src={src} alt={alt} className="mr-auto ml-auto mb-4" />;
}
