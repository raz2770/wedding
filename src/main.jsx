import React, { useEffect, useRef, useState, useCallback } from "react";
import { createRoot } from "react-dom/client";
import {
  Sparkles,
  Flower2,
  Music,
  Volume2,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Phone,
  MessageCircle,
  Utensils,
  Flame,
  PartyPopper,
  Sun,
  Leaf,
  Crown,
  Heart,
} from "lucide-react";
import "./styles.css";
import { EnvelopeLanding } from "./EnvelopeLanding";
import { FitPageContent } from "./FitPageContent";

const RSVP_NAMES = [
  "Mukesh",
  "Vijay",
  "Chhaganlal",
  "Ramprasad",
  "Khemchand",
  "Raju",
  "Sunna",
  "Jeetu",
  "Ajay (Eng.)",
  "Rahul",
  "Ravi",
  "Deepak",
  "Mohit",
  "Anil",
  "Sunil",
  "Aakash",
  "Pavan",
  "Abhishek",
  "Chinnu",
  "Aman",
];

const CONTACT_PHONES = [
  { number: "9772694734", display: "9772694734" },
  { number: "9024611351", display: "9024611351" },
  { number: "8696275378", display: "8696275378" },
];

const BEST_COMPLIMENTS = ["Shri Mohar Pal", "Shri Phool Chand", "Shri Badan Singh", "Shri Samaychand", "Shri"];

const SHARE_MSG = encodeURIComponent(
  "You're invited! Rajendra Kumar & Monika Wedding — 1 December 2026, 9PM at Welcome Resort, Alwar."
);

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Welcome+Resort+200+Ft+Rd+Dayanand+Nagar+Sakti+Nagar+Alwar+Rajasthan+301001";

function GoldParticles({ count = 20 }) {
  return (
    <div className="gold-particles" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: `${(i * 5.3) % 100}%`,
            animationDelay: `${-(i * 0.47)}s`,
            animationDuration: `${6 + (i % 5) * 1.4}s`,
            fontSize: `${8 + (i % 4) * 4}px`,
          }}
        >
          {i % 5 === 0 ? "✦" : i % 4 === 0 ? "❀" : i % 3 === 0 ? "✿" : i % 2 === 0 ? "◆" : "·"}
        </span>
      ))}
    </div>
  );
}

function Divider({ light = false }) {
  return (
    <div className={`patrika-divider${light ? " divider-light" : ""}`} aria-hidden="true">
      <span className="div-line" />
      <span className="div-motif">
        <Sparkles size={10} strokeWidth={1.5} className="div-icon" />
      </span>
      <span className="div-line" />
    </div>
  );
}

function PageHeader({ title, subtitle }) {
  return (
    <header className="page-header">
      <h2 className="page-title">{title}</h2>
      {subtitle ? <p className="page-subtitle">{subtitle}</p> : null}
      <Divider />
    </header>
  );
}

function IconOrb({ children, variant = "gold", size = "md" }) {
  return (
    <div className={`icon-orb icon-orb--${variant} icon-orb--${size}`} aria-hidden="true">
      {children}
    </div>
  );
}

function MusicControl() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const toggle = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/music/wedding-ambience.wav");
      audioRef.current.loop = true;
    }
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    }
  };
  useEffect(() => () => audioRef.current?.pause(), []);
  return (
    <button
      className={`music-ctrl${playing ? " music-playing" : ""}`}
      onClick={toggle}
      aria-label={playing ? "Pause wedding music" : "Play wedding music"}
    >
      <span className="music-icon">{playing ? <Volume2 size={16} /> : <Music size={16} />}</span>
      <span className="music-label">{playing ? "On" : "Music"}</span>
    </button>
  );
}

