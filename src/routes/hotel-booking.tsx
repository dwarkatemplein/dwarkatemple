import { createFileRoute, Link } from "@tanstack/react-router";
import hotelImage from "@/assets/hotel.jpg";
import { ActionAnchor, Card, Note, PageHero, Section, SectionHeading } from "@/components/site/ui";
import { InquiryForm, stayInquiryFields } from "@/components/site/InquiryForm";
import { whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/hotel-booking")({
  head: () => ({
    meta: [
      { title: "Hotels in Dwarka | Stay Booking Assistance Near the Temple" },
      {
        name: "description",
        content:
          "Find your stay in Dwarka with assistance for budget, standard, deluxe and premium hotels, family rooms, group accommodation and stays near Dwarkadhish Temple.",
      },
      { property: "og:title", content: "Find Your Stay in Dwarka" },
      {
        property: "og:description",
        content:
          "Hotel and resort assistance in Dwarka across budgets, including stays near the temple and railway station.",
      },
    ],
  }),
  component: HotelBooking,
});

const categories = [
  { title: "Budget hotels", detail: "Simple, clean rooms for short stays and pilgrim groups." },
  { title: "Standard hotels", detail: "Comfortable AC rooms with basic hotel services." },
  { title: "Deluxe hotels", detail: "Larger rooms, in-house dining and better locations." },
  {
    title: "Premium hotels & resorts",
    detail: "Higher category stays, including sea-facing options.",
  },
  {
    title: "Family hotels",
    detail: "Triple or four-bed rooms and connecting rooms where available.",
  },
  {
    title: "Near Dwarkadhish Temple",
    detail: "Walking-distance options for early morning darshan.",
  },
  {
    title: "Near the railway station",
    detail: "Convenient for late arrivals and early departures.",
  },
  { title: "Group accommodation", detail: "Multiple rooms or halls for pilgrim groups." },
];

const checklist = [
  "Property name and category",
  "Location and distance from the temple, where verified",
  "Room category and occupancy",
  "Available amenities and meal plan",
  "Check-in and check-out timings",
  "Rate, only once confirmed by the property",
];

function HotelBooking() {
  return (
    <>
      <PageHero
        eyebrow="Hotels & resorts"
        title="Find Your Stay in Dwarka"
        description="Share your dates, group size and budget. We suggest suitable stays and confirm room availability with the property before you pay anything."
        image={hotelImage}
      >
        <ActionAnchor
          href={whatsappLink("Hello, I need hotel assistance in Dwarka.")}
          variant="whatsapp"
        >
          WhatsApp for Stay Options
        </ActionAnchor>
      </PageHero>

      <Section tone="cream">
        <SectionHeading eyebrow="Categories" title="Accommodation we assist with" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Card key={category.title}>
              <h3 className="text-lg text-primary">{category.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{category.detail}</p>
            </Card>
          ))}
        </div>
        <Note>
          We do not publish hotel names, photographs or rates that have not been verified. Every
          suggestion we send you is checked for your dates first.
        </Note>
      </Section>

      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="What you receive"
              title="Details shared with every suggestion"
            />
            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              {checklist.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">
              Looking for budget pilgrimage accommodation instead?{" "}
              <Link to="/dharamshala-booking" className="font-medium text-primary hover:underline">
                See dharamshala assistance
              </Link>
              .
            </p>
          </div>
          <InquiryForm title="Hotel Inquiry" fields={stayInquiryFields} />
        </div>
      </Section>
    </>
  );
}
