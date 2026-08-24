import { r as registerInstance, c as createEvent, h, H as Host } from './index-xFL2agjT.js';

const guxTabPanelCss = ":host{block-size:calc(100% - var(--gse-ui-tabs-set-horizontal-height)var(--gse-ui-tabs-set-divider-horizontal-height)var(--gse-ui-tabs-set-horizontal-marginBottom))}:host(:not([hidden])){flex:1 1 auto}:host(:focus){outline:none}:host(:focus-visible){outline:var(--gse-semantic-focusOutline-md-borderWidth) solid var(--gse-semantic-border-focus);outline-offset:var(--gse-semantic-focusOutline-offset)}";

const GuxTabPanel = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.guxactivepanelchange = createEvent(this, "guxactivepanelchange", 7);
        this.active = false;
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async guxSetActive(active) {
        this.active = active;
    }
    watchActivePanel() {
        if (this.active === true) {
            this.guxactivepanelchange.emit(this.tabId);
        }
    }
    render() {
        return (h(Host, { key: '3e53cdd5550102de55d37f4c86c68c3086393328', id: `gux-${this.tabId}-panel`, role: "tabpanel", "aria-labelledby": `gux-${this.tabId}-tab`, tabIndex: 0, hidden: !this.active }, h("slot", { key: 'c400039a555250263dc4b48ba2a940895634bb50' })));
    }
    static get watchers() { return {
        "active": ["watchActivePanel"]
    }; }
};
GuxTabPanel.style = guxTabPanelCss;

export { GuxTabPanel as gux_tab_panel };
