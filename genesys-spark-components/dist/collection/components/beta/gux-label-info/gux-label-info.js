import { h } from "@stencil/core";
import { trackComponent } from "../../../utils/tracking/usage";
import { getSlotTextContent } from "../../../utils/dom/get-slot-text-content";
/**
 * @slot content - Required slot for tooltip and screenreader content
 */
export class GuxLabelInfo {
    constructor() {
        this.variant = 'info';
        this.placement = 'right';
    }
    componentWillLoad() {
        trackComponent(this.root, { variant: this.variant });
    }
    getVariantIcon(variant) {
        return variant === 'question'
            ? 'fa/circle-question-regular'
            : 'fa/circle-info-regular';
    }
    /*
     * Show tooltip
     */
    async showTooltip() {
        return await this.tooltipElement.showTooltip();
    }
    /*
     * Hide tooltip
     */
    async hideTooltip() {
        return await this.tooltipElement.hideTooltip();
    }
    render() {
        return (h("div", { key: 'b76ff06369ed70fd75e794f96f74be8e3f8a76b5', class: "gux-label-info" }, h("gux-screen-reader-beta", { key: '454ab062488bc37d73fb88b769236ce243cd38f4' }, getSlotTextContent(this.root, 'content')), h("gux-icon", { key: '27713594a6c58c34b262f6eb22605bacc63d8fcd', "icon-name": this.getVariantIcon(this.variant), size: "small", decorative: true }), h("gux-tooltip-beta", { key: 'bf484212d4525b01e8b448ef2b7ff90d7299a4c3', placement: this.placement, ref: el => (this.tooltipElement = el) }, h("slot", { key: 'a3c28acb003422167bc32707208f5539081bbed1', name: "content" }))));
    }
    static get is() { return "gux-label-info-beta"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-label-info.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-label-info.css"]
        };
    }
    static get properties() {
        return {
            "variant": {
                "type": "string",
                "attribute": "variant",
                "mutable": false,
                "complexType": {
                    "original": "GuxLabelInfoVariant",
                    "resolved": "\"info\" | \"question\"",
                    "references": {
                        "GuxLabelInfoVariant": {
                            "location": "import",
                            "path": "./gux-label-info.types",
                            "id": "src/components/beta/gux-label-info/gux-label-info.types.ts::GuxLabelInfoVariant"
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
            },
            "placement": {
                "type": "string",
                "attribute": "placement",
                "mutable": true,
                "complexType": {
                    "original": "Placement",
                    "resolved": "\"bottom\" | \"bottom-end\" | \"bottom-start\" | \"left\" | \"left-end\" | \"left-start\" | \"right\" | \"right-end\" | \"right-start\" | \"top\" | \"top-end\" | \"top-start\"",
                    "references": {
                        "Placement": {
                            "location": "import",
                            "path": "@floating-ui/dom",
                            "id": "../../node_modules/@floating-ui/dom/dist/floating-ui.dom.d.ts::Placement"
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
                "defaultValue": "'right'"
            }
        };
    }
    static get methods() {
        return {
            "showTooltip": {
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
            "hideTooltip": {
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
            }
        };
    }
    static get elementRef() { return "root"; }
}
