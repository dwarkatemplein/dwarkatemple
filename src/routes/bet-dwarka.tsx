import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage, Bullets, H2 } from "@/components/site/ArticlePage";
import img from "@/assets/dest-beach.jpg";

export const Route = createFileRoute("/bet-dwarka")({
  head: () => ({
    meta: [
      { title: "Bet Dwarka Travel Guide | Dwarka Travel Assistance" },
      {
        name: "description",
        content:
          "How to reach Bet Dwarka island, via road and Sudarshan Setu, and what to see there.",
      },
      { property: "og:title", content: "Bet Dwarka Travel Guide" },
      {
        property: "og:description",
        content:
          "How to reach Bet Dwarka island, via road and Sudarshan Setu, and what to see there.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ArticlePage
      eyebrow="Destination"
      title="Bet Dwarka Travel Guide"
      description="How to reach Bet Dwarka island, via road and Sudarshan Setu, and what to see there."
      image={img}
    >
      <H2>Getting there</H2>
      <Bullets
        items={[
          "Bet Dwarka is about 30 km from Dwarka by road.",
          "Sudarshan Setu bridge connects Okha to the island.",
          "Allow half a day including temple visit.",
        ]}
      />
      <H2>What to see</H2>
      <Bullets
        items={[
          "Bet Dwarka Dwarkadhish Temple",
          "Hanuman Dandi temple",
          "Nageshwar Jyotirlinga can be combined on the same route",
        ]}
      />
    </ArticlePage>
  );
}
