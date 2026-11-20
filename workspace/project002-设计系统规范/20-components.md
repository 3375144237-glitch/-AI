# 20 Components｜售卖 AI Web 后台

- 前置：[10 Tokens](10-tokens.md)；原稿：[Components 页设计稿（只读）](https://www.figma.com/design/7dVg1Mgu2O9Gnsg1mwrGRf?node-id=203-37922)。
- 范围：浅色后台；分屏按固定、展开、全屏验收；原稿未覆盖的状态标为设计补充。暂不搭时间选择器、穿梭框或营销组件。
- 记法：`>` 父子，`[]` 可选，`*` 重复；H 横向，V 纵向；单位 px。文案用 Text，图标用 Slot 或 Instance Swap，显隐用 Boolean。
- 共用：隐藏后不占位；状态有文字，图标操作有可访问名称，键盘焦点可见，禁用附近写原因。单行行高等于字号，多行行高为字号 × 1.5；控件高度独立设置，长文案不缩字号。

## Button｜按钮

- **用途：** 查询、确认、关闭、明细和警示操作。跳转、视图切换和单选用对应控件。
- **结构及命名：** `Button > [Leading Icon] + Label + [Trailing Icon] + [Loading indicator]`。保留 `Label`、`Show Leading`、`Show Trailing` 及前后图标 Slot。
- **Variant：** `type=primary / secondary / ghost / danger / gray`。主按钮 `#2ABD90/#FFFFFF`；线框白底、`#E5E5E5` 内描边、`#333333` 字；文字默认 `#2ABD90` 且无底；警示 `#FF6C3A/#FFFFFF`；灰底 `#F5F7FA/#333333`。
- **Size：** `small / medium / large`，高 28/32/40。常规圆角 6/8/8，灰底圆角 4/6/8；实底最小宽约 60/64/96，纯文字无统一最小宽。
- **Typography：** 苹方 Regular 14/14；表格小号文字操作用 Medium 12/12。查询、关闭均为 64×32，圆角分别为 8、6；权限胶囊沿用原稿。
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
- **验收：** [统一预览](https://www.figma.com/design/7dVg1Mgu2O9Gnsg1mwrGRf?node-id=90-3876)包含状态、用法和五组同页原稿对照：700 px 查询行，374/574/1034 px 商品筛选行，以及收藏夹标题栏。
- **表单组合：** [查询行补充](https://www.figma.com/design/7dVg1Mgu2O9Gnsg1mwrGRf?node-id=276-12488)放在原有查询对照下，演示横排校验、提交中、374 px 窄栏叠排。复用 Input、Select、Button；ID 沿用定稿。窄版与补充状态仅作设计示例。

## Select｜选择器

- **用途：** 从有限集合选渠道、状态等。自由输入用 Input；立即执行的动作用 Button。
- **结构及命名：** `Select > Value + Chevron / Clear`；`Select / Menu > [Search] + Option*`。值 Fill，尾图标 16；标签及帮助由父表单管理。
- **Variant / Size：** `style=field / filter`，均高 32、白底、1 px 内描边 `#E5E5E5`、单行苹方 12/12。表单圆角 8，水平内距 12、图文间距 8；筛选圆角 6，水平内距 8、图文间距 6。
- **State：** 默认、占位、悬停、聚焦、展开、错误、禁用、多选摘要、清除。触发器悬停保留 `#E5E5E5` 描边；聚焦和展开用主绿，错误用橙。菜单含单选、搜索、多选、无匹配、加载、失败；选项高 32。悬停、选中用浅灰底及 `#333333` 文案，不加对号；禁用不可展开或选择。
- **定稿渠道菜单：** 面板与触发器左对齐、等宽、间隔 4 px，白底、8 px 圆角、无描边、无搜索框；阴影 `0 4 24 0`，黑色 12%。面板内距 6 px，选项高 32 px，选项之间无间隔，悬停项以浅灰底区分。见 [Foundations 对照](https://www.figma.com/design/7dVg1Mgu2O9Gnsg1mwrGRf?node-id=233-4794)。
- **其他菜单场景（设计补充）：** 六个[菜单母版](https://www.figma.com/design/7dVg1Mgu2O9Gnsg1mwrGRf?node-id=105-4447)共用无描边外壳、6 px 内距及 `Elevation/Select Menu` 阴影。窄栏建议最小宽 160，不超视口，多于 8 项滚动。可搜索菜单保留搜索输入框自身的描边，输入框距选项区或反馈区 12 px，搜索结果选项间隔 4 px。反馈可换行，苹方 12/18。多选保留一个可读值及 `+N`；未选择时用「请选择」或「全部状态」区分场景。
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
- **取舍：** 窄栏保留上一页、当前位置和下一页；页数多时折叠，总数、每页条数、跳页按需开启。参考 [Element UI](https://element.eleme.cn/#/zh-CN/component/pagination)。
- **验收：** [Pagination / Preview](https://www.figma.com/design/7dVg1Mgu2O9Gnsg1mwrGRf?node-id=128-8865)。原稿无完整分页；按业务分屏补充。

## Empty State｜空状态

- **用途：** 无数据、无匹配、无权限、加载失败。局部字段缺值用「—」；刷新失败但仍有旧数据时保留旧内容。
- **结构及命名：** `Empty State > [Icon] + Text + [Actions]`；`Text > Title + Description`。标题、说明可编辑；动作复用 Button。
- **Variant / Size / State：** `type=no-data / no-results / no-permission / error` × `size=compact / default`。参考宽 304/420，最小高 120/240；根无交互态，按钮单独管理。无权限且不可申请时隐藏动作。
- **布局与文案：** V 居中，主体宽随容器，说明自动换行并增高；左右内距 16，标题与说明距 4。先说明原因，再给一步动作，如「未找到匹配商品」「清空筛选」。
- **验收：** [Empty State / Preview](https://www.figma.com/design/7dVg1Mgu2O9Gnsg1mwrGRf?node-id=130-9029)。原稿无完整空状态；沿用苹方、Button 和原稿中性色。

## Table｜表格

- **用途：** 适合跨列扫读及对比；单字段明细优先用描述列表。
- **结构及命名：** `Table > [Toolbar] + Viewport + [Pagination]`；`Viewport > Header + Body`。五种布局已接入 `Table / Row`、`Table / Header Cell` 和 `Table / Cell`。用行的 `Columns` 插槽组列，用单元格的 `Content` 插槽换文字或 Tag。固定操作格复用同一组件集。
- **Variant / Size：** `layout=fixed / split / full / comparison / standalone`。实测宽 374/574/1034/352/860；表头高 40，数据行高 56，表格圆角 12。列宽与行分隔线按各原稿视图核对。
- **State / 禁用：** 五种布局各有 `ready / loading / empty / error`，共 20 个变体。后三态保留对应表头和区域高度；窄分屏保留操作列标题，表身仅显示反馈。跨宽度补齐状态属设计补充。行支持 `header / default / hover / selected`；整行悬停和选中用浅灰。无权限动作隐藏或说明原因；加载时防重复提交。
- **图标与文案：** 短列名、数值、辅助信息，允许替换；区分 `0` 与 `—`，库存与同步分列。原稿未明确的排序不默认加排序图标。
- **布局：** 有数据时保留原稿的列宽，和表身对齐。加载、无结果与失败时，表头列随实例均分可用宽度；374/574 px 分屏分别显示 3/5 个普通列，并预留右侧 83 px 操作列。分屏保留横滚和操作列样式；实际滚动固定、排序、分页及批量操作待联调。
- **变量：** Table、表头、单元格、行和工具栏的原有配色、间距、圆角与边框已绑定。固定及展开分屏的操作列共用 `Elevation/Sticky Column`，保留原稿阴影。
- **验收：** [Table / Preview 的状态区](https://www.figma.com/design/7dVg1Mgu2O9Gnsg1mwrGRf?node-id=135-10222)汇总 352 px 状态对照和其余四种宽度的代表样例。完整组合通过实例属性切换。

## Metric｜指标

- [单项和指标组预览](https://www.figma.com/design/7dVg1Mgu2O9Gnsg1mwrGRf?node-id=256-11852)。`Metric` 有常规和带说明两种；`Metric / Group` 沿用 574 px 定稿的一行四列、两行两列和三项报告摘要。名称及数值可编辑，详情型可补说明。标明单位及口径，区分零与缺失。

## Modal｜弹窗

- [单、双操作预览](https://www.figma.com/design/7dVg1Mgu2O9Gnsg1mwrGRf?node-id=259-12032)。权限定稿宽 602、白底、圆角 16、无阴影；「知道了」96×38。正文可替换，说明可隐藏；按钮组靠右，主操作最右并留 24。双操作为设计补充。关闭和焦点由开发联调。

## Card｜业务卡片

- [技能卡片和报告附件](https://www.figma.com/design/7dVg1Mgu2O9Gnsg1mwrGRf?node-id=268-12454)。技能卡 334 × 135 px，标题、说明、类别可编辑，第二标签及「使用」可隐藏。12 张卡片接入自动换行网格；附件已检查 574 和 374 px。

布局容器、图表和筛选组合详见 [布局模式](30-layout-patterns.md#模块组合)。

## Figma 验收

先查现有变量、母版、变体及承载同一业务的预览；缺项并回原处。Components 左侧母版、右侧预览，组内顶对齐。预览用中文注明用途、状态、尺寸及设计补充；检查三档宽度、长文案和实例链接。
