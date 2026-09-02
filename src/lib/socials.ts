import { site } from "./site";

export type SocialLink = {
  href: string;
  label: string;
  handle: string;
  icon: "github" | "linkedin" | "twitter" | "mail";
};

export function socialLinks(): SocialLink[] {
  const links: SocialLink[] = [
    {
      href: site.github,
      label: "GitHub",
      handle: `@${site.githubHandle}`,
      icon: "github",
    },
  ];

  if (site.linkedin) {
    links.push({
      href: site.linkedin,
      label: "LinkedIn",
      handle: site.linkedinHandle,
      icon: "linkedin",
    });
  }

  if (site.twitter) {
    links.push({
      href: site.twitter,
      label: "X / Twitter",
      handle: site.twitterHandle,
      icon: "twitter",
    });
  }

  links.push({
    href: `mailto:${site.email}`,
    label: "Email",
    handle: site.email,
    icon: "mail",
  });

  return links;
}

export function isExternalHref(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://");
}
