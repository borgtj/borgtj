import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input } from "./input";

describe("Input", () => {
  it("渲染为 input 且支持受控 value", () => {
    render(<Input placeholder="Enter name" />);
    const input = screen.getByPlaceholderText("Enter name");
    expect(input).toBeInTheDocument();
    expect(input.tagName).toBe("INPUT");
  });

  it("默认带有 borg-input 和 data-slot", () => {
    render(<Input aria-label="Field" />);
    const input = screen.getByRole("textbox", { name: "Field" });
    expect(input).toHaveClass("borg-input");
    expect(input).toHaveAttribute("data-slot", "input");
  });

  it("支持通过 className 追加类名", () => {
    render(<Input className="custom-input" aria-label="X" />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveClass("borg-input");
    expect(input).toHaveClass("custom-input");
  });

  it("未传 type 时渲染为文本输入，传 type=number 时为数字输入", () => {
    render(<Input aria-label="T" />);
    expect(screen.getByRole("textbox", { name: "T" })).toBeInTheDocument();

    render(<Input type="number" aria-label="N" />);
    const num = screen.getByRole("spinbutton", { name: "N" });
    expect(num).toHaveAttribute("type", "number");
  });

  it("受控模式下 value 与 onChange 正确联动", async () => {
    const handleChange = jest.fn();
    render(
      <Input value="" onChange={handleChange} aria-label="Controlled" />
    );
    const input = screen.getByRole("textbox");
    await userEvent.type(input, "a");
    expect(handleChange).toHaveBeenCalled();
  });

  it("支持 disabled", () => {
    render(<Input disabled aria-label="D" />);
    expect(screen.getByRole("textbox")).toBeDisabled();
  });
});
