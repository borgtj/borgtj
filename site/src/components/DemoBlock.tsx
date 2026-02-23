import type { ReactNode } from "react";

export interface DemoBlockProps {
  title: string;
  children: ReactNode;
}

/** 单个组件演示块：卡片标题 + 内容 */
export function DemoBlock({ title, children }: DemoBlockProps) {
  return (
    <div className="demo-block">
      <h3 className="demo-block-title">{title}</h3>
      {children}
    </div>
  );
}
