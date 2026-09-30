import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Heart, MapPin, Clock3, Volume2, VolumeX, ChevronDown,
  CalendarDays, Navigation, Music2, Sparkles
} from "lucide-react";
import "./styles.css";

const WEDDING = new Date("2026-12-01T21:00:00+05:30").getTime();
const maps = "https://www.google.com/maps/search/?api=1&query=Welcome+Resort+200+Ft+Rd+Dayanand+Nagar+Sakti+Nagar+Alwar+Rajasthan+301001";

const images = {
  hero: "/images/hero-couple-hd.png",
  palace: "/images/palace-hero.png",
  lagan: "/images/lagan.jpg",
  haldi: "/images/haldi.jpg",
  mehendi: "/images/mehendi.jpg",
  chak: "/images/chak.jpg",
  wedding: "/images/wedding.jpg",
  sindoor: "/images/sindoor.jpg",
  bidaai: "/images/bidaai.jpg",
  storyboard: "/images/wedding-storyboard.jpg",
};

const events = [
  ["29 November 2026", "8:00 PM", "Lagan", "लग्न", images.lagan, "Residence, VPO – Bhatpura, Bharatpur, Rajasthan"],
  ["30 November 2026", "4:00 PM", "Haldi & Mehendi", "हल्दी एवं मेहंदी", images.haldi, "Residence, VPO – Bhatpura, Bharatpur, Rajasthan"],
  ["30 November 2026", "6:00 PM", "CHAK", "चाक", images.chak, "Residence, VPO – Bhatpura, Bharatpur, Rajasthan"],
  ["1 December 2026", "9:00 PM", "Shubh Vivah", "शुभ विवाह", images.wedding, "Welcome Resort, Alwar, Rajasthan"],
];

function Countdown({ className = "" }) {
  const [now, setNow] = useState(Date.now());
  const [tick, setTick] = useState(false);
  useEffect(() => {
    const id = setInterval(() => {
      setNow(Date.now());
      setTick(true);
      setTimeout(() => setTick(false), 420);
    }, 1000);
    return () => clearInterval(id);
  }, []);
  const d = Math.max(0, WEDDING - now);
  const vals = [
    [Math.floor(d / 86400000), "Days"],
    [Math.floor(d / 3600000) % 24, "Hours"],
    [Math.floor(d / 60000) % 60, "Minutes"],
    [Math.floor(d / 1000) % 60, "Seconds"],
  ];
  return (
    <div className={`countdown ${tick ? "is-ticking" : ""} ${className}`}>
      {vals.map(([v, l]) => (
        <div className="count-cell" key={l}>
          <b>{String(v).padStart(2, "0")}</b>
          <span>{l}</span>
        </div>
      ))}
    </div>
  );
}

function Petals() {
  return <div className="petals" aria-hidden="true">{Array.from({ length: 24 }).map((_, i) => <span key={i} style={{ left: `${(i * 4.7) % 105}%`, animationDelay: `${-(i * .83)}s`, animationDuration: `${7 + (i % 5) * 1.3}s` }}>{i % 4 === 0 ? "✿" : i % 3 === 0 ? "❀" : "✦"}</span>)}</div>;
}

function RevealSection({ children, className = "", id, variant = "" }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    const ob = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) el.classList.add("is-visible"); }, { threshold: .12 });
    if (el) ob.observe(el);
    return () => ob.disconnect();
  }, []);
  return <section ref={ref} id={id} className={`section reveal ${variant} ${className}`}>{children}</section>;
}

function EventCard({ event, index, featured }) {
  const ref = useRef(null);
  const [date, time, title, hindi, img, place] = event;
  useEffect(() => {
    const el = ref.current;
    const ob = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) el.classList.add("is-visible"); }, { threshold: .18 });
    if (el) ob.observe(el);
    return () => ob.disconnect();
  }, []);
  return (
    <article
      ref={ref}
      className={`event-card reveal-card ${featured ? "featured" : ""} ${index % 2 === 0 ? "from-left" : "from-right"}`}
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      <div className="event-image">
        <img src={img} alt={title} className="event-art-img" />
        <div className="event-shine" aria-hidden="true" />
        <div className="event-number">0{index + 1}</div>
      </div>
      <div className="event-copy">
        <small>{date}</small>
        <h3>{title}</h3>
        <span className="hindi">{hindi}</span>
        <p><Clock3 size={14} />{time}</p>
        <p><MapPin size={14} />{place}</p>
      </div>
    </article>
  );
}

