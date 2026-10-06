import { createFileRoute } from "@tanstack/react-router";
import { PackageDetail } from "@/components/site/PackageDetail";
import { packages } from "@/data/content";

const pkg = packages[1]!;

export const Route = createFileRoute("/tour-packages/dwarka-2-days")({
  head: () => ({
    meta: [
      { title: "2 Days Dwarka Darshan Package | Bet Dwarka & Nageshwar" },
      {
        name: "description",
        content:
          "Two day Dwarka darshan itinerary with Dwarkadhish Temple, evening aarti, Bet Dwarka ferry, Nageshwar Jyotirlinga and Shivrajpur Beach.",
      },
      { property: "og:title", content: "2 Days Dwarka Darshan Package" },
      {
        property: "og:description",
        content: "An unhurried two day Dwarka plan including Bet Dwarka and Nageshwar.",
      },
    ],
  }),
  component: () => <PackageDetail pkg={pkg} />,
});
