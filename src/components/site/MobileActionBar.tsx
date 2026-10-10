import { Home, CarFront, Package, Hotel, MessageCircle } from "lucide-react";
import { Link, useLocation } from "@tanstack/react-router";
import { whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

export function MobileActionBar() {
  const location = useLocation();
  const pathname = location.pathname;

  const isHomeActive = pathname === "/";
  const isTaxiActive = pathname.startsWith("/taxi-service");
  const isPackagesActive = pathname.startsWith("/tour-packages");
  const isHotelsActive = pathname.startsWith("/hotel-booking") || pathname.startsWith("/dharamshala-booking");

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border/80 bg-background/95 backdrop-blur-md px-1 py-1.5 lg:hidden shadow-[0_-4px_16px_rgba(0,0,0,0.08)]">
      <div className="mx-auto grid max-w-md grid-cols-5 items-center justify-between gap-1 text-center">
        {/* Home */}
        <Link
          to="/"
          className={cn(
            "relative flex flex-col items-center justify-center rounded-xl py-1.5 transition-all duration-200",
            isHomeActive
              ? "bg-primary text-primary-foreground font-bold shadow-md scale-105"
              : "text-muted-foreground hover:bg-muted hover:text-foreground font-medium"
          )}
        >
          {isHomeActive && (
            <span className="absolute -top-1.5 h-1 w-6 rounded-full bg-amber-400" />
          )}
          <Home className={cn("h-4 w-4 sm:h-5 sm:w-5", isHomeActive ? "text-amber-300" : "text-muted-foreground")} />
          <span className="mt-0.5 text-[10px] leading-none">Home</span>
        </Link>

        {/* Taxi */}
        <Link
          to="/taxi-service"
          className={cn(
            "relative flex flex-col items-center justify-center rounded-xl py-1.5 transition-all duration-200",
            isTaxiActive
              ? "bg-primary text-primary-foreground font-bold shadow-md scale-105"
              : "text-muted-foreground hover:bg-muted hover:text-foreground font-medium"
          )}
        >
          {isTaxiActive && (
            <span className="absolute -top-1.5 h-1 w-6 rounded-full bg-amber-400" />
          )}
          <CarFront className={cn("h-4 w-4 sm:h-5 sm:w-5", isTaxiActive ? "text-amber-300" : "text-muted-foreground")} />
          <span className="mt-0.5 text-[10px] leading-none">Taxi</span>
        </Link>

        {/* Tour Packages */}
        <Link
          to="/tour-packages"
          className={cn(
            "relative flex flex-col items-center justify-center rounded-xl py-1.5 transition-all duration-200",
            isPackagesActive
              ? "bg-primary text-primary-foreground font-bold shadow-md scale-105"
              : "text-muted-foreground hover:bg-muted hover:text-foreground font-medium"
          )}
        >
          {isPackagesActive && (
            <span className="absolute -top-1.5 h-1 w-6 rounded-full bg-amber-400" />
          )}
          <Package className={cn("h-4 w-4 sm:h-5 sm:w-5", isPackagesActive ? "text-amber-300" : "text-muted-foreground")} />
          <span className="mt-0.5 text-[10px] leading-none">Packages</span>
        </Link>

        {/* Hotels */}
        <Link
          to="/hotel-booking"
          className={cn(
            "relative flex flex-col items-center justify-center rounded-xl py-1.5 transition-all duration-200",
            isHotelsActive
              ? "bg-primary text-primary-foreground font-bold shadow-md scale-105"
              : "text-muted-foreground hover:bg-muted hover:text-foreground font-medium"
          )}
        >
          {isHotelsActive && (
            <span className="absolute -top-1.5 h-1 w-6 rounded-full bg-amber-400" />
          )}
          <Hotel className={cn("h-4 w-4 sm:h-5 sm:w-5", isHotelsActive ? "text-amber-300" : "text-muted-foreground")} />
          <span className="mt-0.5 text-[10px] leading-none">Hotels</span>
        </Link>

        {/* WhatsApp */}
        <a
          href={whatsappLink("Hello, I would like a travel quote for Dwarka.")}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center rounded-xl py-1.5 text-[#25D366] hover:bg-[#25D366]/10 font-bold transition-all duration-200"
        >
          <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 fill-[#25D366]/20" />
          <span className="mt-0.5 text-[10px] leading-none">WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
