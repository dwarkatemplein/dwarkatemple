import { createFileRoute } from "@tanstack/react-router";
import { Users, Briefcase, Snowflake } from "lucide-react";
import taxiImage from "@/assets/taxi.jpg";
import {
  ActionAnchor,
  Card,
  Note,
  PageHero,
  Section,
  SectionHeading,
  buttonStyles,
} from "@/components/site/ui";
import { InquiryForm, taxiInquiryFields } from "@/components/site/InquiryForm";
import { routesFromDwarka, vehicles } from "@/data/content";
import { whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/taxi-service")({
  head: () => ({
    meta: [
      { title: "Dwarka Taxi Service | Cab Booking for Local & Outstation Travel" },
      {
        name: "description",
        content:
          "Book a taxi in Dwarka for temple darshan, local sightseeing, Bet Dwarka, Nageshwar, Somnath and airport transfers. Sedans, Ertiga, Innova Crysta, tempo travellers and buses.",
      },
      { property: "og:title", content: "Book a Taxi in Dwarka" },
      {
        property: "og:description",
        content:
          "Private AC cars, family taxis and group transport for Dwarka sightseeing and outstation journeys.",
      },
    ],
  }),
  component: TaxiService,
});

const charges = [
  "Per-day rates and included kilometres are confirmed for your route before booking",
  "Extra kilometre and extra hour charges, where applicable",
  "Driver allowance for outstation and overnight journeys",
  "Tolls, parking and state permit charges",
  "Waiting time beyond the agreed halt",
  "Applicable taxes as per government rules",
];

function TaxiService() {
  return (
    <>
      <PageHero
        eyebrow="Taxi & cab booking"
        title="Book a Taxi in Dwarka for Comfortable Local & Outstation Travel"
        description="Plan your Dwarka sightseeing, temple visits, airport transfers, and intercity journeys with private transportation assistance."
        image={taxiImage}
      >
        <ActionAnchor
          href={whatsappLink("Hello, I would like to book a taxi in Dwarka.")}
          variant="whatsapp"
        >
          WhatsApp for a Taxi
        </ActionAnchor>
      </PageHero>

      <Section tone="cream">
        <SectionHeading
          eyebrow="Vehicle options"
          title="Choose a vehicle that suits your group"
          description="Vehicle categories are indicative. Availability and rates are confirmed for your travel dates before anything is booked."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {vehicles.map((vehicle) => (
            <Card key={vehicle.name} className="flex flex-col">
              <h3 className="text-xl text-primary">{vehicle.name}</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-secondary" /> {vehicle.seats}
                </li>
                <li className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-secondary" /> {vehicle.luggage}
                </li>
                <li className="flex items-center gap-2">
                  <Snowflake className="h-4 w-4 text-secondary" /> {vehicle.note}
                </li>
              </ul>
              <p className="mt-4 text-xs uppercase tracking-wider text-primary">
                Rate on request · availability to be confirmed
              </p>
              <a
                href={whatsappLink(
                  `Hello, I would like to inquire about a ${vehicle.name} in Dwarka.`,
                )}
                target="_blank"
                rel="noreferrer"
                className={cn(buttonStyles.outline, "mt-5 px-5 py-2.5 text-sm")}
              >
                Inquire
              </a>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading eyebrow="Popular routes" title="Frequently requested trips" />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {routesFromDwarka.map((route) => (
            <a
              key={route}
              href={whatsappLink(
                `Taxi inquiry: ${route}. Please share vehicle options and charges. My travel date is: `,
              )}
              target="_blank"
              rel="noreferrer"
              className="surface-card px-5 py-4 text-sm font-medium text-primary transition hover:shadow-lift"
            >
              {route}
            </a>
          ))}
        </div>
        <Note>
          Route cards open a prefilled WhatsApp inquiry. They do not confirm a vehicle; our team
          checks availability and replies with charges.
        </Note>
      </Section>

      <Section tone="sand">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Transparent charges"
              title="What can be part of your fare"
              description="We share the full break-up in writing with your quotation, so there are no surprises at the end of the trip."
            />
            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              {charges.map((charge) => (
                <li key={charge} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                  {charge}
                </li>
              ))}
            </ul>
          </div>
          <InquiryForm title="Taxi Booking Inquiry" fields={taxiInquiryFields} />
        </div>
      </Section>
    </>
  );
}
