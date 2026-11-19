# 10 Tokens｜售卖 AI Web 后台

- 范围：中高密度 ToB 后台；下一份：[20 Components](20-components.md)。
- 记法：`@集合/路径` 代表变量别名；双模式表中，同一行只创建一个变量。
- 沿用目标文件中名称、类型和用途一致的变量。类型或用途不符时先列出冲突，不覆盖旧值。

## Collection：`Primitives`

- Mode：`Default`。数值单位 px；基础色只作别名来源。
- Scope：`palette/*` 隐藏；`space/*` 用 `GAP`；`radius/*` 用 `CORNER_RADIUS`；`size/*` 用 `WIDTH_HEIGHT`；`stroke/*` 用 `STROKE_FLOAT`。

| Token 路径 | 类型 | 含义 | Default 建议值 |
| --- | --- | --- | --- |
| `palette/mint/500` | Color | 主色 | `#2ABD90` |
| `palette/mint/600` | Color | 主色悬停 | `#24AE84` |
| `palette/mint/700` | Color | 主色按下 | `#1EA078` |
| `palette/mint/950` | Color | 主色底上的文字和图标 | `#10251E` |
| `space/4` | Number | 微间距 | `4` |
| `space/8` | Number | 图文、同组控件 | `8` |
| `space/12` | Number | 单元格、紧凑控件横向内边距 | `12` |
| `space/16` | Number | 字段间距、窄分屏留边 | `16` |
| `space/20` | Number | 次级区块留白 | `20` |
| `space/24` | Number | 页面留边、空态垂直内边距 | `24` |
| `space/32` | Number | 大区块间距 | `32` |
| `space/40` | Number | 大区块留白 | `40` |
| `radius/xs` | Number | 标签 | `4` |
| `radius/sm` | Number | 页码和轻量选中底 | `6` |
| `radius/md` | Number | 按钮、输入、选择器 | `8` |
| `radius/lg` | Number | 表格外框 | `12` |
| `radius/xl` | Number | 弹窗 | `16` |
| `radius/composer` | Number | 对话输入容器 | `24` |
| `radius/pill` | Number | 胶囊和计数角标 | `999` |
| `size/control/sm` | Number | 紧凑控件 | `32` |
| `size/control/md` | Number | 默认控件 | `36` |
| `size/control/lg` | Number | 宽松控件 | `40` |
| `size/icon/sm` | Number | 标签和排序图标 | `12` |
| `size/icon/md` | Number | 控件图标 | `16` |
| `size/target/min` | Number | 最小交互热区 | `24` |
| `stroke/default` | Number | 描边和分隔线 | `1` |
| `stroke/focus` | Number | 焦点环描边 | `2` |

## Collection：`Semantic`

- Mode：`Light`（默认）、`Dark`。本集合均为 Color。
- Scope：文字用 `TEXT_FILL`；背景用 `FRAME_FILL`、`SHAPE_FILL`；描边用 `STROKE_COLOR`；阴影用 `EFFECT_COLOR`。操作色和状态前景按实际绑定补充图标填充及描边范围。

