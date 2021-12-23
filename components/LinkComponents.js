import Link from "next/link";
import "tailwindcss/tailwind.css";

export function RedLinkDomestic({ children, href }) {
  return (
    <Link href={href}>
      <a className="text-darkRed font-bold hover:text-lightRed underline">
        {children}
      </a>
    </Link>
  );
}

export function RedLinkForeign({ children, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="text-darkRed font-bold hover:text-lightRed underline"
    >
      {children}
    </a>
  );
}
