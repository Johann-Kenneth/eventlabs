import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Audience() {
  const ref = useRef(null);

  const audiences = [
    {
      number: "01",
      name: "SCHOOLS",
      type: "CAMPUS / CELEBRATIONS",
    },
    {
      number: "02",
      name: "INSTITUTIONS",
      type: "FORMAL / CULTURAL",
    },
    {
      number: "03",
      name: "CORPORATES",
      type: "BRANDS / EXPERIENCES",
    },
    {
      number: "04",
      name: "BRANDS",
      type: "LAUNCHES / ACTIVATIONS",
    },
    {
      number: "05",
      name: "COMMUNITIES",
      type: "PEOPLE / CULTURE",
    },
  ];

  useEffect(() => {
    const section = ref.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const eyebrow = section.querySelector(".audience .eyebrow");
      const heading = section.querySelector(".audience-intro");
      const description = section.querySelector(".audience-description");
      const items = section.querySelectorAll(".audience-item");

      gsap.set(eyebrow, {
        y: 25,
        opacity: 0,
      });

      gsap.set(heading, {
        y: 80,
        opacity: 0,
        scale: 0.97,
      });

      gsap.set(description, {
        y: 30,
        opacity: 0,
      });

      gsap.set(items, {
        y: 70,
        opacity: 0,
      });

      const intro = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 72%",
          once: true,
        },
      });

      intro
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
            duration: 1,
            ease: "power4.out",
          },
          "-=0.35"
        )
        .to(
          description,
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            ease: "power3.out",
          },
          "-=0.45"
        );

      gsap.fromTo(
        items,
        {
          y: 70,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".audience-list",
            start: "top 82%",
            once: true,
          },
        }
      );

      items.forEach((item, index) => {
        const name = item.querySelector(".audience-name");
        const number = item.querySelector(".audience-number");
        const type = item.querySelector(".audience-type");
        const arrow = item.querySelector(".audience-arrow");
        const ghost = item.querySelector(".audience-ghost");

        gsap.fromTo(
          item,
          {
            x: index % 2 === 0 ? -25 : 25,
          },
          {
            x: 0,
            duration: 0.9,
            ease: "power4.out",
            scrollTrigger: {
              trigger: item,
              start: "top 88%",
              once: true,
            },
          }
        );

        item.addEventListener("mouseenter", () => {
          gsap.to(name, {
            x: 22,
            duration: 0.5,
            ease: "power3.out",
          });

          gsap.to(number, {
            x: 8,
            color: "#ff2020",
            duration: 0.4,
            ease: "power3.out",
          });

          gsap.to(type, {
            x: 10,
            opacity: 1,
            duration: 0.4,
            ease: "power3.out",
          });

          gsap.to(arrow, {
            x: 10,
            y: -8,
            rotate: 10,
            opacity: 1,
            duration: 0.4,
            ease: "power3.out",
          });

          gsap.to(ghost, {
            opacity: 0.045,
            x: 20,
            duration: 0.7,
            ease: "power3.out",
          });
        });

        item.addEventListener("mouseleave", () => {
          gsap.to(name, {
            x: 0,
            duration: 0.55,
            ease: "power3.out",
          });

          gsap.to(number, {
            x: 0,
            color: "#555",
            duration: 0.5,
            ease: "power3.out",
          });

          gsap.to(type, {
            x: 0,
            opacity: 0.65,
            duration: 0.5,
            ease: "power3.out",
          });

          gsap.to(arrow, {
            x: 0,
            y: 0,
            rotate: 0,
            opacity: 0.45,
            duration: 0.5,
            ease: "power3.out",
          });

          gsap.to(ghost, {
            opacity: 0,
            x: 0,
            duration: 0.6,
            ease: "power3.out",
          });
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section className="audience section" ref={ref}>
      <div className="audience-top">
        <div className="tag">04 / 05</div>

        <div className="audience-heading">
          <p className="eyebrow">BUILT FOR</p>

          <h2 className="audience-intro">
            WHO'S IN
            <br />
            <span className="red">THE ROOM?</span>
          </h2>

          <p className="audience-description">
            From campus celebrations to corporate experiences,
            we create events around the people, purpose and
            energy that make each occasion unique.
          </p>
        </div>
      </div>

      <div className="audience-list">
        {audiences.map((audience) => (
          <div
            className="audience-item"
            key={audience.name}
            data-cursor="VIEW"
          >
            <span className="audience-ghost">
              {audience.name}
            </span>

            <div className="audience-number">
              {audience.number}
            </div>

            <div className="audience-name">
              {audience.name}
            </div>

            <div className="audience-type">
              {audience.type}
            </div>

            <div className="audience-arrow">↗</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Audience;