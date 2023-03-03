"use client"
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";

type Navprops = {
  href: string;
  children: string;
};

export default function Navlink({href, children}: Navprops) {
  const seg = useSelectedLayoutSegments();
  let active = href === `/${seg}`;
  return (
    <Link href={href} className={active ? "underline" : ""}>
      {children}
    </Link>
  );
}
