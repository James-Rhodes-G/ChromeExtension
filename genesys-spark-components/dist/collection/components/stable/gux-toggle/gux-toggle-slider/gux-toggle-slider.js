import { h } from "@stencil/core";
export class GuxToggleSlider {
    constructor() {
        this.checked = false;
        this.disabled = false;
        this.guxAriaLabel = '';
        this.labelId = '';
        this.errorId = '';
    }
    componentDidLoad() {
        var _a, _b;
        (_a = this.checkboxElement) === null || _a === void 0 ? void 0 : _a.setAttribute('aria-label', this.guxAriaLabel);
        if (this.errorId) {
            (_b = this.checkboxElement) === null || _b === void 0 ? void 0 : _b.setAttribute('aria-describedby', this.errorId);
        }
    }
    render() {
        const isError = this.errorId.length > 0;
        return (h("div", { key: '7e904fec179d33abf50e85c085f01804216b109f', class: {
                'gux-toggle-slider': true,
                'gux-checked': this.checked,
                'gux-disabled': this.disabled,
                'gux-error': isError
            }, role: "checkbox", "aria-checked": this.checked.toString(), "aria-disabled": this.disabled.toString(), tabindex: this.disabled ? '' : '0', ref: el => (this.checkboxElement = el) }, h("div", { key: '39b8300d64847239ab4efb0e70e72ee3fc338c33', class: "gux-slider" }, h("div", { key: '4a5cfb7661b17e4c4e391f666eec375284437ca7', class: "gux-switch" }, !isError && (h("gux-icon", { key: '2abaa66145b5c7e8eb203b8f17c15fe9ba426f58', "icon-name": "fa/check-solid", decorative: true }))))));
    }
    static get is() { return "gux-toggle-slider"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-toggle-slider.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-toggle-slider.css"]
        };
    }
    static get properties() {
        return {
            "checked": {
                "type": "boolean",
                "attribute": "checked",
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
            "guxAriaLabel": {
                "type": "string",
                "attribute": "gux-aria-label",
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
                "reflect": false,
                "defaultValue": "''"
            },
            "labelId": {
                "type": "string",
                "attribute": "label-id",
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
                "reflect": false,
                "defaultValue": "''"
            },
            "errorId": {
                "type": "string",
                "attribute": "error-id",
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
                "reflect": false,
                "defaultValue": "''"
            }
        };
    }
}
