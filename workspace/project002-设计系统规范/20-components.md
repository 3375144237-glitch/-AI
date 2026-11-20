# 20 Components｜售卖 AI Web 后台

- 前置：[10 Tokens](10-tokens.md)；原稿：[Components 页设计稿](https://www.figma.com/design/7dVg1Mgu2O9Gnsg1mwrGRf?node-id=119-5743)。
- 范围：浅色后台；右侧分屏按固定、展开、全屏验收。原稿没有的状态标为补充。不搭时间选择器、穿梭框或营销组件。
- 记法：`>` 为父子，`[]` 可选，`*` 可重复；H 横向，V 纵向；尺寸单位 px。文案用 Text，图标用 Slot/Instance Swap，显隐用 Boolean。
- 共用：隐藏可选层后不占位；状态写明含义，图标操作提供可访问名称。键盘焦点应可见；禁用原因写在附近。长文案验收不得靠缩字号。
- 文字：不允许换行的标签、值、图标旁文案和页码，行高等于字号；允许换行的说明或正文，行高为字号的 1.5 倍。控件高度通过布局独立控制。两个分别单行的字段（如商品名、SKU）分别计算行高。

## Button｜按钮

- **用途：** 查询、确认、关闭、明细和警示操作。跳转、视图切换和单选用对应控件。
- **结构及命名：** `Button > [Leading Icon] + Label + [Trailing Icon] + [Loading indicator]`。保留 `Label`、`Show Leading`、`Show Trailing` 及前后图标 Slot。
- **Variant：** `type=primary / secondary / ghost / danger / gray`。主按钮 `#2ABD90/#FFFFFF`；线框白底、`#E5E5E5` 内描边、`#333333` 字；文字默认 `#2ABD90` 且无底；警示 `#FF6C3A/#FFFFFF`；灰底 `#F5F7FA/#333333`。
- **Size：** `small / medium / large`，高 28/32/40。常规实底最小宽约 60/64/96；纯文字无统一最小宽。查询及关闭实测 64×32、苹方 Regular 14/14；查询圆角 8，灰底关闭圆角 6；表格「明细」为单行苹方 Medium 12/12。原稿权限胶囊及 96×38 确认按钮保留场景规格。
- **State：** `default / hover / pressed / disabled / loading`，共 75 个。按下沿原色加深；文字按钮悬停和按下只变字色。禁用整体 60%；加载保宽且防重复操作。
- **布局与文案：** 横向居中、宽 Hug、高 Fixed。常规左右内距 12，紧凑及大号 16；前后图标间隔 8；外距由业务父层控制。文案用动词加对象。高风险动作补确认；整排次操作不都用主按钮。
- **验收：** [Button / Preview](https://www.figma.com/design/7dVg1Mgu2O9Gnsg1mwrGRf?node-id=28-3744)。

## Input｜输入框

- **用途：** 录入名称、编号及搜索关键词。对话多行直接复用原稿 [输入功能](https://www.figma.com/design/7dVg1Mgu2O9Gnsg1mwrGRf?node-id=119-13481)；固定选项用 Select。
- **结构及命名：** `Input > Row > [Label] + Control Stack`；`Control Stack > Control + [Help / Error]`；`Control > [搜索图标] + Placeholder / Value + [Clear]`。
- **Variant / Size：** `type=text` 白底、高 32、圆角 8；`search` 商品筛选、高 32、圆角 6；`search-compact` 收藏夹、高 28、圆角 6。搜索默认无色底；三类均为 1 px 内描边 `#E5E5E5`。
- **State：** 3 类型 × 12 状态：默认、悬停、聚焦、已填、已填聚焦、错误、空值错误、错误聚焦、空值错误聚焦、只读、禁用、已填禁用。聚焦 `#2ABD90`，错误 `#FF6C3A`。校验失败保留输入；只读可查看，禁用不响应。
- **图标、文案：** 搜索图标复用原稿，14×14；清除只用于已填搜索。标签、星号、帮助按需显示；已有外置标签时关内置标签。帮助与错误互斥。占位给示例，错误写明原因或下一步。
- **布局：** 标签与框间隔 8，垂直居中；星号距文字 2。帮助或错误距框下沿 4，与框左边齐。单行框水平内距 12，搜索 8，图文层间距 8。沿用苹方和颜色、圆角、间距变量。
- **业务布局：** 700 宽查询行列距 16；商品筛选三列等宽、组距 8，结果数 Hug；收藏夹搜索固定 200×28，标题栏右对齐，水平 16、垂直 12。
- **验收：** [状态与用法](https://www.figma.com/design/7dVg1Mgu2O9Gnsg1mwrGRf?node-id=90-3876) · [同页原稿对照](https://www.figma.com/design/7dVg1Mgu2O9Gnsg1mwrGRf?node-id=144-10172)。

## Select｜选择器

- **用途：** 从有限集合选渠道、状态等。自由输入用 Input；立即执行的动作用 Button。
- **结构及命名：** `Select > Value + Chevron / Clear`；`Select / Menu > [Search] + Option*`。值 Fill，尾图标 16；标签及帮助由父表单管理。
- **Variant / Size：** `style=field / filter`，均高 32、白底、1 px 内描边 `#E5E5E5`、单行苹方 12/12。表单圆角 8，水平内距 12、图文间距 8；筛选圆角 6，水平内距 8、图文间距 6。
- **State：** 默认、占位、悬停、聚焦、展开、错误、禁用、多选摘要、清除。菜单含单选、搜索、多选、无匹配、加载、失败；选项高 32，支持默认、悬停、选中、禁用。禁用不可展开或选择。
- **布局与文案：** 菜单 V，距触发器 4，并与左边对齐；窄栏建议最小宽 160，不超视口，多于 8 项滚动。选项整行用灰底，选中选项保留主绿文字和勾；反馈允许换行，12/18。多选保留一个可读值及 `+N`；未选择时用「请选择」或「全部状态」区分场景。
- **验收：** [Select / Preview](https://www.figma.com/design/7dVg1Mgu2O9Gnsg1mwrGRf?node-id=110-4754)。已核对表单及 374/574/1034 三档筛选行，含苹方菜单及反馈文案。

## Tag / Badge｜标签与角标

- **用途：** Tag 表达库存、同步状态及可删除筛选项；Badge 表达计数或未读。状态有文案；计数不代替表格中的真实数量。
- **结构及命名：** `Tag > [Leading] + Label + [Remove]`；`Badge / Count > Count`、`Badge / Dot`。计数需要文案 Slot，Dot 无图标和文案。
- **Variant / Size / State：** Tag 有 `display / selectable / removable`、5 个语义色、`small / medium`、默认/悬停/选中/禁用，共 16 个有效组合。原稿状态 Tag 高 20，圆角 4，苹方 12；底色按原稿透明度。仅可交互项展示操作态，禁用不可选、不可移除。
- **布局与文案：** H 居中、宽 Hug。图文和组间距按原稿；短词表达状态（「库存异常」「失败：3」）。角标定位由宿主控制；计数 0 隐藏，超过 99 显示 `99+`，可访问名称保留实际值。
- **验收：** [Tag & Badge / Preview](https://www.figma.com/design/7dVg1Mgu2O9Gnsg1mwrGRf?node-id=126-8713)。原稿五个标签逐一比对；计数示例 1、12、99+。

## Pagination｜分页

- **用途：** 仅用于业务数据翻页；空结果或只有一页时隐藏。更改筛选条件后从第一页查。
- **结构及命名：** `Pagination > [Total] + [Page Size] + Nav + [Jump]`；`Pagination / Item` 管理页码、前后箭头和省略号。
- **Variant / Size：** `variant=full / simple`。示例约 554×32 / 93×28；374 宽用简版，574/1034 宽可用完整版。
- **State：** 根共 6 个有效组合，覆盖可用、加载、首页、末页、未知总量。加载保持宽度，首尾禁用对应箭头；省略号不可点。当前页须可识别，箭头必须有名称。
- **当前页：** 浅绿底、`#2ABD90` 描边和 `#2ABD90` 数字，页码文字苹方 12/12。
- **布局与文案：** H 右对齐，页码间距 4、组间距 8，距表格建议 16。总数未知时不显示猜测总量，不提供跳末页。
- **参考：** [Element UI](https://element.eleme.cn/#/zh-CN/component/pagination) 的拆分方式：上一页、页码、下一页为基础，页数多时折叠；总数、每页条数、跳页按业务需求启用。产品窄分屏优先上一页、当前位置、下一页；无分页需求不常驻完整工具。
- **验收：** [Pagination / Preview](https://www.figma.com/design/7dVg1Mgu2O9Gnsg1mwrGRf?node-id=128-8865)。原稿无完整分页；按业务分屏补充。

## Empty State｜空状态

- **用途：** 无数据、无匹配、无权限、加载失败。局部字段缺值用「—」；刷新失败但仍有旧数据时保留旧内容。
- **结构及命名：** `Empty State > [Icon] + Text + [Actions]`；`Text > Title + Description`。标题、说明可编辑；动作复用 Button。
- **Variant / Size / State：** `type=no-data / no-results / no-permission / error` × `size=compact / default`。参考宽 304/420，最小高 120/240；根无交互态，按钮单独管理。无权限且不可申请时隐藏动作。
- **布局与文案：** V 居中，主体宽随容器，说明自动换行并增高；左右内距 16，标题与说明距 4。先说明原因，再给一步动作，如「未找到匹配商品」「清空筛选」。
- **验收：** [Empty State / Preview](https://www.figma.com/design/7dVg1Mgu2O9Gnsg1mwrGRf?node-id=130-9029)。原稿无完整空状态；沿用苹方、Button 和原稿中性色。

## Table｜表格

- **用途：** 适合跨列扫读及对比；单字段明细优先用描述列表。
- **结构及命名：** `Table > [Toolbar] + Viewport + [Pagination]`；`Viewport > Header + Body`；复用 `Table / Header Cell`、`Table / Row`、`Table / Cell` 和 `Table / Toolbar`。状态复用 Tag，操作沿用同页原稿。
- **Variant / Size：** `layout=fixed / split / full / comparison / standalone`。实测宽 374/574/1034/352/860；表头高 40，数据行高 56，表格圆角 12。列宽与行分隔线按各原稿视图核对。
- **State / 禁用：** `ready / loading / empty / error`；后三态保留表头。行支持 `header / default / hover / selected`。整行悬停和选中都用浅灰，业务状态色保留在标签或字段；需要明确选中时用局部勾选。无权限动作隐藏或说明原因；加载时防重复提交。
- **图标与文案：** 短列名、数值、辅助信息，允许替换；区分 `0` 与 `—`，库存与同步分列。原稿未明确的排序不默认加排序图标。
- **布局：** 根 V、表头和行 H；各列独立保存宽度及对齐，视口可裁切。固定/展开分屏已设置横滚并保留操作列的视觉样式；实际滚动固定、排序、分页、批量行为尚未验收。
- **验收：** [Table / Preview](https://www.figma.com/design/7dVg1Mgu2O9Gnsg1mwrGRf?node-id=135-9759)。

## Figma执行顺序建议

1. 在 `Foundations` 核对浅色变量、苹方及实际按钮/输入/表格取色，优先用现有变量路径。
2. 在 `Components` 依次完善 Button、Input、Select、Tag/Badge、Pagination、Empty State、Table。每次先对照一个真实默认态，再补其余状态。
3. 在同页用业务原稿行验证实例。核对相邻控件、对齐、内外距、颜色、描边、字和图标；再验收窄栏、展开和全屏。记录原稿没有的状态及待联调行为。
4. 在 `Docs` 存用法入口。实例优先引用同页母版，保留原稿，发布前复查长文案、禁用及加载。
