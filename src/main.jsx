import React, { useEffect, useRef, useState, useCallback } from "react";
import { createRoot } from "react-dom/client";
import {
  Sparkles,
  Flower2,
  Music,
  Volume2,
  X,
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
  ChevronDown,
} from "lucide-react";
import "./styles.css";

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

function RosePetals({ count = 16 }) {
  return (
    <div className="rose-petals" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          style={{
            left: `${(i * 6.7) % 100}%`,
            animationDelay: `${-(i * 0.6)}s`,
            animationDuration: `${8 + (i % 4) * 1.5}s`,
          }}
        >
          🌸
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

function InvitationCover({ onOpen }) {
  const [phase, setPhase] = useState("idle");
  const handleOpen = () => {
    if (phase !== "idle") return;
    setPhase("glowing");
    setTimeout(() => setPhase("opening"), 900);
    setTimeout(() => onOpen(), 2400);
  };
  return (
    <div className={`cover-screen phase-${phase}`}>
      <div className="cover-bg" aria-hidden="true">
        <div className="cover-palace-bg" />
        <div className="cover-bg-overlay" />
        <div className="cover-spotlight" />
        <div className="cover-aurora" />
      </div>
      <GoldParticles count={28} />
      <RosePetals count={14} />
      <div className="cover-scene-3d">
        <div className="cover-card-wrap">
          <div className="cover-card-shadow" aria-hidden="true" />
          <div
            className="cover-card"
            onClick={handleOpen}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleOpen()}
            aria-label="Click to open your wedding invitation"
          >
            <div className="cover-front">
              <div className="cover-shine" aria-hidden="true" />
              <div className="cover-top-border" aria-hidden="true" />
              <div className="cover-ganesh" aria-hidden="true">
                <div className="ganesh-circle">
                  <span className="ganesh-symbol">ॐ</span>
                </div>
                <div className="ganesh-label">SHRI GANESHAYA NAMAH</div>
              </div>
              <div className="cover-inner-border">
                <div className="corner-motif tl" aria-hidden="true">
                  <Flower2 size={18} strokeWidth={1.2} />
                </div>
                <div className="corner-motif tr" aria-hidden="true">
                  <Flower2 size={18} strokeWidth={1.2} />
                </div>
                <div className="corner-motif bl" aria-hidden="true">
                  <Flower2 size={18} strokeWidth={1.2} />
                </div>
                <div className="corner-motif br" aria-hidden="true">
                  <Flower2 size={18} strokeWidth={1.2} />
                </div>
                <div className="cover-text-body">
                  <p className="cover-subtitle">
                    <Sparkles size={11} /> SHUBH VIVAH <Sparkles size={11} />
                  </p>
                  <div className="cover-names-wrap">
                    <span className="cover-name groom-name">RAJENDRA KUMAR</span>
                    <span className="cover-weds">Weds</span>
                    <span className="cover-name bride-name">MONIKA</span>
                  </div>
                  <Divider light />
                  <p className="cover-date-text">1 DECEMBER 2026</p>
                  <div className={`cover-seal${phase === "glowing" || phase === "opening" ? " seal-glow" : ""}`}>
                    <div className="seal-inner">
                      <span className="seal-monogram">
                        R <Heart size={10} fill="currentColor" /> M
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cover-bottom-border" aria-hidden="true" />
            </div>
            <div className="cover-light-burst" aria-hidden="true" />
          </div>
          <div className={`open-prompt${phase !== "idle" ? " prompt-fade" : ""}`}>
            <ChevronDown size={16} className="open-arrow" />
            <span className="open-text">Tap to open</span>
            <ChevronDown size={16} className="open-arrow" />
          </div>
        </div>
      </div>
    </div>
  );
}

function PageWelcome() {
  return (
    <div className="page-content page-enter">
      <div className="page-ganesh-top">
        <div className="ganesh-mandala">
          <div className="mandala-ring outer-ring" />
          <div className="mandala-ring mid-ring" />
          <div className="ganesh-circle large">
            <span className="ganesh-symbol large-symbol">ॐ</span>
          </div>
        </div>
        <p className="ganesh-title">SHRI GANESHAYA NAMAH</p>
      </div>
      <Divider />
      <div className="page-arch">
        <div className="arch-shape">
          <div className="blessing-text">
            <p className="blessing-quote">
              "With the blessings of the Almighty and our beloved elders, we invite you to celebrate the sacred union
              of our families."
            </p>
          </div>
        </div>
      </div>
      <Divider />
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
  );
}

function PageFamily() {
  return (
    <div className="page-content page-enter">
      <h2 className="page-title">PARICHAY</h2>
      <p className="page-subtitle">Family Introduction</p>
      <Divider />
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

function PageFestivities() {
  return (
    <div className="page-content page-enter page-festivities">
      <h2 className="page-title">SHUBH UTSAV</h2>
      <p className="page-subtitle">Celebrations &amp; Ceremonies</p>
      <Divider />

      <TimelineDay day="29" month="NOVEMBER" year="2026" label="Wedding Celebrations · Bhatpura" tone="maroon">
        <TimelineRow icon={<Utensils size={18} />} name="LUNCH" time="12:00 PM" />
        <TimelineRow icon={<Flame size={18} />} name="BHAT" time="5:00 PM" />
        <TimelineRow icon={<Sparkles size={18} />} name="LAGAN" time="6:00 PM" />
        <TimelineRow icon={<PartyPopper size={18} />} name="DINNER" time="8:00 PM" />
      </TimelineDay>

      <TimelineDay day="30" month="NOVEMBER" year="2026" label="Haldi & Mehendi · Bhatpura" tone="haldi">
        <TimelineRow icon={<Sun size={18} />} name="HALDI & MEHENDI" time="4:00 PM" />
        <TimelineRow icon={<Leaf size={18} />} name="CHAK" time="6:00 PM" />
      </TimelineDay>

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

function PageVivahAndPresence() {
  const phones = [
    { number: "9772694734", display: "9772694734" },
    { number: "9024611351", display: "9024611351" },
    { number: "8696275378", display: "8696275378" },
  ];
  const rsvpNames = [
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
  const bestCompliments = ["Shri Mohar Pal", "Shri Phool Chand", "Shri Badan Singh", "Shri Samaychand", "Shri"];
  const shareMsg = encodeURIComponent(
    "You're invited! Rajendra Kumar & Monika Wedding — 1 December 2026, 9PM at Welcome Resort, Alwar."
  );

  return (
    <div className="page-content page-enter page-blessings">
      <div className="grand-top-ornament" aria-hidden="true">
        <Sparkles size={10} /> SHUBH VIVAH <Sparkles size={10} />
      </div>
      <div className="mandap-illustration card-3d" aria-hidden="true">
        <div className="mandap-arch">
          <div className="mandap-inner">
            <IconOrb size="sm">
              <Flame size={16} />
            </IconOrb>
            <span className="mandap-om">ॐ</span>
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
      <Divider />
      <div className="grand-event-detail">
        <div className="grand-date-time">
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
      <Divider />
      <div className="bless-header">
        <h2 className="page-title bless-title">YOUR PRESENCE</h2>
        <p className="page-subtitle">will make our celebration complete</p>
      </div>
      <div className="bless-quote">
        <p>"We look forward to celebrating this beautiful occasion with you and your family."</p>
      </div>
      <div className="love-label">WITH LOVE AND BLESSINGS</div>
      <div className="rsvp-section">
        <p className="rsvp-title">RSVP — FAMILY &amp; FRIENDS</p>
        <div className="rsvp-names">
          {rsvpNames.map((name, i) => (
            <span key={i} className="rsvp-name">
              {name}
              {i < rsvpNames.length - 1 ? "," : ""}
            </span>
          ))}
        </div>
      </div>
      <div className="compliments-section">
        <p className="compliments-title">BEST COMPLIMENTS FROM</p>
        <div className="compliments-list">
          {bestCompliments.map((name, i) => (
            <p key={i} className="compliment-name">
              {name}
            </p>
          ))}
        </div>
      </div>
      <div className="contact-section">
        <p className="contact-title">
          <Phone size={12} /> CONTACT US
        </p>
        <div className="contact-phones">
          {phones.map((p) => (
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
        <a
          href={`https://wa.me/?text=${shareMsg}`}
          target="_blank"
          rel="noreferrer"
          className="action-btn whatsapp-btn"
        >
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
  { id: "festivities", label: "Celebrations", short: "Events", Component: PageFestivities },
  { id: "vivah", label: "Vivah & RSVP", short: "RSVP", Component: PageVivahAndPresence },
];

function PatrikaBook({ onClose }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [turning, setTurning] = useState(false);
  const [turnDir, setTurnDir] = useState("forward");
  const [touchStart, setTouchStart] = useState(null);

  const goTo = useCallback(
    (idx) => {
      if (turning || idx < 0 || idx >= PAGES.length || idx === currentPage) return;
      const dir = idx > currentPage ? "forward" : "backward";
      setTurnDir(dir);
      setTurning(true);
      setTimeout(() => {
        setCurrentPage(idx);
        setTurning(false);
      }, 650);
    },
    [turning, currentPage]
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
  const progress = ((currentPage + 1) / PAGES.length) * 100;

  return (
    <div className="patrika-book-screen" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <GoldParticles count={14} />
      <div className="book-header">
        <div className="book-brand">
          <Sparkles size={12} /> SHUBH VIVAH
        </div>
        <div className="book-controls">
          <MusicControl />
          <button className="close-book-btn" onClick={onClose} aria-label="Back to cover">
            <X size={14} /> Close
          </button>
        </div>
      </div>
      <div className="book-stage">
        <div className="book-container">
          {currentPage > 0 && (
            <button className="nav-fab nav-fab--prev" onClick={prev} aria-label="Previous page">
              <ChevronLeft size={22} />
            </button>
          )}
          <div className={`patrika-page${turning ? ` turning-${turnDir}` : ""}`}>
            <div className="page-paper">
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
              <div className="page-scroll">
                <Component key={currentPage} />
              </div>
            </div>
            <div className="page-turn-shadow" aria-hidden="true" />
          </div>
          {currentPage < PAGES.length - 1 && (
            <button className="nav-fab nav-fab--next" onClick={next} aria-label="Next page">
              <ChevronRight size={22} />
            </button>
          )}
        </div>
      </div>
      <nav className="page-nav premium-nav" aria-label="Invitation pages">
        <div className="nav-progress" aria-hidden="true">
          <div className="nav-progress-fill" style={{ width: `${progress}%` }} />
        </div>
        <div className="nav-tabs">
          {PAGES.map((p, i) => (
            <button
              key={p.id}
              type="button"
              className={`nav-tab${i === currentPage ? " nav-tab--active" : ""}${i < currentPage ? " nav-tab--done" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Go to ${p.label}`}
              aria-current={i === currentPage ? "step" : undefined}
            >
              <span className="nav-tab-num">{i + 1}</span>
              <span className="nav-tab-label">{p.short}</span>
            </button>
          ))}
        </div>
        <div className="nav-meta">
          <span className="page-label">{PAGES[currentPage].label}</span>
          <span className="swipe-hint">Swipe or use arrows</span>
        </div>
      </nav>
    </div>
  );
}

function App() {
  const [state, setState] = useState("cover");
  return (
    <div className="app-root">
      {state === "cover" && <InvitationCover onOpen={() => setState("book")} />}
      {state === "book" && <PatrikaBook onClose={() => setState("cover")} />}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
