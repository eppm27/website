import { useState } from "react";
import { useTheme } from "../context/ThemeContext.jsx";
import emailjs from "@emailjs/browser";

// ⚠️ EmailJS Configuration
// You need to set these environment variables in Vercel:
// VITE_EMAILJS_SERVICE_ID - Your EmailJS Service ID
// VITE_EMAILJS_TEMPLATE_ID - Your EmailJS Template ID
// VITE_EMAILJS_PUBLIC_KEY - Your EmailJS Public Key (safe to expose)

// Initialize EmailJS on component load
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "");

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
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [messageSent, setMessageSent] = useState(false);
  const [sendError, setSendError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSendError(false);

    try {
      // EmailJS template variables that will be sent:
      // - to_email: eppmon27@gmail.com (hardcoded in template)
      // - from_name: user's name (from form)
      // - from_email: user's email (from form)
      // - subject: selected subject (from form)
      // - message: user's message (from form)

      const templateParams = {
        to_email: "eppmon27@gmail.com",
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      // Send email via EmailJS
      // ServiceID, TemplateID, and PublicKey come from environment variables
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      if (response.status === 200) {
        // Email sent successfully
        setIsSubmitting(false);
        setMessageSent(true);
        setFormData({ name: "", email: "", subject: "", message: "" });

        // Clear success message after 5 seconds
        setTimeout(() => setMessageSent(false), 5000);
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setIsSubmitting(false);
      setSendError(true);

      // Clear error message after 5 seconds
      setTimeout(() => setSendError(false), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span
            className={`inline-block text-xs font-bold tracking-widest uppercase ${
              isDark ? "text-sage-400" : "text-sage-600"
            }`}
          >
            Contact
          </span>
          <h2
            className={`mt-4 text-4xl sm:text-5xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}
          >
            Let's build something great.
          </h2>
          <p
            className={`mx-auto mt-6 max-w-3xl text-lg ${isDark ? "text-slate-300" : "text-slate-600"}`}
          >
            Whether you have a project ready or just want to chat about ideas,
            I'd love to hear from you. Get in touch.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-8">
            <div
              className={`rounded-lg px-6 py-8 sm:px-8 sm:py-10 border ${
                isDark
                  ? "bg-slate-800/40 border-sage-600/20"
                  : "bg-white border-sage-200/30"
              }`}
            >
              <p
                className={`text-sm uppercase tracking-[0.3em] ${
                  isDark ? "text-sage-400" : "text-sage-600"
                }`}
              >
                Ways to connect
              </p>
              <p
                className={`mt-4 text-lg ${
                  isDark ? "text-slate-300" : "text-slate-700"
                }`}
              >
                Drop me a note outlining what you're working on and the kind of
                support you're looking for. I'll follow up with next steps and a
                short introduction call.
              </p>
            </div>

            <div className="space-y-4">
              {contactMethods.map((method) => (
                <a
                  key={method.title}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    method.href.startsWith("http") ? "noreferrer" : undefined
                  }
                  className={`block rounded-lg p-5 transition sm:p-6 border ${
                    isDark
                      ? "bg-slate-800/40 border-sage-600/20 text-slate-300 hover:bg-slate-800/60"
                      : "bg-white border-sage-200/30 text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex flex-col gap-2">
                    <span
                      className={`text-sm uppercase tracking-[0.2em] ${
                        isDark ? "text-sage-400" : "text-sage-600"
                      }`}
                    >
                      {method.title}
                    </span>
                    <span
                      className={`text-base font-semibold ${
                        isDark ? "text-slate-100" : "text-slate-900"
                      }`}
                    >
                      {method.value}
                    </span>
                    <span
                      className={`text-sm ${
                        isDark ? "text-slate-400" : "text-slate-600"
                      }`}
                    >
                      {method.description}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            <div
              className={`rounded-lg p-6 border ${
                isDark
                  ? "bg-slate-800/40 border-sage-600/20"
                  : "bg-white border-sage-200/30"
              }`}
            >
              <p
                className={`text-sm font-semibold uppercase tracking-[0.2em] ${
                  isDark ? "text-sage-400" : "text-sage-600"
                }`}
              >
                What you can expect
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {responseStats.map((stat) => (
                  <div
                    key={stat.label}
                    className={`rounded-lg p-4 text-sm ${
                      isDark
                        ? "bg-slate-700/30 border border-sage-600/10 text-slate-300"
                        : "bg-sage-50 border border-sage-200 text-slate-700"
                    }`}
                  >
                    <p
                      className={`text-xs uppercase tracking-[0.2em] ${
                        isDark ? "text-slate-400" : "text-slate-600"
                      }`}
                    >
                      {stat.label}
                    </p>
                    <p
                      className={`mt-2 text-lg font-semibold ${
                        isDark ? "text-slate-100" : "text-slate-900"
                      }`}
                    >
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`rounded-lg p-8 sm:p-10 border ${
              isDark
                ? "bg-slate-800/40 border-sage-600/20"
                : "bg-white border-sage-200/30"
            }`}
          >
            <h3
              className={`text-xl font-semibold ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Send me a message
            </h3>
            <p
              className={`mt-3 text-sm ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Tell me a little about your project and the outcome you're aiming
              for. I'll respond with tailored next steps and availability.
            </p>

            {messageSent ? (
              <div
                className={`mt-8 rounded-lg p-6 text-center border ${
                  isDark
                    ? "bg-slate-800/40 border-sage-600/20"
                    : "bg-white border-sage-200/30"
                }`}
              >
                <p
                  className={`text-lg font-semibold ${
                    isDark ? "text-sage-400" : "text-sage-600"
                  }`}
                >
                  Message sent ✓
                </p>
                <p
                  className={`mt-2 text-sm ${
                    isDark ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  Thank you for reaching out. I'll respond within the next
                  business day.
                </p>
              </div>
            ) : sendError ? (
              <div
                className={`mt-8 rounded-lg p-6 text-center border ${
                  isDark
                    ? "bg-red-900/20 border-red-600/30"
                    : "bg-red-50 border-red-300"
                }`}
              >
                <p
                  className={`text-lg font-semibold ${
                    isDark ? "text-red-400" : "text-red-600"
                  }`}
                >
                  Message failed ✗
                </p>
                <p
                  className={`mt-2 text-sm ${
                    isDark ? "text-red-300" : "text-red-700"
                  }`}
                >
                  Something went wrong. Please try again or reach out directly
                  at{" "}
                  <a
                    href="mailto:eppmon27@gmail.com"
                    className="font-semibold underline hover:opacity-80"
                  >
                    eppmon27@gmail.com
                  </a>
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="text-xs uppercase tracking-[0.2em] text-slate-400">
                      Name
                    </label>
                    <input
                      className={`mt-2 w-full rounded-lg border px-4 py-3 text-sm ${
                        isDark
                          ? "bg-slate-700 border-slate-600 text-slate-100 placeholder-slate-500 focus:border-electric-500 focus:ring-electric-500/20"
                          : "bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus:border-electric-400 focus:ring-electric-400/20"
                      } focus:outline-none focus:ring-2`}
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-[0.2em] text-slate-400">
                      Email
                    </label>
                    <input
                      className={`mt-2 w-full rounded-lg border px-4 py-3 text-sm ${
                        isDark
                          ? "bg-slate-700 border-slate-600 text-slate-100 placeholder-slate-500 focus:border-electric-500 focus:ring-electric-500/20"
                          : "bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus:border-electric-400 focus:ring-electric-400/20"
                      } focus:outline-none focus:ring-2`}
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
                  <label className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    Subject
                  </label>
                  <select
                    className={`mt-2 w-full rounded-lg border px-4 py-3 text-sm ${
                      isDark
                        ? "bg-slate-700 border-slate-600 text-slate-100 focus:border-electric-500 focus:ring-electric-500/20"
                        : "bg-white border-slate-200 text-slate-900 focus:border-electric-400 focus:ring-electric-400/20"
                    } focus:outline-none focus:ring-2`}
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a topic</option>
                    <option value="New opportunity">New opportunity</option>
                    <option value="Collaboration idea">
                      Collaboration idea
                    </option>
                    <option value="Product consultation">
                      Product consultation
                    </option>
                    <option value="Speaking engagement">
                      Speaking engagement
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    Message
                  </label>
                  <textarea
                    className={`mt-2 h-32 w-full rounded-lg border px-4 py-3 text-sm resize-none ${
                      isDark
                        ? "bg-slate-700 border-slate-600 text-slate-100 placeholder-slate-500 focus:border-electric-500 focus:ring-electric-500/20"
                        : "bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus:border-electric-400 focus:ring-electric-400/20"
                    } focus:outline-none focus:ring-2`}
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
                  className={`btn-primary w-full justify-center ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send message"}
                </button>
              </form>
            )}
          </div>
        </div>

        <div
          className={`mt-16 rounded-lg p-10 text-center border ${
            isDark
              ? "bg-slate-800/40 border-sage-600/20"
              : "bg-white border-sage-200/30"
          }`}
        >
          <h3
            className={`text-2xl font-bold ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Ready to get started?
          </h3>
          <p
            className={`mt-3 text-sm ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Drop me an email or give me a call. I'll get back to you within 24
            hours.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:eppmon27@gmail.com"
              className={`rounded-lg px-6 py-3 text-sm font-semibold transition ${
                isDark
                  ? "bg-sage-600 text-white hover:bg-sage-700"
                  : "bg-sage-600 text-white hover:bg-sage-700"
              }`}
            >
              Email me
            </a>
            <a
              href="tel:0422095774"
              className={`rounded-lg border px-6 py-3 text-sm font-semibold transition ${
                isDark
                  ? "border-sage-600/30 text-sage-400 hover:bg-sage-600/10"
                  : "border-sage-300 text-sage-700 hover:bg-sage-50"
              }`}
            >
              Call me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
