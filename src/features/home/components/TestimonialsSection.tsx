import * as React from "react";

import { Container } from "@/components/reuseables/container";
import { Card, CardContent } from "@/components/ui/card";
import { H2, Small } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  location: string;
  rating?: number;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "testimonial-1",
    quote:
      "Amazing quality and service. The door looks incredible and really transforms our home.",
    author: "Sarah L.",
    location: "Kent",
    rating: 5,
  },
  {
    id: "testimonial-2",
    quote:
      "From design to installation, everything was smooth. Highly recommend Statement Doors.",
    author: "James T.",
    location: "London",
    rating: 5,
  },
  {
    id: "testimonial-3",
    quote:
      "Great communication and excellent build quality. Worth every penny.",
    author: "Aisha M.",
    location: "Essex",
    rating: 5,
  },
  {
    id: "testimonial-4",
    quote:
      "Our new door is exactly what we wanted. Modern, secure and looks stunning.",
    author: "Daniel K.",
    location: "Surrey",
    rating: 5,
  },
];

interface TestimonialsSectionProps extends React.ComponentProps<"section"> {
  className?: string;
}

export function TestimonialsSection({
  className,
  ...props
}: TestimonialsSectionProps) {
  return (
    <section
      className={cn(
        "font-inter bg-secondary w-full py-16 sm:py-20 lg:py-24",
        className,
      )}
      {...props}
    >
      <Container>
        {/* Section Header */}
        <div>
          <Small className="text-muted-foreground text-xs font-semibold tracking-widest uppercase sm:text-sm">
            TRUSTED BY HOMEOWNERS
          </Small>
          <H2 className="text-foreground mt-2 font-serif text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
            What Our Customers Say
          </H2>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {TESTIMONIALS.map((item) => (
            <Card
              key={item.id}
              className="relative flex h-full flex-col justify-between border-none p-6 shadow-none sm:p-7"
            >
              <CardContent className="flex flex-1 flex-col justify-between p-0">
                <div>
                  {/* Star rating (sharp, non-rounded polygon) */}
                  <div className="flex items-center gap-1 text-[#CCA463]">
                    {Array.from({ length: item.rating ?? 5 }).map((_, i) => (
                      <svg
                        key={i}
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-4 text-[#CCA463]"
                      >
                        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-foreground mt-4 text-sm leading-relaxed sm:text-base">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Author & Location: border removed */}
                <div className="mt-6 pt-1">
                  <p className="text-foreground text-sm font-semibold">
                    {item.author}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {item.location}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
