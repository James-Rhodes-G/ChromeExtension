'use strict';

var index = require('./index-BLhHoh_r.js');
var usage = require('./usage-v50bi18B.js');
var randomHtmlId = require('./random-html-id-DH9-ntZu.js');
var floatingUi_dom = require('./floating-ui.dom-CFIqWljW.js');
var onClickOutside = require('./on-click-outside-CrJioxOT.js');
var getSlot = require('./get-slot-EZYuUuno.js');
var findElementById = require('./find-element-by-id-BmYnM3YU.js');

const guxButtonCss = ":host{display:inline-block;pointer-events:none;-webkit-user-select:none;user-select:none}:host(:focus){outline:none}:host(:focus) button{outline:none}::slotted(gux-icon){inline-size:var(--gse-ui-button-icon-size);block-size:var(--gse-ui-button-icon-size)}::slotted(*){padding-inline-start:var(--gse-ui-button-gap);vertical-align:middle}::slotted(gux-tooltip),::slotted(gux-tooltip-beta){padding-inline-start:0}::slotted(*:first-child){padding:0}button{font-family:var(--gse-ui-button-text-fontFamily);font-size:var(--gse-ui-button-text-fontSize);font-weight:var(--gse-ui-button-text-fontWeight);line-height:var(--gse-ui-button-text-lineHeight);inline-size:100%;min-inline-size:var(--gse-ui-button-iconOnly-width);block-size:var(--gse-ui-button-default-height);padding:var(--gse-ui-button-default-padding);overflow:hidden;text-overflow:ellipsis;color:var(--gse-ui-button-secondary-default-foregroundColor);white-space:nowrap;pointer-events:auto;cursor:pointer;background-color:var(--gse-ui-button-secondary-default-backgroundColor);border:none;border-radius:var(--gse-ui-button-borderRadius)}button.gux-icon-only{display:inline-flex;padding:var(--gse-ui-button-default-paddingIconOnly)}button[disabled]{pointer-events:none;cursor:default;opacity:var(--gse-ui-button-disabled-opacity)}button:hover:enabled{color:var(--gse-ui-button-secondary-hover-foregroundColor);background-color:var(--gse-ui-button-secondary-hover-backgroundColor)}button:active:enabled{color:var(--gse-ui-button-secondary-active-foregroundColor);background-color:var(--gse-ui-button-secondary-active-backgroundColor)}button:focus-visible:enabled{outline:var(--gse-semantic-focusOutline-md-borderWidth) solid var(--gse-semantic-border-focus);outline-offset:var(--gse-semantic-focusOutline-offset);border-radius:var(--gse-semantic-focusOutline-sm-borderRadius)}button.gux-primary{color:var(--gse-ui-button-primary-default-foregroundColor);background-color:var(--gse-ui-button-primary-default-backgroundColor)}button.gux-primary:hover:enabled{color:var(--gse-ui-button-primary-hover-foregroundColor);background-color:var(--gse-ui-button-primary-hover-backgroundColor)}button.gux-primary:active:enabled{color:var(--gse-ui-button-primary-active-foregroundColor);background-color:var(--gse-ui-button-primary-active-backgroundColor)}button.gux-tertiary{color:var(--gse-ui-button-tertiary-default-foregroundColor);background-color:var(--gse-ui-button-tertiary-default-backgroundColor);border-color:var(--gse-ui-button-tertiary-default-border-color);border-style:var(--gse-ui-button-tertiary-default-border-style);border-width:var(--gse-ui-button-tertiary-default-border-width);}button.gux-tertiary.gux-icon-only{padding:calc(var(--gse-ui-button-default-paddingIconOnly) - var(--gse-ui-button-tertiary-default-border-width))}button.gux-tertiary:hover:enabled{color:var(--gse-ui-button-tertiary-hover-foregroundColor);background-color:var(--gse-ui-button-tertiary-hover-backgroundColor)}button.gux-tertiary:active:enabled{color:var(--gse-ui-button-tertiary-active-foregroundColor);background-color:var(--gse-ui-button-tertiary-active-backgroundColor)}button.gux-ghost{color:var(--gse-ui-button-ghost-default-foregroundColor);background-color:var(--gse-ui-button-ghost-default-backgroundColor)}button.gux-ghost:hover:enabled{color:var(--gse-ui-button-ghost-hover-foregroundColor);background-color:var(--gse-ui-button-ghost-hover-backgroundColor)}button.gux-ghost:active:enabled{color:var(--gse-ui-button-ghost-active-foregroundColor);background-color:var(--gse-ui-button-ghost-active-backgroundColor)}button.gux-danger{color:var(--gse-ui-button-danger-default-foregroundColor);background-color:var(--gse-ui-button-danger-default-backgroundColor)}button.gux-danger:hover:enabled{color:var(--gse-ui-button-danger-hover-foregroundColor);background-color:var(--gse-ui-button-danger-hover-backgroundColor)}button.gux-danger:active:enabled{color:var(--gse-ui-button-danger-active-foregroundColor);background-color:var(--gse-ui-button-danger-active-backgroundColor)}button.gux-inline{min-inline-size:initial;block-size:initial;padding:0;color:var(--gse-ui-links-default-foregroundColor);background:none;border:none;border-radius:0}button.gux-inline[disabled]{color:var(--gse-ui-links-disabled-foregroundColor)}button.gux-inline:hover:enabled{color:var(--gse-ui-links-hover-foregroundColor);text-decoration:underline;background:none}button.gux-inline:active:enabled{color:var(--gse-ui-links-active-foregroundColor);text-decoration:underline;background:none}";

