import React, { useEffect, useRef, useState, useCallback } from "react";
import { createRoot } from "react-dom/client";
import {
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
  Sparkles,
  Sun,
  Leaf,
  Crown,
  Heart,
} from "lucide-react";
import "./styles.css";
import { EnvelopeLanding } from "./EnvelopeLanding";
import { FitPageContent } from "./FitPageContent";
import { FIBRES, SHEET_CLIP, UNDER_CLIP_A, UNDER_CLIP_B, TAG_CLIPS } from "./paper";

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

const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];

function Divider() {
  return (
    <div className="patrika-divider" aria-hidden="true">
      <span className="div-line" />
      <span className="div-motif">❦</span>
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

function IconOrb({ children, size = "md" }) {
  return (
    <div className={`icon-orb icon-orb--${size}`} aria-hidden="true">
      {children}
    </div>
  );
}

function InkStamp({ children, tone = "red", tilt = -3, className = "" }) {
  return (
    <div className={`ink-stamp ink-stamp--${tone} ${className}`} style={{ "--tilt": `${tilt}deg` }}>
      {children}
    </div>
  );
}

function CornerOrnament({ pos }) {
  return (
    <svg className={`corner-deco ${pos}`} viewBox="0 0 64 64" aria-hidden="true">
      <path d="M3 61V16C3 8.8 8.8 3 16 3h45" />
      <path d="M9 61V19c0-5.5 4.5-10 10-10h42" className="thin" />
      <path d="M19 19c9 0 14 5 14 13-7 0-13-5-14-13Z" className="fill" />
      <circle cx="19" cy="19" r="2.6" className="fill" />
      <path d="M40 9c3 3 3 6 0 9M9 40c3 3 6 3 9 0" className="thin" />
    </svg>
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
      aria-pressed={playing}
    >
      <span className="music-icon">{playing ? <Volume2 size={15} /> : <Music size={15} />}</span>
      <span className="music-label">{playing ? "Playing" : "Music"}</span>
    </button>
  );
}

function PageWelcome() {
  return (
    <div className="page-content page-enter page-welcome">
      <div className="page-ganesh-top">
        <div className="om-seal" aria-hidden="true">
          <span className="om-ring" />
          <span className="om-glyph">ॐ</span>
        </div>
        <p className="ganesh-hindi" lang="hi">
          ॥ श्री गणेशाय नमः ॥
        </p>
        <p className="ganesh-title">Shri Ganeshaya Namah</p>
      </div>
      <p className="blessing-quote">
        With the blessings of the Almighty and our beloved elders, we invite you to celebrate the sacred union of our
        families.
      </p>
      <div className="invitation-kicker">
        <span className="kicker-rule" />
        <span>Shubh Vivah Patrika</span>
        <span className="kicker-rule" />
      </div>
      <div className="couple-names-display">
        <span className="display-name">Rajendra Kumar</span>
        <span className="display-amp" aria-hidden="true">
          &amp;
        </span>
        <span className="display-name">Monika</span>
      </div>
      <InkStamp tilt={-4}>
        <span className="stamp-big">1 December 2026</span>
        <span className="stamp-small">Alwar · Rajasthan</span>
      </InkStamp>
    </div>
  );
}

function PageFamily() {
  return (
    <div className="page-content page-enter page-family">
      <PageHeader title="Parichay" subtitle="an introduction of the families" />
      <div className="family-layout">
        <div className="family-block bride-block">
          <div className="family-crown">
            <Crown size={12} /> Bride
          </div>
          <h3 className="family-big-name">Monika</h3>
          <div className="family-details">
            <p className="family-relation">Daughter of</p>
            <p className="family-person">Shrimati Rajbala</p>
            <p className="family-amp">&amp;</p>
            <p className="family-person">
              Shri Naresh Chand <span className="family-note">(Const. RJ Police)</span>
            </p>
          </div>
          <div className="family-divider-mini" aria-hidden="true">
            · ❧ ·
          </div>
          <div className="family-details">
            <p className="family-relation">Granddaughter of</p>
            <p className="family-person deceased">Late Shrimati Manbi Devi</p>
            <p className="family-amp">&amp;</p>
            <p className="family-person deceased">Late Shri Kanhaiya Lal</p>
          </div>
        </div>
        <div className="family-center-div" aria-hidden="true">
          <span className="center-div-line" />
          <Heart className="center-heart" size={16} fill="currentColor" />
          <span className="center-div-line" />
        </div>
        <div className="family-block groom-block">
          <div className="family-crown">
            <Crown size={12} /> Groom
          </div>
          <h3 className="family-big-name">Rajendra Kumar</h3>
          <p className="family-title-tag">(Engineer)</p>
          <div className="family-details">
            <p className="family-relation">Son of</p>
            <p className="family-person">Shrimati Rama Devi</p>
            <p className="family-amp">&amp;</p>
            <p className="family-person">Shri Bhooriya</p>
          </div>
          <div className="family-divider-mini" aria-hidden="true">
            · ❧ ·
          </div>
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

function TimelineDay({ day, month, year, label, tone, tilt = -2, children }) {
  return (
    <section className={`timeline-day timeline-day--${tone}`}>
      <div className="timeline-day-head">
        <InkStamp tone={tone === "haldi" ? "ochre" : "red"} tilt={tilt} className="date-stamp">
          <span className="event-date-num">{day}</span>
          <span className="event-date-text">
            <span>{month}</span>
            <span>{year}</span>
          </span>
        </InkStamp>
        <p className="timeline-day-label">{label}</p>
      </div>
      <div className="timeline-events">{children}</div>
    </section>
  );
}

function TimelineRow({ icon, name, time, desc }) {
  return (
    <div className="timeline-row">
      <IconOrb size="sm">{icon}</IconOrb>
      <div className="timeline-row-body">
        <span className="timeline-row-name">{name}</span>
        {desc && <span className="timeline-row-desc">{desc}</span>}
      </div>
      <span className="timeline-leader" aria-hidden="true" />
      <span className="timeline-row-time">{time}</span>
    </div>
  );
}

function PageFestivitiesEarly() {
  return (
    <div className="page-content page-enter page-festivities">
      <PageHeader title="Shubh Utsav" subtitle="the celebrations · Bhatpura" />
      <TimelineDay day="29" month="November" year="2026" label="Wedding celebrations" tone="maroon" tilt={-2}>
        <TimelineRow icon={<Utensils size={15} />} name="Lunch" time="12:00 PM" />
        <TimelineRow icon={<Flame size={15} />} name="Bhat" time="5:00 PM" />
        <TimelineRow icon={<Sparkles size={15} />} name="Lagan" time="6:00 PM" />
        <TimelineRow icon={<PartyPopper size={15} />} name="Dinner" time="8:00 PM" />
      </TimelineDay>
      <TimelineDay day="30" month="November" year="2026" label="Haldi & Mehendi" tone="haldi" tilt={1.5}>
        <TimelineRow icon={<Sun size={15} />} name="Haldi & Mehendi" time="4:00 PM" />
        <TimelineRow icon={<Leaf size={15} />} name="Chak" time="6:00 PM" />
      </TimelineDay>
    </div>
  );
}

function PageFestivitiesProcession() {
  return (
    <div className="page-content page-enter page-festivities">
      <PageHeader title="Barat & Venue" subtitle="Bhatpura · Rajasthan" />
      <TimelineDay day="01" month="December" year="2026" label="The procession · Bhatpura" tone="procession">
        <TimelineRow icon={<Crown size={15} />} name="Ghudchadi" time="4:00 PM" desc="the groom's ceremonial ride" />
        <TimelineRow icon={<Music size={15} />} name="Barat Departure" time="5:00 PM" desc="the wedding procession" />
      </TimelineDay>
      <div className="venue-block ink-frame">
        <p className="venue-label">
          <MapPin size={12} /> Venue (pre-wedding)
        </p>
        <p className="venue-main">VPO — Bhatpura</p>
        <p className="venue-sub">Teh — Nagar, Dist — Bharatpur, Rajasthan</p>
      </div>
    </div>
  );
}

function PageVivah() {
  return (
    <div className="page-content page-enter page-vivah">
      <PageHeader title="Shubh Vivah" subtitle="the sacred wedding ceremony" />
      <div className="mandap-illustration" aria-hidden="true">
        <div className="mandap-arch">
          <div className="mandap-inner">
            <IconOrb size="sm">
              <Flame size={15} />
            </IconOrb>
            <span className="mandap-om">ॐ</span>
            <IconOrb size="sm">
              <Flame size={15} />
            </IconOrb>
          </div>
          <div className="mandap-garland">
            <Flower2 size={13} />
            <Flower2 size={13} />
            <Flower2 size={13} />
            <Flower2 size={13} />
            <Flower2 size={13} />
          </div>
        </div>
      </div>
      <div className="grand-couple">
        <span className="grand-name">Rajendra Kumar</span>
        <span className="grand-and">&amp;</span>
        <span className="grand-name">Monika</span>
      </div>
      <InkStamp tilt={-2.5} className="grand-date-time">
        <span className="grand-date">1 December 2026</span>
        <span className="grand-time">9:00 PM onwards</span>
      </InkStamp>
      <div className="venue-grand">
        <p className="venue-grand-name">Welcome Resort</p>
        <p className="venue-grand-addr">
          200 Ft Rd, Dayanand Nagar, Sakti Nagar,
          <br />
          Alwar, Rajasthan 301001
        </p>
        <a href={MAPS_URL} target="_blank" rel="noreferrer" className="ink-btn ink-btn--solid">
          <MapPin size={14} /> View on map
        </a>
      </div>
    </div>
  );
}

function PagePresence() {
  return (
    <div className="page-content page-enter page-blessings">
      <PageHeader title="Your Presence" subtitle="will make our celebration complete" />
      <p className="bless-quote">
        We look forward to celebrating this beautiful occasion with you and your family.
      </p>
      <div className="love-label">— with love &amp; blessings —</div>
      <div className="rsvp-section ink-frame">
        <p className="section-kicker">R.S.V.P. — Family &amp; Friends</p>
        <div className="rsvp-names">
          {RSVP_NAMES.map((name, i) => (
            <span key={i} className="rsvp-name">
              {name}
            </span>
          ))}
        </div>
      </div>
      <div className="compliments-section ink-frame">
        <p className="section-kicker">Best compliments from</p>
        <div className="compliments-list">
          {BEST_COMPLIMENTS.map((name, i) => (
            <p key={i} className="compliment-name">
              {name}
            </p>
          ))}
        </div>
      </div>
      <div className="contact-section">
        <p className="section-kicker">
          <Phone size={12} /> Contact
        </p>
        <div className="contact-phones">
          {CONTACT_PHONES.map((p) => (
            <a key={p.number} href={`tel:${p.number}`} className="ink-btn ink-btn--outline">
              <Phone size={13} /> {p.display}
            </a>
          ))}
        </div>
      </div>
      <div className="action-buttons">
        <a href={MAPS_URL} target="_blank" rel="noreferrer" className="ink-btn ink-btn--solid">
          <MapPin size={14} /> Venue map
        </a>
        <a
          href={`https://wa.me/?text=${SHARE_MSG}`}
          target="_blank"
          rel="noreferrer"
          className="ink-btn ink-btn--green"
        >
          <MessageCircle size={14} /> Share invite
        </a>
      </div>
      <div className="closing-monogram">
        <span>R</span>
        <Heart className="closing-heart" size={16} fill="currentColor" />
        <span>M</span>
      </div>
      <p className="closing-date">1 · XII · MMXXVI</p>
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

const TURN_MS = 920;
const SWAP_MS = 440;

function PatrikaBook({ onClose, entering = false }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [turning, setTurning] = useState(false);
  const [turnDir, setTurnDir] = useState("forward");
  const [touchStart, setTouchStart] = useState(null);
  const [bookReady, setBookReady] = useState(!entering);
  const [sheetEntering, setSheetEntering] = useState(entering);

  useEffect(() => {
    if (!entering) return;
    const t = requestAnimationFrame(() => setBookReady(true));
    return () => cancelAnimationFrame(t);
  }, [entering]);

  useEffect(() => {
    if (!entering) return;
    const t = setTimeout(() => setSheetEntering(false), 1150);
    return () => clearTimeout(t);
  }, [entering]);

  const goTo = useCallback(
    (idx) => {
      if (turning || sheetEntering || idx < 0 || idx >= PAGES.length || idx === currentPage) return;
      setTurnDir(idx > currentPage ? "forward" : "backward");
      setTurning(true);
      setTimeout(() => setCurrentPage(idx), SWAP_MS);
      setTimeout(() => setTurning(false), TURN_MS);
    },
    [turning, sheetEntering, currentPage]
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

  const handleTouchStart = (e) => setTouchStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
  const handleTouchEnd = (e) => {
    if (touchStart === null) return;
    const dx = touchStart.x - e.changedTouches[0].clientX;
    const dy = touchStart.y - e.changedTouches[0].clientY;
    // Only horizontal swipes turn the page, so scrolling a long page doesn't.
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.3) dx > 0 ? next() : prev();
    setTouchStart(null);
  };

  const { Component } = PAGES[currentPage];
  const busy = turning || sheetEntering;
  const handleBack = () => {
    if (currentPage === 0) onClose();
    else prev();
  };

  return (
    <div
      className={`patrika-book-screen${bookReady ? " book-visible" : " book-entering"}`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="desk-surface" aria-hidden="true">
        <div className="desk-grain" />
        <div className="desk-lamp" />
      </div>

      <header className="patrika-top-bar">
        <span className="patrika-top-brand">R ♥ M</span>
        <span className="patrika-top-page">
          <b>
            {ROMAN[currentPage]} / {ROMAN[PAGES.length - 1]}
          </b>
          <span className="patrika-top-label">{PAGES[currentPage].label}</span>
        </span>
      </header>

      <div className="book-stage">
        <div className="book-container">
          <div
            className={`patrika-page${turning ? ` turning-${turnDir}` : ""}${sheetEntering ? " sheet-entering" : ""}`}
          >
            <div className="paper-under paper-under--b" style={{ clipPath: UNDER_CLIP_B }} aria-hidden="true" />
            <div className="paper-under paper-under--a" style={{ clipPath: UNDER_CLIP_A }} aria-hidden="true" />
            <div className="page-paper" style={{ clipPath: SHEET_CLIP }}>
              <div className="page-aged-layers" aria-hidden="true">
                <div className="page-mottle" />
                <div className="page-grain" />
                <div className="page-fibres" />
                <div className="page-creases" />
                <div className="page-stain" />
                <div className="page-edge-wear" />
              </div>
              <div className="page-outer-border" aria-hidden="true" />
              <div className="page-inner-border" aria-hidden="true" />
              <CornerOrnament pos="tl" />
              <CornerOrnament pos="tr" />
              <CornerOrnament pos="bl" />
              <CornerOrnament pos="br" />
              <FitPageContent pageKey={currentPage}>
                <Component />
              </FitPageContent>
            </div>
          </div>
        </div>
      </div>

      <nav className="patrika-bottom-nav" aria-label="Invitation pages">
        <button
          type="button"
          className="turn-btn"
          onClick={handleBack}
          disabled={busy}
          aria-label={currentPage === 0 ? "Back to the envelope" : "Previous page"}
        >
          <ChevronLeft size={22} strokeWidth={1.6} />
        </button>
        <div className="nav-thread">
          <div className="nav-tabs">
            {PAGES.map((p, i) => (
              <button
                key={p.id}
                type="button"
                className={`nav-tab${i === currentPage ? " nav-tab--active" : ""}${i < currentPage ? " nav-tab--done" : ""}`}
                style={{ clipPath: TAG_CLIPS[i], "--tag-tilt": `${((i * 7) % 5) - 2}deg` }}
                onClick={() => goTo(i)}
                disabled={busy}
                aria-label={`Page ${i + 1}: ${p.label}`}
                aria-current={i === currentPage ? "page" : undefined}
              >
                <span className="nav-tab-num">{ROMAN[i]}</span>
                <span className="nav-tab-label">{p.short}</span>
              </button>
            ))}
          </div>
        </div>
        <button
          type="button"
          className="turn-btn"
          onClick={next}
          disabled={busy || currentPage >= PAGES.length - 1}
          aria-label="Next page"
        >
          <ChevronRight size={22} strokeWidth={1.6} />
        </button>
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
      style={{ "--paper-fibres": FIBRES }}
    >
      {phase === "SEALED" && <EnvelopeLanding onOpen={handleEnvelopeOpen} />}
      {phase === "PATRIKA" && <PatrikaBook onClose={handleReturnToEnvelope} entering={patrikaEnter} />}
      <MusicControl />
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
