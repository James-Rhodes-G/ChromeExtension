import { h } from "@stencil/core";
import { getClosestElement } from "../../../../utils/dom/get-closest-element";
import { getSlotTextContent } from "../../../../utils/dom/get-slot-text-content";
import { hasSlot } from "../../../../utils/dom/has-slot";
/**
 * @slot icon - optional slot for an icon
 * @slot text - required slot for text
 */
export class GuxSegmentedControlItem {
    constructor() {
        this.selected = false;
        this.disabled = false;
        this.iconOnly = false;
    }
    onClick(e) {
        if (this.disabled || this.hasDisabledParent()) {
            e.stopPropagation();
        }
    }
    isInStartPosition() {
        const parentSegmentControl = getClosestElement('gux-segmented-control-beta', this.root);
        const children = Array.from(parentSegmentControl.children);
        const index = children.findIndex(i => i === this.root);
        return index === 0;
    }
    isInEndPosition() {
        const parentSegmentControl = getClosestElement('gux-segmented-control-beta', this.root);
        const children = Array.from(parentSegmentControl.children);
        const index = children.findIndex(i => i === this.root);
        return index === children.length - 1;
    }
    hasDisabledParent() {
        const parentSegmentControl = getClosestElement('gux-segmented-control-beta', this.root);
        return parentSegmentControl.disabled;
    }
    renderTooltip() {
        if (this.iconOnly) {
            return (h("gux-tooltip", null, h("div", { slot: "content" }, getSlotTextContent(this.root, 'text'))));
        }
    }
    renderIconSlot() {
        if (hasSlot(this.root, 'icon')) {
            return (h("div", { class: {
                    'gux-icon': true,
                    'gux-icon-only': this.iconOnly
                } }, h("slot", { name: "icon" })));
        }
    }
    render() {
        return (h("div", { key: '793138dadd46ea3397776690e101cdcac0bbd382', class: {
                'gux-container': true,
                'gux-parent-disabled': this.hasDisabledParent(),
                'gux-start': this.isInStartPosition(),
                'gux-end': this.isInEndPosition()
            } }, h("button", { key: '42e5a00697a2c0deb577e4ba6fee1923371a26ec', class: {
                'gux-segmented-control-item': true,
                'gux-icon-only': this.iconOnly,
                'gux-selected': this.selected
            }, type: "button", "aria-current": this.selected ? 'true' : 'false', disabled: this.disabled || this.hasDisabledParent() }, this.renderIconSlot(), h("div", { key: '21fbcc98545dcd37f2bc115493d8dd38b30abfa0', class: {
                'gux-text': true,
                'gux-icon-only': this.iconOnly
            } }, h("slot", { key: 'e467fb435d4f2c777c55fc6873394eb499f02ab8', name: "text" }))), this.renderTooltip()));
    }
    static get is() { return "gux-segmented-control-item"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-segmented-control-item.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-segmented-control-item.css"]
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
            "iconOnly": {
                "type": "boolean",
                "attribute": "icon-only",
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
    static get elementRef() { return "root"; }
    static get listeners() {
        return [{
                "name": "click",
                "method": "onClick",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
