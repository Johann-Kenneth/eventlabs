import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const ref = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          defaults: {
            ease: "power4.out",
          },
        })
        .from(".hero-eyebrow", {
          y: 25,
          opacity: 0,
          duration: 0.7,
        })
        .from(
          ".hero-word",
          {
            yPercent: 120,
            duration: 1,
            stagger: 0.08,
          },
          "-=.35"
        )
        .from(
          ".hero-description",
          {
            y: 20,
            opacity: 0,
            duration: 0.7,
          },
          "-=.55"
        )
        .from(
          ".hero-button",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          "-=.5"
        );

      gsap.to(".hero-video", {
        scale: 1.13,
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".hero-content", {
        yPercent: -15,
        opacity: 0.35,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

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
          EVENT MANAGEMENT / PRODUCTION / ENTERTAINMENT
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
          We create, produce and execute experiences
          that turn spaces into moments people remember.
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