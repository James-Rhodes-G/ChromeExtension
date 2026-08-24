import { h } from "@stencil/core";
import { getClosestElement } from "../../../../genesys-spark-utils/get-closest-element";
import { trackComponent } from "../../../../utils/tracking/usage";
import { getSlotTextContent } from "../../../../utils/dom/get-slot-text-content";
/**
 * @slot text - Slot for action text.
 * @slot icon - Slot for icon.
 */
export class GuxTableToolbarCustomAction {
    constructor() {
        this.iconOnly = false;
        this.accent = 'secondary';
        this.disabled = false;
    }
    handleClick(event) {
        if (this.disabled) {
            event.preventDefault();
            event.stopImmediatePropagation();
        }
    }
    hideText() {
        const parent = getClosestElement(this.root, 'gux-table-toolbar');
        const nonCondensedParentLayout = (parent === null || parent === void 0 ? void 0 : parent.getAttribute('gs-layout')) !== 'condensed';
        return this.iconOnly && nonCondensedParentLayout;
    }
    renderTooltip() {
        if (this.hideText()) {
            return (h("gux-tooltip", null, h("div", { slot: "content" }, getSlotTextContent(this.root, 'text'))));
        }
    }
    componentWillLoad() {
        trackComponent(this.root);
    }
    render() {
        return (h("gux-button-slot", { key: '61217c24713e01b9209acd9fc11af084a66f1e5a', accent: this.accent }, h("button", { key: 'd55ec1093371c0bac72df7844ec74c9367cc9844', disabled: this.disabled, type: "button", class: "gux-action-title" }, h("slot", { key: '8aa9bbd6693a1bf456f03db7dabb17a3007fe33f', name: "icon" }), h("span", { key: '1ea0dcc0f10779786aa2a82642f58cc847ad665e', class: { 'gux-sr-only': this.hideText() } }, h("slot", { key: '8460cb5eec68e07b36c229b0b1264a443868eaaf', name: "text" }))), this.renderTooltip()));
    }
    static get is() { return "gux-table-toolbar-custom-action"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-table-toolbar-custom-action.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-table-toolbar-custom-action.css"]
        };
    }
    static get properties() {
        return {
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
            },
            "accent": {
                "type": "string",
                "attribute": "accent",
                "mutable": false,
                "complexType": {
                    "original": "GuxTableToolbarActionAccent",
                    "resolved": "\"ghost\" | \"primary\" | \"secondary\"",
                    "references": {
                        "GuxTableToolbarActionAccent": {
                            "location": "import",
                            "path": "../gux-table-toolbar-action-accents.types",
                            "id": "src/components/stable/gux-table-toolbar/gux-table-toolbar-action-accents.types.ts::GuxTableToolbarActionAccent"
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
                "defaultValue": "'secondary'"
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
            }
        };
    }
    static get elementRef() { return "root"; }
    static get listeners() {
        return [{
                "name": "click",
                "method": "handleClick",
                "target": undefined,
                "capture": true,
                "passive": false
            }];
    }
}
