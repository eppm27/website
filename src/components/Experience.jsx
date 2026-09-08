import { MotionItem, Reveal, Stagger } from "./MotionPrimitives";
import { SectionLabel, Sticker } from "./ScrapbookBits";

const experience = [
  {
    date: "2025-2026",
    place: "Myed.it",
    role: "Full Stack Engineer Intern",
    note: "Debugged Next.js, React and REST API issues.",
  },
  {
    date: "2025",
    place: "UNSW WIL",
    role: "Full Stack Engineer",
    note: "Built React, Node.js, MongoDB and OpenAI features.",
  },
  {
    date: "2025",
    place: "Practera",
    role: "Student Consultant",
    note: "Turned client requirements into technical recommendations.",
  },
];

const Experience = () => {
  return (
    <Reveal id="experience" className="scrap-section">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="experience-scrap">
          <div>
            <SectionLabel number="03">experience</SectionLabel>
            <Sticker tone="sky" rotate="2deg" className="mt-5">
              practical team work
            </Sticker>
          </div>

          <Stagger className="experience-stack">
            {experience.map((item) => (
              <MotionItem key={`${item.place}-${item.role}`}>
                <article className="xp-note">
                  <span>{item.date}</span>
                  <h3>{item.place}</h3>
                  <p>{item.role}</p>
                  <strong>{item.note}</strong>
                </article>
              </MotionItem>
            ))}
          </Stagger>
        </div>
      </div>
    </Reveal>
  );
};

export default Experience;