function HeroSparkles() {
  return (
    <div className="hero-sparkles" aria-hidden="true">
      {Array.from({ length: 12 }).map((_, i) => (
        <Sparkles
          key={i}
          size={10 + (i % 3) * 4}
          style={{
            left: `${8 + (i * 7.8) % 84}%`,
            top: `${12 + (i * 11) % 72}%`,
            animationDelay: `${i * 0.35}s`,
            animationDuration: `${2.8 + (i % 4) * 0.6}s`,
          }}
        />
      ))}
    </div>
  );
}

function ParallaxImage({ src, alt, className = "", speed = .12 }) {
  const ref = useRef(null);
  const [y, setY] = useState(0);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect();
      const center = window.innerHeight / 2;
      const next = Math.max(-28, Math.min(28, (center - (r.top + r.height / 2)) * speed));
      setY(next);
    };
    const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, [speed]);
  return <div ref={ref} className={`parallax-wrap ${className}`}><img src={src} alt={alt} style={{ transform: `translate3d(0,${y}px,0) scale(1.08)` }} /></div>;
}

function MusicButton() {
  const audio = useRef(null);
  const [playing, setPlaying] = useState(false);
  const toggle = () => {
    if (!audio.current) audio.current = new Audio("/music/wedding-ambience.wav");
    audio.current.loop = true;
    if (playing) { audio.current.pause(); setPlaying(false); }
    else { audio.current.play().then(() => setPlaying(true)).catch(() => setPlaying(false)); }
  };
  useEffect(() => () => audio.current?.pause(), []);
  return <button className={`music-toggle ${playing ? "playing" : ""}`} onClick={toggle} aria-label="Toggle wedding music">
    {playing ? <Volume2 size={17}/> : <VolumeX size={17}/>}<span>{playing ? "Music on" : "Music"}</span><Music2 size={13}/>
  </button>;
}

function Envelope({ onOpen }) {
  const [opening, setOpening] = useState(false);
  const open = () => { if (opening) return; setOpening(true); setTimeout(onOpen, 1350); };
  return <div className={`envelope-screen ${opening ? "opening" : ""}`}>
    <Petals />
    <div className="envelope-intro"><span>✦ YOU'RE INVITED ✦</span><small>TO OUR ROYAL WEDDING</small></div>
    <div className="envelope-scene">
      <div className="envelope-shadow" />
      <div className="envelope">
        <div className="envelope-back"><img src={images.palace} alt="Royal Rajasthani palace wedding illustration" /></div>
        <div className="invite-card"><div className="mini-ornament">❧ ✦ ❧</div><strong>Rajendra</strong><i>♥</i><strong>Monika</strong><small>1 DECEMBER 2026 · ALWAR</small></div>
        <div className="envelope-flap"><div className="wax">R ♥ M</div></div>
      </div>
    </div>
    <button className="open-invite" onClick={open}><Heart size={16}/> TAP TO OPEN</button>
    <p className="envelope-note">A beautiful new chapter awaits</p>
  </div>;
}

function Hero() {
  const [offset, setOffset] = useState(0);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const t = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(t);
  }, []);
  useEffect(() => {
    const on = () => setOffset(Math.min(window.scrollY * .16, 120));
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <section className={`hero ${ready ? "hero-ready" : ""}`}>
      <div className="hero-image" style={{ transform: `translate3d(0,${offset}px,0) scale(1.08)` }} />
      <div className="hero-overlay" />
      <Petals />
      <HeroSparkles />
      <div className="hero-content">
        <span className="royal-kicker">ROYAL RAJASTHAN · ALWAR</span>
        <div className="hero-crown">✦ ❧ ✦</div>
        <div className="script">Together Forever</div>
        <h1>Rajendra <em className="pulse-heart">♥</em> Monika</h1>
        <p>Two families. Two hearts. One beautiful beginning.</p>
        <div className="hero-date"><CalendarDays size={15} /> 01 DECEMBER 2026 <b>·</b> 9:00 PM</div>
        <div className="hero-venue">Welcome Resort · Alwar, Rajasthan</div>
        <Countdown />
        <a className="discover" href="#story"><span>SCROLL TO DISCOVER</span><ChevronDown /></a>
      </div>
    </section>
  );
}

