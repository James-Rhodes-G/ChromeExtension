import { r as registerInstance, c as createEvent, h } from './index-xFL2agjT.js';

const guxTabAdvancedPanelCss = "gux-tab-advanced-panel .gux-tabpanel:focus{outline:none}gux-tab-advanced-panel .gux-tabpanel:focus-visible{outline:var(--gse-semantic-focusOutline-md-borderWidth) solid var(--gse-semantic-border-focus);outline-offset:var(--gse-semantic-focusOutline-offset)}";

const GuxTabAdvancedPanel = class {
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
        return (h("div", { key: '2e58faf0af3feab38273e814df801fea0d3aeb73', id: `gux-${this.tabId}-panel`, class: "gux-tabpanel", role: "tabpanel", "aria-labelledby": `gux-${this.tabId}-tab`, tabIndex: 0, hidden: !this.active, "aria-live": "assertive" }, h("slot", { key: '41814de696097de2fac633849d4f400e399a7796' })));
    }
    static get watchers() { return {
        "active": ["watchActivePanel"]
    }; }
};
GuxTabAdvancedPanel.style = guxTabAdvancedPanelCss;

export { GuxTabAdvancedPanel as gux_tab_advanced_panel };
