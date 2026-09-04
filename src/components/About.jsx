const keySkills = [
  "TypeScript, JavaScript, Python and Java",
  "React, Next.js, FastAPI, Spring Boot and Node.js",
  "PostgreSQL, MongoDB, REST APIs and third-party integrations",
  "Docker, CI/CD, GitHub Actions, Cypress, Vitest and JUnit",
];

const strengths = [
  {
    title: "Full-stack development",
    body: "Build frontend, API and database features that work together.",
  },
  {
    title: "Debugging",
    body: "Trace issues across the stack and deliver maintainable fixes.",
  },
  {
    title: "AI integration",
    body: "Connect applications with AI and external data services.",
  },
];

const About = () => {
  return (
    <section id="about" className="section-reveal py-14 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div>
          <span className="section-kicker">What I bring</span>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-ink sm:text-5xl">
            Practical full-stack range.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-ink/70">
            I work across product features, APIs, databases, testing and
            delivery.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
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
        </div>

        <div className="notebook-card mt-4 p-5">
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
    </section>
  );
};

export default About;
