import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage, Bullets, H2 } from "@/components/site/ArticlePage";
import img from "@/assets/hero-dwarka.jpg";

export const Route = createFileRoute("/travel-guide/dwarka-itinerary")({
  head: () => ({
    meta: [
      { title: "Dwarka Itinerary: How Many Days Do You Need? | Dwarka Travel Assistance" },
      { name: "description", content: "Sample 1, 2 and 3 day plans." },
      { property: "og:title", content: "Dwarka Itinerary: How Many Days Do You Need?" },
      { property: "og:description", content: "Sample 1, 2 and 3 day plans." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ArticlePage
      eyebrow="Travel guide"
      title="Dwarka Itinerary: How Many Days Do You Need?"
      description="Sample 1, 2 and 3 day plans."
      image={img}
    >
      <H2>Sample plans</H2>
      <Bullets
        items={[
          "1 day: Dwarkadhish Temple, Gomti Ghat, Rukmini Temple, Sudama Setu.",
          "2 days: add Nageshwar, Gopi Talav, Bet Dwarka and Shivrajpur Beach.",
          "3 days: add Porbandar or continue to Somnath.",
        ]}
      />
    </ArticlePage>
  );
}
