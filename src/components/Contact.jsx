import { Reveal } from "./MotionPrimitives";
import { SectionLabel, Sticker } from "./ScrapbookBits";

const actions = [
  {
    label: "Email",
    href: "mailto:eppmon27@gmail.com",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ei-phyu-phyu-mon-8517181ba/",
  },
  {
    label: "GitHub",
    href: "https://github.com/eppm27",
  },
  {
    label: "Download résumé",
    href: "/Ei-Phyu-Phyu-Mon-CV.pdf",
    download: true,
  },
];

const Contact = () => {
  return (
    <Reveal id="contact" className="scrap-section">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="contact-panel">
          <Sticker tone="peach" rotate="-2deg" className="contact-sticker">
            find me online ↗
          </Sticker>
          <div className="relative z-10 grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <SectionLabel number="04">let&apos;s talk ✦</SectionLabel>
              <h2 className="mt-4 text-4xl font-black leading-tight text-ink sm:text-5xl">
                Got something interesting to build?
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-ink/66">
                I&apos;m open to software engineering roles across full-stack,
                backend and applied AI work.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:justify-end">
              {actions.map((action) => (
                <a
                  key={action.label}
                  href={action.href}
                  target={action.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    action.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  download={action.download}
                  className="btn-quiet focus-ring"
                >
                  {action.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default Contact;
