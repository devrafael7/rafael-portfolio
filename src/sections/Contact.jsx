import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience";

const Contact = () => {
  const formRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      );

      setForm({
        name: "",
        email: "",
        message: "",
      });

      setStatus("success");
    } catch (error) {
      console.error("EmailJS Error:", error);

      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />

        <div className="grid-12-cols mt-16">

          {/* FORMULÁRIO */}
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                {/* Nome */}
                <div>
                  <label htmlFor="name">Your name</label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What’s your good name?"
                    required
                  />
                </div>

                {/* E-mail */}
                <div>
                  <label htmlFor="email">Your Email</label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What’s your email address?"
                    required
                  />
                </div>

                {/* Mensagem */}
                <div>
                  <label htmlFor="message">Your Message</label>

                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    required
                  />
                </div>

                {/* Botão */}
                <button
                  type="submit"
                  disabled={loading}
                  className="disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <div className="cta-button group">
                    <div className="bg-circle" />

                    <p className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </p>

                    <div className="arrow-wrapper">
                      <img
                        src={`${import.meta.env.BASE_URL}images/arrow-down.svg`}
                        alt="arrow"
                      />
                    </div>
                  </div>
                </button>

                {/* Mensagem de sucesso */}
                {status === "success" && (
                  <p className="text-center text-sm text-green-400">
                    Message sent successfully! 🚀
                  </p>
                )}

                {/* Mensagem de erro */}
                {status === "error" && (
                  <p className="text-center text-sm text-red-400">
                    Something went wrong. Please try again.
                  </p>
                )}

                {/* E-mail direto */}
                <div className="border-t border-white/10 pt-5 text-center">
                  <p className="text-sm text-white/50">
                    Or contact me directly
                  </p>

                  <a
                    href="mailto:rafael17.oliveira03@gmail.com"
                    className="mt-2 inline-block text-sm text-blue-400 transition-colors hover:text-blue-800"
                  >
                    rafael17.oliveira03@gmail.com
                  </a>
                </div>
              </form>
            </div>
          </div>

          {/* MODELO 3D */}
          <div className="xl:col-span-7 min-h-96">
            <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;