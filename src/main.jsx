import React, { useEffect, useRef, useState, useCallback } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Welcome+Resort+200+Ft+Rd+Dayanand+Nagar+Sakti+Nagar+Alwar+Rajasthan+301001";

function GoldParticles({ count = 20 }) {
  return (
    <div className="gold-particles" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="particle" style={{ left: `${(i * 5.3) % 100}%`, animationDelay: `${-(i * 0.47)}s`, animationDuration: `${6 + (i % 5) * 1.4}s`, fontSize: `${8 + (i % 4) * 4}px` }}>
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
        <span key={i} style={{ left: `${(i * 6.7) % 100}%`, animationDelay: `${-(i * 0.6)}s`, animationDuration: `${8 + (i % 4) * 1.5}s` }}>🌸</span>
      ))}
    </div>
  );
}

function Divider({ light = false }) {
  return (
    <div className={`patrika-divider${light ? " divider-light" : ""}`} aria-hidden="true">
      <span className="div-line" /><span className="div-motif">✦ ❧ ✦</span><span className="div-line" />
    </div>
  );
}

function MusicControl() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const toggle = () => {
    if (!audioRef.current) { audioRef.current = new Audio("/music/wedding-ambience.wav"); audioRef.current.loop = true; }
    if (playing) { audioRef.current.pause(); setPlaying(false); }
    else { audioRef.current.play().then(() => setPlaying(true)).catch(() => setPlaying(false)); }
  };
  useEffect(() => () => audioRef.current?.pause(), []);
  return (
    <button className={`music-ctrl${playing ? " music-playing" : ""}`} onClick={toggle} aria-label={playing ? "Pause wedding music" : "Play wedding music"}>
      <span className="music-icon">{playing ? "🔊" : "🎵"}</span>
      <span className="music-label">{playing ? "Music On" : "Music"}</span>
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
      </div>
      <GoldParticles count={24} />
      <RosePetals count={12} />
      <div className="cover-card-wrap">
        <div className="cover-card-shadow" aria-hidden="true" />
        <div className="cover-card" onClick={handleOpen} role="button" tabIndex={0}
          onKeyDown={e => (e.key === "Enter" || e.key === " ") && handleOpen()}
          aria-label="Click to open your wedding invitation">
          <div className="cover-front">
            <div className="cover-top-border" aria-hidden="true" />
            <div className="cover-ganesh" aria-hidden="true">
              <div className="ganesh-circle"><span className="ganesh-symbol">ॐ</span></div>
              <div className="ganesh-label">SHRI GANESHAYA NAMAH</div>
            </div>
            <div className="cover-inner-border">
              <div className="corner-motif tl" aria-hidden="true">❧</div>
              <div className="corner-motif tr" aria-hidden="true">❧</div>
              <div className="corner-motif bl" aria-hidden="true">❧</div>
              <div className="corner-motif br" aria-hidden="true">❧</div>
              <div className="cover-text-body">
                <p className="cover-subtitle">✦ SHUBH VIVAH ✦</p>
                <div className="cover-names-wrap">
                  <span className="cover-name groom-name">RAJENDRA KUMAR</span>
                  <span className="cover-weds">WEDS</span>
                  <span className="cover-name bride-name">MONIKA</span>
                </div>
                <Divider light />
                <p className="cover-date-text">1 DECEMBER 2026</p>
                <div className={`cover-seal${phase === "glowing" || phase === "opening" ? " seal-glow" : ""}`}>
                  <div className="seal-inner"><span className="seal-monogram">R ♥ M</span></div>
                </div>
              </div>
            </div>
            <div className="cover-bottom-border" aria-hidden="true" />
          </div>
          <div className="cover-light-burst" aria-hidden="true" />
        </div>
        <div className={`open-prompt${phase !== "idle" ? " prompt-fade" : ""}`}>
          <span className="open-arrow">↓</span>
          <span className="open-text">OPEN YOUR INVITATION</span>
          <span className="open-arrow">↓</span>
        </div>
      </div>
    </div>
  );
}

