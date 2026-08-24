'use strict';

var index = require('./index-BLhHoh_r.js');
var randomHtmlId = require('./random-html-id-DH9-ntZu.js');
var usage = require('./usage-v50bi18B.js');

const guxModalLegacyCss = "::slotted(button:active:enabled){color:var(--gse-ui-links-active-foregroundColor);text-decoration:underline;background:none}slot[name=left-align-buttons]::slotted(:not(button,gux-button)){display:flex;flex-direction:row;gap:var(--gse-ui-modal-buttonBar-gap);align-content:flex-start;align-items:center}:host .gux-modal{position:fixed;inset:0;z-index:var(--gse-semantic-zIndex-modal);display:flex;align-items:center;justify-content:center;color:var(--gse-semantic-foreground-container-highEmphasis);background:var(--gse-ui-modal-shroudColor)}:host .gux-modal .gux-modal-container{position:relative;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;padding:var(--gse-ui-modal-padding) 0;background:var(--gse-ui-modal-backgroundColor);border:1px solid var(--gse-semantic-border-container-edges-default);border-radius:var(--gse-ui-modal-borderRadius);box-shadow:var(--gse-ui-modal-boxShadow)}:host .gux-modal .gux-modal-container.gux-small{width:var(--gse-ui-modal-small-width);max-height:min(368px, 100vh - 2 * 24px)}:host .gux-modal .gux-modal-container.gux-medium{width:var(--gse-ui-modal-medium-width);max-height:min(640px, 100vh - 2 * 24px)}:host .gux-modal .gux-modal-container.gux-large{width:var(--gse-ui-modal-large-width);max-height:min(640px, 100vh - 2 * 24px)}:host .gux-modal .gux-modal-container.gux-dynamic{max-width:calc(100vw - 48px);max-height:calc(100vh - 48px)}:host .gux-modal .gux-modal-container.gux-dynamic .gux-modal-content{max-height:none}:host .gux-modal .gux-modal-container .gux-modal-header{padding:0 var(--gse-ui-modal-padding);margin:0;font-family:var(--gse-ui-modal-heading-fontFamily);font-size:var(--gse-ui-modal-heading-fontSize);font-weight:var(--gse-ui-modal-heading-fontWeight);line-height:var(--gse-ui-modal-heading-fontFamily);color:var(--gse-ui-modal-headerColor);font-family:var(--gse-semantic-heading-xl-bold-fontFamily), var(--gse-semantic-theme-fontFamily-headings), sans-serif;font-size:var(--gse-semantic-heading-xl-bold-fontSize);line-height:var(--gse-semantic-heading-xl-bold-lineHeight);font-weight:var(--gse-semantic-heading-xl-bold-fontWeight)}:host .gux-modal .gux-modal-container .gux-modal-content{max-height:432px;padding:0 var(--gse-ui-modal-padding);margin-top:var(--gse-ui-modal-gap);margin-bottom:var(--gse-ui-modal-gap);overflow-y:auto}:host .gux-modal .gux-modal-container .gux-modal-content.gux-no-buttons{margin-bottom:0}:host .gux-modal .gux-modal-container .gux-button-footer{display:flex;justify-content:space-between;padding:0 var(--gse-ui-modal-padding)}@media (max-width: 416px){:host .gux-modal .gux-modal-container.gux-small,:host .gux-modal .gux-modal-container.gux-medium,:host .gux-modal .gux-modal-container.gux-large{width:100%;height:100%}}";

