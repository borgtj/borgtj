import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./button";

export interface FABProps extends React.ComponentProps<typeof Button> {
    position?:
        | "bottom-right"
        | "bottom-left"
        | "top-right"
        | "top-left"
        | "none";
}

const FAB = React.forwardRef<HTMLButtonElement, FABProps>(function FAB(
    { className, position = "bottom-right", size = "icon", ...props },
    ref,
) {
    const positionClasses = {
        "bottom-right": "borg-fixed borg-bottom-8 borg-right-8",
        "bottom-left": "borg-fixed borg-bottom-8 borg-left-8",
        "top-right": "borg-fixed borg-top-8 borg-right-8",
        "top-left": "borg-fixed borg-top-8 borg-left-8",
        none: "",
    };

    return (
        <Button
            ref={ref}
            size={size}
            className={cn(
                "borg-fab borg-rounded-full borg-shadow-lg borg-transition-transform hover:borg-scale-110 active:borg-scale-95",
                position !== "none" && positionClasses[position],
                className,
            )}
            {...props}
        />
    );
});

FAB.displayName = "FAB";

export { FAB };
