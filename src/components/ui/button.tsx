import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-soft text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-gradient-warm text-primary-foreground shadow-soft hover:shadow-warm hover:scale-105 active:scale-95",
        primary: "bg-primary text-primary-foreground shadow-soft hover:bg-primary/90 hover:shadow-warm hover:scale-105 active:scale-95",
        secondary: "bg-gradient-calm text-secondary-foreground shadow-soft hover:shadow-warm hover:scale-105 active:scale-95",
        soft: "bg-primary-soft text-primary hover:bg-primary hover:text-primary-foreground shadow-soft hover:shadow-warm hover:scale-105 active:scale-95",
        outline: "border-2 border-primary bg-background text-primary hover:bg-gradient-warm hover:text-primary-foreground hover:border-transparent shadow-soft hover:shadow-warm hover:scale-105 active:scale-95",
        ghost: "text-primary hover:bg-primary-soft hover:text-primary shadow-none hover:shadow-soft hover:scale-105 active:scale-95",
        destructive: "bg-destructive text-destructive-foreground shadow-soft hover:bg-destructive/90 hover:shadow-warm hover:scale-105 active:scale-95",
        success: "bg-success text-success-foreground shadow-soft hover:bg-success/90 hover:shadow-warm hover:scale-105 active:scale-95",
        link: "text-primary underline-offset-4 hover:underline hover:scale-105 active:scale-95",
      },
      size: {
        sm: "h-9 rounded-md px-3 text-xs",
        default: "h-11 px-6 py-2",
        lg: "h-14 rounded-soft px-8 text-base font-semibold",
        xl: "h-16 rounded-soft px-10 text-lg font-semibold",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
