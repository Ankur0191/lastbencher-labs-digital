import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  align = "left",
  children,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  description?: string;
  align?: "left" | "center";
  children?: ReactNode;
}) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <span className="eyebrow"><span className="eyebrow__dot" />{eyebrow}</span>
      <h2>{title}{accent && <> <em>{accent}</em></>}</h2>
      {description && <p>{description}</p>}
      {children}
    </div>
  );
}
