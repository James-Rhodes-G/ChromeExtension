'use strict';

var index = require('./index-BLhHoh_r.js');
var usage = require('./usage-v50bi18B.js');
var hasSlot = require('./has-slot-BFTyqu_U.js');
var logError = require('./log-error-nWO_o1C3.js');

const guxToastCss = ".gux-toast{position:relative;display:flex;flex-direction:row;flex-wrap:nowrap;gap:var(--gse-ui-toast-gap);place-content:stretch flex-start;align-items:flex-start;inline-size:var(--gse-ui-toast-wrappingWidth);padding:var(--gse-ui-toast-margin);margin-block-end:var(--gse-ui-toast-stacking-gap);border-radius:var(--gse-ui-toast-borderRadius);box-shadow:var(--gse-ui-toast-boxShadow)}.gux-toast .gux-icon ::slotted(gux-icon){inline-size:var(--gse-ui-toast-icon) !important;block-size:var(--gse-ui-toast-icon) !important}.gux-toast .gux-icon gux-icon{inline-size:var(--gse-ui-toast-icon) !important;block-size:var(--gse-ui-toast-icon) !important}.gux-toast .gux-icon.gux-icon-error{color:var(--gse-ui-toast-error-iconColor)}.gux-toast .gux-icon.gux-icon-warning{color:var(--gse-ui-toast-warning-iconColor)}.gux-toast .gux-icon.gux-icon-success{color:var(--gse-ui-toast-success-iconColor)}.gux-toast .gux-icon.gux-icon-info{color:var(--gse-ui-toast-info-iconColor)}.gux-toast .gux-icon.gux-icon-action{color:var(--gse-ui-toast-action-iconColor)}.gux-toast .gux-content{display:flex;flex:1 1 auto;flex-direction:column;flex-wrap:nowrap;gap:var(--gse-ui-toast-gapButton);place-content:stretch flex-start;align-items:flex-start;align-self:auto;order:0}.gux-toast .gux-content .gux-message{display:flex;flex-direction:column;gap:var(--gse-ui-toast-gapText)}.gux-toast .gux-content .gux-message .gux-message-title{font-family:var(--gse-ui-toast-heading-fontFamily);font-size:var(--gse-ui-toast-heading-fontSize);font-weight:var(--gse-ui-toast-heading-fontWeight);line-height:var(--gse-ui-toast-heading-lineHeight)}.gux-toast .gux-content .gux-message .gux-message-body{font-family:var(--gse-ui-toast-text-fontFamily);font-size:var(--gse-ui-toast-text-fontSize);line-height:var(--gse-ui-toast-text-lineHeight);word-break:break-all}.gux-toast .gux-content .gux-buttons-bar{inline-size:100%}.gux-toast.gux-toast-success{background-color:var(--gse-ui-toast-success-backgroundColor)}.gux-toast.gux-toast-success .gux-message{color:var(--gse-ui-toast-success-foregroundColor)}.gux-toast.gux-toast-warning{background-color:var(--gse-ui-toast-warning-backgroundColor)}.gux-toast.gux-toast-warning .gux-message{color:var(--gse-ui-toast-warning-foregroundColor)}.gux-toast.gux-toast-error{background-color:var(--gse-ui-toast-error-backgroundColor)}.gux-toast.gux-toast-error .gux-message{color:var(--gse-ui-toast-error-foregroundColor)}.gux-toast.gux-toast-info{background-color:var(--gse-ui-toast-info-backgroundColor)}.gux-toast.gux-toast-info .gux-message{color:var(--gse-ui-toast-info-foregroundColor)}.gux-toast.gux-toast-action{display:grid;grid-template-rows:1fr;grid-template-columns:var(--gse-ui-icon-medium-size) 1fr var(--gse-ui-button-dismiss-medium-width);background-color:var(--gse-ui-toast-action-backgroundColor)}.gux-toast.gux-toast-action .gux-content{grid-row:1/2;grid-column:2/4}.gux-toast.gux-toast-action .gux-icon{grid-row:1/2;grid-column:1/2}.gux-toast.gux-toast-action gux-dismiss-button{grid-row:1/2;grid-column:3/4}.gux-toast.gux-toast-action .gux-message{inline-size:var(--gse-ui-toast-messageWidth);color:var(--gse-ui-toast-action-foregroundColor)}";

