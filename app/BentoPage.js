"use client";

import { useEffect, useRef, useState } from "react";

const PROJECTS = [
  {
    title: "Lumen App Redesign",
    desc: "A full redesign of a productivity app used by 200,000 people.",
    stack: "Figma · React",
    thumb: "t1",
  },
  {
    title: "Trailnotes",
    desc: "A side project for logging hikes with photos and maps.",
    stack: "Next.js · Mapbox",
    thumb: "t2",
  },
  {
    title: "Pebble UI",
    desc: "An open-source React component library with accessible defaults.",
    stack: "TypeScript · Storybook",
    thumb: "t3",
  },
];

const SKILLS = [
  { label: "Languages", items: ["Java", "MySQL", "Oracle", "TypeScript", "Angular", "JavaScript"] },
  {
    label: "Frameworks",
    items: ["Spring", "Spring Boot", "SOAP/REST", "Camunda", "BPMN", "Apache Kafka", "Jenkins", "Docker", "CloudFoundry"],
  },
  { label: "Working style", items: ["Jira", "Figma", "Confluence", "Scrum (SAFe)", "GIT", "Remote/Onsite"] },
];

const EXPERIENCE = [
  {
    date: "2025 — now",
    title: "Java Developer · Chrono24",
    desc: "Building and maintaining features that strengthen customer loyalty to Chrono24.",
    stack: "Marketplace development · Domain Driven Design · Building maintainable software",
  },
  {
    date: "2022 — 2025",
    title: "Junior Software Developer · HDI Group",
    desc: "Development and implementation of automated BPMN processes to reduce manual activity and promote full automation.",
    stack: "Process automation · Test automation · Internal tools",
  },
  {
    date: "2020 — 2022",
    title: "Business Analyst · HDI Group",
    desc: "Business Analyst with focus in process automation for the automotive sector.",
    stack: "Requirements engineering · BPMN process modelling · Process optimization",
  },
  {
    date: "2017 — 2020",
    title: "Dual Study Program in Business Informatics · HDI Group",
    desc: "Software testing, development of a test management concept, software development with Java.",
    stack: "Software testing · Software development fundamentals",
  },
];

const EDUCATION = [
  { date: "2017 — 2020", title: "B.Sc. Business Informatics", desc: "FHDW Hannover, Hannover" },
  { date: "2022", title: "Certificate", desc: "Camunda 7 - Platform for Java Developers" },
];

const ABOUT_PARAGRAPHS = [
  "I am a software developer with more than 3 years of experience developing modern applications. My focus is on backend development with Java.",
  "Right now I'm a Java Developer at Chrono24, where we are building the world's leading watch marketplace.",
  "I design scalable architectures and user-friendly interfaces that create innovative solutions and real value. Teamwork and continuous learning are particularly important to me.",
  "Outside of work you'll find me mostly cooking or running. Doing multiple half marathons a year and currently training for a whole one! At least I try to...",
  "I also like exploring new cities, countries, and cultures with my wife – especially the culinary highlights.",
];