const GuxButton = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.buttonId = randomHtmlId.randomHTMLId('button');
        /**
         * The component button type
         */
        this.type = 'button';
        /**
         * Indicate if the button is disabled or not
         */
        this.disabled = false;
        this.accent = 'secondary';
        this.autofocus = false;
    }
    connectedCallback() {
        this.slotChanged();
    }
    componentWillLoad() {
        usage.trackComponent(this.root, { variant: this.accent });
    }
    render() {
        return [
            index.h("button", { key: '24dbbdfe3e039dea0cbdc2d452cb0cf5da7f9d9b', id: this.buttonId, type: this.type, disabled: this.disabled, class: {
                    [`gux-${this.accent}`]: true,
                    'gux-icon-only': this.iconOnly
                }, "aria-label": this.guxTitle, autofocus: this.autofocus }, index.h("slot", { key: '3cdf6222d210ad14536037885d5d6b54f684a209', onSlotchange: this.slotChanged.bind(this) })),
            this.renderTooltip()
        ];
    }
    renderTooltip() {
        return this.guxTitle
            ? (index.h("gux-tooltip-beta", { for: this.buttonId, visualOnly: true }, index.h("div", { slot: "content" }, this.guxTitle)))
            : '';
    }
    stopEventIfDisabled(event) {
        if (this.disabled) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }
    }
    makeSlotContentDisableable() {
        this.root.shadowRoot.addEventListener('click', (event) => this.stopEventIfDisabled(event));
        Array.from(this.root.children).forEach(slotElement => {
            slotElement.addEventListener('click', (event) => this.stopEventIfDisabled(event));
        });
    }
    hasIconOnly() {
        const children = Array.from(this.root.children);
        if (children.length === 1) {
            const child = children[0];
            if (child.tagName === 'GUX-ICON') {
                return true;
            }
        }
        else if (children.length === 2 &&
            children[0].tagName === 'GUX-ICON' &&
            ['GUX-TOOLTIP', 'GUX-TOOLTIP-BETA'].includes(children[1].tagName)) {
            return true;
        }
        return false;
    }
    slotChanged() {
        this.makeSlotContentDisableable();
        this.iconOnly = this.hasIconOnly();
    }
    static get delegatesFocus() { return true; }
    get root() { return index.getElement(this); }
};
GuxButton.style = guxButtonCss;

function ThrottleMethod(duration) {
    let wait = false;
    let timeoutRef = null;
    return (_target, _propertyKey, descriptor) => {
        const original = descriptor.value;
        descriptor.value = function (...args) {
            if (!wait) {
                original.apply(this, args);
                wait = true;
                clearTimeout(timeoutRef);
                timeoutRef = setTimeout(() => {
                    wait = false;
                }, duration);
            }
        };
    };
}

