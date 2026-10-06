import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage, Bullets, H2 } from "@/components/site/ArticlePage";
import img from "@/assets/hero-dwarka.jpg";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Frequently Asked Questions | Dwarka Travel Assistance" },
      { name: "description", content: "Quick answers about planning a Dwarka trip with us." },
      { property: "og:title", content: "Frequently Asked Questions" },
      {
        property: "og:description",
        content: "Quick answers about planning a Dwarka trip with us.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ArticlePage
      eyebrow="Help"
      title="Frequently Asked Questions"
      description="Quick answers about planning a Dwarka trip with us."
      image={img}
    >
      <H2>Booking</H2>
      <Bullets
        items={[
          "Is an inquiry a confirmed booking? No. We confirm availability and rates before any payment.",
          "Do you book temple darshan passes? No. We only share guidance on official channels.",
          "Can you plan for senior citizens? Yes, we plan relaxed itineraries with comfortable vehicles.",
        ]}
      />
      <H2>Travel</H2>
      <Bullets
        items={[
          "How many days do I need? One day covers the main temple; two days add Bet Dwarka and Nageshwar.",
          "Which vehicle should I choose? Sedans suit up to 4 people, Ertiga/Innova up to 6-7, Tempo Traveller for groups.",
          "Do you pick up from the railway station? Yes, station and Jamnagar/Porbandar airport pickups can be arranged.",
        ]}
      />
    </ArticlePage>
  );
}
