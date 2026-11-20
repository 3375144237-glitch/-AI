# 10 Tokens｜售卖 AI Web 后台

- 范围：中高密度 ToB 后台；下一份：[20 Components](20-components.md)。
- 记法：`@集合/路径` 代表变量别名。当前交付仅使用 Light。
- Figma 集合：`Color` 46 项、`Spacing` 12 项、`Radius` 8 项、`Shadow` 3 项、`Stroke` 2 项。控件和图标尺寸仍为实施建议。Table 专用变量保留定稿中的配色与几何。

## Collections：`Spacing`、`Radius` 与基础尺寸建议

- Mode：`Default`。数值单位 px；下表的 `palette/*` 归 `Color`。
- Scope：`palette/*` 隐藏；`space/*` 用 `GAP`；`radius/*` 用 `CORNER_RADIUS`；`size/*` 用 `WIDTH_HEIGHT`；`stroke/*` 用 `STROKE_FLOAT`。

| Token 路径 | 类型 | 含义 | Default 建议值 |
| --- | --- | --- | --- |
| `palette/mint/500` | Color | 主色 | `#2ABD90` |
| `palette/mint/600` | Color | 主色悬停 | `#24AE84` |
| `palette/mint/700` | Color | 主色按下 | `#1EA078` |
| `space/2` | Number | 表格内容和图标的细间距 | `2` |
| `space/4` | Number | 微间距 | `4` |
| `space/6` | Number | 小控件内距、图文间距 | `6` |
| `space/8` | Number | 图文、同组控件 | `8` |
| `space/12` | Number | 单元格、紧凑控件横向内边距 | `12` |
| `space/16` | Number | 字段间距、窄分屏留边 | `16` |
| `space/20` | Number | 次级区块留白 | `20` |
| `space/24` | Number | 页面留边、空态垂直内边距 | `24` |
| `space/32` | Number | 大区块间距 | `32` |
| `space/40` | Number | 大区块留白 | `40` |
| `radius/xs` | Number | 标签、小号灰底按钮 | `4` |
| `radius/sm` | Number | 小号常规按钮、中号灰底按钮、页码和轻量选中底 | `6` |
| `radius/md` | Number | 中号常规和大号按钮、表单输入、表单选择器 | `8` |
| `radius/lg` | Number | 表格外框 | `12` |
| `radius/xl` | Number | 弹窗 | `16` |
| `radius/composer` | Number | 对话输入容器 | `24` |
| `radius/pill` | Number | 胶囊和计数角标 | `999` |
| `size/control/sm` | Number | 紧凑控件 | `28` |
| `size/control/md` | Number | 默认控件 | `32` |
| `size/control/lg` | Number | 宽松控件 | `40` |
| `size/icon/sm` | Number | 标签和排序图标 | `12` |
| `size/icon/md` | Number | 控件图标 | `16` |
| `size/target/min` | Number | 最小交互热区 | `24` |
| `stroke/default` | Number | 描边和分隔线 | `1` |

- Table 原稿特例：搜索列 9 px、单元格局部内距 10 px、边缘遮挡层圆角 14 px，使用 Table 专用变量。

## Collection：`Color`

- Mode：`Light`（本轮使用）。本集合均为 Color；`color/shadow/*` 归 `Shadow`。
- Scope：文字用 `TEXT_FILL`；背景用 `FRAME_FILL`、`SHAPE_FILL`；描边用 `STROKE_COLOR`；阴影用 `EFFECT_COLOR`。操作色和状态前景按实际绑定补充图标填充及描边范围。

| Token 路径 | 含义 | Light 建议值 |
| --- | --- | --- |
| `color/bg/canvas` | 页面背景 | `#F7F8FA` |
| `color/bg/surface` | 内容和表格 | `#FFFFFF` |
| `color/bg/subtle` | 表头、列表整行悬停/选中、灰底按钮 | `#F5F7FA` |
| `color/bg/overlay` | 浮层表面 | `@Color/color/bg/surface` |
| `color/bg/selected` | 局部选中底；不用于整行列表 | `#E5F4EE` |
| `color/table/status/green-bg` | 表格绿色状态底、布局示意中的浅绿底 | `#2ABD90 / 10%` 填充透明度 |
| `color/bg/disabled` | 禁用底 | `#EFF1F3` |
| `color/bg/scrim` | 遮罩 | `rgba(0,0,0,0.40)` |
| `color/text/primary` | 标题、正文、数据、灰底和线框按钮文字 | `#333333` |
| `color/text/secondary` | 表头及需更高对比度的次要信息，按场景使用 | `#666666` |
| `color/table/text/muted` | 表格次要文字；布局示意的说明与备注复用此变量 | `#999999` |
| `color/text/on-action` | 主按钮及警示按钮前景 | `#FFFFFF` |
| `color/border/subtle` | 线框按钮、输入、选择器和表格外框 | `#E5E5E5` |
| `color/border/table` | 表格内行分隔线 | `#EBECF0` |
| `color/action/primary` | 主按钮底、输入聚焦 | `@Color/palette/mint/500` |
| `color/action/hover` | 主按钮、文字按钮悬停 | `@Color/palette/mint/600` |
| `color/action/pressed` | 主按钮、文字按钮按下 | `@Color/palette/mint/700` |
| `color/action/text` | 文字操作 | `@Color/palette/mint/500` |
| `color/action/danger` | 警示按钮底、字段错误描边 | `#FF6C3A` |
| `color/action/danger-hover` | 警示按钮悬停 | `#F26637` |
| `color/action/danger-pressed` | 警示按钮按下 | `#E66134` |
| `color/action/gray-pressed` | 灰底及线框按下底 | `#E8EBEF` |
| `color/status/warning/fg` | 库存等警示前景 | `#FF6C3A` |
| `color/status/warning/bg` | 预警背景 | `#FF6C3A / 10%` |

