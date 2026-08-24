'use strict';

var index = require('./index-BLhHoh_r.js');
var randomHtmlId = require('./random-html-id-DH9-ntZu.js');
var usage = require('./usage-v50bi18B.js');
var hasSlot = require('./has-slot-BFTyqu_U.js');

const guxModalCss = "::slotted(button:active:enabled){color:var(--gse-ui-links-active-foregroundColor);text-decoration:underline;background:none}slot[name=start-align-buttons]::slotted(:not(button,gux-button-slot)){display:flex;flex-direction:row;gap:var(--gse-ui-modal-buttonBar-gap);align-content:flex-start;align-items:center}:host dialog{box-sizing:border-box;justify-content:space-between;padding:0;overflow:hidden;background-color:var(--gse-ui-modal-backgroundColor);border:none;border-radius:var(--gse-ui-modal-borderRadius);box-shadow:var(--gse-ui-modal-boxShadow)}:host dialog::backdrop{background:var(--gse-ui-modal-shroudColor)}:host dialog .gux-modal-container{display:flex;flex-direction:column}:host dialog .gux-modal-container.gux-small{inline-size:var(--gse-ui-modal-small-width);max-block-size:min(368px, 100vh - 2 * 24px)}:host dialog .gux-modal-container.gux-medium{inline-size:min(var(--gse-ui-modal-medium-width), 100vw - 48px);max-block-size:min(640px, 100vh - 2 * 24px)}:host dialog .gux-modal-container.gux-large{inline-size:min(var(--gse-ui-modal-large-width), 100vw - 48px);max-block-size:min(640px, 100vh - 2 * 24px)}:host dialog .gux-modal-container.gux-dynamic{max-inline-size:calc(100vw - 48px);max-block-size:calc(100vh - 48px)}:host dialog .gux-modal-container.gux-dynamic .gux-modal-content{max-block-size:none}:host dialog .gux-modal-container .gux-modal-header{padding-block-start:var(--gse-ui-modal-padding);padding-inline:var(--gse-ui-modal-padding);margin:0;font-family:var(--gse-ui-modal-heading-fontFamily);font-size:var(--gse-ui-modal-heading-fontSize);font-weight:var(--gse-ui-modal-heading-fontWeight);line-height:var(--gse-ui-modal-heading-lineHeight);color:var(--gse-ui-modal-headerColor)}:host dialog .gux-modal-container .gux-modal-content{max-block-size:432px;padding-inline:var(--gse-ui-modal-padding);margin-block-start:var(--gse-ui-modal-gap);overflow-y:auto;color:var(--gse-semantic-foreground-container-highEmphasis)}:host dialog .gux-modal-container .gux-button-footer{display:flex;justify-content:space-between;padding-block-end:var(--gse-ui-modal-padding);padding-inline:var(--gse-ui-modal-padding);margin-block-start:var(--gse-ui-modal-gap)}:host dialog .gux-modal-container .gux-button-footer.gux-no-buttons{display:none}:host dialog .gux-modal-container footer{padding-block-end:var(--gse-ui-modal-padding);padding-inline:var(--gse-ui-modal-padding);margin-block-start:var(--gse-ui-modal-gap)}@media (max-width: 416px){:host dialog .gux-modal-container.gux-small,:host dialog .gux-modal-container.gux-medium,:host dialog .gux-modal-container.gux-large{inline-size:100%;block-size:100%}}";

