import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-[#2f2f2f] text-white">
      <div className="flex items-center justify-between px-6 py-3">

        {/* LEFT */}
        <div className="flex items-center gap-3">
          <img src="/UPHEAL.png" className="h-10" />
          <img src="/UPCOLLEGE.png" className="h-10" />
          <img src="/UPLOGO1.png" className="h-10" />

          <h1 className="text-2xl font-semibold tracking-wide ml-2">
            UP HEAL
          </h1>
        </div>

        {/* RIGHT */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <a className="bg-[#fcb900] text-black px-3 py-1 rounded-md">
            Home
          </a>
          <a className="hover:text-[#fcb900]">About</a>
          <a className="hover:text-[#fcb900]">Anatomy</a>
          <a className="hover:text-[#fcb900]">Research</a>
          <a className="hover:text-[#fcb900]">Atlas of Histology</a>
          <a className="hover:text-[#fcb900]">Practice</a>
          <a className="hover:text-[#fcb900]">FAQs</a>
            <Link href="/lectures" className="hover:text-[#fcb900]">
    Essential Lectures
  </Link>
          <a className="hover:text-[#fcb900]">Contact Us</a>
        </nav>
      </div>
    </header>
  );
}