import { h, Host } from "@stencil/core";
import { getClosestElement } from "../../../../../utils/dom/get-closest-element";
import { randomHTMLId } from "../../../../../utils/dom/random-html-";
import { hasSlot } from "../../../../../utils/dom/has-slot";
/**
 * @slot - text
 * @slot subtext - Optional slot for subtext
 */
export class GuxOptionIcon {
    constructor() {
        this.iconPosition = 'start';
        this.active = false;
        this.selected = false;
        this.disabled = false;
        this.filtered = false;
        this.hovered = false;
        this.hasSubtext = false;
    }
    onmouseenter() {
        this.hovered = true;
    }
    onMouseleave() {
        this.hovered = false;
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
        this.root.id = this.root.id || randomHTMLId('gux-option-icon');
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
    renderMaybeIcon(position) {
        if (position !== this.iconPosition) {
            return null;
        }
        let iconStyle = null;
        // If the icon color is set and we don't have a background highlight that
        // might cause contrast problems, set the color style.
        if (this.iconColor !== null && !(this.hovered || this.active)) {
            iconStyle = { color: this.iconColor };
        }
        return (h("gux-icon", { decorative: this.iconSrText == null, "screenreader-text": this.iconSrText, "icon-name": this.iconName, style: iconStyle, size: "small" }));
    }
    render() {
        return (h(Host, { key: '7f26c292345951dff79122bac08f2b3629382701', role: "option", class: {
                'gux-active': this.active,
                'gux-disabled': this.disabled || this.hasDisabledParent(),
                'gux-filtered': this.filtered,
                'gux-hovered': this.hovered,
                'gux-selected': this.selected,
                'gux-show-subtext': this.hasSubtext
            }, "aria-selected": this.getAriaSelected(), "aria-disabled": this.disabled.toString() }, this.renderMaybeIcon('start'), h("div", { key: '3c6f0d146fb3ac83f204ae35e4beabf2f310a988', class: "gux-option-wrapper" }, h("gux-truncate", { key: '384177cb96af49bc8adbae6c328b7e0e29c7b69a', "tooltip-placement": "right", ref: el => (this.truncateElement = el) }, h("slot", { key: '2479d98605eda40e572cb5381dd3791ab0c2742e' })), h("slot", { key: '3682267ba448c0ae3064497bc5d5806bdfc2e129', onSlotchange: () => this.onSubtextChange(), name: "subtext" })), this.renderMaybeIcon('end')));
    }
    static get is() { return "gux-option-icon"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-option-icon.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-option-icon.css"]
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
            "iconName": {
                "type": "string",
                "attribute": "icon-name",
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
            "iconSrText": {
                "type": "string",
                "attribute": "icon-sr-text",
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
            "iconColor": {
                "type": "string",
                "attribute": "icon-color",
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
            "iconPosition": {
                "type": "string",
                "attribute": "icon-position",
                "mutable": false,
                "complexType": {
                    "original": "'start' | 'end'",
                    "resolved": "\"end\" | \"start\"",
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
                "defaultValue": "'start'"
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
            },
            "hovered": {
                "type": "boolean",
                "attribute": "hovered",
                "mutable": true,
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
    static get listeners() {
        return [{
                "name": "mouseenter",
                "method": "onmouseenter",
                "target": undefined,
                "capture": false,
                "passive": true
            }, {
                "name": "mouseleave",
                "method": "onMouseleave",
                "target": undefined,
                "capture": false,
                "passive": true
            }];
    }
}
