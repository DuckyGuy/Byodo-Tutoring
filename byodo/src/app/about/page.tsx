import Image from "next/image";
import Reveal from "../../components/Reveal";
import Header from "@/components/Header";

export default function AboutPage() {
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
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">About</h1>
            <p className="mt-3 text-base sm:text-lg text-white/80">
              At byodo we aim to bring you the highest quality tutoring for a variety of subjects completely free.
            </p>
          </div>
        </div>
      </section>

      <main id="main" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <section aria-labelledby="about-us" className="py-10 sm:py-16">
          <h2 id="about-us" className="text-2xl sm:text-3xl font-bold text-slate-900">About us</h2>
          <Reveal className="mt-4 max-w-3xl text-slate-700">
            <p>
              We offer lessons, Zoom calls, and personalized tutoring—completely free.
            </p>
            <p className="mt-4">
              We’re a small tutoring organization run by high school students. I’ve always loved learning math and teaching it—that’s why I started Byodo. Our goal is to make it easy for students to access whatever they need to succeed: extra practice on tough topics, a way to explore new subjects, or a tutor who can sit with them and work things through. We want Byodo to provide everything our learners might need. Thank you for choosing Byodo.
            </p>
          </Reveal>

          <Reveal className="mt-10">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <Image
                src="/image2.jpg"
                alt="Byodotutoring.com — A tutoring Service"
                fill
                className="object-cover"
                priority
              />
            </div>
          </Reveal>
        </section>

        <section aria-labelledby="vision-mission" className="py-2 sm:py-4">
          <div className="grid gap-6 sm:grid-cols-2">
            <Reveal className="rounded-xl border border-slate-200 p-6 bg-white">
              <h3 className="font-semibold text-slate-900">Our Vision</h3>
              <p className="mt-1 text-sm text-slate-700">We want our students to enjoy learning and have fun in school.</p>
            </Reveal>
            <Reveal className="rounded-xl border border-slate-200 p-6 bg-white" delayMs={100}>
              <h3 className="font-semibold text-slate-900">Our Mission</h3>
              <p className="mt-1 text-sm text-slate-700">At byodo we want to inspire and make an impact through our tutoring.</p>
            </Reveal>
          </div>
        </section>

        <section aria-labelledby="why-us" className="py-10 sm:py-16">
          <h2 id="why-us" className="text-2xl sm:text-3xl font-bold text-slate-900">Why us</h2>
          <p className="mt-2 text-slate-700 max-w-2xl">
            We offer premium tutoring services and are dedicated to making sure your child not only succeeds but also enjoys school.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <Reveal className="rounded-xl border border-slate-200 p-6 bg-white">
              <h3 className="font-semibold text-slate-900">Customized learning</h3>
              <p className="mt-1 text-sm text-slate-700">We cater our tutoring to your students needs, reach out to our tutors and arrange a free zoom call to get started.</p>
            </Reveal>
            <Reveal className="rounded-xl border border-slate-200 p-6 bg-white" delayMs={100}>
              <h3 className="font-semibold text-slate-900">Our services</h3>
              <p className="mt-1 text-sm text-slate-700">We offer free worksheets, lessons, and zoom calls for a vareity of subjects</p>
            </Reveal>
            <Reveal className="rounded-xl border border-slate-200 p-6 bg-white" delayMs={200}>
              <h3 className="font-semibold text-slate-900">Expert help</h3>
              <p className="mt-1 text-sm text-slate-700">Recieve help from many of our qualified tutors</p>
            </Reveal>
            <Reveal className="rounded-xl border border-slate-200 p-6 bg-white" delayMs={300}>
              <h3 className="font-semibold text-slate-900">The Price</h3>
              <p className="mt-1 text-sm text-slate-700">At byodo we want to reach as many students as we can which is why we have decided to not charge for any of our services.</p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <Reveal className="rounded-xl border border-slate-200 p-6 bg-white">
              <h3 className="font-semibold text-slate-900">How it works</h3>
              <p className="mt-1 text-sm text-slate-700">Explore subjects, meet a tutor on a free Zoom call, and start learning 1‑on‑1 at no cost.</p>
            </Reveal>
            <Reveal className="rounded-xl border border-slate-200 p-6 bg-white" delayMs={100}>
              <h3 className="font-semibold text-slate-900">What we provide</h3>
              <p className="mt-1 text-sm text-slate-700">Clear lessons, practice worksheets, and personalized help across core subjects.</p>
            </Reveal>
            <Reveal className="rounded-xl border border-slate-200 p-6 bg-white" delayMs={200}>
              <h3 className="font-semibold text-slate-900">Who we help</h3>
              <p className="mt-1 text-sm text-slate-700">Students who want to build confidence, master topics, and enjoy learning again.</p>
            </Reveal>
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-700">Choose a teacher for 1-on-1 lessons</p>
            <a
              href="/#signup"
              className="mt-4 inline-flex items-center justify-center rounded-full bg-brand text-white px-5 h-11 text-sm font-semibold hover:bg-brand-700"
            >
              Start learning with Byodo today!
            </a>
          </div>
        </section>
      </main>

      <footer id="contact" className="mt-16 border-t border-slate-200 bg-[#fafafa]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-sm text-slate-700">
          <div>
            <h3 className="font-semibold text-slate-900">About Us</h3>
            <ul className="mt-3 space-y-2">
              <li><a href="/#how" className="hover:text-brand">How it Works</a></li>
              <li><a href="/#about" className="hover:text-brand">Education Partners</a></li>
              <li><a href="/about" className="hover:text-brand">About</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Teachers</h3>
            <ul className="mt-3 space-y-2">
              <li><a href="/our-teachers" className="hover:text-brand">Math Teachers</a></li>
              <li><a href="/our-teachers" className="hover:text-brand">English Teachers</a></li>
              <li><a href="/our-teachers" className="hover:text-brand">Science Teachers</a></li>
              <li><a href="/our-teachers" className="hover:text-brand">History Teachers</a></li>
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
