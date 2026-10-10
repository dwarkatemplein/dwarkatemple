import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  type ErrorComponentProps,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileActionBar } from "@/components/site/MobileActionBar";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-6xl text-primary">404</h1>
        <h2 className="mt-4 text-xl">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          This page doesn't exist or has been moved. Explore our tour packages instead.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
          >
            Go home
          </Link>
          <Link
            to="/tour-packages"
            className="inline-flex items-center justify-center rounded-full border border-primary/30 bg-card px-5 py-2.5 text-sm font-medium text-primary"
          >
            Tour packages
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-primary/30 bg-card px-5 py-2.5 text-sm font-medium text-primary"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Dwarka Travel Assistance | Taxi, Hotels & Tour Packages" },
      {
        name: "description",
        content:
          "Plan your Dwarka darshan with private taxi booking, hotel & dharamshala assistance, local sightseeing, Bet Dwarka & Nageshwar tour packages.",
      },
      {
        name: "keywords",
        content:
          "Dwarka travel, Dwarkadhish temple darshan, Dwarka taxi service, Dwarka hotel booking, Bet Dwarka boat timing, Nageshwar jyotirlinga, Gujarat pilgrimage packages",
      },
      { name: "author", content: "Dwarka Temple Travel Assistance" },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { name: "theme-color", content: "#741F2B" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Dwarka Temple Travel Assistance" },
      { property: "og:locale", content: "en_IN" },
      {
        property: "og:title",
        content: "Dwarka Temple Travel Assistance | Taxi, Hotels & Tour Packages",
      },
      {
        property: "og:description",
        content:
          "Private taxis, accommodation assistance, local sightseeing and customized Dwarka pilgrimage tour packages.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Dwarka Temple Travel Assistance" },
      {
        name: "twitter:description",
        content: "Private taxis, hotel booking & tour packages for Dwarka pilgrimage.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://dwarkatemple.in/" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Marcellus&family=Jost:wght@300;400;500;600&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TravelAgency",
        "@id": "https://dwarkatemple.in/#organization",
        name: "Dwarka Temple Travel Assistance",
        url: "https://dwarkatemple.in",
        logo: "https://dwarkatemple.in/favicon.ico",
        telephone: "+918980200950",
        priceRange: "₹₹",
        description:
          "Travel assistance for Dwarka and Gujarat pilgrimage journeys: tour planning, private taxis, hotel and dharamshala assistance, and local sightseeing.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dwarka",
          addressRegion: "Gujarat",
          postalCode: "361335",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 22.2442,
          longitude: 68.9685,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "06:00",
          closes: "22:00",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://dwarkatemple.in/#website",
        url: "https://dwarkatemple.in",
        name: "Dwarka Temple Travel Assistance",
        publisher: {
          "@id": "https://dwarkatemple.in/#organization",
        },
        inLanguage: "en-IN",
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 pb-16 lg:pb-0">
          {/* Required: nested routes render here. */}
          <Outlet />
        </main>
        <Footer />
        <MobileActionBar />
      </div>
    </QueryClientProvider>
  );
}
