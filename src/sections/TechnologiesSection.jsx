import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TitleHeader from "../components/TitleHeader";

// ============================================================
// ÍCONES - @dev.icons/react
// ============================================================

import {
  SnowflakeIcon,
  Python,
  Airflow,
  DbtIcon,
  DockerIcon,
  AwsEc2,
  AwsS3,
  ApacheSpark,
} from "@dev.icons/react";

// ============================================================
// ÍCONES - react-icons
// ============================================================

import { VscGraph } from "react-icons/vsc";
import { FaDatabase } from "react-icons/fa6";
import { SiApachekafka } from "react-icons/si";
import { SiDatabricks } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiGit } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const BASE_URL = import.meta.env.BASE_URL;

// ============================================================
// TECNOLOGIAS
// ============================================================

const techStack = [
  {
    name: "Python",
    category: "Language & Data",
    stars: 3,
    icon: Python,
  },
  {
    name: "Apache Spark",
    category: "Big Data Processing",
    stars: 1,
    icon: ApacheSpark,
  },
  {
    name: "SQL",
    category: "Database & Querying",
    stars: 4,
    icon: FaDatabase,
    color: "text-sky-300",
  },
  {
    name: "AWS EC2",
    category: "Cloud Infrastructure",
    stars: 2,
    icon: AwsEc2,
  },
  {
    name: "AWS S3",
    category: "Cloud Storage",
    stars: 2,
    icon: AwsS3,
  },
  {
    name: "Docker",
    category: "Containerization",
    stars: 2,
    icon: DockerIcon,
  },
  {
    name: "Airflow",
    category: "Orchestration",
    stars: 1,
    icon: Airflow,
  },
  {
    name: "Databricks",
    category: "Data Platform",
    stars: 2,
    icon: SiDatabricks,
    color: "text-red-500",
  },
  {
    name: "Snowflake",
    category: "Data Warehouse",
    stars: 3,
    icon: SnowflakeIcon,
  },
  {
    name: "dbt",
    category: "Data Transformation",
    stars: 3,
    icon: DbtIcon,
  },

  /*{
    name: "Apache Kafka",
    category: "Streaming",
    stars: 3,
    icon: SiApachekafka,
  },*/
  {
    name: "GitHub",
    category: "Version Control",
    stars: 3,
    icon: SiGithub,
    color: "text-white",
  },
  {
    name: "Git",
    category: "Version Control",
    stars: 3,
    icon: SiGit,
    color: "text-orange-500",
  },
  {
    name: "Power BI",
    category: "Business Intelligence",
    stars: 5,
    icon: VscGraph,
    color: "text-yellow-400",
  },
  {
    name: "Power Automate",
    category: "Automation",
    stars: 3,
    image: `${BASE_URL}images/automate.png`,
  },
  {
    name: "Power Apps",
    category: "Low-Code Development",
    stars: 4,
    image: `${BASE_URL}images/powerapp-2020-icon-1024x1024-1.png`,
  },
];

// ============================================================
// COMPONENTE
// ============================================================

const TechnologiesSection = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const items = gsap.utils.toArray(".technology-item");

      items.forEach((item, index) => {
        const direction = index % 2 === 0 ? -60 : 60;

        gsap.fromTo(
          item,
          {
            opacity: 0,
            x: direction,
            y: 35,
            scale: 0.9,
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: (index % 4) * 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 88%",
              once: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
  <section
    id="technologies"
    ref={sectionRef}
    className="section-padding relative overflow-hidden"
  >
    {/* Glow central */}
    <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[120px]" />

    <div className="relative z-10 w-full px-5 md:px-10">
      <TitleHeader
        title="Technologies in Progress"
        sub="🛠️ Tools I’m learning and applying in real projects"
      />

      <div className="mx-auto mt-14 grid w-full max-w-6xl grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-6 lg:gap-y-12">
        {techStack.map((tech, index) => {
          const Icon = tech.icon;

          return (
            <div
              key={tech.name}
              className="technology-item group relative flex flex-col items-center text-center mt-10"
            >
              {/* Número */}
              <span className="absolute -top-5 text-[8px] font-medium tracking-[0.25em] text-white/15 transition-all duration-500 group-hover:text-cyan-300/70">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Ícone */}
              <div
                className={`
                  relative
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  transition-all
                  duration-500
                  group-hover:-translate-y-1.5
                  group-hover:scale-125
                  sm:h-14
                  sm:w-14
                  lg:h-16
                  lg:w-16
                  ${tech.color || "text-white"}
                `}
              >
                {/* Glow */}
                <div className="pointer-events-none absolute inset-0 rounded-full bg-blue-400/0 blur-xl transition-all duration-500 group-hover:bg-blue-400/20" />

                {tech.image ? (
                  <img
                    src={tech.image}
                    alt={`${tech.name} icon`}
                    className="relative z-10 h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                ) : (
                  <Icon className="relative z-10 h-full w-full transition-transform duration-500 group-hover:scale-110" />
                )}
              </div>

              {/* Nome */}
              <h3 className="mt-3 text-xs font-semibold tracking-wide text-white transition-all duration-500 group-hover:-translate-y-0.5 group-hover:text-cyan-300 sm:text-sm">
                {tech.name}
              </h3>

              {/* Categoria */}
              <p className="mt-1 text-[8px] uppercase tracking-[0.12em] text-white/30 transition-colors duration-500 group-hover:text-white/60 sm:text-[9px]">
                {tech.category}
              </p>

              {/* Estrelas */}
              <div className="mt-2 flex gap-0.5">
                {[...Array(5)].map((_, starIndex) => (
                  <span
                    key={starIndex}
                    className={`text-sm leading-none transition-all duration-300 sm:text-base ${
                      starIndex < tech.stars
                        ? "text-blue-300 group-hover:text-blue-100"
                        : "text-white/10 group-hover:text-white/25"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Indicador */}
              <div className="mt-3 flex items-center gap-1.5 opacity-25 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100">
                <span className="h-1 w-1 rounded-full bg-blue-300 transition-transform duration-500 group-hover:scale-150" />

                <span className="h-px w-4 bg-blue-300/40 transition-all duration-500 group-hover:w-8 group-hover:bg-blue-300" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);
};

export default TechnologiesSection;