const guxPopoverCss = ".gux-popover-wrapper{position:absolute;inset-block-start:0;inset-inline-start:0;z-index:var(--gse-semantic-zIndex-popover);display:inline-block;padding:var(--gse-ui-popover-padding);background-color:var(--gse-ui-popover-backgroundColor);border-radius:var(--gse-ui-popover-borderRadius);box-shadow:var(--gse-ui-popover-boxShadow)}.gux-popover-wrapper.gux-hidden{display:none}.gux-popover-wrapper .gux-arrow{position:absolute;inline-size:var(--gse-ui-popover-anchor-width);block-size:var(--gse-ui-popover-anchor-height);padding-block-end:4px;overflow:hidden}.gux-popover-wrapper .gux-arrow-caret{inline-size:0;block-size:0;border-block-start:calc(var(--gse-ui-popover-anchor-width) / 2) solid var(--gse-ui-popover-backgroundColor);border-inline-start:calc(var(--gse-ui-popover-anchor-width) / 2) solid transparent;border-inline-end:calc(var(--gse-ui-popover-anchor-width) / 2) solid transparent;filter:drop-shadow(0 0 4px var(--gse-semantic-effects-boxShadow))}.gux-popover-wrapper .gux-popover-header{display:flex;flex-direction:row;place-content:center space-between;align-items:center;padding-block-end:var(--gse-ui-popover-gap);font-family:var(--gse-ui-popover-title-text-fontFamily);font-size:var(--gse-ui-popover-title-text-fontSize);font-weight:var(--gse-ui-popover-title-text-fontWeight);line-height:var(--gse-ui-popover-title-text-lineHeight);color:var(--gse-ui-popover-headerColor)}";

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
const GuxPopover = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.guxdismiss = index.createEvent(this, "guxdismiss", 7);
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
        const forElement = findElementById.findElementById(this.root, this.for);
        const clickedForElement = clickPath.includes(forElement);
        if ((this.closeOnClickOutside || !this.displayDismissButton) &&
            this.isOpen &&
            !clickedForElement) {
            this.dismiss();
        }
    }
    get titleSlot() {
        return getSlot.getSlot(this.root, 'title');
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
        if (this.popupElement && forElement) {
            void floatingUi_dom.computePosition(forElement, this.popupElement, {
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
        return (index.h("div", { key: '730abc38bc068191d7175c475c3cfd90b3dd8430', ref: (el) => (this.popupElement = el), class: {
                'gux-hidden': !this.isOpen,
                'gux-popover-wrapper': true
            }, "data-placement": true }, index.h("div", { key: 'f573bffb8b613acc514f0e4e8fc3951cc0dbd4bb', ref: (el) => (this.arrowElement = el), class: "gux-arrow" }, index.h("div", { key: 'f7fa19d404a448f74df9c8b3aa1242d66a4b2bd7', class: "gux-arrow-caret" })), this.displayDismissButton && (index.h("gux-dismiss-button", { key: 'f2633862aabf426f9d0fb6d8e7c26afbdda68ab0', onClick: this.dismiss.bind(this) })), index.h("div", { key: '00950cd98bcf069ecb8803c01d26d7c687384b8c', class: { 'gux-popover-header': Boolean(this.titleSlot) } }, index.h("slot", { key: '0c04f3ed0bba57e277828d00efd67c8b18116147', name: "title" })), index.h("div", { key: '44ffbca5f03bbceaf3ed6a01f69d86d47796e108', class: "gux-popover-content" }, index.h("slot", { key: 'f21c6292416f5c1368eeccda576cbaf4600138cb' }))));
    }
    get root() { return index.getElement(this); }
};
__decorate([
    onClickOutside.OnClickOutside({ triggerEvents: 'mousedown' })
], GuxPopover.prototype, "checkForClickOutside", null);
__decorate([
    ThrottleMethod(100)
], GuxPopover.prototype, "dismiss", null);
GuxPopover.style = guxPopoverCss;

exports.gux_button = GuxButton;
exports.gux_popover = GuxPopover;
