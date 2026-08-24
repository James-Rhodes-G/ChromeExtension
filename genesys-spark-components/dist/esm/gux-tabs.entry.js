import { r as registerInstance, c as createEvent, h, H as Host, a as getElement } from './index-xFL2agjT.js';
import { t as trackComponent } from './usage-D2Q7fj4V.js';

const guxTabsCss = ":host{display:flex;flex-direction:column}:host .gux-tabs{display:flex;block-size:100%}:host .gux-tabs:not(.gux-vertical){flex-direction:column}:host .gux-panel-container{display:flex;flex:1 1 auto;flex-direction:column;block-size:100%;min-block-size:0}";

const GuxTabs = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.guxactivetabchange = createEvent(this, "guxactivetabchange", 7);
        /**
         * Specifies horizontal or vertical orientation of tabs
         */
        this.orientation = 'horizontal';
        /**
         * Specifies left aligned, centered, or full width tabs
         */
        this.alignment = 'left';
        this.tabPanels = [];
    }
    watchActiveTab(newValue) {
        this.activateTab(newValue, this.tabList, this.tabPanels);
        this.guxactivetabchange.emit(newValue);
    }
    onInternalActivateTabPanel(event) {
        event.stopPropagation();
        const tabId = event.detail;
        this.activateTab(tabId, this.tabList, this.tabPanels);
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async guxActivate(tabId) {
        this.activateTab(tabId, this.tabList, this.tabPanels);
    }
    onSlotchange() {
        const [tabListSlot, defaultSlot] = Array.from(this.root.shadowRoot.querySelectorAll('slot'));
        this.tabList = tabListSlot.assignedElements()[0];
        this.tabPanels = defaultSlot.assignedElements();
        this.activateTab(this.activeTab, this.tabList, this.tabPanels);
    }
    activateTab(tabId, tabList, panels) {
        if (tabId) {
            this.activeTab = tabId;
        }
        else {
            this.activeTab = panels[0].tabId;
        }
        void (tabList === null || tabList === void 0 ? void 0 : tabList.guxSetActive(this.activeTab));
        panels === null || panels === void 0 ? void 0 : panels.forEach(panel => void panel.guxSetActive(panel.tabId === this.activeTab));
    }
    componentWillLoad() {
        trackComponent(this.root);
    }
    render() {
        return (h(Host, { key: '581ca952c8086815333b906d56a2ae00e85a3b9c' }, h("div", { key: '51d770acd321212e11ec654d9fb9a0d53d79cab1', class: `gux-tabs gux-${this.alignment} gux-${this.orientation}` }, h("slot", { key: 'e1ff7b3d10b9f5c9a612fc9b856d0bbc24b38475', name: "tab-list" }), h("div", { key: '78ecb01306e91a18392572b9ffb79a7d56594478', class: `gux-${this.alignment} gux-${this.orientation} gux-panel-container` }, h("slot", { key: 'fe3c9960ce70990a5d460b1d70a4eff560413216', onSlotchange: this.onSlotchange.bind(this) })))));
    }
    get root() { return getElement(this); }
    static get watchers() { return {
        "activeTab": ["watchActiveTab"]
    }; }
};
GuxTabs.style = guxTabsCss;

export { GuxTabs as gux_tabs };
