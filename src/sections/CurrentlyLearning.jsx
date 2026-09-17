import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const learningTechnologies = [
  {
    name: "Apache Spark",
    initials: "SP",
    category: "Distributed Processing",
    level: 72,
    description:
      "Estudando processamento distribuído, transformação de grandes volumes de dados e construção de pipelines com PySpark.",
    topics: ["PySpark", "DataFrames", "Spark SQL", "Optimization"],
    weeklyProgress: [32, 42, 48, 55, 61, 67, 72],
    status: "Advanced learning",
    startColor: "#f97316",
    endColor: "#ef4444",
  },
  {
    name: "Apache Kafka",
    initials: "KF",
    category: "Streaming Data",
    level: 58,
    description:
      "Aprendendo arquiteturas orientadas a eventos, processamento em tempo real e comunicação entre sistemas distribuídos.",
    topics: ["Producers", "Consumers", "Topics", "Event Streaming"],
    weeklyProgress: [18, 27, 31, 39, 45, 51, 58],
    status: "In progress",
    startColor: "#8b5cf6",
    endColor: "#6366f1",
  },
  {
    name: "Terraform",
    initials: "TF",
    category: "Infrastructure as Code",
    level: 46,
    description:
      "Desenvolvendo conhecimentos em provisionamento de infraestrutura cloud utilizando código, módulos e gerenciamento de estado.",
    topics: ["Providers", "Modules", "State", "AWS Resources"],
    weeklyProgress: [10, 16, 21, 28, 34, 40, 46],
    status: "Building foundations",
    startColor: "#a855f7",
    endColor: "#ec4899",
  },
];

