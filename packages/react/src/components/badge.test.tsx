import { render, screen } from "@testing-library/react";
import { Badge, badgeVariants } from "./badge";

describe("Badge", () => {
  it("渲染为 span 且显示子元素", () => {
    render(<Badge>Label</Badge>);
    const el = screen.getByText("Label");
    expect(el).toBeInTheDocument();
    expect(el.tagName).toBe("SPAN");
  });

  it("默认应用 default variant 的 class", () => {
    render(<Badge>OK</Badge>);
    const el = screen.getByText("OK");
    expect(el).toHaveClass("borg-badge");
    expect(el).toHaveClass("borg-badge--default");
  });

  it("variant 正确映射为 class", () => {
    const { rerender } = render(<Badge variant="secondary">Sec</Badge>);
    let el = screen.getByText("Sec");
    expect(el).toHaveClass("borg-badge--secondary");

    rerender(<Badge variant="destructive">Del</Badge>);
    el = screen.getByText("Del");
    expect(el).toHaveClass("borg-badge--destructive");

    rerender(<Badge variant="outline">Out</Badge>);
    el = screen.getByText("Out");
    expect(el).toHaveClass("borg-badge--outline");
  });

  it("支持通过 className 追加类名", () => {
    render(<Badge className="my-badge">X</Badge>);
    const el = screen.getByText("X");
    expect(el).toHaveClass("borg-badge");
    expect(el).toHaveClass("my-badge");
  });

  it("保留 data-slot", () => {
    render(<Badge>Slot</Badge>);
    expect(screen.getByText("Slot")).toHaveAttribute("data-slot", "badge");
  });
});

describe("badgeVariants", () => {
  it("返回默认 base 与 default variant", () => {
    const classes = badgeVariants();
    expect(classes).toContain("borg-badge");
    expect(classes).toContain("borg-badge--default");
  });

  it("支持传入 variant", () => {
    const classes = badgeVariants({ variant: "outline" });
    expect(classes).toContain("borg-badge--outline");
  });
});
