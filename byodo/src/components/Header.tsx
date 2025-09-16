import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/80 supports-[backdrop-filter]:bg-white/70 border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/Byodo-Logo-1.webp" alt="Byodo Tutoring" width={150} height={40} priority />
        </div>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
            <li><Link className="text-brand hover:text-brand-800 font-medium" href="/">Home</Link></li>
            <li><Link className="text-brand hover:text-brand-800 font-medium" href="/our-teachers">Our Teachers</Link></li>
            <li><Link className="text-brand hover:text-brand-800 font-medium" href="/about">About</Link></li>
            <li><Link className="text-brand hover:text-brand-800 font-medium" href="/contact">Contact</Link></li>
          </ul>
        </nav>
        <Link href="/#signup" className="inline-flex items-center justify-center rounded-full bg-brand text-white px-4 h-10 text-sm font-medium hover:bg-brand-700">
          Find a Tutor
        </Link>
      </div>
    </header>
  );
}
