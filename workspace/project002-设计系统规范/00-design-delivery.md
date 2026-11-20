# 售卖 AI｜设计交付索引

[Figma 设计索引](https://www.figma.com/design/7dVg1Mgu2O9Gnsg1mwrGRf?node-id=172-3818) · [总规范](Web后台设计系统规范.md) · [业务定稿](https://www.figma.com/design/7dVg1Mgu2O9Gnsg1mwrGRf?node-id=203-37921)

从聊天请求生成或验收分屏网页、报告、表格预览时，先读 [聊天产物 UI 生成与验收规范](50-ai-generation-rules.md)。

Codex 可使用 [`$sales-ai-ui-generation`](skills/sales-ai-ui-generation/SKILL.md)，按同一套规则完成生成、修改与验收。

| 模块 | Markdown | Figma |
| --- | --- | --- |
| 01 设计系统 | [Tokens](10-tokens.md) | [Foundations 规范](https://www.figma.com/design/7dVg1Mgu2O9Gnsg1mwrGRf?node-id=172-3777) · [文字样式](https://www.figma.com/design/7dVg1Mgu2O9Gnsg1mwrGRf?node-id=206-3777) · [叠放示例](https://www.figma.com/design/7dVg1Mgu2O9Gnsg1mwrGRf?node-id=206-3829) |
| 02 组件库 | [Components](20-components.md) | [组件库用法](https://www.figma.com/design/7dVg1Mgu2O9Gnsg1mwrGRf?node-id=172-3856) |
| 03 布局模式 | [布局模式](30-layout-patterns.md) | [三档分屏样例](https://www.figma.com/design/7dVg1Mgu2O9Gnsg1mwrGRf?node-id=174-3852) |
| 04 信息架构 | [信息架构](40-information-architecture.md) | [产物信息层次](https://www.figma.com/design/7dVg1Mgu2O9Gnsg1mwrGRf?node-id=174-4244) |
| 05 AI 生成与验收 | [聊天产物 UI 规范](50-ai-generation-rules.md) | [出图决策参考](https://www.figma.com/design/7dVg1Mgu2O9Gnsg1mwrGRf?node-id=175-4354) |
| 07 交互与状态 | [交互与状态](70-interaction-states.md) | [状态用法](https://www.figma.com/design/7dVg1Mgu2O9Gnsg1mwrGRf?node-id=175-4384) |
| 08 参考示例 | [参考示例](80-reference-examples.md) | [正反例](https://www.figma.com/design/7dVg1Mgu2O9Gnsg1mwrGRf?node-id=175-4519) |

- 同页原稿和用户已确认规则优先；Element UI 用于参考必要的组件结构和状态覆盖。
- Figma 的 `UI稿` 页、`Components` 页内「设计稿」区及其他已确认稿默认只读。除非用户明确指定范围，不编辑这些图层，也不通过母版、变量、样式或交互把变化传递给它们。
- 组件规格、风格和间距从已确认设计稿实测提取。在独立样例中验证实例和截图；定稿没有覆盖的状态标为「设计补充」。
- 目录编号 06 留给研发；本交付不包含 Schema、渲染、验证逻辑及组件代码映射。
