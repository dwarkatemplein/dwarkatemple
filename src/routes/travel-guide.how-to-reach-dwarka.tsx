import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage, Bullets, H2 } from "@/components/site/ArticlePage";
import img from "@/assets/taxi.jpg";

export const Route = createFileRoute("/travel-guide/how-to-reach-dwarka")({
  head: () => ({
    meta: [
      { title: "How to Reach Dwarka | Dwarka Travel Assistance" },
      {
        name: "description",
        content: "Train, bus, road and nearest airport options for reaching Dwarka.",
      },
      { property: "og:title", content: "How to Reach Dwarka" },
      {
        property: "og:description",
        content: "Train, bus, road and nearest airport options for reaching Dwarka.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ArticlePage
      eyebrow="Travel guide"
      title="How to Reach Dwarka"
      description="Train, bus, road and nearest airport options for reaching Dwarka."
      image={img}
    >
      <H2>Options</H2>
      <Bullets
        items={[
          "Train: Dwarka railway station has direct trains from Ahmedabad, Rajkot and Mumbai.",
          "Air: Jamnagar airport is about 130 km; Porbandar about 100 km.",
          "Road: Good highways connect Dwarka to Jamnagar, Rajkot and Somnath.",
        ]}
      />
      <H2>Arrival tips</H2>
      <Bullets
        items={[
          "Book station or airport pickups in advance during festivals.",
          "Check train schedules on official railway channels.",
        ]}
      />
    </ArticlePage>
  );
}
