# borgtj

pnpm + Turbo 管理的 React 设计系统 monorepo。

## 结构

- **packages/react** — 设计系统组件库 `@borgtj/react`（可发布到 npm）
- **demos/react** — Storybook 演示 `@borgtj/react-ui-demo`
- **site** — 组件画廊（纯 CSS，无 Tailwind），部署到 GitHub Pages

## 命令

```bash
# 安装依赖
pnpm install

# 构建所有包
pnpm build

# 测试
pnpm test

# 仅构建 @borgtj/react
pnpm exec turbo run build --filter=@borgtj/react

# 启动 Storybook 演示
pnpm demo

# 构建 Storybook 静态产物
pnpm build-demo

# 依赖图
pnpm graph
```

## 使用 @borgtj/react

在应用或其它包中：

```ts
import { Button } from "@borgtj/react";
import "@borgtj/react/styles.css";
```

在对应 `package.json` 的 `dependencies` 中添加：

```json
"@borgtj/react": "workspace:*"
```

然后 `pnpm install` 即可。发布到 npm 时改为具体版本号。

## 发布前检查

- [x] `pnpm build` 通过
- [x] `pnpm test` 通过（@borgtj/react 26 用例）
- [x] `pnpm lint` 通过
- [x] 根目录与 site 为 `private: true`，不发布
- [x] `packages/react` 已含 `description`、`license`、`repository`、`keywords`、`sideEffects`、`prepublishOnly`
- [x] 根目录已含 `LICENSE`（MIT）
- [ ] **发布 @borgtj/react 到 npm 前**：将 `packages/react/package.json` 中 `repository.url` 改为实际仓库地址（如 `https://github.com/your-org/borgtj`），然后在 `packages/react` 下执行 `pnpm publish --access public`
