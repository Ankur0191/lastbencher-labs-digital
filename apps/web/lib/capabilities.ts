import { BriefcaseBusiness, Code2, BarChart3, FileCheck2, UsersRound } from "lucide-react";
import type { Capability } from "../components/CapabilityCard";

export const capabilities: Capability[] = [
  {
    id: "talent",
    number: "01",
    title: "Recruitment & talent",
    tag: "PEOPLE THAT MOVE YOU FORWARD",
    summary: "Find the specialist talent your next phase depends on — from hard-to-fill roles to focused hiring programmes.",
    outcomes: ["Role definition and talent mapping", "Targeted search and candidate assessment", "Contract, permanent and project-based hiring"],
    icon: UsersRound,
  },
  {
    id: "software",
    number: "02",
    title: "Software & product engineering",
    tag: "FROM IDEA TO OPERATING SOFTWARE",
    summary: "Build digital products, modernise systems and deliver the integrations that turn plans into practical tools.",
    outcomes: ["Web platforms, portals and internal tools", "API integrations and workflow automation", "Product discovery, delivery and optimisation"],
    icon: Code2,
  },
  {
    id: "delivery",
    number: "03",
    title: "Project & programme management",
    tag: "MOMENTUM WITH ACCOUNTABILITY",
    summary: "Bring structure to complex work with practical governance, sharper coordination and clear ownership.",
    outcomes: ["Delivery planning and PMO support", "Risk, dependency and stakeholder management", "Recovery plans for work off track"],
    icon: BarChart3,
  },
  {
    id: "contracts",
    number: "04",
    title: "Contracts & commercial operations",
    tag: "CLEARER TERMS. BETTER CONTROL.",
    summary: "Make contract processes easier to run, monitor and improve, with operational support around the details.",
    outcomes: ["Contract lifecycle and obligation tracking", "Vendor coordination and documentation workflows", "Commercial reporting and process improvement"],
    icon: FileCheck2,
  },
  {
    id: "research",
    number: "05",
    title: "Market & competitive research",
    tag: "EVIDENCE FOR THE NEXT DECISION",
    summary: "Understand customers, competitors and changing markets with research shaped around a real business question.",
    outcomes: ["Market sizing and opportunity scans", "Competitor and category intelligence", "Customer, sector and go-to-market research"],
    icon: BriefcaseBusiness,
  },
];
