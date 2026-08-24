import { r as registerInstance, c as createEvent, h, H as Host, a as getElement } from './index-xFL2agjT.js';
import { t as trackComponent } from './usage-D2Q7fj4V.js';

const GuxTabsAdvanced = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.guxactivetabchange = createEvent(this, "guxactivetabchange", 7);
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
        this.tabList =
            tabListSlot.assignedElements()[0];
        this.tabPanels =
            defaultSlot.assignedElements();
        this.activateTab(this.activeTab, this.tabList, this.tabPanels);
    }
    activateTab(tabId, tabList, panels) {
        var _a;
        if (tabId) {
            this.activeTab = tabId;
        }
        else {
            this.activeTab = (_a = tabList === null || tabList === void 0 ? void 0 : tabList.querySelector('gux-tab-advanced')) === null || _a === void 0 ? void 0 : _a.getAttribute('tab-id');
        }
        void tabList.guxSetActive(this.activeTab);
        panels.forEach(panel => void panel.guxSetActive(panel.tabId === this.activeTab));
    }
    componentWillLoad() {
        trackComponent(this.root);
    }
    render() {
        return (h(Host, { key: 'f8d467e69f5ecd3eacb96b499a33e169dfaaa6da' }, h("slot", { key: 'd78a28bbe2ece06e6f5d71cbececfe22d230d1f8', name: "tab-list" }), h("slot", { key: 'b5e506c353ea542b2fa58289811fd781f9366cbd', onSlotchange: this.onSlotchange.bind(this) })));
    }
    get root() { return getElement(this); }
    static get watchers() { return {
        "activeTab": ["watchActiveTab"]
    }; }
};

export { GuxTabsAdvanced as gux_tabs_advanced };
