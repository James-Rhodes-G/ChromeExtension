import { h } from "@stencil/core";
import { randomHTMLId } from "../../../utils/dom/random-html-";
import { trackComponent } from "../../../utils/tracking/usage";
/**
 * @slot content - Required slot for the modal content
 * @slot left-align-buttons - Optional slot to set gux-buttons aligned to the left of the modal
 * @slot right-align-buttons - Optional slot to set gux-buttons aligned to the left of the modal
 * @slot title - Optional slot to set the modal title
 */
export class GuxModalLegacy {
    constructor() {
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
        trackComponent(this.root, { variant: componentVariant });
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
        const titleID = randomHTMLId();
        return (h("div", { key: 'cf42f13044a776e9737d6e4eb116679e1f1def36', class: "gux-modal", role: "dialog", "aria-modal": "true", "aria-labelledby": hasModalTitleSlot ? titleID : null }, h("div", { key: 'f943a8f753e5a6543c81bafe7d6ed08ac9e63fa0', class: `gux-modal-container gux-${this.size}` }, this.renderModalTrapFocusEl(), hasModalTitleSlot && (h("h1", { key: '5f0b9552741d7a94eead287d580ba06a7090d941', class: "gux-modal-header", id: titleID }, h("slot", { key: '15acab823d68f5c933a045beb99387105d07759f', name: "title" }))), h("gux-dismiss-button", { key: '1781b8dea0a20bcb6a5882e7592b83fd47551292', onClick: this.onDismissHandler.bind(this), ref: el => (this.dismissButton = el) }), h("div", { key: '12c81a0e0958952d89a55c17e9899e301e5b3bc2', class: {
                'gux-modal-content': true,
                'gux-no-buttons': !hasFooterButtons
            } }, h("p", { key: 'b8a99c68306f05cc843cf2569d6689a4eedc5e9b' }, h("slot", { key: '5c88dabaea5f7ff2ce152907c41f41980474997d', name: "content" }))), hasFooterButtons && (h("div", { key: 'a57a2c1ec660b8e9b0e662bfed969f6696992772', class: "gux-button-footer" }, h("div", { key: '67e3268b76c15ebec134a0881de4cdca4ef38ab2', class: "gux-left-align-buttons" }, h("slot", { key: 'd311983951eadfbb6028edfd1a92d682f746a378', name: "left-align-buttons" })), h("div", { key: '1ce03d9d93028232807f0dd6c5148e80fa98f3d3', class: "gux-right-align-buttons" }, h("slot", { key: '3f4ffa188878a61224ba47701453cb298e0b5db7', name: "right-align-buttons" })))), this.renderModalTrapFocusEl())));
    }
    // When trap-focus is enabled, focusing this element
    // will immediately redirect focus back to the dismiss button at the top of the modal.
    renderModalTrapFocusEl() {
        if (this.trapFocus) {
            return (h("span", { onFocus: () => this.dismissButton.focus(), tabindex: "0" }));
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
    static get is() { return "gux-modal-legacy"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-modal-legacy.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-modal-legacy.css"]
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
                            "path": "./gux-modal-legacy.types",
                            "id": "src/components/legacy/gux-modal-legacy/gux-modal-legacy.types.ts::GuxModalSize"
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
            "trapFocus": {
                "type": "boolean",
                "attribute": "trap-focus",
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            },
            "initialFocus": {
                "type": "string",
                "attribute": "initial-focus",
                "mutable": false,
                "complexType": {
                    "original": "string | undefined",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Query selector for the element to initially focus when the modal opens\nDefaults to the first tabbable element"
                },
                "getter": false,
                "setter": false,
                "reflect": false
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
                    "text": "Fired when a user dismisses the modal (The default behaviour is to remove the component from the DOM)"
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
                "method": "handleKeyEvent",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
