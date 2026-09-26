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
      title: "EVENT\nMANAGEMENT",
      description:
        "Planning, coordination, logistics and on-ground execution built around one clear direction.",
    },
    {
      number: "02",
      label: "TECHNICAL / PRODUCTION",
      title: "PRODUCTION",
      description:
        "Stage, sound, lighting, LED, power and technical systems working as one production.",
    },
    {
      number: "03",
      label: "IDEA / IDENTITY",
      title: "CREATIVE",
      description:
        "Concepts, branding, visual identity and content direction that give every event its character.",
    },
    {
      number: "04",
      label: "TALENT / LIVE",
      title: "ENTERTAINMENT",
      description:
        "Artists, DJs, anchors, performers and live acts selected to shape the energy of the room.",
    },
  ];

  useEffect(() => {
    const section = ref.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const eyebrow = section.querySelector(".cap-heading > .eyebrow");
      const heading = section.querySelector(".cap-heading .mega");
      const intro = section.querySelector(".cap-intro");
      const cards = section.querySelectorAll(".cap-card");

      const headingLines = heading
        ? heading.innerHTML
            .split("<br>")
            .map(() => null)
        : [];

      gsap.set(eyebrow, {
        y: 30,
        opacity: 0,
      });

      gsap.set(heading, {
        y: 90,
        opacity: 0,
        scale: 0.96,
      });

      gsap.set(intro, {
        y: 40,
        opacity: 0,
      });

      gsap.set(cards, {
        y: 120,
        opacity: 0,
        rotateX: 8,
        scale: 0.94,
        transformOrigin: "center bottom",
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
          duration: 0.7,
          ease: "power3.out",
        })
        .to(
          heading,
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.1,
            ease: "power4.out",
          },
          "-=0.35"
        )
        .to(
          intro,
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.55"
        );

      gsap.to(cards, {
        y: 0,
        opacity: 1,
        rotateX: 0,
        scale: 1,
        duration: 1.1,
        stagger: 0.16,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".cap-grid",
          start: "top 82%",
          once: true,
        },
      });

      cards.forEach((card, index) => {
        const number = card.querySelector(".cap-card-number");
        const label = card.querySelector(".cap-card-label");
        const title = card.querySelector(".cap-card-main h3");
        const description = card.querySelector(".cap-card-bottom p");
        const arrow = card.querySelector(".cap-card-arrow");

        gsap.set([number, label, title, description, arrow], {
          opacity: 0,
        });

        gsap.set(number, {
          x: -20,
        });

        gsap.set(label, {
          x: 20,
        });

        gsap.set(title, {
          y: 35,
        });

        gsap.set(description, {
          y: 20,
        });

        gsap.set(arrow, {
          scale: 0,
          rotate: -25,
        });

        const cardTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 82%",
            once: true,
          },
          delay: index * 0.08,
        });

        cardTimeline
          .to(
            number,
            {
              x: 0,
              opacity: 1,
              duration: 0.55,
              ease: "power3.out",
            },
            0
          )
          .to(
            label,
            {
              x: 0,
              opacity: 1,
              duration: 0.55,
              ease: "power3.out",
            },
            0.08
          )
          .to(
            title,
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power4.out",
            },
            0.15
          )
          .to(
            description,
            {
              y: 0,
              opacity: 1,
              duration: 0.65,
              ease: "power3.out",
            },
            0.35
          )
          .to(
            arrow,
            {
              scale: 1,
              rotate: 0,
              opacity: 1,
              duration: 0.55,
              ease: "back.out(1.7)",
            },
            0.3
          );

        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -12,
            duration: 0.45,
            ease: "power3.out",
          });

          gsap.to(title, {
            x: 8,
            duration: 0.45,
            ease: "power3.out",
          });

          gsap.to(number, {
            x: 8,
            duration: 0.4,
            ease: "power3.out",
          });

          gsap.to(label, {
            x: 6,
            duration: 0.4,
            ease: "power3.out",
          });

          gsap.to(arrow, {
            x: 8,
            y: -8,
            rotate: 10,
            scale: 1.15,
            duration: 0.4,
            ease: "power3.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            duration: 0.55,
            ease: "power3.out",
          });

          gsap.to(title, {
            x: 0,
            duration: 0.55,
            ease: "power3.out",
          });

          gsap.to(number, {
            x: 0,
            duration: 0.5,
            ease: "power3.out",
          });

          gsap.to(label, {
            x: 0,
            duration: 0.5,
            ease: "power3.out",
          });

          gsap.to(arrow, {
            x: 0,
            y: 0,
            rotate: 0,
            scale: 1,
            duration: 0.5,
            ease: "power3.out",
          });
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

      <div className="cap-grid">
        {items.map((item) => (
          <article
            className="cap-card"
            key={item.number}
            data-cursor="VIEW"
          >
            <div className="cap-card-top">
              <span className="cap-card-number">
                {item.number}
              </span>

              <span className="cap-card-label">
                {item.label}
              </span>

              <span className="cap-card-arrow">↗</span>
            </div>

            <div className="cap-card-main">
              <h3>
                {item.title.split("\n").map((line, index) => (
                  <span key={index}>
                    {line}
                    {index < item.title.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </h3>
            </div>

            <div className="cap-card-bottom">
              <p>{item.description}</p>
              <span>EVENTLABS / 2026</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Capabilities;