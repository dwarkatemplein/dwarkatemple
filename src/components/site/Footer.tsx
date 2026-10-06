import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle } from "lucide-react";
import { site, telLink, whatsappLink } from "@/lib/site";

const serviceLinks = [
  { label: "Tour Packages", to: "/tour-packages" },
  { label: "Taxi Service", to: "/taxi-service" },
  { label: "Hotel Booking", to: "/hotel-booking" },
  { label: "Dharamshala Booking", to: "/dharamshala-booking" },
  { label: "Local Sightseeing", to: "/sightseeing" },
];

const destinationLinks = [
  { label: "Dwarkadhish Temple Darshan", to: "/temple-darshan" },
  { label: "Bet Dwarka", to: "/bet-dwarka" },
  { label: "Nageshwar Temple", to: "/nageshwar-temple" },
  { label: "Sightseeing Places", to: "/sightseeing" },
];

const guideLinks = [
  { label: "How to Reach Dwarka", to: "/travel-guide/how-to-reach-dwarka" },
  { label: "Best Time to Visit", to: "/travel-guide/best-time-to-visit" },
  { label: "Dwarka Itinerary", to: "/travel-guide/dwarka-itinerary" },
  { label: "Dwarka to Somnath", to: "/travel-guide/dwarka-to-somnath" },
  { label: "Local Transport", to: "/travel-guide/dwarka-local-transport" },
];

const policyLinks = [
  { label: "FAQ", to: "/faq" },
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms & Conditions", to: "/terms-and-conditions" },
  { label: "Cancellation Policy", to: "/cancellation-policy" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="font-[family-name:var(--font-display)] text-2xl">{site.name}</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-primary-foreground/80">
              Travel assistance for Dwarka and Gujarat pilgrimage journeys: tour planning, private
              taxis, hotel and dharamshala assistance, and local sightseeing.
            </p>
            <div className="mt-5 space-y-2 text-sm">
              <a href={telLink()} className="flex items-center gap-2 hover:text-secondary">
                <Phone className="h-4 w-4" /> {site.phoneDisplay}
              </a>
              <a
                href={whatsappLink("Hello, I have a travel question about Dwarka.")}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-secondary"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp {site.phoneDisplay}
              </a>
              <p className="text-primary-foreground/70">{site.domain}</p>
            </div>
          </div>

          <FooterColumn title="Services" links={serviceLinks} />
          <FooterColumn title="Destinations" links={destinationLinks} />
          <FooterColumn title="Travel Guide" links={guideLinks} />
        </div>

        <div className="mt-12 flex flex-wrap gap-x-6 gap-y-2 border-t border-primary-foreground/20 pt-6 text-sm">
          {policyLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-primary-foreground/80 hover:text-secondary"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <p className="mt-6 text-xs leading-relaxed text-primary-foreground/70">{site.disclaimer}</p>
        <p className="mt-2 text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; to: string }[] }) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-secondary">{title}</p>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map((link) => (
          <li key={link.to}>
            <Link to={link.to} className="text-primary-foreground/80 hover:text-secondary">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
