import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

/* ─── Floating ghost prompt card ──────────────────────────────────────── */
function GhostCard({ style, label, tag, delay = 0 }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div
      style={{
        position: "absolute",
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "16px",
        backdropFilter: "blur(12px)",
        padding: "18px 22px",
        minWidth: "200px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
        pointerEvents: "none",
        ...style,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
        <div style={{ width: "28px", height: "28px", borderRadius: "8px", background: "rgba(99,102,241,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(165,180,252,0.9)" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
        </div>
        <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", fontFamily: "monospace", letterSpacing: "0.04em" }}>{tag}</span>
      </div>
      <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", fontWeight: 500, lineHeight: 1.5 }}>{label}</div>
      <div style={{ marginTop: "10px", height: "4px", borderRadius: "99px", background: "rgba(255,255,255,0.05)", overflow: "hidden" }}>
        <div style={{ height: "100%", width: `${Math.floor(Math.random() * 40 + 50)}%`, background: "linear-gradient(90deg, #6366f1, #818cf8)", borderRadius: "99px" }} />
      </div>
    </div>
  );
}

/* ─── Pulsing status dot ───────────────────────────────────────────────── */
function StatusDot({ color = "#22c55e" }) {
  return (
    <span style={{ position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "center", width: "10px", height: "10px" }}>
      <span style={{ position: "absolute", width: "100%", height: "100%", borderRadius: "50%", background: color, opacity: 0.4, animation: "pulse 2s ease-in-out infinite" }} />
      <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: color, display: "block" }} />
    </span>
  );
}

/* ─── System indicator row ─────────────────────────────────────────────── */
function StatusRow({ children }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", color: "rgba(255,255,255,0.45)", fontFamily: "monospace", letterSpacing: "0.04em" }}>
      {children}
    </div>
  );
}

/* ─── Main Access page ─────────────────────────────────────────────────── */
export default function Access() {
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.8); opacity: 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .access-root {
          font-family: 'Inter', sans-serif;
          height: 100vh;
          width: 100%;
          overflow: hidden;
          position: relative;
          background: #080b14;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* noise texture overlay */
        .access-root::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
        }

        .cta-btn {
          position: relative;
          overflow: hidden;
          padding: 15px 36px;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #fff;
          background: linear-gradient(135deg, #4f46e5, #6366f1);
          border: none;
          border-radius: 12px;
          cursor: pointer;
          transition: box-shadow 0.3s ease, transform 0.3s ease;
          box-shadow: 0 0 0 rgba(99,102,241,0);
        }
        .cta-btn:hover {
          box-shadow: 0 0 32px rgba(99,102,241,0.55), 0 4px 24px rgba(0,0,0,0.4);
          transform: translateY(-2px);
        }
        .cta-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.12), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .cta-btn:hover::after { opacity: 1; }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          border-radius: 99px;
          border: 1px solid rgba(99,102,241,0.3);
          background: rgba(99,102,241,0.1);
          font-size: 11px;
          font-family: 'JetBrains Mono', monospace;
          color: rgba(165,180,252,0.85);
          letter-spacing: 0.05em;
        }
      `}</style>

      <div className="access-root">

        {/* ── Ambient gradient blobs ── */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
          <div style={{ position: "absolute", top: "-10%", left: "30%", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)", filter: "blur(40px)" }} />
          <div style={{ position: "absolute", bottom: "-5%", right: "20%", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)", filter: "blur(40px)" }} />
          <div style={{ position: "absolute", top: "40%", left: "-5%", width: "300px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle, rgba(56,189,248,0.07) 0%, transparent 70%)", filter: "blur(30px)" }} />
        </div>

        {/* ── Subtle grid ── */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
          backgroundImage: `linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        }} />

        {/* ── Ghost cards (decorative) ── */}
        <GhostCard
          delay={400}
          tag="PRODUCT · PHOTO"
          label="Ghost perfume bottle on marble — ultra-sharp"
          style={{ top: "12%", left: "4%", animation: "float 6s ease-in-out infinite" }}
        />
        <GhostCard
          delay={700}
          tag="LIFESTYLE · FLAT LAY"
          label="Minimal watch arrangement, cold light overhead"
          style={{ top: "24%", right: "3%", minWidth: "220px", animation: "float 7s ease-in-out infinite 1s" }}
        />
        <GhostCard
          delay={1000}
          tag="CINEMATIC · HERO"
          label="Deep focus — luxury handbag on textured concrete"
          style={{ bottom: "18%", left: "2%", animation: "float 8s ease-in-out infinite 0.5s" }}
        />
        <GhostCard
          delay={900}
          tag="STUDIO · PACK SHOT"
          label="High-key cosmetic serum on mirror surface"
          style={{ bottom: "14%", right: "4%", animation: "float 6.5s ease-in-out infinite 2s" }}
        />

        {/* ── Central panel ── */}
        <div style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          maxWidth: "520px",
          width: "90%",
          padding: "52px 48px",
          background: "rgba(255,255,255,0.025)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: "28px",
          backdropFilter: "blur(24px)",
          boxShadow: "0 32px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
          animation: ready ? "fadeUp 0.8s ease forwards" : "none",
          opacity: ready ? 1 : 0,
        }}>

          {/* Top badge */}
          <div className="badge" style={{ marginBottom: "32px" }}>
            <StatusDot color="#22c55e" />
            PROMPTLAB v2 · ACCESS UNLOCKED
          </div>

          {/* Wordmark */}
          <div style={{ fontSize: "11px", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.18em", color: "rgba(99,102,241,0.7)", marginBottom: "20px", textTransform: "uppercase" }}>
            PromptLab
          </div>

          {/* Headline */}
          <h1 style={{
            fontSize: "clamp(28px, 5vw, 40px)",
            fontWeight: 700,
            lineHeight: 1.15,
            color: "#f8fafc",
            letterSpacing: "-0.02em",
            marginBottom: "16px",
          }}>
            Your creative edge,<br />
            <span style={{ backgroundImage: "linear-gradient(135deg, #818cf8, #c4b5fd)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              engineered to perform.
            </span>
          </h1>

          {/* Subheadline */}
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, maxWidth: "380px", marginBottom: "40px" }}>
            100+ precision-crafted prompts for AI product photography. Professional output — no guesswork, no iteration tax.
          </p>

          {/* CTA */}
          <button className="cta-btn" onClick={() => navigate("/app")}>
            Launch PromptLab →
          </button>

          {/* Divider */}
          <div style={{ width: "100%", height: "1px", background: "rgba(255,255,255,0.06)", margin: "36px 0 24px" }} />

          {/* System status indicators */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", width: "100%", alignItems: "flex-start" }}>
            <StatusRow>
              <StatusDot color="#22c55e" />
              <span>System ready — 100 prompts loaded</span>
            </StatusRow>
            <StatusRow>
              <StatusDot color="#818cf8" />
              <span>AI engines linked — Midjourney · Firefly · GPT-4o</span>
            </StatusRow>
            <StatusRow>
              <StatusDot color="#38bdf8" />
              <span>Library indexed — Product · Pack Shot · Lifestyle</span>
            </StatusRow>
          </div>

          {/* Footer micro-copy */}
          <p style={{ marginTop: "32px", fontSize: "11px", color: "rgba(255,255,255,0.2)", letterSpacing: "0.04em", fontFamily: "'JetBrains Mono', monospace" }}>
            single-use access · do not share this link
          </p>
        </div>
      </div>
    </>
  );
}