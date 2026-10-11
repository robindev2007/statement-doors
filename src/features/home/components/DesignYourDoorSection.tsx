import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { H2, P } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

import designDoorImg from "../../../../public/images/design-your-door/design-your-door.png";

interface DesignYourDoorSectionProps extends React.ComponentProps<"section"> {
  className?: string;
}

export function DesignYourDoorSection({
  className,
  ...props
}: DesignYourDoorSectionProps) {
  return (
    <section
      className={cn(
        "relative w-full overflow-hidden bg-[#F5F2EE] pt-12 pb-0 sm:pt-16 md:pt-20 lg:pt-24",
        className,
      )}
      {...props}
    >
      <div className="flex flex-col lg:flex-row lg:items-end">
        {/* Left Side: 50% width on desktop, locked to container, centered with image height */}
        <div className="flex w-full justify-end lg:w-1/2 lg:self-center lg:py-6 xl:py-10">
          <div className="w-full max-w-[650px] px-4 sm:px-6 md:px-8 lg:pr-6 lg:pl-8 xl:pr-12 2xl:pr-16">
            <H2 className="text-foreground font-sans text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
              Design Your Door
            </H2>

            <P className="text-muted-foreground mt-3 max-w-xl text-sm leading-relaxed sm:mt-4 sm:text-base lg:text-lg">
              Create your perfect front door in minutes. Choose the style,
              colour, glass, handle and more with our easy-to-use door
              configurator.
            </P>

            <Button
              variant="theme"
              size="lg"
              className="mt-6 flex w-fit items-center gap-2 transition-all duration-300 hover:gap-3.5 sm:mt-8 lg:mt-10"
              render={
                <Link href="/design-your-door">
                  Start Designing
                  <ArrowRight className="size-4" />
                </Link>
              }
            />
          </div>
        </div>

        {/* Right Side: 50% width on desktop, image bottom touches section bottom */}
        <div className="mt-8 flex w-full items-end justify-center px-4 sm:px-6 lg:mt-0 lg:w-1/2 lg:justify-end lg:px-0">
          <Image
            src={designDoorImg}
            alt="Design Your Door - Interactive Door Configurator"
            placeholder="blur"
            className="block h-auto w-full max-w-lg object-contain object-bottom align-bottom sm:max-w-xl md:max-w-2xl lg:max-w-none lg:object-right-bottom"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
