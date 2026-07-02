import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  NAME: "RyzeAngler",
  DESCRIPTION:
    "AI Agent Developer building agent infrastructure, developer tools, code intelligence systems, and RAG infrastructure.",
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
    "Agent runtime, SDK, tool use, memory, tracing, evaluation, RAG, and code intelligence work.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "Selected public and in-progress projects by RyzeAngler.",
};

export const WRITING: Metadata = {
  TITLE: "Writing",
  DESCRIPTION:
    "Technical writing topics around production agents, code intelligence, and evaluation.",
};

export const ABOUT: Metadata = {
  TITLE: "About",
  DESCRIPTION:
    "About RyzeAngler, an AI Agent Developer focused on agent infrastructure.",
};

export const SOCIALS: Socials = [
  {
    NAME: "GitHub",
    HREF: "https://github.com/RyzeAngler",
  },
];
