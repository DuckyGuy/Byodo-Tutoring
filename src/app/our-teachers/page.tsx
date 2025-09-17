import Image from "next/image";
import Reveal from "../../components/Reveal";
import { Star } from "lucide-react";
import Header from "@/components/Header";
import Link from "next/link";

const tutors = [
  {
    name: "Brady Kaminski",
    headline:
      "Senior at SDOHS, Founder of Byodo Tutoring, loves math, science, and writing.",
    subjects:
      "English Language (Basic-AP), Calculus, Writing (Basic-AP), Algebra (Basic-Advanced), Geometry & Trigonometry (Basic-Advanced), U.S. History (Basic-AP).",
    scores:
      "5 AP Language and Composition, 5 AP U.S. History, 4 AP Physics 1, 4 AP Calculus",
    enrolled:
      "AP Physics 2, AP Physics C: Mechanics, AP U.S. Government and Politics, AP Macro Economics, Calculus II",
    image: "/tutor-1.jpg",
  },
  {
    name: "Chase Funk",
    headline:
      "Senior at RHS, Co-Founder of Byodo Tutoring, loves history, english, writing, and science.",
    subjects:
      "English Language (Basic-AP), Writing (Basic-AP), Algebra (Basic-Advanced), U.S. History (Basic-AP), World History (Basic-AP).",
    scores: "5 AP Language and Composition, 4 AP U.S. History, 4 AP World History",
    enrolled: "AP U.S. Government and Politics, AP Computer Science A, Pre-Calc",
    image: "/tutor-2.jpg",
  },
  {
    name: "Hansen Darsia",
    headline:
      "Senior at RHS, Schoolhouse registered tutor, loves math and computer Science.",
    subjects:
      "Calculus, Algebra (Basic-Advanced), Geometry and Trigonometry (Basic-Advanced), US History (Basic-AP), Chemistry (Basic-AP), Psychology (AP), Human Geography (AP)",
    scores:
      "(4) AP Human Geography, (5) AP Psychology, (5) AP Calculus AB, (5) AP Chemistry, (4) AP U.S. History",
    enrolled:
      "AP Calculus BC, AP English Literature and Composition, AP U.S. Government and Politics, AP Computer Science A",
    image: "/tutor-3.jpg",
  },
];

function StarRating({ rating = 0, outOf = 5 }: { rating?: number; outOf?: number }) {
  return (
    <div className="inline-flex items-center gap-0.5" aria-hidden>
      {Array.from({ length: outOf }).map((_, i) => (
        <Star
          key={i}
          className={
            "w-3.5 h-3.5 " + (i < Math.round(rating) ? "text-yellow-400 fill-yellow-400" : "text-slate-300")
          }
        />
      ))}
    </div>
  );
}

export default function OurTeachers() {
  return (
    <div className="font-sans min-h-screen bg-white bg-grid-slate-100 bg-soft-vignette text-foreground">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-foreground text-background px-3 py-2 rounded"
      >
        Skip to content
      </a>

  <Header />

      <section
        id="hero"
        className="relative isolate min-h-[35vh] sm:min-h-[40vh] overflow-hidden py-14 sm:py-20"
      >
        <div className="absolute inset-0">
          <Image
            src="/background-1.jpg"
            alt="Decorative background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/20" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="py-10 sm:py-16 text-center">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Teachers
            </h1>
            <p className="mt-3 text-base sm:text-lg text-white/80">
              Browse and book one of our qualified tutor for free.
            </p>
          </div>
        </div>
      </section>

      <main id="main" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <section aria-labelledby="teachers" className="py-10 sm:py-16">
          <h2 id="teachers" className="text-2xl sm:text-3xl font-bold text-slate-900">
            Our Teachers
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tutors.map((tutor, i) => (
              <Reveal key={i} className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-slate-200 flex-shrink-0">
                        <Image src={tutor.image} alt={`${tutor.name} profile`} fill className="object-cover" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-xl font-semibold text-slate-900 truncate">{tutor.name}</h3>
                        <div className="mt-1 text-xs text-slate-500 flex items-center gap-2">
                          <StarRating rating={0} outOf={5} />
                          <span>0/5</span>
                          <span className="sr-only">0 out of 5</span>
                        </div>
                        <div className="mt-1 text-xs text-slate-500">0 Lessons</div>
                      </div>
                    </div>
                    <Link
                      href="/#contact"
                      className="shrink-0 inline-flex items-center justify-center rounded-full bg-brand text-white px-4 h-9 text-xs font-semibold hover:bg-brand-700"
                    >
                      Book Trial
                    </Link>
                  </div>

                  <div className="mt-5">
                    <p className="text-sm text-slate-700">{tutor.headline}</p>

                    <div className="mt-4">
                      <h4 className="font-semibold text-slate-900">Tutors:</h4>
                      <p className="mt-1 text-sm text-slate-700">{tutor.subjects}</p>
                    </div>

                    <div className="mt-4">
                      <h4 className="font-semibold text-slate-900">Notable Scores</h4>
                      <p className="mt-1 text-sm text-slate-700">{tutor.scores}</p>
                    </div>

                    <div className="mt-4">
                      <h4 className="font-semibold text-slate-900">Enrolled in</h4>
                      <p className="mt-1 text-sm text-slate-700">{tutor.enrolled}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-700">Choose a teacher for 1-on-1 lessons</p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center justify-center rounded-full bg-brand text-white px-5 h-11 text-sm font-semibold hover:bg-brand-700"
            >
              Start learning with Byodo today!
            </Link>
          </div>
        </section>
      </main>

      <footer id="contact" className="mt-16 border-t border-slate-200 bg-[#fafafa]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-sm text-slate-700">
          <div>
            <h3 className="font-semibold text-slate-900">About Us</h3>
            <ul className="mt-3 space-y-2">
              <li><Link href="/#how" className="hover:text-brand">How it Works</Link></li>
              <li><Link href="/#about" className="hover:text-brand">Education Partners</Link></li>
              <li><Link href="/#about" className="hover:text-brand">About</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Teachers</h3>
            <ul className="mt-3 space-y-2">
              <li><Link href="/our-teachers" className="hover:text-brand">Math Teachers</Link></li>
              <li><Link href="/our-teachers" className="hover:text-brand">English Teachers</Link></li>
              <li><Link href="/our-teachers" className="hover:text-brand">Science Teachers</Link></li>
              <li><Link href="/our-teachers" className="hover:text-brand">History Teachers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Support</h3>
            <ul className="mt-3 space-y-2">
              <li><a href="#help" className="hover:text-brand">Need any Help?</a></li>
              <li><a href="mailto:Support@byodotutoring.com" className="hover:text-brand">Support@byodotutoring.com</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Contact</h3>
            <ul className="mt-3 space-y-2">
              <li><a href="tel:16232061165" className="hover:text-brand">623-206-1165</a></li>
              <li><a href="mailto:kaminskibrady81@gmail.com" className="hover:text-brand">kaminskibrady81@gmail.com</a></li>
            </ul>
            <div className="mt-4">
              <h4 className="font-medium">Follow Us</h4>
              <ul className="mt-2 flex flex-wrap gap-3">
                <li><a className="hover:text-brand" href="#">Facebook</a></li>
                <li><a className="hover:text-brand" href="#">Twitter</a></li>
                <li><a className="hover:text-brand" href="#">YouTube</a></li>
                <li><a className="hover:text-brand" href="#">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-200 py-6">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
            <div>Copyright © {new Date().getFullYear()} Byodo Tutoring</div>
            <div>Powered by Byodo Tutoring</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
