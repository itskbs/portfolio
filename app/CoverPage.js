"use client";

const CONTACT = [
  { letter: "M", label: "kevin.schroeder715@proton.me", href: "mailto:kevin.schroeder715@proton.me" },
  { letter: "L", label: "linkedin/kevinschroeder-1999", href: "https://linkedin.com/in/kevinschroeder-1999" },
  { letter: "G", label: "github/itskbs", href: "https://github.com/itskbs" },
  { letter: "R", label: "Resume", href: "/cv.pdf" },
];

export default function CoverPage() {
  return (
    <div className="cover-slide">
      <div className="cover-header">
        <h1 className="cover-name">Kevin</h1>
        <p className="cover-subtitle">Backend Developer</p>
      </div>

      <h2 className="cover-statement">
        <span className="hl-lime">Backend developer</span> for marketplace products.
        <br />
        Currently at <span className="hl-peach">Chrono24</span>.
      </h2>

      <div className="cover-footer">
        <ul className="cover-contact">
          {CONTACT.map((c) => (
            <li key={c.letter} className="cover-contact-item">
              <span className="cover-contact-letter" aria-hidden="true">{c.letter}</span>
              <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                {c.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="cover-chevron"
          aria-label="Scroll to content"
          onClick={() => document.getElementById("bento-slide")?.scrollIntoView({ block: "start" })}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>

        <div className="cover-photo-frame">
          <img className="cover-photo-img" src="/profile-1.jpg" alt="Portrait of Kevin" />
        </div>
      </div>
    </div>
  );
}
