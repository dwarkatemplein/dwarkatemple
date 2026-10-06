import { useState } from "react";
import { buildInquiryMessage, whatsappLink } from "@/lib/site";
import { buttonStyles } from "./ui";
import { cn } from "@/lib/utils";

export type Field = {
  name: string;
  label: string;
  type: "text" | "tel" | "email" | "date" | "time" | "number" | "select" | "textarea" | "multi";
  options?: string[];
  required?: boolean;
  placeholder?: string;
  full?: boolean;
};

export function InquiryForm({
  title,
  fields,
  submitLabel = "Send Inquiry on WhatsApp",
  compact = false,
}: {
  title: string;
  fields: Field[];
  submitLabel?: string;
  compact?: boolean;
}) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [multi, setMulti] = useState<Record<string, string[]>>({});
  const [errors, setErrors] = useState<string[]>([]);

  const inputClass =
    "w-full rounded-lg border border-input bg-card px-3 py-2.5 text-sm text-foreground outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/30";

  function set(name: string, value: string) {
    setValues((v) => ({ ...v, [name]: value }));
  }

  function toggleMulti(name: string, option: string) {
    setMulti((m) => {
      const current = m[name] ?? [];
      return {
        ...m,
        [name]: current.includes(option)
          ? current.filter((o) => o !== option)
          : [...current, option],
      };
    });
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const missing = fields
      .filter((f) => f.required)
      .filter((f) =>
        f.type === "multi" ? (multi[f.name] ?? []).length === 0 : !(values[f.name] ?? "").trim(),
      )
      .map((f) => f.label);

    if (missing.length > 0) {
      setErrors(missing);
      return;
    }
    setErrors([]);

    const summary: Record<string, string> = {};
    for (const field of fields) {
      summary[field.label] =
        field.type === "multi" ? (multi[field.name] ?? []).join(", ") : (values[field.name] ?? "");
    }
    window.open(whatsappLink(buildInquiryMessage(title, summary)), "_blank", "noreferrer");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("surface-card p-6 sm:p-7", compact && "p-5 sm:p-6")}
      noValidate
    >
      <h3 className="text-xl">{title}</h3>
      <div className="saffron-rule mt-3" />
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {fields.map((field) => (
          <div
            key={field.name}
            className={cn(field.full || field.type === "multi" ? "sm:col-span-2" : "")}
          >
            <label
              htmlFor={field.name}
              className="mb-1.5 block text-sm font-medium text-foreground/80"
            >
              {field.label}
              {field.required ? <span className="text-primary"> *</span> : null}
            </label>

            {field.type === "select" ? (
              <select
                id={field.name}
                value={values[field.name] ?? ""}
                onChange={(e) => set(field.name, e.target.value)}
                className={inputClass}
              >
                <option value="">Select</option>
                {field.options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : field.type === "textarea" ? (
              <textarea
                id={field.name}
                rows={3}
                placeholder={field.placeholder}
                value={values[field.name] ?? ""}
                onChange={(e) => set(field.name, e.target.value)}
                className={inputClass}
              />
            ) : field.type === "multi" ? (
              <div className="flex flex-wrap gap-2">
                {field.options?.map((option) => {
                  const active = (multi[field.name] ?? []).includes(option);
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => toggleMulti(field.name, option)}
                      aria-pressed={active}
                      className={cn(
                        "rounded-full border px-4 py-2 text-sm transition",
                        active
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-input bg-card text-foreground/80 hover:border-secondary",
                      )}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            ) : (
              <input
                id={field.name}
                type={field.type}
                inputMode={field.type === "tel" ? "tel" : undefined}
                min={field.type === "number" ? 1 : undefined}
                placeholder={field.placeholder}
                value={values[field.name] ?? ""}
                onChange={(e) => set(field.name, e.target.value)}
                className={inputClass}
              />
            )}
          </div>
        ))}
      </div>

      {errors.length > 0 ? (
        <p className="mt-4 rounded-lg bg-destructive/10 px-4 py-3 text-sm text-destructive">
          Please fill in: {errors.join(", ")}
        </p>
      ) : null}

      <button type="submit" className={cn(buttonStyles.whatsapp, "mt-6 w-full")}>
        {submitLabel}
      </button>
      <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
        Submitting opens WhatsApp with your details filled in. An inquiry is not a confirmed
        booking; availability and rates are confirmed by our team before payment.
      </p>
    </form>
  );
}

export const packageInquiryFields: Field[] = [
  { name: "name", label: "Full name", type: "text", required: true },
  { name: "phone", label: "Phone number", type: "tel", required: true },
  { name: "whatsapp", label: "WhatsApp number (optional)", type: "tel" },
  { name: "date", label: "Travel date", type: "date", required: true },
  { name: "adults", label: "Number of adults", type: "number", required: true },
  { name: "children", label: "Number of children", type: "number" },
  { name: "ages", label: "Children's ages", type: "text" },
  { name: "rooms", label: "Number of rooms", type: "number" },
  {
    name: "vehicle",
    label: "Preferred vehicle",
    type: "select",
    options: [
      "Sedan",
      "SUV",
      "Ertiga",
      "Innova Crysta",
      "Tempo Traveller",
      "Bus",
      "Need a recommendation",
    ],
  },
  {
    name: "stay",
    label: "Accommodation preference",
    type: "select",
    options: [
      "Budget hotel",
      "Standard hotel",
      "Deluxe hotel",
      "Premium hotel",
      "Dharamshala",
      "No accommodation required",
      "Need a recommendation",
    ],
  },
  { name: "budget", label: "Budget range", type: "text", placeholder: "Per person or total" },
  { name: "special", label: "Special requirements", type: "text", full: true },
  { name: "message", label: "Additional message", type: "textarea", full: true },
];

export const taxiInquiryFields: Field[] = [
  { name: "pickup", label: "Pickup location", type: "text", required: true },
  { name: "drop", label: "Drop location", type: "text", required: true },
  { name: "date", label: "Pickup date", type: "date", required: true },
  { name: "time", label: "Pickup time", type: "time" },
  { name: "returnDate", label: "Return date", type: "date" },
  { name: "trip", label: "Trip type", type: "select", options: ["One way", "Round trip"] },
  { name: "passengers", label: "Number of passengers", type: "number", required: true },
  {
    name: "vehicle",
    label: "Vehicle preference",
    type: "select",
    options: [
      "Sedan",
      "SUV",
      "Maruti Ertiga",
      "Toyota Innova",
      "Innova Crysta",
      "Tempo Traveller",
      "Bus",
      "Need a recommendation",
    ],
  },
  { name: "phone", label: "Contact number", type: "tel", required: true },
  { name: "sightseeing", label: "Sightseeing requirements", type: "text", full: true },
  { name: "notes", label: "Additional notes", type: "textarea", full: true },
];

export const stayInquiryFields: Field[] = [
  { name: "name", label: "Full name", type: "text", required: true },
  { name: "phone", label: "Contact number", type: "tel", required: true },
  { name: "checkin", label: "Check-in date", type: "date", required: true },
  { name: "checkout", label: "Check-out date", type: "date", required: true },
  { name: "guests", label: "Number of guests", type: "number", required: true },
  { name: "rooms", label: "Number of rooms", type: "number", required: true },
  {
    name: "category",
    label: "Preferred category",
    type: "select",
    options: [
      "Budget hotel",
      "Standard hotel",
      "Deluxe hotel",
      "Premium hotel",
      "Family hotel",
      "Near Dwarkadhish Temple",
      "Near railway station",
      "Group accommodation",
      "Dharamshala",
    ],
  },
  {
    name: "meals",
    label: "Meal preference",
    type: "select",
    options: ["Room only", "With breakfast", "With all meals", "Need a recommendation"],
  },
  { name: "notes", label: "Additional requirements", type: "textarea", full: true },
];

export const heroInquiryFields: Field[] = [
  {
    name: "destination",
    label: "Destination",
    type: "text",
    required: true,
    placeholder: "Dwarka, Somnath...",
  },
  { name: "arrival", label: "Arrival date", type: "date", required: true },
  { name: "departure", label: "Departure date", type: "date" },
  { name: "travellers", label: "Number of travellers", type: "number", required: true },
  { name: "rooms", label: "Number of rooms", type: "number" },
  { name: "phone", label: "Contact number", type: "tel", required: true },
  {
    name: "services",
    label: "Services required",
    type: "multi",
    required: true,
    options: [
      "Tour package",
      "Taxi",
      "Hotel",
      "Dharamshala",
      "Local sightseeing",
      "Bus assistance",
      "Train assistance",
      "Custom itinerary",
    ],
  },
];
