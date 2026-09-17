import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power2.inOut",
      },
    );

    gsap.fromTo(
      ".hero-photo",
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        delay: 0.3,
        ease: "power3.out",
      },
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-[55%] w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Turning
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />

                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>

              <h1>into Real Pipelines</h1>
              <h1>that Deliver Decisions</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi, I’m Rafael, a data engineering student based in Brasil-RJ
              <br />
              with a passion for data transformation and code.
            </p>

            <Button
              text="See My Work"
              className="md:w-80 md:h-16 w-60 h-12"
              id="counter"
            />
          </div>
        </header>

        {/* RIGHT: SUA FOTO */}
        {/* RIGHT: SUA FOTO */}
        <figure className="flex items-center justify-start -ml-10 md:-ml-20 lg:-ml-28">
          <div
            className="
      hero-photo
      relative
      w-[350px]
      h-[350px]
      md:w-[440px]
      md:h-[440px]
      lg:w-[500px]
      lg:h-[500px]
      xl:w-[550px]
      xl:h-[550px]
      aspect-square
      shrink-0
      overflow-hidden
      rounded-full
      border-4
      border-white/10
      shadow-2xl
    "
          >
            <img
              src="/images/personal-picture.jpeg"
              alt="Rafael"
              className="
        absolute
        inset-0
        w-full
        h-full
        object-cover
        object-center
      "
            />
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
