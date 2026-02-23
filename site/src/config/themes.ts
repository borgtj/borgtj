/** 设计系统主题选项：id 对应 CSS 类名 theme-{id} */
export const THEMES = [
    { id: "borg-light", label: "Borg Light" },
    { id: "borg-dark", label: "Borg Dark" },
    { id: "solarized-light", label: "Solarized Light" },
    { id: "solarized-dark", label: "Solarized Dark" },
    { id: "ocean-light", label: "Ocean Light" },
    { id: "ocean-dark", label: "Ocean Dark" },
] as const;

export type ThemeId = (typeof THEMES)[number]["id"];
