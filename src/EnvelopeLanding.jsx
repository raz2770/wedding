import React, { useCallback, useEffect, useState } from "react";
import { useReducedMotion } from "./useReducedMotion";

function DustMotes({ count = 24 }) {
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
            opacity: 0.15 + (i % 5) * 0.04,
          }}
        />
      ))}
    </div>
  );
}

/**
 * Landing interaction phases (envelope only).
 * SEALED → PRESSING → SEAL_BREAK → FLAP_OPEN → REVEAL → (hand off to patrika)
 */
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

  return (
    <div
      className={`envelope-landing intro-${introDone ? "done" : "pending"} phase-${phase.toLowerCase().replace("_", "-")}`}
    >
      <div className="envelope-studio" aria-hidden="true">
        <div className="studio-aged-paper" />
        <div className="studio-paper-stain" />
        <div className="studio-paper-edge" />
        <div className="studio-vignette" />
        <div className="studio-keylight" />
      </div>

      <DustMotes count={reducedMotion ? 0 : 22} />

      <div className="envelope-stage">
        <div className={`envelope-rig${hoverSeal && phase === "SEALED" ? " rig-hover" : ""}`}>
          <div className="envelope-contact-shadow" aria-hidden="true" />

          <div className="envelope-3d">
            <div className="envelope-back" aria-hidden="true" />
            <div className="envelope-side envelope-side--left" aria-hidden="true" />
            <div className="envelope-side envelope-side--right" aria-hidden="true" />
            <div className="envelope-bottom-fold" aria-hidden="true" />

            <div className="envelope-body">
              <div className="envelope-paper-fiber" aria-hidden="true" />
              <div className="envelope-paper-grain" aria-hidden="true" />
              <div className="envelope-fold-diagonal envelope-fold-diagonal--l" aria-hidden="true" />
              <div className="envelope-fold-diagonal envelope-fold-diagonal--r" aria-hidden="true" />
              <div className="envelope-crease-line" aria-hidden="true" />
              <div className="envelope-gold-frame" aria-hidden="true">
                <span className="frame-corner tl" />
                <span className="frame-corner tr" />
                <span className="frame-corner bl" />
                <span className="frame-corner br" />
              </div>
              <div className="envelope-raj-motif" aria-hidden="true" />
              <div className="envelope-letter-peek" aria-hidden="true">
                <div className="letter-edge" />
              </div>
              <div className="envelope-face-text">
                <p className="env-line env-ganesh">SHRI GANESHAYA NAMAH</p>
                <p className="env-line env-names">RAJENDRA KUMAR &amp; MONIKA</p>
                <p className="env-line env-date">1 DECEMBER 2026</p>
              </div>
            </div>

            <div className="envelope-flap-wrap">
              <div className="envelope-flap">
                <div className="flap-paper-fiber" aria-hidden="true" />
                <div className="flap-paper-grain" aria-hidden="true" />
                <div className="flap-fold-shadow" aria-hidden="true" />
                <div className="flap-gold-line" aria-hidden="true" />
              </div>
            </div>

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

        <div className={`envelope-prompt${busy ? " prompt-hidden" : ""}`}>
          <p className="prompt-special">A SPECIAL INVITATION AWAITS</p>
          <p className="prompt-action">
            <span className="prompt-pulse" aria-hidden="true" />
            Tap the wax seal to open
          </p>
        </div>
      </div>
    </div>
  );
}
