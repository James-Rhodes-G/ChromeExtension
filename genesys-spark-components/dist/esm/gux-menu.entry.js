import { r as registerInstance, h, H as Host } from './index-xFL2agjT.js';

const guxMenuCss = ":host{flex-direction:column;inline-size:fit-content;padding:var(--gse-ui-menu-padding);background-color:var(--gse-ui-flyoutMenu-backgroundColor);border:none;border-radius:var(--gse-ui-menu-borderRadius);box-shadow:var(--gse-ui-menu-boxShadow)}";

const GuxMenu = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '0e69a50f9eaaed2e1ed5b8d9f612101dad7d7282', role: "menu" }, h("slot", { key: '37cb104c320d31ddf8770b323a9c72ff3e7bdf53' })));
    }
};
GuxMenu.style = guxMenuCss;

export { GuxMenu as gux_menu };
