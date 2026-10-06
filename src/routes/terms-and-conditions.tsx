import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage, Bullets, H2 } from "@/components/site/ArticlePage";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms and Conditions | Dwarka Travel Assistance" },
      { name: "description", content: "Terms for using our travel assistance service." },
      { property: "og:title", content: "Terms and Conditions" },
      { property: "og:description", content: "Terms for using our travel assistance service." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ArticlePage
      eyebrow="Legal"
      title="Terms and Conditions"
      description="Terms for using our travel assistance service."
    >
      <H2>Terms</H2>
      <Bullets
        items={[
          "Inquiries are not confirmed bookings.",
          "Rates and availability are confirmed before payment.",
          "We are a private service and not affiliated with any temple or government authority.",
        ]}
      />
    </ArticlePage>
  );
}
