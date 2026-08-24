import { h, Host } from "@stencil/core";
import { trackComponent } from "../../../utils/tracking/usage";
import { findElementById } from "../../../utils/dom/find-element-by-";
import { randomHTMLId } from "../../../utils/dom/random-html-";
/**
 * @slot content - Slot for content
 */
export class GuxTooltip {
    constructor() {
        this.id = randomHTMLId('gux-tooltip');
        /**
         * Placement of the tooltip. Default is bottom-start
         */
        this.placement = 'bottom-start';
        this.accent = 'light';
        /**
         * Determines whether the text in the tooltip is read by screenreaders.
         * Use for cases where the forElement component handles the accessibility.
         */
        this.visualOnly = false;
    }
    /*
     * Show tooltip
     */
    async showTooltip() {
        return await this.baseTooltip.showTooltip();
    }
    /*
     * Hide tooltip
     */
    async hideTooltip() {
        return await this.baseTooltip.hideTooltip();
    }
    updateForElement() {
        this.forElement = this.getForElement();
    }
    componentWillLoad() {
        trackComponent(this.root, { variant: this.placement });
    }
    componentDidLoad() {
        if (this.baseTooltip) {
            this.tooltipObserver = new MutationObserver(() => {
                var _a;
                this.role = (_a = this.baseTooltip) === null || _a === void 0 ? void 0 : _a.role;
            });
            this.tooltipObserver.observe(this.baseTooltip, {
                childList: true,
                attributes: true,
                attributeFilter: ['role']
            });
        }
    }
    connectedCallback() {
        this.updateForElement();
    }
    disconnectedCallback() {
        if (this.tooltipObserver) {
            this.tooltipObserver.disconnect();
        }
    }
    getForElement() {
        if (this.for) {
            const forElement = findElementById(this.root, this.for);
            if (!forElement) {
                this.logForAttributeError();
            }
            return forElement;
        }
        else {
            return this.root.parentElement;
        }
    }
    logForAttributeError() {
        if (this.root.isConnected) {
            console.error(`gux-tooltip: invalid element supplied to 'for': "${this.for}"`);
        }
    }
    render() {
        return (h(Host, { key: 'dec2e09c13b69b06a53cbdc4960bac6122b23bab', id: this.id, role: this.role }, h("gux-tooltip-base-beta", { key: '27e945d1b66edc8bce373db4a7ce7008d30edfc9', forElement: this.forElement, placement: this.placement, accent: this.accent, tooltipId: this.id, visualOnly: this.visualOnly, ref: el => (this.baseTooltip = el) }, h("span", { key: '150d934b5aad6f476b0a351f317834ac17e6de8e', slot: "content" }, h("slot", { key: 'bd3602ad0e6f4ac30df9517589e3cb0a2d1a9b3d', name: "content" }, h("slot", { key: 'b7bd4b50d40a548e0506e3294b26b62c044c89d2' }))))));
    }
    static get is() { return "gux-tooltip-beta"; }
    static get encapsulation() { return "shadow"; }
    static get properties() {
        return {
            "for": {
                "type": "string",
                "attribute": "for",
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
                    "text": "Indicates the id of the element the popover should anchor to. (If not supplied the parent element is used)"
                },
                "getter": false,
                "setter": false,
                "reflect": false
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
                    "text": "Placement of the tooltip. Default is bottom-start"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'bottom-start'"
            },
            "accent": {
                "type": "string",
                "attribute": "accent",
                "mutable": false,
                "complexType": {
                    "original": "GuxTooltipAccent",
                    "resolved": "\"dark\" | \"light\"",
                    "references": {
                        "GuxTooltipAccent": {
                            "location": "import",
                            "path": "./gux-tooltip-types",
                            "id": "src/components/beta/gux-tooltip-beta/gux-tooltip-types.ts::GuxTooltipAccent"
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
                "defaultValue": "'light'"
            },
            "visualOnly": {
                "type": "boolean",
                "attribute": "visual-only",
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
                    "text": "Determines whether the text in the tooltip is read by screenreaders.\nUse for cases where the forElement component handles the accessibility."
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
            "forElement": {},
            "role": {}
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
    static get watchers() {
        return [{
                "propName": "for",
                "methodName": "updateForElement"
            }];
    }
}
