/**
 * Central portfolio content.
 * Edit this file to customize copy, projects, and contact details.
 */

export const site = {
  name: "Miguel Fernández Villegas",
  brand: "Miguel Fernández",
  role: "Web developer",
  location: "Spain",
  greeting:
    "Hello — I hope you are having a great day. If you want to get in touch, email is the best way.",
  headline: "Nice to meet you, I am Miguel Fernández",
  tagline:
    "I build fast, clear websites with intent. This portfolio is made with Astro, inspired by Fernando Herrera's visual language.",
  about:
    "I am a developer focused on professional web products: strong performance, solid SEO, and a careful interface. This repo is the base for each section of the original Trello board.",
  email: "hello@example.com",
  social: {
    github: "https://github.com/miguelfervi",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://x.com/",
  },
};

export const highlights = [
  {
    title: "Content-oriented sites",
    text: "Static pages that stay fast and easy to maintain, with TypeScript and reusable components.",
  },
  {
    title: "Design with intent",
    text: "Clear hierarchy, serif plus sans typography, and a violet/blue palette close to fernando-herrera.com.",
  },
  {
    title: "Ready to grow",
    text: "Projects, skills, and copy live in one data file so the layout can stay stable while content changes.",
  },
];

export const stats = [
  { value: "01", label: "Portfolio in progress" },
  { value: "04", label: "Sample projects" },
  { value: "Astro", label: "Primary stack" },
  { value: "SEO", label: "Site focus" },
];

export const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Astro",
  "Tailwind CSS",
  "Git",
  "Accessibility",
];

export type Project = {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  tags: string[];
  featured?: boolean;
  tone: "violet" | "blue" | "ink" | "gold" | "pink" | "mint";
  year: string;
};

export const projects: Project[] = [
  {
    slug: "personal-portfolio",
    title: "Personal portfolio",
    excerpt:
      "Astro site with an instructor-style layout: greeting, project cards, about, and contact.",
    description:
      "First delivery from the board. Astro + Tailwind foundation, centralized data, and project pages ready for real content.",
    tags: ["Astro", "Tailwind", "TypeScript"],
    featured: true,
    tone: "violet",
    year: "2026",
  },
  {
    slug: "course-landing",
    title: "Course landing",
    excerpt:
      "Wide hero, card grid, and metrics. The same visual language as a training catalog.",
    description:
      "A piece for practicing hierarchy, CTAs, and social proof without copying the original site HTML.",
    tags: ["Astro", "UI"],
    tone: "blue",
    year: "2026",
  },
  {
    slug: "markdown-blog",
    title: "Markdown blog",
    excerpt: "File-based content, listings, and SEO. The natural next step on an Astro site.",
    description:
      "Structure ready for content collections when the board asks for a blog or articles.",
    tags: ["Markdown", "SEO"],
    tone: "ink",
    year: "2026",
  },
  {
    slug: "contact-ctas",
    title: "Contact and CTAs",
    excerpt:
      "Contact block with email, location, and links, in the spirit of Fernando Herrera's footer.",
    description:
      "Entry point for visitors. Later this can connect to an endpoint or an email service.",
    tags: ["UX", "Astro"],
    tone: "gold",
    year: "2026",
  },
];

export const featuredProject = projects.find((project) => project.featured) ?? projects[0];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
