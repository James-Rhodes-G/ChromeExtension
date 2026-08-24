import { h } from "@stencil/core";
/**
 * @slot - text
 */
export class GuxTab {
    constructor() {
        /**
         * Specifies if tab is disabled
         */
        this.guxDisabled = false;
        this.active = false;
    }
    onClick() {
        if (!this.active && !this.guxDisabled) {
            this.internalactivatetabpanel.emit(this.tabId);
        }
    }
    onFocusin() {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        void this.tooltipTitleElement.setShowTooltip();
    }
    onFocusout() {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        void this.tooltipTitleElement.setHideTooltip();
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async guxSetActive(active) {
        this.active = active;
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async guxFocus() {
        this.buttonElement.focus();
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async guxGetActive() {
        return this.active;
    }
    getTabIndex() {
        if (this.guxDisabled) {
            return null;
        }
        if (this.active) {
            return 0;
        }
        return -1;
    }
    render() {
        return (h("button", { key: 'af9cc1d13fd343ed639af5b5c0a823ecb1d9cbaa', class: {
                'gux-disabled': this.guxDisabled,
                'gux-tab': true,
                'gux-active': this.active
            }, type: "button", disabled: this.guxDisabled, id: `gux-${this.tabId}-tab`, role: "tab", "aria-controls": `gux-${this.tabId}-panel`, "aria-selected": this.active.toString(), tabIndex: this.getTabIndex(), ref: el => (this.buttonElement = el) }, h("gux-tooltip-title", { key: 'af4042e5e292f3e08d71e6aae02b46ccc2ad2317', ref: el => (this.tooltipTitleElement = el) }, h("span", { key: '4f9d4c95ac84a6dea7315df0603c4afbfbdcfebb' }, h("slot", { key: 'f7a3783d3665bc784efde8f190fd0dc37474ceae' })))));
    }
    static get is() { return "gux-tab"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-tab.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-tab.css"]
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
                    "text": "Tab id for the tab"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "guxDisabled": {
                "type": "boolean",
                "attribute": "gux-disabled",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Specifies if tab is disabled"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
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
                "method": "internalactivatetabpanel",
                "name": "internalactivatetabpanel",
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
            },
            "guxFocus": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
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
            },
            "guxGetActive": {
                "complexType": {
                    "signature": "() => Promise<boolean>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<boolean>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
    static get listeners() {
        return [{
                "name": "click",
                "method": "onClick",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "focusin",
                "method": "onFocusin",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "focusout",
                "method": "onFocusout",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