const GuxModalLegacy = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.guxdismiss = index.createEvent(this, "guxdismiss", 7);
        /**
         * Indicates the size of the modal (small, medium or large)
         */
        this.size = 'dynamic';
        this.trapFocus = true;
    }
    handleKeyEvent(event) {
        if (event.key === 'Escape') {
            this.onDismissHandler(event);
        }
    }
    connectedCallback() {
        this.triggerElement = document.activeElement;
    }
    componentWillLoad() {
        const trapFocusVariant = this.trapFocus ? 'trapfocuson' : 'trapfocusoff';
        const componentVariant = `${this.size}-${trapFocusVariant}`;
        usage.trackComponent(this.root, { variant: componentVariant });
    }
    componentDidLoad() {
        var _a, _b, _c;
        const initialFocusElement = this.getInitialFocusElement();
        if (initialFocusElement) {
            // using .focus?.() instead of .focus() as a workaround for a Stencil bug in unit tests
            // https://github.com/ionic-team/stencil/issues/1964
            (_a = initialFocusElement.focus) === null || _a === void 0 ? void 0 : _a.call(initialFocusElement);
        }
        else if (this.dismissButton) {
            (_c = (_b = this.dismissButton).focus) === null || _c === void 0 ? void 0 : _c.call(_b);
        }
    }
    render() {
        const hasModalTitleSlot = this.hasModalTitleSlot();
        const hasFooterButtons = this.hasFooterButtons();
        const titleID = randomHtmlId.randomHTMLId();
        return (index.h("div", { key: 'cf42f13044a776e9737d6e4eb116679e1f1def36', class: "gux-modal", role: "dialog", "aria-modal": "true", "aria-labelledby": hasModalTitleSlot ? titleID : null }, index.h("div", { key: 'f943a8f753e5a6543c81bafe7d6ed08ac9e63fa0', class: `gux-modal-container gux-${this.size}` }, this.renderModalTrapFocusEl(), hasModalTitleSlot && (index.h("h1", { key: '5f0b9552741d7a94eead287d580ba06a7090d941', class: "gux-modal-header", id: titleID }, index.h("slot", { key: '15acab823d68f5c933a045beb99387105d07759f', name: "title" }))), index.h("gux-dismiss-button", { key: '1781b8dea0a20bcb6a5882e7592b83fd47551292', onClick: this.onDismissHandler.bind(this), ref: el => (this.dismissButton = el) }), index.h("div", { key: '12c81a0e0958952d89a55c17e9899e301e5b3bc2', class: {
                'gux-modal-content': true,
                'gux-no-buttons': !hasFooterButtons
            } }, index.h("p", { key: 'b8a99c68306f05cc843cf2569d6689a4eedc5e9b' }, index.h("slot", { key: '5c88dabaea5f7ff2ce152907c41f41980474997d', name: "content" }))), hasFooterButtons && (index.h("div", { key: 'a57a2c1ec660b8e9b0e662bfed969f6696992772', class: "gux-button-footer" }, index.h("div", { key: '67e3268b76c15ebec134a0881de4cdca4ef38ab2', class: "gux-left-align-buttons" }, index.h("slot", { key: 'd311983951eadfbb6028edfd1a92d682f746a378', name: "left-align-buttons" })), index.h("div", { key: '1ce03d9d93028232807f0dd6c5148e80fa98f3d3', class: "gux-right-align-buttons" }, index.h("slot", { key: '3f4ffa188878a61224ba47701453cb298e0b5db7', name: "right-align-buttons" })))), this.renderModalTrapFocusEl())));
    }
    // When trap-focus is enabled, focusing this element
    // will immediately redirect focus back to the dismiss button at the top of the modal.
    renderModalTrapFocusEl() {
        if (this.trapFocus) {
            return (index.h("span", { onFocus: () => this.dismissButton.focus(), tabindex: "0" }));
        }
    }
    getInitialFocusElement() {
        return this.initialFocus
            ? this.root.querySelector(this.initialFocus)
            : undefined;
    }
    hasModalTitleSlot() {
        return Boolean(this.root.querySelector('[slot="title"]'));
    }
    hasFooterButtons() {
        return (Boolean(this.root.querySelector('[slot="left-align-buttons"]')) ||
            Boolean(this.root.querySelector('[slot="right-align-buttons"]')));
    }
    onDismissHandler(event) {
        var _a;
        event.stopPropagation();
        const dismissEvent = this.guxdismiss.emit();
        if (!dismissEvent.defaultPrevented) {
            this.root.remove();
            (_a = this.triggerElement) === null || _a === void 0 ? void 0 : _a.focus();
        }
    }
    get root() { return index.getElement(this); }
};
GuxModalLegacy.style = guxModalLegacyCss;

exports.gux_modal_legacy = GuxModalLegacy;
