import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Capabilities() {
  const ref = useRef(null);

  const items = [
    {
      number: "01",
      label: "STRATEGY / EXECUTION",
      title: "EVENT MANAGEMENT",
      description:
        "Planning, coordination, logistics and on-ground execution built around one clear direction.",
      steps: ["PLAN", "COORDINATE", "EXECUTE"],
    },
    {
      number: "02",
      label: "TECHNICAL / PRODUCTION",
      title: "PRODUCTION",
      description:
        "Stage, sound, lighting, LED, power and technical systems working as one production.",
      steps: ["STAGE", "TECH", "DELIVER"],
    },
    {
      number: "03",
      label: "IDEA / IDENTITY",
      title: "CREATIVE",
      description:
        "Concepts, branding, visual identity and content direction that give every event its character.",
      steps: ["CONCEPT", "DESIGN", "DEFINE"],
    },
    {
      number: "04",
      label: "TALENT / LIVE",
      title: "ENTERTAINMENT",
      description:
        "Artists, DJs, anchors, performers and live acts selected to shape the energy of the room.",
      steps: ["TALENT", "ENERGY", "LIVE"],
    },
  ];

  useEffect(() => {
    const section = ref.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const eyebrow = section.querySelector(".cap-heading > .eyebrow");
      const heading = section.querySelector(".cap-heading .mega");
      const intro = section.querySelector(".cap-intro");
      const scenes = gsap.utils.toArray(".cap-scene");

      gsap.set(eyebrow, {
        y: 25,
        opacity: 0,
      });

      gsap.set(heading, {
        x: -40,
        opacity: 0,
      });

      gsap.set(intro, {
        x: 30,
        opacity: 0,
      });

      const introTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 72%",
          once: true,
        },
      });

      introTimeline
        .to(eyebrow, {
          y: 0,
          opacity: 1,
          duration: 0.65,
          ease: "power3.out",
        })
        .to(
          heading,
          {
            x: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power4.out",
          },
          "-=0.3"
        )
        .to(
          intro,
          {
            x: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.45"
        );

      scenes.forEach((scene) => {
        const number = scene.querySelector(".cap-scene-number");
        const label = scene.querySelector(".cap-scene-label");
        const title = scene.querySelector(".cap-scene-title");
        const description = scene.querySelector(
          ".cap-scene-description"
        );
        const steps = scene.querySelectorAll(".cap-step");
        const line = scene.querySelector(".cap-scene-line");
        const marker = scene.querySelector(".cap-scene-marker");

        gsap.set(number, {
          x: -15,
          opacity: 0.25,
        });

        gsap.set(label, {
          x: 20,
          opacity: 0.25,
        });

        gsap.set(title, {
          clipPath: "inset(0 100% 0 0)",
          scaleX: 0.94,
          transformOrigin: "left center",
        });

        gsap.set(description, {
          y: 18,
          opacity: 0.25,
        });

        gsap.set(steps, {
          y: 12,
          opacity: 0.25,
        });

        gsap.set(line, {
          scaleX: 0,
          transformOrigin: "left center",
        });

        gsap.set(marker, {
          scale: 0.7,
          opacity: 0.25,
          rotate: -25,
        });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: scene,
            start: "top 82%",
            end: "center 38%",
            scrub: 0.7,
          },
        });

        timeline
          .to(
            number,
            {
              x: 0,
              opacity: 1,
              ease: "none",
            },
            0
          )
          .to(
            label,
            {
              x: 0,
              opacity: 1,
              ease: "none",
            },
            0
          )
          .to(
            title,
            {
              clipPath: "inset(0 0% 0 0)",
              scaleX: 1,
              ease: "none",
            },
            0.05
          )
          .to(
            line,
            {
              scaleX: 1,
              ease: "none",
            },
            0.16
          )
          .to(
            description,
            {
              y: 0,
              opacity: 1,
              ease: "none",
            },
            0.2
          )
          .to(
            steps,
            {
              y: 0,
              opacity: 1,
              stagger: 0.08,
              ease: "none",
            },
            0.25
          )
          .to(
            marker,
            {
              scale: 1,
              opacity: 1,
              rotate: 0,
              ease: "none",
            },
            0.2
          );

        gsap.to(title, {
          scaleX: 1.015,
          scrollTrigger: {
            trigger: scene,
            start: "top 55%",
            end: "bottom 45%",
            scrub: 1.2,
          },
          ease: "none",
        });

        gsap.to(marker, {
          rotate: 180,
          scrollTrigger: {
            trigger: scene,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
          ease: "none",
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="capabilities section"
      id="capabilities"
      ref={ref}
    >
      <div className="cap-top">
        <div className="tag">03 / 05</div>

        <div className="cap-heading">
          <p className="eyebrow">WHAT WE DO</p>

          <h2 className="mega">
            ONE TEAM.
            <br />
            <span className="red">THE WHOLE SHOW.</span>
          </h2>

          <p className="cap-intro">
            Creative thinking, production expertise and precise
            execution — brought together under one roof.
          </p>
        </div>
      </div>

      <div className="cap-scenes">
        {items.map((item) => (
          <article className="cap-scene" key={item.number}>
            <div className="cap-scene-top">
              <span className="cap-scene-number">
                {item.number}
              </span>

              <span className="cap-scene-label">
                {item.label}
              </span>

              <span className="cap-scene-marker">
                ↗
              </span>
            </div>

            <div className="cap-scene-body">
              <h3 className="cap-scene-title">
                {item.title}
              </h3>

              <span className="cap-scene-line" />

              <div className="cap-scene-bottom">
                <p className="cap-scene-description">
                  {item.description}
                </p>

                <div className="cap-steps">
                  {item.steps.map((step, stepIndex) => (
                    <span className="cap-step" key={step}>
                      <b>
                        {String(stepIndex + 1).padStart(2, "0")}
                      </b>
                      {step}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="cap-end">
        <span>EVENTLABS / PRODUCTION</span>
        <span>FROM IDEA TO EXECUTION</span>
      </div>
    </section>
  );
}

export default Capabilities;