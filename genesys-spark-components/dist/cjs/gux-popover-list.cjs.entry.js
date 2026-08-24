'use strict';

var index = require('./index-BLhHoh_r.js');
var floatingUi_dom = require('./floating-ui.dom-CFIqWljW.js');
var onClickOutside = require('./on-click-outside-CrJioxOT.js');
var usage = require('./usage-v50bi18B.js');
var findElementById = require('./find-element-by-id-BmYnM3YU.js');

const guxPopoverListCss = ".gux-popover-wrapper{position:fixed;inset-block-start:0;inset-inline-start:0;z-index:var(--gse-semantic-zIndex-popover);display:inline-block;padding-block:8px;padding-inline:0;background-color:var(--gse-ui-popover-backgroundColor);border-radius:var(--gse-ui-popover-borderRadius);box-shadow:var(--gse-ui-popover-boxShadow)}.gux-popover-wrapper.gux-hidden{display:none}.gux-popover-wrapper .gux-arrow{position:absolute;inline-size:var(--gse-ui-popover-anchor-width);block-size:var(--gse-ui-popover-anchor-width);background:var(--gse-ui-popover-backgroundColor)}";

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const GuxPopoverList = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.guxdismiss = index.createEvent(this, "guxdismiss", 7);
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
    }
    onKeyDown(event) {
        switch (event.key) {
            case 'Tab':
            case 'Escape':
                this.dismiss();
                break;
        }
    }
    checkForClickOutside(event) {
        const clickPath = event.composedPath();
        const forElement = findElementById.findElementById(this.root, this.for);
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
            this.cleanupUpdatePosition = floatingUi_dom.autoUpdate(findElementById.findElementById(this.root, this.for), this.popupElement, () => this.updatePosition(), {
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
        const forElement = findElementById.findElementById(this.root, this.for);
        if (this.popupElement) {
            void floatingUi_dom.computePosition(forElement, this.popupElement, {
                strategy: 'fixed',
                placement: this.position,
                middleware: [
                    floatingUi_dom.offset(7),
                    floatingUi_dom.flip(),
                    floatingUi_dom.shift(),
                    floatingUi_dom.arrow({
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
                if (middlewareData.arrow) {
                    const { x, y } = middlewareData.arrow;
                    this.popupElement.setAttribute('data-placement', placement);
                    Object.assign(this.arrowElement.style, {
                        left: x != null ? `${x}px` : '',
                        top: y != null ? `${y}px` : '',
                        right: '',
                        bottom: '',
                        [staticSide]: `${ -13 / 2}px`,
                        transform: 'rotate(45deg)'
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
        usage.trackComponent(this.root, { variant: this.position });
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
        return (index.h("div", { key: '8962f4692a2fccb086dd6aa88b134b14fa95ec47', ref: (el) => (this.popupElement = el), class: {
                'gux-hidden': !this.isOpen,
                'gux-popover-wrapper': true
            }, "data-placement": true }, index.h("div", { key: '3031cc1ef0d94f8741efb27392a02d37a910ba74', ref: (el) => (this.arrowElement = el), class: "gux-arrow" }), this.displayDismissButton && (index.h("gux-dismiss-button", { key: '3836fcd7268853f628b7b759ef1acbe5856ad001', onClick: this.dismiss.bind(this) })), index.h("div", { key: 'd7a7bbdb819ceee350877c2ea44a70e7b55f220a', class: "gux-popover-content" }, index.h("slot", { key: '70610547aa180a30a93c273d03a4b94de3a9d9b4' }))));
    }
    get root() { return index.getElement(this); }
};
__decorate([
    onClickOutside.OnClickOutside({ triggerEvents: 'mousedown' })
], GuxPopoverList.prototype, "checkForClickOutside", null);
GuxPopoverList.style = guxPopoverListCss;

exports.gux_popover_list = GuxPopoverList;
