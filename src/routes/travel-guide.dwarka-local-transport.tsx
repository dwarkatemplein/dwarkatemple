import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage, Bullets, H2 } from "@/components/site/ArticlePage";
import img from "@/assets/taxi.jpg";

export const Route = createFileRoute("/travel-guide/dwarka-local-transport")({
  head: () => ({
    meta: [
      { title: "Dwarka Local Transport Guide | Dwarka Travel Assistance" },
      {
        name: "description",
        content: "Getting around Dwarka, from the station to temples and beaches.",
      },
      { property: "og:title", content: "Dwarka Local Transport Guide" },
      {
        property: "og:description",
        content: "Getting around Dwarka, from the station to temples and beaches.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ArticlePage
      eyebrow="Travel guide"
      title="Dwarka Local Transport Guide"
      description="Getting around Dwarka, from the station to temples and beaches."
      image={img}
    >
      <H2>Options</H2>
      <Bullets
        items={[
          "Auto rickshaws for short city trips.",
          "Private taxis for Bet Dwarka, Nageshwar and Shivrajpur.",
          "Most temple-area lanes are best explored on foot.",
        ]}
      />
    </ArticlePage>
  );
}
