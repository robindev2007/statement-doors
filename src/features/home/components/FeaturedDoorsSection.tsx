"use client";

import { ArrowRight, Heart } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import * as React from "react";

import { Container } from "@/components/reuseables/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { H2, P, Small } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

import doorImage1 from "../../../../public/images/shop-by-category/image-1.jpg";
import doorImage2 from "../../../../public/images/shop-by-category/image-2.jpg";

interface DoorColor {
  name: string;
  value: string;
}

interface ProductDoor {
  id: string;
  title: string;
  priceFrom: number;
  image: StaticImageData;
  colors: DoorColor[];
  href: string;
}

const FEATURED_DOORS: ProductDoor[] = [
  {
    id: "monaco-aluminium",
    title: "Monaco Aluminium Door",
    priceFrom: 1234,
    image: doorImage1,
    colors: [
      { name: "Matte Black", value: "#1B1B1B" },
      { name: "Anthracite Grey", value: "#383B3E" },
      { name: "Natural Oak", value: "#8A5A36" },
      { name: "Off White", value: "#F4F1EA" },
    ],
    href: "/front-doors/aluminium/single-hinged-doors",
  },
  {
    id: "verona-steel",
    title: "Verona Steel Security Door",
    priceFrom: 1450,
    image: doorImage2,
    colors: [
      { name: "Anthracite Grey", value: "#383B3E" },
      { name: "Deep Bronze", value: "#4A3E31" },
      { name: "Jet Black", value: "#161616" },
      { name: "Warm Walnut", value: "#5C3826" },
    ],
    href: "/front-doors/steel/single-hinged-doors",
  },
  {
    id: "cortona-pivot",
    title: "Cortona Pivot Entrance Door",
    priceFrom: 2150,
    image: doorImage1,
    colors: [
      { name: "Matte Black", value: "#1B1B1B" },
      { name: "Anthracite Grey", value: "#383B3E" },
      { name: "Champagne Gold", value: "#CCA463" },
    ],
    href: "/front-doors/aluminium/pivot-doors",
  },
  {
    id: "modena-double",
    title: "Modena Steel Double Door",
    priceFrom: 1890,
    image: doorImage2,
    colors: [
      { name: "Slate Grey", value: "#2F3337" },
      { name: "Jet Black", value: "#161616" },
      { name: "Natural Oak", value: "#8A5A36" },
    ],
    href: "/front-doors/steel/double-doors",
  },
  {
    id: "siena-glass",
    title: "Siena Glass Front Door",
    priceFrom: 1620,
    image: doorImage1,
    colors: [
      { name: "Matte Black", value: "#1B1B1B" },
      { name: "Anthracite Grey", value: "#383B3E" },
      { name: "Pure White", value: "#F8F8F8" },
    ],
    href: "/front-doors/aluminium/glass-front-doors",
  },
  {
    id: "palermo-contemporary",
    title: "Palermo Modern Steel Door",
    priceFrom: 1380,
    image: doorImage2,
    colors: [
      { name: "Jet Black", value: "#161616" },
      { name: "Anthracite Grey", value: "#383B3E" },
      { name: "Raw Bronze", value: "#584B3D" },
      { name: "Forest Green", value: "#2C3B30" },
    ],
    href: "/front-doors/steel/pivot-doors",
  },
];

interface FeaturedDoorsSectionProps extends React.ComponentProps<"section"> {
  className?: string;
}