function App() {
  const [entered, setEntered] = useState(false), [hi, setHi] = useState(false);
  const T = hi
    ? { story: "हमारी कहानी", events: "शुभ अवसर", family: "हमारे परिवार", venue: "स्थान" }
    : { story: "Our Story", events: "Wedding Celebrations", family: "With the Blessings of Our Families", venue: "The Venue" };
  if (!entered) return <Envelope onOpen={() => setEntered(true)} />;

  return <div className="app">
    <header><div className="brand">R <i>♥</i> M</div><nav><button onClick={() => setHi(!hi)}>{hi ? "EN" : "हिंदी"}</button><MusicButton /></nav></header>
    <Hero />
    <main>
      <RevealSection id="story" className="story"><small>01 · {T.story}</small><h2>Two souls, <em>one beautiful beginning.</em></h2>
        <p className="lead">Two families met, conversations turned into warmth, and a beautiful new beginning took shape. We invite you to be part of this chapter as we begin our life together with your love and blessings.</p>
        <div className="story-frame portrait-frame"><div className="portrait-backdrop"/><img className="portrait-art" src={images.hero} alt="Rajendra and Monika illustrated portrait"/><div className="frame-caption">Two Families · Two Hearts · One Journey</div></div>
      </RevealSection>

      <RevealSection className="dark center"><small>02 · SAVE THE DATE</small><h2>Until we say <em>“I do.”</em></h2><div className="bigdate">1 December 2026 · 9:00 PM</div><Countdown /></RevealSection>

      <RevealSection className="palace center"><small>03 · ROYAL SETTING</small><h2>A celebration in the heart of <em>Rajasthan.</em></h2>
        <div className="palace-art premium-palace"><div className="palace-backdrop"/><img className="palace-art-img" src={images.palace} alt="Rajasthani palace and wedding mandap illustration"/><div className="palace-glow"/><div className="palace-badge">RAJASTHAN · ROYAL MANDAP</div></div>
        <p className="lead center-text">Marigolds, lanterns, palace arches and a royal mandap — the visual language of our celebration.</p>
      </RevealSection>

      <RevealSection className="events"><small>04 · {T.events}</small><h2>Moments worth <em>celebrating.</em></h2>
        <div className="event-list">
          {events.map((e, i) => <EventCard key={e[2]} event={e} index={i} featured={i === 3} />)}
        </div>
      </RevealSection>

      <RevealSection className="center"><small>05 · {T.family}</small><h2>With love from <em>our families.</em></h2>
        <div className="families"><div><small>THE GROOM'S FAMILY</small><h3>Bhooriya</h3><p>Father</p><h3>Rama Devi</h3><p>Mother</p></div><b>♥</b><div><small>THE BRIDE'S FAMILY</small><h3>Naresh Verma</h3><p>Father</p><h3>Rajbala Devi</h3><p>Mother</p></div></div>
      </RevealSection>

      <RevealSection className="dark"><small>06 · {T.venue}</small><h2>Meet us at <em>Welcome Resort.</em></h2>
        <div className="venue"><div className="venue-art"><img src={images.wedding} alt="Wedding venue celebration"/><div><Navigation size={22}/> ALWAR · RAJASTHAN</div></div><div className="venue-copy"><h3>Welcome Resort</h3><p>200 Ft Rd, Dayanand Nagar,<br/>Sakti Nagar, Alwar, Rajasthan 301001</p><a className="gold" href={maps} target="_blank" rel="noreferrer"><Navigation size={15}/> OPEN GOOGLE MAPS</a></div></div>
      </RevealSection>

      <RevealSection className="closing reveal-closing" variant="center">
        <div className="ornament float-ornament">✦ ❧ ✦</div>
        <h2>Until forever begins.</h2>
        <p>Your presence and blessings are the most precious gift.</p>
        <strong className="closing-monogram">R <i className="pulse-heart">♥</i> M</strong>
        <small>1 · 12 · 2026</small>
      </RevealSection>
    </main><footer>Rajendra ♥ Monika · Alwar, Rajasthan</footer>
  </div>;
}

createRoot(document.getElementById("root")).render(<App />);