const GuxToast = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.guxdismiss = index.createEvent(this, "guxdismiss", 7);
        this.toastType = 'success';
        this.hasLink = false;
        this.hasPrimaryButton = false;
        this.hasSecondaryButton = false;
    }
    componentWillLoad() {
        usage.trackComponent(this.root, { variant: this.toastType });
        this.hasPrimaryButton = hasSlot.hasSlot(this.root, 'primary-button');
        this.hasSecondaryButton = hasSlot.hasSlot(this.root, 'secondary-button');
        this.hasLink = hasSlot.hasSlot(this.root, 'link');
    }
    componentDidLoad() {
        this.checkAriaLive();
    }
    checkAriaLive() {
        let parent = this.root.parentElement;
        while (parent) {
            if (parent.hasAttribute('aria-live')) {
                return;
            }
            parent = parent.parentElement;
        }
        logError.logWarn(this.root, 'gux-toast must have a parent element with an `aria-live` attribute');
    }
    renderToastIcon() {
        switch (this.toastType) {
            case 'success':
                return (index.h("gux-icon", { "icon-name": "fa/circle-check-solid", decorative: true }));
            case 'warning':
                return (index.h("gux-icon", { "icon-name": "fa/triangle-exclamation-solid", decorative: true }));
            case 'error':
                return (index.h("gux-icon", { "icon-name": "fa/hexagon-exclamation-solid", decorative: true }));
            case 'info':
                return (index.h("gux-icon", { "icon-name": "fa/circle-info-solid", decorative: true }));
            case 'action':
                return (index.h("slot", { name: "icon" }));
        }
    }
    renderLink() {
        return (index.h("div", { class: "gux-buttons-bar" }, index.h("gux-link-beta", { standalone: true }, index.h("slot", { name: "link" }))));
    }
    renderActions() {
        return (index.h("gux-cta-group", { class: "gux-buttons-bar", align: "end" }, this.hasSecondaryButton && (index.h("gux-button-slot", { slot: "secondary" }, index.h("slot", { name: "secondary-button" }))), index.h("gux-button-slot", { slot: "primary" }, index.h("slot", { name: "primary-button" }))));
    }
    render() {
        return (index.h("div", { key: '6e7d8b1d5d1d68d4034c264f3c057c11c1cca6ad', class: `gux-toast gux-toast-${this.toastType}` }, index.h("div", { key: 'af29dbf19d6c7d171b86a80bf43590be55e292d8', class: `gux-icon gux-icon-${this.toastType}` }, this.renderToastIcon()), index.h("div", { key: '175de88a6cc456281551d99a3a613610d7db9ec1', class: "gux-content" }, index.h("div", { key: '5fc3473349740b8fe677dc1f23855d3d2bc10d4f', class: "gux-message" }, index.h("gux-truncate", { key: 'a4daefa59e56363cb3caa6f2353a4da3e67d32e7', class: "gux-message-title", "max-lines": 1 }, index.h("slot", { key: 'd63b036e3583941c40067d9a59e03fe39554eedf', name: "title" })), index.h("gux-truncate", { key: 'a4182c156a78d13ce54b318aafa8a993a78f0cf7', class: "gux-message-body", "max-lines": 2 }, index.h("slot", { key: '65a1b44e44a67194076ddfb98a3926260a147994', name: "message" }))), this.toastType !== 'action' && this.hasLink && this.renderLink(), this.toastType === 'action' &&
            this.hasPrimaryButton &&
            this.renderActions()), index.h("gux-dismiss-button", { key: 'bcaaf5b483d5117558163fdfdda9f10c62d10df5', position: "inherit", onClick: this.onDismissClickHandler.bind(this) })));
    }
    onDismissClickHandler(event) {
        event.stopPropagation();
        const dismissEvent = this.guxdismiss.emit();
        if (!dismissEvent.defaultPrevented) {
            this.root.remove();
        }
    }
    get root() { return index.getElement(this); }
};
GuxToast.style = guxToastCss;

exports.gux_toast = GuxToast;
