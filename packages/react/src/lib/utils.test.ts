import { cn } from "./utils";

describe("cn", () => {
  it("合并单个类名", () => {
    expect(cn("a")).toBe("a");
  });

  it("合并多个类名", () => {
    expect(cn("a", "b")).toBe("a b");
  });

  it("忽略 falsy 值", () => {
    expect(cn("a", false, "b", null, undefined, 0, "c")).toBe("a b c");
  });

  it("合并条件类名（对象形式）", () => {
    expect(cn("base", { active: true, disabled: false })).toBe("base active");
  });

  it("合并数组类名", () => {
    expect(cn(["a", "b"], "c")).toBe("a b c");
  });
});
