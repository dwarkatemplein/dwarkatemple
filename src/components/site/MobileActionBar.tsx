import { Phone, MessageCircle, CarFront } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { telLink, whatsappLink } from "@/lib/site";

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-border bg-card/95 backdrop-blur lg:hidden">
      <a
        href={telLink()}
        className="flex flex-col items-center gap-1 py-2.5 text-xs font-medium text-primary"
      >
        <Phone className="h-5 w-5" /> Call
      </a>
      <a
        href={whatsappLink("Hello, I would like a travel quote for Dwarka.")}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col items-center gap-1 border-x border-border py-2.5 text-xs font-medium text-whatsapp"
      >
        <MessageCircle className="h-5 w-5" /> WhatsApp
      </a>
      <Link
        to="/taxi-service"
        className="flex flex-col items-center gap-1 py-2.5 text-xs font-medium text-primary"
      >
        <CarFront className="h-5 w-5" /> Book Taxi
      </Link>
    </div>
  );
}
