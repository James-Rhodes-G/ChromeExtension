import { h, Host } from "@stencil/core";
import { autoUpdate, computePosition, flip, hide, offset, shift } from "@floating-ui/dom";
import { randomHTMLId } from "../../../utils/dom/random-html-";
import { trackComponent } from "../../../utils/tracking/usage";
import { afterNextRender } from "../../../utils/dom/after-next-render";
import { overflowDetection } from "../../../utils/dom/overflow-detection";
/**
 * @slot content - Slot for content
 */
export class GuxTooltipBase {
    constructor() {
        this.pointerenterHandler = () => this.show();
        this.pointerleaveHandler = () => this.hide();
        this.focusinHandler = () => this.show();
        this.focusoutHandler = () => this.hide();
        this.forElementListeners = new Map([
            ['pointerenter', this.pointerenterHandler],
            ['pointerleave', this.pointerleaveHandler],
            ['focusin', this.focusinHandler],
            ['focusout', this.focusoutHandler],
            ['mousemove', this.handlePointerMove.bind(this)]
        ]);
        this.id = randomHTMLId('gux-tooltip-base');
        /**
         * Placement of the tooltip. Default is bottom-start
         */
        this.placement = 'bottom-start';
        this.offsetX = 0;
        this.offsetY = 0;
        this.accent = 'light';
        /**
         * Determines whether the text in the tooltip is read by screenreaders.
         * Use for cases where the forElement component handles the accessibility.
         */
        this.visualOnly = false;
        this.followMouse = false;
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
    handlePointerMove(event) {
        if (this.followMouse) {
            event.preventDefault();
            this.refElement = this.getRefElement(event.clientX, event.clientY);
            this.runUpdatePosition();
        }
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
        const ref = this.followMouse && this.refElement ? this.refElement : this.forElement;
        this.cleanupUpdatePosition = autoUpdate(ref, this.root, () => this.updatePosition(ref), {
            ancestorScroll: true,
            elementResize: true,
            animationFrame: this.followMouse,
            ancestorResize: true
        });
    }
    updatePosition(ref) {
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
        void computePosition(ref, this.root, {
            placement: this.placement,
            strategy: 'fixed',
            middleware: middleware
        }).then(({ x, y, middlewareData }) => {
            var _a;
            Object.assign(this.root.style, {
                left: `${x + this.offsetX}px`,
                top: `${y + this.offsetY}px`,
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
            this.isShown = false;
            this.refElement = undefined;
            if (this.cleanupUpdatePosition) {
                this.cleanupUpdatePosition();
            }
        }, 350);
    }
    setForElement() {
        if (this.forElement) {
            if (!this.visualOnly) {
                const tooltipId = this.tooltipId ? this.tooltipId : this.id;
                this.forElement.setAttribute('aria-describedby', tooltipId);
            }
            this.forElementListeners.forEach((handler, type) => this.forElement.addEventListener(type, handler));
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
    getRefElement(cursorX, cursorY) {
        return {
            getBoundingClientRect() {
                return {
                    x: cursorX,
                    y: cursorY,
                    top: cursorY,
                    left: cursorX,
                    bottom: cursorY,
                    right: cursorX,
                    width: 10,
                    height: 10
                };
            }
        };
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
        return (h(Host, { key: '98c28c32aa5196c39c583bc5fd25fdcc6aeafc5d', id: this.tooltipId ? undefined : this.id, role: this.tooltipId && !this.isShown ? undefined : 'tooltip', class: { 'gux-show': this.isShown }, "aria-hidden": this.visualOnly }, h("div", { key: 'b6028bb11ee231748feae82bf4c9f2412cfb35c2', class: {
                'gux-container': true,
                [`gux-${this.accent}`]: true
            }, "data-placement": this.placement }, h("slot", { key: '41a0004706e0bb1482c3e82f92049edf5cea3eaf', name: "content" }))));
    }
    static get is() { return "gux-tooltip-base-beta"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-tooltip-base.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-tooltip-base.css"]
        };
    }
    static get properties() {
        return {
            "tooltipId": {
                "type": "string",
                "attribute": "tooltip-id",
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
            "forElement": {
                "type": "unknown",
                "attribute": "for-element",
                "mutable": false,
                "complexType": {
                    "original": "HTMLElement",
                    "resolved": "HTMLElement",
                    "references": {
                        "HTMLElement": {
                            "location": "global",
                            "id": "global::HTMLElement"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Indicates the element the popover should anchor to."
                },
                "getter": false,
                "setter": false
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
            "offsetX": {
                "type": "number",
                "attribute": "offset-x",
                "mutable": true,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
                "defaultValue": "0"
            },
            "offsetY": {
                "type": "number",
                "attribute": "offset-y",
                "mutable": true,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
                "defaultValue": "0"
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
                            "path": "../gux-tooltip-beta/gux-tooltip-types",
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
            },
            "followMouse": {
                "type": "boolean",
                "attribute": "follow-mouse",
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
            "isShown": {},
            "refElement": {}
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
                "propName": "offsetX",
                "methodName": "runUpdatePosition"
            }, {
                "propName": "offsetY",
                "methodName": "runUpdatePosition"
            }, {
                "propName": "forElement",
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
            }, {
                "name": "mousemove",
                "method": "handlePointerMove",
                "target": undefined,
                "capture": false,
                "passive": true
            }];
    }
}
