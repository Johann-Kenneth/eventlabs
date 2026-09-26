import React, { useLayoutEffect, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Hero({ loaded }) {
  const ref = useRef(null);

  console.log("HERO COMPONENT RENDERED:", loaded);

  useLayoutEffect(() => {
    const hero = ref.current;

    if (!hero) return;

    const eyebrow = hero.querySelector(".hero-eyebrow");
    const words = hero.querySelectorAll(".hero-word");
    const description = hero.querySelector(".hero-description");
    const button = hero.querySelector(".hero-button");

    gsap.set(eyebrow, {
      y: 30,
      opacity: 0,
    });

    gsap.set(words, {
      yPercent: 110,
      opacity: 0,
    });

    gsap.set(description, {
      y: 30,
      opacity: 0,
    });

    gsap.set(button, {
      y: 25,
      opacity: 0,
    });
  }, []);

  useEffect(() => {
    if (!loaded) {
      console.log("HERO WAITING FOR LOADER");
      return;
    }

    console.log("HERO ANIMATION STARTED");

    const hero = ref.current;

    if (!hero) {
      console.error("HERO REF NOT FOUND");
      return;
    }

    const eyebrow = hero.querySelector(".hero-eyebrow");
    const words = hero.querySelectorAll(".hero-word");
    const description = hero.querySelector(".hero-description");
    const button = hero.querySelector(".hero-button");
    const video = hero.querySelector(".hero-video");
    const content = hero.querySelector(".hero-content");

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      timeline
        .to(eyebrow, {
          y: 0,
          opacity: 1,
          duration: 0.7,
        })
        .to(
          words,
          {
            yPercent: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.14,
          },
          "-=0.25"
        )
        .to(
          description,
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
          },
          "-=0.35"
        )
        .to(
          button,
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
          },
          "-=0.35"
        );

      gsap.to(video, {
        scale: 1.13,
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(content, {
        yPercent: -15,
        opacity: 0.35,
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, hero);

    return () => {
      ctx.revert();
    };
  }, [loaded]);

  return (
    <section className="hero" ref={ref}>
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        poster="/logo.jpeg"
      >
        <source
          src="/media/videos/hero.mp4"
          type="video/mp4"
        />
      </video>

      <div className="hero-overlay" />

      <div className="hero-content">
        <p className="hero-eyebrow">
          EVENT PRODUCTION / CREATIVE / EXECUTION
        </p>

        <h1>
          <span className="clip">
            <span className="hero-word">
              WE MAKE
            </span>
          </span>

          <span className="clip">
            <span className="hero-word">
              MOMENTS
            </span>
          </span>

          <span className="clip">
            <span className="hero-word red">
              MOVE.
            </span>
          </span>
        </h1>

        <p className="hero-description">
          From the first idea to the final moment, we bring
          creative vision, production and execution together.
        </p>

        <a
          className="hero-button"
          data-cursor="EXPLORE"
          href="#work"
        >
          EXPLORE OUR WORK <b>↗</b>
        </a>
      </div>

      <div className="hero-meta">
        <span>SCROLL TO ENTER</span>
        <i />
        <span>EVENTLABS / 2026</span>
      </div>
    </section>
  );
}

export default Hero;