function Page1Blessings() {
  return (
    <div className="page-content">
      <div className="page-ganesh-top">
        <div className="ganesh-mandala">
          <div className="mandala-ring outer-ring" /><div className="mandala-ring mid-ring" />
          <div className="ganesh-circle large"><span className="ganesh-symbol large-symbol">ॐ</span></div>
        </div>
        <p className="ganesh-title">SHRI GANESHAYA NAMAH</p>
      </div>
      <Divider />
      <div className="page-arch">
        <div className="arch-shape">
          <div className="blessing-text">
            <p className="blessing-quote">"With the blessings of the Almighty and our beloved elders, we invite you to celebrate the sacred union of our families."</p>
          </div>
        </div>
      </div>
      <Divider />
      <div className="invitation-kicker"><span>✦</span><span>SHUBH VIVAH PATRIKA</span><span>✦</span></div>
      <div className="couple-names-display">
        <span className="display-name">RAJENDRA KUMAR</span>
        <span className="display-heart">♥</span>
        <span className="display-name">MONIKA</span>
      </div>
      <p className="bottom-date-text">1 DECEMBER 2026 · ALWAR, RAJASTHAN</p>
    </div>
  );
}

function Page2Family() {
  return (
    <div className="page-content">
      <h2 className="page-title">PARICHAY</h2>
      <p className="page-subtitle">Family Introduction</p>
      <Divider />
      <div className="family-layout">
        <div className="family-block bride-block">
          <div className="family-crown">❧ BRIDE ❧</div>
          <h3 className="family-big-name">MONIKA</h3>
          <div className="family-details">
            <p className="family-relation">Daughter of</p>
            <p className="family-person">Shrimati Rajbala</p>
            <p className="family-amp">&amp;</p>
            <p className="family-person">Shri Naresh Chand <span className="family-note">(Const. RJ Police)</span></p>
          </div>
          <div className="family-divider-mini">— ✦ —</div>
          <div className="family-details">
            <p className="family-relation">Granddaughter of</p>
            <p className="family-person deceased">Late Shrimati Manbi Devi</p>
            <p className="family-amp">&amp;</p>
            <p className="family-person deceased">Late Shri Kanhaiya Lal</p>
          </div>
          <div className="family-floral" aria-hidden="true">🌸 ❀ 🌸</div>
        </div>
        <div className="family-center-div" aria-hidden="true">
          <span className="center-div-line" /><span className="center-heart">♥</span><span className="center-div-line" />
        </div>
        <div className="family-block groom-block">
          <div className="family-crown">❧ GROOM ❧</div>
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
          <div className="family-floral" aria-hidden="true">🌺 ❀ 🌺</div>
        </div>
      </div>
    </div>
  );
}

function Page3Celebrations() {
  const events = [
    { time: "12:00 PM", name: "LUNCH", icon: "🍽️" },
    { time: "5:00 PM", name: "BHAT", icon: "🪔" },
    { time: "6:00 PM", name: "LAGAN", icon: "✦" },
    { time: "8:00 PM", name: "DINNER", icon: "🎊" },
  ];
  return (
    <div className="page-content">
      <h2 className="page-title">SHUBH UTSAV</h2>
      <p className="page-subtitle">Wedding Celebrations</p>
      <Divider />
      <div className="event-date-banner">
        <span className="event-date-num">29</span>
        <div className="event-date-text"><span>NOVEMBER</span><span>2026</span></div>
        <span className="event-date-num">29</span>
      </div>
      <div className="events-list">
        {events.map(ev => (
          <div key={ev.name} className="event-entry">
            <span className="event-icon">{ev.icon}</span>
            <div className="event-entry-body"><span className="event-entry-name">{ev.name}</span></div>
            <span className="event-entry-time">{ev.time}</span>
          </div>
        ))}
      </div>
      <Divider />
      <div className="venue-block">
        <p className="venue-label">📍 VENUE</p>
        <p className="venue-main">VPO - BHATPURA</p>
        <p className="venue-sub">Teh - Nagar, Dist - Bharatpur, Rajasthan</p>
      </div>
      <div className="decorative-thali" aria-hidden="true"><span>🪔</span><span>🌸</span><span>🪔</span></div>
    </div>
  );
}

