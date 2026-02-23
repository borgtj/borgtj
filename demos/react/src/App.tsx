import { useState } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
    ActionButton,
    Badge,
    Button,
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    Checkbox,
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuTrigger,
    Input,
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
    Label,
    RadioGroup,
    RadioGroupItem,
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    Switch,
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
    Textarea,
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@borgtj/react";
import "@borgtj/react/styles.css";
import {
    Settings,
    Trash2,
    Mail,
    Copy,
    User,
    LogOut,
    ChevronRight,
    Bell,
    CheckCircle2,
    AlertCircle,
} from "lucide-react";

function App() {
    const [loading, setLoading] = useState(false);
    const [otp, setOtp] = useState("");

    const handleActionClick = async () => {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setLoading(false);
    };

    return (
        <div className="borg-min-h-screen borg-bg-[var(--borg-sys-color-bg)] borg-text-[var(--borg-sys-color-fg)] borg-p-8 borg-font-[var(--borg-sys-font-body)]">
            <header className="borg-max-w-6xl borg-mx-auto borg-mb-12 borg-border-b borg-border-[var(--borg-sys-color-border)] borg-pb-6">
                <h1 className="borg-text-4xl borg-font-bold borg-font-[var(--borg-sys-font-display)]">
                    @borgtj/react Design System
                </h1>
                <p className="borg-mt-2 borg-text-lg borg-opacity-70">
                    A premium, self-contained component library for Fluence
                    applications.
                </p>
            </header>

            <main className="borg-max-w-6xl borg-mx-auto borg-flex borg-flex-col borg-gap-16">
                {/* 1. Design System Tokens */}
                <section>
                    <header className="borg-mb-6">
                        <h2 className="borg-text-2xl borg-font-semibold">
                            1. Design System Tokens
                        </h2>
                        <p className="borg-opacity-70">
                            Directly use semantic CSS variables for custom
                            layouts.
                        </p>
                    </header>
                    <div className="borg-grid borg-grid-cols-2 md:borg-grid-cols-4 borg-gap-4">
                        <TokenCard
                            label="Primary"
                            color="var(--borg-sys-color-primary)"
                        />
                        <TokenCard
                            label="Secondary"
                            color="var(--borg-sys-color-secondary)"
                        />
                        <TokenCard
                            label="Accent"
                            color="var(--borg-sys-color-accent)"
                        />
                        <TokenCard
                            label="Destructive"
                            color="var(--borg-sys-color-destructive)"
                        />
                        <TokenCard
                            label="Background"
                            color="var(--borg-sys-color-bg)"
                        />
                        <TokenCard
                            label="Muted"
                            color="var(--borg-sys-color-muted)"
                        />
                        <TokenCard
                            label="Border"
                            color="var(--borg-sys-color-border)"
                        />
                        <TokenCard
                            label="Input"
                            color="var(--borg-sys-color-input)"
                        />
                    </div>
                </section>

                {/* 2. Standard Components */}
                <section>
                    <header className="borg-mb-6">
                        <h2 className="borg-text-2xl borg-font-semibold">
                            2. General Components
                        </h2>
                        <p className="borg-opacity-70">
                            Buttons, Badges, and interactive elements.
                        </p>
                    </header>

                    <div className="borg-grid borg-grid-cols-1 md:borg-grid-cols-2 borg-gap-8">
                        <DemoCard title="Buttons & Variants">
                            <div className="borg-flex borg-flex-wrap borg-gap-3">
                                <Button>Primary</Button>
                                <Button variant="secondary">Secondary</Button>
                                <Button variant="outline">Outline</Button>
                                <Button variant="ghost">Ghost</Button>
                                <Button variant="destructive">
                                    Destructive
                                </Button>
                            </div>
                            <div className="borg-flex borg-flex-wrap borg-gap-3 borg-mt-4">
                                <Button size="sm">Small</Button>
                                <Button size="default">Default</Button>
                                <Button size="lg">Large</Button>
                                <Button size="icon" variant="outline">
                                    <Settings className="borg-size-4" />
                                </Button>
                            </div>
                        </DemoCard>

                        <DemoCard title="Action Button (Async states)">
                            <div className="borg-flex borg-flex-wrap borg-gap-3">
                                <ActionButton
                                    isLoading={loading}
                                    onClick={handleActionClick}
                                >
                                    Async Action
                                </ActionButton>
                                <ActionButton
                                    variant="destructive"
                                    isLoading={loading}
                                    onClick={handleActionClick}
                                >
                                    <Trash2 className="borg-size-4 borg-mr-2" />
                                    Delete
                                </ActionButton>
                            </div>
                        </DemoCard>
                    </div>
                </section>

                {/* 3. Form Components */}
                <section>
                    <header className="borg-mb-6">
                        <h2 className="borg-text-2xl borg-font-semibold">
                            3. Forms & Inputs
                        </h2>
                        <p className="borg-opacity-70">
                            Rich input types and selection components.
                        </p>
                    </header>

                    <div className="borg-grid borg-grid-cols-1 md:borg-grid-cols-2 borg-gap-8">
                        <DemoCard title="Text & OTP Inputs">
                            <div className="borg-flex borg-flex-col borg-gap-4">
                                <div className="borg-grid borg-w-full borg-items-center borg-gap-1-5">
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input
                                        type="email"
                                        id="email"
                                        placeholder="example@fluence.com"
                                    />
                                </div>
                                <div className="borg-grid borg-w-full borg-items-center borg-gap-1-5">
                                    <Label>Verification Code (OTP)</Label>
                                    <InputOTP
                                        maxLength={6}
                                        value={otp}
                                        onChange={setOtp}
                                    >
                                        <InputOTPGroup>
                                            <InputOTPSlot index={0} />
                                            <InputOTPSlot index={1} />
                                            <InputOTPSlot index={2} />
                                        </InputOTPGroup>
                                        <div className="borg-text-lg borg-font-[500]">
                                            -
                                        </div>
                                        <InputOTPGroup>
                                            <InputOTPSlot index={3} />
                                            <InputOTPSlot index={4} />
                                            <InputOTPSlot index={5} />
                                        </InputOTPGroup>
                                    </InputOTP>
                                </div>
                            </div>
                        </DemoCard>

                        <DemoCard title="Selection Controls">
                            <div className="borg-flex borg-flex-col borg-gap-6">
                                <div className="borg-flex borg-items-center borg-gap-4">
                                    <Switch id="airplane-mode" />
                                    <Label htmlFor="airplane-mode">
                                        Airplane Mode
                                    </Label>
                                </div>
                                <div className="borg-flex borg-items-center borg-space-x-2">
                                    <Checkbox id="terms" />
                                    <Label htmlFor="terms">
                                        Accept terms and conditions
                                    </Label>
                                </div>
                                <div className="borg-grid borg-gap-2">
                                    <Label>Experience Level</Label>
                                    <RadioGroup defaultValue="comfortable">
                                        <div className="borg-flex borg-items-center borg-space-x-2">
                                            <RadioGroupItem
                                                value="default"
                                                id="r1"
                                            />
                                            <Label htmlFor="r1">Beginner</Label>
                                        </div>
                                        <div className="borg-flex borg-items-center borg-space-x-2">
                                            <RadioGroupItem
                                                value="comfortable"
                                                id="r2"
                                            />
                                            <Label htmlFor="r2">
                                                Intermediate
                                            </Label>
                                        </div>
                                    </RadioGroup>
                                </div>
                                <div className="borg-grid borg-gap-2">
                                    <Label>Project Scope</Label>
                                    <Select defaultValue="fluence">
                                        <SelectTrigger className="borg-w-full">
                                            <SelectValue placeholder="Select a project" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="fluence">
                                                Fluence Core
                                            </SelectItem>
                                            <SelectItem value="builder">
                                                FLF Builder
                                            </SelectItem>
                                            <SelectItem value="demo">
                                                Demo Site
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="borg-grid borg-w-full borg-items-center borg-gap-1-5">
                                    <Label htmlFor="bio">Biography</Label>
                                    <Textarea
                                        id="bio"
                                        placeholder="Tell us about yourself..."
                                    />
                                </div>
                            </div>
                        </DemoCard>
                    </div>
                </section>

                {/* 4. Display & Feedback */}
                <section>
                    <header className="borg-mb-6">
                        <h2 className="borg-text-2xl borg-font-semibold">
                            4. Data Display & Overlay
                        </h2>
                        <p className="borg-opacity-70">
                            Accordion, Tabs, and Tooltips.
                        </p>
                    </header>

                    <div className="borg-grid borg-grid-cols-1 md:borg-grid-cols-2 borg-gap-8">
                        <DemoCard title="Badges & Status">
                            <div className="borg-flex borg-flex-wrap borg-gap-2">
                                <Badge>Default</Badge>
                                <Badge variant="secondary">Secondary</Badge>
                                <Badge variant="outline">Outline</Badge>
                                <Badge variant="destructive">Destructive</Badge>
                                <Badge className="borg-bg-[var(--borg-sys-color-accent)] borg-text-[var(--borg-sys-color-accent-fg)]">
                                    <Bell className="borg-size-3 borg-mr-1" />
                                    Custom Accent
                                </Badge>
                            </div>
                            <div className="borg-flex borg-flex-col borg-gap-4 borg-mt-6">
                                <div className="borg-flex borg-items-center borg-gap-2 borg-text-sm">
                                    <CheckCircle2 className="borg-size-4 borg-text-green-600" />
                                    <span>System operational</span>
                                </div>
                                <div className="borg-flex borg-items-center borg-gap-2 borg-text-sm">
                                    <AlertCircle className="borg-size-4 borg-text-red-600" />
                                    <span>Sync required</span>
                                </div>
                            </div>
                        </DemoCard>

                        <DemoCard title="Accordion & Tabs">
                            <Tabs
                                defaultValue="accordion"
                                className="borg-w-full"
                            >
                                <TabsList className="borg-grid borg-w-full borg-grid-cols-2">
                                    <TabsTrigger value="accordion">
                                        Accordion
                                    </TabsTrigger>
                                    <TabsTrigger value="tabs">Info</TabsTrigger>
                                </TabsList>
                                <TabsContent
                                    value="accordion"
                                    className="borg-pt-4"
                                >
                                    <Accordion
                                        type="single"
                                        collapsible
                                        className="borg-w-full"
                                    >
                                        <AccordionItem value="item-1">
                                            <AccordionTrigger>
                                                Is it accessible?
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                Yes. It adheres to the WAI-ARIA
                                                design pattern.
                                            </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem value="item-2">
                                            <AccordionTrigger>
                                                Is it unstyled?
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                No. It comes with premium
                                                Fluence styling by default.
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </TabsContent>
                                <TabsContent value="tabs" className="borg-pt-4">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="borg-flex borg-items-center">
                                                <Mail className="borg-size-4 borg-mr-2" />
                                                Usage Tip
                                            </CardTitle>
                                            <CardDescription>
                                                How to use Tabs effectively.
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="borg-space-y-2">
                                            <p className="borg-text-sm">
                                                Use tabs to organize related
                                                content in a compact space.
                                            </p>
                                        </CardContent>
                                        <CardFooter className="borg-border-t borg-pt-4 borg-mt-4">
                                            <Button variant="link" size="sm">
                                                Learn more
                                                <ChevronRight className="borg-size-4 borg-ml-1" />
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </TabsContent>
                            </Tabs>
                        </DemoCard>

                        <DemoCard title="Context Menu & Tooltips">
                            <div className="borg-flex borg-flex-col borg-gap-8 borg-items-center borg-justify-center borg-h-full borg-py-8">
                                <ContextMenu>
                                    <ContextMenuTrigger className="borg-flex borg-h-[150px] borg-w-[300px] borg-items-center borg-justify-center borg-rounded-md borg-border borg-border-dashed borg-text-sm">
                                        Right-click here for menu
                                    </ContextMenuTrigger>
                                    <ContextMenuContent>
                                        <ContextMenuItem
                                            onClick={() => alert("Copied!")}
                                        >
                                            <Copy className="borg-size-4 borg-mr-2" />
                                            Copy
                                        </ContextMenuItem>
                                        <ContextMenuItem>
                                            <User className="borg-size-4 borg-mr-2" />
                                            Profile
                                        </ContextMenuItem>
                                        <ContextMenuItem variant="destructive">
                                            <LogOut className="borg-size-4 borg-mr-2" />
                                            Logout
                                        </ContextMenuItem>
                                    </ContextMenuContent>
                                </ContextMenu>

                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button variant="outline">
                                                Hover for Tooltip
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>This is a helper tooltip</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                        </DemoCard>
                    </div>
                </section>

                <footer className="borg-text-center borg-py-12 borg-opacity-50 borg-text-sm">
                    &copy; 2026 Fluence Design System. All rights reserved.
                </footer>
            </main>
        </div>
    );
}

function TokenCard({ label, color }: { label: string; color: string }) {
    return (
        <div className="borg-flex borg-flex-col borg-gap-2 borg-p-3 borg-border borg-border-[var(--borg-sys-color-border)] borg-rounded-[var(--borg-p-radius-lg)] borg-bg-white">
            <div
                className="borg-h-12 borg-w-full borg-rounded-[var(--borg-p-radius-md)] borg-border"
                style={{ backgroundColor: color }}
            />
            <span className="borg-text-xs borg-font-bold">{label}</span>
            <code className="borg-text-[10px] borg-opacity-60">{color}</code>
        </div>
    );
}

function DemoCard({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <Card className="borg-flex borg-flex-col">
            <CardHeader>
                <CardTitle className="borg-text-lg">{title}</CardTitle>
            </CardHeader>
            <CardContent className="borg-flex-1">{children}</CardContent>
        </Card>
    );
}

export default App;
