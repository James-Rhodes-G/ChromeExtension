import { h } from "@stencil/core";
import { autoUpdate, computePosition, flip, offset, size, shift, hide } from "@floating-ui/dom";
/**
 * @slot target - Required slot for target
 * @slot popup - Required slot for popup
 */
export class GuxPopup {
    constructor() {
        /**
         * Placement of the popup. Default is bottom-start
         */
        this.placement = 'bottom-start';
        this.expanded = false;
        this.disabled = false;
        /**
         * Number of pixels the popup is offset from the target.
         */
        this.offset = 2;
        /**
         * set if parent component design allows for popup exceeding target width
         */
        this.exceedTargetWidth = false;
        /**
         * set if parent component design is inline
         */
        this.inline = false;
    }
    runUpdatePosition() {
        if (this.cleanupUpdatePosition) {
            this.cleanupUpdatePosition();
        }
        this.cleanupUpdatePosition = autoUpdate(this.targetElementContainer, this.popupElementContainer, () => this.updatePosition(), {
            ancestorScroll: true,
            elementResize: true,
            animationFrame: true,
            ancestorResize: true
        });
    }
    updatePosition() {
        if (this.targetElementContainer && this.popupElementContainer) {
            const exceedTargetWidth = this.exceedTargetWidth;
            const inline = this.inline;
            void computePosition(this.targetElementContainer, this.popupElementContainer, {
                strategy: 'fixed',
                placement: this.placement,
                middleware: [
                    offset(this.offset),
                    flip(),
                    size({
                        apply({ rects, elements }) {
                            if (exceedTargetWidth && !inline) {
                                // These elements should be at least as wide the target but can expand beyond
                                Object.assign(elements.floating.style, {
                                    minWidth: `${rects.reference.width}px`
                                });
                            }
                            else if (!inline) {
                                // Everything else is constrained to the width of the target.
                                // Note: if the contents overflow the flip and shift middleware will not detect it
                                Object.assign(elements.floating.style, {
                                    width: `${rects.reference.width}px`
                                });
                            }
                        }
                    }),
                    shift(),
                    hide()
                ]
            }).then(({ x, y, middlewareData }) => {
                const { referenceHidden } = middlewareData.hide;
                if (!isNaN(x)) {
                    Object.assign(this.popupElementContainer.style, {
                        left: `${x}px`
                    });
                }
                if (!isNaN(y)) {
                    Object.assign(this.popupElementContainer.style, {
                        top: `${y}px`
                    });
                }
                if (referenceHidden) {
                    this.popupElementContainer.classList.add('gux-sr-only-clip');
                }
                else {
                    this.popupElementContainer.classList.remove('gux-sr-only-clip');
                }
            });
        }
    }
    onExpandedChange(expanded) {
        if (expanded) {
            this.internalexpanded.emit();
        }
        else {
            this.internalcollapsed.emit();
        }
    }
    // do not runUpdatePosition on load unless expanded to avoid performance issues: COMUI-3140
    componentDidLoad() {
        if (this.expanded) {
            this.runUpdatePosition();
        }
    }
    componentDidUpdate() {
        if (this.expanded) {
            this.runUpdatePosition();
        }
        else if (this.cleanupUpdatePosition) {
            this.cleanupUpdatePosition();
        }
    }
    disconnectedCallback() {
        if (this.cleanupUpdatePosition) {
            this.cleanupUpdatePosition();
        }
    }
    render() {
        return (h("div", { key: '819dae1406daa2fd628032b4d9928904a1b91c27', class: {
                'gux-target-container': true,
                'gux-disabled': this.disabled
            }, "aria-disabled": this.disabled.toString(), ref: (el) => (this.targetElementContainer = el) }, h("slot", { key: '129ccebfc2224dcbd3f79be7d17f6260d31fa7ea', name: "target" }), h("div", { key: '00fce897eb9ae9e34cc1fabdda1411077b4e7ea4', class: {
                'gux-popup-container': true,
                'gux-expanded': this.expanded && !this.disabled
            }, ref: (el) => (this.popupElementContainer = el) }, h("slot", { key: '0965f03d6c86d64be6f4cb6ac31d961e86e7d574', name: "popup" }))));
    }
    static get is() { return "gux-popup"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-popup.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-popup.css"]
        };
    }
    static get properties() {
        return {
            "placement": {
                "type": "string",
                "attribute": "placement",
                "mutable": false,
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
                    "text": "Placement of the popup. Default is bottom-start"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'bottom-start'"
            },
            "expanded": {
                "type": "boolean",
                "attribute": "expanded",
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
            "offset": {
                "type": "number",
                "attribute": "offset",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Number of pixels the popup is offset from the target."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "2"
            },
            "exceedTargetWidth": {
                "type": "boolean",
                "attribute": "exceed-target-width",
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
                    "text": "set if parent component design allows for popup exceeding target width"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "inline": {
                "type": "boolean",
                "attribute": "inline",
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
                    "text": "set if parent component design is inline"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get events() {
        return [{
                "method": "internalexpanded",
                "name": "internalexpanded",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "This event will run when the popup transitions to an expanded state."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "internalcollapsed",
                "name": "internalcollapsed",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "This event will run when the popup transitions to a collapsed state."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "expanded",
                "methodName": "onExpandedChange"
            }];
    }
}
