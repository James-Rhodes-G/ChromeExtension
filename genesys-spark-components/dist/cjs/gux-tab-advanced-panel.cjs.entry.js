'use strict';

var index = require('./index-BLhHoh_r.js');

const guxTabAdvancedPanelCss = "gux-tab-advanced-panel .gux-tabpanel:focus{outline:none}gux-tab-advanced-panel .gux-tabpanel:focus-visible{outline:var(--gse-semantic-focusOutline-md-borderWidth) solid var(--gse-semantic-border-focus);outline-offset:var(--gse-semantic-focusOutline-offset)}";

const GuxTabAdvancedPanel = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.guxactivepanelchange = index.createEvent(this, "guxactivepanelchange", 7);
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
        return (index.h("div", { key: '2e58faf0af3feab38273e814df801fea0d3aeb73', id: `gux-${this.tabId}-panel`, class: "gux-tabpanel", role: "tabpanel", "aria-labelledby": `gux-${this.tabId}-tab`, tabIndex: 0, hidden: !this.active, "aria-live": "assertive" }, index.h("slot", { key: '41814de696097de2fac633849d4f400e399a7796' })));
    }
    static get watchers() { return {
        "active": ["watchActivePanel"]
    }; }
};
GuxTabAdvancedPanel.style = guxTabAdvancedPanelCss;

exports.gux_tab_advanced_panel = GuxTabAdvancedPanel;
