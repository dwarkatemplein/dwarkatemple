import type { ReactNode } from "react";
import { ActionAnchor, ActionLink, Note, PageHero, Section } from "./ui";
import { whatsappLink } from "@/lib/site";

export function ArticlePage({
  eyebrow,
  title,
  description,
  image,
  children,
  note,
  ctaMessage = "Hello, I have a question about travelling to Dwarka.",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
  children: ReactNode;
  note?: string;
  ctaMessage?: string;
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={description} image={image}>
        <ActionAnchor href={whatsappLink(ctaMessage)} variant="whatsapp">
          Ask on WhatsApp
        </ActionAnchor>
        <ActionLink to="/tour-packages" variant="ghostLight">
          View Tour Packages
        </ActionLink>
      </PageHero>

      <Section tone="cream">
        <div className="mx-auto max-w-3xl space-y-5 text-base leading-relaxed text-foreground/85">
          {children}
          {note ? <Note>{note}</Note> : null}
        </div>
      </Section>
    </>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return <h2 className="mt-10 text-2xl text-primary">{children}</h2>;
}

export function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-2 text-sm text-muted-foreground sm:text-base">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
          {item}
        </li>
      ))}
    </ul>
  );
}
