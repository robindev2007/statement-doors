import Image from "next/image";
import * as React from "react";

import { Container } from "@/components/reuseables/container";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { H2, P, Small } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

interface StepItem {
  step: string;
  title: string;
  description: string;
  icon: string;
  iconBg: string;
}

const STEPS: StepItem[] = [
  {
    step: "1",
    title: "Design or Choose",
    description: "Use our configurator or browse our door collection.",
    icon: "/icons/design.svg",
    iconBg: "#E8F4FF",
  },
  {
    step: "2",
    title: "Get a Quote",
    description: "Enter your size and options to see an instant price.",
    icon: "/icons/quote.svg",
    iconBg: "#FFF2E2",
  },
  {
    step: "3",
    title: "Manufacture & Deliver",
    description: "Your door is made to order & delivered across the UK.",
    icon: "/icons/manufacture.svg",
    iconBg: "#E0F4FD",
  },
  {
    step: "4",
    title: "Install (Optional)",
    description: "Book our professional installation service.",
    icon: "/icons/install.svg",
    iconBg: "#E4F9E8",
  },
];

interface HowItWorksSectionProps extends React.ComponentProps<"section"> {
  className?: string;
}

export function HowItWorksSection({
  className,
  ...props
}: HowItWorksSectionProps) {
  return (
    <section
      className={cn("bg-secondary w-full py-16 sm:py-20 lg:py-24", className)}
      {...props}
    >
      <Container>
        {/* Section Header */}
        <div>
          <Small className="text-muted-foreground text-xs font-semibold tracking-widest uppercase sm:text-sm">
            HOW IT WORKS
          </Small>
          <H2 className="text-foreground mt-2 font-serif text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
            From Design to Your Door
          </H2>
          <P className="text-muted-foreground mt-3 max-w-2xl text-sm leading-relaxed sm:text-base">
            A simple and transparent process from start to finish.
          </P>
        </div>

        {/* Steps Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {STEPS.map((item) => (
            <Card
              key={item.step}
              className="relative items-center border-none text-center shadow-none"
            >
              {/* Step number: absolute top-left */}
              <div className="bg-secondary text-primary absolute top-4 left-4 flex size-8 items-center justify-center rounded-full font-mono font-semibold">
                {item.step}
              </div>

              {/* Big Centered Icon */}
              <div
                className="mt-4 flex size-16 items-center justify-center rounded-full sm:size-20"
                style={{ backgroundColor: item.iconBg }}
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={40}
                  height={40}
                  className="size-9 object-contain sm:size-10"
                />
              </div>

              <CardHeader className="gap-2">
                <CardTitle className="text-base sm:text-lg">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-foreground text-base leading-relaxed">
                  {item.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
