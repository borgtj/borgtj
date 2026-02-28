"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "../lib/utils";

function TooltipProvider({
    delayDuration = 0,
    ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
    return (
        <TooltipPrimitive.Provider
            data-slot="tooltip-provider"
            delayDuration={delayDuration}
            {...props}
        />
    );
}

function Tooltip({
    ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
    return (
        <TooltipProvider>
            <TooltipPrimitive.Root data-slot="tooltip" {...props} />
        </TooltipProvider>
    );
}

const TooltipTrigger = React.forwardRef<
    React.ElementRef<typeof TooltipPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Trigger>
>(({ ...props }, ref) => (
    <TooltipPrimitive.Trigger
        ref={ref}
        data-slot="tooltip-trigger"
        {...props}
    />
));
TooltipTrigger.displayName = TooltipPrimitive.Trigger.displayName;

const TooltipContent = React.forwardRef<
    React.ElementRef<typeof TooltipPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> & {
        sideOffset?: number;
    }
>(({ className, sideOffset = 0, children, ...props }, ref) => (
    <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content
            ref={ref}
            data-slot="tooltip-content"
            sideOffset={sideOffset}
            className={cn("borg-tooltip-content", className)}
            {...props}
        >
            {children}
            <TooltipPrimitive.Arrow className="borg-tooltip-arrow" />
        </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
