import { createFileRoute } from "@tanstack/react-router";
import { PackageDetail } from "@/components/site/PackageDetail";
import { packages } from "@/data/content";

const pkg = packages[2]!;

export const Route = createFileRoute("/tour-packages/dwarka-somnath")({
  head: () => ({
    meta: [
      { title: "Dwarka Somnath Tour Package | 4 Days Pilgrimage Itinerary" },
      {
        name: "description",
        content:
          "Four day Dwarka and Somnath tour itinerary via Porbandar, including Bet Dwarka and Nageshwar, with private transport and stay assistance.",
      },
      { property: "og:title", content: "Dwarka & Somnath Tour Package" },
      {
        property: "og:description",
        content:
          "The popular Dwarka to Somnath pilgrimage route planned with comfortable travel hours.",
      },
    ],
  }),
  component: () => <PackageDetail pkg={pkg} />,
});
