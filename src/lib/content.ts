import { getCollection, type CollectionEntry } from "astro:content";
import { featuredOf, sortByOrder } from "./order";

export type ProjectKind = CollectionEntry<"projects">["data"]["kind"];
export type Project = CollectionEntry<"projects">["data"] & { slug: string };
export type Experience = CollectionEntry<"experience">["data"];
export type Education = CollectionEntry<"education">["data"];

export function toProject(entry: CollectionEntry<"projects">): Project {
  return { slug: entry.id, ...entry.data };
}

export async function listProjects(): Promise<Project[]> {
  const entries = await getCollection("projects");
  return sortByOrder(entries.map(toProject));
}

export async function featuredProjects(limit = 3): Promise<Project[]> {
  return featuredOf(await listProjects(), limit);
}

export async function listExperience(): Promise<Experience[]> {
  const entries = await getCollection("experience");
  return sortByOrder(entries.map((entry) => entry.data));
}

export async function listEducation(): Promise<Education[]> {
  const entries = await getCollection("education");
  return sortByOrder(entries.map((entry) => entry.data));
}
