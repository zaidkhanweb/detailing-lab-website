import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-sm font-display font-bold tracking-wide transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-45 active:translate-y-px [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground",
        accent: "bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground",
        outline:
          "border border-border-strong bg-transparent text-foreground hover:border-accent hover:text-accent",
        ghost: "bg-transparent text-muted-foreground hover:text-foreground hover:bg-surface-2",
        surface: "surface-panel text-foreground hover:border-accent/60 hover:bg-surface-2",
      },
      size: {
        sm: "h-10 px-4 text-[0.8rem]",
        md: "h-12 px-6 text-sm",
        lg: "h-14 px-8 text-[0.95rem]",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    loading?: boolean;
  };

export function Button({
  className,
  variant,
  size,
  asChild = false,
  loading = false,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading ? (
        <>
          <Loader2 className="animate-spin" aria-hidden="true" />
          <span>Sending…</span>
        </>
      ) : (
        children
      )}
    </Comp>
  );
}

export default Button;
