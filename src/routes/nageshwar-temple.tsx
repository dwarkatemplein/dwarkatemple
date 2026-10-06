import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage, Bullets, H2 } from "@/components/site/ArticlePage";
import img from "@/assets/hero-dwarka.jpg";

export const Route = createFileRoute("/nageshwar-temple")({
  head: () => ({
    meta: [
      { title: "Nageshwar Jyotirlinga Guide | Dwarka Travel Assistance" },
      {
        name: "description",
        content: "One of the twelve Jyotirlingas, located on the Dwarka to Bet Dwarka route.",
      },
      { property: "og:title", content: "Nageshwar Jyotirlinga Guide" },
      {
        property: "og:description",
        content: "One of the twelve Jyotirlingas, located on the Dwarka to Bet Dwarka route.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ArticlePage
      eyebrow="Destination"
      title="Nageshwar Jyotirlinga Guide"
      description="One of the twelve Jyotirlingas, located on the Dwarka to Bet Dwarka route."
      image={img}
    >
      <H2>Visit details</H2>
      <Bullets
        items={[
          "About 17 km from Dwarka.",
          "Usually combined with Bet Dwarka and Gopi Talav.",
          "Allow around one hour at the temple.",
        ]}
      />
      <H2>Tips</H2>
      <Bullets
        items={[
          "Mornings are less crowded.",
          "Carry water in summer months.",
          "Ask us for a combined Nageshwar and Bet Dwarka taxi.",
        ]}
      />
    </ArticlePage>
  );
}
