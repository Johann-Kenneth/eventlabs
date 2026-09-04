import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles.css";

gsap.registerPlugin(ScrollTrigger);


/* =========================================================
   EVENT DATA
   =========================================================
   
   ADD NEW EVENTS HERE.

   Photos:
   Put them inside:
   public/media/events/<slug>/

   Example:
   public/media/events/graduation/01.jpg
   public/media/events/graduation/02.jpg

   ========================================================= */

const events = [
  {
    slug: "graduation",
    number: "01",
    title: "GRADUATION",
    category: "EDUCATION / EXPERIENCE",
    year: "2026",

    description:
      "A celebration built around the people, the stage and the moment.",

    // Existing video
    video: "/media/videos/graduation.mp4",

    // Add your photos here
    photos: [
      "/media/events/graduation/01.JPG",
      "/media/events/graduation/02.JPG",
      "/media/events/graduation/04.JPG",
      "/media/events/graduation/03.JPG",
    ],
  },

  {
    slug: "radiolegs",
    number: "02",
    title: "RADIOLEGS",
    category: "LIVE / ENTERTAINMENT",
    year: "2025",

    description:
      "Live energy, production and a room built to move.",

    // Existing video
    video: "/media/videos/radiolegs.mp4",

    // Add your photos here
    photos: [
      "/media/events/radiolegs/01.jpeg",
      "/media/events/radiolegs/02.jpeg",
      "/media/events/radiolegs/03.jpeg",
      "/media/events/radiolegs/04.jpeg",
    ],
  },
  {
    slug: "alumni-meet",
    number: "03",
    title: "ALUMNI MEET",
    category: "NETWORKING / COMMUNITY",
    year: "2026",

    description:
      "A gathering of minds, memories and moments.",

    // Existing video
    video: "/media/videos/alumni.mp4",

    // Add your photos here
    photos: [
      "/media/events/alumni/01.jpeg",
      "/media/events/alumni/02.jpeg",
      "/media/events/alumni/03.jpeg",
      "/media/events/alumni/04.jpeg",
    ],
  },
];


/* =========================================================
   LOADER
   ========================================================= */

function Loader({ onDone }) {
  useEffect(() => {
    const tl = gsap.timeline({ onComplete: onDone });

    tl.to(".loader-number", {
      innerText: 100,
      duration: 1.2,
      snap: { innerText: 1 },
    })
      .to(
        ".loader-fill",
        {
          scaleX: 1,
          duration: 1.2,
        },
        0
      )
      .to(
        ".loader-brand",
        {
          y: -25,
          opacity: 0,
          duration: 0.4,
        },
        "-=.1"
      )
      .to(".loader", {
        clipPath: "inset(0 0 100% 0)",
        duration: 0.75,
        ease: "power4.inOut",
      });

    return () => tl.kill();
  }, [onDone]);

  return (
    <div className="loader">
      <div className="loader-brand">
        <b>EVENTLABS</b>
        <span>ENTERTAINMENTS</span>
      </div>

      <div className="loader-bottom">
        <span>INITIALIZING EXPERIENCE</span>

        <span>
          <i className="loader-number">0</i>%
        </span>
      </div>

      <div className="loader-track">
        <i className="loader-fill" />
      </div>
    </div>
  );
}


/* =========================================================
   CUSTOM CURSOR
   ========================================================= */

function Cursor() {
  const ref = useRef();

  useEffect(() => {
    const move = (e) => {
      gsap.to(ref.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.22,
        ease: "power3.out",
      });
    };

    const over = (e) => {
      const el = e.target.closest("[data-cursor]");

      if (el) {
        ref.current.classList.add("active");

        const span = ref.current.querySelector("span");

        if (span) {
          span.textContent = el.dataset.cursor;
        }
      }
    };

    const out = (e) => {
      if (!e.relatedTarget?.closest?.("[data-cursor]")) {
        ref.current.classList.remove("active");
      }
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
    };
  }, []);

  return (
    <div className="cursor" ref={ref}>
      <span>VIEW</span>
    </div>
  );
}


