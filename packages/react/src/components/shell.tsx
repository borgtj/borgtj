import React from "react";
import { cn } from "../lib/utils";

export interface ShellProps extends React.ComponentProps<"div"> {
    header?: React.ReactNode;
    sidebar?: React.ReactNode;
    footer?: React.ReactNode;
}

export function Shell({
    header,
    sidebar,
    footer,
    children,
    className,
    ...props
}: ShellProps) {
    return (
        <div
            className={cn(
                "borg-shell",
                "borg-flex borg-flex-col borg-h-full borg-overflow-hidden borg-rounded-3xl borg-border borg-border-slate-200 borg-bg-white borg-shadow-xl",
                className,
            )}
            {...props}
        >
            {header && <div className="borg-shell-header">{header}</div>}
            <div className="borg-flex borg-flex-1 borg-overflow-hidden">
                {sidebar && (
                    <div className="borg-shell-sidebar borg-border-r borg-border-slate-100">
                        {sidebar}
                    </div>
                )}
                <div className="borg-flex borg-flex-1 borg-flex-col borg-overflow-hidden">
                    <div className="borg-shell-content borg-flex-1 borg-overflow-hidden borg-flex borg-flex-col">
                        {children}
                    </div>
                    {footer && (
                        <div className="borg-shell-footer">{footer}</div>
                    )}
                </div>
            </div>
        </div>
    );
}
