import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const containerVariants = cva("mx-auto w-full px-4 sm:px-6 lg:px-8", {
  variants: {
    size: {
      default: "max-w-[1300px]",
      sm: "max-w-3xl",
      md: "max-w-5xl",
      lg: "max-w-[1300px]",
      xl: "max-w-[1300px]",
      full: "max-w-full",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface ContainerProps
  extends React.ComponentProps<"div">, VariantProps<typeof containerVariants> {
  as?: React.ElementType;
}

function Container({
  as: Component = "div",
  className,
  size,
  ...props
}: ContainerProps) {
  return (
    <Component
      data-slot="container"
      className={cn(containerVariants({ size, className }))}
      {...props}
    />
  );
}

export { Container, containerVariants, type ContainerProps };
