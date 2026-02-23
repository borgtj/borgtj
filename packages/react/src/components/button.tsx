import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva("borg-button", {
    variants: {
        variant: {
            default: "borg-button--default",
            destructive: "borg-button--destructive",
            outline: "borg-button--outline",
            secondary: "borg-button--secondary",
            ghost: "borg-button--ghost",
            link: "borg-button--link",
        },
        size: {
            default: "borg-button--size-default",
            sm: "borg-button--size-sm",
            lg: "borg-button--size-lg",
            icon: "borg-button--size-icon",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});

const Button = React.forwardRef<
    HTMLButtonElement,
    React.ComponentProps<"button"> &
        VariantProps<typeof buttonVariants> & {
            asChild?: boolean;
        }
>(function Button(
    { className, variant, size, asChild = false, ...props },
    ref
) {
    const Comp = asChild ? Slot : "button";

    return (
        <Comp
            ref={ref}
            data-slot="button"
            className={cn(buttonVariants({ variant, size, className }))}
            {...props}
        />
    );
});

Button.displayName = "Button";

export { Button, buttonVariants };
