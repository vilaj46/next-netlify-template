import Link from "next/link";
import "tailwindcss/tailwind.css";

export default function VerticalList({ children }) {
  return <ul style={{ border: "2px solid red" }}>aa{children}</ul>;
}
