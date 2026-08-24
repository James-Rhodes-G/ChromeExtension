import { newSpecPage as stencilSpecPage } from "@stencil/core/testing";
import MutationObserver from "mutation-observer";
export async function newSpecPage(opts) {
    global.MutationObserver = MutationObserver;
    global.ResizeObserver = class ResizeObserver {
        observe() { }
        unobserve() { }
        disconnect() { }
    };
    global.InputEvent = Event;
    const page = await stencilSpecPage(opts);
    return page;
}
export async function checkRenders(renderConfigs, components, language = 'en') {
    renderConfigs.forEach(({ description, html }, index) => {
        it(description || `should render component as expected (${index + 1})`, async () => {
            const page = await newSpecPage({ components, html, language });
            expect(page.root).toMatchSnapshot();
        });
    });
}
