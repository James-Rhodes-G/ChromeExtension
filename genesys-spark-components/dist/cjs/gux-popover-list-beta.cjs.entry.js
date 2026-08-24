'use strict';

var index = require('./index-BLhHoh_r.js');
var floatingUi_dom = require('./floating-ui.dom-CFIqWljW.js');
var afterNextRender = require('./after-next-render-CeY_1Kbz.js');
var onClickOutside = require('./on-click-outside-CrJioxOT.js');
var usage = require('./usage-v50bi18B.js');
var findElementById = require('./find-element-by-id-BmYnM3YU.js');

const guxPopoverListCss = ":popover-open{position:absolute;inset:unset}.gux-popover-wrapper{position:fixed;inset-block-start:0;inset-inline-start:0;z-index:var(--gse-semantic-zIndex-popover);display:inline-block;padding-block:8px;padding-inline:0;overflow-y:hidden;background-color:var(--gse-ui-popover-backgroundColor);border:none;border-radius:var(--gse-ui-popover-borderRadius);box-shadow:var(--gse-ui-popover-boxShadow);}.gux-popover-wrapper.gux-hidden{display:none}.gux-popover-wrapper .gux-arrow{position:absolute;inline-size:var(--gse-ui-popover-anchor-width);block-size:var(--gse-ui-popover-anchor-width);background:var(--gse-ui-popover-backgroundColor)}";

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
                    floatingUi_dom.offset(2),
                    floatingUi_dom.flip(),
                    floatingUi_dom.shift(),
                    floatingUi_dom.hide(),
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
                // TODO: COMUI-3210 - Arrow currently does not show
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
        afterNextRender.afterNextRenderTimeout(() => {
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
        usage.trackComponent(this.root, { variant: this.position });
        this.listElement = this.root.querySelector('gux-list');
        this.forElement = findElementById.findElementById(this.root, this.for);
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
        return (index.h("div", { key: '6e8a7aedef7c765741027e160fc33bd742998108', ref: (el) => (this.popupElement = el), class: {
                'gux-hidden': !this.isOpen,
                'gux-popover-wrapper': true
            }, "data-placement": true, popover: "manual" }, index.h("div", { key: '07052e7958ca90f582d699839c122a46b12da7b6', ref: (el) => (this.arrowElement = el), class: "gux-arrow" }), this.displayDismissButton && (index.h("gux-dismiss-button", { key: 'c5559ac16b0a8b48729c5f9c8672ce3c5a25768f', onClick: this.dismiss.bind(this) })), index.h("div", { key: '34d370a8e31db4884b611471a26eb8f1bf04a166', class: "gux-popover-content" }, index.h("slot", { key: '2c5a0052e1a764bd615317155f48f998537ce5a3' }))));
    }
    get root() { return index.getElement(this); }
};
__decorate([
    onClickOutside.OnClickOutside({ triggerEvents: 'mousedown' })
], GuxPopoverList.prototype, "checkForClickOutside", null);
GuxPopoverList.style = guxPopoverListCss;

exports.gux_popover_list_beta = GuxPopoverList;
