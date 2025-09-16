"use client"

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Reveal from "../../components/Reveal";

export default function ContactPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [studentGrade, setStudentGrade] = useState("");
  const [subject, setSubject] = useState("");
  const [preferredTutor, setPreferredTutor] = useState("");
  const [goals, setGoals] = useState("");
  const [availability, setAvailability] = useState("");
  const [isOrganization, setIsOrganization] = useState(false);
  const [organizationName, setOrganizationName] = useState("");
  const [roleTitle, setRoleTitle] = useState("");
  const [studentCount, setStudentCount] = useState("");
  const [requestType, setRequestType] = useState("");
  const [startDate, setStartDate] = useState("");

  const fullName = [firstName, lastName].filter(Boolean).join(" ");

  const buildPlainMessage = () => {
    const lines: string[] = [];
    lines.push(`Name: ${fullName || ""}`);
    if (isOrganization || organizationName || roleTitle) {
      lines.push(`Organization: ${organizationName || ""}`);
      lines.push(`Your role: ${roleTitle || ""}`);
    }
    lines.push(`Email: ${email || ""}`);
    if (isOrganization || requestType || studentCount) {
      lines.push(`Request type: ${requestType || ""}`);
      lines.push(`Number of students: ${studentCount || ""}`);
    }
    lines.push(`Grade: ${studentGrade || ""}`);
    lines.push(`Subject: ${subject || ""}`);
    lines.push(`Preferred tutor: ${preferredTutor || ""}`);
    lines.push("");
    lines.push("Goals:");
    lines.push(goals || "");
    lines.push("");
    lines.push("Availability:");
    lines.push(availability || "");
    if (isOrganization || startDate) {
      lines.push("");
      lines.push(`Preferred start date: ${startDate || ""}`);
    }
    return lines.join("\n");
  };

  const emailBody = encodeURIComponent(buildPlainMessage());

  const subjectLine = isOrganization && organizationName
    ? `Tutoring inquiry — ${organizationName}`
    : "New tutoring inquiry";
  const mailtoHref = `mailto:support@byodotutoring.com?subject=${encodeURIComponent(subjectLine)}&body=${emailBody}`;

  const copyMessage = async () => {
    const plain = buildPlainMessage();
    try {
      await navigator.clipboard.writeText(plain);
      alert("Message copied. Paste it into your email if it didn't open.");
    } catch {
      // no-op
    }
  };

  const downloadSummary = () => {
    const blob = new Blob([buildPlainMessage()], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "byodo-tutoring-request.txt";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

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
              Contact Us
            </h1>
            <p className="mt-3 text-base sm:text-lg text-white/80">
              Reach out and we'll match you with the right tutor&mdash;fast.
            </p>
          </div>
        </div>
      </section>

      <main id="main" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <section aria-labelledby="intake" className="py-10 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 id="intake" className="text-2xl sm:text-3xl font-bold text-slate-900">
                Tell us what you need
              </h2>
              <p className="mt-2 text-slate-700">
                Share a few details, and we'll get back within 24 hours.
              </p>

              <Reveal className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    window.location.href = mailtoHref;
                  }}
                  className="grid gap-4"
                >
                  <div className="flex items-center gap-2">
                    <input
                      id="org"
                      type="checkbox"
                      checked={isOrganization}
                      onChange={(e) => setIsOrganization(e.target.checked)}
                      className="h-4 w-4 rounded border-slate-300 text-brand focus:ring-brand"
                    />
                    <label htmlFor="org" className="text-sm text-slate-700">
                      I represent a school or organization
                    </label>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-slate-700">
                        First name
                      </label>
                      <input
                        className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-brand placeholder:text-slate-500 text-slate-900"
                        placeholder="Jane"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700">
                        Last name
                      </label>
                      <input
                        className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-brand placeholder:text-slate-500 text-slate-900"
                        placeholder="Doe"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {isOrganization && (
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-sm font-medium text-slate-700">Organization name</label>
                        <input
                          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-brand placeholder:text-slate-500 text-slate-900"
                          placeholder="e.g., Roosevelt High School"
                          value={organizationName}
                          onChange={(e) => setOrganizationName(e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700">Your role</label>
                        <input
                          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-brand placeholder:text-slate-500 text-slate-900"
                          placeholder="e.g., Counselor, Teacher, Program Coordinator"
                          value={roleTitle}
                          onChange={(e) => setRoleTitle(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  )}

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-slate-700">
                        Email
                      </label>
                      <input
                        type="email"
                        className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-brand placeholder:text-slate-500 text-slate-900"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700">
                        Grade
                      </label>
                      <select
                        className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-brand text-slate-900"
                        value={studentGrade}
                        onChange={(e) => setStudentGrade(e.target.value)}
                        required
                      >
                        <option value="">Select grade</option>
                        <option>Elementary</option>
                        <option>Middle School</option>
                        <option>High School</option>
                        <option>College</option>
                        <option>Adult Learner</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-slate-700">
                        Subject
                      </label>
                      <input
                        className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-brand placeholder:text-slate-500 text-slate-900"
                        placeholder="e.g., Algebra, AP Lang"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700">
                        Preferred tutor (optional)
                      </label>
                      <input
                        className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-brand placeholder:text-slate-500 text-slate-900"
                        placeholder="e.g., Brady Kaminski"
                        value={preferredTutor}
                        onChange={(e) => setPreferredTutor(e.target.value)}
                      />
                    </div>
                  </div>

                  {isOrganization && (
                    <div className="grid gap-4 sm:grid-cols-3">
                      <div>
                        <label className="block text-sm font-medium text-slate-700">Request type</label>
                        <select
                          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-brand text-slate-900"
                          value={requestType}
                          onChange={(e) => setRequestType(e.target.value)}
                          required
                        >
                          <option value="">Select type</option>
                          <option>One-on-one tutoring</option>
                          <option>Small group (2–5 students)</option>
                          <option>Classroom workshop</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700">Number of students</label>
                        <input
                          type="number"
                          min="1"
                          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-brand placeholder:text-slate-500 text-slate-900"
                          placeholder="e.g., 12"
                          value={studentCount}
                          onChange={(e) => setStudentCount(e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700">Preferred start date</label>
                        <input
                          type="date"
                          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-brand text-slate-900"
                          value={startDate}
                          onChange={(e) => setStartDate(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-slate-700">
                      Your goals
                    </label>
                    <textarea
                      className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-brand placeholder:text-slate-500 text-slate-900"
                      rows={4}
                      placeholder="Tell us where you need help and what success looks like."
                      value={goals}
                      onChange={(e) => setGoals(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700">
                      Availability (days/times)
                    </label>
                    <textarea
                      className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-brand placeholder:text-slate-500 text-slate-900"
                      rows={3}
                      placeholder="e.g., Weeknights after 5pm, Saturdays 10–2"
                      value={availability}
                      onChange={(e) => setAvailability(e.target.value)}
                      required
                    />
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-full bg-brand text-white px-5 h-11 text-sm font-semibold hover:bg-brand-700"
                    >
                      Open email draft
                    </button>
                    <a
                      href={mailtoHref}
                      target="_blank"
                      className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white text-slate-800 px-5 h-11 text-sm font-semibold hover:bg-slate-50"
                    >
                      Open in new tab
                    </a>
                    <button
                      type="button"
                      onClick={copyMessage}
                      className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white text-slate-800 px-5 h-11 text-sm font-semibold hover:bg-slate-50"
                    >
                      Copy request
                    </button>
                    <button
                      type="button"
                      onClick={downloadSummary}
                      className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white text-slate-800 px-5 h-11 text-sm font-semibold hover:bg-slate-50"
                    >
                      Download request (txt)
                    </button>
                  </div>
                </form>
              </Reveal>
            </div>

            <aside className="space-y-6">
              <Reveal className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-base font-semibold text-slate-900">Quick contact</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>
                    Email: <a className="text-brand hover:text-brand-700" href="mailto:support@byodotutoring.com">support@byodotutoring.com</a>
                  </li>
                  <li>
                    Phone: <a className="text-brand hover:text-brand-700" href="tel:16232061165">623-206-1165</a>
                  </li>
                </ul>
              </Reveal>

              <Reveal className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-base font-semibold text-slate-900">What happens next</h3>
                <ol className="mt-3 list-decimal pl-5 text-sm text-slate-700 space-y-1">
                  <li>We'll reply within 24 hours.</li>
                  <li>We'll suggest a tutor and set up a free Zoom call.</li>
                  <li>Start 1-on-1 lessons&mdash;completely free.</li>
                </ol>
              </Reveal>

              <Reveal className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-base font-semibold text-slate-900">FAQ</h3>
                <div className="mt-3 space-y-3 text-sm text-slate-700">
                  <div>
                    <div className="font-medium">Do you charge for tutoring?</div>
                    <p>All of our services are free. We want to help as many students as possible.</p>
                  </div>
                  <div>
                    <div className="font-medium">Can I choose a specific tutor?</div>
                    <p>Yes&mdash;add their name above. If you're not sure, we'll match you.</p>
                  </div>
                  <div>
                    <div className="font-medium">How soon can we start?</div>
                    <p>Usually within a few days&mdash;often sooner.</p>
                  </div>
                </div>
              </Reveal>
            </aside>
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
