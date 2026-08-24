import { h, Host } from "@stencil/core";
import { autoUpdate, computePosition, flip, hide, offset, shift } from "@floating-ui/dom";
import { randomHTMLId } from "../../../utils/dom/random-html-";
import { trackComponent } from "../../../utils/tracking/usage";
import { findElementById } from "../../../utils/dom/find-element-by-";
import { afterNextRender } from "../../../utils/dom/after-next-render";
import { overflowDetection } from "../../../utils/dom/overflow-detection";
/**
 * @slot content - Slot for content
 */
export class GuxTooltip {
    constructor() {
        this.pointerenterHandler = () => this.show();
        this.pointerleaveHandler = () => this.hide();
        this.focusinHandler = () => this.show();
        this.focusoutHandler = () => this.hide();
        this.forElementListeners = new Map([
            ['pointerenter', this.pointerenterHandler],
            ['pointerleave', this.pointerleaveHandler],
            ['focusin', this.focusinHandler],
            ['focusout', this.focusoutHandler]
        ]);
        this.id = randomHTMLId('gux-tooltip');
        /**
         * Placement of the tooltip. Default is bottom-start
         */
        this.placement = 'bottom-start';
        this.accent = 'light';
        /**
         * If tooltip is shown or not
         */
        this.isShown = false;
    }
    handleKeyDown(event) {
        if (event.key === 'Escape' && this.isShown) {
            this.hide();
        }
    }
    handlePointerenter() {
        this.show();
    }
    handlePointerleave() {
        this.hide();
    }
    /*
     * Show tooltip
     */
    // eslint-disable-next-line @typescript-eslint/require-await
    async showTooltip() {
        this.show();
    }
    /*
     * Hide tooltip
     */
    // eslint-disable-next-line @typescript-eslint/require-await
    async hideTooltip() {
        this.hide();
    }
    runUpdatePosition() {
        if (this.cleanupUpdatePosition) {
            this.cleanupUpdatePosition();
        }
        this.cleanupUpdatePosition = autoUpdate(this.forElement, this.root, () => this.updatePosition(), {
            ancestorScroll: true,
            elementResize: true,
            animationFrame: false,
            ancestorResize: true
        });
    }
    updatePosition() {
        const middleware = [
            offset(12),
            flip({
                fallbackAxisSideDirection: 'start',
                crossAxis: false
            }),
            shift(),
            hide(),
            overflowDetection()
        ];
        void computePosition(this.forElement, this.root, {
            placement: this.placement,
            strategy: 'fixed',
            middleware: middleware
        }).then(({ x, y, middlewareData }) => {
            var _a;
            Object.assign(this.root.style, {
                left: `${x}px`,
                top: `${y}px`,
                visibility: ((_a = middlewareData.hide) === null || _a === void 0 ? void 0 : _a.referenceHidden) ? 'hidden' : 'visible'
            });
            //data-placement needed on the for e2e tests.
            this.root.setAttribute('data-placement', this.placement);
        });
    }
    show() {
        clearTimeout(this.hideDelayTimeout);
        this.isShown = true;
        afterNextRender(() => {
            this.runUpdatePosition();
        });
    }
    hide() {
        this.hideDelayTimeout = setTimeout(() => {
            if (this.cleanupUpdatePosition) {
                this.cleanupUpdatePosition();
            }
            this.isShown = false;
        }, 350);
    }
    getForElement() {
        if (this.for) {
            return findElementById(this.root, this.for);
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
    setForElement() {
        this.forElement = this.getForElement();
        if (this.forElement) {
            this.forElement.setAttribute('aria-describedby', this.id);
            this.forElementListeners.forEach((handler, type) => this.forElement.addEventListener(type, handler));
        }
        else {
            this.logForAttributeError();
        }
    }
    disconnectForElement() {
        if (this.forElement) {
            this.forElement.removeAttribute('aria-describedby');
            this.forElementListeners.forEach((handler, type) => this.forElement.removeEventListener(type, handler));
        }
    }
    updateForElement() {
        this.disconnectForElement();
        this.setForElement();
    }
    connectedCallback() {
        this.setForElement();
    }
    componentWillLoad() {
        trackComponent(this.root, { variant: this.placement });
    }
    disconnectedCallback() {
        if (this.cleanupUpdatePosition) {
            this.cleanupUpdatePosition();
        }
        this.disconnectForElement();
    }
    render() {
        return (h(Host, { key: '6c4e4b9fcea047ddaa15fef056db54e201dbe5b6', id: this.id, class: { 'gux-show': this.isShown }, role: "tooltip" }, h("div", { key: '95ecb5dc6de5bab5ca53b04aba2307fe30d138de', class: {
                'gux-container': true,
                [`gux-${this.accent}`]: true
            }, "data-placement": this.placement }, h("slot", { key: '2bbde39cc9a7ccdf305995b35f0a55cbaf04e242', name: "content" }, h("slot", { key: '7e78cba125baf81a59884cb0a44c16c3ecebabcf' })))));
    }
    static get is() { return "gux-tooltip"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-tooltip.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-tooltip.css"]
        };
    }
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
                            "id": "src/components/stable/gux-tooltip/gux-tooltip-types.ts::GuxTooltipAccent"
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
            }
        };
    }
    static get states() {
        return {
            "isShown": {}
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
    static get listeners() {
        return [{
                "name": "keydown",
                "method": "handleKeyDown",
                "target": "window",
                "capture": false,
                "passive": true
            }, {
                "name": "pointerenter",
                "method": "handlePointerenter",
                "target": undefined,
                "capture": false,
                "passive": true
            }, {
                "name": "pointerleave",
                "method": "handlePointerleave",
                "target": undefined,
                "capture": false,
                "passive": true
            }];
    }
}
