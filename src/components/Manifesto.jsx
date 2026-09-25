import { useEffect, useRef } from "react";
import gsap from "gsap";

function Manifesto() {
  const ref = useRef();

  useEffect(() => {
    const ctx = gsap.context(
      () =>
        gsap.from(".manifesto-line", {
          yPercent: 110,
          opacity: 0,
          stagger: 0.1,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".manifesto",
            start: "top 70%",
          },
        }),
      ref
    );

    return () => ctx.revert();
  }, []);

  return (
    <section className="manifesto section" ref={ref}>
      <div className="tag">01 / 05</div>

      <div className="manifesto-content">
        <p className="eyebrow">NOT JUST EVENTS.</p>

        <h2 className="mega">
          <span className="clip">
            <span className="manifesto-line">WE BUILD</span>
          </span>

          <span className="clip">
            <span className="manifesto-line">EXPERIENCES</span>
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