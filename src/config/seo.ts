import heroCar from "@/assets/hero-car.jpg";

export const SITE_URL = "https://detailing-lab-website.vercel.app";

export const absoluteUrl = (path = "/") =>
  `${SITE_URL}${path === "/" ? "/" : path.startsWith("/") ? path : `/${path}`}`;

export const SOCIAL_IMAGE_URL = `${SITE_URL}${heroCar}`;

export function pageMeta(title: string, description: string, path: string) {
  const url = absoluteUrl(path);
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:image", content: SOCIAL_IMAGE_URL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: SOCIAL_IMAGE_URL },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
