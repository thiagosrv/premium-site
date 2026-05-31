"use client";
import { useState } from "react";

type Props = {
  href?: string;
  type?: "button" | "submit" | "reset";
  target?: string;
  rel?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler;
};

export default function CTAPrimary({
  href, type = "button", target, rel,
  className = "", style, children, onClick,
}: Props) {
  const [on, setOn] = useState(false);

  /*
   * O children fica sempre renderizado (invisível no hover) para
   * manter o tamanho original do botão. O texto de hover é sobreposto
   * com position:absolute e não afeta as dimensões do elemento.
   */
  const inner = (
    <span className="relative inline-flex items-center justify-center w-full">
      {/* Conteúdo original — mantém o tamanho; escondido no hover */}
      <span
        className="inline-flex items-center gap-2 transition-opacity duration-150"
        style={{ opacity: on ? 0 : 1 }}
        aria-hidden={on}
      >
        {children}
      </span>

      {/* Overlay hover — absolutamente posicionado, não afeta layout */}
      <span
        className="absolute inset-0 inline-flex items-center justify-center gap-2 transition-opacity duration-150"
        style={{ opacity: on ? 1 : 0 }}
        aria-hidden={!on}
      >
        <span className="cta-dot" />
        <span>Estamos Online</span>
      </span>
    </span>
  );

  const shared = {
    onMouseEnter: () => setOn(true),
    onMouseLeave: () => setOn(false),
    className: `cta-primary ${className}`.trim(),
    style,
  };

  return href ? (
    <a href={href} target={target} rel={rel} {...shared}>{inner}</a>
  ) : (
    <button type={type} onClick={onClick} {...shared}>{inner}</button>
  );
}
