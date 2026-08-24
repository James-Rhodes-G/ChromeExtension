import { h, Host } from "@stencil/core";
import { randomHTMLId } from "../../../utils/dom/random-html-";
import { getClosestElement } from "../../../utils/dom/get-closest-element";
/**
 * @slot default - Slot for the status indicator text.
 */
export class GuxOptionStatus {
    constructor() {
        this.active = false;
        this.selected = false;
        this.disabled = false;
        this.accent = 'info';
    }
    handleActive(active) {
        var _a, _b;
        if (active) {
            void ((_a = this.truncateElement) === null || _a === void 0 ? void 0 : _a.setShowTooltip());
        }
        else {
            void ((_b = this.truncateElement) === null || _b === void 0 ? void 0 : _b.setHideTooltip());
        }
    }
    componentWillLoad() {
        this.root.id = this.root.id || randomHTMLId('gux-option-status');
    }
    getAriaSelected() {
        if (this.disabled) {
            return false;
        }
        return this.selected ? 'true' : 'false';
    }
    hasDisabledParent() {
        const parentListbox = getClosestElement('gux-listbox', this.root);
        return parentListbox === null || parentListbox === void 0 ? void 0 : parentListbox.disabled;
    }
    render() {
        return (h(Host, { key: '63ae08c2ed117bef2f23b320fe71d20547137722', role: "option", class: {
                'gux-active': this.active,
                'gux-disabled': this.disabled || this.hasDisabledParent(),
                'gux-selected': this.selected
            }, "aria-selected": this.getAriaSelected(), "aria-disabled": this.disabled.toString() }, h("div", { key: 'be18420ee4530a1be4e0c03fa2562044c985468c', class: "gux-status-indicator" }, h("span", { key: 'b29a62bfc9b5d0d2738ee3bb22ec856b582fd924', class: `gux-status-icon gux-status-icon-${this.accent}` }), h("div", { key: '792923ae02a7142d628d489fbec528408a1d0507', class: "gux-status-indicator-text" }, h("gux-truncate", { key: '0f7c6a4d550740c3e43b5363e1e49837135a6dd1', ref: el => (this.truncateElement = el) }, h("slot", { key: '7f6f3ce673c28e939a407038e8d4fd0fc4cfce0d' }))))));
    }
    static get is() { return "gux-option-status-beta"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-option-status.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-option-status.css"]
        };
    }
    static get properties() {
        return {
            "value": {
                "type": "string",
                "attribute": "value",
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
            },
            "active": {
                "type": "boolean",
                "attribute": "active",
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "selected": {
                "type": "boolean",
                "attribute": "selected",
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "disabled": {
                "type": "boolean",
                "attribute": "disabled",
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "accent": {
                "type": "string",
                "attribute": "accent",
                "mutable": false,
                "complexType": {
                    "original": "GuxStatusIndicatorVariant",
                    "resolved": "\"error\" | \"info\" | \"success\" | \"warning\"",
                    "references": {
                        "GuxStatusIndicatorVariant": {
                            "location": "import",
                            "path": "./gux-option-status.types",
                            "id": "src/components/beta/gux-option-status/gux-option-status.types.ts::GuxStatusIndicatorVariant"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'info'"
            }
        };
    }
    static get elementRef() { return "root"; }
    static get watchers() {
        return [{
                "propName": "active",
                "methodName": "handleActive"
            }];
    }
}