function PageWelcome() {
  return (
    <div className="page-content page-enter page-welcome">
      <div className="page-ganesh-top">
        <div className="ganesh-mandala">
          <div className="mandala-ring outer-ring" />
          <div className="mandala-ring mid-ring" />
          <div className="ganesh-circle large">
            <span className="ganesh-symbol large-symbol">OM</span>
          </div>
        </div>
        <p className="ganesh-title">SHRI GANESHAYA NAMAH</p>
      </div>
      <div className="surface-card surface-card--arch">
        <p className="blessing-quote">
          "With the blessings of the Almighty and our beloved elders, we invite you to celebrate the sacred union of our
          families."
        </p>
      </div>
      <div className="surface-card surface-card--couple">
        <div className="invitation-kicker">
          <Sparkles size={10} />
          <span>SHUBH VIVAH PATRIKA</span>
          <Sparkles size={10} />
        </div>
        <div className="couple-names-display">
          <span className="display-name">RAJENDRA KUMAR</span>
          <Heart className="display-heart" size={22} fill="currentColor" />
          <span className="display-name">MONIKA</span>
        </div>
        <p className="bottom-date-text">1 DECEMBER 2026 · ALWAR, RAJASTHAN</p>
      </div>
    </div>
  );
}

function PageFamily() {
  return (
    <div className="page-content page-enter page-family">
      <PageHeader title="PARICHAY" subtitle="Family Introduction" />
      <div className="family-layout">
        <div className="family-block bride-block card-3d">
          <div className="family-crown">
            <Crown size={12} /> BRIDE
          </div>
          <h3 className="family-big-name">MONIKA</h3>
          <div className="family-details">
            <p className="family-relation">Daughter of</p>
            <p className="family-person">Shrimati Rajbala</p>
            <p className="family-amp">&amp;</p>
            <p className="family-person">
              Shri Naresh Chand <span className="family-note">(Const. RJ Police)</span>
            </p>
          </div>
          <div className="family-divider-mini">— ✦ —</div>
          <div className="family-details">
            <p className="family-relation">Granddaughter of</p>
            <p className="family-person deceased">Late Shrimati Manbi Devi</p>
            <p className="family-amp">&amp;</p>
            <p className="family-person deceased">Late Shri Kanhaiya Lal</p>
          </div>
        </div>
        <div className="family-center-div" aria-hidden="true">
          <span className="center-div-line" />
          <Heart className="center-heart" size={20} fill="currentColor" />
          <span className="center-div-line" />
        </div>
        <div className="family-block groom-block card-3d">
          <div className="family-crown">
            <Crown size={12} /> GROOM
          </div>
          <h3 className="family-big-name">RAJENDRA KUMAR</h3>
          <p className="family-title-tag">(Engineer)</p>
          <div className="family-details">
            <p className="family-relation">Son of</p>
            <p className="family-person">Shrimati Rama Devi</p>
            <p className="family-amp">&amp;</p>
            <p className="family-person">Shri Bhooriya</p>
          </div>
          <div className="family-divider-mini">— ✦ —</div>
          <div className="family-details">
            <p className="family-relation">Grandson of</p>
            <p className="family-person deceased">Late Shrimati Panchhi Devi</p>
            <p className="family-amp">&amp;</p>
            <p className="family-person deceased">Late Shri Chhote Lal</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TimelineDay({ day, month, year, label, tone, children }) {
  return (
    <section className={`timeline-day timeline-day--${tone}`}>
      <div className="timeline-day-head">
        <div className="event-date-banner compact-banner">
          <span className="event-date-num">{day}</span>
          <div className="event-date-text">
            <span>{month}</span>
            <span>{year}</span>
          </div>
        </div>
        <p className="timeline-day-label">{label}</p>
      </div>
      <div className="timeline-events">{children}</div>
    </section>
  );
}

function TimelineRow({ icon, name, time, desc }) {
  return (
    <div className="timeline-row">
      <IconOrb variant="maroon">{icon}</IconOrb>
      <div className="timeline-row-body">
        <span className="timeline-row-name">{name}</span>
        {desc && <span className="timeline-row-desc">{desc}</span>}
      </div>
      <span className="timeline-row-time">{time}</span>
    </div>
  );
}

function PageFestivitiesEarly() {
  return (
    <div className="page-content page-enter page-festivities">
      <PageHeader title="SHUBH UTSAV" subtitle="Celebrations · Bhatpura" />
      <TimelineDay day="29" month="NOVEMBER" year="2026" label="Wedding Celebrations" tone="maroon">
        <TimelineRow icon={<Utensils size={18} />} name="LUNCH" time="12:00 PM" />
        <TimelineRow icon={<Flame size={18} />} name="BHAT" time="5:00 PM" />
        <TimelineRow icon={<Sparkles size={18} />} name="LAGAN" time="6:00 PM" />
        <TimelineRow icon={<PartyPopper size={18} />} name="DINNER" time="8:00 PM" />
      </TimelineDay>
      <TimelineDay day="30" month="NOVEMBER" year="2026" label="Haldi & Mehendi" tone="haldi">
        <TimelineRow icon={<Sun size={18} />} name="HALDI & MEHENDI" time="4:00 PM" />
        <TimelineRow icon={<Leaf size={18} />} name="CHAK" time="6:00 PM" />
      </TimelineDay>
    </div>
  );
}

function PageFestivitiesProcession() {
  return (
    <div className="page-content page-enter page-festivities">
      <PageHeader title="BARAT &amp; VENUE" subtitle="Bhatpura · Rajasthan" />
      <TimelineDay day="01" month="DECEMBER" year="2026" label="Procession · Bhatpura" tone="procession">
        <TimelineRow icon={<Crown size={18} />} name="GHUDCHADI" time="4:00 PM" desc="Groom's ceremonial ride" />
        <TimelineRow icon={<Music size={18} />} name="BARAT DEPARTURE" time="5:00 PM" desc="Wedding procession" />
      </TimelineDay>
      <div className="venue-block venue-glass">
        <p className="venue-label">
          <MapPin size={12} /> VENUE (PRE-WEDDING)
        </p>
        <p className="venue-main">VPO — BHATPURA</p>
        <p className="venue-sub">Teh — Nagar, Dist — Bharatpur, Rajasthan</p>
      </div>
    </div>
  );
}

function PageVivah() {
  return (
    <div className="page-content page-enter page-vivah">
      <PageHeader title="SHUBH VIVAH" subtitle="Sacred wedding ceremony" />
      <div className="mandap-illustration card-3d" aria-hidden="true">
        <div className="mandap-arch">
          <div className="mandap-inner">
            <IconOrb size="sm">
              <Flame size={16} />
            </IconOrb>
            <span className="mandap-om">OM</span>
            <IconOrb size="sm">
              <Flame size={16} />
            </IconOrb>
          </div>
          <div className="mandap-garland">
            <Flower2 size={14} />
            <Flower2 size={14} />
            <Flower2 size={14} />
          </div>
        </div>
      </div>
      <div className="grand-couple">
        <span className="grand-name">RAJENDRA KUMAR</span>
        <span className="grand-and">&amp;</span>
        <span className="grand-name">MONIKA</span>
      </div>
      <div className="grand-event-detail">
        <div className="grand-date-time surface-card surface-card--banner">
          <p className="grand-date">1 DECEMBER 2026</p>
          <p className="grand-time">9:00 PM ONWARDS</p>
        </div>
      </div>
      <div className="venue-grand venue-glass">
        <p className="venue-grand-name">WELCOME RESORT</p>
        <p className="venue-grand-addr">
          200 Ft Rd, Dayanand Nagar, Sakti Nagar,
          <br />
          Alwar, Rajasthan 301001
        </p>
        <a href={MAPS_URL} target="_blank" rel="noreferrer" className="map-link-btn">
          <MapPin size={14} /> VIEW ON MAP
        </a>
      </div>
    </div>
  );
}

function PagePresence() {
  return (
    <div className="page-content page-enter page-blessings">
      <PageHeader title="YOUR PRESENCE" subtitle="will make our celebration complete" />
      <div className="surface-card bless-quote">
        <p>"We look forward to celebrating this beautiful occasion with you and your family."</p>
      </div>
      <div className="love-label">WITH LOVE AND BLESSINGS</div>
      <div className="rsvp-section surface-card">
        <p className="section-kicker">RSVP — FAMILY &amp; FRIENDS</p>
        <div className="rsvp-names">
          {RSVP_NAMES.map((name, i) => (
            <span key={i} className="rsvp-name">
              {name}
              {i < RSVP_NAMES.length - 1 ? "," : ""}
            </span>
          ))}
        </div>
      </div>
      <div className="compliments-section surface-card">
        <p className="section-kicker">BEST COMPLIMENTS FROM</p>
        <div className="compliments-list">
          {BEST_COMPLIMENTS.map((name, i) => (
            <p key={i} className="compliment-name">
              {name}
            </p>
          ))}
        </div>
      </div>
      <div className="contact-section surface-card">
        <p className="section-kicker section-kicker--maroon">
          <Phone size={12} /> CONTACT US
        </p>
        <div className="contact-phones">
          {CONTACT_PHONES.map((p) => (
            <a key={p.number} href={`tel:${p.number}`} className="phone-link">
              <Phone size={14} /> {p.display}
            </a>
          ))}
        </div>
      </div>
      <div className="action-buttons">
        <a href={MAPS_URL} target="_blank" rel="noreferrer" className="action-btn map-btn">
          <MapPin size={14} /> Venue Map
        </a>
        <a href={`https://wa.me/?text=${SHARE_MSG}`} target="_blank" rel="noreferrer" className="action-btn whatsapp-btn">
          <MessageCircle size={14} /> Share Invite
        </a>
      </div>
      <div className="closing-monogram">
        <span>R</span>
        <Heart className="closing-heart" size={18} fill="currentColor" />
        <span>M</span>
      </div>
      <p className="closing-date">1 · 12 · 2026</p>
    </div>
  );
}

const PAGES = [
  { id: "welcome", label: "Welcome", short: "Welcome", Component: PageWelcome },
  { id: "family", label: "Our Families", short: "Family", Component: PageFamily },
  { id: "festivities", label: "Celebrations", short: "Events", Component: PageFestivitiesEarly },
  { id: "procession", label: "Barat", short: "Barat", Component: PageFestivitiesProcession },
  { id: "vivah", label: "Shubh Vivah", short: "Vivah", Component: PageVivah },
  { id: "presence", label: "RSVP", short: "RSVP", Component: PagePresence },
];

function PatrikaBook({ onClose, entering = false }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [turning, setTurning] = useState(false);
  const [turnDir, setTurnDir] = useState("forward");
  const [touchStart, setTouchStart] = useState(null);
  const [bookReady, setBookReady] = useState(!entering);
  const [chittiUnfold, setChittiUnfold] = useState(entering);

  useEffect(() => {
    if (!entering) return;
    const t = requestAnimationFrame(() => setBookReady(true));
    return () => cancelAnimationFrame(t);
  }, [entering]);

  useEffect(() => {
    if (!entering) return;
    const t = setTimeout(() => setChittiUnfold(false), 1300);
    return () => clearTimeout(t);
  }, [entering]);

  const goTo = useCallback(
    (idx) => {
      if (turning || chittiUnfold || idx < 0 || idx >= PAGES.length || idx === currentPage) return;
      const dir = idx > currentPage ? "forward" : "backward";
      setTurnDir(dir);
      setTurning(true);
      setTimeout(() => {
        setCurrentPage(idx);
      }, 460);
      setTimeout(() => {
        setTurning(false);
      }, 920);
    },
    [turning, chittiUnfold, currentPage]
  );

  const next = useCallback(() => goTo(currentPage + 1), [goTo, currentPage]);
  const prev = useCallback(() => goTo(currentPage - 1), [goTo, currentPage]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, onClose]);

  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    if (touchStart === null) return;
    const delta = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) delta > 0 ? next() : prev();
    setTouchStart(null);
  };

  const { Component } = PAGES[currentPage];
  const handleSideBack = () => {
    if (currentPage === 0) onClose();
    else prev();
  };

  return (
    <div
      className={`patrika-book-screen${bookReady ? " book-visible" : " book-entering"}`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="patrika-paper-bg" aria-hidden="true">
        <div className="patrika-wrinkles" />
        <div className="patrika-raw-grain" />
      </div>

      <header className="patrika-top-bar">
        <span className="patrika-top-brand">R ♥ M</span>
        <span className="patrika-top-page">
          {currentPage + 1} / {PAGES.length}
        </span>
      </header>

      <button
        type="button"
        className="side-nav side-nav--prev"
        onClick={handleSideBack}
        disabled={turning || chittiUnfold}
        aria-label={currentPage === 0 ? "Return to envelope" : "Previous page"}
      >
        <ChevronLeft size={24} strokeWidth={1.5} />
      </button>
      <button
        type="button"
        className="side-nav side-nav--next"
        onClick={next}
        disabled={turning || chittiUnfold || currentPage >= PAGES.length - 1}
        aria-label="Next page"
      >
        <ChevronRight size={24} strokeWidth={1.5} />
      </button>

      <div className="book-stage">
        <div className="book-container">
          <div
            className={`patrika-page${turning ? ` curling-${turnDir}` : ""}${chittiUnfold ? " chitti-opening" : ""}`}
          >
            <div className={`page-paper${chittiUnfold ? " page-unfolding" : ""}`}>
              <div className="page-aged-layers" aria-hidden="true">
                <div className="page-fiber" />
                <div className="page-wrinkles" />
                <div className="page-creases" />
                <div className="page-stain" />
                <div className="page-edge-wear" />
              </div>
              <div className="page-curl-roll" aria-hidden="true" />
              <div className="page-spine" aria-hidden="true" />
              <div className="page-thickness" aria-hidden="true" />
              <div className="page-outer-border" />
              <div className="page-inner-border" />
              <div className="corner-deco tl" aria-hidden="true">
                <Flower2 size={18} strokeWidth={1.2} />
              </div>
              <div className="corner-deco tr" aria-hidden="true">
                <Flower2 size={18} strokeWidth={1.2} />
              </div>
              <div className="corner-deco bl" aria-hidden="true">
                <Flower2 size={18} strokeWidth={1.2} />
              </div>
              <div className="corner-deco br" aria-hidden="true">
                <Flower2 size={18} strokeWidth={1.2} />
              </div>
              <FitPageContent pageKey={currentPage}>
                <Component />
              </FitPageContent>
            </div>
            <div className="page-turn-shadow" aria-hidden="true" />
          </div>
        </div>
      </div>
      <nav className="patrika-bottom-nav" aria-label="Invitation pages">
        <div className="nav-progress" aria-hidden="true">
          <div
            className="nav-progress-fill"
            style={{ width: `${((currentPage + 1) / PAGES.length) * 100}%` }}
          />
        </div>
        <div className="nav-tabs">
          {PAGES.map((p, i) => (
            <button
              key={p.id}
              type="button"
              className={`nav-tab${i === currentPage ? " nav-tab--active" : ""}${i < currentPage ? " nav-tab--done" : ""}`}
              onClick={() => goTo(i)}
              disabled={turning || chittiUnfold}
              aria-label={p.label}
              aria-current={i === currentPage ? "page" : undefined}
            >
              <span className="nav-tab-num">{i + 1}</span>
              <span className="nav-tab-label">{p.short}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}

function App() {
  const [phase, setPhase] = useState("SEALED");
  const [patrikaEnter, setPatrikaEnter] = useState(false);

  const handleEnvelopeOpen = () => {
    setPatrikaEnter(true);
    setPhase("PATRIKA");
  };

  const handleReturnToEnvelope = () => {
    setPatrikaEnter(false);
    setPhase("SEALED");
  };

  return (
    <div
      className={`app-root${phase === "SEALED" ? " app-root--sealed" : ""}${phase === "PATRIKA" ? " app-root--patrika" : ""}`}
    >
      <GoldParticles count={phase === "PATRIKA" ? 14 : 0} />
      {phase === "SEALED" && <EnvelopeLanding onOpen={handleEnvelopeOpen} />}
      {phase === "PATRIKA" && (
        <PatrikaBook onClose={handleReturnToEnvelope} entering={patrikaEnter} />
      )}
      <MusicControl />
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
