import type { CSSProperties } from "react"; import type { LucideIcon } from "lucide-react"; import { ArrowUpRight } from "lucide-react"; import Link from "next/link";

export type Capability = { id: string; number: string; title: string; summary: string; outcomes: string[]; icon: LucideIcon; tag: string; };

type CapabilityCardProps = { item: Capability; compact?: boolean; };

const styles: Record<string, CSSProperties> = { card: { position: "relative", display: "flex", flexDirection: "column", boxSizing: "border-box", minWidth: 0, height: "100%", padding: "26px", overflow: "hidden", color: "#0f172a", backgroundColor: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "18px", boxShadow: "0 2px 8px rgba(15, 23, 42, 0.025)", }, accent: { position: "absolute", top: 0, left: "24px", width: "42px", height: "3px", backgroundColor: "#6366f1", borderRadius: "0 0 4px 4px", }, topLine: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", marginBottom: "26px", }, number: { color: "#64748b", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", fontVariantNumeric: "tabular-nums", }, icon: { display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, width: "46px", height: "46px", color: "#6366f1", backgroundColor: "#eef2ff", border: "1px solid #e0e7ff", borderRadius: "13px", }, content: { flex: 1, minWidth: 0, }, tag: { margin: "0 0 10px", color: "#6366f1", fontSize: "11px", fontWeight: 750, lineHeight: 1.5, letterSpacing: "0.1em", textTransform: "uppercase", }, title: { margin: 0, color: "#0f172a", fontSize: "23px", fontWeight: 700, lineHeight: 1.3, letterSpacing: "-0.035em", overflowWrap: "anywhere", }, summary: { margin: "12px 0 0", color: "#64748b", fontSize: "14px", lineHeight: 1.8, overflowWrap: "anywhere", }, outcomes: { display: "grid", gap: "11px", margin: "22px 0 26px", padding: 0, listStyle: "none", }, outcome: { display: "flex", alignItems: "flex-start", gap: "10px", color: "#334155", fontSize: "13px", lineHeight: 1.7, }, outcomeMarker: { flexShrink: 0, width: "6px", height: "6px", marginTop: "8px", backgroundColor: "#6366f1", borderRadius: "50%", }, link: { display: "inline-flex", alignItems: "center", alignSelf: "flex-start", gap: "10px", marginTop: "24px", padding: "4px 0", color: "#0f172a", fontSize: "13px", fontWeight: 700, lineHeight: 1.5, textDecoration: "none", }, linkIcon: { display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, width: "32px", height: "32px", color: "#6366f1", backgroundColor: "#f1f5f9", borderRadius: "50%", }, };

export function CapabilityCard({ item, compact = false, }: CapabilityCardProps) {
  const Icon = item.icon;

  return (
    <article style={{ ...styles.card, padding: compact ? "20px" : styles.card.padding }}>

      <div style={styles.accent} aria-hidden="true" />

      <div style={{ ...styles.topLine, marginBottom: compact ? "20px" : styles.topLine.marginBottom }}>
        <span style={styles.number}>{item.number}</span>

        <span style={styles.icon} aria-hidden="true">
          <Icon size={21} strokeWidth={1.7} />
        </span>
      </div>

      <div style={styles.content}>
        <p style={styles.tag}>{item.tag}</p>

        <h3 style={{ ...styles.title, fontSize: compact ? "20px" : styles.title.fontSize }}>
          {item.title}
        </h3>

        <p style={styles.summary}>{item.summary}</p>

        {!compact && item.outcomes.length > 0 && (
          <ul style={styles.outcomes}>
            {item.outcomes.slice(0, 3).map((outcome) => (
              <li key={outcome} style={styles.outcome}>
                <span style={styles.outcomeMarker} aria-hidden="true" />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <Link
        href={`/services#${encodeURIComponent(item.id)}`}
        aria-label={`Explore ${item.title} capability`}
        style={styles.link}
      >
        <span>Explore capability</span>

        <span style={styles.linkIcon} aria-hidden="true">
          <ArrowUpRight size={17} strokeWidth={1.8} />
        </span>
      </Link>
    </article>
  );
}