import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, MapPin, Star } from "lucide-react";
import heroImage from "@/assets/hero-dwarka.jpg";
import taxiImage from "@/assets/taxi.jpg";
import hotelImage from "@/assets/hotel.jpg";
import {
  ActionAnchor,
  ActionLink,
  Card,
  Section,
  SectionHeading,
  buttonStyles,
} from "@/components/site/ui";
import { InquiryForm, heroInquiryFields } from "@/components/site/InquiryForm";
import { destinations, faqs, guides, packageHighlights, services } from "@/data/content";
import { site, telLink, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dwarka Travel Assistance | Taxi, Hotels & Tour Packages" },
      {
        name: "description",
        content:
          "Plan your Dwarka darshan and Gujarat journey with private taxis, hotel and dharamshala assistance, local sightseeing and customized pilgrimage tour packages.",
      },
      {
        property: "og:title",
        content: "Plan Your Dwarka Darshan & Complete Gujarat Journey",
      },
      {
        property: "og:description",
        content:
          "Private taxis, accommodation assistance, local sightseeing and customized Dwarka pilgrimage tour packages.",
      },
    ],
  }),
  component: Home,
});

const whyUs = [
  "Local, destination-focused travel assistance",
  "Customizable travel plans for your dates and pace",
  "Multiple transportation options, from sedans to buses",
  "Accommodation assistance across budgets",
  "Family, group and senior citizen coordination",
  "One contact for taxi, stay and sightseeing",
  "Clear quotation with inclusions and exclusions",
  "Assistance before and during your trip",
];

