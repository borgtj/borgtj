import type { ReactNode } from "react";

export interface GallerySectionProps {
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
}

/** 画廊单节：标题 + 描述 + 演示内容 */
export function GallerySection({
  id,
  title,
  description,
  children,
}: GallerySectionProps) {
  return (
    <section id={id} className="gallery-section">
      <header>
        <h2>{title}</h2>
        {description && <p className="gallery-section-desc">{description}</p>}
      </header>
      <div className="gallery-section-content">{children}</div>
    </section>
  );
}