/* =========================================================
   NAVIGATION
   ========================================================= */

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="nav">
        <a href="#">
          <img
            src="/logo.jpeg"
            alt="EventLabs Entertainments"
          />
        </a>

        <button
          className={open ? "menu open" : "menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? "CLOSE" : "MENU"}

          <i>
            <b />
            <b />
          </i>
        </button>
      </header>

      <div className={open ? "menu-panel open" : "menu-panel"}>
        <span>EVENTLABS / NAVIGATION</span>

        <nav>
          <a href="#work" onClick={() => setOpen(false)}>
            WORK <small>01</small>
          </a>

          <a
            href="#capabilities"
            onClick={() => setOpen(false)}
          >
            CAPABILITIES <small>02</small>
          </a>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
          >
            CONTACT <small>03</small>
          </a>
        </nav>

        <p>
          EVENT MANAGEMENT / PRODUCTION / ENTERTAINMENT
        </p>
      </div>
    </>
  );
}


/* =========================================================
   HERO
   ========================================================= */

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


/* =========================================================
   MANIFESTO
   ========================================================= */

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
    <section
      className="manifesto section"
      ref={ref}
    >
      <div className="tag">01 / 05</div>

      <div>
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
      </div>
    </section>
  );
}


/* =========================================================
   WORK CARD
   ========================================================= */

function WorkCard({ event, onOpen }) {
  const video = useRef();

  const enter = () => {
    video.current?.play().catch(() => {});
  };

  const leave = () => {
    if (video.current) {
      video.current.pause();
      video.current.currentTime = 0;
    }
  };

  return (
    <article
      className="work-card"
      data-cursor="OPEN"
      onMouseEnter={enter}
      onMouseLeave={leave}
      onClick={() => onOpen(event)}
    >
      <div className="work-media">
        <video
          ref={video}
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source
            src={event.video}
            type="video/mp4"
          />
        </video>

        <div className="work-shade" />

        <span className="work-num">
          {event.number}
        </span>

        <span className="work-open">
          OPEN PROJECT ↗
        </span>

        <div className="work-title">
          <small>{event.category}</small>
          <strong>{event.title}</strong>
        </div>
      </div>

      <div className="work-info">
        <div>
          <h3>{event.title}</h3>
          <p>{event.category}</p>
        </div>

        <span>{event.year}</span>
      </div>
    </article>
  );
}


/* =========================================================
   WORK SECTION
   ========================================================= */

function Work({ onOpen }) {
  const ref = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track =
        ref.current.querySelector(".work-track");

      gsap.to(track, {
        x: () =>
          -(track.scrollWidth -
            innerWidth +
            innerWidth * 0.1),

        ease: "none",

        scrollTrigger: {
          trigger: ref.current,
          start: "top top",

          end: () =>
            "+=" +
            Math.max(
              900,
              track.scrollWidth - innerWidth
            ),

          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="work"
      id="work"
      ref={ref}
    >
      <div className="work-head">
        <div className="tag">02 / 05</div>

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
    </section>
  );
}


/* =========================================================
   EVENT OVERLAY
   ========================================================= */

function EventOverlay({ event, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const key = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", key);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", key);
    };
  }, [onClose]);

  return (
    <div className="event-overlay">

      {/* CLOSE BUTTON */}
      <button
        className="close"
        onClick={onClose}
      >
        CLOSE <b>×</b>
      </button>


      {/* =========================================
          MAIN EVENT VIDEO
          ========================================= */}

      <div className="overlay-video">
        <video
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src={event.video}
            type="video/mp4"
          />
        </video>

        <div />
      </div>


      {/* =========================================
          EVENT INFORMATION
          ========================================= */}

      <div className="overlay-content">

        <span>
          {event.number} / EVENT
        </span>

        <h2>{event.title}</h2>

        <p>
          {event.category} / {event.year}
        </p>

        <div className="description">
          {event.description}
        </div>

        <div className="tags">
          <i>EVENT PRODUCTION</i>
          <i>CREATIVE</i>
          <i>EXECUTION</i>
        </div>

      </div>


      {/* =========================================
          PHOTO GALLERY
          ========================================= */}

      {event.photos?.length > 0 && (
        <section className="event-gallery">

          <div className="gallery-heading">
            <span>THE MOMENTS</span>
            <span>{event.photos.length} PHOTOS</span>
          </div>

          <div className="gallery-grid">

            {event.photos.map((photo, index) => (
              <div
                className={`gallery-item gallery-item-${index + 1}`}
                key={photo}
              >
                <img
                  src={photo}
                  alt={`${event.title} ${index + 1}`}
                  loading="lazy"
                />
              </div>
            ))}

          </div>

        </section>
      )}

    </div>
  );
}


