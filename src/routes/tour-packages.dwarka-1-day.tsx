import { createFileRoute } from "@tanstack/react-router";
import { PackageDetail } from "@/components/site/PackageDetail";
import { packages } from "@/data/content";

const pkg = packages[0]!;

export const Route = createFileRoute("/tour-packages/dwarka-1-day")({
  head: () => ({
    meta: [
      { title: "1 Day Dwarka Local Sightseeing Tour | Itinerary & Inquiry" },
      {
        name: "description",
        content:
          "One day Dwarka sightseeing itinerary covering Dwarkadhish Temple, Gomti Ghat, Sudama Setu, Rukmini Devi Temple and Nageshwar with a private vehicle.",
      },
      { property: "og:title", content: "1 Day Dwarka Local Sightseeing Tour" },
      {
        property: "og:description",
        content:
          "A relaxed one day Dwarka darshan plan with a private vehicle and local assistance.",
      },
    ],
  }),
  component: () => <PackageDetail pkg={pkg} />,
});
