import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage, Bullets, H2 } from "@/components/site/ArticlePage";
import img from "@/assets/hero-dwarka.jpg";

export const Route = createFileRoute("/temple-darshan")({
  head: () => ({
    meta: [
      { title: "Dwarkadhish Temple Darshan Guide | Dwarka Travel Assistance" },
      {
        name: "description",
        content: "Practical tips for visiting the Jagat Mandir, aarti times and what to expect.",
      },
      { property: "og:title", content: "Dwarkadhish Temple Darshan Guide" },
      {
        property: "og:description",
        content: "Practical tips for visiting the Jagat Mandir, aarti times and what to expect.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ArticlePage
      eyebrow="Temple"
      title="Dwarkadhish Temple Darshan Guide"
      description="Practical tips for visiting the Jagat Mandir, aarti times and what to expect."
      image={img}
    >
      <H2>Before you go</H2>
      <Bullets
        items={[
          "Darshan and aarti timings can change on festival days; check official temple sources.",
          "Mobile phones and bags may need to be deposited before entry.",
          "Wear modest, traditional clothing.",
        ]}
      />
      <H2>Nearby</H2>
      <Bullets
        items={[
          "Gomti Ghat and the 56 steps (Swarg Dwar)",
          "Sudama Setu",
          "Rukmini Devi Temple, about 2 km away",
        ]}
      />
    </ArticlePage>
  );
}
