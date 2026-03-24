import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

/* ─────────────────────────────────────────────────────────────────────────────
   Sub-components (Visuals preserved)
   ───────────────────────────────────────────────────────────────────────────── */

function GhostCard({ style, label, tag, delay = 0 }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, []);

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
        <div style={{ height: "100%", width: "65%", background: "linear-gradient(90deg, #6366f1, #818cf8)", borderRadius: "99px" }} />
      </div>
    </div>
  );
}

function StatusDot({ color = "#22c55e" }) {
  return (
    <span style={{ position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "center", width: "10px", height: "10px" }}>
      <span style={{ position: "absolute", width: "100%", height: "100%", borderRadius: "50%", background: color, opacity: 0.4, animation: "pulse 2s ease-in-out infinite" }} />
      <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: color, display: "block" }} />
    </span>
  );
}

function StatusRow({ children }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", color: "rgba(255,255,255,0.45)", fontFamily: "monospace", letterSpacing: "0.04em" }}>
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Main Product Access page
   ───────────────────────────────────────────────────────────────────────────── */

export default function Access() {
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);
  const [ident, setIdent] = useState("");
  const [hasAccess, setHasAccess] = useState(() => localStorage.getItem("hasAccess") === "true");

  useEffect(() => {
    // 1. Trigger entrance animation
    const t = setTimeout(() => setReady(true), 100);
    
    // 2. Redirect if already authenticated
    if (localStorage.getItem("hasAccess") === "true") {
      navigate("/app");
    }

    return () => clearTimeout(t);
  }, [navigate]);

  // Primary Access Grant Handler
  const handleUnlock = (e) => {
    e?.preventDefault();
    if (ident.trim()) {
      // Grant access based on identification being non-empty
      localStorage.setItem("hasAccess", "true");
      setHasAccess(true);
      // Brief delay for feedback/transition
      setTimeout(() => navigate("/app"), 600);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes pulse { 0%, 100% { transform: scale(1); opacity: 0.4; } 50% { transform: scale(1.8); opacity: 0; } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        .access-root { font-family: 'Inter', sans-serif; height: 100vh; width: 100%; overflow: hidden; position: relative; background: #080b14; display: flex; align-items: center; justify-content: center; }
        .access-root::before { content: ''; position: fixed; inset: 0; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E"); pointer-events: none; z-index: 0; }
        
        .access-input { width: 100%; padding: 16px 20px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; color: #fff; font-size: 15px; outline: none; transition: all 0.3s ease; font-family: 'Inter', sans-serif; margin-bottom: 20px; }
        .access-input:focus { border-color: rgba(99,102,241,0.5); background: rgba(255,255,255,0.05); box-shadow: 0 0 20px rgba(99,102,241,0.1); }
        .access-input::placeholder { color: rgba(255,255,255,0.2); }

        .cta-btn { position: relative; overflow: hidden; padding: 16px 40px; font-size: 14px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #fff; background: linear-gradient(135deg, #4f46e5, #6366f1); border: none; border-radius: 12px; cursor: pointer; transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1); width: 100%; }
        .cta-btn:hover { box-shadow: 0 0 40px rgba(99,102,241,0.6), 0 8px 30px rgba(0,0,0,0.5); transform: translateY(-3px); }
        .badge { display: inline-flex; align-items: center; gap: 8px; padding: 6px 14px; border-radius: 99px; border: 1px solid rgba(99,102,241,0.3); background: rgba(99,102,241,0.1); font-size: 11px; font-family: 'JetBrains Mono', monospace; color: rgba(165,180,252,0.9); letter-spacing: 0.06em; }
      `}</style>

      <div className="access-root">
        {/* Background Visuals */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
          <div style={{ position: "absolute", top: "-10%", left: "30%", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)", filter: "blur(40px)" }} />
          <div style={{ position: "absolute", bottom: "-5%", right: "20%", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)", filter: "blur(40px)" }} />
        </div>

        {/* Floating Components */}
        <GhostCard delay={400}  tag="ACCESS · GATE"    label="Product Vault Lockdown"                      style={{ top: "12%", left: "4%", animation: "float 6s ease-in-out infinite" }} />
        <GhostCard delay={700}  tag="PRODUCT · LAB"    label="Verification layer active"                   style={{ top: "24%", right: "3%", minWidth: "220px", animation: "float 7s ease-in-out infinite 1s" }} />
        <GhostCard delay={1000} tag="SESSION · TOKEN"  label="Authorized entry only"                       style={{ bottom: "18%", left: "2%", animation: "float 8s ease-in-out infinite 0.5s" }} />
        <GhostCard delay={900}  tag="CORE · ENGINE"    label="Midjourney · DALL-E 3 · Firefly"             style={{ bottom: "14%", right: "4%", animation: "float 6.5s ease-in-out infinite 2s" }} />

        {/* Central Card */}
        <div style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", maxWidth: "480px", width: "95%", padding: "52px 48px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "32px", backdropFilter: "blur(32px)", boxShadow: "0 40px 100px rgba(0,0,0,0.6)", animation: ready ? "fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards" : "none", opacity: ready ? 1 : 0 }}>
          
          <div className="badge" style={{ marginBottom: "32px", borderColor: hasAccess ? "rgba(34,197,94,0.4)" : "rgba(245,158,11,0.4)" }}>
            <StatusDot color={hasAccess ? "#22c55e" : "#f59e0b"} />
            PROMPTLAB ACCESS · {hasAccess ? "GRANTED" : "REQUIRED"}
          </div>

          <h1 style={{ fontSize: "clamp(30px, 5vw, 40px)", fontWeight: 800, lineHeight: 1.1, color: "#fff", letterSpacing: "-0.03em", marginBottom: "16px" }}>
            The PromptLab <br />
            <span style={{ backgroundImage: "linear-gradient(135deg, #818cf8, #c4b5fd)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Deliverable.</span>
          </h1>

          <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.45)", lineHeight: 1.6, maxWidth: "340px", marginBottom: "32px" }}>
            Enter your access email or code to continue
          </p>

          <form onSubmit={handleUnlock} style={{ width: "100%" }}>
            <input 
              type="text" 
              className="access-input" 
              placeholder="Email or Access Code"
              value={ident}
              onChange={(e) => setIdent(e.target.value)}
              required 
            />
            <button type="submit" className="cta-btn">
              Unlock Access →
            </button>
          </form>

          <div style={{ width: "100%", height: "1px", background: "rgba(255,255,255,0.08)", margin: "40px 0 24px" }} />

          <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%", alignItems: "flex-start" }}>
            <StatusRow><StatusDot color="#ce9042" /><span>License: Precision-Crafted</span></StatusRow>
            <StatusRow><StatusDot color="#818cf8" /><span>Assets: 100+ Professional Prompts</span></StatusRow>
            <StatusRow><StatusDot color="#38bdf8" /><span>Status: Identifying Required</span></StatusRow>
          </div>

          <p style={{ marginTop: "36px", fontSize: "11px", color: "rgba(255,255,255,0.25)", letterSpacing: "0.1em", fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase" }}>
            Single-Seat License · PromptLab 2024
          </p>
        </div>
      </div>
    </>
  );
}