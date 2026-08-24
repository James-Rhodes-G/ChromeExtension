import { h } from "@stencil/core";
import { randomHTMLId } from "../../../utils/dom/random-html-";
import { trackComponent } from "../../../utils/tracking/usage";
import { hasSlot } from "../../../utils/dom/has-slot";
export class GuxModal {
    constructor() {
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
        trackComponent(this.root, { variant: `${this.size}` });
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
        if (hasSlot(this.root, 'footer')) {
            return (h("footer", null, h("slot", { name: "footer" })));
        }
        else {
            return this.renderButtonFooter();
        }
    }
    render() {
        const hasModalTitleSlot = this.hasModalTitleSlot();
        const titleID = randomHTMLId();
        return (h("dialog", { key: '5244d52662f2618bb1a5886d97cc6277a9b01427', onClose: this.onCloseHandler.bind(this), ref: el => (this.dialogElement = el), "aria-labelledby": hasModalTitleSlot ? titleID : null }, h("div", { key: 'b67be300995b1c85f22782f55aca56b22d6a847d', class: `gux-modal-container gux-${this.size}` }, h("gux-dismiss-button", { key: '1efe65d8759750804f00e5af9d50dd47804b7b5d', onClick: this.onDismissHandler.bind(this) }), hasModalTitleSlot && this.renderTitle(titleID), h("div", { key: '183ad0b0e68fc486be24aa0a31a22b0315bea72e', class: "gux-modal-content" }, h("p", { key: '09cee736a70168dfefe86abc560813ceeb25fc03' }, h("slot", { key: 'cdf4d5222f21c229c6a7d0bd02cd96512e005e8e', name: "content" }))), this.renderFooter())));
    }
    renderTitle(titleID) {
        return (h("h1", { class: "gux-modal-header", id: titleID }, h("slot", { name: "title" })));
    }
    renderButtonFooter() {
        const hasFooterButtons = this.hasFooterButtons();
        return (h("div", { class: {
                'gux-button-footer': true,
                'gux-no-buttons': !hasFooterButtons
            } }, h("div", { class: "gux-start-align-buttons" }, h("slot", { name: "start-align-buttons" })), h("div", { class: "gux-end-align-buttons" }, h("slot", { name: "end-align-buttons" }))));
    }
    onCloseHandler() {
        this.guxdismiss.emit();
    }
    onDismissHandler() {
        this.open = false;
    }
    static get is() { return "gux-modal"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-modal.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-modal.css"]
        };
    }
    static get properties() {
        return {
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "GuxModalSize",
                    "resolved": "\"dynamic\" | \"large\" | \"medium\" | \"small\"",
                    "references": {
                        "GuxModalSize": {
                            "location": "import",
                            "path": "./gux-modal.types",
                            "id": "src/components/stable/gux-modal/gux-modal.types.ts::GuxModalSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Indicates the size of the modal (small, medium or large)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'dynamic'"
            },
            "open": {
                "type": "boolean",
                "attribute": "open",
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
                    "text": "Indicates/sets whether or not the modal is open. On a native dialog, you should not toggle the\nopen attribute, due to the unusual behaviors described [here](https://html.spec.whatwg.org/multipage/interactive-elements.html#attr-dialog-open)\nIn this component, it is safe as this property acts as a proxy for calls to `showModal` and `close`."
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
                    "text": "Fired when a user dismisses the modal"
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
            "showModal": {
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
            "close": {
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
                "propName": "open",
                "methodName": "syncOpenState"
            }];
    }
    static get listeners() {
        return [{
                "name": "keydown",
                "method": "onKeydown",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