const LearningCard = ({
  technology,
  index,
  cardRef,
  circleRef,
  counterRef,
  barsContainerRef,
}) => {
  const gradientId = `learning-gradient-${index}`;

  return (
    <article
      ref={cardRef}
      className="learning-card group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.035] p-6 opacity-0 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.055] hover:shadow-2xl md:p-8"
      style={{
        "--start-color": technology.startColor,
        "--end-color": technology.endColor,
      }}
    >
      {/* Brilho de fundo */}
      <div
        className="pointer-events-none absolute -right-28 -top-28 h-64 w-64 rounded-full opacity-0 blur-[90px] transition-opacity duration-500 group-hover:opacity-20"
        style={{
          background: technology.startColor,
        }}
      />

      {/* Linha superior */}
      <div
        className="absolute left-0 top-0 h-[2px] w-full opacity-80"
        style={{
          background: `linear-gradient(to right, ${technology.startColor}, ${technology.endColor})`,
        }}
      />

      <div className="relative z-10">
        {/* Cabeçalho */}
        <div className="mb-8 flex items-start justify-between gap-5">
          <div className="flex items-center gap-4">
            <div
              className="flex h-14 w-14 min-w-14 items-center justify-center rounded-2xl p-[1px]"
              style={{
                background: `linear-gradient(135deg, ${technology.startColor}, ${technology.endColor})`,
                boxShadow: `0 12px 35px ${technology.startColor}25`,
              }}
            >
              <div className="flex h-full w-full items-center justify-center rounded-2xl bg-[#111116]">
                <span className="text-sm font-black tracking-[0.12em] text-white">
                  {technology.initials}
                </span>
              </div>
            </div>

            <div>
              <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
                {technology.category}
              </p>

              <h3 className="text-xl font-bold text-white md:text-2xl">
                {technology.name}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2">
            <span
              className="h-2 w-2 animate-pulse rounded-full"
              style={{
                background: technology.startColor,
                boxShadow: `0 0 12px ${technology.startColor}`,
              }}
            />

            <span className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-wider text-white/50">
              Learning
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-[180px_1fr]">
          {/* Gráfico circular */}
          <div className="relative mx-auto flex h-[170px] w-[170px] items-center justify-center">
            <div
              className="absolute inset-5 rounded-full opacity-20 blur-2xl"
              style={{
                background: technology.startColor,
              }}
            />

            <svg
              viewBox="0 0 120 120"
              className="relative h-full w-full -rotate-90"
              aria-label={`${technology.level}% de progresso em ${technology.name}`}
            >
              <defs>
                <linearGradient
                  id={gradientId}
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor={technology.startColor} />
                  <stop offset="100%" stopColor={technology.endColor} />
                </linearGradient>

                <filter id={`glow-${index}`}>
                  <feGaussianBlur stdDeviation="2.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Trilha */}
              <circle
                cx="60"
                cy="60"
                r="50"
                fill="none"
                stroke="rgba(255,255,255,0.07)"
                strokeWidth="8"
              />

              {/* Linha interna decorativa */}
              <circle
                cx="60"
                cy="60"
                r="39"
                fill="none"
                stroke="rgba(255,255,255,0.035)"
                strokeWidth="1"
                strokeDasharray="3 5"
              />

              {/* Progresso */}
              <circle
                ref={circleRef}
                cx="60"
                cy="60"
                r="50"
                fill="none"
                stroke={`url(#${gradientId})`}
                strokeWidth="8"
                strokeLinecap="round"
                pathLength="100"
                strokeDasharray="100"
                strokeDashoffset="100"
                filter={`url(#glow-${index})`}
              />
            </svg>

            {/* Conteúdo central */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span
                ref={counterRef}
                className="text-4xl font-black tracking-tight text-white"
              >
                0%
              </span>

              <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                Progress
              </span>
            </div>
          </div>

          {/* Informações */}
          <div>
            <p className="text-sm leading-7 text-white/50">
              {technology.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {technology.topics.map((topic) => (
                <span
                  key={topic}
                  className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-[11px] font-medium text-white/55 transition-all duration-300 hover:border-white/25 hover:text-white"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Evolução semanal */}
        <div className="mt-8 border-t border-white/10 pt-6">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-white">
                Learning evolution
              </p>

              <p className="mt-1 text-xs text-white/30">
                Progress over the last weeks
              </p>
            </div>

            <div
              className="rounded-full px-3 py-1.5 text-xs font-bold"
              style={{
                color: technology.startColor,
                background: `${technology.startColor}12`,
                border: `1px solid ${technology.startColor}25`,
              }}
            >
              +{technology.weeklyProgress.at(-1) -
                technology.weeklyProgress[0]}
              %
            </div>
          </div>

          {/* Mini gráfico de barras */}
          <div
            ref={barsContainerRef}
            className="flex h-24 items-end justify-between gap-2"
          >
            {technology.weeklyProgress.map((progress, progressIndex) => (
              <div
                key={`${technology.name}-${progressIndex}`}
                className="flex h-full flex-1 flex-col justify-end"
              >
                <div
                  className="learning-progress-bar group/bar relative min-h-[4px] w-full origin-bottom scale-y-0 overflow-hidden rounded-t-md"
                  style={{
                    height: `${progress}%`,
                    background: `linear-gradient(to top, ${technology.startColor}, ${technology.endColor})`,
                    boxShadow:
                      progressIndex === technology.weeklyProgress.length - 1
                        ? `0 0 18px ${technology.startColor}45`
                        : "none",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-white/25 to-transparent opacity-40" />

                  <div className="absolute left-1/2 top-1 h-[2px] w-1/2 -translate-x-1/2 rounded-full bg-white/40 opacity-0 transition-opacity group-hover/bar:opacity-100" />
                </div>
              </div>
            ))}
          </div>

          {/* Dias/semanas */}
          <div className="mt-3 flex justify-between gap-2">
            {technology.weeklyProgress.map((_, weekIndex) => (
              <span
                key={weekIndex}
                className="flex-1 text-center text-[9px] font-semibold uppercase tracking-wider text-white/20"
              >
                W{weekIndex + 1}
              </span>
            ))}
          </div>
        </div>

        {/* Rodapé */}
        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span
                className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-40"
                style={{
                  background: technology.startColor,
                }}
              />

              <span
                className="relative inline-flex h-2.5 w-2.5 rounded-full"
                style={{
                  background: technology.startColor,
                }}
              />
            </span>

            <span className="text-xs font-medium text-white/40">
              {technology.status}
            </span>
          </div>

          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/20">
            Currently studying
          </span>
        </div>
      </div>
    </article>
  );
};

const CurrentlyLearning = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const circlesRef = useRef([]);
  const countersRef = useRef([]);
  const barsContainersRef = useRef([]);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      learningTechnologies.forEach((technology, index) => {
        const card = cardsRef.current[index];
        const circle = circlesRef.current[index];
        const counterElement = countersRef.current[index];
        const barsContainer = barsContainersRef.current[index];

        if (!card || !circle || !counterElement || !barsContainer) {
          return;
        }

        const counter = {
          value: 0,
        };

        const bars = barsContainer.querySelectorAll(
          ".learning-progress-bar"
        );

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
              y: 60,
              scale: 0.96,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: "power3.out",
            }
          )
          .to(
            circle,
            {
              attr: {
                "stroke-dashoffset": 100 - technology.level,
              },
              duration: 1.6,
              ease: "power3.out",
            },
            "-=0.25"
          )
          .to(
            counter,
            {
              value: technology.level,
              duration: 1.6,
              ease: "power2.out",
              onUpdate: () => {
                counterElement.textContent = `${Math.round(
                  counter.value
                )}%`;
              },
            },
            "<"
          )
          .to(
            bars,
            {
              scaleY: 1,
              duration: 0.7,
              stagger: 0.08,
              ease: "back.out(1.7)",
            },
            "-=1"
          );
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section
      id="currently-learning"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Efeitos de fundo */}
      <div className="pointer-events-none absolute -left-52 top-1/4 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[150px]" />

      <div className="pointer-events-none absolute -right-52 bottom-1/4 h-[450px] w-[450px] rounded-full bg-purple-500/10 blur-[150px]" />

      {/* Grade decorativa */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "45px 45px",
        }}
      />

      <div className="relative z-10 w-full px-5 md:px-10">
        <TitleHeader
          title="Currently Learning"
          sub="📚 Technologies I am currently exploring"
        />

        <div className="mx-auto mt-16 grid w-full max-w-[1850px] grid-cols-1 gap-7 xl:grid-cols-3">
          {learningTechnologies.map((technology, index) => (
            <LearningCard
              key={technology.name}
              technology={technology}
              index={index}
              cardRef={(element) => {
                cardsRef.current[index] = element;
              }}
              circleRef={(element) => {
                circlesRef.current[index] = element;
              }}
              counterRef={(element) => {
                countersRef.current[index] = element;
              }}
              barsContainerRef={(element) => {
                barsContainersRef.current[index] = element;
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentlyLearning;