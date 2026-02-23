import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button, buttonVariants } from "./button";

describe("Button", () => {
  it("渲染为 button 且可显示子元素", () => {
    render(<Button>Click me</Button>);
    const btn = screen.getByRole("button", { name: /click me/i });
    expect(btn).toBeInTheDocument();
    expect(btn.tagName).toBe("BUTTON");
  });

  it("默认应用 default variant 和 default size 的 class", () => {
    render(<Button>OK</Button>);
    const btn = screen.getByRole("button");
    expect(btn).toHaveClass("borg-button");
    expect(btn).toHaveClass("borg-button--default");
    expect(btn).toHaveClass("borg-button--size-default");
  });

  it("variant 和 size 正确映射为 class", () => {
    const { rerender } = render(<Button variant="destructive" size="lg">Delete</Button>);
    let btn = screen.getByRole("button");
    expect(btn).toHaveClass("borg-button--destructive");
    expect(btn).toHaveClass("borg-button--size-lg");

    rerender(<Button variant="outline" size="sm">Small</Button>);
    btn = screen.getByRole("button");
    expect(btn).toHaveClass("borg-button--outline");
    expect(btn).toHaveClass("borg-button--size-sm");
  });

  it("支持通过 className 追加类名", () => {
    render(<Button className="custom">Custom</Button>);
    const btn = screen.getByRole("button");
    expect(btn).toHaveClass("borg-button");
    expect(btn).toHaveClass("custom");
  });

  it("点击时触发 onClick", async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    await userEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("disabled 时不可点击", () => {
    render(<Button disabled>Disabled</Button>);
    const btn = screen.getByRole("button");
    expect(btn).toBeDisabled();
  });
});

describe("buttonVariants", () => {
  it("返回默认 base 与 variant/size class", () => {
    const classes = buttonVariants();
    expect(classes).toContain("borg-button");
    expect(classes).toContain("borg-button--default");
    expect(classes).toContain("borg-button--size-default");
  });

  it("支持传入 variant 和 size", () => {
    const classes = buttonVariants({ variant: "secondary", size: "icon" });
    expect(classes).toContain("borg-button--secondary");
    expect(classes).toContain("borg-button--size-icon");
  });
});
