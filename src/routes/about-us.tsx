import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage, Bullets, H2 } from "@/components/site/ArticlePage";
import img from "@/assets/hero-dwarka.jpg";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About Dwarka Temple Travel Assistance | Dwarka Travel Assistance" },
      {
        name: "description",
        content:
          "A small local team helping pilgrims plan taxis, stays and darshan routes around Dwarka.",
      },
      { property: "og:title", content: "About Dwarka Temple Travel Assistance" },
      {
        property: "og:description",
        content:
          "A small local team helping pilgrims plan taxis, stays and darshan routes around Dwarka.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ArticlePage
      eyebrow="About us"
      title="About Dwarka Temple Travel Assistance"
      description="A small local team helping pilgrims plan taxis, stays and darshan routes around Dwarka."
      image={img}
    >
      <H2>Who we are</H2>
      <Bullets
        items={[
          "We are a private travel assistance service based around Dwarka, Gujarat.",
          "We help families, senior citizens and groups arrange taxis, hotels, dharamshalas and tour itineraries.",
          "We are not affiliated with Dwarkadhish Temple or any government authority.",
        ]}
      />
      <H2>How we work</H2>
      <Bullets
        items={[
          "Share your plan on WhatsApp or call us.",
          "We suggest an itinerary, vehicle and stay options with applicable charges.",
          "Bookings are confirmed only after availability is checked and you approve the quote.",
        ]}
      />
    </ArticlePage>
  );
}
