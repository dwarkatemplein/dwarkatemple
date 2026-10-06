import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage, Bullets, H2 } from "@/components/site/ArticlePage";
import img from "@/assets/dest-beach.jpg";

export const Route = createFileRoute("/travel-guide/best-time-to-visit")({
  head: () => ({
    meta: [
      { title: "Best Time to Visit Dwarka | Dwarka Travel Assistance" },
      { name: "description", content: "Season by season weather, festival periods and crowds." },
      { property: "og:title", content: "Best Time to Visit Dwarka" },
      {
        property: "og:description",
        content: "Season by season weather, festival periods and crowds.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ArticlePage
      eyebrow="Travel guide"
      title="Best Time to Visit Dwarka"
      description="Season by season weather, festival periods and crowds."
      image={img}
    >
      <H2>Seasons</H2>
      <Bullets
        items={[
          "October to March: pleasant weather, most popular period.",
          "April to June: hot days; plan early morning visits.",
          "July to September: monsoon, fewer crowds.",
        ]}
      />
      <H2>Festivals</H2>
      <Bullets
        items={[
          "Janmashtami brings very large crowds; book early.",
          "Holi and Diwali are busy periods too.",
        ]}
      />
    </ArticlePage>
  );
}
