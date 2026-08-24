'use strict';

var index = require('./index-BLhHoh_r.js');
var usage = require('./usage-v50bi18B.js');
var index$1 = require('./index-QInGO-Pu.js');
var onAttributeChange = require('./on-attribute-change-Cv7L_5Zv.js');
var focusInputElement = require('./focus-input-element-DmhIgp7F.js');
require('./get-closest-element-CfyZl7i7.js');

const eraseBtnAria = "Clear search text";
const navigateNextBtn = "Highlight next match";
const navigatePreviousBtn = "Highlight previous match";
const totalMatches = "{currentMatch, number} of {matchCount, number}";
const clear = "Clear";
var contentSearchResources = {
	eraseBtnAria: eraseBtnAria,
	navigateNextBtn: navigateNextBtn,
	navigatePreviousBtn: navigatePreviousBtn,
	totalMatches: totalMatches,
	clear: clear
};

const guxContentSearchCss = ":host{display:inline-block;inline-size:var(--gse-ui-search-width);min-inline-size:var(--gse-ui-search-width)}::slotted(input[disabled]){opacity:var(--gse-ui-formControl-input-disabled-opacity)}::slotted(input){box-sizing:border-box;flex-shrink:1;flex-basis:100%;inline-size:100%;overflow:hidden;text-overflow:ellipsis;font-family:var(--gse-ui-search-counter-text-fontFamily);font-size:var(--gse-ui-search-counter-text-fontSize);font-weight:var(--gse-ui-search-counter-text-fontWeight);line-height:var(--gse-ui-search-counter-text-lineHeight);color:var(--gse-ui-formControl-input-populatedColor);white-space:nowrap;outline:none;background-color:var(--gse-ui-formControl-input-backgroundColor);background-image:none;border:0;border-radius:0}::slotted(input)::placeholder{color:var(--gse-ui-formControl-input-populatedColor)}::slotted(input).gux-focused,::slotted(input):focus,::slotted(input):focus-visible{outline:none;border:0;box-shadow:none}.gux-content-search{box-sizing:border-box;display:flex;flex-direction:row;gap:var(--gse-ui-formControl-input-gap);inline-size:100%;block-size:var(--gse-ui-formControl-input-textfield-height);padding:var(--gse-ui-formControl-textarea-padding);cursor:text;background-color:var(--gse-ui-formControl-input-backgroundColor);background-image:none;border:var(--gse-ui-formControl-input-default-border-width) var(--gse-ui-formControl-input-default-border-style) var(--gse-ui-formControl-input-default-border-color);border-radius:var(--gse-ui-formControl-input-borderRadius)}.gux-content-search gux-truncate{display:flex;align-items:center}.gux-content-search.gux-disabled{pointer-events:none;cursor:default;opacity:var(--gse-ui-formControl-input-disabled-opacity)}.gux-content-search:focus-visible,.gux-content-search:focus-within{outline:var(--gse-ui-formControl-input-focus-border-width) var(--gse-ui-formControl-input-focus-border-style) var(--gse-ui-formControl-input-focus-border-color);outline-offset:var(--gse-semantic-focusOutline-offset);border:var(--gse-ui-formControl-input-active-border-width) var(--gse-ui-formControl-input-active-border-style) var(--gse-ui-formControl-input-active-border-color);border-radius:var(--gse-ui-formControl-focusRing-borderRadius)}.gux-content-search:not(:disabled):not(.gux-disabled):hover{border:var(--gse-ui-formControl-input-hover-border-width) var(--gse-ui-formControl-input-hover-border-style) var(--gse-ui-formControl-input-hover-border-color)}.gux-content-search .gux-search-icon{display:flex;flex-shrink:0;align-items:center}.gux-content-search .gux-search-icon:disabled{pointer-events:none;cursor:default;opacity:var(--gse-ui-formControl-input-disabled-opacity)}.gux-content-search .gux-search-icon gux-icon{color:var(--gse-ui-formControl-input-inputIcon-defaultColor)}.gux-content-search .gux-content-control-panel{box-sizing:border-box;display:flex;flex-grow:1;flex-shrink:0;gap:var(--gse-ui-formControl-input-gap);place-content:center flex-end;align-items:center;padding:0}.gux-content-search .gux-content-control-panel button{display:block;align-items:center;block-size:var(--gse-ui-search-counter-icon-height);padding:0;overflow:hidden;color:var(--gse-ui-search-counter-default-foregroundColor);cursor:pointer;outline:none;background:none;border:none;border-radius:var(--gse-ui-button-borderRadius)}.gux-content-search .gux-content-control-panel button:disabled{pointer-events:none;cursor:default;opacity:var(--gse-ui-formControl-input-disabled-opacity)}.gux-content-search .gux-content-control-panel button:not(:disabled):hover,.gux-content-search .gux-content-control-panel button:not(:disabled):focus-visible{color:var(--gse-ui-search-counter-hover-foregroundColor)}.gux-content-search .gux-content-control-panel button:not(.gux-clear-button):focus-visible:enabled{outline:var(--gse-semantic-focusOutline-md-borderWidth) solid var(--gse-semantic-border-focus);outline-offset:var(--gse-semantic-focusOutline-offset)}.gux-content-search .gux-content-control-panel button.gux-clear-button{flex-shrink:0;align-items:center}.gux-content-search .gux-content-control-panel button.gux-clear-button gux-icon{inline-size:var(--gse-ui-icon-small-size);block-size:var(--gse-ui-icon-small-size)}.gux-content-search .gux-content-control-panel .gux-navigation-disabled{pointer-events:auto;cursor:default;opacity:var(--gse-ui-formControl-input-disabled-opacity)}.gux-content-search .gux-content-control-panel .gux-navigation-panel{display:flex;gap:var(--gse-ui-search-counter-gap);align-items:center}.gux-content-search .gux-content-control-panel .gux-navigation-panel .gux-navigation-divider{box-sizing:border-box;align-self:center;block-size:var(--gse-ui-search-counter-divider-height);color:var(--gse-ui-search-counter-default-foregroundColor);border:var(--gse-ui-search-counter-divider-border-width) var(--gse-ui-search-counter-divider-border-style) var(--gse-ui-search-counter-divider-border-color)}.gux-content-search .gux-content-control-panel .gux-navigation-panel .gux-navigation-buttons{display:flex;flex-direction:row}.gux-content-search .gux-content-control-panel .gux-navigation-panel .gux-navigation-result{align-items:center;color:var(--gse-ui-search-counter-default-foregroundColor);white-space:nowrap}.gux-content-search .gux-content-control-panel .gux-navigation-panel .gux-previous-button{flex-shrink:0;align-items:center}.gux-content-search .gux-content-control-panel .gux-navigation-panel .gux-next-button{flex-shrink:0;align-items:center}";

