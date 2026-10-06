import { Link } from "@tanstack/react-router";
import { ActionAnchor, Card, Note, PageHero, Section, SectionHeading } from "./ui";
import { InquiryForm, packageInquiryFields } from "./InquiryForm";
import { packages, type Package } from "@/data/content";
import { whatsappLink } from "@/lib/site";
import heroImage from "@/assets/hero-dwarka.jpg";

export function PackageDetail({ pkg }: { pkg: Package }) {
  const related = packages.filter((p) => p.slug !== pkg.slug);

  return (
    <>
      <PageHero eyebrow={pkg.duration} title={pkg.title} description={pkg.intro} image={heroImage}>
        <ActionAnchor
          href={whatsappLink(`Hello, I would like a quote for the ${pkg.title}.`)}
          variant="whatsapp"
        >
          Get a Quote on WhatsApp
        </ActionAnchor>
      </PageHero>

      <Section tone="cream">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading eyebrow="Itinerary" title="Day-wise plan" />
            <ol className="mt-8 space-y-4">
              {pkg.itinerary.map((item) => (
                <li key={item.day} className="surface-card p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-secondary">{item.day}</p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/85">{item.detail}</p>
                </li>
              ))}
            </ol>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <Card>
                <h3 className="text-lg">Ideal for</h3>
                <p className="mt-2 text-sm text-muted-foreground">{pkg.travellers}</p>
              </Card>
              <Card>
                <h3 className="text-lg">Destinations covered</h3>
                <p className="mt-2 text-sm text-muted-foreground">{pkg.destinations}</p>
              </Card>
              <Card>
                <h3 className="text-lg">Inclusions</h3>
                <p className="mt-2 text-sm text-muted-foreground">{pkg.inclusions}</p>
              </Card>
              <Card>
                <h3 className="text-lg">Exclusions</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Train and air tickets, temple offerings, entry fees, ferry tickets, meals not
                  mentioned, and anything not listed in your written quotation.
                </p>
              </Card>
            </div>

            <div className="mt-8 space-y-4">
              <Card>
                <h3 className="text-lg">Transportation</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Private vehicle with driver, chosen to suit your group size. Tolls, parking, state
                  permits and driver allowance are confirmed in your quotation.
                </p>
              </Card>
              <Card>
                <h3 className="text-lg">Accommodation &amp; meals</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Budget, standard, deluxe, premium hotels or dharamshala options based on your
                  preference. Meal plans are confirmed with the property before booking.
                </p>
              </Card>
              <Card>
                <h3 className="text-lg">Customization</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Add or remove destinations, extend nights, adjust the pace for senior citizens, or
                  change the start city. Distances and durations are shared once the final route is
                  fixed.
                </p>
              </Card>
            </div>

            <Note>
              Prices, hotel names and vehicle availability are confirmed only after we check your
              dates. This page does not display unverified rates.
            </Note>
          </div>

          <div className="lg:sticky lg:top-24 lg:self-start">
            <InquiryForm title={`Inquiry: ${pkg.title}`} fields={packageInquiryFields} />
          </div>
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading eyebrow="Related" title="Other packages you may like" />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((item) => (
            <Link key={item.slug} to={item.href} className="surface-card p-6">
              <p className="text-xs uppercase tracking-wider text-secondary">{item.duration}</p>
              <h3 className="mt-3 text-lg">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.destinations}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
