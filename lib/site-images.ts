/** Bump version when replacing a file at the same path to bust browser/CDN cache. */
const IMAGE_VERSIONS: Record<string, string> = {
  "hero1.jpg": "20250627",
  "hero2.jpg": "20250627",
};

export function siteImage(path: string) {
  const filename = path.split("/").pop()?.split("?")[0] ?? path;
  const version = IMAGE_VERSIONS[filename];
  return version ? `${path.split("?")[0]}?v=${version}` : path;
}

export const heroImages = {
  hero1: siteImage("/images/hero1.jpg"),
  hero2: siteImage("/images/hero2.jpg"),
} as const;

export const aboutSlideshowImages = [
  siteImage("/images/about-new-1.jpeg"),
  siteImage("/images/about-new-2.jpeg"),
  siteImage("/images/about-new-3.jpeg"),
  siteImage("/images/about-new-4.jpeg"),
  siteImage("/images/about-new-5.jpeg"),
];
