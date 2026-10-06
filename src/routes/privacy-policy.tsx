import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage, Bullets, H2 } from "@/components/site/ArticlePage";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Dwarka Travel Assistance" },
      { name: "description", content: "How we handle details you share with us." },
      { property: "og:title", content: "Privacy Policy" },
      { property: "og:description", content: "How we handle details you share with us." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ArticlePage
      eyebrow="Legal"
      title="Privacy Policy"
      description="How we handle details you share with us."
    >
      <H2>Information</H2>
      <Bullets
        items={[
          "We only receive details you send via WhatsApp, phone or forms.",
          "Details are used solely to answer your travel inquiry.",
          "We do not sell your information to third parties.",
        ]}
      />
    </ArticlePage>
  );
}
