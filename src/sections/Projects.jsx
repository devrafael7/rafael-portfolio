import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TitleHeader from "../components/TitleHeader";

import { SnowflakeIcon } from "@dev.icons/react";
import { Python } from "@dev.icons/react";
import { Airflow } from "@dev.icons/react";
import { DbtIcon } from "@dev.icons/react";
import { DockerIcon } from "@dev.icons/react";
import { AwsEc2 } from "@dev.icons/react";
import { AwsS3 } from "@dev.icons/react";
import { AwsIam } from "@dev.icons/react";
import { ApacheSpark } from "@dev.icons/react";

import { VscGraph } from "react-icons/vsc";
import { FaDatabase } from "react-icons/fa6";
import { SiKaggle } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { SiApachekafka } from "react-icons/si";
import { SiDatabricks } from "react-icons/si";
import { TbDelta } from "react-icons/tb";
import { FcScatterPlot } from "react-icons/fc";




const technologyIcons = {
  Python: Python,
  Airflow: Airflow,
  dbt: DbtIcon,
  Docker: DockerIcon,
  "Power BI": VscGraph,
  Snowflake: SnowflakeIcon,
  SQL: FaDatabase,
  "AWS EC2": AwsEc2,
  "AWS S3": AwsS3,
  "AWS IAM": AwsIam,
  "Kaggle API": SiKaggle,
  "Tomtom API": TbApi,
  "Kafka": SiApachekafka,
  Databricks: SiDatabricks,
  "Databricks Jobs": SiDatabricks,
  "Databricks Dashboards": SiDatabricks,
  "Spark": ApacheSpark,
  "Delta Lake": TbDelta,
  "Machine Learning": FcScatterPlot
};

const TechnologyIcon = ({ technology }) => {
  const Icon = technologyIcons[technology];

  if (!Icon) return null;

  return (
    <Icon
      size={20}
      color={technology === "Power BI" ? "#F2C811" : undefined}
    />
  );
};

const projects = [
  {
    title: "European Soccer End-to-End Pipeline",
    category: "Data Warehouse",
    description:
      "A cloud-based data platform that ingests the European Soccer Database from Kaggle, converts SQLite data into CSV files, stores them in an Amazon S3 data lake, loads and transforms them in Snowflake with dbt, orchestrates the complete workflow with Apache Airflow, trains a Random Forest regression model with Snowpark ML, and delivers interactive analytics through Power BI.",
    images: [
      {
        src: "/images/projects/p1/solution-architecture.png",
        alt: "Visão geral do projeto",
      },
      {
        src: "/images/projects/p1/dbt_erd-data-lineage.png",
        alt: "Pipeline no Apache Airflow",
      },
      {
        src: "/images/projects/p1/amazon-s3-data-lake.png",
        alt: "Modelagem no Snowflake",
      },
      {
        src: "/images/projects/p1/airflow-dags.png",
        alt: "Dashboard do projeto",
      },
      {
        src: "/images/projects/p1/snowflake-data-warehouse.png",
        alt: "Dashboard do projeto",
      },
      {
        src: "/images/projects/p1/model-performance-dashboard1.png",
        alt: "Dashboard do projeto",
      },
    ],
    technologies: [
      "Kaggle API",
      "Python",
      "Airflow",
      "Snowflake",
      "AWS S3",
      "AWS EC2",
      "AWS IAM",
      "dbt",
      "Docker",
      "Power BI",
      "Machine Learning"
    ],
    githubUrl: "https://github.com/devrafael7/european-soccer-pipeline",
    projectUrl:
      "https://github.com/devrafael7/european-soccer-pipeline/blob/main/README.md",
  },
  {
    title: "Real-Time Traffic Data Pipeline",
    category: "Lakehouse",
    description: "The project consumes traffic information from the TomTom Traffic API, publishes events to Apache Kafka, processes the streaming data using Apache Spark Structured Streaming and stores the data in a Databricks Lakehouse using Delta Lake and the Medallion Architecture. The processed data is then consumed through Databricks Dashboards for near real-time monitoring and Power BI for historical analytics and business intelligence.",
    images: [
      {
        src: "/images/projects/p2/realtime-traffic-pipeline (1).png",
        alt: "Página inicial do dashboard",
      },
      {
        src: "/images/projects/p2/realtime-traffic-diagram (1).png",
        alt: "Análise comercial",
      },
      {
        src: "/images/projects/p2/realtime-traffic-analytics-jobs (1).png",
        alt: "Indicadores de vendas",
      },
      {
        src: "/images/projects/p2/realtime-traffic-analytics (1).png",
        alt: "Indicadores de vendas",
      },
    ],
    technologies: ["Tomtom API", "Python", "Kafka", "AWS EC2", "AWS IAM", "Docker", "Databricks", "Spark", "Delta Lake", "Databricks Dashboards", "Databricks Jobs", "Power BI", ],
    githubUrl: "https://github.com/devrafael7/realtime-traffic-pipeline",
    projectUrl: "https://github.com/devrafael7/realtime-traffic-pipeline/blob/main/README.md",
  },
];

const ArrowLeftIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
    <path
      d="M15 18L9 12L15 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
    <path
      d="M9 6L15 12L9 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
    <path
      d="M14 5H19V10"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19 5L11 13"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19 14V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18V6C5 5.44772 5.44772 5 6 5H10"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GithubIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-4 w-4"
    aria-hidden="true"
  >
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.341-3.369-1.341-.455-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.071 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.091-.646.349-1.087.635-1.337-2.221-.253-4.555-1.111-4.555-4.944 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.269.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.378.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.337 4.688-4.566 4.936.359.309.679.92.679 1.855 0 1.338-.012 2.419-.012 2.748 0 .267.18.578.688.48A10.003 10.003 0 0022 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const ProjectCard = ({ project, index, cardRef }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const totalImages = project.images.length;

  const showPreviousImage = () => {
    setCurrentImage((current) =>
      current === 0 ? totalImages - 1 : current - 1,
    );
  };

  const showNextImage = () => {
    setCurrentImage((current) =>
      current === totalImages - 1 ? 0 : current + 1,
    );
  };

  return (
    <article
      ref={cardRef}
      className="project-card group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] opacity-0 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.055] hover:shadow-2xl hover:shadow-blue-500/5"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-52 w-52 rounded-full bg-blue-500/0 blur-3xl transition-all duration-500 group-hover:bg-blue-500/10" />

      {/* Área das imagens */}
      <div className="relative aspect-[20/10] overflow-hidden bg-[#09090d]">
        {project.images.map((image, imageIndex) => {
          const isVideo = /\.(mp4|webm|mov)$/i.test(image.src);

          return isVideo ? (
            <video
              key={image.src}
              src={image.src}
              aria-label={`${project.title} - ${image.alt}`}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                currentImage === imageIndex
                  ? "scale-100 opacity-100"
                  : "pointer-events-none scale-105 opacity-0"
              }`}
            />
          ) : (
            <img
              key={image.src}
              src={image.src}
              alt={`${project.title} - ${image.alt}`}
              className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                currentImage === imageIndex
                  ? "scale-100 opacity-100"
                  : "pointer-events-none scale-105 opacity-0"
              }`}
            />
          );
        })}

        {/* Gradientes sobre a imagem */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-black/25" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />

        {/* Número do projeto */}
        <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-black/40 text-xs font-bold text-white backdrop-blur-md">
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Categoria */}
        <div className="absolute right-5 top-5 rounded-full border border-white/15 bg-black/40 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/80 backdrop-blur-md">
          {project.category}
        </div>

        {/* Setas */}
        {totalImages > 1 && (
          <>
            <button
              type="button"
              onClick={showPreviousImage}
              aria-label={`Imagem anterior de ${project.title}`}
              className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white opacity-0 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white hover:text-black group-hover:opacity-100"
            >
              <ArrowLeftIcon />
            </button>

            <button
              type="button"
              onClick={showNextImage}
              aria-label={`Próxima imagem de ${project.title}`}
              className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white opacity-0 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white hover:text-black group-hover:opacity-100"
            >
              <ArrowRightIcon />
            </button>
          </>
        )}

        {/* Contador */}
        <div className="absolute bottom-10 right-5 text-xs font-semibold text-white/70">
          {String(currentImage + 1).padStart(2, "0")}
          <span className="mx-1 text-white/30">/</span>
          {String(totalImages).padStart(2, "0")}
        </div>

        {/* Barras do carrossel */}
        {totalImages > 1 && (
          <div className="absolute bottom-5 left-5 right-5 flex gap-2">
            {project.images.map((image, imageIndex) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setCurrentImage(imageIndex)}
                aria-label={`Mostrar imagem ${imageIndex + 1} de ${
                  project.title
                }`}
                className="group/bar relative h-[3px] flex-1 overflow-hidden rounded-full bg-white/20"
              >
                <span
                  className={`absolute inset-y-0 left-0 rounded-full bg-white transition-all duration-500 ${
                    currentImage === imageIndex ? "w-full" : "w-0"
                  }`}
                />

                <span className="absolute inset-0 bg-white/0 transition-colors group-hover/bar:bg-white/20" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Conteúdo do projeto */}
      <div className="relative z-10 p-6 md:p-8">
        <div className="mb-4 flex items-start justify-between gap-5">
          <h3 className="text-2xl font-bold leading-tight text-white md:text-[28px]">
            {project.title}
          </h3>

          <span className="mt-2 h-2.5 w-2.5 min-w-2.5 rounded-full bg-blue-400 shadow-[0_0_16px_rgba(96,165,250,0.8)]" />
        </div>

        <p className="min-h-[72px] text-sm leading-7 text-white/50 md:text-[15px]">
          {project.description}
        </p>

        {/* Tecnologias */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-white/60"
            >
              <TechnologyIcon technology={technology} />

              <span>{technology}</span>
            </span>
          ))}
        </div>

        {/* Links opcionais */}
        {(project.githubUrl || project.projectUrl) && (
          <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-white/10 pt-6">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-white/70 transition-all duration-300 hover:border-white/30 hover:bg-white hover:text-black"
              >
                <GithubIcon />
                GitHub
              </a>
            )}

            {project.projectUrl && (
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-white/80"
              >
                View documentation
                <ExternalLinkIcon />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

const Projects = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        {
          opacity: 0,
          y: 60,
          scale: 0.97,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        },
      );
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Efeitos de fundo */}
      <div className="pointer-events-none absolute -left-52 top-1/4 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[150px]" />
      <div className="pointer-events-none absolute -right-52 bottom-1/4 h-[450px] w-[450px] rounded-full bg-purple-500/10 blur-[150px]" />

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
          title="Featured Projects"
          sub="🚀 Some projects I have developed"
        />

        {/* Dois cards por linha */}
        <div className="mx-auto mt-16 grid w-full max-w-[1850px] grid-cols-1 gap-7 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              cardRef={(element) => {
                cardsRef.current[index] = element;
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