function Page4HaldiMehendi() {
  return (
    <div className="page-content page-haldi">
      <div className="haldi-header">
        <span className="haldi-icon">🌼</span>
        <h2 className="page-title haldi-title">HALDI &amp; MEHENDI</h2>
        <span className="haldi-icon">🌼</span>
      </div>
      <p className="page-subtitle">Auspicious Pre-Wedding Ceremonies</p>
      <Divider />
      <div className="event-date-banner haldi-banner">
        <span className="event-date-num">30</span>
        <div className="event-date-text"><span>NOVEMBER</span><span>2026</span></div>
        <span className="event-date-num">30</span>
      </div>
      <div className="haldi-events">
        <div className="haldi-event-card">
          <div className="haldi-event-icon">🌿</div>
          <div className="haldi-event-info">
            <p className="haldi-event-name">HALDI &amp; MEHENDI</p>
            <p className="haldi-event-time">4:00 PM</p>
          </div>
          <div className="haldi-marigold" aria-hidden="true">🌼</div>
        </div>
        <div className="haldi-event-card">
          <div className="haldi-event-icon">🪔</div>
          <div className="haldi-event-info">
            <p className="haldi-event-name">CHAK</p>
            <p className="haldi-event-time">6:00 PM</p>
          </div>
          <div className="haldi-marigold" aria-hidden="true">🌸</div>
        </div>
      </div>
      <Divider />
      <div className="venue-block">
        <p className="venue-label">📍 VENUE</p>
        <p className="venue-main">VPO - BHATPURA</p>
        <p className="venue-sub">Teh - Nagar, Dist - Bharatpur, Rajasthan</p>
      </div>
      <div className="haldi-petals" aria-hidden="true">🌼 🌸 🌼 🌸 🌼</div>
    </div>
  );
}

function Page5WeddingDay() {
  return (
    <div className="page-content">
      <div className="wedding-day-kicker"><span>✦ THE AUSPICIOUS DAY ✦</span></div>
      <h2 className="page-title">BARAAT &amp; GHUDCHADI</h2>
      <p className="page-subtitle">Wedding Procession</p>
      <Divider />
      <div className="event-date-banner">
        <span className="event-date-num">01</span>
        <div className="event-date-text"><span>DECEMBER</span><span>2026</span></div>
        <span className="event-date-num">01</span>
      </div>
      <div className="procession-events">
        <div className="procession-entry">
          <div className="procession-icon">🐴</div>
          <div className="procession-info">
            <p className="procession-name">GHUDCHADI</p>
            <p className="procession-desc">Groom's ceremonial horse ride</p>
            <p className="procession-time">4:00 PM</p>
          </div>
        </div>
        <div className="procession-divider-h" aria-hidden="true"><span /><span>✦</span><span /></div>
        <div className="procession-entry">
          <div className="procession-icon">🎊</div>
          <div className="procession-info">
            <p className="procession-name">BARAT DEPARTURE</p>
            <p className="procession-desc">Wedding procession to venue</p>
            <p className="procession-time">5:00 PM</p>
          </div>
        </div>
      </div>
      <Divider />
      <div className="venue-block">
        <p className="venue-label">📍 VENUE</p>
        <p className="venue-main">VPO - BHATPURA</p>
        <p className="venue-sub">Teh - Nagar, Dist - Bharatpur, Rajasthan</p>
      </div>
      <div className="shehnai-motif" aria-hidden="true">🎺 ✦ 🎺</div>
    </div>
  );
}

