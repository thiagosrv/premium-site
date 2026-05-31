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

  const inner = on ? (
    <span className="inline-flex items-center gap-2">
      <span className="cta-dot" />
      <span>Estamos Online</span>
    </span>
  ) : <>{children}</>;

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
