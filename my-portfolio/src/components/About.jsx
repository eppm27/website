const About = () => {
  const values = [
    {
      title: "Empathy-first design",
      description:
        "I listen before building to understand what people truly need, then translate those insights into purposeful interfaces.",
    },
    {
      title: "Measure what matters",
      description:
        "I pair experimentation with metrics so every shipped feature improves clarity, speed, or business outcomes.",
    },
    {
      title: "Share the journey",
      description:
        "I love mentoring, documenting decisions clearly, and creating healthy feedback loops across teams.",
    },
  ];

  const education = [
    {
      title: "Master of Professional Engineering (Software)",
      institution: "University of Sydney",
      period: "Aug 2025 — Present",
      highlights: [
        "Agile Software Development, Advanced Systems Design, Security Engineering",
        "USYD International Student Award (~$26K merit scholarship)",
      ],
    },
    {
      title: "Bachelor of Science (Computer Science)",
      institution: "University of New South Wales",
      period: "Graduated Jun 2025",
      highlights: ["UNSW International Student Award (~$13K merit scholarship)", "Focus on software architecture & intelligent systems"],
    },
  ];

  const traits = [
    { label: "Curious technologist", description: "Always exploring new tools like Next.js, GraphQL, and modern DevOps." },
    { label: "Systems thinker", description: "Comfortable moving between product requirements, data, and implementation detail." },
    { label: "Facilitator", description: "Enjoy working across disciplines to align stakeholders and ship quickly." },
  ];

  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="eyebrow">About</span>
            <h2 className="section-title mt-4 text-4xl text-slate-900 sm:text-5xl">
              Product-minded engineer dedicated to building experiences people trust.
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              I blend strategy, design, and engineering to help teams move from ideas to polished solutions.
              Over the past few years I've built chat platforms, learning experiences, and productivity tools
              that stay resilient under real-world pressure.
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {values.map((value) => (
                <div key={value.title} className="rounded-2xl border border-slate-100 bg-slate-50/60 p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-800">{value.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{value.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-3xl bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-8 ring-1 ring-blue-100">
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
                In a nutshell
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {traits.map((trait) => (
                  <li key={trait.label}>
                    <span className="font-semibold text-slate-800">{trait.label}</span>
                    {": "}
                    {trait.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-10">
            <div className="rounded-3xl bg-slate-900 px-8 py-10 text-slate-100 shadow-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-blue-200">Snapshot</p>
              <p className="mt-4 text-2xl font-semibold text-white">
                Full-stack specialist with a habit of turning messy requirements into refined product flows.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                <li>• React, Node.js, TypeScript, Firebase, AWS</li>
                <li>• UX research, systems design, experiment-driven development</li>
                <li>• Leading agile pods and championing inclusive teamwork</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
                Education
              </h3>
              <div className="space-y-6">
                {education.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                    <div className="flex flex-col gap-2">
                      <h4 className="text-lg font-semibold text-slate-800">{item.title}</h4>
                      <span className="text-sm text-blue-600">{item.institution}</span>
                      <span className="text-xs uppercase tracking-[0.2em] text-slate-400">{item.period}</span>
                    </div>
                    <ul className="mt-4 space-y-2 text-sm text-slate-600">
                      {item.highlights.map((detail) => (
                        <li key={detail}>• {detail}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-6 text-sm text-slate-600">
              <p>
                Outside of code you'll find me facilitating design jams, experimenting with generative AI
                prototypes, or exploring Sydney's coffee scene. I'm always keen to collaborate on meaningful
                ideas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
