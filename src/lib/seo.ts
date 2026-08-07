import { apps } from "./apps";

export const SITE_URL = "https://vibeedge.app";

export function jsonLdScript(data: unknown) {
  return { type: "application/ld+json", children: JSON.stringify(data) };
}

export function breadcrumbLd(trail: { name: string; path: string }[]) {
  return jsonLdScript({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  });
}

export function appJsonLd(slug: string) {
  const app = apps.find((a) => a.slug === slug);
  if (!app) return [];
  return [
    jsonLdScript({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: app.title,
      description: app.body,
      url: `${SITE_URL}${app.to}`,
      applicationCategory: "EducationApplication",
      operatingSystem: app.appStoreUrl
        ? app.webUrl
          ? "iOS, Web Browser"
          : "iOS"
        : "Web Browser",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      publisher: {
        "@type": "Organization",
        name: "VibeEdge Learning",
        url: SITE_URL,
      },
    }),
    breadcrumbLd([
      { name: "Home", path: "/" },
      { name: "Apps", path: "/apps" },
      { name: app.title, path: app.to },
    ]),
  ];
}
