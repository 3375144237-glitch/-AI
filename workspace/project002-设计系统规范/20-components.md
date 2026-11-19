# 20 Components｜售卖 AI Web 后台

- 前置：[10 Tokens](10-tokens.md)。ToB 商品与库存后台；单位 px，控件 `SM/MD/LG=32/36/40`。
- `>` 父子，`[]` 可选，`*` 重复；文案用 Text，图标用 Instance Swap，显隐用 Boolean。
- 「无」不建变体属性；只建有效组合。主题由父画板 `Semantic` Mode 控制。
- 颜色路径省略 `color/`；几何用 `Primitives`，文字用 Text Styles。
- Auto Layout：`H` 横向、`V` 纵向；可选层隐藏后不占位。
- 共用：焦点外环 2、外移 2，不占布局；错误留值，禁用就近说明；图标操作命名，热区 ≥24×24。

## Button｜按钮

- **组件名：** `Button`。
- **组件层级结构：** `Button > [Leading] + [Label] + [Trailing] + [Spinner] + [Focus Ring]`。
- **Variant 维度：** `Primary / Secondary / Tertiary / Danger / IconOnly`。各自用 `action/primary`＋`text/on-action`、`bg/surface`＋`border/control`、`action/text`、`status/danger/fg`、`text/primary`。
- **Size 维度：** `SM / MD / LG`；图标 16，IconOnly 宽等于高，圆角 `radius/md`。
- **State 维度：** `Default / Hover / Pressed / Focus / Loading / Disabled`。Primary 切同名色；其他悬停/按下用 `bg/subtle`、`bg/selected`，危险悬停用 `status/danger/bg`。
- **图标位：** 前后可选；IconOnly 只用一个图标。Loading 换 Spinner，保宽、防重提交。
- **文案 slot：** `Label`，纯图标除外。例「保存」「重试同步」。
- **自动布局建议：** H 居中，Hug 宽、Fixed 高；IconOnly 宽高固定。
- **内外边距建议：** 水平 `12/16/16`、间距 8；外距由父层设定。
- **命名建议：** `Button`；默认 `Variant=Primary, Size=MD, State=Default`；属性 `Label / Show Leading / Leading Icon / Show Trailing / Trailing Icon`。

## Input｜输入框

