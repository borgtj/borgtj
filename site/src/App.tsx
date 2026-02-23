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
import { DemoBlock } from "./components/DemoBlock";
import { GallerySection } from "./components/GallerySection";
import { GALLERY_NAV } from "./config/nav";

function App() {
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState("");

  const handleActionClick = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
  };

  return (
    <div className="gallery">
      <aside aria-label="Component gallery navigation" className="gallery-sidebar">
        <div className="gallery-sidebar-title">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Component Gallery
          </a>
          <p className="gallery-sidebar-subtitle">@borgtj/react</p>
        </div>
        <nav className="gallery-nav">
          {GALLERY_NAV.map(({ id, label }) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
      </aside>

      <main className="gallery-main">
        <div className="gallery-inner">
          <header className="gallery-header">
            <h1>Component Gallery</h1>
            <p>
              Standard showcase for @borgtj/react — design tokens, buttons,
              forms, and overlays.
            </p>
          </header>

          <GallerySection
            id="overview"
            title="Overview"
            description="This site demonstrates all components from the library. Use the sidebar to jump to a section."
          >
            <p style={{ fontSize: "0.875rem", color: "var(--gallery-muted)" }}>
              Each section contains live demos. Design tokens can be used for
              custom layouts; components are ready for use in your app.
            </p>
          </GallerySection>

          <GallerySection
            id="tokens"
            title="Design Tokens"
            description="Semantic CSS variables for theming and layout."
          >
            <div className="demo-grid-tokens">
              {[
                { label: "Primary", color: "var(--borg-sys-color-primary)" },
                { label: "Secondary", color: "var(--borg-sys-color-secondary)" },
                { label: "Accent", color: "var(--borg-sys-color-accent)" },
                { label: "Destructive", color: "var(--borg-sys-color-destructive)" },
                { label: "Background", color: "var(--borg-sys-color-bg)" },
                { label: "Muted", color: "var(--borg-sys-color-muted)" },
                { label: "Border", color: "var(--borg-sys-color-border)" },
                { label: "Input", color: "var(--borg-sys-color-input)" },
              ].map(({ label, color }) => (
                <div key={label} className="token-card">
                  <div
                    className="token-swatch"
                    style={{ backgroundColor: color }}
                  />
                  <span className="token-label">{label}</span>
                  <code className="token-var">{color}</code>
                </div>
              ))}
            </div>
          </GallerySection>

          <GallerySection
            id="button"
            title="Button"
            description="Buttons and action button with loading state."
          >
            <div className="demo-grid-2">
              <DemoBlock title="Variants & Sizes">
                <div className="demo-flex">
                  <Button>Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="destructive">Destructive</Button>
                </div>
                <div className="demo-flex" style={{ marginTop: "1rem" }}>
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon" variant="outline">
                    <Settings size={16} />
                  </Button>
                </div>
              </DemoBlock>
              <DemoBlock title="Action Button (async)">
                <div className="demo-flex">
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
                    <Trash2 size={16} style={{ marginRight: "0.5rem" }} />
                    Delete
                  </ActionButton>
                </div>
              </DemoBlock>
            </div>
          </GallerySection>

          <GallerySection
            id="forms"
            title="Forms & Inputs"
            description="Text inputs, OTP, selection controls, and textarea."
          >
            <div className="demo-grid-2">
              <DemoBlock title="Text & OTP">
                <div className="demo-flex-col">
                  <div style={{ display: "grid", gap: "0.375rem" }}>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      type="email"
                      id="email"
                      placeholder="example@domain.com"
                    />
                  </div>
                  <div style={{ display: "grid", gap: "0.375rem" }}>
                    <Label>OTP</Label>
                    <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                      </InputOTPGroup>
                      <span style={{ fontSize: "1.125rem", fontWeight: 500 }}>-</span>
                      <InputOTPGroup>
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </div>
                </div>
              </DemoBlock>
              <DemoBlock title="Selection Controls">
                <div className="demo-flex-col">
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <Switch id="switch-demo" />
                    <Label htmlFor="switch-demo">Switch</Label>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <Checkbox id="check-demo" />
                    <Label htmlFor="check-demo">Checkbox</Label>
                  </div>
                  <div style={{ display: "grid", gap: "0.5rem" }}>
                    <Label>Radio</Label>
                    <RadioGroup defaultValue="a">
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <RadioGroupItem value="a" id="r1" />
                        <Label htmlFor="r1">Option A</Label>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <RadioGroupItem value="b" id="r2" />
                        <Label htmlFor="r2">Option B</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div style={{ display: "grid", gap: "0.5rem" }}>
                    <Label>Select</Label>
                    <Select defaultValue="one">
                      <SelectTrigger style={{ width: "100%" }}>
                        <SelectValue placeholder="Choose…" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="one">One</SelectItem>
                        <SelectItem value="two">Two</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div style={{ display: "grid", gap: "0.375rem" }}>
                    <Label htmlFor="bio">Textarea</Label>
                    <Textarea id="bio" placeholder="Placeholder…" />
                  </div>
                </div>
              </DemoBlock>
            </div>
          </GallerySection>

          <GallerySection
            id="display"
            title="Data Display"
            description="Badges, status, accordion, and tabs."
          >
            <div className="demo-grid-2">
              <DemoBlock title="Badges">
                <div className="demo-flex">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                  <Badge>
                    <Bell size={12} style={{ marginRight: "0.25rem" }} />
                    With icon
                  </Badge>
                </div>
                <div className="demo-flex-col" style={{ marginTop: "1rem", fontSize: "0.875rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <CheckCircle2 size={16} style={{ color: "var(--borg-sys-color-green, green)" }} />
                    <span>Success</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <AlertCircle size={16} style={{ color: "var(--borg-sys-color-destructive)" }} />
                    <span>Error</span>
                  </div>
                </div>
              </DemoBlock>
              <DemoBlock title="Accordion & Tabs">
                <Tabs defaultValue="accordion" style={{ width: "100%" }}>
                  <TabsList style={{ width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                    <TabsTrigger value="accordion">Accordion</TabsTrigger>
                    <TabsTrigger value="info">Info</TabsTrigger>
                  </TabsList>
                  <TabsContent value="accordion" style={{ paddingTop: "1rem" }}>
                    <Accordion type="single" collapsible style={{ width: "100%" }}>
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Accessible?</AccordionTrigger>
                        <AccordionContent>
                          Yes. It follows WAI-ARIA patterns.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>Styled?</AccordionTrigger>
                        <AccordionContent>
                          Yes. Themed by default.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </TabsContent>
                  <TabsContent value="info" style={{ paddingTop: "1rem" }}>
                    <Card>
                      <CardHeader>
                        <CardTitle style={{ display: "flex", alignItems: "center" }}>
                          <Mail size={16} style={{ marginRight: "0.5rem" }} />
                          Tip
                        </CardTitle>
                        <CardDescription>
                          Use tabs to group related content.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p style={{ fontSize: "0.875rem" }}>Content here.</p>
                      </CardContent>
                      <CardFooter style={{ borderTop: "1px solid var(--gallery-border)", paddingTop: "1rem", marginTop: "1rem" }}>
                        <Button variant="link" size="sm">
                          More <ChevronRight size={16} style={{ marginLeft: "0.25rem" }} />
                        </Button>
                      </CardFooter>
                    </Card>
                  </TabsContent>
                </Tabs>
              </DemoBlock>
            </div>
          </GallerySection>

          <GallerySection
            id="overlays"
            title="Overlays"
            description="Context menu and tooltips."
          >
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem", padding: "2rem 0" }}>
              <DemoBlock title="Context Menu">
                <ContextMenu>
                  <ContextMenuTrigger
                    style={{
                      display: "flex",
                      height: "8rem",
                      width: "18rem",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "0.375rem",
                      border: "1px dashed var(--gallery-border)",
                      fontSize: "0.875rem",
                      color: "var(--gallery-muted)",
                    }}
                  >
                    Right-click here
                  </ContextMenuTrigger>
                  <ContextMenuContent>
                    <ContextMenuItem onClick={() => alert("Copied!")}>
                      <Copy size={16} style={{ marginRight: "0.5rem" }} />
                      Copy
                    </ContextMenuItem>
                    <ContextMenuItem>
                      <User size={16} style={{ marginRight: "0.5rem" }} />
                      Profile
                    </ContextMenuItem>
                    <ContextMenuItem variant="destructive">
                      <LogOut size={16} style={{ marginRight: "0.5rem" }} />
                      Logout
                    </ContextMenuItem>
                  </ContextMenuContent>
                </ContextMenu>
              </DemoBlock>
              <DemoBlock title="Tooltip">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline">Hover for tooltip</Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Helper text</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </DemoBlock>
            </div>
          </GallerySection>

          <footer className="gallery-footer">
            Component Gallery · @borgtj/react
          </footer>
        </div>
      </main>
    </div>
  );
}

export default App;
