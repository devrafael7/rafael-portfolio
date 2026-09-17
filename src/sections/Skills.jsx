import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    title: "Data Engineering",
    description:
      "Design and development of reliable, scalable, and maintainable data pipelines.",
    level: 82,
    initials: "DE",
  },
  {
    title: "ETL & ELT Pipelines",
    description:
      "Data extraction, ingestion, transformation, validation, and loading.",
    level: 84,
    initials: "ETL",
  },
  {
    title: "Workflow Orchestration",
    description:
      "Pipeline scheduling, dependencies, retries, monitoring, and automation with Airflow.",
    level: 74,
    initials: "ORC",
  },
  {
    title: "Analytics Engineering",
    description:
      "Modular SQL transformations, testing, documentation, and data models with dbt.",
    level: 86,
    initials: "AE",
  },
  {
    title: "Cloud Data Platforms",
    description:
      "Cloud storage, data warehouses, distributed processing, and scalable architectures.",
    level: 68,
    initials: "CLD",
  },
  {
    title: "Business Intelligence",
    description:
      "Dashboards, data visualization, KPI tracking, and actionable business insights.",
    level: 91,
    initials: "BI",
  },
];

const Skills = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const barsRef = useRef([]);
  const countersRef = useRef([]);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        const bar = barsRef.current[index];
        const counterElement = countersRef.current[index];
        const skillLevel = skills[index].level;
        const counter = { value: 0 };

        if (!card || !bar || !counterElement) return;

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            once: true,
          },
        });

        timeline
          .fromTo(
            card,
            {
              opacity: 0,
              y: 45,
              scale: 0.97,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.7,
              ease: "power3.out",
            }
          )
          .fromTo(
            bar,
            {
              width: 0,
            },
            {
              width: `${skillLevel}%`,
              duration: 1.3,
              ease: "power3.out",
            },
            "-=0.3"
          )
          .to(
            counter,
            {
              value: skillLevel,
              duration: 1.3,
              ease: "power2.out",
              onUpdate: () => {
                counterElement.textContent = `${Math.round(counter.value)}%`;
              },
            },
            "<"
          );
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Luzes de fundo */}
      <div className="pointer-events-none absolute -left-52 top-1/3 h-96 w-96 rounded-full bg-slate-400/[0.06] blur-[140px]" />

      <div className="pointer-events-none absolute -right-52 bottom-0 h-96 w-96 rounded-full bg-blue-400/[0.05] blur-[140px]" />

      {/* Grade de fundo */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "45px 45px",
        }}
      />

      <div className="relative z-10 w-full px-5 md:px-10">
        <TitleHeader
          title="Skills & Expertise"
          sub="⚡ Technologies and professional capabilities"
        />

        <div className="mx-auto mt-16 grid max-w-[1850px] grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((skill, index) => (
            <article
              key={skill.title}
              ref={(element) => {
                cardsRef.current[index] = element;
              }}
              className="
                group relative overflow-hidden rounded-3xl
                border border-white/[0.08]
                bg-[#111216]/80 p-6 opacity-0
                backdrop-blur-xl
                transition-all duration-500
                hover:-translate-y-1
                hover:border-slate-300/20
                hover:bg-[#14161b]
                hover:shadow-[0_24px_70px_rgba(0,0,0,0.35)]
              "
            >
              {/* Linha superior azul acinzentada */}
              <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-slate-400/70 to-transparent" />

              {/* Brilho branco no canto */}
              <div
                className="
                  pointer-events-none absolute -right-16 -top-16
                  h-40 w-40 rounded-full bg-white/0 blur-3xl
                  transition-all duration-700
                  group-hover:bg-white/[0.16]
                "
              />

              {/* Pequeno elemento branco */}
              <div
                className="
                  pointer-events-none absolute right-6 top-0
                  h-px w-0 bg-white
                  opacity-0 shadow-[0_0_18px_rgba(255,255,255,0.8)]
                  transition-all duration-500
                  group-hover:w-20 group-hover:opacity-70
                "
              />

              {/* Reflexo diagonal */}
              <div
                className="
                  pointer-events-none absolute -right-24 -top-20
                  h-44 w-16 rotate-[32deg]
                  bg-gradient-to-r from-transparent via-white/[0.08] to-transparent
                  opacity-0 blur-sm
                  transition-all duration-700
                  group-hover:right-4 group-hover:opacity-100
                "
              />

              <div className="relative z-10">
                <div className="mb-7 flex items-start justify-between gap-4">
                  {/* Ícone */}
                  <div
                    className="
                      flex h-14 min-w-14 items-center justify-center
                      rounded-2xl border border-slate-400/20
                      bg-slate-400/[0.06]
                      shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]
                      transition-all duration-500
                      group-hover:border-slate-300/30
                      group-hover:bg-slate-300/[0.09]
                    "
                  >
                    <span className="text-sm font-black tracking-wider text-slate-200">
                      {skill.initials}
                    </span>
                  </div>

                  {/* Porcentagem */}
                  <div
                    ref={(element) => {
                      countersRef.current[index] = element;
                    }}
                    className="text-3xl font-black tracking-tight text-slate-200"
                  >
                    0%
                  </div>
                </div>

                <h3 className="mb-2 text-xl font-bold text-slate-100">
                  {skill.title}
                </h3>

                <p className="min-h-[48px] text-sm leading-relaxed text-slate-400">
                  {skill.description}
                </p>

                <div className="mt-7">
                  <div className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    <span>Proficiency</span>
                    <span>{skill.level}/100</span>
                  </div>

                  {/* Barra de progresso */}
                  <div className="relative h-2.5 overflow-hidden rounded-full border border-white/[0.04] bg-black/40">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.07] to-transparent" />

                    <div
                      ref={(element) => {
                        barsRef.current[index] = element;
                      }}
                      className="
                        relative h-full w-0 rounded-full
                        bg-gradient-to-r
                        from-red-500
                        via-amber-400
                        to-emerald-400
                      "
                    >
                      {/* Luz na ponta da barra */}
                      <div className="absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-white/50 blur-md" />

                      <div className="absolute right-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-white" />
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-2 text-xs font-medium text-slate-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                  <span>Professional experience</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;