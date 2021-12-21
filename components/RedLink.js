import Link from "next/link";
import "tailwindcss/tailwind.css";

function RedLink({ children, href }) {
  return (
    <Link href={href}>
      <a className="text-darkRed font-bold hover:underline hover:text-lightRed">
        {children}
      </a>
    </Link>
  );
}

export default RedLink;
