import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import { counterItems } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
  const counterRef = useRef(null);
  const countersRef = useRef([]);

  useGSAP(() => {
    countersRef.current.forEach((counter, index) => {
      const numberElement = counter.querySelector(".counter-number");
      const item = counterItems[index];

      // Set initial value to 0
      gsap.set(numberElement, { innerText: "0" });

      // Create the counting animation
      gsap.to(numberElement, {
        innerText: item.value,
        duration: 2.5,
        ease: "power2.out",
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: "#counter",
          start: "top center",
        },
        onComplete: () => {
          numberElement.textContent = `${item.value}${item.suffix}`;
        },
      });
    }, counterRef);
  }, []);

  const handleMouseMove = (event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleMouseLeave = (event) => {
    const card = event.currentTarget;

    card.style.setProperty("--mouse-x", `50%`);
    card.style.setProperty("--mouse-y", `50%`);
  };

  return (
    <div
      id="counter"
      ref={counterRef}
      className="padding-x-lg xl:mt-0 mt-32"
    >
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item, index) => (
          <div
            key={index}
            ref={(el) => el && (countersRef.current[index] = el)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="
              group
              relative
              overflow-hidden
              rounded-lg
              border
              border-white/10
              bg-zinc-900
              p-10
              flex
              flex-col
              justify-center
              transition-all
              duration-500
            "
          >
            {/* Borda que acompanha o cursor */}
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                rounded-lg
                opacity-0
                transition-opacity
                duration-300
                group-hover:opacity-100
              "
              style={{
                background: `
                  radial-gradient(
                    150px circle at var(--mouse-x) var(--mouse-y),
                    rgba(255,255,255,1),
                    rgba(255,255,255,0.65) 35%,
                    rgba(255,255,255,0.15) 60%,
                    transparent 75%
                  )
                `,
                padding: "1px",
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }}
            />

            {/* Conteúdo */}
            <div
              className="
                relative
                z-10
                mb-2
                text-5xl
                font-bold
                text-white-50
                transition-colors
                duration-500
                group-hover:text-white
              "
            >
              <span className="counter-number">
                0 {item.suffix}
              </span>
            </div>

            <div
              className="
                relative
                z-10
                text-lg
                text-white-50
                transition-colors
                duration-500
                group-hover:text-white
              "
            >
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;