export function FeaturedDoorsSection({
  className,
  ...props
}: FeaturedDoorsSectionProps) {
  return (
    <section
      className={cn("bg-background w-full py-16 sm:py-20 lg:py-24", className)}
      {...props}
    >
      <Container>
        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full"
        >
          {/* Header with Nav Buttons on the Right */}
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <Small className="text-muted-foreground text-xs font-semibold tracking-widest uppercase sm:text-sm">
                OUR TOP PICKS
              </Small>
              <H2 className="text-foreground mt-2 font-serif text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
                Best Selling Doors
              </H2>
              <P className="text-muted-foreground mt-3 max-w-2xl text-sm leading-relaxed sm:text-base">
                Popular designs loved by UK homeowners. Stylish, secure and
                available in a range of colours and finishes.
              </P>
            </div>

            {/* Navigation buttons on the right of header using downloaded arrow icons */}
            <div className="flex shrink-0 items-center gap-2">
              <CarouselPrevious className="border-border hover:bg-muted static size-10 translate-y-0 rounded-full disabled:pointer-events-none disabled:opacity-40">
                <Image
                  src="/icons/arrow-left-01.svg"
                  alt="Previous slide"
                  width={20}
                  height={20}
                  className="size-5"
                />
              </CarouselPrevious>
              <CarouselNext className="border-border hover:bg-muted static size-10 translate-y-0 rounded-full disabled:pointer-events-none disabled:opacity-40">
                <Image
                  src="/icons/arrow-right-01.svg"
                  alt="Next slide"
                  width={20}
                  height={20}
                  className="size-5"
                />
              </CarouselNext>
            </div>
          </div>

          {/* Carousel Slides */}
          <div className="mt-10 sm:mt-12">
            <CarouselContent className="-ml-4 sm:-ml-6">
              {FEATURED_DOORS.map((door) => (
                <CarouselItem
                  key={door.id}
                  className="basis-full pl-4 sm:basis-1/2 sm:pl-6 lg:basis-1/3 xl:basis-1/4"
                >
                  <ProductCard door={door} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>
        </Carousel>
      </Container>
    </section>
  );
}

function ProductCard({ door }: { door: ProductDoor }) {
  const [isFavorite, setIsFavorite] = React.useState(false);

  return (
    <Card className="group bg-background relative flex h-full flex-col gap-0 overflow-hidden rounded-[12px] border border-[#F6F6F6] p-0 shadow-none">
      {/* Image Container with Favorite Heart Button */}
      <div className="bg-muted relative aspect-[238/276] w-full overflow-hidden rounded-t-[11px]">
        <Image
          src={door.image}
          alt={door.title}
          fill
          placeholder="blur"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Favorite Button with Outline/Filled Heart */}
        <button
          type="button"
          onClick={() => setIsFavorite(!isFavorite)}
          aria-label={isFavorite ? "Remove from wishlist" : "Add to wishlist"}
          className="text-foreground absolute top-3 right-3 z-10 flex size-9 items-center justify-center rounded-full bg-white/60 shadow-xs backdrop-blur-md transition-all hover:scale-105 hover:bg-white/80 active:scale-95"
        >
          <Heart
            className={cn(
              "size-4.5 transition-colors",
              isFavorite
                ? "fill-[#CCA463] text-[#CCA463]"
                : "text-muted-foreground hover:text-foreground",
            )}
          />
        </button>
      </div>

      {/* Card Content */}
      <CardContent className="flex flex-1 flex-col justify-between p-4">
        <div>
          {/* Title */}
          <h3 className="text-foreground font-sans text-base font-bold tracking-tight sm:text-lg">
            {door.title}
          </h3>

          {/* Price: 'From:' in muted-foreground, amount in normal text */}
          <p className="mt-1 text-sm font-semibold">
            <span className="text-muted-foreground font-normal">From: </span>
            <span className="text-foreground">
              £{door.priceFrom.toLocaleString()}
            </span>
          </p>

          {/* Color Options: Viewable Rounded-Full Color Dots */}
          <div
            className="mt-3 flex items-center gap-1.5"
            aria-label="Available colours"
          >
            {door.colors.map((color) => (
              <span
                key={color.value}
                title={color.name}
                className="border-border size-4.5 shrink-0 rounded-full border shadow-2xs"
                style={{ backgroundColor: color.value }}
              />
            ))}
          </div>
        </div>

        {/* Bottom Button: View Door */}
        <Button
          variant="outline"
          className="border-primary mt-5 flex w-full items-center justify-center gap-2 rounded-sm transition-all duration-300 hover:gap-3.5"
          render={
            <Link href={door.href}>
              View Door
              <ArrowRight className="size-4" />
            </Link>
          }
        />
      </CardContent>
    </Card>
  );
}