- **结构：** `Input > Row > [Field Label] + Control Stack`；`Control Stack > Control + [Help Text / Error Text]`；`Control > [搜索图标] + Placeholder / Value + [Clear Search]`。
- **原稿默认态：** `text` 32 高、白底、圆角 8（名称字段）；`search` 32 高、圆角 6（商品筛选）；`search-compact` 28 高、圆角 6（收藏夹、技能页）。两个搜索框均无底色填充，描边 `#E5E5E5`。多行对话沿用「输入功能」。
- **状态：** 3 类型 × 12 状态，默认 `text / default`；其他状态为补充。1 px 描边，聚焦 `#2ABD90`，错误 `#FF6C3A`；错误留值，帮助与错误互斥。
- **属性：** 标签、占位、值、帮助和错误文案可编辑；标签、星号、帮助和清除图标默认隐藏；已有外置标签时不再显示内置标签。
- **对齐：** 行和控件 H，控件栈 V Fill；标签与框间隔 8，标签对框垂直居中；星号间隔 2。提示在框下 4，与框左边对齐。左右内距文字 12、搜索 8；搜索图标 14，文字左对齐，图文间隔 8，长文案末尾省略。沿用苹方及现有变量。
- **业务布局：** 名称框填充字段剩余宽，表单列距 16；商品筛选框和两个下拉框等宽，间距 8，结果数 Hug；收藏夹搜索固定 200 × 28，右对齐并垂直居中，标题栏左右留边 16、上下 12。
- **Figma：** [Input / Preview](https://www.figma.com/design/7dVg1Mgu2O9Gnsg1mwrGRf?node-id=90-3876) 展示状态、原稿业务行及用法。

## Select｜选择器

- **组件名：** `Select`（触发器）、`Select/Menu`、`Select/Option`。
- **组件层级结构：** `Select > Label + Trigger + [Message]`；`Trigger > Value + Chevron + [Focus Ring]`；`Menu > [Input/Search] + Option* 或 Feedback`。
- **Variant 维度：** `Single / Multiple`；`Show Search` 控制搜索，多选溢出 `+N`。
- **Size 维度：** 触发器 `SM / MD / LG`、圆角 8；选项 `SM / MD=32/36`，最多显示 8 项后滚动。
- **State 维度：** 触发器 `Default / Hover / Focus / Open / Error / ErrorFocus / Disabled`；菜单 `Ready / Loading / NoResults / Error`；选项 `Default / Highlighted / Selected / SelectedHighlighted / Disabled`。用勾区分选中，高亮用 `bg/subtle`；错误可重试。
- **图标位：** Chevron、Check 各 16。多选用可移除 Tag。
- **文案 slot：** `Label / Value / Message / Option Label`；`Content=Placeholder/Filled` 区分「请选择渠道」与「全部渠道」。
- **自动布局建议：** 根 V，Trigger H、Value Fill；Menu V，与触发器下沿对齐同宽，独立 Overlay；用 `bg/overlay`＋`Elevation/Popover`。
- **内外边距建议：** 触发器水平 12、间距 8；菜单内边距和偏移各 4，选项水平 8。
- **命名建议：** 默认 `Variant=Single, Size=MD, State=Default, Content=Placeholder`。

## Tag｜标签

- **组件名：** `Tag`。
- **组件层级结构：** `Tag > [Leading] + Label + [Remove]`。
- **Variant 维度：** `Tone=Neutral / Success / Warning / Danger / Info`。颜色绑定 `status/<tone>/bg` 与 `status/<tone>/fg`。
- **Size 维度：** `SM=20`，`MD=24`，字 `Body/Dense`，圆角 4。可移除版只用 MD。
- **State 维度：** 根无；Remove 复用 IconOnly 状态，不可移除时隐藏。「已停用」用 Neutral。
- **图标位：** 前图标可选（12）；可移除版须有关闭图标与 24×24 热区。
- **文案 slot：** `Label` 必填，如「审核中」「同步失败 · 3」。
- **自动布局建议：** H Hug 宽、Fixed 高，垂直居中；Remove 靠右。
- **内外边距建议：** 水平 `6/8`、间距 4；有 Remove 时右内边距 0，组距 4。
- **命名建议：** 默认 `Tone=Neutral, Size=SM`；属性 `Label / Show Leading / Leading Icon / Removable`。

## Badge｜角标

- **组件名：** `Badge`。
- **组件层级结构：** `Badge > [Count]`。
- **Variant 维度：** `Dot / Count`；用 `status/danger/fg` 作底，`status/danger/bg` 作字色。
- **Size 维度：** `SM / MD`，Dot `6/8`，Count 高 `16/20`、最小宽等于高，圆角 `radius/pill`。
- **State 维度：** 无。`0` 隐藏，超 99 显示 `99+`，可访问名称保留真实值。
- **图标位：** 无。
- **文案 slot：** Count 版暴露 `Count`，Dot 无。
- **自动布局建议：** Dot 宽高 Fixed，Count 横向 Hug；角标绝对定位。
- **内外边距建议：** Count 水平 4、行内间距 4；宿主设置偏移。
- **命名建议：** 默认 `Variant=Count, Size=SM`。

## Pagination｜分页

- **组件名：** `Pagination`、`Pagination/Item`。
- **组件层级结构：** `Pagination > [Total] + [Page Size Select] + Nav + [Jump]`；`Nav > Prev + Item* 或 Position + Next`。
- **Variant 维度：** 根 `Numbered / Cursor`；Item `Page / Prev / Next / Ellipsis`。
- **Size 维度：** 仅 `SM`；Item `32×32`、圆角 6，其他控件同高。窄区隐藏 Total、容量和跳转。
- **State 维度：** Item `Default / Hover / Focus / Current / Disabled`；Current 仅页码使用，绑定 `bg/selected`、`action/text`。省略号无交互；首尾禁用对应箭头。
- **图标位：** Prev、Next 必选 16 箭头，提供可访问名称。
- **文案 slot：** `Total / Page Label / Position`；例「共 128 条」「第 2 页」。未知总量时隐藏 Total。
- **自动布局建议：** 根 H Fill、右对齐；Nav H Hug。一页或空表隐藏；改筛选或容量回首位。
- **内外边距建议：** 页码间距 4，控件组间距 8；距表格 16。
- **命名建议：** `Pagination` 默认 `Variant=Numbered, Size=SM`；Item 默认 `Variant=Page, State=Default`。

## Empty State｜空态

- **组件名：** `Empty State`。
- **组件层级结构：** `Empty State > [Icon] + Copy + [Button]`；`Copy > Title + [Description]`。
- **Variant 维度：** `NoData / NoResults / Error / NoAccess`，分别提示创建或导入、清除筛选、重试、申请或返回。
- **Size 维度：** `Inline / Page`；最小高 `160/240`，标题分别 `Body/Emphasis`、`Heading/Panel`，说明 `Body/Dense`。
- **State 维度：** 根无；重试加载只作用于 Action。刷新失败有旧数据时保留旧内容。
- **图标位：** 可选，Inline 24、Page 32；无装饰插画。
- **文案 slot：** `Title / Description / Action Label`。例「没有符合条件的商品」「清除筛选」。无动作时隐藏按钮。
- **自动布局建议：** V 居中，Fill 宽、按内容增高；文字换行。
- **内外边距建议：** 内边距 24，标题至说明 4，图标至正文 8，正文至动作 12；表内无外距。
- **命名建议：** 默认 `Variant=NoData, Size=Inline`；属性 `Show Icon / Icon / Title / Show Description / Description / Show Action / Action Label`。

## Table｜表格

- **组件名：** `Table`、`Table/Header Cell`、`Table/Row`、`Table/Cell`。
- **组件层级结构：** `Table > [Toolbar] + Viewport + [Pagination]`；`Viewport > Header + Body`；`Header > Header Cell*`；`Body > Row*` 或 `Empty State` / 骨架；`Row > Cell*`。
- **Variant 维度：** `Table/Cell` 用 `Text / Number / TwoLine / Status / Actions / Selection`；状态复用 Tag，操作复用 Button，选择复用既有 Checkbox。
- **Size 维度：** Header 40；Row `Compact / Regular / TwoLine` 最小高 `40/48/56`。主列 Fill，数值、选择、操作列 Fixed；文本左对齐，数值右对齐。
- **State 维度：** Row `Default / Hover / Selected / Focus / SelectedFocus`，对应 `bg/surface`、`bg/subtle`、`bg/selected` 与焦点环。Header Cell `Sort=None/Asc/Desc`；Body `Ready / Loading / NoData / NoResults / Error`。动作或勾选局部禁用。
- **图标位：** 排序图标 12；选择、行操作按需。
- **文案 slot：** `Column Label / Value / Supporting Text`；数值 `0` 与缺失 `—` 区分。库存与同步各用独立列。
- **自动布局建议：** 根 V Fill，Header、Row 用 H 同列宽。设最小表宽；Viewport 剪裁、横滚；按需固定操作列。
- **内外边距建议：** 单元格水平 12、辅助文字间距 4；外框圆角 12，行线 1 用 `border/table`；工具栏与分页距表格 12/16。
- **命名建议：** Header Cell 默认 `Sort=None`；Row 默认 `Size=Regular, State=Default`；Cell 默认 `Variant=Text`。

## Figma执行顺序建议

1. **盘点。** 按名称和用途复用现有集合、样式、图标和母版。新产物放 `01 Foundations`、`02 Components`。
2. **建 Tokens。** `Primitives` → `Semantic` 的 Light、Dark → 按需 `Component` → Text Styles → Effect Styles。检查别名、主色与对比度。
3. **建基础母版。** 图标 → `Button` → `Input` → `Tag`、`Badge`。先做默认款并绑定属性，再补有效变体。
4. **建依赖组件。** `Select/Option` → `Select/Menu` → `Select`；`Pagination/Item` → `Pagination`；再建 `Empty State`。
5. **组装表格。** Header Cell、Cell → Row → Table。接入筛选、空态、分页；核对列宽。
6. **验收。** 在 `03 Patterns` 建运营看板样例，切 Light/Dark、全宽/窄分屏，核对正常、空态、错误、禁用。改长文案并关掉可选层，检查回流、横滚和焦点。