/* =========================================================
   CAPABILITIES
   ========================================================= */

function Capabilities() {
  const items = [
    [
      "01",
      "EVENT MANAGEMENT",
      "Planning / Coordination / On-ground execution",
    ],
    [
      "02",
      "PRODUCTION",
      "Stage / Sound / Lighting / LED / Power",
    ],
    [
      "03",
      "CREATIVE",
      "Concept / Branding / Visual identity / Content",
    ],
    [
      "04",
      "ENTERTAINMENT",
      "Artists / DJs / Anchors / Performers",
    ],
  ];

  return (
    <section
      className="capabilities section"
      id="capabilities"
    >
      <div className="tag">03 / 05</div>

      <div className="cap-main">

        <p className="eyebrow">
          WHAT WE DO
        </p>

        <h2 className="mega">
          ONE TEAM.
          <br />

          <span className="red">
            THE WHOLE SHOW.
          </span>
        </h2>

        <div className="services">

          {items.map((item) => (
            <div
              className="service"
              key={item[0]}
              data-cursor="VIEW"
            >
              <span>{item[0]}</span>

              <h3>{item[1]}</h3>

              <p>{item[2]}</p>

              <b>↗</b>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}


/* =========================================================
   AUDIENCE
   ========================================================= */

function Audience() {
  return (
    <section className="audience section">

      <div className="tag">
        04 / 05
      </div>

      <div>

        <p className="eyebrow">
          BUILT FOR
        </p>

        <div className="audience-list">

          {[
            "SCHOOLS",
            "COLLEGES",
            "CORPORATES",
            "BRANDS",
          ].map((x, i) => (

            <div
              className="audience-row"
              key={x}
            >
              <span>
                0{i + 1}
              </span>

              <h2>{x}</h2>

              <b>↗</b>
            </div>

          ))}

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   CONTACT
   ========================================================= */

function Contact() {
  return (
    <section
      className="contact section"
      id="contact"
    >

      <div className="tag">
        05 / 05
      </div>

      <div className="contact-main">

        <p className="eyebrow">
          HAVE AN EVENT IN MIND?
        </p>

        <h2 className="mega">
          LET'S
          <br />
          MAKE IT
          <br />

          <span className="red">
            HAPPEN.
          </span>
        </h2>

        <a
          className="contact-button"
          href="mailto:hello@eventlabs.in"
        >
          START A CONVERSATION ↗
        </a>

      </div>

      <footer>
        <span>
          EVENTLABS ENTERTAINMENTS
        </span>

        <span>
          PALAKKAD / KERALA / INDIA
        </span>

        <span>
          © 2026
        </span>
      </footer>

    </section>
  );
}


/* =========================================================
   APP
   ========================================================= */

export default function App() {

  const [loaded, setLoaded] = useState(false);

  const [selected, setSelected] =
    useState(null);

  return (
    <>
      {!loaded && (
        <Loader
          onDone={() => setLoaded(true)}
        />
      )}

      <Cursor />

      <Nav />

      <main>

        <Hero />

        <Manifesto />

        <Work
          onOpen={setSelected}
        />

        <Capabilities />

        <Audience />

        <Contact />

      </main>

      {selected && (
        <EventOverlay
          event={selected}
          onClose={() =>
            setSelected(null)
          }
        />
      )}
    </>
  );
}