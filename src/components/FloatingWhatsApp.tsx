"use client";
import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <a
      href="https://wa.me/5519978210246?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20diagn%C3%B3stico%20gratuito%20de%20seguran%C3%A7a."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale no WhatsApp"
      className="group fixed bottom-8 right-0 z-[9998] flex items-center gap-2.5 pl-4 pr-5 py-3"
      style={{
        background: "#1DAF54",
        boxShadow: "-4px 4px 24px rgba(29,175,84,0.35)",
        transform: visible ? "translateX(0)" : "translateX(110%)",
        opacity: visible ? 1 : 0,
        transition: "transform 0.55s cubic-bezier(0.22,1,0.36,1), opacity 0.4s ease",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <MessageCircle
        size={15}
        color="#fff"
        className="shrink-0 transition-transform duration-300 group-hover:scale-110"
      />
      <span
        className="text-white text-[11px] font-semibold uppercase tracking-[0.14em] whitespace-nowrap"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        Fale no WhatsApp
      </span>

      {/* Subtle left-edge accent on hover */}
      <span
        className="absolute left-0 top-0 bottom-0 w-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "rgba(255,255,255,0.5)" }}
      />
    </a>
  );
}
