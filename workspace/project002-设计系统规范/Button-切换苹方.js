// Figma desktop development-plugin entry point. It only edits the two Button subtrees.
async function applyPingFang() {
  const fileKey = '7dVg1Mgu2O9Gnsg1mwrGRf';
  if (figma.fileKey && figma.fileKey !== fileKey) {
    throw new Error('请在「售卖AI-组件库测试1.1」中运行。');
  }

  const [button, preview] = await Promise.all([
    figma.getNodeByIdAsync('25:3762'),
    figma.getNodeByIdAsync('28:3744'),
  ]);
  if (button?.type !== 'COMPONENT_SET' || button.name !== 'Button' ||
      preview?.type !== 'FRAME' || preview.name !== 'Button / Preview' ||
      button.parent?.id !== '20:3746' || preview.parent?.id !== '20:3746') {
    throw new Error('没有找到目标 Button 组件及预览，未修改任何图层。');
  }

  const editableText = node => node.findAllWithCriteria({ types: ['TEXT'] })
    .filter(layer => !layer.id.startsWith('I'));
  const texts = [...editableText(button), ...editableText(preview)];
  const needed = new Map();
  const changes = [];
  const addFont = font => needed.set(`${font.family}/${font.style}`, font);
  for (const node of texts) {
    for (const segment of node.getStyledTextSegments(['fontName'])) {
      const oldFont = segment.fontName;
      if (oldFont.family === 'PingFang SC') continue;
      const nextFont = { family: 'PingFang SC', style: oldFont.style };
      addFont(oldFont);
      addFont(nextFont);
      changes.push({ node, start: segment.start, end: segment.end, nextFont });
    }
  }

  // Resolve every font before writing, so missing fonts cannot cause a partial switch.
  await Promise.all(Array.from(needed.values(), font => figma.loadFontAsync(font)));
  for (const { node, start, end, nextFont } of changes) {
    node.setRangeFontName(start, end, nextFont);
  }
  const stillOther = texts.filter(node => node.getStyledTextSegments(['fontName'])
    .some(segment => segment.fontName.family !== 'PingFang SC'));
  if (stillOther.length) throw new Error(`仍有 ${stillOther.length} 个文字图层未切换。`);
  figma.closePlugin(`已核对 ${texts.length} 个 Button 文字图层，字体为苹方。`);
}

applyPingFang().catch(error => figma.closePlugin(`切换苹方失败：${error.message}`));
