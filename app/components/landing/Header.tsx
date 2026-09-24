"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Anatomy", href: "/#anatomy" },
    { name: "Research", href: "/#research" },
    { name: "Essential Lectures", href: "/lectures" },
    { name: "Atlas of Histology", href: "/#histology" },
    { name: "Practice", href: "/#practice" },
    { name: "FAQs", href: "/#faqs" },
    { name: "Contact Us", href: "/#contact" },
  ];

  return (
    <header className="w-full bg-[#2f2f2f] text-white sticky top-0 z-50 shadow-md">
      <div className="flex items-center justify-between px-6 py-3 max-w-[1280px] mx-auto">

        <div className="flex items-center gap-3">
          <img src="/UPHEAL.png" className="h-10" />
          <img src="/UPCOLLEGE.png" className="h-10" />
          <img src="/UPLOGO1.png" className="h-10" />

          <h1 className="text-2xl font-semibold tracking-wide ml-2">
            UP HEAL
          </h1>
        </div>

        <nav className="hidden md:flex gap-4 text-sm font-medium items-center">

          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-1 rounded-md transition duration-200
                  ${
                    isActive
                      ? "bg-[#fcb900] text-black"
                      : "hover:text-[#fcb900]"
                  }`}
              >
                {item.name}
              </Link>
            );
          })}

        </nav>
      </div>
    </header>
  );
}