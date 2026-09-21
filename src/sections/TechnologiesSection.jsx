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

// ============================================================
// BASE URL
// ============================================================

const BASE_URL = import.meta.env.BASE_URL;

// ============================================================
// TECNOLOGIAS
// ============================================================

const techStack = [
  {
    name: "Python",
    category: "Language & Data",
    icon: Python,
  },

  {
    name: "Apache Spark",
    category: "Big Data Processing",
    icon: ApacheSpark,
    color: "text-white",
  },

  {
    name: "SQL",
    category: "Database & Querying",
    icon: FaDatabase,
    color: "text-sky-300",
  },

  {
    name: "AWS EC2",
    category: "Cloud Infrastructure",
    icon: AwsEc2,
  },

  {
    name: "AWS S3",
    category: "Cloud Storage",
    icon: AwsS3,
  },

  {
    name: "Docker",
    category: "Containerization",
    icon: DockerIcon,
  },

  {
    name: "Airflow",
    category: "Orchestration",
    icon: Airflow,
  },

  {
    name: "Databricks",
    category: "Data Cloud & Lakehouse",
    icon: SiDatabricks,
    color: "text-red-500",
  },

  {
    name: "Snowflake",
    category: "Data Cloud & DW",
    icon: SnowflakeIcon,
  },

  {
    name: "dbt",
    category: "Data Transformation",
    icon: DbtIcon,
  },

  {
    name: "Apache Kafka",
    category: "Streaming",
    icon: SiApachekafka,
  },

  {
    name: "GitHub",
    category: "Version Control",
    icon: SiGithub,
    color: "text-white",
  },

  {
    name: "Git",
    category: "Version Control",
    icon: SiGit,
    color: "text-orange-500",
  },

  {
    name: "Power BI",
    category: "Business Intelligence",
    icon: VscGraph,
    color: "text-yellow-400",
  },

  {
    name: "Power Automate",
    category: "Automation",
    image: `${BASE_URL}images/automate.png`,
  },

  {
    name: "Power Apps",
    category: "Low-Code Development",
    image: `${BASE_URL}images/powerapp-2020-icon-1024x1024-1.png`,
  },
];

// ============================================================
// COMPONENTE
// ============================================================

