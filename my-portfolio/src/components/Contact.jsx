import { useState } from "react";

const contactMethods = [
  {
    title: "Email",
    value: "eppmon27@gmail.com",
    description: "Best for project collaborations or opportunities.",
    href: "mailto:eppmon27@gmail.com",
  },
  {
    title: "Phone",
    value: "0422 095 774",
    description: "Available Monday to Friday, 9am – 6pm AEST.",
    href: "tel:0422095774",
  },
  {
    title: "LinkedIn",
    value: "https://www.linkedin.com/in/ei-phyu-phyu-mon-8517181ba/",
    description: "Let's stay in touch and explore ideas together.",
    href: "https://www.linkedin.com/in/ei-phyu-phyu-mon-8517181ba/",
  },
  {
    title: "GitHub",
    value: "github.com/eppm27",
    description: "Browse recent experiments and open-source work.",
    href: "https://github.com/eppm27",
  },
];

const responseStats = [
  { label: "Response time", value: "<24 hrs" },
  { label: "Timezone coverage", value: "3+" },
  { label: "Message open rate", value: "100%" },
  { label: "Collaboration mindset", value: "Always" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [messageSent, setMessageSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setMessageSent(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setMessageSent(false), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="section-eyebrow">Contact</span>
          <h2 className="section-title mt-4 text-4xl sm:text-5xl text-white">
            Let's build your next thoughtful experience.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
            Whether you have a roadmap ready to go or an idea that needs framing, I'm ready to partner with
            you from strategy through launch.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-8">
            <div className="rounded-3xl px-6 py-8 shadow-xl sm:px-8 sm:py-10 bg-slate-800 text-slate-100">
              <p className="text-sm uppercase tracking-[0.3em] text-blue-200">Ways to connect</p>
              <p className="mt-4 text-lg text-slate-200">
                Drop me a note outlining what you're working on and the kind of support you're looking for.
                I'll follow up with next steps and a short introduction call.
              </p>
            </div>

            <div className="space-y-4">
              {contactMethods.map((method) => (
                <a
                  key={method.title}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noreferrer" : undefined}
                  className="block rounded-2xl p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:p-6 border border-slate-700 bg-slate-800/60 text-slate-100"
                >
                  <div className="flex flex-col gap-2">
                    <span className="text-sm uppercase tracking-[0.2em] text-blue-400">
                      {method.title}
                    </span>
                    <span className="text-base font-semibold text-slate-100">{method.value}</span>
                    <span className="text-sm text-slate-300">{method.description}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="rounded-2xl p-6 border border-slate-700 bg-slate-800/50">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                What you can expect
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {responseStats.map((stat) => (
                  <div key={stat.label} className="rounded-xl p-4 text-sm bg-slate-700/50 text-slate-300">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{stat.label}</p>
                    <p className="mt-2 text-lg font-semibold text-slate-100">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-3xl p-8 shadow-xl sm:p-10 bg-slate-800/60 ring-1 ring-slate-700">
            <h3 className="text-xl font-semibold text-slate-100">Start a conversation</h3>
            <p className="mt-3 text-sm text-slate-300">
              Tell me a little about your project and the outcome you're aiming for. I'll respond with tailored
              next steps and availability.
            </p>

            {messageSent ? (
              <div className="mt-8 rounded-2xl p-6 text-center shadow-md bg-slate-700">
                <p className="text-lg font-semibold text-emerald-400">Message sent</p>
                <p className="mt-2 text-sm text-slate-300">
                  Thank you for reaching out. I'll respond within the next business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="text-xs uppercase tracking-[0.2em] text-slate-400">Name</label>
                    <input
                      className="mt-2 w-full rounded-xl border px-4 py-3 text-sm focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-100 border-slate-600 bg-slate-700 text-slate-100 placeholder-slate-400 focus:ring-blue-500/20 focus:border-blue-400"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-[0.2em] text-slate-400">Email</label>
                    <input
                      className="mt-2 w-full rounded-xl border px-4 py-3 text-sm focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-100 border-slate-600 bg-slate-700 text-slate-100 placeholder-slate-400 focus:ring-blue-500/20 focus:border-blue-400"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-slate-400">Subject</label>
                  <select
                    className="mt-2 w-full rounded-xl border px-4 py-3 text-sm focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-100 border-slate-600 bg-slate-700 text-slate-100 focus:ring-blue-500/20 focus:border-blue-400"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a topic</option>
                    <option value="opportunity">New opportunity</option>
                    <option value="collaboration">Collaboration idea</option>
                    <option value="consultation">Product consultation</option>
                    <option value="speaking">Speaking engagement</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-slate-400">Message</label>
                  <textarea
                    className="mt-2 h-32 w-full rounded-xl border px-4 py-3 text-sm focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-100 border-slate-600 bg-slate-700 text-slate-100 placeholder-slate-400 focus:ring-blue-500/20 focus:border-blue-400 resize-none"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share context, goals, and timelines."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:from-blue-500 hover:to-purple-500 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? "Sending..." : "Send message"}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-16 rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-10 text-center text-white shadow-xl sm:px-8 sm:py-12">
          <h3 className="text-2xl font-semibold">Ready to bring clarity to your product roadmap?</h3>
          <p className="mt-3 text-sm text-blue-100">
            I can help with discovery, prototyping, and production-ready delivery. Let's turn your brief into a
            confident plan.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:eppmon27@gmail.com"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold !text-blue-600 transition hover:bg-blue-50"
            >
              Email me a brief
            </a>
            <a
              href="tel:0422095774"
              className="rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Book a quick call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
