import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage, Bullets, H2 } from "@/components/site/ArticlePage";
import img from "@/assets/taxi.jpg";

export const Route = createFileRoute("/contact-us")({
  head: () => ({
    meta: [
      { title: "Contact Us | Dwarka Travel Assistance" },
      {
        name: "description",
        content: "Reach us on WhatsApp or phone for taxi, hotel and tour package inquiries.",
      },
      { property: "og:title", content: "Contact Us" },
      {
        property: "og:description",
        content: "Reach us on WhatsApp or phone for taxi, hotel and tour package inquiries.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ArticlePage
      eyebrow="Contact"
      title="Contact Us"
      description="Reach us on WhatsApp or phone for taxi, hotel and tour package inquiries."
      image={img}
    >
      <H2>Get in touch</H2>
      <Bullets
        items={[
          "Phone / WhatsApp: +91 89802 00950",
          "Website: dwarkatemple.in",
          "We usually reply within a few hours during the day.",
        ]}
      />
      <H2>What to share</H2>
      <Bullets
        items={[
          "Travel dates and number of travellers",
          "Pickup point and places you want to visit",
          "Stay preference and budget range",
        ]}
      />
    </ArticlePage>
  );
}
