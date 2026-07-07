import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  NAME: "AI Agent Engineering",
  DESCRIPTION:
    "AI agent engineering across agent applications, runtimes, orchestration, retrieval, evaluation, tracing, and delivery.",
  URL: "https://ryzeangler.github.io",
  NUM_WORKS_ON_HOMEPAGE: 4,
  NUM_PROJECTS_ON_HOMEPAGE: 2,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: SITE.DESCRIPTION,
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION:
    "AI agent application development, platform engineering, orchestration, protocols, retrieval, evaluation, and delivery.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "Selected public and in-progress projects.",
};

export const WRITING: Metadata = {
  TITLE: "Writing",
  DESCRIPTION:
    "Technical writing topics around AI agents, orchestration, retrieval, evaluation, and engineering systems.",
};

export const ABOUT: Metadata = {
  TITLE: "About",
  DESCRIPTION:
    "AI agent engineering across application and platform layers.",
};

export const SOCIALS: Socials = [
  {
    NAME: "GitHub",
    HREF: "https://github.com/RyzeAngler",
  },
];
