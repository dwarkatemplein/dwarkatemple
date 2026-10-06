import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, Phone, X, MessageSquare, ShieldCheck, MapPin } from "lucide-react";
import { site, telLink, whatsappLink } from "@/lib/site";
import { buttonStyles } from "./ui";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Home", to: "/" },
  { label: "Tour Packages", to: "/tour-packages" },
  { label: "Taxi Services", to: "/taxi-service" },
  { label: "Hotels & Dharamshalas", to: "/hotel-booking" },
  { label: "Sightseeing", to: "/sightseeing" },
  { label: "Travel Guide", to: "/travel-guide" },
  { label: "About Us", to: "/about-us" },
  { label: "Contact", to: "/contact-us" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-sm">
      {/* Top Utility Announcement Bar */}
      <div className="bg-primary text-primary-foreground border-b border-amber-500/20 py-1.5 text-xs">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 font-medium tracking-wide">
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/20 px-2 py-0.5 text-[11px] text-amber-200">
              <ShieldCheck className="h-3 w-3" /> Verified Assistance
            </span>
            <span className="hidden sm:inline-block text-primary-foreground/90">
              Pilgrimage Taxis, Hotel Booking & Customized Gujarat Tour Packages
            </span>
          </div>
          <div className="flex items-center gap-4 text-primary-foreground/90">
            <a
              href={telLink()}
              className="flex items-center gap-1.5 hover:text-amber-200 transition-colors whitespace-nowrap font-medium"
            >
              <Phone className="h-3.5 w-3.5 text-amber-300" />
              <span>{site.phoneDisplay}</span>
            </a>
            <span className="hidden sm:inline text-amber-400/40">•</span>
            <a
              href={whatsappLink("Hello, I need assistance for Dwarka travel.")}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-1 hover:text-amber-200 transition-colors whitespace-nowrap"
            >
              <MessageSquare className="h-3.5 w-3.5 text-emerald-400" />
              <span>WhatsApp Support</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="border-b border-border/80 bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-2 px-4 py-3 sm:px-6 lg:px-8">
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex shrink-0 items-center gap-3 transition-opacity hover:opacity-90"
            onClick={() => setOpen(false)}
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md ring-2 ring-amber-500/30">
              <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden fill="currentColor">
                <path d="M12 2l2.2 4.2L12 8 9.8 6.2 12 2zm0 7.2l4 3.4V22h-3v-5h-2v5H7v-9.4l5-3.4z" />
              </svg>
            </span>
            <span className="leading-tight shrink-0">
              <span className="block font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-primary">
                Dwarka Temple
              </span>
              <span className="block text-[10px] uppercase tracking-[0.22em] font-medium text-muted-foreground">
                Travel Assistance
              </span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center gap-0.5 xl:gap-1.5 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="whitespace-nowrap rounded-lg px-2.5 py-2 text-[13px] font-medium text-foreground/80 transition-all duration-150 hover:bg-primary/5 hover:text-primary xl:px-3 xl:text-sm"
                activeProps={{
                  className:
                    "bg-primary/10 text-primary font-semibold shadow-2xs border-b-2 border-primary",
                }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="flex shrink-0 items-center gap-3">
            <a
              href={telLink()}
              className="hidden items-center gap-2 whitespace-nowrap rounded-lg border border-primary/20 bg-primary/5 px-3.5 py-2 text-xs font-semibold text-primary transition hover:bg-primary/10 xl:flex"
            >
              <Phone className="h-3.5 w-3.5 text-primary" />
              <span>{site.phoneDisplay}</span>
            </a>

            <a
              href={whatsappLink("Hello, I would like help planning my Dwarka trip.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-[#25D366] px-4 py-2.5 text-xs font-bold text-white shadow-md transition-all hover:bg-[#20ba5a] hover:shadow-lg focus:ring-2 focus:ring-[#25D366]/40 sm:px-5 sm:text-sm"
            >
              <MessageSquare className="h-4 w-4 fill-current" />
              <span>WhatsApp Us</span>
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-card text-primary shadow-2xs transition hover:bg-muted lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {open ? (
        <div className="border-t border-border bg-card shadow-xl lg:hidden">
          <nav className="mx-auto grid w-full max-w-7xl gap-1 px-4 py-4 sm:px-6">
            <div className="mb-2 px-3 py-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Navigation Menu
            </div>
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-muted hover:text-primary transition-colors"
                activeProps={{ className: "bg-primary/10 text-primary font-bold" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                <span>{item.label}</span>
                <span className="text-xs text-muted-foreground">→</span>
              </Link>
            ))}

            <div className="mt-4 pt-3 border-t border-border grid gap-2.5">
              <a
                href={telLink()}
                className="flex items-center justify-center gap-2 rounded-xl border border-primary/30 bg-primary/5 py-2.5 text-sm font-semibold text-primary"
              >
                <Phone className="h-4 w-4" />
                Call {site.phoneDisplay}
              </a>
              <Link
                to="/taxi-service"
                onClick={() => setOpen(false)}
                className={cn(buttonStyles.primary, "w-full justify-center text-sm py-2.5")}
              >
                Book a Taxi Online
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
