import { ArrowRight, Check } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import * as React from "react";

import { Container } from "@/components/reuseables/container";
import { Button } from "@/components/ui/button";
import { H2, P, Small } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

import categoryAluminium from "../../../../public/images/shop-by-category/image-1.jpg";
import categorySteel from "../../../../public/images/shop-by-category/image-2.jpg";

interface CategoryCard {
  title: string;
  subtitle: string;
  features: string[];
  ctaText: string;
  href: string;
  imageSrc: StaticImageData;
  imageAlt: string;
}

const CATEGORIES: CategoryCard[] = [
  {
    title: "Aluminium",
    subtitle: "Front Doors",
    features: [
      "Modern & stylish",
      "Lightweight & durable",
      "Wide range of colours",
      "Slim, contemporary frames",
    ],
    ctaText: "View Aluminium Doors",
    href: "/front-doors/aluminium",
    imageSrc: categoryAluminium,
    imageAlt: "Modern Aluminium Front Doors",
  },
  {
    title: "Steel",
    subtitle: "Front Doors",
    features: [
      "Strong & secure",
      "Excellent thermal performance",
      "Classic & modern designs",
      "Built for long lasting protection",
    ],
    ctaText: "View Steel Doors",
    href: "/front-doors/steel",
    imageSrc: categorySteel,
    imageAlt: "Durable Steel Front Doors",
  },
];

interface ShopByCategorySectionProps extends React.ComponentProps<"section"> {
  className?: string;
}

export function ShopByCategorySection({
  className,
  ...props
}: ShopByCategorySectionProps) {
  return (
    <section
      className={cn("bg-background w-full py-16 sm:py-20 lg:py-24", className)}
      {...props}
    >
      <Container>
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center">
          <Small className="text-muted-foreground mb-2 text-xs font-semibold tracking-widest uppercase sm:text-sm">
            Shop by Category
          </Small>

          <H2 className="text-foreground font-serif text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
            Front Doors
          </H2>

          <P className="text-muted-foreground mt-1 max-w-2xl text-sm leading-relaxed sm:text-base lg:text-lg">
            Choose from aluminium or steel front doors in a range of styles.
            Click a category to explore.
          </P>
        </div>

        {/* Category Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 md:grid-cols-2 lg:gap-8">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.title}
              className="group relative flex min-h-[360px] flex-col justify-center overflow-hidden rounded-2xl px-6 py-8 text-white sm:min-h-[380px] sm:px-8 sm:py-10 lg:min-h-[400px] lg:px-10 lg:py-12"
            >
              {/* Card Background Image */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                  src={cat.imageSrc}
                  alt={cat.imageAlt}
                  fill
                  placeholder="blur"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-r from-black/90 from-[29.14%] to-transparent" />
              </div>

              {/* Card Content */}
              <div className="relative z-10 flex flex-col items-start">
                <h3 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
                  {cat.title}
                  <br />
                  <span>{cat.subtitle}</span>
                </h3>

                <ul className="mt-4 space-y-2 text-sm text-white/85 sm:mt-5 sm:space-y-2.5 sm:text-base">
                  {cat.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2.5">
                      <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#CCA463] text-black">
                        <Check className="size-3 stroke-[2.5]" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  size="lg"
                  className="mt-6 flex items-center gap-2 bg-white text-black transition-all duration-300 hover:gap-3.5 hover:bg-white/90 active:bg-white/80 sm:mt-8"
                  render={
                    <Link href={cat.href}>
                      {cat.ctaText}
                      <ArrowRight className="size-4" />
                    </Link>
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
