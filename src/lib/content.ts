import { getCollection, type CollectionEntry } from "astro:content";
import { featuredWork, personalFirst, sortByOrder } from "./order";

export type Project = CollectionEntry<"projects">["data"] & { slug: string };
export type Experience = CollectionEntry<"experience">["data"];
export type Education = CollectionEntry<"education">["data"];

export function toProject(entry: CollectionEntry<"projects">): Project {
  return { slug: entry.id, ...entry.data };
}

async function loadProjects(): Promise<Project[]> {
  const entries = await getCollection("projects");
  return sortByOrder(entries.map(toProject));
}

export async function listProjects(): Promise<Project[]> {
  return personalFirst(await loadProjects());
}

export async function featuredProjects(): Promise<Project[]> {
  return featuredWork(await loadProjects());
}

export async function projectStaticPaths() {
  const projects = await listProjects();
  return projects.map((project) => ({
    params: { slug: project.slug },
    props: { project },
  }));
}

export async function listExperience(): Promise<Experience[]> {
  const entries = await getCollection("experience");
  return sortByOrder(entries.map((entry) => entry.data));
}

export async function listEducation(): Promise<Education[]> {
  const entries = await getCollection("education");
  return sortByOrder(entries.map((entry) => entry.data));
}
