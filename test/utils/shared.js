export default async function getTooltipContent() {
  // eslint-disable-next-line no-undef
  const tooltip = await page.waitForSelector('.pic-tooltip', { visible: true });
  const tooltipContent = await tooltip.$$eval('.pic-tooltip-content tr td', (dataEntries) =>
    dataEntries.map((dataEntry) => dataEntry.textContent)
  );
  return tooltipContent.join(' ');
}
