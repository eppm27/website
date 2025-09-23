import { useEffect, useMemo, useState } from "react";

const Home = () => {
  const statements = useMemo(
    () => [
      "Designing calm, human-centered products that scale.",
      "Translating complex problems into elegant interfaces.",
      "Championing measurable impact with thoughtful engineering.",
    ],
    []
  );

  const focusAreas = [
    {
      title: "Full-Stack Engineering",
      description:
        "React, Node.js, TypeScript, and cloud platforms to ship production-ready experiences.",
    },
    {
      title: "Product Strategy",
      description:
        "Pairing data with intuition to deliver experiences that feel effortless to use.",
    },
    {
      title: "Team Leadership",
      description:
        "Driving collaboration, mentoring engineers, and keeping quality at the core.",
    },
  ];

  const metrics = [
    { label: "Years crafting software", value: "2+" },
    { label: "Products launched", value: "5" },
    { label: "Scholarships awarded", value: "$39K" },
  ];

  const [headlineIndex, setHeadlineIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % statements.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [statements.length]);

  return (
    <section id="home" className="relative overflow-hidden py-32">
      <div className="absolute inset-0 floating-dots" aria-hidden="true"></div>
      <div className="relative mx-auto flex max-w-6xl flex-col gap-20 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-16">
        <div className="flex-1">
          <span className="eyebrow">Software engineer & Product partner</span>
          <h1 className="section-title mt-6 text-4xl text-slate-900 sm:text-5xl lg:text-6xl">
            Building digital experiences that feel considered, intentional, and fast.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-600">
            I'm Ei Phyu Phyu Mon — a full-stack engineer who blends product thinking with clean engineering.
            I collaborate with teams to craft intuitive journeys, reduce friction, and ship features that
            people love to use.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-500"
            >
              View recent work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-600"
            >
              Let's collaborate
            </a>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.label} className="glass-panel rounded-2xl p-6 shadow-sm">
                <span className="text-3xl font-semibold text-blue-600">{metric.value}</span>
                <p className="mt-2 text-sm text-slate-500">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <div className="relative">
            <div className="absolute -left-10 -top-6 h-32 w-32 rounded-full bg-blue-100 blur-3xl" aria-hidden="true"></div>
            <div className="absolute -right-14 bottom-0 h-40 w-40 rounded-full bg-purple-100 blur-3xl" aria-hidden="true"></div>
            <div className="relative rounded-3xl bg-white/80 p-8 shadow-xl ring-1 ring-slate-200/70">
              <p className="text-sm uppercase tracking-[0.3em] text-blue-600">Currently focused on</p>
              <p className="mt-4 text-xl font-semibold text-slate-800">{statements[headlineIndex]}</p>
              <div className="mt-8 space-y-6">
                {focusAreas.map((item) => (
                  <div key={item.title} className="rounded-xl border border-slate-100/70 p-5">
                    <h3 className="font-semibold text-slate-800">{item.title}</h3>
                    <p className="mt-2 text-sm text-slate-500">{item.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex items-center gap-3 text-sm text-slate-500">
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
                Available for full-time roles & collaborations
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
