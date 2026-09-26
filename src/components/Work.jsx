import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import events from "../data/events";
import WorkCard from "./WorkCard";

gsap.registerPlugin(ScrollTrigger);

function Work({ onOpen }) {
  const ref = useRef(null);

  useEffect(() => {
    const section = ref.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const track = section.querySelector(".work-track");
        const cards = Array.from(
          section.querySelectorAll(".work-card")
        );

        const progressFill = section.querySelector(
          ".work-progress-fill"
        );

        const progressCurrent = section.querySelector(
          ".work-progress-current"
        );

        if (!track || !cards.length) return;

        const getDistance = () => {
          return Math.max(
            0,
            track.scrollWidth -
              window.innerWidth +
              window.innerWidth * 0.08
          );
        };

        const horizontal = gsap.to(track, {
          x: () => -getDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () =>
              "+=" +
              Math.max(
                900,
                track.scrollWidth - window.innerWidth
              ),
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,

            onUpdate: (self) => {
              const viewportCenter =
                window.innerWidth / 2;

              let closestIndex = 0;
              let closestDistance = Infinity;

              cards.forEach((card, index) => {
                const rect = card.getBoundingClientRect();

                const cardCenter =
                  rect.left + rect.width / 2;

                const distance = Math.abs(
                  cardCenter - viewportCenter
                );

                if (distance < closestDistance) {
                  closestDistance = distance;
                  closestIndex = index;
                }
              });

              cards.forEach((card, index) => {
                const rect = card.getBoundingClientRect();

                const cardCenter =
                  rect.left + rect.width / 2;

                const distance =
                  Math.abs(
                    cardCenter - viewportCenter
                  );

                const normalized = Math.min(
                  distance / (window.innerWidth * 0.65),
                  1
                );

                const scale =
                  1 - normalized * 0.10;

                const opacity =
                  1 - normalized * 0.42;

                const brightness =
                  1 - normalized * 0.28;

                gsap.to(card, {
                  scale,
                  opacity,
                  filter: `brightness(${brightness})`,
                  duration: 0.25,
                  overwrite: true,
                  ease: "power2.out",
                });

                const video =
                  card.querySelector(
                    ".work-media video"
                  );

                const title =
                  card.querySelector(".work-title");

                const info =
                  card.querySelector(".work-info");

                if (video) {
                  const parallax =
                    ((cardCenter -
                      viewportCenter) /
                      window.innerWidth) *
                    -7;

                  gsap.to(video, {
                    xPercent: parallax,
                    duration: 0.35,
                    overwrite: true,
                    ease: "power2.out",
                  });
                }

                if (title) {
                  gsap.to(title, {
                    y:
                      index === closestIndex
                        ? 0
                        : 8,
                    duration: 0.35,
                    overwrite: true,
                    ease: "power2.out",
                  });
                }

                if (info) {
                  gsap.to(info, {
                    opacity:
                      index === closestIndex
                        ? 1
                        : 0.65,
                    duration: 0.35,
                    overwrite: true,
                  });
                }
              });

              if (progressFill) {
                progressFill.style.transform =
                  `scaleX(${self.progress})`;
              }

              if (progressCurrent) {
                progressCurrent.textContent =
                  String(closestIndex + 1).padStart(
                    2,
                    "0"
                  );
              }
            },

            onRefresh: () => {
              const viewportCenter =
                window.innerWidth / 2;

              let closestIndex = 0;
              let closestDistance = Infinity;

              cards.forEach((card, index) => {
                const rect =
                  card.getBoundingClientRect();

                const center =
                  rect.left + rect.width / 2;

                const distance =
                  Math.abs(
                    center - viewportCenter
                  );

                if (distance < closestDistance) {
                  closestDistance = distance;
                  closestIndex = index;
                }
              });

              cards.forEach((card, index) => {
                gsap.set(card, {
                  scale:
                    index === closestIndex
                      ? 1
                      : 0.92,

                  opacity:
                    index === closestIndex
                      ? 1
                      : 0.65,

                  filter:
                    index === closestIndex
                      ? "brightness(1)"
                      : "brightness(0.75)",
                });
              });
            },
          },
        });

        gsap.set(cards, {
          scale: 0.92,
          opacity: 0.65,
          filter: "brightness(0.75)",
        });

        gsap.set(cards[0], {
          scale: 1,
          opacity: 1,
          filter: "brightness(1)",
        });

        return () => {
          horizontal.kill();
        };
      });

      mm.add("(max-width: 767px)", () => {
        const cards = Array.from(
          section.querySelectorAll(".work-card")
        );

        cards.forEach((card) => {
          const media =
            card.querySelector(".work-media");

          const video =
            card.querySelector(
              ".work-media video"
            );

          gsap.fromTo(
            media,
            {
              scale: 0.96,
            },
            {
              scale: 1,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                once: true,
              },
            }
          );

          gsap.fromTo(
            video,
            {
              scale: 1.08,
            },
            {
              scale: 1,
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                once: true,
              },
            }
          );
        });
      });

      ScrollTrigger.refresh();
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      className="work"
      id="work"
      ref={ref}
    >
      <div className="work-head">
        <div className="tag">
          02 / 05
        </div>

        <div>
          <p className="eyebrow">
            SELECTED WORK
          </p>

          <h2>
            WE MAKE
            <br />
            <span className="red">
              THE ROOM MOVE.
            </span>
          </h2>
        </div>
      </div>

      <div className="work-track">
        {events.map((event) => (
          <WorkCard
            key={event.slug}
            event={event}
            onOpen={onOpen}
          />
        ))}

        <div className="more">
          <span>MORE</span>

          <strong>
            COMING<span>.</span>
          </strong>

          <small>
            MORE EXPERIENCES ARE ON THE WAY
          </small>
        </div>
      </div>

      <div className="work-progress">
        <span className="work-progress-current">
          01
        </span>

        <div className="work-progress-track">
          <span className="work-progress-fill" />
        </div>

        <span>
          {String(events.length).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
}

export default Work;