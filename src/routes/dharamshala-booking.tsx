import { createFileRoute, Link } from "@tanstack/react-router";
import { ActionAnchor, Card, Note, PageHero, Section, SectionHeading } from "@/components/site/ui";
import { InquiryForm, stayInquiryFields } from "@/components/site/InquiryForm";
import { whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/dharamshala-booking")({
  head: () => ({
    meta: [
      { title: "Dharamshala in Dwarka | Budget Pilgrim Accommodation Help" },
      {
        name: "description",
        content:
          "Guidance on dharamshala and budget pilgrim accommodation in Dwarka, including what to expect, how allotment works and how to request rooms for your group.",
      },
      { property: "og:title", content: "Dharamshala Booking Assistance in Dwarka" },
      {
        property: "og:description",
        content:
          "Understand dharamshala options in Dwarka and send a room request for your travel dates.",
      },
    ],
  }),
  component: DharamshalaBooking,
});

const expectations = [
  "Simple rooms, usually with basic bedding and fans or coolers; AC rooms are limited",
  "Shared or attached bathrooms depending on the property and room type",
  "Fixed check-in and check-out timings, often stricter than hotels",
  "Meals, where available, are usually served at set times",
  "Allotment rules and identity proof requirements set by the trust or management",
  "Advance requests are common during festival periods and school holidays",
];

function DharamshalaBooking() {
  return (
    <>
      <PageHero
        eyebrow="Dharamshala & budget stays"
        title="Dharamshala Accommodation Assistance in Dwarka"
        description="Budget-friendly pilgrim accommodation, explained honestly. We help you understand the options and assist with requests where the property allows it."
      >
        <ActionAnchor
          href={whatsappLink("Hello, I need dharamshala accommodation guidance in Dwarka.")}
          variant="whatsapp"
        >
          Ask on WhatsApp
        </ActionAnchor>
      </PageHero>

      <Section tone="cream">
        <SectionHeading eyebrow="Before you plan" title="What to expect in a dharamshala" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {expectations.map((item) => (
            <Card key={item}>
              <p className="text-sm leading-relaxed text-foreground/85">{item}</p>
            </Card>
          ))}
        </div>
        <Note>
          Dharamshalas are managed by their own trusts. Final allotment always rests with the
          management, so we never promise a confirmed room in advance.
        </Note>
      </Section>

      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="How we help"
              title="Guidance, requests and a backup plan"
              description="We share suitable options for your group, help with the request where permitted, and keep a budget hotel alternative ready in case rooms are unavailable."
            />
            <p className="mt-6 text-sm text-muted-foreground">
              Prefer a hotel room with fixed confirmation?{" "}
              <Link to="/hotel-booking" className="font-medium text-primary hover:underline">
                See hotel assistance
              </Link>
              .
            </p>
          </div>
          <InquiryForm title="Dharamshala Inquiry" fields={stayInquiryFields} />
        </div>
      </Section>
    </>
  );
}
