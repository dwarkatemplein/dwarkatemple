import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  tone = "cream",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "cream" | "white" | "sand" | "maroon";
  id?: string;
}) {
  const tones = {
    cream: "bg-background text-foreground",
    white: "bg-card text-card-foreground",
    sand: "bg-muted text-foreground",
    maroon: "bg-primary text-primary-foreground",
  } as const;
  return (
    <section id={id} className={cn("py-14 sm:py-20", tones[tone], className)}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  inverted = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  inverted?: boolean;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? <p className={cn("eyebrow", inverted && "text-secondary")}>{eyebrow}</p> : null}
      <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">{title}</h2>
      <div className={cn("saffron-rule mt-4", align === "center" && "mx-auto")} />
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            inverted ? "text-primary-foreground/80" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

export const buttonStyles = {
  primary: cn(buttonBase, "bg-primary text-primary-foreground hover:brightness-115 shadow-soft"),
  saffron: cn(
    buttonBase,
    "bg-secondary text-secondary-foreground hover:brightness-105 shadow-soft font-semibold",
  ),
  whatsapp: cn(buttonBase, "bg-whatsapp text-whatsapp-foreground hover:brightness-105 shadow-soft"),
  outline: cn(buttonBase, "border border-primary/30 bg-card text-primary hover:bg-accent"),
  ghostLight: cn(
    buttonBase,
    "border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10",
  ),
};

export function ActionLink({
  to,
  children,
  variant = "primary",
  className,
}: {
  to: string;
  children: ReactNode;
  variant?: keyof typeof buttonStyles;
  className?: string;
}) {
  return (
    <Link to={to} className={cn(buttonStyles[variant], className)}>
      {children}
    </Link>
  );
}

export function ActionAnchor({
  href,
  children,
  variant = "whatsapp",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof buttonStyles;
  className?: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className={cn(buttonStyles[variant], className)}
    >
      {children}
    </a>
  );
}

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("surface-card p-6", className)}>{children}</div>;
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  children,
}: {
  eyebrow?: string | undefined;
  title: string;
  description?: string | undefined;
  image?: string | undefined;
  children?: ReactNode;
}) {
  return (
    <div className="relative isolate overflow-hidden bg-primary text-primary-foreground">
      {image ? (
        <>
          <img
            src={image}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover opacity-45"
          />
          <div className="hero-overlay absolute inset-0" />
        </>
      ) : null}
      <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        {eyebrow ? (
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-secondary">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-3xl text-3xl leading-tight sm:text-5xl">{title}</h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
            {description}
          </p>
        ) : null}
        {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
      </div>
    </div>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-5 text-base leading-relaxed text-foreground/85 [&_h2]:mt-10 [&_h2]:text-2xl [&_h3]:mt-8 [&_h3]:text-xl [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-2">
      {children}
    </div>
  );
}

export function Note({ children }: { children: ReactNode }) {
  return (
    <p className="rounded-xl border border-secondary/40 bg-secondary/10 px-5 py-4 text-sm leading-relaxed text-foreground/80">
      {children}
    </p>
  );
}
