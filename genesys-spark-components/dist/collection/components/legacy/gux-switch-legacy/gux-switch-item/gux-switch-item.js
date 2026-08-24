import { h, Host } from "@stencil/core";
/**
 * @slot - text
 */
export class GuxSwitchItem {
    constructor() {
        this.selected = false;
        this.disabled = false;
    }
    onClick(e) {
        if (this.disabled) {
            e.stopPropagation();
        }
    }
    render() {
        return (h(Host, { key: 'bbec0575109e6efd87682732b7663341876738a9', class: { 'gux-selected': this.selected } }, h("button", { key: '30ddf040c97d4b052ff3c3ebc6b5a8731691a613', type: "button", class: "gux-switch-item", disabled: this.disabled }, h("slot", { key: 'a5413e54bce99afc3cf4b1ae1d150241d5a32776' }))));
    }
    static get is() { return "gux-switch-item"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-switch-item.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-switch-item.css"]
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
            }];
    }
}
