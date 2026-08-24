import { expect as baseExpect } from "@playwright/test";
import { test } from "@stencil/playwright";
import AxeBuilder from "@axe-core/playwright";
import { toHaveNoViolations } from "./expectToHaveNoViolations";
const modes = ['light', 'dark'];
export const expect = baseExpect.extend({ toHaveNoViolations });
async function setMode(page, mode) {
    const html = page.locator('html');
    await html.evaluate((element, mode) => element.setAttribute('flare-mode', mode), mode);
}
export async function runAxe(page) {
    return new AxeBuilder({ page })
        .withTags([
        'wcag2a',
        'wcag2aa',
        // 'wcag2aaa',
        'wcag21a',
        'wcag21aa',
        'wcag22aa'
    ])
        .analyze();
}
export async function analyze(page, element, extraActions = () => Promise.resolve(), performA11yCheck = true, disableAnimations = false, axeScanDetails = { axeExclusions: [] }) {
    for (const mode of modes) {
        await setMode(page, mode);
        await extraActions(page);
        await snap(page, element, performA11yCheck, disableAnimations, axeScanDetails);
    }
}
export async function snap(page, element, performA11yCheck = true, disableAnimations = false, axeScanDetails = { axeExclusions: [] }) {
    if (performA11yCheck) {
        expect((await runAxe(page)).violations).toHaveNoViolations(axeScanDetails);
    }
    const animations = disableAnimations ? 'disabled' : 'allow';
    if (await page.locator('gux-tooltip').isVisible()) {
        expect(await page.screenshot({ animations })).toMatchSnapshot();
    }
    else if (element && (await page.locator(element).isVisible())) {
        expect(await page.locator(element).screenshot({ animations })).toMatchSnapshot();
    }
    else {
        expect(await page.screenshot({ animations })).toMatchSnapshot();
    }
}
async function setupPage(page) {
    await Promise.all([
        page.addStyleTag({
            url: 'https://apps.inindca.com/webfonts/urbanist.css'
        }),
        page.addStyleTag({
            url: 'https://apps.inindca.com/webfonts/noto-sans.css'
        }),
        page.addStyleTag({
            url: 'https://apps.inindca.com/webfonts/noto-sans-mono.css'
        }),
        page.addStyleTag({
            path: 'public/build/genesys-webcomponents.css'
        }),
        page.addStyleTag({
            content: `
        html {
          color: var(--gse-semantic-foreground-container-highEmphasis);
          background-color: var(--gse-semantic-background-container-page-default);
        }
      `
        })
    ]);
}
export async function setContent(page, html) {
    await page.setContent(html);
    await setupPage(page);
}
export async function checkRenders({ renderConfigs, element, extraActions = () => Promise.resolve(), performA11yCheck = true, disableAnimations = false, skip = false, axeExclusions = [] }) {
    renderConfigs.forEach(({ description, html }, index) => {
        (skip ? test.skip : test)(description || `should render component as expected (${index + 1})`, async ({ page }) => {
            await setContent(page, html);
            await analyze(page, element, extraActions, performA11yCheck, disableAnimations, { axeExclusions });
        });
    });
}
export { test } from '@stencil/playwright';