const GuxModal = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.guxdismiss = index.createEvent(this, "guxdismiss", 7);
        /**
         * Indicates the size of the modal (small, medium or large)
         */
        this.size = 'dynamic';
        /**
         * Indicates/sets whether or not the modal is open. On a native dialog, you should not toggle the
         * open attribute, due to the unusual behaviors described [here](https://html.spec.whatwg.org/multipage/interactive-elements.html#attr-dialog-open)
         * In this component, it is safe as this property acts as a proxy for calls to `showModal` and `close`.
         */
        this.open = false;
    }
    /**
     * "Renders" the open state of the modal
     */
    syncOpenState() {
        if (this.open) {
            this.dialogElement.showModal();
        }
        else {
            this.dialogElement.close();
        }
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async showModal() {
        this.open = true;
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async close() {
        this.open = false;
    }
    /*
     * This serves as a workaround for a specific issue found in Safari and Firefox browsers.
     * In full-screen mode, pressing the "Escape" key would not only close the native HTML dialog but also minimize the browser window.
     * By preventing the default behavior of the "Escape" key event and explicitly closing the dialog, this workaround ensures
     * that the browser window remains unaffected when closing the dialog in full-screen mode.
     * More info can be found here: https://discussions.apple.com/thread/251785881?answerId=253426808022&sortBy=best#253426808022
     */
    onKeydown(event) {
        switch (event.key) {
            case 'Escape':
                event.preventDefault();
                this.onDismissHandler();
                return;
        }
    }
    componentWillLoad() {
        usage.trackComponent(this.root, { variant: `${this.size}` });
    }
    componentDidLoad() {
        this.syncOpenState();
    }
    hasModalTitleSlot() {
        return Boolean(this.root.querySelector('[slot="title"]'));
    }
    hasFooterButtons() {
        var _a, _b;
        const startAlignButtonsSlot = this.root.querySelector('[slot="start-align-buttons"]');
        const endAlignButtonsSlot = this.root.querySelector('[slot="end-align-buttons"]');
        return (Boolean((_a = startAlignButtonsSlot === null || startAlignButtonsSlot === void 0 ? void 0 : startAlignButtonsSlot.textContent) === null || _a === void 0 ? void 0 : _a.trim()) ||
            Boolean((_b = endAlignButtonsSlot === null || endAlignButtonsSlot === void 0 ? void 0 : endAlignButtonsSlot.textContent) === null || _b === void 0 ? void 0 : _b.trim()));
    }
    renderFooter() {
        if (hasSlot.hasSlot(this.root, 'footer')) {
            return (index.h("footer", null, index.h("slot", { name: "footer" })));
        }
        else {
            return this.renderButtonFooter();
        }
    }
    render() {
        const hasModalTitleSlot = this.hasModalTitleSlot();
        const titleID = randomHtmlId.randomHTMLId();
        return (index.h("dialog", { key: '5244d52662f2618bb1a5886d97cc6277a9b01427', onClose: this.onCloseHandler.bind(this), ref: el => (this.dialogElement = el), "aria-labelledby": hasModalTitleSlot ? titleID : null }, index.h("div", { key: 'b67be300995b1c85f22782f55aca56b22d6a847d', class: `gux-modal-container gux-${this.size}` }, index.h("gux-dismiss-button", { key: '1efe65d8759750804f00e5af9d50dd47804b7b5d', onClick: this.onDismissHandler.bind(this) }), hasModalTitleSlot && this.renderTitle(titleID), index.h("div", { key: '183ad0b0e68fc486be24aa0a31a22b0315bea72e', class: "gux-modal-content" }, index.h("p", { key: '09cee736a70168dfefe86abc560813ceeb25fc03' }, index.h("slot", { key: 'cdf4d5222f21c229c6a7d0bd02cd96512e005e8e', name: "content" }))), this.renderFooter())));
    }
    renderTitle(titleID) {
        return (index.h("h1", { class: "gux-modal-header", id: titleID }, index.h("slot", { name: "title" })));
    }
    renderButtonFooter() {
        const hasFooterButtons = this.hasFooterButtons();
        return (index.h("div", { class: {
                'gux-button-footer': true,
                'gux-no-buttons': !hasFooterButtons
            } }, index.h("div", { class: "gux-start-align-buttons" }, index.h("slot", { name: "start-align-buttons" })), index.h("div", { class: "gux-end-align-buttons" }, index.h("slot", { name: "end-align-buttons" }))));
    }
    onCloseHandler() {
        this.guxdismiss.emit();
    }
    onDismissHandler() {
        this.open = false;
    }
    static get delegatesFocus() { return true; }
    get root() { return index.getElement(this); }
    static get watchers() { return {
        "open": ["syncOpenState"]
    }; }
};
GuxModal.style = guxModalCss;

exports.gux_modal = GuxModal;
