import { h, Host } from "@stencil/core";
/**
 * @slot - content
 */
export class GuxTabPanel {
    constructor() {
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
    static get is() { return "gux-tab-panel"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-tab-panel.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-tab-panel.css"]
        };
    }
    static get properties() {
        return {
            "tabId": {
                "type": "string",
                "attribute": "tab-id",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Tab id of the tab that is associated with the panel"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "active": {}
        };
    }
    static get events() {
        return [{
                "method": "guxactivepanelchange",
                "name": "guxactivepanelchange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Triggers when the active panel changes"
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
            "guxSetActive": {
                "complexType": {
                    "signature": "(active: boolean) => Promise<void>",
                    "parameters": [{
                            "name": "active",
                            "type": "boolean",
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
    static get watchers() {
        return [{
                "propName": "active",
                "methodName": "watchActivePanel"
            }];
    }
}
