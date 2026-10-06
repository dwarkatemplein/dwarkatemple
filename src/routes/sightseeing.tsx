import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import beachImage from "@/assets/dest-beach.jpg";
import { ActionAnchor, Card, PageHero, Section, SectionHeading } from "@/components/site/ui";
import { InquiryForm, taxiInquiryFields } from "@/components/site/InquiryForm";
import { destinations } from "@/data/content";
import { whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/sightseeing")({
  head: () => ({
    meta: [
      { title: "Dwarka Sightseeing Places | Temples, Ghats & Beaches" },
      {
        name: "description",
        content:
          "Dwarka sightseeing guide covering Dwarkadhish Temple, Bet Dwarka, Nageshwar, Rukmini Devi Temple, Gomti Ghat, Sudama Setu, Shivrajpur Beach and Gopi Talav.",
      },
      { property: "og:title", content: "Dwarka Local Sightseeing Guide" },
      {
        property: "og:description",
        content: "Places to visit in and around Dwarka, with suggested time needed for each stop.",
      },
    ],
  }),
  component: Sightseeing,
});

function Sightseeing() {
  return (
    <>
      <PageHero
        eyebrow="Local sightseeing"
        title="Dwarka Sightseeing: Temples, Ghats, Beaches & Nearby Places"
        description="A practical list of what to see, how long each stop usually takes, and how to combine them into one comfortable day."
        image={beachImage}
      >
        <ActionAnchor
          href={whatsappLink("Hello, I would like a Dwarka local sightseeing plan.")}
          variant="whatsapp"
        >
          Plan My Sightseeing
        </ActionAnchor>
      </PageHero>

      <Section tone="cream">
        <SectionHeading eyebrow="Places to visit" title="Dwarka and nearby attractions" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => (
            <Card key={destination.name}>
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-secondary" />
                <div>
                  <h3 className="text-lg">{destination.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {destination.summary}
                  </p>
                  <p className="mt-3 text-xs uppercase tracking-wider text-primary">
                    Time needed: {destination.time}
                  </p>
                  {destination.to ? (
                    <Link
                      to={destination.to}
                      className="mt-3 inline-flex text-sm font-medium text-secondary hover:underline"
                    >
                      Read the guide
                    </Link>
                  ) : null}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Sightseeing by car"
            title="Get a private vehicle for the day"
            description="One vehicle for the full day means no waiting between stops, easier travel for elders, and flexibility if darshan queues are long."
          />
          <InquiryForm title="Sightseeing Vehicle Inquiry" fields={taxiInquiryFields} />
        </div>
      </Section>
    </>
  );
}
