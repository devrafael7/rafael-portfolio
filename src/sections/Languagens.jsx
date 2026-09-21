import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const BASE_URL = import.meta.env.BASE_URL;

const languages = [
  {
    language: "Português",
    level: "Nativo",
    stars: 5,
    starColor: "text-green-400",
    starHover: "group-hover:text-green-300",
    flag: `${BASE_URL}images/flag (1).png`,
    description: "Native language",
  },
  {
    language: "English",
    level: "B2 / C1",
    stars: 4,
    starColor: "text-red-400",
    starHover: "group-hover:text-red-300",
    flag: `${BASE_URL}images/flag.png`,
    description: "Advanced",
  },
  {
    language: "Español",
    level: "B1",
    stars: 3,
    starColor: "text-orange-500",
    starHover: "group-hover:text-orange-300",
    flag: `${BASE_URL}images/flag (2).png`,
    description: "Intermediate",
  },
];

const Languages = () => {
  useGSAP(() => {
    const items = gsap.utils.toArray(".language-item");

    items.forEach((item, index) => {
      const direction = index === 0 ? -80 : index === 1 ? 0 : 80;

      gsap.fromTo(
        item,
        {
          opacity: 0,
          x: direction,
          y: 40,
          scale: 0.85,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: 1.1,
          delay: index * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            once: true,
          },
        }
      );
    });
  }, []);

  return (
    <section
      id="languages"
      className="section-padding relative overflow-hidden"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[120px]" />

      <div className="relative z-10 w-full px-5 md:px-10">
        <TitleHeader
          title="Languages"
          sub="🌎 Communication across different languages"
        />

        <div className="mx-auto mt-20 w-full max-w-5xl">
          <div className="grid grid-cols-1 gap-20 md:grid-cols-3 md:gap-8">
            {languages.map((language, index) => (
              <div
                key={language.language}
                className="language-item group relative flex flex-col items-center text-center"
              >
                {/* Número */}
                <span className="absolute -top-8 text-xs font-medium tracking-[0.3em] text-white/20 transition-all duration-500 group-hover:text-blue-300">
                  0{index + 1}
                </span>

                {/* Bandeira */}
                <div className="language-flag relative h-20 w-20 overflow-hidden rounded-md shadow-[0_10px_40px_rgba(59,130,246,0.12)] transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_15px_50px_rgba(59,130,246,0.35)]">
                  <img
                    src={language.flag}
                    alt={`Bandeira ${language.language}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-0" />
                </div>

                {/* Nome */}
                <h3 className="mt-7 text-2xl font-semibold text-white transition-all duration-500 group-hover:-translate-y-2 group-hover:text-blue-200">
                  {language.language}
                </h3>

                {/* Nível */}
                <p className="mt-2 text-sm tracking-wide text-white/40 transition-all duration-500 group-hover:text-white/70">
                  {language.level}
                </p>

                {/* Estrelas */}
                <div className="mt-4 flex gap-1.5">
                  {[...Array(5)].map((_, starIndex) => (
                    <span
                      key={starIndex}
                      className={`text-2xl leading-none transition-all duration-300 ${
                        starIndex < language.stars
                          ? `${language.starColor} ${language.starHover} group-hover:scale-110`
                          : "text-white/10 group-hover:text-white/25"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Descrição */}
                <p className="mt-4 text-xs uppercase tracking-[0.18em] text-white/25 transition-all duration-500 group-hover:text-blue-300/70">
                  {language.description}
                </p>

                {/* Indicador */}
                <div className="mt-6 flex items-center gap-2 opacity-40 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100">
                  <span className="h-2 w-2 rounded-full bg-blue-300 transition-all duration-500 group-hover:scale-125" />

                  <span className="h-px w-8 bg-blue-300/40 transition-all duration-500 group-hover:w-16 group-hover:bg-blue-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;