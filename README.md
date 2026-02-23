# borgtj

pnpm + Turbo 管理的 React 共享组件 monorepo。

## 结构

- `packages/components`：共享 React 组件库 `@borgtj/components`
- `packages/react`：设计系统组件库 `@borgtj/react`
- `apps/demo`：Storybook 演示，依赖 `@borgtj/components`
- `site`：组件画廊（纯 CSS，无 Tailwind），依赖 `@borgtj/react`

## 命令

```bash
# 安装依赖
pnpm install

# 构建所有包
pnpm build
# 或
turbo run build

# 测试
pnpm test

# 仅构建 components
turbo run build --filter=@borgtj/components

# 启动 Storybook 演示
pnpm demo

# 构建 Storybook 静态产物
pnpm build-demo

# 依赖图
pnpm graph
```

## 使用共享组件

在应用或其它包中：

```ts
import { Button } from '@borgtj/components';
```

在对应 `package.json` 的 `dependencies` 中添加：

```json
"@borgtj/components": "workspace:*"
```

然后 `pnpm install` 即可。
