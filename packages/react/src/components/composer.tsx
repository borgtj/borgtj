import React from "react";
import { cn } from "../lib/utils";

export interface ComposerProps extends React.ComponentProps<"div"> {
    actions?: React.ReactNode;
}

export function Composer({
    actions,
    children,
    className,
    ...props
}: ComposerProps) {
    return (
        <div
            className={cn(
                "borg-composer",
                "borg-flex borg-items-center borg-gap-2 borg-p-4 borg-bg-white",
                className,
            )}
            {...props}
        >
            <div className="borg-composer-input-wrapper borg-flex-1 borg-flex borg-items-center">
                {children}
            </div>
            {actions && (
                <div className="borg-composer-actions borg-flex borg-items-center borg-gap-2">
                    {actions}
                </div>
            )}
        </div>
    );
}
