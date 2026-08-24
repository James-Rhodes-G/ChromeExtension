var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { h } from "@stencil/core";
import { autoUpdate, computePosition, arrow, flip, offset, shift } from "@floating-ui/dom";
import { OnClickOutside } from "../../../utils/decorator/on-click-outside";
import { trackComponent } from "../../../utils/tracking/usage";
import { getSlot } from "../../../utils/dom/get-slot";
import { findElementById } from "../../../utils/dom/find-element-by-";
import { ThrottleMethod } from "../../../utils/decorator/throttle-meth";
/**
 * @slot - popover content
 * @slot title - Slot for popover title
 */
export class GuxPopover {
    constructor() {
        /**
         * Indicate position of popover element arrow (follow floating ui placement attribute api)
         */
        this.position = 'bottom';
        /**
         * Indicate if the dismiss button is displayed
         */
        this.displayDismissButton = false;
        /**
         * Close popover when the user clicks outside of its bounds
         */
        this.closeOnClickOutside = false;
        /**
         * Controls hiding and showing the popover
         */
        this.isOpen = false;
    }
    onKeyDown(event) {
        switch (event.key) {
            case 'Escape':
                this.dismiss();
                break;
        }
    }
    onFocusout(event) {
        if (!this.closeOnClickOutside && this.displayDismissButton) {
            return;
        }
        const focusIsOutsidePopover = event.relatedTarget && !this.root.contains(event.relatedTarget);
        if (focusIsOutsidePopover) {
            this.dismiss();
        }
    }
    checkForClickOutside(event) {
        const clickPath = event.composedPath();
        const forElement = findElementById(this.root, this.for);
        const clickedForElement = clickPath.includes(forElement);
        if ((this.closeOnClickOutside || !this.displayDismissButton) &&
            this.isOpen &&
            !clickedForElement) {
            this.dismiss();
        }
    }
    get titleSlot() {
        return getSlot(this.root, 'title');
    }
    runUpdatePosition() {
        if (this.cleanupUpdatePosition) {
            this.cleanupUpdatePosition();
        }
        if (this.root.isConnected) {
            this.cleanupUpdatePosition = autoUpdate(findElementById(this.root, this.for), this.popupElement, () => this.updatePosition(), {
                ancestorScroll: true,
                elementResize: true,
                animationFrame: true,
                ancestorResize: true
            });
        }
        else {
            this.disconnectedCallback();
        }
    }
    updatePosition() {
        const forElement = findElementById(this.root, this.for);
        if (this.popupElement && forElement) {
            void computePosition(forElement, this.popupElement, {
                placement: this.position,
                middleware: [
                    offset(7),
                    flip(),
                    shift(),
                    arrow({
                        element: this.arrowElement,
                        padding: 16
                    })
                ]
            }).then(({ x, y, middlewareData, placement }) => {
                Object.assign(this.popupElement.style, {
                    left: `${x}px`,
                    top: `${y}px`
                });
                const side = placement.split('-')[0];
                const staticSide = {
                    top: 'bottom',
                    right: 'left',
                    bottom: 'top',
                    left: 'right'
                }[side];
                const arrowRotation = {
                    top: 0,
                    right: 90,
                    bottom: 180,
                    left: -90
                }[side];
                // This is 12 because this makes the arrow look aligned when horizontal
                // or 15 if vertical due to extra padding needed to show the shadow.
                const arrowLen = side === 'left' || side === 'right' ? 15 : 12;
                if (middlewareData.arrow) {
                    let x = middlewareData.arrow.x;
                    const y = middlewareData.arrow.y;
                    if (side === 'left' || side === 'right') {
                        x = x + 4;
                    }
                    this.popupElement.setAttribute('data-placement', placement);
                    Object.assign(this.arrowElement.style, {
                        left: x != null ? `${x}px` : '',
                        top: y != null ? `${y}px` : '',
                        right: '',
                        bottom: '',
                        [staticSide]: `${-arrowLen}px`,
                        transform: `rotate(${arrowRotation}deg)`
                    });
                }
            });
        }
    }
    dismiss() {
        const dismissEvent = this.guxdismiss.emit();
        if (!dismissEvent.defaultPrevented) {
            this.isOpen = false;
        }
    }
    connectedCallback() {
        trackComponent(this.root, { variant: this.position });
    }
    componentDidLoad() {
        if (this.isOpen) {
            this.runUpdatePosition();
        }
    }
    componentDidUpdate() {
        if (this.isOpen) {
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
        return (h("div", { key: '730abc38bc068191d7175c475c3cfd90b3dd8430', ref: (el) => (this.popupElement = el), class: {
                'gux-hidden': !this.isOpen,
                'gux-popover-wrapper': true
            }, "data-placement": true }, h("div", { key: 'f573bffb8b613acc514f0e4e8fc3951cc0dbd4bb', ref: (el) => (this.arrowElement = el), class: "gux-arrow" }, h("div", { key: 'f7fa19d404a448f74df9c8b3aa1242d66a4b2bd7', class: "gux-arrow-caret" })), this.displayDismissButton && (h("gux-dismiss-button", { key: 'f2633862aabf426f9d0fb6d8e7c26afbdda68ab0', onClick: this.dismiss.bind(this) })), h("div", { key: '00950cd98bcf069ecb8803c01d26d7c687384b8c', class: { 'gux-popover-header': Boolean(this.titleSlot) } }, h("slot", { key: '0c04f3ed0bba57e277828d00efd67c8b18116147', name: "title" })), h("div", { key: '44ffbca5f03bbceaf3ed6a01f69d86d47796e108', class: "gux-popover-content" }, h("slot", { key: 'f21c6292416f5c1368eeccda576cbaf4600138cb' }))));
    }
    static get is() { return "gux-popover"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-popover.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-popover.css"]
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
                    "text": "Indicates the id of the element the popover should anchor to"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "position": {
                "type": "string",
                "attribute": "position",
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
                    "text": "Indicate position of popover element arrow (follow floating ui placement attribute api)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'bottom'"
            },
            "displayDismissButton": {
                "type": "boolean",
                "attribute": "display-dismiss-button",
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
                    "text": "Indicate if the dismiss button is displayed"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "closeOnClickOutside": {
                "type": "boolean",
                "attribute": "close-on-click-outside",
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
                    "text": "Close popover when the user clicks outside of its bounds"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "isOpen": {
                "type": "boolean",
                "attribute": "is-open",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Controls hiding and showing the popover"
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
                "method": "guxdismiss",
                "name": "guxdismiss",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Fired when a user dismisses the popover"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "root"; }
    static get listeners() {
        return [{
                "name": "keydown",
                "method": "onKeyDown",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "focusout",
                "method": "onFocusout",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
__decorate([
    OnClickOutside({ triggerEvents: 'mousedown' })
], GuxPopover.prototype, "checkForClickOutside", null);
__decorate([
    ThrottleMethod(100)
], GuxPopover.prototype, "dismiss", null);
