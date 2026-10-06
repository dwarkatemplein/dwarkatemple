export const site = {
  name: "Dwarka Temple Travel Assistance",
  domain: "dwarkatemple.in",
  tagline: "Your Complete Travel Guide to Dwarka",
  phone: "+918980200950",
  phoneDisplay: "+91 89802 00950",
  whatsapp: "918980200950",
  disclaimer:
    "dwarkatemple.in is a private travel assistance website and is not affiliated with or operated by Dwarkadhish Temple or any government authority.",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function telLink() {
  return `tel:${site.phone}`;
}

/** Turns a label/value record into a readable WhatsApp inquiry summary. */
export function buildInquiryMessage(title: string, fields: Record<string, string>) {
  const lines = Object.entries(fields)
    .filter(([, value]) => value && value.trim().length > 0)
    .map(([label, value]) => `${label}: ${value}`);
  return [`*${title}* (via ${site.domain})`, "", ...lines].join("\n");
}