| Token 路径 | 含义 | Light 建议值 | Dark 建议值 |
| --- | --- | --- | --- |
| `color/bg/canvas` | 页面背景 | `#F7F8FA` | `#11161A` |
| `color/bg/surface` | 内容和表格 | `#FFFFFF` | `#191F24` |
| `color/bg/subtle` | 表头和弱背景 | `#F5F7FA` | `#20282F` |
| `color/bg/overlay` | 浮层表面 | `@Semantic/color/bg/surface` | `@Semantic/color/bg/subtle` |
| `color/bg/selected` | 选中底 | `#E5F4EE` | `#203D34` |
| `color/bg/disabled` | 禁用底 | `#EFF1F3` | `#252D34` |
| `color/bg/scrim` | 遮罩 | `rgba(0,0,0,0.40)` | `rgba(0,0,0,0.60)` |
| `color/text/primary` | 标题、正文、数据 | `#333333` | `#EFF2F4` |
| `color/text/secondary` | 表头、辅助文字 | `#666666` | `#B4C0C8` |
| `color/text/placeholder` | 输入占位 | `#6B7077` | `#A7B3BD` |
| `color/text/disabled` | 禁用前景 | `#777D84` | `#9AA7B2` |
| `color/text/on-action` | 主色底前景 | `@Primitives/palette/mint/950` | `@Primitives/palette/mint/950` |
| `color/border/subtle` | 容器轮廓 | `#E5E5E5` | `#343E47` |
| `color/border/table` | 表格行分隔线 | `#EBECF0` | `#303A43` |
| `color/border/control` | 可操作控件边界 | `#83898F` | `#707E8A` |
| `color/border/focus` | 键盘焦点环 | `#205FCC` | `#91B8FF` |
| `color/action/primary` | 主按钮底、品牌图形 | `@Primitives/palette/mint/500` | `@Primitives/palette/mint/500` |
| `color/action/hover` | 主按钮悬停 | `@Primitives/palette/mint/600` | `@Primitives/palette/mint/600` |
| `color/action/pressed` | 主按钮按下 | `@Primitives/palette/mint/700` | `@Primitives/palette/mint/700` |
| `color/action/text` | 文字操作、链接 | `#14765A` | `#64D9AF` |
| `color/status/success/fg` | 成功前景 | `#17664E` | `#92E2BF` |
| `color/status/success/bg` | 成功背景 | `#E6F5EE` | `#20382F` |
| `color/status/warning/fg` | 预警前景 | `#955014` | `#F7BD72` |
| `color/status/warning/bg` | 预警背景 | `#FFF2E0` | `#3A2D20` |
| `color/status/danger/fg` | 失败、错误前景 | `#B42318` | `#FFAAA3` |
| `color/status/danger/bg` | 失败、错误背景 | `#FDECEA` | `#412628` |
| `color/status/info/fg` | 进行中前景 | `#245DC0` | `#A5C9FF` |
| `color/status/info/bg` | 进行中背景 | `#EAF2FF` | `#202F46` |
| `color/status/neutral/fg` | 中性状态前景 | `@Semantic/color/text/secondary` | `@Semantic/color/text/secondary` |
| `color/status/neutral/bg` | 中性状态背景 | `@Semantic/color/bg/subtle` | `@Semantic/color/bg/subtle` |
| `color/shadow/popover` | 下拉阴影 | `rgba(0,0,0,0.10)` | `rgba(0,0,0,0.35)` |
| `color/shadow/modal` | 弹窗阴影 | `rgba(0,0,0,0.16)` | `rgba(0,0,0,0.50)` |

## Collection：`Component`（按需）

- Mode：`Default`。有独立维护需求时创建；默认直接绑定 `Semantic`、`Primitives`。

| Token 路径 | 类型 | 含义 | Default 建议值 |
| --- | --- | --- | --- |
| `button/primary/bg/default` | Color | 主按钮默认底 | `@Semantic/color/action/primary` |
| `input/border/error` | Color | 输入错误描边 | `@Semantic/color/status/danger/fg` |
| `table/row/bg/selected` | Color | 选中行背景 | `@Semantic/color/bg/selected` |

## Text Styles（Figma 样式，无 Mode）

- 字体：`PingFang SC`，字距 0；先验证 Regular、Medium、Semibold 可加载。缺失时报告，在可用环境继续，勿静默替换原稿字族。
- 数值列用等宽数字特性（字体支持时）。文字颜色单独绑定 `Semantic`。

| 样式路径 | 含义 | 建议值：字号 / 行高 / 字重 |
| --- | --- | --- |
| `Heading/Page` | 页面标题 | `24 / 32 / Semibold` |
| `Heading/Section` | 区块标题 | `20 / 28 / Semibold` |
| `Heading/Panel` | 面板、弹窗 | `16 / 24 / Medium` |
| `Body/Default` | 正文、表单 | `14 / 20 / Regular` |
| `Body/Emphasis` | 按钮、重点正文 | `14 / 20 / Medium` |
| `Body/Dense` | 短字段、标签 | `12 / 16 / Regular` |
| `Body/Dense Medium` | 密集表头、强调 | `12 / 16 / Medium` |

## Effect Styles（Figma 样式，通过颜色变量读 Mode）

| 样式路径 | 含义 | 建议值：X / Y / Blur / Spread / 颜色 |
| --- | --- | --- |
| `Elevation/Popover` | 下拉、悬浮面板 | `0 / 4 / 12 / 0` + `@Semantic/color/shadow/popover` |
| `Elevation/Modal` | 弹窗、前景抽屉 | `0 / 12 / 32 / 0` + `@Semantic/color/shadow/modal` |

- 阴影类型 `DROP_SHADOW`。若环境不能在样式内绑定颜色，在节点 Effect 上绑定；仍不支持时创建 `/Light` 和 `/Dark` 两个样式，并在主题样例手动应用。
- 表格、普通面板不设阴影。默认描边 1；焦点环 2，距控件外边缘 2。

## 校验

- Light / Dark 主色均解析为 `#2ABD90`，主色底前景 `#10251E`，对比度约 `6.73:1`。
- 文字操作用 `color/action/text`；普通字和占位 ≥ `4.5:1`，大字、必要控件边界、图标、焦点 ≥ `3:1`。
- 状态必须有文字或图标；库存预警、同步失败等状态各用独立语义色。
