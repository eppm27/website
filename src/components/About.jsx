import { MotionItem, Reveal, Stagger } from "./MotionPrimitives";
import { SectionLabel, Sticker, TechTag } from "./ScrapbookBits";

const skills = [
  "React",
  "TypeScript",
  "Python",
  "FastAPI",
  "Java",
  "SQL",
  "Docker",
  "REST APIs",
  "MongoDB",
  "CI/CD",
  "Testing",
  "OpenAI",
];

const education = [
  ["USYD", "MPE Software"],
  ["UNSW", "BSc Computer Science"],
];

const About = () => {
  return (
    <Reveal id="about" className="scrap-section">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionLabel number="01">things I work with ✦</SectionLabel>

        <div className="skills-scrap mt-6">
          <Sticker tone="peach" rotate="-3deg" className="skills-sticker">
            full-stack systems
          </Sticker>
          <Stagger className="skill-cloud">
            {skills.map((skill) => (
              <MotionItem key={skill}>
                <TechTag>{skill}</TechTag>
              </MotionItem>
            ))}
          </Stagger>

          <div className="education-notes">
            {education.map(([school, degree], index) => (
              <div
                key={school}
                className="paper-note"
                style={{ "--rotate": index === 0 ? "-1.5deg" : "1.2deg" }}
              >
                <span>{school}</span>
                <strong>{degree}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default About;
