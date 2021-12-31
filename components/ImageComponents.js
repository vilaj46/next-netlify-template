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
      className="mr-auto lg:mr-0 ml-auto lg:ml-0 w-full lg:w-48 mb-4 lg:mb-0"
    />
  );
}

export function PageSubImage({ src = "", alt = "" }) {
  return <img src={src} alt={alt} className="mr-auto ml-auto mb-4" />;
}

export function TripAdvisor({ src = "", alt = "" }) {
  return (
    <div className="w-1/3">
      <a
        href="https://www.tripadvisor.com/Hotel_Review-g48562-d80181-Reviews-Union_Gables_Inn-Saratoga_Springs_New_York.html"
        target="_blank"
        rel="noreferrer"
      >
        <img src={src} alt={alt} className="mb-4" />
      </a>
    </div>
  );
}