function Page6SacredWedding() {
  return (
    <div className="page-content page-grand">
      <div className="grand-top-ornament" aria-hidden="true"><span>✦ ❧ ✦ ❧ ✦</span></div>
      <div className="grand-kicker">SHUBH VIVAH</div>
      <div className="mandap-illustration" aria-hidden="true">
        <div className="mandap-arch">
          <div className="mandap-inner">
            <span className="mandap-diya">🪔</span>
            <span className="mandap-om">ॐ</span>
            <span className="mandap-diya">🪔</span>
          </div>
          <div className="mandap-garland">🌸 🌺 🌸 🌺 🌸</div>
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
      <Divider />
      <div className="venue-grand">
        <p className="venue-grand-name">WELCOME RESORT</p>
        <p className="venue-grand-addr">200 Ft Rd, Dayanand Nagar, Sakti Nagar,<br />Alwar, Rajasthan 301001</p>
        <a href={MAPS_URL} target="_blank" rel="noreferrer" className="map-link-btn">📍 VIEW VENUE ON MAP</a>
      </div>
      <div className="grand-bottom-ornament" aria-hidden="true"><span>✦ ❧ ✦ ❧ ✦</span></div>
    </div>
  );
}

function Page7Blessings() {
  const phones = [
    { number: "9772694734", display: "9772694734" },
    { number: "9024611351", display: "9024611351" },
    { number: "8696275378", display: "8696275378" },
  ];
  const rsvpNames = ["Mukesh","Vijay","Chhaganlal","Ramprasad","Khemchand","Raju","Sunna","Jeetu","Ajay (Eng.)","Rahul","Ravi","Deepak","Mohit","Anil","Sunil","Aakash","Pavan","Abhishek","Chinnu","Aman"];
  const bestCompliments = ["Shri Mohar Pal","Shri Phool Chand","Shri Badan Singh","Shri Samaychand","Shri"];
  const shareMsg = encodeURIComponent("🌸 You're invited! Rajendra Kumar & Monika Wedding — 1 December 2026, 9PM at Welcome Resort, Alwar. Join us! 🎊");
  return (
    <div className="page-content page-blessings">
      <div className="bless-header">
        <div className="bless-ornament" aria-hidden="true">✦ ❧ ✦</div>
        <h2 className="page-title bless-title">YOUR PRESENCE</h2>
        <p className="page-subtitle">will make our celebration complete</p>
      </div>
      <div className="bless-quote"><p>"We look forward to celebrating this beautiful occasion with you and your family."</p></div>
      <Divider />
      <div className="love-label">WITH LOVE AND BLESSINGS</div>
      <div className="rsvp-section">
        <p className="rsvp-title">RSVP — FAMILY &amp; FRIENDS</p>
        <div className="rsvp-names">
          {rsvpNames.map((name, i) => (
            <span key={i} className="rsvp-name">{name}{i < rsvpNames.length - 1 ? "," : ""}</span>
          ))}
        </div>
      </div>
      <Divider />
      <div className="compliments-section">
        <p className="compliments-title">BEST COMPLIMENTS FROM</p>
        <div className="compliments-list">
          {bestCompliments.map((name, i) => (<p key={i} className="compliment-name">{name}</p>))}
        </div>
      </div>
      <Divider />
      <div className="contact-section">
        <p className="contact-title">📞 CONTACT US</p>
        <div className="contact-phones">
          {phones.map(p => (<a key={p.number} href={`tel:${p.number}`} className="phone-link">📱 {p.display}</a>))}
        </div>
      </div>
      <div className="action-buttons">
        <a href={MAPS_URL} target="_blank" rel="noreferrer" className="action-btn map-btn">📍 View Venue Map</a>
        <a href={`https://wa.me/?text=${shareMsg}`} target="_blank" rel="noreferrer" className="action-btn whatsapp-btn">💬 Share on WhatsApp</a>
      </div>
      <div className="closing-monogram"><span>R</span><span className="closing-heart">♥</span><span>M</span></div>
      <p className="closing-date">1 · 12 · 2026</p>
    </div>
  );
}