function Panel({ panelKey, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!panelKey) return null;

  const titles = { work: "My projects", skills: "Skills", experience: "Experience & education", about: "About me" };

  return (
    <div className="overlay" role="presentation" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="panel" role="dialog" aria-modal="true" aria-label={titles[panelKey]}>
        <button ref={closeRef} className="panel-close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <h2 className="panel-title">{titles[panelKey]}</h2>

        {panelKey === "about" && (
          <div className="panel-body">
            {ABOUT_PARAGRAPHS.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        )}

        {panelKey === "work" && (
          <ol className="panel-list">
            {PROJECTS.map((p) => (
              <li key={p.title} className="work-item">
                <div className={`thumb ${p.thumb}`} aria-hidden="true"></div>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <p className="stack">{p.stack}</p>
                </div>
              </li>
            ))}
          </ol>
        )}

        {panelKey === "skills" && (
          <div className="panel-body">
            {SKILLS.map((group) => (
              <div key={group.label} className="skill-group">
                <h3>{group.label}</h3>
                <ul className="chips">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {panelKey === "experience" && (
          <div className="panel-body">
            <ol className="panel-list">
              {EXPERIENCE.map((e) => (
                <li key={e.title} className="exp-item">
                  <span className="date">{e.date}</span>
                  <div>
                    <h3>{e.title}</h3>
                    <p>{e.desc}</p>
                    <p className="stack">{e.stack}</p>
                  </div>
                </li>
              ))}
            </ol>
            <h3 className="edu-heading">Education</h3>
            <ol className="panel-list">
              {EDUCATION.map((e) => (
                <li key={e.title} className="exp-item">
                  <span className="date">{e.date}</span>
                  <div>
                    <h3>{e.title}</h3>
                    <p>{e.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
}

function PhotoCard() {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      className="bento-card no-tilt area-photo flip-card"
      onClick={() => setFlipped((f) => !f)}
      aria-pressed={flipped}
      aria-label="Flip photo"
      style={{ "--i": 0 }}
    >
      <div className={`flip-inner ${flipped ? "is-flipped" : ""}`}>
        <div className="flip-face flip-front placeholder-photo placeholder-a">
          <span>Photo placeholder</span>
        </div>
        <div className="flip-face flip-back placeholder-photo placeholder-b">
          <span>Say hi 👋</span>
        </div>
      </div>
    </button>
  );
}

export default function BentoPage() {
  const [active, setActive] = useState(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll(".bento-card:not(.no-tilt)") ?? [];
    const onMove = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.setProperty("--rx", `${(-py * 6).toFixed(2)}deg`);
      card.style.setProperty("--ry", `${(px * 6).toFixed(2)}deg`);
    };
    const onLeave = (e) => {
      e.currentTarget.style.setProperty("--rx", "0deg");
      e.currentTarget.style.setProperty("--ry", "0deg");
    };
    cards.forEach((c) => {
      c.addEventListener("mousemove", onMove);
      c.addEventListener("mouseleave", onLeave);
    });
    return () => {
      cards.forEach((c) => {
        c.removeEventListener("mousemove", onMove);
        c.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
  }, [active]);

  return (
    <>
      <div className="frame" aria-hidden="true"></div>
      <div className="bento-wrap">
        <div className="bento-grid" ref={gridRef}>
          <PhotoCard />

          <button
            className="bento-card card-peach area-about"
            style={{ "--i": 1 }}
            onClick={() => setActive("about")}
          >
            <h2>I&apos;m Kevin, a backend developer.</h2>
            <p>
              Based in Germany, I&apos;ve spent 3+ years shipping scalable Java systems —
              currently at Chrono24.
            </p>
          </button>

          <button
            className="bento-card card-lime area-skills"
            style={{ "--i": 2 }}
            onClick={() => setActive("skills")}
          >
            <h2>Skills</h2>
            <p>Java &amp; Spring backend work, plus the tools that keep teams shipping.</p>
          </button>

          <div className="bento-card no-tilt card-white area-contact" style={{ "--i": 3 }}>
            <h2>Contact</h2>
            <ul>
              <li>
                <a href="https://github.com/itskbs">Github</a>
              </li>
              <li>
                <a href="https://linkedin.com/in/kevinschroeder-1999">LinkedIn</a>
              </li>
              <li>
                <a href="mailto:kevin.schroeder715@proton.me">Email</a>
              </li>
              <li>
                <a href="/cv.pdf">Resume</a>
              </li>
            </ul>
          </div>

          <button
            className="bento-card card-pink area-work"
            style={{ "--i": 4 }}
            onClick={() => setActive("work")}
          >
            <div className="thumb t1 card-thumb" aria-hidden="true"></div>
            <h2>
              My projects <span aria-hidden="true">↗</span>
            </h2>
            <p>Side builds and work projects, from marketplace features to apps.</p>
          </button>

          <button
            className="bento-card card-lavender area-experience"
            style={{ "--i": 5 }}
            onClick={() => setActive("experience")}
          >
            <h2>Experience &amp; education</h2>
            <p>4 roles across software development, process automation and analysis.</p>
          </button>
        </div>

        <footer className="bento-footer">
          <p>© {new Date().getFullYear()} Kevin. Hosted by Vercel.</p>
        </footer>
      </div>

      <Panel panelKey={active} onClose={() => setActive(null)} />
    </>
  );
}
