import React, { useLayoutEffect, useRef, useState } from "react";

/** Scales and centers page content so the full chitti fits without scrolling. */
export function FitPageContent({ children, pageKey }) {
  const viewportRef = useRef(null);
  const contentRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [scrollable, setScrollable] = useState(false);

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const content = contentRef.current;
    if (!viewport || !content) return;

    const measure = () => {
      content.style.transform = "none";
      content.style.width = "100%";

      const vh = viewport.clientHeight;
      const vw = viewport.clientWidth;
      if (vh < 8 || vw < 8) return;

      const ch = content.scrollHeight;
      const cw = content.scrollWidth;
      if (!ch) return;

      const pad = 10;
      const fit = Math.min((vh - pad) / ch, (vw - pad) / Math.max(cw, 1), 1);
      const minScale = 0.58;

      if (fit < minScale) {
        setScale(1);
        setScrollable(true);
        return;
      }

      setScrollable(false);
      setScale(Number(Math.min(1, fit).toFixed(4)));
    };

    const run = () => requestAnimationFrame(() => requestAnimationFrame(measure));

    run();
    const delays = [50, 200, 500, 1000, 1500].map((ms) => setTimeout(run, ms));
    const ro = new ResizeObserver(run);
    ro.observe(viewport);
    ro.observe(content);
    document.fonts?.ready?.then(run);
    window.addEventListener("resize", run);
    window.addEventListener("orientationchange", run);

    return () => {
      delays.forEach(clearTimeout);
      ro.disconnect();
      window.removeEventListener("resize", run);
      window.removeEventListener("orientationchange", run);
    };
  }, [children, pageKey]);

  return (
    <div className={`page-scroll${scrollable ? " page-scroll--flow" : ""}`} ref={viewportRef}>
      <div
        className="page-fit-scale"
        ref={contentRef}
        style={
          scrollable
            ? undefined
            : {
                transform: `scale(${scale})`,
                transformOrigin: "center center",
              }
        }
      >
        {children}
      </div>
    </div>
  );
}
