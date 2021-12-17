import Link from "next/link";
import "tailwindcss/tailwind.css";

function Logo({ image }) {
  return (
    <div className="absolute w-1/3 lg:w-1/6 cursor-pointer">
      <Link href="/">
        <img src={image.src} alt={image.alt} className="" />
      </Link>
    </div>
  );
}

export default Logo;
