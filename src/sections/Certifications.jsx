import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const BASE_URL = import.meta.env.BASE_URL;

const certifications = [
  {
    title: "Coders 24 | Front End",
    issuer: "Ada + Santander Open Academy",
    issuedAt: "June 2024",
    image: `${BASE_URL}images/certifications/ada.png`,
    credentialUrl: "https://ada.tech/certificado?code=c17743b0-5010-aba1-8c39-089222d932ad",
    credentialId: "Credential ID: c17743b0-5010-aba1-8c39-089222d932ad",
    category: "Front End Development",
  },
  {
    title: "Data Engineering on Google Cloud",
    issuer: "Google Cloud",
    issuedAt: "Issued May 2026",
    image: `${BASE_URL}images/certifications/gcp1.png`,
    credentialUrl: "https://coursera.org/verify/3Z0RCY62NQAH",
    credentialId: "Credential ID: 3Z0RCY62NQAH",
    category: "Cloud Data",
  },
  {
    title: "Data Modeling and Architecture",
    issuer: "Microsoft",
    issuedAt: "Issued May 2026",
    image: `${BASE_URL}images/certifications/microsoft.png`,
    credentialUrl: "https://coursera.org/verify/PV32CKRUMCWG",
    credentialId: "Credential ID: PV32CKRUMCWG",
    category: "Data Engineering",
  },
  {
    title: "Enterprise Data Wrangling with SQL and Python",
    issuer: "Northeastern University",
    issuedAt: "Issued May 2026",
    image: `${BASE_URL}images/certifications/northeastern.png`,
    credentialUrl: "https://coursera.org/verify/355SE8P1K181",
    credentialId: "Credential ID: 355SE8P1K181",
    category: "Data Engineering",
  },
  {
    title: "ETL Processing on Google Cloud Using Dataflow and BigQuery",
    issuer: "Google Cloud",
    issuedAt: "Issued March 2026",
    image: `${BASE_URL}images/certifications/gcp2.png`,
    credentialUrl: "https://coursera.org/verify/GQNMQI2F0IJ7",
    credentialId: "Credential ID: GQNMQI2F0IJ7",
    category: "Cloud Computing",
  },
];

const ArrowLeftIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="h-5 w-5"
    aria-hidden="true"
  >
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
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="h-5 w-5"
    aria-hidden="true"
  >
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
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="h-4 w-4"
    aria-hidden="true"
  >
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

const CertificateIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="h-4 w-4"
    aria-hidden="true"
  >
    <path
      d="M7 3H17C18.1046 3 19 3.89543 19 5V14C19 15.1046 18.1046 16 17 16H7C5.89543 16 5 15.1046 5 14V5C5 3.89543 5.89543 3 7 3Z"
      stroke="currentColor"
      strokeWidth="1.8"
    />

    <path
      d="M9 16L8 21L12 19L16 21L15 16"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M9 7H15M9 11H13"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const Certifications = () => {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const cardsRef = useRef([]);

  const dragRef = useRef({
    isDragging: false,
    startX: 0,
    initialScrollLeft: 0,
  });

  const wasDraggedRef = useRef(false);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
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
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => context.revert();
  }, []);

  const scrollCertificates = (direction) => {
    const container = scrollContainerRef.current;

    if (!container) {
      return;
    }

    const scrollDistance = Math.min(container.clientWidth * 0.8, 760);

    container.scrollBy({
      left: direction === "right" ? scrollDistance : -scrollDistance,
      behavior: "smooth",
    });
  };

  const handlePointerDown = (event) => {
    const container = scrollContainerRef.current;

    if (!container) {
      return;
    }

    dragRef.current = {
      isDragging: true,
      startX: event.clientX,
      initialScrollLeft: container.scrollLeft,
    };

    wasDraggedRef.current = false;

    container.setPointerCapture?.(event.pointerId);
    container.style.cursor = "grabbing";
  };

  const handlePointerMove = (event) => {
    const container = scrollContainerRef.current;

    if (!container || !dragRef.current.isDragging) {
      return;
    }

    const movement = event.clientX - dragRef.current.startX;

    if (Math.abs(movement) > 6) {
      wasDraggedRef.current = true;
    }

    container.scrollLeft =
      dragRef.current.initialScrollLeft - movement * 1.15;
  };

  const finishDragging = (event) => {
    const container = scrollContainerRef.current;

    if (!container) {
      return;
    }

    dragRef.current.isDragging = false;
    container.style.cursor = "grab";

    if (container.hasPointerCapture?.(event.pointerId)) {
      container.releasePointerCapture(event.pointerId);
    }

    window.setTimeout(() => {
      wasDraggedRef.current = false;
    }, 0);
  };

  const handleCredentialClick = (event) => {
    if (wasDraggedRef.current) {
      event.preventDefault();
    }
  };

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Luzes decorativas */}
      <div className="pointer-events-none absolute -left-52 top-1/4 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[150px]" />

      <div className="pointer-events-none absolute -right-52 bottom-0 h-[450px] w-[450px] rounded-full bg-purple-500/10 blur-[150px]" />

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
          title="Certifications"
          sub="🏆 Professional certifications and credentials"
        />

        <div className="relative mx-auto mt-16 w-full max-w-[1850px]">
          {/* Sombras laterais */}
          <div className="pointer-events-none absolute bottom-4 left-0 top-0 z-20 hidden w-24 bg-gradient-to-r from-[#0e0e10] to-transparent lg:block" />

          <div className="pointer-events-none absolute bottom-4 right-0 top-0 z-20 hidden w-24 bg-gradient-to-l from-[#0e0e10] to-transparent lg:block" />

          {/* Botão esquerdo */}
          <button
            type="button"
            onClick={() => scrollCertificates("left")}
            aria-label="Mostrar certificações anteriores"
            className="absolute left-3 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-white/30 hover:bg-white hover:text-black lg:flex"
          >
            <ArrowLeftIcon />
          </button>

          {/* Botão direito */}
          <button
            type="button"
            onClick={() => scrollCertificates("right")}
            aria-label="Mostrar próximas certificações"
            className="absolute right-3 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-white/30 hover:bg-white hover:text-black lg:flex"
          >
            <ArrowRightIcon />
          </button>

          {/* Linha horizontal */}
          <div
            ref={scrollContainerRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={finishDragging}
            onPointerCancel={finishDragging}
            onPointerLeave={(event) => {
              if (dragRef.current.isDragging) {
                finishDragging(event);
              }
            }}
            className="certifications-scrollbar flex cursor-grab snap-x snap-mandatory gap-6 overflow-x-auto overscroll-x-contain px-1 pb-7 pt-2 lg:px-20"
          >
            {certifications.map((certification, index) => (
              <article
                key={`${certification.title}-${certification.issuer}`}
                ref={(element) => {
                  cardsRef.current[index] = element;
                }}
                className="group relative min-w-[300px] max-w-[300px] snap-start overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] opacity-0 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.055] hover:shadow-2xl hover:shadow-blue-500/5 sm:min-w-[350px] sm:max-w-[350px] lg:min-w-[390px] lg:max-w-[390px]"
              >
                {/* Brilho interno */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-blue-500/0 blur-[80px] transition-all duration-500 group-hover:bg-blue-500/15" />

                {/* Linha superior */}
                <div className="absolute left-0 top-0 z-20 h-[2px] w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 opacity-80" />

                {/* Imagem */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#09090d]">
                  <img
                    src={certification.image}
                    alt={`Certificação ${certification.title}`}
                    draggable="false"
                    className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10" />

                  {/* Categoria */}
                  <span className="absolute right-2 top-2 rounded-full border border-white/15 bg-black/50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white/70 backdrop-blur-md">
                    {certification.category}
                  </span>

                  {/* Ícone */}
                  <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-black/50 text-white backdrop-blur-md">
                    <CertificateIcon />
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="relative z-10 p-6">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-400">
                    {certification.issuer}
                  </p>

                  <h3 className="min-h-[58px] text-xl font-bold leading-snug text-white">
                    {certification.title}
                  </h3>

                  <div className="mt-5 space-y-2">
                    <p className="text-sm text-white/45">
                      {certification.issuedAt}
                    </p>

                    {certification.credentialId && (
                      <p className="truncate text-xs text-white/25">
                        {certification.credentialId}
                      </p>
                    )}
                  </div>

                  <a
                    href={certification.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    draggable="false"
                    onClick={handleCredentialClick}
                    className="mt-6 flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm font-semibold text-white/70 transition-all duration-300 hover:border-white/25 hover:bg-white hover:text-black"
                  >
                    <span>View credential</span>
                    <ExternalLinkIcon />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Instrução */}
          <div className="mt-2 flex items-center justify-center gap-3 text-xs text-white/25">
            <span className="h-[1px] w-8 bg-white/10" />
            <span>Drag or scroll to explore</span>
            <span className="h-[1px] w-8 bg-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;