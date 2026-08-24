import { h, Host } from "@stencil/core";
/**
 * @slot - text
 */
export class GuxListItem {
    constructor() {
        this.disabled = false;
    }
    render() {
        return (h(Host, { key: '58b4b87f804d304bc00e519f35f31476bcd5fd4d', role: "listitem" }, h("button", { key: '22a7f84a96bd64ad8005075625273a8879d6ee29', type: "button", tabIndex: -1, disabled: this.disabled, "data-testid": "list-item-button" }, h("slot", { key: '774aecf35cddf804daab45b2ccd2fec333670307' }))));
    }
    static get is() { return "gux-list-item"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-list-item.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-list-item.css"]
        };
    }
    static get properties() {
        return {
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
}
