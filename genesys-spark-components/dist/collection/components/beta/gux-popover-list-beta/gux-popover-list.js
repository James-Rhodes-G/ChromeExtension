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
import { afterNextRenderTimeout } from "../../../utils/dom/after-next-render";
import { OnClickOutside } from "../../../utils/decorator/on-click-outside";
import { trackComponent } from "../../../utils/tracking/usage";
import { findElementById } from "../../../utils/dom/find-element-by-";
/**
 * @slot - popover content
 */
export class GuxPopoverList {
    constructor() {
        /**
         * Indicate position of popover element arrow (follow floating ui placement attribute api)
         */
        this.position = 'bottom';
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
    onKeyDown(event) {
        switch (event.key) {
            case 'Tab':
                this.dismiss();
                break;
            case 'Escape':
                this.dismiss();
                this.forElement.focus();
                break;
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
        // This is 13 because this makes the arrow look aligned
        const arrowLen = 13;
        if (this.popupElement) {
            void computePosition(forElement, this.popupElement, {
                strategy: 'fixed',
                placement: this.position,
                middleware: [
                    offset(2),
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
                // TODO: COMUI-3210 - Arrow currently does not show
                if (middlewareData.arrow) {
                    const { x, y } = middlewareData.arrow;
                    this.popupElement.setAttribute('data-placement', placement);
                    Object.assign(this.arrowElement.style, {
                        left: x != null ? `${x}px` : '',
                        top: y != null ? `${y}px` : '',
                        right: '',
                        bottom: '',
                        [staticSide]: `${-arrowLen / 2}px`,
                        transform: 'rotate(45deg)'
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
            this.popupElement.togglePopover();
        }
    }
    focusFirstItemInPopupList() {
        afterNextRenderTimeout(() => {
            void this.listElement.guxFocusFirstItem();
        });
    }
    onKeydown(event) {
        switch (event.key) {
            case 'Enter':
            case ' ':
                this.popupElement.togglePopover();
                this.isOpen = !this.isOpen;
                this.runUpdatePosition();
                this.focusFirstItemInPopupList();
                break;
        }
    }
    onMouseup() {
        this.popupElement.togglePopover();
        this.isOpen = !this.isOpen;
        this.runUpdatePosition();
    }
    connectedCallback() {
        trackComponent(this.root, { variant: this.position });
        this.listElement = this.root.querySelector('gux-list');
        this.forElement = findElementById(this.root, this.for);
        this.forElement.setAttribute('aria-haspopup', 'true');
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
        return (h("div", { key: '6e8a7aedef7c765741027e160fc33bd742998108', ref: (el) => (this.popupElement = el), class: {
                'gux-hidden': !this.isOpen,
                'gux-popover-wrapper': true
            }, "data-placement": true, popover: "manual" }, h("div", { key: '07052e7958ca90f582d699839c122a46b12da7b6', ref: (el) => (this.arrowElement = el), class: "gux-arrow" }), this.displayDismissButton && (h("gux-dismiss-button", { key: 'c5559ac16b0a8b48729c5f9c8672ce3c5a25768f', onClick: this.dismiss.bind(this) })), h("div", { key: '34d370a8e31db4884b611471a26eb8f1bf04a166', class: "gux-popover-content" }, h("slot", { key: '2c5a0052e1a764bd615317155f48f998537ce5a3' }))));
    }
    static get is() { return "gux-popover-list-beta"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-popover-list.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-popover-list.css"]
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
                "reflect": false
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
            }];
    }
}
__decorate([
    OnClickOutside({ triggerEvents: 'mousedown' })
], GuxPopoverList.prototype, "checkForClickOutside", null);
