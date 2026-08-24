import { h } from "@stencil/core";
/**
 * @slot - content
 */
export class GuxTabAdvancedPanel {
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
        return (h("div", { key: '2e58faf0af3feab38273e814df801fea0d3aeb73', id: `gux-${this.tabId}-panel`, class: "gux-tabpanel", role: "tabpanel", "aria-labelledby": `gux-${this.tabId}-tab`, tabIndex: 0, hidden: !this.active, "aria-live": "assertive" }, h("slot", { key: '41814de696097de2fac633849d4f400e399a7796' })));
    }
    static get is() { return "gux-tab-advanced-panel"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-tab-advanced-panel.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-tab-advanced-panel.css"]
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
                    "text": ""
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
                    "text": ""
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