const PAGES = [
  { id: "blessings", label: "Divine Blessings", Component: Page1Blessings },
  { id: "family", label: "Family Introduction", Component: Page2Family },
  { id: "celebrations", label: "Wedding Celebrations", Component: Page3Celebrations },
  { id: "haldi", label: "Haldi & Mehendi", Component: Page4HaldiMehendi },
  { id: "wedding-day", label: "The Wedding Day", Component: Page5WeddingDay },
  { id: "sacred", label: "Sacred Wedding", Component: Page6SacredWedding },
  { id: "blessings-rsvp", label: "Family Blessings", Component: Page7Blessings },
];

function PatrikaBook({ onClose }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [turning, setTurning] = useState(false);
  const [turnDir, setTurnDir] = useState("forward");
  const [touchStart, setTouchStart] = useState(null);

  const goTo = useCallback((idx) => {
    if (turning || idx < 0 || idx >= PAGES.length || idx === currentPage) return;
    const dir = idx > currentPage ? "forward" : "backward";
    setTurnDir(dir);
    setTurning(true);
    setTimeout(() => { setCurrentPage(idx); setTurning(false); }, 600);
  }, [turning, currentPage]);

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
    if (Math.abs(delta) > 50) { delta > 0 ? next() : prev(); }
    setTouchStart(null);
  };

  const { Component } = PAGES[currentPage];

  return (
    <div className="patrika-book-screen" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <GoldParticles count={16} />
      <div className="book-header">
        <div className="book-brand">✦ SHUBH VIVAH PATRIKA ✦</div>
        <div className="book-controls">
          <MusicControl />
          <button className="close-book-btn" onClick={onClose} aria-label="Back to cover">✕ Close</button>
        </div>
      </div>
      <div className="book-container">
        {currentPage > 0 && (
          <button className="corner-tap left-corner" onClick={prev} aria-label="Previous page" title="Previous page" />
        )}
        <div className={`patrika-page${turning ? ` turning-${turnDir}` : ""}`}>
          <div className="page-paper">
            <div className="page-outer-border" />
            <div className="page-inner-border" />
            <div className="corner-deco tl" aria-hidden="true">❧</div>
            <div className="corner-deco tr" aria-hidden="true">❧</div>
            <div className="corner-deco bl" aria-hidden="true">❧</div>
            <div className="corner-deco br" aria-hidden="true">❧</div>
            <div className="page-scroll"><Component /></div>
          </div>
          <div className="page-turn-shadow" aria-hidden="true" />
        </div>
        {currentPage < PAGES.length - 1 && (
          <button className="corner-tap right-corner" onClick={next} aria-label="Next page" title="Next page" />
        )}
      </div>
      <div className="page-nav">
        <button className={`nav-btn prev-btn${currentPage === 0 ? " nav-btn-hidden" : ""}`} onClick={prev} disabled={currentPage === 0} aria-label="Previous page">← PREV</button>
        <div className="page-indicator">
          <span className="page-num">{currentPage + 1}</span>
          <span className="page-sep"> / </span>
          <span className="page-total">{PAGES.length}</span>
          <span className="page-label">{PAGES[currentPage].label}</span>
        </div>
        <div className="page-dots">
          {PAGES.map((_, i) => (
            <button key={i} className={`page-dot${i === currentPage ? " dot-active" : ""}`} onClick={() => goTo(i)} aria-label={`Go to page ${i + 1}`} />
          ))}
        </div>
        <button className={`nav-btn next-btn${currentPage === PAGES.length - 1 ? " nav-btn-hidden" : ""}`} onClick={next} disabled={currentPage === PAGES.length - 1} aria-label="Next page">NEXT →</button>
      </div>
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
