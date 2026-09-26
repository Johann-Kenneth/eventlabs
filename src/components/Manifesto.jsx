import { useLayoutEffect, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Manifesto() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const section = ref.current;

    if (!section) return;

    const eyebrow = section.querySelector(".manifesto .eyebrow");
    const lines = section.querySelectorAll(".manifesto-line");
    const description = section.querySelector(".manifesto-description");
    const details = section.querySelector(".manifesto-details");

    gsap.set(eyebrow, {
      y: 30,
      opacity: 0,
    });

    gsap.set(lines, {
      yPercent: 110,
      opacity: 0,
    });

    gsap.set(description, {
      y: 30,
      opacity: 0,
    });

    gsap.set(details, {
      y: 20,
      opacity: 0,
    });
  }, []);

  useEffect(() => {
    const section = ref.current;

    if (!section) return;

    const eyebrow = section.querySelector(".manifesto .eyebrow");
    const lines = section.querySelectorAll(".manifesto-line");
    const description = section.querySelector(".manifesto-description");
    const details = section.querySelector(".manifesto-details");

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 72%",
          once: true,
        },
      });

      timeline
        .to(eyebrow, {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power4.out",
        })
        .to(
          lines,
          {
            yPercent: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.12,
            ease: "power4.out",
          },
          "-=0.3"
        )
        .to(
          description,
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power4.out",
          },
          "-=0.4"
        )
        .to(
          details,
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power4.out",
          },
          "-=0.4"
        );
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section className="manifesto section" ref={ref}>
      <div className="tag">01 / 05</div>

      <div className="manifesto-content">
        <p className="eyebrow">
          NOT JUST EVENTS.
        </p>

        <h2 className="mega">
          <span className="clip">
            <span className="manifesto-line">
              WE BUILD
            </span>
          </span>

          <span className="clip">
            <span className="manifesto-line">
              EXPERIENCES
            </span>
          </span>

          <span className="clip">
            <span className="manifesto-line red">
              PEOPLE REMEMBER.
            </span>
          </span>
        </h2>

        <div className="manifesto-bottom">
          <p className="manifesto-description">
            Every event starts with an idea. We shape that idea into
            experiences through creative direction, production and
            precise execution.
          </p>

          <div className="manifesto-details">
            <span>IDEA</span>
            <span>→</span>
            <span>EXPERIENCE</span>
            <span>→</span>
            <span>MEMORY</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Manifesto;