import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Nandagopan K",
  EMAIL: "nandagopan.k01@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 2,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 0,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Nandu's portfolio/blog.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Might be boring / A good read",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "github",
    HREF: "https://github.com/zorx01"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/nandagopan-kalathil/",
  }
];
