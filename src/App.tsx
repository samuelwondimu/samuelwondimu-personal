const experience = [
  {
    title: "Lead Frontend Engineer",
    company: "Connect IME",
    location: "Remote, Kensington, England",
    period: "Nov 2023 — Present",
    numeral: "I",
    bullets: [
      "Lead all frontend development on a video-based hiring platform supporting one-way interviews, live video calls, and webinars used by businesses globally.",
      "Architected and built real-time webinar and video call features using the Amazon Chime SDK.",
      "Delivered a live video streaming service with integrated live chat using AWS IVS.",
      "Established frontend standards and code architecture in Next.js and TypeScript, improving team consistency and maintainability.",
      "Partnered closely with backend engineers to design and integrate scalable APIs for production workloads.",
    ],
  },
  {
    title: "Full Stack Engineer",
    company: "Birl.La",
    location: "Remote, Los Angeles, CA",
    period: "Jun 2023 — Nov 2023",
    numeral: "II",
    bullets: [
      "Built a full-stack blog platform from scratch using Next.js and Sanity CMS, handling both frontend and content infrastructure.",
      "Migrated 500+ legacy blog posts from WordPress to Sanity with full data integrity and improved content structure.",
      "Engineered custom Sanity components for rich media embedding Spotify, YouTube, SoundCloud, and Twitter enabling editors to build dynamic posts without code.",
      "Developed an AI-powered blog generator that learns a user's writing style and generates on-brand content drafts.",
      "Implemented automated email marketing workflows triggered on content published via Sanity hooks.",
    ],
  },
  {
    title: "Full Stack Developer, Contract",
    company: "Pleasurealm Ltd",
    location: "Remote, London, England",
    period: "Feb 2023 — Apr 2023",
    numeral: "III",
    bullets: [
      "Led a full migration of a legacy .NET job board to a modern stack built on Next.js and Sanity CMS.",
      "Restructured and imported all historical job listing data into the new CMS without data loss.",
      "Rebuilt the UI from the ground up, significantly improving UX and page performance.",
      "Built a job application and automated mailing system for applicant communications.",
      "Trained and mentored the client team on Sanity CMS workflows post-handover.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Freelance · Upwork",
    location: "Remote",
    period: "Oct 2021 — Jan 2023",
    numeral: "IV",
    bullets: [
      "Delivered projects across med-tech, SaaS, and marketing for clients internationally.",
      "Built and maintained marketing websites and web applications using React, Next.js, and Gatsby.",
      "Wrote end-to-end test suites to improve product reliability across client codebases.",
      "Designed a custom Sanity + Cloudinary media storage system — a reusable schema plugin with typed metadata, letting the frontend select the correct rendering component via GROQ.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Two-F Capital",
    location: "Addis Ababa, Ethiopia",
    period: "Jul 2021 — Feb 2022",
    numeral: "V",
    bullets: [
      "Built 2 large-scale internal dashboards for data-driven business operations using React, TypeScript, and Firebase.",
      "Delivered 5 marketing websites with modern, fully responsive UI.",
      "Contributed to a React Native ride-hailing app, building core screens and navigation flows.",
      "Developed a web-based vehicle inspection system for garage management operations.",
    ],
  },
];

const skillGroups = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Gatsby",
  "React Native",
  "Node.js",
  "REST APIs",
  "Sanity CMS",
  "GROQ",
  "WordPress",
  "AWS Chime SDK",
  "AWS IVS",
  "Cloudinary",
  "E2E Testing",
  "Git",
  "CI/CD",
];

function SectionHeading({
  numeral,
  eyebrow,
  title,
}: {
  numeral: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-12 flex items-end gap-6">
      <span className="font-serif text-4xl leading-none font-medium text-shu select-none">
        {numeral}
      </span>
      <div>
        <p className="text-xs tracking-[0.35em] text-ink-faint uppercase">
          {eyebrow}
        </p>
        <h2 className="mt-1 font-serif text-2xl tracking-[0.08em] text-ink sm:text-3xl">
          {title}
        </h2>
      </div>
      <div className="mb-2 h-px flex-1 bg-ink/10" />
    </div>
  );
}

function App() {
  return (
    <main className="washi relative min-h-screen text-ink">
      {/* vertical side rails */}
      <div className="pointer-events-none fixed top-0 left-6 bottom-0 hidden w-px bg-ink/10 lg:block" />
      <div className="pointer-events-none fixed top-0 right-6 bottom-0 hidden w-px bg-ink/10 lg:block" />
      <p className="vertical-rl pointer-events-none fixed top-1/2 left-2 hidden -translate-y-1/2 text-[10px] tracking-[0.5em] text-ink-faint uppercase select-none lg:block">
        Samuel Wondimu — Full Stack Engineer
      </p>
      <p className="vertical-rl pointer-events-none fixed top-1/2 right-2 hidden -translate-y-1/2 text-[10px] tracking-[0.5em] text-ink-faint uppercase select-none lg:block">
        Crafted with intention
      </p>

      <div className="mx-auto max-w-3xl px-6 py-16 sm:px-10 sm:py-24">
        {/* ─── HERO ─── */}
        <header className="relative">
          <p className="text-center text-[11px] tracking-[0.6em] text-ink-faint uppercase">
            Curriculum Vitae
          </p>

          <div className="mt-16 text-center">
            <h1 className="font-serif text-5xl leading-[1.05] font-medium tracking-tight text-ink sm:text-7xl">
              Samuel Wondimu
              <span className="block">Woldeyohannes</span>
            </h1>

            <div className="mt-10 flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-shu" />
              <p className="text-xs tracking-[0.4em] text-ink-soft uppercase">
                Full Stack Engineer
              </p>
              <span className="h-px w-12 bg-shu" />
            </div>

            <p className="mt-6 text-sm tracking-[0.3em] text-ink-faint">
              Next.js · React · TypeScript · AWS · Sanity CMS
            </p>
          </div>

          <address className="mt-14 flex flex-col items-center gap-3 text-sm text-ink-soft not-italic sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-6">
            <span>Addis Ababa, Ethiopia</span>
            <span className="hidden text-shu sm:inline">◇</span>
            <a href="tel:+251913577348" className="transition hover:text-shu">
              +251 913 577 348
            </a>
            <span className="hidden text-shu sm:inline">◇</span>
            <a
              href="mailto:wsamuelwondimu@gmail.com"
              className="transition hover:text-shu"
            >
              wsamuelwondimu@gmail.com
            </a>
            <span className="hidden text-shu sm:inline">◇</span>
            <a
              href="https://linkedin.com/in/samuelwondimu/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-shu"
            >
              linkedin.com/in/samuelwondimu
            </a>
          </address>
        </header>

        <div className="my-20 flex items-center justify-center gap-3 text-shu">
          <span className="h-px w-16 bg-ink/10" />
          <span className="text-lg select-none">❖</span>
          <span className="h-px w-16 bg-ink/10" />
        </div>

        {/* ─── PROFILE ─── */}
        <section>
          <SectionHeading numeral="01" eyebrow="Introduction" title="Profile" />
          <p className="border-l-2 border-shu pl-6 font-serif text-lg leading-loose text-ink-soft sm:text-xl sm:leading-loose">
            Full Stack Engineer with 4+ years of experience building
            production-grade web platforms for international companies across
            the UK, US, and Ethiopia. Deep expertise in Next.js, TypeScript, and
            Sanity CMS, with specialized experience delivering real-time video
            systems using AWS Amazon Chime and IVS — comfortable leading
            frontend architecture, mentoring clients, and owning projects
            end-to-end.
          </p>
        </section>

        {/* ─── EXPERIENCE ─── */}
        <section className="mt-24">
          <SectionHeading numeral="02" eyebrow="Career" title="Experience" />

          <div className="space-y-16">
            {experience.map((item) => (
              <article
                key={`${item.company}-${item.title}`}
                className="group relative"
              >
                <div className="items-baseline space-y-4">
                  <div className="flex items-baseline gap-4">
                    <span className="font-serif text-xl font-medium text-shu select-none">
                      {item.numeral}
                    </span>
                    <div>
                      <h3 className="font-serif text-xl font-medium text-ink">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <p className="shrink-0 font-mono text-[11px] tracking-widest whitespace-nowrap text-ink-faint">
                    {item.period}
                  </p>
                  <p className="mt-0.5 text-sm tracking-[0.15em] text-ink-soft uppercase">
                    {item.company}
                    <span className="mx-2 text-ink-faint">·</span>
                    <span className="normal-case italic">{item.location}</span>
                  </p>
                </div>

                <ul className="mt-5 space-y-2.5 border-l border-ink/10 pl-9 text-[15px] leading-relaxed text-ink-soft">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="relative">
                      <span className="absolute top-[0.62em] left-[-2.53rem] text-[9px] text-shu select-none">
                        ◈
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* ─── SKILLS ─── */}
        <section className="mt-24">
          <SectionHeading numeral="03" eyebrow="Stack" title="Craft & Tools" />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {skillGroups.map((skill) => (
              <div
                key={skill}
                className="group flex aspect-[3/1] items-center justify-center border border-ink/15 bg-paper-bright/60 text-[13px] tracking-wide text-ink-soft transition duration-300 hover:border-shu hover:bg-shu hover:text-white"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* ─── EDUCATION ─── */}
        <section className="mt-24">
          <SectionHeading numeral="04" eyebrow="Study" title="Education" />
          <div className="flex items-baseline justify-between gap-4 border-b border-ink/10 pb-6">
            <div>
              <h3 className="font-serif text-xl font-medium text-ink">
                B.Sc. Computer Science
              </h3>
              <p className="mt-1 text-sm text-ink-soft">
                Ningo University of Technology
              </p>
            </div>
            <p className="font-mono text-[11px] tracking-widest text-ink-faint">
              2017 — 2021
            </p>
          </div>
        </section>

        {/* ─── FOOTER ─── */}
        <footer className="mt-28 pb-4 text-center">
          <p className="text-sm tracking-[0.4em] text-ink-faint uppercase select-none">
            Thank you for reading
          </p>
          <p className="mt-3 text-xs tracking-[0.3em] text-ink-faint uppercase">
            Samuel Wondimu — {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </main>
  );
}

export default App;
