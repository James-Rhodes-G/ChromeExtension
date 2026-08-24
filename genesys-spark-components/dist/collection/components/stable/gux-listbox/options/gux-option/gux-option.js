import { h, Host } from "@stencil/core";
import { getClosestElement } from "../../../../../utils/dom/get-closest-element";
import { randomHTMLId } from "../../../../../utils/dom/random-html-";
import { hasSlot } from "../../../../../utils/dom/has-slot";
/**
 * @slot - text
 * @slot subtext - Optional slot for subtext
 */
export class GuxOption {
    constructor() {
        this.active = false;
        this.selected = false;
        this.disabled = false;
        this.filtered = false;
        this.hasSubtext = false;
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
        this.root.id = this.root.id || randomHTMLId('gux-option');
        this.onSubtextChange();
    }
    onSubtextChange() {
        this.hasSubtext = hasSlot(this.root, 'subtext');
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
        return (h(Host, { key: 'c2672c6cb5bf516a3495eea8357d3bc4c4c900da', role: "option", class: {
                'gux-active': this.active,
                'gux-disabled': this.disabled || this.hasDisabledParent(),
                'gux-filtered': this.filtered,
                'gux-selected': this.selected,
                'gux-show-subtext': this.hasSubtext
            }, "aria-selected": this.getAriaSelected(), "aria-disabled": this.disabled.toString() }, h("div", { key: 'b85bf4d463039f58f49ec2d6d18d2d1415403f32', class: "gux-option-wrapper" }, h("gux-truncate", { key: '18608184d2d7a77a8fd0018745f9a1b6a8a5fa80', "tooltip-placement": "right", ref: el => (this.truncateElement = el) }, h("slot", { key: '1b42a67570ad5b853612cbfce4481be09442aebd' })), h("slot", { key: '279602519fa45e83691133da63ef404ff014c43e', onSlotchange: () => this.onSubtextChange(), name: "subtext" }))));
    }
    static get is() { return "gux-option"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-option.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-option.css"]
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
            "filtered": {
                "type": "boolean",
                "attribute": "filtered",
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
            }
        };
    }
    static get states() {
        return {
            "hasSubtext": {}
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
