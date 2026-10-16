import React, { useCallback, useEffect, useState } from "react";
import { useReducedMotion } from "./useReducedMotion";
import { SLIP_CLIP } from "./paper";

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
            opacity: 0.18 + (i % 5) * 0.05,
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
      <div className="desk-surface" aria-hidden="true">
        <div className="desk-grain" />
        <div className="desk-lamp" />
      </div>

      <DustMotes count={reducedMotion ? 0 : 16} />

      <div className="envelope-stage">
        <div className={`envelope-rig${hoverSeal && phase === "SEALED" ? " rig-hover" : ""}`}>
          <div className="envelope-contact-shadow" aria-hidden="true" />

          <div className="envelope-3d envelope-closed">
            <div className="env-stack">
              <div className="env-panel env-panel--back" aria-hidden="true" />

              <div className="env-panel env-panel--body">
                <div className="env-texture" aria-hidden="true" />
              </div>

              <div className="envelope-letter" aria-hidden="true">
                <div
                  className={`envelope-reveal-names${phase === "FLAP_OPEN" || phase === "REVEAL" ? " reveal-visible" : ""}`}
                >
                  <span className="reveal-hindi">॥ शुभ विवाह ॥</span>
                  <span className="reveal-name">Rajendra</span>
                  <span className="reveal-heart">&amp;</span>
                  <span className="reveal-name">Monika</span>
                </div>
              </div>

              <div className="env-panel env-panel--wing env-panel--wing-left" aria-hidden="true" />
              <div className="env-panel env-panel--wing env-panel--wing-right" aria-hidden="true" />
              <div className="env-panel env-panel--fold-bottom" aria-hidden="true">
                <div className="env-texture" />
              </div>
              <div className="envelope-face-text" aria-hidden="true">
                <span className="env-hindi">शुभ विवाह</span>
                <div className="env-names-stack">
                  <span className="env-name-line">Rajendra Kumar</span>
                  <span className="env-amp">&amp;</span>
                  <span className="env-name-line">Monika</span>
                </div>
                <p className="env-line env-date">1 December 2026 · Alwar</p>
              </div>
              <span className="env-postmark" aria-hidden="true">
                <span>ALWAR</span>
                <b>01·XII</b>
                <span>2026</span>
              </span>
              <div className="env-panel env-panel--fold-top">
                <div className="env-texture env-texture--flap" aria-hidden="true" />
              </div>

              <div className="env-twine" aria-hidden="true">
                <span className="env-twine-band" />
                <span className="env-twine-end env-twine-end--a" />
                <span className="env-twine-end env-twine-end--b" />
              </div>

              <button
                type="button"
                className={`wax-seal${phase === "PRESSING" ? " seal-press" : ""}${phase === "SEAL_BREAK" || phase === "FLAP_OPEN" || phase === "REVEAL" ? " seal-broken" : ""}${hoverSeal ? " seal-hover" : ""}`}
                onClick={openInvitation}
                onMouseEnter={() => setHoverSeal(true)}
                onMouseLeave={() => setHoverSeal(false)}
                disabled={busy}
                aria-label="Break the seal and open the wedding invitation"
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

        <div className={`envelope-cta${busy ? " prompt-hidden" : ""}`}>
          <div className="envelope-caption" style={{ clipPath: SLIP_CLIP }}>
            <p className="caption-hindi" lang="hi">॥ श्री गणेशाय नमः ॥</p>
            <p className="caption-couple">
              Rajendra Kumar <span>&amp;</span> Monika
            </p>
            <p className="caption-date">request the honour of your presence</p>
          </div>
          <button type="button" className="envelope-open-btn" onClick={openInvitation} disabled={busy}>
            Open the Invitation
          </button>
          <p className="prompt-action">
            <span className="prompt-pulse" aria-hidden="true" />
            or break the wax seal
          </p>
        </div>
      </div>
    </div>
  );
}
