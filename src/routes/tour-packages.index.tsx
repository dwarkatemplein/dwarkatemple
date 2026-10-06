import { createFileRoute, Link } from "@tanstack/react-router";
import {
  PageHero,
  Section,
  SectionHeading,
  Card,
  ActionAnchor,
  buttonStyles,
} from "@/components/site/ui";
import { InquiryForm, packageInquiryFields } from "@/components/site/InquiryForm";
import { packages } from "@/data/content";
import { whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";
import heroImage from "@/assets/hero-dwarka.jpg";

export const Route = createFileRoute("/tour-packages/")({
  head: () => ({
    meta: [
      { title: "Dwarka Tour Packages | 1 to 9 Day Pilgrimage Itineraries" },
      {
        name: "description",
        content:
          "Dwarka tour packages covering Bet Dwarka, Nageshwar, Somnath, Porbandar, Gir and Diu. Customized pilgrimage itineraries for families, groups and senior citizens.",
      },
      { property: "og:title", content: "Dwarka Tour Packages & Gujarat Pilgrimage Itineraries" },
      {
        property: "og:description",
        content:
          "Local Dwarka packages, pilgrimage circuits and customized Gujarat tours planned for your dates.",
      },
    ],
  }),
  component: TourPackages,
});

const categories = [
  {
    title: "Dwarka Local Packages",
    items: [
      "One-day sightseeing",
      "Two-day Dwarka visit",
      "Three-day Dwarka and nearby destinations",
    ],
  },
  {
    title: "Dwarka Pilgrimage Circuits",
    items: [
      "Dwarka + Bet Dwarka + Nageshwar",
      "Dwarka + Porbandar + Somnath",
      "Dwarka + Somnath + Diu",
      "Dwarka + Somnath + Gir",
    ],
  },
  {
    title: "Gujarat Tour Packages",
    items: [
      "Dwarka + Somnath + Gir + Diu",
      "Dwarka + Ahmedabad",
      "Customized Saurashtra pilgrimage tour",
      "Customized Gujarat family tour",
    ],
  },
];

function TourPackages() {
  return (
    <>
      <PageHero
        eyebrow="Tour packages"
        title="Dwarka & Gujarat Pilgrimage Tour Packages"
        description="Choose a ready itinerary or ask us to build one around your dates, group size and travel pace. Rates are quoted only after we check availability."
        image={heroImage}
      >
        <ActionAnchor
          href={whatsappLink("Hello, I would like help choosing a Dwarka tour package.")}
          variant="whatsapp"
        >
          Ask on WhatsApp
        </ActionAnchor>
      </PageHero>

      <Section tone="cream">
        <SectionHeading eyebrow="Featured" title="Popular packages" />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {packages.map((pkg) => (
            <div key={pkg.slug} className="surface-card flex flex-col p-6">
              <p className="text-xs uppercase tracking-wider text-secondary">{pkg.duration}</p>
              <h3 className="mt-3 text-xl">{pkg.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pkg.intro}</p>
              <dl className="mt-4 space-y-2 text-sm">
                <div>
                  <dt className="font-medium text-primary">Ideal for</dt>
                  <dd className="text-muted-foreground">{pkg.travellers}</dd>
                </div>
                <div>
                  <dt className="font-medium text-primary">Destinations</dt>
                  <dd className="text-muted-foreground">{pkg.destinations}</dd>
                </div>
                <div>
                  <dt className="font-medium text-primary">Inclusions</dt>
                  <dd className="text-muted-foreground">{pkg.inclusions}</dd>
                </div>
              </dl>
              <div className="mt-auto flex flex-wrap gap-2 pt-6">
                <Link to={pkg.href} className={cn(buttonStyles.outline, "px-5 py-2.5 text-sm")}>
                  View Itinerary
                </Link>
                <a
                  href={whatsappLink(`Hello, I would like a quote for the ${pkg.title}.`)}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(buttonStyles.whatsapp, "px-5 py-2.5 text-sm")}
                >
                  Get a Quote
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading eyebrow="Categories" title="Routes we plan most often" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Card key={category.title}>
              <h3 className="text-lg text-primary">{category.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {category.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Get a quote"
            title="Tell us about your trip"
            description="Share your dates and group details. We reply with a suggested itinerary, vehicle option and stay choices, along with the applicable charges."
          />
          <InquiryForm title="Tour Package Inquiry" fields={packageInquiryFields} />
        </div>
      </Section>
    </>
  );
}