- 辅助、次要文案优先用 `#999999`，如快照时间、覆盖范围说明、备注；需要更高对比度时按场景规范选色。表头、关键数据、操作、状态和占位仍按原有语义取色；不批量修改现有变量。
- 状态标签的各前景、背景及透明度优先复用 Figma Tag 母版。原稿必填星号保留独立颜色。
- 占位文本保留原稿场景：名称 `#86909C`，两款搜索 `#999999`。不把现有通用占位变量批量改成场景色。
- 线框与灰底按钮的禁用沿用默认配色；禁用整体透明度 60% 在组件根层应用。
- 灰底上的普通文案使用 `color/text/primary`（`#333333`），包括选中项和灰底表格行的操作文案。有独立底色的状态标签沿用语义配色。
- 局部控件同时使用浅绿底与主绿描边时，文字也使用 `color/action/primary`（`#2ABD90`），如当前页码。

## Collection：`Shadow`

- Mode：`Light`（本轮使用）。

| Token 路径 | 含义 | Light 建议值 |
| --- | --- | --- |
| `color/shadow/popover` | 现有通用浮层样式（设计补充） | `rgba(0,0,0,0.10)` |
| `color/shadow/modal` | 弹窗阴影 | `rgba(0,0,0,0.16)` |
| `color/shadow/sticky-column` | 固定操作列阴影 | `rgba(0,0,0,0.16)` |

## Collection：`Component`（按需）

- Mode：`Default`。有独立维护需求时再新增；默认直接绑定已有变量。

| Token 路径 | 类型 | 含义 | Default 建议值 |
| --- | --- | --- | --- |
| `button/primary/bg/default` | Color | 主按钮默认底 | `@Color/color/action/primary` |
| `input/border/error` | Color | 输入错误描边 | `@Color/color/action/danger` |
| `table/row/bg/selected` | Color | 选中行浅灰背景 | `@Color/color/bg/subtle` |

## Text Styles（Figma 样式，无 Mode）

- 字体：`PingFang SC`，字距 0；先验证 Regular、Medium、Semibold 可加载。缺失时报告，在可用环境继续，勿静默替换原稿字族。
- [Figma 文字样式](https://www.figma.com/design/7dVg1Mgu2O9Gnsg1mwrGRf?node-id=206-3777)已有 10 个可复用样式。页面及区块标题的 4 个示例均使用定稿苹方 Semibold；Figma 桌面禁用该字重的样式创建，暂以文字图层保留。
- 数值列用等宽数字特性（字体支持时）。文字颜色单独绑定 `Color`。按是否允许换行选行高：不允许换行 = 字号 × 1；允许换行 = 字号 × 1.5。允许换行但当前只有一行时，仍用 1.5 倍。行高不等于控件高度。

| 样式路径 | 字号 / 字重 | 单行行高 | 允许换行行高 |
| --- | --- | --- | --- |
| `Heading/Page` | 24 / Semibold | 24 | 36 |
| `Heading/Section` | 20 / Semibold | 20 | 30 |
| `Heading/Panel` | 16 / Medium | 16 | 24 |
| `Body/Default` | 14 / Regular | 14 | 21 |
| `Body/Emphasis` | 14 / Medium | 14 | 21 |
| `Body/Dense` | 12 / Regular | 12 | 18 |
| `Body/Dense Medium` | 12 / Medium | 12 | 18 |

## Effect Styles（Figma 样式，通过颜色变量读 Mode）

| 样式路径 | 含义 | 建议值：X / Y / Blur / Spread / 颜色 |
| --- | --- | --- |
| `Elevation/Popover` | 通用悬浮面板（设计补充） | `0 / 4 / 12 / 0` + `@Shadow/color/shadow/popover` |
| `Elevation/Select Menu` | Select 菜单面板 | `0 / 4 / 24 / 0`，黑色 12%（取自定稿） |
| `Elevation/Modal` | 弹窗、前景抽屉 | `0 / 12 / 32 / 0` + `@Shadow/color/shadow/modal` |
| `Elevation/Sticky Column` | 固定及展开分屏的操作列 | `0 / 4 / 10 / 0` + `@Shadow/color/shadow/sticky-column` |

- 阴影类型 `DROP_SHADOW`。若环境不能在样式内绑定颜色，在节点 Effect 上绑定。
- 表格本体、普通面板不设阴影。固定列已绑定效果样式；[定稿渠道下拉面板](https://www.figma.com/design/7dVg1Mgu2O9Gnsg1mwrGRf?node-id=203-28417) 无描边，阴影为 `0 / 4 / 24 / 0`、黑色 12%。`Elevation/Modal` 仅为设计补充，定稿权限弹窗无阴影。输入聚焦沿用定稿的 1 px 主绿 `#2ABD90` 内描边，保持原尺寸。见[定稿对照](https://www.figma.com/design/7dVg1Mgu2O9Gnsg1mwrGRf?node-id=206-3829)。

## 校验

- 主按钮及警示按钮按确认稿使用白字；这两组品牌组合的小字对比度低于 `4.5:1`。正文、关键状态、必要焦点提示另行核对对比度。
- 状态必须有文字或图标；库存预警、同步失败等状态各用独立语义色。
