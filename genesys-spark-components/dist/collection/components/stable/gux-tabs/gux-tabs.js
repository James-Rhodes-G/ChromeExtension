import { h, Host } from "@stencil/core";
import { trackComponent } from "../../../utils/tracking/usage";
/**
 * @slot tab-list - Slot for gux-tab-list
 * @slot - collection of gux-tab-panel elements
 */
export class GuxTabs {
    constructor() {
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
    static get is() { return "gux-tabs"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-tabs.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-tabs.css"]
        };
    }
    static get properties() {
        return {
            "activeTab": {
                "type": "string",
                "attribute": "active-tab",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "tabId of the currently selected tab"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "orientation": {
                "type": "string",
                "attribute": "orientation",
                "mutable": false,
                "complexType": {
                    "original": "GuxTabsOrientation",
                    "resolved": "\"horizontal\" | \"vertical\"",
                    "references": {
                        "GuxTabsOrientation": {
                            "location": "import",
                            "path": "./gux-tabs-types",
                            "id": "src/components/stable/gux-tabs/gux-tabs-types.ts::GuxTabsOrientation"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Specifies horizontal or vertical orientation of tabs"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'horizontal'"
            },
            "alignment": {
                "type": "string",
                "attribute": "alignment",
                "mutable": false,
                "complexType": {
                    "original": "GuxTabsAlignment",
                    "resolved": "\"center\" | \"fullWidth\" | \"left\"",
                    "references": {
                        "GuxTabsAlignment": {
                            "location": "import",
                            "path": "./gux-tabs-types",
                            "id": "src/components/stable/gux-tabs/gux-tabs-types.ts::GuxTabsAlignment"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Specifies left aligned, centered, or full width tabs"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'left'"
            }
        };
    }
    static get states() {
        return {
            "tabList": {},
            "tabPanels": {}
        };
    }
    static get events() {
        return [{
                "method": "guxactivetabchange",
                "name": "guxactivetabchange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Triggers when the active tab changes."
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "guxActivate": {
                "complexType": {
                    "signature": "(tabId: string) => Promise<void>",
                    "parameters": [{
                            "name": "tabId",
                            "type": "string",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "root"; }
    static get watchers() {
        return [{
                "propName": "activeTab",
                "methodName": "watchActiveTab"
            }];
    }
    static get listeners() {
        return [{
                "name": "internalactivatetabpanel",
                "method": "onInternalActivateTabPanel",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
