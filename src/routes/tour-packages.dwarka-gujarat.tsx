import { createFileRoute } from "@tanstack/react-router";
import { PackageDetail } from "@/components/site/PackageDetail";
import { packages } from "@/data/content";

const pkg = packages[3]!;

export const Route = createFileRoute("/tour-packages/dwarka-gujarat")({
  head: () => ({
    meta: [
      { title: "Gujarat Pilgrimage Tour Package | Dwarka, Somnath, Gir & Diu" },
      {
        name: "description",
        content:
          "Customized Gujarat pilgrimage tour covering Dwarka, Somnath, Porbandar, Gir and Diu, planned around your dates, group size and pace.",
      },
      { property: "og:title", content: "Customized Gujarat Pilgrimage Tour" },
      {
        property: "og:description",
        content: "A Gujarat route built for your group rather than a fixed template.",
      },
    ],
  }),
  component: () => <PackageDetail pkg={pkg} />,
});
