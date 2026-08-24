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
import { autoUpdate, computePosition, arrow, flip, offset, shift, hide } from "@floating-ui/dom";
import { OnClickOutside } from "../../../utils/decorator/on-click-outside";
import { trackComponent } from "../../../utils/tracking/usage";
import { getSlot } from "../../../utils/dom/get-slot";
import { findElementById } from "../../../utils/dom/find-element-by-";
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
        this.disconnect = undefined;
    }
    updateForElement() {
        this.forElement = this.getForElement();
        this.forElement.setAttribute('aria-haspopup', 'true');
    }
    onKeyDown(event) {
        switch (event.key) {
            case 'Escape':
                this.forElement.focus();
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
    async guxDismissPopover() {
        this.dismiss();
    }
    async guxFocusPopover() {
        this.focusPopup();
    }
    get titleSlot() {
        return getSlot(this.root, 'title');
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
            this.logForAttributeError();
        }
    }
    focusPopup() {
        const autofocusElement = this.root.querySelector('[autoFocus]');
        if (autofocusElement) {
            autofocusElement === null || autofocusElement === void 0 ? void 0 : autofocusElement.focus();
        }
        else {
            this.popupElement.focus();
        }
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
                    hide(),
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
                // This is 13 because this makes the arrow look aligned when horizontal
                // or 15 if vertical due to extra padding needed to show the shadow.
                const arrowLen = side === 'left' || side === 'right' ? 15 : 13;
                if (middlewareData.arrow) {
                    let x = middlewareData.arrow.x;
                    const y = middlewareData.arrow.y;
                    if (side === 'left' || side === 'right') {
                        x = x + 4;
                    }
                    this.popupElement.setAttribute('data-placement', placement);
                    // TODO: COMUI-3210 - Arrow currently does not show
                    Object.assign(this.arrowElement.style, {
                        left: x != null ? `${x}px` : '',
                        top: y != null ? `${y}px` : '',
                        right: '',
                        bottom: '',
                        [staticSide]: `${-arrowLen}px`,
                        transform: `rotate(${arrowRotation}deg)`
                    });
                }
                if (middlewareData.hide) {
                    Object.assign(this.popupElement.style, {
                        visibility: middlewareData.hide.referenceHidden
                            ? 'hidden'
                            : 'visible'
                    });
                }
            });
        }
    }
    dismiss() {
        const dismissEvent = this.guxdismiss.emit();
        if (!dismissEvent.defaultPrevented) {
            this.isOpen = false;
            this.popupElement.hidePopover();
        }
    }
    logForAttributeError() {
        if (this.root.isConnected) {
            console.error(`gux-popover: invalid element supplied to 'for': "${this.for}"`);
        }
    }
    onKeydown(event) {
        switch (event.key) {
            case 'Enter':
            case ' ':
                event.preventDefault();
                this.popupElement.togglePopover();
                this.isOpen = !this.isOpen;
                this.runUpdatePosition();
                this.focusPopup();
                break;
        }
    }
    onMouseup() {
        this.popupElement.togglePopover();
        this.isOpen = !this.isOpen;
        this.runUpdatePosition();
    }
    connectedCallback() {
        this.updateForElement();
        trackComponent(this.root, { variant: this.position });
        const keydownHandler = this.onKeydown.bind(this);
        this.forElement.addEventListener('keydown', keydownHandler);
        const mouseupHandler = this.onMouseup.bind(this);
        this.forElement.addEventListener('mouseup', mouseupHandler);
        this.disconnect = () => {
            this.forElement.removeEventListener('keydown', keydownHandler);
            this.forElement.removeEventListener('mouseup', mouseupHandler);
        };
    }
    componentDidLoad() {
        if (!this.forElement) {
            return;
        }
        this.forElement.popoverTargetElement = this.popupElement;
        if (this.isOpen) {
            this.popupElement.togglePopover();
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
        this.disconnect();
    }
    render() {
        return (h("div", { key: '8d7f83d40ec47eba70837dda4b8af711162bae9c', ref: (el) => (this.popupElement = el), class: {
                'gux-popover-wrapper': true,
                'gux-hidden': !this.isOpen
            }, "data-placement": true, popover: "manual", tabindex: "-1" }, h("div", { key: '062bb23ef7eed982668c26a4c0bf38e3974037e2', ref: (el) => (this.arrowElement = el), class: "gux-arrow" }, h("div", { key: 'e5f759bed459e9e84d16ac4de1e5fd6e7b437464', class: "gux-arrow-caret" })), this.displayDismissButton && (h("gux-dismiss-button", { key: '90a55b7c84eb3562837c5e42d2dcac4375d98ca4', onClick: this.dismiss.bind(this) })), h("div", { key: '3e19328fc53d18384f29f8e8d1b63be22593ae64', class: { 'gux-popover-header': Boolean(this.titleSlot) } }, h("slot", { key: '66501ea759026d7276ffbd6db5ca63197e5ab8be', name: "title" })), h("div", { key: '7ee447eb8770043c1ffafaf76e23f09ebf1b522d', class: "gux-popover-content" }, h("slot", { key: 'dab1da74aa194d3c9f2cdde204c626378c0615ea' }))));
    }
    static get is() { return "gux-popover-beta"; }
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
                "required": true,
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
    static get states() {
        return {
            "forElement": {}
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
    static get methods() {
        return {
            "guxDismissPopover": {
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
            "guxFocusPopover": {
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
