"use client";
import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const [tooltip, setTooltip] = useState(true);

  // Show button after 1.5s
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1500);
    // Auto-hide tooltip after 6s
    const t2 = setTimeout(() => setTooltip(false), 6000);
    return () => { clearTimeout(t); clearTimeout(t2); };
  }, []);

  return (
    <div
      className="fixed bottom-6 right-6 z-[9998] flex flex-col items-end gap-3"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.4s ease, transform 0.4s ease",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      {/* Tooltip */}
      {tooltip && (
        <div
          className="flex items-center gap-2 px-4 py-2.5 rounded-none relative"
          style={{
            background: "rgba(0,11,56,0.95)",
            border: "1px solid rgba(37,211,102,0.3)",
            backdropFilter: "blur(12px)",
            animation: "fadeInRight 0.4s ease forwards",
          }}
        >
          <p
            className="text-white/80 text-xs whitespace-nowrap pr-4"
            style={{ fontFamily: "var(--font-inter)", letterSpacing: "0.04em" }}
          >
            Fale conosco agora
          </p>
          <button
            onClick={() => setTooltip(false)}
            className="absolute top-1 right-1.5 text-white/30 hover:text-white/70 transition-colors"
            aria-label="Fechar"
          >
            <X size={11} />
          </button>
          {/* Arrow */}
          <div
            className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rotate-45"
            style={{
              background: "rgba(0,11,56,0.95)",
              border: "1px solid rgba(37,211,102,0.3)",
              borderLeft: "none",
              borderBottom: "none",
            }}
          />
        </div>
      )}

      {/* Main button */}
      <a
        href="https://wa.me/5519978210246?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20diagn%C3%B3stico%20gratuito%20de%20seguran%C3%A7a."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chamar no WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14"
        style={{
          background: "linear-gradient(135deg, #25D366 0%, #1DAF54 100%)",
          boxShadow: "0 4px 24px rgba(37,211,102,0.45)",
        }}
      >
        {/* Pulse rings */}
        <span
          className="absolute inset-0 rounded-none"
          style={{
            background: "rgba(37,211,102,0.35)",
            animation: "waPulse 2.2s ease-out infinite",
          }}
        />
        <span
          className="absolute inset-0 rounded-none"
          style={{
            background: "rgba(37,211,102,0.2)",
            animation: "waPulse 2.2s ease-out infinite 0.7s",
          }}
        />
        <MessageCircle size={26} color="#fff" className="relative z-10 drop-shadow-sm" />
      </a>

      <style>{`
        @keyframes waPulse {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(2); opacity: 0; }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(12px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