const TechnologiesSection = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo(
        itemsRef.current,
        {
          opacity: 0,
          scale: 0.5,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.04,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => context.revert();
  }, []);

  const totalItems = techStack.length;

  return (
    <section
      id="technologies"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* ======================================================
          LUZES DECORATIVAS
      ====================================================== */}

      <div className="pointer-events-none absolute -left-52 top-1/4 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[150px]" />

      <div className="pointer-events-none absolute -right-52 bottom-0 h-[450px] w-[450px] rounded-full bg-purple-500/10 blur-[150px]" />

      {/* ======================================================
          GRADE DECORATIVA
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "45px 45px",
        }}
      />

      <div className="relative z-10 w-full px-5 md:px-10">

        {/* ====================================================
            TÍTULO
        ==================================================== */}

        <TitleHeader
          title="Technologies"
          sub="⚡ From Data to Insights"
        />

        {/* ====================================================
            RODA DE TECNOLOGIAS
        ==================================================== */}

        <div
          className="
            relative mx-auto mt-24 mb-16
            flex h-[620px] w-[620px]
            items-center justify-center
            sm:h-[720px] sm:w-[720px]
            lg:h-[820px] lg:w-[820px]
          "
          style={{
            "--radius": "clamp(300px, 35vw, 370px)",
          }}
        >

          {/* ==================================================
              ANEL PONTILHADO
          ================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              rounded-full
              border
              border-dashed
              border-white/10
            "
            style={{
              width: "calc(var(--radius) * 2)",
              height: "calc(var(--radius) * 2)",
            }}
          />

          {/* ==================================================
              NÚCLEO CENTRAL
          ================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              z-20
              flex
              h-56 w-56
              flex-col
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/[0.025]
              px-8
              text-center
              backdrop-blur-md

              sm:h-64 sm:w-64
              sm:px-10

              lg:h-72 lg:w-72
              lg:px-12
            "
          >
            {/* Conceito principal */}

            <span
              className="
                mb-3
                text-[11px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-cyan-300
                sm:text-xs
              "
            >
              Concepts
            </span>

            {/* Linha divisória */}

            <div className="mb-3 h-px w-16 bg-white/10" />

            {/* Conceitos */}

            <div
              className="
                flex
                flex-col
                items-center
                gap-1.5
                text-[9px]
                font-medium
                leading-tight
                tracking-wide
                text-white/50

                sm:gap-2
                sm:text-[10px]

                lg:gap-2
                lg:text-[11px]
              "
            >
              <span>Medallion Architecture</span>

              <span>Dimensional Modeling</span>

              <span>ACID Transactions</span>

              <span>ETL / ELT</span>

              <span>Batch & Streaming</span>

              <span>Warehouse & Lakehouse</span>

              <span>Data Quality</span>
            </div>
          </div>

          {/* ==================================================
              TECNOLOGIAS
          ================================================== */}

          {techStack.map((tech, index) => {
            const angle = (index / totalItems) * 360;

            // Componente React
            const Icon = tech.icon;

            return (
              <div
                key={tech.name}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: `
                    translate(-50%, -50%)
                    rotate(${angle}deg)
                    translateY(calc(-1 * var(--radius)))
                    rotate(-${angle}deg)
                  `,
                }}
              >
                <div
                  ref={(element) => {
                    itemsRef.current[index] = element;
                  }}
                  className="
                    group
                    flex
                    flex-col
                    items-center
                    text-center
                    opacity-0
                    transition-transform
                    duration-300
                    hover:-translate-y-1.5
                  "
                >

                  {/* ==================================================
                      ÍCONE
                  ================================================== */}

                  <div
                    className={`
                      relative
                      mb-2
                      flex
                      h-11 w-11
                      items-center
                      justify-center
                      rounded-2xl
                      bg-white/[0.03]
                      p-2.5
                      ring-1
                      ring-white/10
                      backdrop-blur-md
                      transition-all
                      duration-300
                      group-hover:bg-white/[0.08]
                      group-hover:ring-white/25
                      group-hover:shadow-lg
                      group-hover:shadow-white/5
                      sm:h-14 sm:w-14
                      sm:p-3
                      lg:h-16 lg:w-16
                      ${tech.color || "text-white"}
                    `}
                  >

                    {/* ==================================================
                        SE FOR IMAGEM LOCAL
                    ================================================== */}

                    {tech.image ? (
                      <img
                        src={tech.image}
                        alt={`${tech.name} icon`}
                        className="
                          h-full
                          w-full
                          object-contain
                          transition-transform
                          duration-300
                          group-hover:scale-120
                        "
                        loading="lazy"
                      />
                    ) : (
                      /* ==================================================
                         SE FOR COMPONENTE REACT
                      ================================================== */

                      <Icon
                        className="
                          h-full
                          w-full
                          transition-transform
                          duration-300
                          group-hover:scale-120
                        "
                      />
                    )}

                  </div>

                  {/* ==================================================
                      NOME
                  ================================================== */}

                  <h3
                    className="
                      whitespace-nowrap
                      text-xs
                      font-semibold
                      tracking-wide
                      text-white
                      transition-colors
                      duration-300
                      group-hover:text-cyan-300
                      sm:text-sm
                    "
                  >
                    {tech.name}
                  </h3>

                  {/* ==================================================
                      CATEGORIA
                  ================================================== */}

                  <span
                    className="
                      hidden
                      whitespace-nowrap
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-wider
                      text-white/40
                      sm:block
                    "
                  >
                    {tech.category}
                  </span>

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