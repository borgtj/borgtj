/** 设计系统主题选项：id 对应 CSS 类名 theme-{id} */
export const THEMES = [
    { id: "borg-light", label: "Borg Light" },
    { id: "borg-dark", label: "Borg Dark" },
    { id: "solaris-light", label: "Solaris Light" },
    { id: "ocean-light", label: "Ocean Light" },
    { id: "ocean-dark", label: "Ocean Dark" },
] as const;

export type ThemeId = (typeof THEMES)[number]["id"];
