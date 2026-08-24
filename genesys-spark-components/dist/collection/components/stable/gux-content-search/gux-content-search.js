import { h } from "@stencil/core";
import { trackComponent } from "../../../utils/tracking/usage";
import { buildI18nForComponent } from "../../../i18n";
import contentSearchResources from "./i18n/en.json";
import { onDisabledChange } from "../../../utils/dom/on-attribute-change";
import { focusInputElement } from "../../../utils/dom/focus-input-element";
/**
 * @slot  - Required slot for input tag
 */
export class GuxContentSearch {
    constructor() {
        /**
         * The Match Count
         */
        this.matchCount = 0;
        /**
         * The Current match count which needs to highlighted
         */
        this.currentMatch = 0;
    }
    /**
     * Clears the input.
     */
    // eslint-disable-next-line @typescript-eslint/require-await
    async clear() {
        if (this.disabled) {
            return;
        }
        this.matchCount = 0;
        this.currentMatch = 0;
        this.value = '';
        this.resetInputSlottedElement();
        this.emitCurrentMatchChanged();
        this.inputSlottedElement.focus();
    }
    async componentWillLoad() {
        trackComponent(this.root);
        this.i18n = await buildI18nForComponent(this.root, contentSearchResources);
        this.inputSlottedElement = this.root.querySelector('input');
        this.disabled = this.inputSlottedElement.disabled;
        this.value = this.inputSlottedElement.value;
        this.disabledObserver = onDisabledChange(this.inputSlottedElement, (disabled) => {
            this.disabled = disabled;
        });
        this.inputSlottedElement.addEventListener('input', (e) => this.onInput(e));
    }
    disconnectedCallback() {
        if (this.disabledObserver) {
            this.disabledObserver.disconnect();
        }
    }
    render() {
        return (h("div", { key: '005b8a6387ab8fe85d2568dadd131d23cad52d66', class: {
                'gux-content-search': true,
                'gux-disabled': this.disabled
            }, onClick: () => focusInputElement(this.inputSlottedElement) }, h("div", { key: '101221eef9d32157c62232694a25117102c3fa39', class: "gux-search-icon" }, h("gux-icon", { key: 'ef6aba3306001c5992c549e7bcb8e7383405e9a4', size: "small", decorative: true, "icon-name": "fa/magnifying-glass-regular" })), h("slot", { key: '66f162a8e996e5f99df6e38bd2b53f8e33c0569a' }), this.getNavigationPanel()));
    }
    getNavigationPanel() {
        if (this.showNavigationPanel()) {
            const disableNavigationPanel = this.disableNavigationPanel();
            return (h("div", { class: "gux-content-control-panel" }, h("div", { class: {
                    'gux-navigation-panel': true,
                    'gux-navigation-disabled': disableNavigationPanel
                }, "aria-disabled": disableNavigationPanel.toString() }, h("span", { class: {
                    'gux-navigation-result': true,
                    'gux-navigation-result-disabled': disableNavigationPanel
                } }, this.matchCountResult()), h("div", { class: "gux-navigation-buttons" }, h("button", { type: "button", class: "gux-previous-button", title: this.i18n('navigatePreviousBtn'), "aria-label": this.i18n('navigatePreviousBtn'), onClick: () => this.previousClick(), disabled: disableNavigationPanel }, h("gux-icon", { decorative: true, "icon-name": "fa/caret-up-solid", size: "small" })), h("button", { type: "button", class: "gux-next-button", title: this.i18n('navigateNextBtn'), "aria-label": this.i18n('navigateNextBtn'), onClick: () => this.nextClick(), disabled: disableNavigationPanel }, h("gux-icon", { decorative: true, "icon-name": "fa/caret-down-solid", size: "small" }))), h("div", { class: "gux-navigation-divider" })), h("button", { class: "gux-clear-button", tabIndex: -1, type: "button", title: this.i18n('clear'), onClick: () => void this.clear(), disabled: disableNavigationPanel }, h("gux-icon", { "icon-name": "fa/xmark-large-regular", decorative: true, size: "small" }))));
        }
        return null;
    }
    matchCountResult() {
        return this.i18n('totalMatches', {
            currentMatch: this.getNormalizedCurrentMatch(),
            matchCount: this.getNormalizedMatchCount()
        });
    }
    showNavigationPanel() {
        return this.value !== '';
    }
    disableNavigationPanel() {
        return this.disabled || this.getNormalizedMatchCount() <= 0;
    }
    getNormalizedMatchCount() {
        return this.matchCount &&
            Number.isInteger(this.matchCount) &&
            this.matchCount >= 0
            ? Number(this.matchCount)
            : 0;
    }
    getNormalizedCurrentMatch() {
        return this.currentMatch &&
            Number.isInteger(this.currentMatch) &&
            this.currentMatch >= 0 &&
            this.currentMatch <= this.getNormalizedMatchCount() &&
            this.getNormalizedMatchCount() > 0
            ? Number(this.currentMatch)
            : 0;
    }
    resetInputSlottedElement() {
        this.inputSlottedElement.value = '';
        this.inputSlottedElement.dispatchEvent(new InputEvent('input', {
            bubbles: true,
            cancelable: true
        }));
        this.inputSlottedElement.dispatchEvent(new InputEvent('change', {
            bubbles: true
        }));
    }
    nextClick() {
        if (this.disableNavigationPanel()) {
            return;
        }
        if (this.getNormalizedCurrentMatch() === this.getNormalizedMatchCount()) {
            this.currentMatch = 1;
        }
        else {
            this.currentMatch = this.getNormalizedCurrentMatch() + 1;
        }
        this.emitCurrentMatchChanged();
    }
    previousClick() {
        if (this.disableNavigationPanel()) {
            return;
        }
        if (this.getNormalizedCurrentMatch() === 1 ||
            this.getNormalizedCurrentMatch() === 0) {
            this.currentMatch = this.getNormalizedMatchCount();
        }
        else {
            this.currentMatch = this.getNormalizedCurrentMatch() - 1;
        }
        this.emitCurrentMatchChanged();
    }
    onInput(event) {
        this.value = event.target.value;
    }
    emitCurrentMatchChanged() {
        this.guxcurrentmatchchanged.emit(this.getNormalizedCurrentMatch());
    }
    static get is() { return "gux-content-search"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-content-search.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-content-search.css"]
        };
    }
    static get properties() {
        return {
            "matchCount": {
                "type": "number",
                "attribute": "match-count",
                "mutable": true,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The Match Count"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "0"
            },
            "currentMatch": {
                "type": "number",
                "attribute": "current-match",
                "mutable": true,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The Current match count which needs to highlighted"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "0"
            }
        };
    }
    static get states() {
        return {
            "disabled": {},
            "value": {}
        };
    }
    static get events() {
        return [{
                "method": "guxcurrentmatchchanged",
                "name": "guxcurrentmatchchanged",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [{
                            "name": "return",
                            "text": "The Current match value"
                        }],
                    "text": "Triggered when Current match value changes"
                },
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "clear": {
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
                    "text": "Clears the input.",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "root"; }
}
