import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import Header from "@/components/Header";

export default function Home() {
  return (
  <div className="font-sans min-h-screen bg-white bg-grid-slate-100 bg-soft-vignette text-foreground">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-foreground text-background px-3 py-2 rounded">
        Skip to content
      </a>

  <Header />

      <section id="home" className="relative isolate min-h-[70vh] sm:min-h-[75vh] lg:min-h-[80vh] overflow-hidden py-16 sm:py-24">
      <Parallax speed={0.15} className="absolute -inset-y-12 inset-x-0">
            <Image
        src="/background-1.jpg"
              alt="Student in online tutoring session with laptop and notebook"
              fill
              className="object-cover"
              priority
            />
          </Parallax>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl py-10 sm:py-16 lg:py-24 text-center lg:text-left">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Start learning at <span className="text-brand">Byodo</span> today with the best online tutors!
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/80">
              Free, high‑quality 1:1 help, worksheets, and personalized lessons for every learner.
            </p>
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-3">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-brand text-white px-5 h-12 text-sm sm:text-base font-semibold hover:bg-brand-700">
                Start Learning
              </Link>
              <a href="#how" className="inline-flex items-center justify-center rounded-full border border-white/30 text-white px-5 h-12 text-sm sm:text-base font-semibold hover:bg-white/10">
                How it works
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <main id="main" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        <section aria-labelledby="subjects" className="py-10 sm:py-16">
          <h2 id="subjects" className="text-2xl sm:text-3xl font-bold text-slate-900">Subjects we tutor</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "📚", title: "English language", desc: "Literature breakdowns and reading comprehension. Levels from basic to advanced." },
              { icon: "✍️", title: "Writing", desc: "Composition, grammar, and structure. Levels from basic to advanced." },
              { icon: "➕", title: "Algebra", desc: "High school algebra topics across your first two years." },
              { icon: "📐", title: "Geometry & Trigonometry", desc: "Geometry and introductory trigonometry topics." },
              { icon: "∑", title: "Calculus", desc: "Advanced math focused on the study of continuous change." },
              { icon: "🗽", title: "United States History", desc: "From foundational topics to advanced US history." },
              { icon: "🌎", title: "World History", desc: "World history from basic through advanced levels." },
            ].map((s, i, arr) => {
              const isLast = i === arr.length - 1;
              const tileCols = isLast ? " sm:col-span-2 lg:col-span-3" : "";
              return (
                <Reveal key={i} className={"rounded-xl border border-slate-200 p-5 bg-white" + tileCols}>
                  <div className="text-3xl" aria-hidden>{s.icon}</div>
                  <h3 className="mt-3 font-semibold text-lg text-slate-900">{s.title}</h3>
                  <p className="mt-1 text-sm text-slate-700">{s.desc}</p>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section id="how" aria-labelledby="how-title" className="py-10 sm:py-16">
          <h2 id="how-title" className="text-2xl sm:text-3xl font-bold text-slate-900">How it all works</h2>
          <p className="mt-2 text-slate-700 max-w-2xl">We offer tutoring for a variety of classes and difficulty levels. Schedule your first meeting and meet with one of our highly qualified tutors today!</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              { step: 1, title: "Find the perfect subject", desc: "Explore subjects and find what's right for you at Byodo." },
              { step: 2, title: "Meet with our tutors", desc: "Schedule a free meeting to discuss your student's needs." },
              { step: 3, title: "Start the journey", desc: "Begin learning with our very qualified tutors today!" },
            ].map((c) => (
              <Reveal key={c.step} className="rounded-xl border border-slate-200 p-6 bg-white">
                <div className="text-4xl font-bold text-brand">{c.step}</div>
                <h3 className="mt-3 font-semibold text-slate-900">{c.title}</h3>
                <p className="mt-1 text-sm text-slate-700">{c.desc}</p>
        </Reveal>
            ))}
          </div>
        </section>

        <section id="teachers" aria-labelledby="teachers-title" className="py-10 sm:py-16">
          <h2 id="teachers-title" className="text-2xl sm:text-3xl font-bold text-slate-900">Our Teachers</h2>
          <p className="mt-2 max-w-2xl text-slate-700">Choose a teacher for 1‑on‑1 lessons. Start learning with Byodo today!</p>
          <div className="mt-6">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-brand text-white px-5 h-11 text-sm font-semibold hover:bg-brand-700">Find a Tutor</Link>
          </div>
        </section>

        <section aria-labelledby="features" className="py-10 sm:py-16">
          <h2 id="features" className="text-2xl sm:text-3xl font-bold text-slate-900">What makes Byodo great</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              { title: "Expert Tutors", desc: "Our tutors have experience and demonstrate high proficiency in their subjects." },
              { title: "Quality Service", desc: "We offer high-quality service—reach out with any questions or concerns." },
              { title: "Our Services", desc: "Worksheets, 1-on-1 help, and personalized lessons. Schedule a consultation today!" },
              { title: "Affordable Prices", desc: "We don't charge; Byodo is a completely free service for everyone." },
            ].map((f, i) => (
              <Reveal key={i} className="rounded-xl border border-slate-200 p-6 bg-white">
                <h3 className="font-semibold text-slate-900">{f.title}</h3>
                <p className="mt-1 text-sm text-slate-700">{f.desc}</p>
        </Reveal>
            ))}
          </div>
        </section>

        <section aria-labelledby="why" className="py-10 sm:py-16">
          <h2 id="why" className="text-2xl sm:text-3xl font-bold text-slate-900">Why us</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <Reveal className="rounded-xl border border-slate-200 p-6 bg-white">
              <h3 className="font-semibold text-slate-900">Find everything tutoring related all in one place</h3>
              <p className="mt-1 text-sm text-slate-700">Find all the tutoring resources you need here, at Byodo.</p>
            </Reveal>
            <Reveal className="rounded-xl border border-slate-200 p-6 bg-white" delayMs={100}>
              <h3 className="font-semibold text-slate-900">Find what you need</h3>
              <p className="mt-1 text-sm text-slate-700">Reach out to a qualified tutor for 1:1 help, worksheets, and in‑depth assistance.</p>
            </Reveal>
            <Reveal className="rounded-xl border border-slate-200 p-6 bg-white" delayMs={200}>
              <h3 className="font-semibold text-slate-900">Learn anytime, anywhere</h3>
              <p className="mt-1 text-sm text-slate-700">Contact tutors, schedule meetings, and access resources on any device.</p>
            </Reveal>
          </div>
        </section>

        <section id="about" aria-labelledby="about-title" className="py-10 sm:py-16">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h2 id="about-title" className="text-2xl sm:text-3xl font-bold text-slate-900">About us</h2>
              <blockquote className="mt-2 text-lg sm:text-xl font-medium text-slate-800">“We prepare you to achieve your goals with professional tutors.”</blockquote>
              <p className="mt-2 max-w-2xl text-slate-700">We offer the best tutors to help your student achieve their goals. We want you to succeed and will do everything we can to make that happen.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#teachers" className="inline-flex items-center justify-center rounded-full border border-brand/30 text-brand px-5 h-11 text-sm font-semibold hover:bg-brand/10">Read More</a>
                <Link id="signup" href="/contact" className="inline-flex items-center justify-center rounded-full bg-brand text-white px-5 h-11 text-sm font-semibold hover:bg-brand-700">Sign Up</Link>
              </div>
            </div>
            <Reveal className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <Image
        src="/image1.jpg"
        alt="Empty lecture hall with wooden chairs"
                fill
                className="object-cover"
              />
      </Reveal>
          </div>
        </section>
      </main>

      <footer id="contact" className="mt-16 border-t border-slate-200 bg-[#fafafa]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-sm text-slate-700">
          <div>
            <h3 className="font-semibold text-slate-900">About Us</h3>
            <ul className="mt-3 space-y-2">
              <li><a href="#how" className="hover:text-brand">How it Works</a></li>
              <li><a href="#about" className="hover:text-brand">Education Partners</a></li>
              <li><a href="#about" className="hover:text-brand">About</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Teachers</h3>
            <ul className="mt-3 space-y-2">
              <li><a href="#teachers" className="hover:text-brand">Math Teachers</a></li>
              <li><a href="#teachers" className="hover:text-brand">English Teachers</a></li>
              <li><a href="#teachers" className="hover:text-brand">Science Teachers</a></li>
              <li><a href="#teachers" className="hover:text-brand">History Teachers</a></li>
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
