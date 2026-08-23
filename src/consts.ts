import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  NAME: "Ryze Wu",
  DESCRIPTION:
    "I build AI agent applications and the runtimes, tools, and evaluation systems behind them.",
  URL: "https://ryzeangler.github.io",
  NUM_WORKS_ON_HOMEPAGE: 4,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: SITE.DESCRIPTION,
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION:
    "Selected work across enterprise Agent SDKs, runtimes, orchestration, applications, and production delivery.",
};

export const WORK_ENTRY_IDS = new Set([
  "agent-runtime",
  "intelligent-routing-orchestration",
  "rag-infrastructure",
  "evaluation-tracing",
]);

export const PROJECTS: Metadata = {
  TITLE: "Selected projects",
  DESCRIPTION: "The public projects and engineering notes I am building and maintaining.",
};

export const WRITING: Metadata = {
  TITLE: "Notes",
  DESCRIPTION:
    "I write about AI agents, orchestration, retrieval, evaluation, and the engineering systems around them.",
};

export const ABOUT: Metadata = {
  TITLE: "About",
  DESCRIPTION:
    "I build AI agent systems across application and platform layers.",
};

export const SOCIALS: Socials = [
  {
    NAME: "GitHub",
    HREF: "https://github.com/RyzeAngler",
  },
];
