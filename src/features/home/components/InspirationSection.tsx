import { ArrowRight } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import * as React from "react";

import { Container } from "@/components/reuseables/container";
import { Button } from "@/components/ui/button";
import { H2, P, Small } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

import inspiration1 from "../../../../public/images/inspiration/inspiration-1.jpg";
import inspiration2 from "../../../../public/images/inspiration/inspiration-2.jpg";
import inspiration3 from "../../../../public/images/inspiration/inspiration-3.jpg";
import inspiration4 from "../../../../public/images/inspiration/inspiration-4.jpg";

interface InspirationItem {
  id: string;
  image: StaticImageData;
  alt: string;
  title: string;
  location?: string;
}

const INSPIRATION_ITEMS: InspirationItem[] = [
  {
    id: "inspire-1",
    image: inspiration1,
    alt: "Contemporary Aluminium Front Door installed in Surrey",
    title: "Contemporary Minimalist",
    location: "Surrey",
  },
  {
    id: "inspire-2",
    image: inspiration2,
    alt: "High Security Steel Front Door installed in London",
    title: "Urban Security Entrance",
    location: "London",
  },
  {
    id: "inspire-3",
    image: inspiration3,
    alt: "Modern Pivot Architectural Front Door installed in Cheshire",
    title: "Architectural Statement",
    location: "Cheshire",
  },
  {
    id: "inspire-4",
    image: inspiration4,
    alt: "Traditional Luxury Front Door installed in Cotswolds",
    title: "Cotswold Elegance",
    location: "Cotswolds",
  },
];

interface InspirationSectionProps extends React.ComponentProps<"section"> {
  className?: string;
}

export function InspirationSection({
  className,
  ...props
}: InspirationSectionProps) {
  return (
    <section
      className={cn("bg-background w-full py-16 sm:py-20 lg:py-24", className)}
      {...props}
    >
      <Container>
        {/* Header with Title on Left and Button on Right */}
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Small className="text-muted-foreground text-xs font-semibold tracking-widest uppercase sm:text-sm">
              INSPIRATION
            </Small>
            <H2 className="text-foreground mt-2 font-serif text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
              Real Homes, Real Inspiration
            </H2>
            <P className="text-muted-foreground mt-3 max-w-2xl text-sm leading-relaxed sm:text-base">
              See how our doors look on real UK homes and get ideas for your
              own.
            </P>
          </div>

          <Button
            variant="outline"
            size="lg"
            className="group hover:border-primary flex shrink-0 items-center gap-2 text-xs font-semibold tracking-wider uppercase transition-all duration-300 hover:gap-3.5 sm:text-sm"
            render={
              <Link href="/inspiration">
                VIEW MORE INSPIRATION
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            }
          />
        </div>

        {/* Images Row */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:mt-12 lg:grid-cols-4">
          {INSPIRATION_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group bg-muted border-border/50 relative aspect-[302/320] w-full overflow-hidden rounded-xl border"
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              {/* Subtle hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute right-4 bottom-4 left-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm font-medium text-white">{item.title}</p>
                {item.location && (
                  <p className="text-xs text-white/80">{item.location}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
