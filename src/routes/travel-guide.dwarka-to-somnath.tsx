import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage, Bullets, H2 } from "@/components/site/ArticlePage";
import img from "@/assets/taxi.jpg";

export const Route = createFileRoute("/travel-guide/dwarka-to-somnath")({
  head: () => ({
    meta: [
      { title: "Dwarka to Somnath Travel Guide | Dwarka Travel Assistance" },
      { name: "description", content: "Route options and usual stops between Dwarka and Somnath." },
      { property: "og:title", content: "Dwarka to Somnath Travel Guide" },
      {
        property: "og:description",
        content: "Route options and usual stops between Dwarka and Somnath.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ArticlePage
      eyebrow="Travel guide"
      title="Dwarka to Somnath Travel Guide"
      description="Route options and usual stops between Dwarka and Somnath."
      image={img}
    >
      <H2>Route</H2>
      <Bullets
        items={[
          "About 230 km along the coastal highway.",
          "Driving time is roughly 5 to 6 hours.",
          "Common stops: Harsiddhi Mata Temple and Porbandar (Kirti Mandir).",
        ]}
      />
    </ArticlePage>
  );
}
