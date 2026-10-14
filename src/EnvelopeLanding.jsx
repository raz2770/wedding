import React, { useCallback, useEffect, useState } from "react";
import { useReducedMotion } from "./useReducedMotion";

function DustMotes({ count = 18 }) {
  return (
    <div className="dust-motes" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="dust-mote"
          style={{
            left: `${(i * 7.3) % 100}%`,
            top: `${(i * 11) % 100}%`,
            animationDelay: `${-(i * 0.8)}s`,
            animationDuration: `${14 + (i % 6) * 2}s`,
            opacity: 0.12 + (i % 5) * 0.03,
          }}
        />
      ))}
    </div>
  );
}

export function EnvelopeLanding({ onOpen }) {
  const reducedMotion = useReducedMotion();
  const [introDone, setIntroDone] = useState(reducedMotion);
  const [phase, setPhase] = useState("SEALED");
  const [hoverSeal, setHoverSeal] = useState(false);

  useEffect(() => {
    if (reducedMotion) return;
    const t = setTimeout(() => setIntroDone(true), 80);
    return () => clearTimeout(t);
  }, [reducedMotion]);

  const openInvitation = useCallback(() => {
    if (phase !== "SEALED") return;

    if (reducedMotion) {
      onOpen();
      return;
    }

    setPhase("PRESSING");
    setTimeout(() => setPhase("SEAL_BREAK"), 280);
    setTimeout(() => setPhase("FLAP_OPEN"), 700);
    setTimeout(() => setPhase("REVEAL"), 1600);
    setTimeout(() => onOpen(), 2400);
  }, [phase, reducedMotion, onOpen]);

  const busy = phase !== "SEALED";
  const phaseClass = phase.toLowerCase().replace("_", "-");

  return (
    <div className={`envelope-landing intro-${introDone ? "done" : "pending"} phase-${phaseClass}`}>
      <div className="envelope-studio" aria-hidden="true">
        <div className="studio-aged-paper" />
        <div className="studio-warm-glow" />
        <div className="studio-paper-stain" />
        <div className="studio-paper-edge" />
        <div className="studio-vignette studio-vignette--soft" />
        <div className="studio-keylight" />
      </div>

      <DustMotes count={reducedMotion ? 0 : 16} />

      <div className="envelope-stage">
        <div className={`envelope-rig${hoverSeal && phase === "SEALED" ? " rig-hover" : ""}`}>
          <div className="envelope-contact-shadow" aria-hidden="true" />
          <div className="envelope-halo" aria-hidden="true" />

          <div className="envelope-3d envelope-closed">
            <div className="env-stack">
              <div className="env-panel env-panel--back" aria-hidden="true" />

              <div className="env-panel env-panel--body">
                <div className="env-texture" aria-hidden="true" />
                <div className="env-gold-frame" aria-hidden="true">
                  <span className="frame-corner tl" />
                  <span className="frame-corner tr" />
                  <span className="frame-corner bl" />
                  <span className="frame-corner br" />
                </div>
                <div className="envelope-letter-peek" aria-hidden="true">
                  <div className="letter-edge">
                    <div
                      className={`envelope-reveal-names${phase === "FLAP_OPEN" || phase === "REVEAL" ? " reveal-visible" : ""}`}
                      aria-live="polite"
                    >
                      <span className="reveal-name">Rajendra</span>
                      <span className="reveal-heart" aria-hidden="true">♥</span>
                      <span className="reveal-name">Monika</span>
                    </div>
                  </div>
                </div>
                <div className="envelope-face-text">
                  <p className="env-line env-ganesh">SHRI GANESHAYA NAMAH</p>
                  <p className="env-line env-names">RAJENDRA KUMAR &amp; MONIKA</p>
                  <p className="env-line env-date">1 DECEMBER 2026</p>
                </div>
              </div>

              <div className="env-panel env-panel--wing env-panel--wing-left" aria-hidden="true" />
              <div className="env-panel env-panel--wing env-panel--wing-right" aria-hidden="true" />
              <div className="env-panel env-panel--fold-bottom" aria-hidden="true" />
              <div className="env-panel env-panel--fold-top">
                <div className="env-texture env-texture--flap" aria-hidden="true" />
                <div className="flap-foil-edge" aria-hidden="true" />
              </div>

              <div className="env-flap-crease" aria-hidden="true" />
              <div className="envelope-inner-light" aria-hidden="true" />

              <button
                type="button"
                className={`wax-seal${phase === "PRESSING" ? " seal-press" : ""}${phase === "SEAL_BREAK" || phase === "FLAP_OPEN" || phase === "REVEAL" ? " seal-broken" : ""}${hoverSeal ? " seal-hover" : ""}`}
                onClick={openInvitation}
                onMouseEnter={() => setHoverSeal(true)}
                onMouseLeave={() => setHoverSeal(false)}
                disabled={busy}
                aria-label="Open wedding invitation"
              >
                <span className="wax-drip wax-drip--a" aria-hidden="true" />
                <span className="wax-drip wax-drip--b" aria-hidden="true" />
                <span className="wax-pool" aria-hidden="true" />
                <span className="wax-emboss" aria-hidden="true">
                  <span className="wax-monogram">R</span>
                  <span className="wax-ornament">✦</span>
                  <span className="wax-monogram">M</span>
                </span>
                <span className="wax-highlight" aria-hidden="true" />
                <span className="wax-crack" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        <div className={`envelope-prompt${busy ? " prompt-hidden" : ""}`}>
          <p className="prompt-special">WITH LOVE, YOU ARE INVITED</p>
          <p className="prompt-action">
            <span className="prompt-pulse" aria-hidden="true" />
            Gently tap the wax seal to open
          </p>
        </div>
      </div>
    </div>
  );
}
