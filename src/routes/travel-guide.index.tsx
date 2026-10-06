import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/ui";
import { guides } from "@/data/content";
import img from "@/assets/dest-beach.jpg";

export const Route = createFileRoute("/travel-guide/")({
  head: () => ({
    meta: [
      { title: "Dwarka Travel Guide | Plan Your Pilgrimage" },
      {
        name: "description",
        content: "Guides on reaching Dwarka, best time to visit, itineraries and local transport.",
      },
      { property: "og:title", content: "Dwarka Travel Guide" },
      { property: "og:description", content: "Practical guides for planning a Dwarka trip." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Travel guide"
        title="Dwarka Travel Guide"
        description="Practical guides to help you plan your Dwarka pilgrimage."
        image={img}
      />
      <Section tone="cream">
        <div className="grid gap-5 md:grid-cols-2">
          {guides.map((g) => (
            <Link
              key={g.href}
              to={g.href}
              className="surface-card block p-6 transition hover:-translate-y-0.5"
            >
              <p className="text-xs uppercase tracking-wider text-secondary">{g.read}</p>
              <h3 className="mt-2 text-xl">{g.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{g.summary}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
