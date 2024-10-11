import React from "react";
import css from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  children: React.ReactNode;
  textAlign?: "left" | "center" | "right" | string;
  marginBottom?: string;
}

export default function ErrorMessage({
  children,
  textAlign = "",
  marginBottom = "0",
}: ErrorMessageProps) {
  return (
    <p
      className={[
        css.text,
        css[textAlign],
        css[`marginBottom${marginBottom}`],
      ].join(" ")}
      style={{ marginBottom }}
    >
      {children}
    </p>
  );
}
