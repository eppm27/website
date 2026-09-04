const keySkills = [
  "TypeScript, JavaScript, Python and Java",
  "React, Next.js, FastAPI, Spring Boot and Node.js",
  "PostgreSQL, MongoDB, REST APIs and third-party integrations",
  "Docker, CI/CD, GitHub Actions, Cypress, Vitest and JUnit",
];

const strengths = [
  {
    title: "Full-stack implementation",
    body: "I build across UI, API and data layers so features work end to end.",
  },
  {
    title: "Debugging and delivery",
    body: "I trace defects across frontend and backend code, write tests and keep changes maintainable.",
  },
  {
    title: "AI and data integration",
    body: "My project work includes OpenAI and financial-data APIs, MongoDB/PostgreSQL data flows and analytics features.",
  },
];

const About = () => {
  return (
    <section id="about" className="section-reveal py-16 md:py-24">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <div>
          <span className="section-kicker">What I bring</span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight text-ink">
            Full-stack range, grounded in student and team projects.
          </h2>
          <p className="mt-6 text-base leading-8 text-ink/70">
            I completed a Bachelor of Science (Computer Science) at UNSW in
            June 2025 and am completing a Master of Professional Engineering
            (Software) at the University of Sydney, August 2025-present. I am
            looking for software engineering internships and early-career roles
            where I can contribute across product features, APIs, databases,
            testing and delivery.
          </p>
        </div>

        <div className="grid gap-4">
          {strengths.map((item, index) => (
            <article
              key={item.title}
              className="notebook-card p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(16,24,40,0.1)]"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <h3 className="text-lg font-bold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-ink/70">{item.body}</p>
            </article>
          ))}

          <div className="notebook-card p-5">
            <h3 className="text-lg font-bold text-ink">Core technologies</h3>
            <ul className="mt-4 grid gap-2 text-sm text-ink/70 sm:grid-cols-2">
              {keySkills.map((skill) => (
                <li key={skill} className="flex items-start gap-3">
                  <span className="mt-2 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-sky"></span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
