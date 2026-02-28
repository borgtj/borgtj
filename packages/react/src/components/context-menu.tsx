"use client";

import * as React from "react";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";

import { cn } from "../lib/utils";

function ContextMenu({
    ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Root>) {
    return <ContextMenuPrimitive.Root data-slot="context-menu" {...props} />;
}

const ContextMenuTrigger = React.forwardRef<
    React.ElementRef<typeof ContextMenuPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Trigger>
>(({ ...props }, ref) => (
    <ContextMenuPrimitive.Trigger
        ref={ref}
        data-slot="context-menu-trigger"
        {...props}
    />
));
ContextMenuTrigger.displayName = ContextMenuPrimitive.Trigger.displayName;

const ContextMenuGroup = React.forwardRef<
    React.ElementRef<typeof ContextMenuPrimitive.Group>,
    React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Group>
>(({ ...props }, ref) => (
    <ContextMenuPrimitive.Group
        ref={ref}
        data-slot="context-menu-group"
        {...props}
    />
));
ContextMenuGroup.displayName = ContextMenuPrimitive.Group.displayName;

const ContextMenuPortal = ContextMenuPrimitive.Portal;

const ContextMenuSub = ContextMenuPrimitive.Sub;

const ContextMenuRadioGroup = React.forwardRef<
    React.ElementRef<typeof ContextMenuPrimitive.RadioGroup>,
    React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioGroup>
>(({ ...props }, ref) => (
    <ContextMenuPrimitive.RadioGroup
        ref={ref}
        data-slot="context-menu-radio-group"
        {...props}
    />
));
ContextMenuRadioGroup.displayName = ContextMenuPrimitive.RadioGroup.displayName;

const ContextMenuSubTrigger = React.forwardRef<
    React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
    React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
        inset?: boolean;
    }
>(({ className, inset, children, ...props }, ref) => (
    <ContextMenuPrimitive.SubTrigger
        ref={ref}
        data-slot="context-menu-sub-trigger"
        data-inset={inset}
        className={cn(
            "borg-context-menu-item borg-context-menu-sub-trigger",
            className,
        )}
        {...props}
    >
        {children}
        <ChevronRightIcon className="borg-context-menu-shortcut" />
    </ContextMenuPrimitive.SubTrigger>
));
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;

const ContextMenuSubContent = React.forwardRef<
    React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
    React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
    <ContextMenuPrimitive.SubContent
        ref={ref}
        data-slot="context-menu-sub-content"
        className={cn(
            "borg-context-menu-content borg-context-menu-sub-content",
            className,
        )}
        {...props}
    />
));
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName;

const ContextMenuContent = React.forwardRef<
    React.ElementRef<typeof ContextMenuPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
    <ContextMenuPrimitive.Portal>
        <ContextMenuPrimitive.Content
            ref={ref}
            data-slot="context-menu-content"
            className={cn("borg-context-menu-content", className)}
            {...props}
        />
    </ContextMenuPrimitive.Portal>
));
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;

const ContextMenuItem = React.forwardRef<
    React.ElementRef<typeof ContextMenuPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
        inset?: boolean;
        variant?: "default" | "destructive";
    }
>(({ className, inset, variant = "default", ...props }, ref) => (
    <ContextMenuPrimitive.Item
        ref={ref}
        data-slot="context-menu-item"
        data-inset={inset}
        data-variant={variant}
        className={cn(
            "borg-context-menu-item",
            variant === "destructive"
                ? "borg-context-menu-item--destructive"
                : "",
            className,
        )}
        {...props}
    />
));
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;

const ContextMenuCheckboxItem = React.forwardRef<
    React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
    React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
    <ContextMenuPrimitive.CheckboxItem
        ref={ref}
        data-slot="context-menu-checkbox-item"
        className={cn(
            "focus:bg-accent focus:text-accent-foreground outline-hidden relative flex cursor-default select-none items-center gap-2 rounded-sm py-1.5 pl-8 pr-2 text-sm data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
            className,
        )}
        checked={checked}
        {...props}
    >
        <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
            <ContextMenuPrimitive.ItemIndicator>
                <CheckIcon className="borg-context-menu-icon" />
            </ContextMenuPrimitive.ItemIndicator>
        </span>
        {children}
    </ContextMenuPrimitive.CheckboxItem>
));
ContextMenuCheckboxItem.displayName =
    ContextMenuPrimitive.CheckboxItem.displayName;

const ContextMenuRadioItem = React.forwardRef<
    React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
    React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
    <ContextMenuPrimitive.RadioItem
        ref={ref}
        data-slot="context-menu-radio-item"
        className={cn(
            "focus:bg-accent focus:text-accent-foreground outline-hidden relative flex cursor-default select-none items-center gap-2 rounded-sm py-1.5 pl-8 pr-2 text-sm data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
            className,
        )}
        {...props}
    >
        <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
            <ContextMenuPrimitive.ItemIndicator>
                <CircleIcon className="borg-context-menu-icon-small" />
            </ContextMenuPrimitive.ItemIndicator>
        </span>
        {children}
    </ContextMenuPrimitive.RadioItem>
));
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;

const ContextMenuLabel = React.forwardRef<
    React.ElementRef<typeof ContextMenuPrimitive.Label>,
    React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
        inset?: boolean;
    }
>(({ className, inset, ...props }, ref) => (
    <ContextMenuPrimitive.Label
        ref={ref}
        data-slot="context-menu-label"
        data-inset={inset}
        className={cn("borg-context-menu-label", className)}
        {...props}
    />
));
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;

const ContextMenuSeparator = React.forwardRef<
    React.ElementRef<typeof ContextMenuPrimitive.Separator>,
    React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
    <ContextMenuPrimitive.Separator
        ref={ref}
        data-slot="context-menu-separator"
        className={cn("borg-context-menu-separator", className)}
        {...props}
    />
));
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName;

function ContextMenuShortcut({
    className,
    ...props
}: React.ComponentProps<"span">) {
    return (
        <span
            data-slot="context-menu-shortcut"
            className={cn("borg-context-menu-shortcut", className)}
            {...props}
        />
    );
}

export {
    ContextMenu,
    ContextMenuTrigger,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuCheckboxItem,
    ContextMenuRadioItem,
    ContextMenuLabel,
    ContextMenuSeparator,
    ContextMenuShortcut,
    ContextMenuGroup,
    ContextMenuPortal,
    ContextMenuSub,
    ContextMenuSubContent,
    ContextMenuSubTrigger,
    ContextMenuRadioGroup,
};