const GuxContentSearch = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.guxcurrentmatchchanged = index.createEvent(this, "guxcurrentmatchchanged", 7);
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
        usage.trackComponent(this.root);
        this.i18n = await index$1.buildI18nForComponent(this.root, contentSearchResources);
        this.inputSlottedElement = this.root.querySelector('input');
        this.disabled = this.inputSlottedElement.disabled;
        this.value = this.inputSlottedElement.value;
        this.disabledObserver = onAttributeChange.onDisabledChange(this.inputSlottedElement, (disabled) => {
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
        return (index.h("div", { key: '005b8a6387ab8fe85d2568dadd131d23cad52d66', class: {
                'gux-content-search': true,
                'gux-disabled': this.disabled
            }, onClick: () => focusInputElement.focusInputElement(this.inputSlottedElement) }, index.h("div", { key: '101221eef9d32157c62232694a25117102c3fa39', class: "gux-search-icon" }, index.h("gux-icon", { key: 'ef6aba3306001c5992c549e7bcb8e7383405e9a4', size: "small", decorative: true, "icon-name": "fa/magnifying-glass-regular" })), index.h("slot", { key: '66f162a8e996e5f99df6e38bd2b53f8e33c0569a' }), this.getNavigationPanel()));
    }
    getNavigationPanel() {
        if (this.showNavigationPanel()) {
            const disableNavigationPanel = this.disableNavigationPanel();
            return (index.h("div", { class: "gux-content-control-panel" }, index.h("div", { class: {
                    'gux-navigation-panel': true,
                    'gux-navigation-disabled': disableNavigationPanel
                }, "aria-disabled": disableNavigationPanel.toString() }, index.h("span", { class: {
                    'gux-navigation-result': true,
                    'gux-navigation-result-disabled': disableNavigationPanel
                } }, this.matchCountResult()), index.h("div", { class: "gux-navigation-buttons" }, index.h("button", { type: "button", class: "gux-previous-button", title: this.i18n('navigatePreviousBtn'), "aria-label": this.i18n('navigatePreviousBtn'), onClick: () => this.previousClick(), disabled: disableNavigationPanel }, index.h("gux-icon", { decorative: true, "icon-name": "fa/caret-up-solid", size: "small" })), index.h("button", { type: "button", class: "gux-next-button", title: this.i18n('navigateNextBtn'), "aria-label": this.i18n('navigateNextBtn'), onClick: () => this.nextClick(), disabled: disableNavigationPanel }, index.h("gux-icon", { decorative: true, "icon-name": "fa/caret-down-solid", size: "small" }))), index.h("div", { class: "gux-navigation-divider" })), index.h("button", { class: "gux-clear-button", tabIndex: -1, type: "button", title: this.i18n('clear'), onClick: () => void this.clear(), disabled: disableNavigationPanel }, index.h("gux-icon", { "icon-name": "fa/xmark-large-regular", decorative: true, size: "small" }))));
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
    get root() { return index.getElement(this); }
};
GuxContentSearch.style = guxContentSearchCss;

exports.gux_content_search = GuxContentSearch;