const steps = [
  {
    title: "Share Your Travel Plan",
    detail: "Tell us your dates, group size, budget and requirements.",
  },
  {
    title: "Receive a Suggested Itinerary",
    detail: "Our team prepares a suitable travel plan and service quotation.",
  },
  {
    title: "Review & Confirm",
    detail: "Review hotels, transport, inclusions, exclusions and terms before you decide.",
  },
  {
    title: "Travel With Assistance",
    detail: "Receive the confirmed supplier and travel details for your journey.",
  },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <div className="relative isolate overflow-hidden bg-primary text-primary-foreground">
        <img
          src={heroImage}
          alt="Dwarkadhish temple spire beside the Gomti creek at sunset"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:px-8 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-secondary">
              {site.tagline}
            </p>
            <h1 className="mt-4 text-3xl leading-tight sm:text-5xl">
              Plan Your Dwarka Darshan &amp; Complete Gujarat Journey
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
              Explore Dwarka with comfortable taxis, handpicked accommodation assistance, local
              sightseeing, and customized pilgrimage tour packages.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ActionLink to="/tour-packages" variant="saffron">
                Plan Your Dwarka Trip
              </ActionLink>
              <ActionAnchor
                href={whatsappLink("Hello, I would like to plan my Dwarka trip.")}
                variant="ghostLight"
              >
                Chat on WhatsApp
              </ActionAnchor>
            </div>
            <p className="mt-6 text-xs leading-relaxed text-primary-foreground/70">
              {site.disclaimer}
            </p>
          </div>

          <div className="text-foreground">
            <InquiryForm title="Quick Travel Inquiry" fields={heroInquiryFields} compact />
          </div>
        </div>
      </div>

      {/* Services */}
      <Section tone="cream">
        <SectionHeading
          eyebrow="What we help with"
          title="Everything your Dwarka trip needs"
          description="Choose a service and send us your requirement. We plan, quote and assist before anything is confirmed."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.to}
              to={service.to}
              className="surface-card group p-6 transition hover:shadow-lift"
            >
              <h3 className="text-xl text-primary">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-secondary">
                Know more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Packages */}
      <Section tone="white">
        <SectionHeading
          eyebrow="Popular itineraries"
          title="Dwarka tour packages"
          description="Durations and routes below are indicative. Rates are shared after we check availability for your dates."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {packageHighlights.map((pkg) => (
            <div key={pkg.title} className="surface-card flex flex-col p-6">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                <Clock className="h-3.5 w-3.5" /> {pkg.duration}
              </span>
              <h3 className="mt-4 text-lg">{pkg.title}</h3>
              <div className="mt-auto flex flex-wrap gap-2 pt-6">
                <Link to={pkg.href} className={cn(buttonStyles.outline, "px-4 py-2 text-xs")}>
                  View Itinerary
                </Link>
                <a
                  href={whatsappLink(`Hello, I would like a quote for: ${pkg.title}`)}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(buttonStyles.whatsapp, "px-4 py-2 text-xs")}
                >
                  Get a Quote
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <ActionLink to="/tour-packages">See all packages</ActionLink>
        </div>
      </Section>

      {/* Destinations */}
      <Section tone="sand">
        <SectionHeading
          eyebrow="Places to visit"
          title="Popular destinations in and around Dwarka"
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.slice(0, 6).map((destination) => (
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
        <div className="mt-8">
          <ActionLink to="/sightseeing" variant="outline">
            All sightseeing places
          </ActionLink>
        </div>
      </Section>

      {/* Taxi + hotel split */}
      <Section tone="white">
        <div className="grid gap-6 lg:grid-cols-2">
          {[
            {
              image: taxiImage,
              title: "Private taxis for darshan and outstation travel",
              text: "Sedans, Ertiga, Innova Crysta, tempo travellers and buses arranged for local sightseeing, Bet Dwarka, Somnath and airport transfers.",
              to: "/taxi-service",
              cta: "Book a Taxi",
            },
            {
              image: hotelImage,
              title: "Stay assistance from dharamshala to premium hotels",
              text: "Share your dates and budget and we suggest suitable stays near the temple, the railway station, or with group room requirements.",
              to: "/hotel-booking",
              cta: "Find a Stay",
            },
          ].map((block) => (
            <div key={block.to} className="surface-card overflow-hidden">
              <img
                src={block.image}
                alt=""
                loading="lazy"
                width={1200}
                height={912}
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl">{block.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{block.text}</p>
                <ActionLink to={block.to} className="mt-5">
                  {block.cta}
                </ActionLink>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Why choose us */}
      <Section tone="maroon">
        <SectionHeading
          eyebrow="Why travellers contact us"
          title="Honest, local travel assistance"
          inverted
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((point) => (
            <li
              key={point}
              className="rounded-xl border border-primary-foreground/20 bg-primary-foreground/5 p-5 text-sm leading-relaxed"
            >
              {point}
            </li>
          ))}
        </ul>
      </Section>

      {/* How it works */}
      <Section tone="cream">
        <SectionHeading eyebrow="How it works" title="Four simple steps" />
        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="surface-card p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary font-[family-name:var(--font-display)] text-lg text-secondary-foreground">
                {index + 1}
              </span>
              <h3 className="mt-4 text-lg">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.detail}</p>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-sm text-muted-foreground">
          An inquiry is not a confirmed booking. Availability and rates are always subject to
          supplier confirmation.
        </p>
      </Section>

      {/* Travel guide */}
      <Section tone="white">
        <SectionHeading eyebrow="Travel guide" title="Helpful reading before you travel" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <Link key={guide.href} to={guide.href} className="surface-card group p-6">
              <p className="text-xs uppercase tracking-wider text-secondary">{guide.read}</p>
              <h3 className="mt-3 text-lg">{guide.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{guide.summary}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary">
                Read guide <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section tone="sand">
        <SectionHeading eyebrow="Reviews" title="What travellers say" align="center" />
        <div className="mx-auto mt-10 max-w-2xl">
          <Card className="text-center">
            <Star className="mx-auto h-6 w-6 text-secondary" />
            <p className="mt-4 text-base text-muted-foreground">
              Customer experiences will appear here. We publish only genuine, verified reviews from
              travellers we have assisted.
            </p>
          </Card>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="cream">
        <SectionHeading eyebrow="FAQ" title="Common questions" />
        <div className="mt-10 grid gap-3">
          {faqs.slice(0, 6).map((faq) => (
            <details key={faq.q} className="surface-card px-6 py-4">
              <summary className="cursor-pointer text-base font-medium text-primary">
                {faq.q}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-8">
          <ActionLink to="/faq" variant="outline">
            All questions
          </ActionLink>
        </div>
      </Section>

      {/* Final CTA */}
      <Section tone="maroon">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl">Planning Your Dwarka Darshan?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-primary-foreground/85">
            Tell us your travel dates and requirements. Get assistance with your itinerary, taxi,
            hotel, and local sightseeing.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ActionLink to="/contact-us" variant="saffron">
              Get a Free Travel Quote
            </ActionLink>
            <ActionAnchor
              href={whatsappLink("Hello, I would like a free travel quote for Dwarka.")}
              variant="whatsapp"
            >
              WhatsApp Us
            </ActionAnchor>
            <ActionAnchor href={telLink()} variant="ghostLight">
              Call {site.phoneDisplay}
            </ActionAnchor>
          </div>
        </div>
      </Section>
    </>
  );
}
