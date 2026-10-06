import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage, Bullets, H2 } from "@/components/site/ArticlePage";

export const Route = createFileRoute("/cancellation-policy")({
  head: () => ({
    meta: [
      { title: "Cancellation Policy | Dwarka Travel Assistance" },
      { name: "description", content: "How cancellations and refunds are handled." },
      { property: "og:title", content: "Cancellation Policy" },
      { property: "og:description", content: "How cancellations and refunds are handled." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ArticlePage
      eyebrow="Legal"
      title="Cancellation Policy"
      description="How cancellations and refunds are handled."
    >
      <H2>Policy</H2>
      <Bullets
        items={[
          "Cancellation terms depend on the hotel, vehicle or package booked and are shared with each quote.",
          "Please inform us as early as possible to reduce charges.",
          "Refunds, where applicable, are processed to the original payment method.",
        ]}
      />
    </ArticlePage>
  );
}
