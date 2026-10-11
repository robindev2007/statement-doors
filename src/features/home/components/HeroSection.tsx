import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

import { Container } from "@/components/reuseables/container";
import { Button } from "@/components/ui/button";
import { H1, P, Small } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

import heroBg from "../../../../public/images/hero-bg.png";

// Feature Badges Data
interface FeatureItem {
  iconSrc: string;
  title: string;
  subtitle?: string;
}

const HERO_FEATURES: FeatureItem[] = [
  {
    iconSrc: "/icons/shield.svg",
    title: "Premium Quality",
    subtitle: "Aluminium & Steel",
  },
  {
    iconSrc: "/icons/truck.svg",
    title: "UK Wide Delivery",
  },
  {
    iconSrc: "/icons/measurement.svg",
    title: "Expert Measurement",
    subtitle: "& Installation",
  },
  {
    iconSrc: "/icons/diamond.svg",
    title: "Bespoke Designs",
    subtitle: "to Suit Your Home",
  },
];

interface HeroSectionProps extends React.ComponentProps<"section"> {
  className?: string;
}

export function HeroSection({ className, ...props }: HeroSectionProps) {
  return (
    <section
      className={cn(
        "relative flex min-h-[85vh] w-full flex-col justify-between overflow-hidden bg-black text-white",
        className,
      )}
      {...props}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBg}
          alt="Statement Doors Architectural Entrance"
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/20 to-transparent" />
      </div>

      {/* Hero Content */}
      <Container className="relative z-10 flex flex-1 flex-col justify-center py-8 sm:py-12 lg:py-16">
        <div className="max-w-3xl">
          <Small className="mb-2.5 block text-sm font-medium text-white/85 sm:mb-3 sm:text-base">
            Premium aluminium & steel FRONT door
          </Small>

          <H1 className="font-serif font-medium tracking-[-1.35px] text-white">
            <span className="block text-5xl leading-[1.05] sm:text-6xl md:text-7xl lg:text-7xl">
              Make a<br />
              Statement
            </span>
            <span className="mt-2 block text-3xl leading-[1.15] sm:text-4xl md:text-5xl lg:text-5xl">
              with Your Front Door
            </span>
          </H1>

          <P className="mt-4 max-w-lg text-base leading-relaxed text-white/85 sm:mt-5 sm:text-lg lg:text-xl">
            Stylish. Secure and built to last. Bespoke aluminium and steel front
            doors, designed for UK homes.
          </P>

          <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-4">
            <Button
              variant="theme"
              size="lg"
              className="flex items-center justify-center gap-2.5"
            >
              Explore Doors
              <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="blur"
              size="lg"
              className={"bg-[#4b474777]"}
              render={<Link href="/all-doors">Browse All Doors</Link>}
            />
          </div>
        </div>
      </Container>

      {/* Bottom Features Strip */}
      <HeroFeatures />
    </section>
  );
}

// Bottom Hero Features Strip
function HeroFeatures({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative z-10 w-full bg-[#41414159] py-4 backdrop-blur-xs sm:py-5",
        className,
      )}
    >
      <Container>
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:flex md:items-center md:justify-between">
          {HERO_FEATURES.map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-2.5 sm:gap-3"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center text-white sm:h-10 sm:w-10">
                <Image
                  src={item.iconSrc}
                  alt={item.title}
                  width={36}
                  height={36}
                  className="size-8 object-contain sm:size-9"
                />
              </div>
              <div className="text-left leading-tight">
                <div className="text-xs font-semibold text-white sm:text-sm">
                  {item.title}
                </div>
                {item.subtitle && (
                  <div className="mt-0.5 text-[11px] text-white/70 sm:text-xs">
                    {item.subtitle}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
