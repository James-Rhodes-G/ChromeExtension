'use strict';

var index = require('./index-BLhHoh_r.js');
var usage = require('./usage-v50bi18B.js');
var randomHtmlId = require('./random-html-id-DH9-ntZu.js');
var index$1 = require('./index-QInGO-Pu.js');
require('./get-closest-element-CfyZl7i7.js');

const defaultAriaLabel = "Toggle Switch";
const toggleIsLoading = "Toggle is loading";
const toggleIsFinishedLoading = "Toggle is finished loading";
var translationResources = {
	defaultAriaLabel: defaultAriaLabel,
	toggleIsLoading: toggleIsLoading,
	toggleIsFinishedLoading: toggleIsFinishedLoading
};

const guxToggleCss = ":host{display:block;outline:none}:host(.gux-display-inline){display:inline-block}.gux-toggle-container.gux-disabled{pointer-events:none;cursor:default}.gux-toggle-container.gux-disabled .gux-toggle-input .gux-toggle-label .gux-toggle-label-text{opacity:var(--gse-ui-toggle-disabled-opacity)}.gux-toggle-container.gux-toggle-label-left .gux-toggle-input{flex-direction:row-reverse}.gux-toggle-container.gux-toggle-label-left .gux-toggle-input .gux-toggle-label .gux-toggle-label-text{place-items:end}.gux-toggle-container.gux-toggle-label-left .gux-toggle-error{float:inline-end}.gux-toggle-container .gux-toggle-input{display:flex;flex-direction:row;flex-wrap:nowrap;gap:var(--gse-ui-toggle-gap);place-content:stretch flex-start;align-items:center;inline-size:fit-content;cursor:pointer}.gux-toggle-container .gux-toggle-input .gux-toggle-label{position:relative;display:inline-block}.gux-toggle-container .gux-toggle-input .gux-toggle-label .gux-toggle-label-text{display:grid;grid-template-areas:\"inner-div\";place-items:center start}.gux-toggle-container .gux-toggle-input .gux-toggle-label .gux-toggle-label-text .gux-toggle-label-text-inner{position:relative;grid-area:inner-div;font-family:var(--gse-ui-toggle-label-fontFamily);font-size:var(--gse-ui-toggle-label-fontSize);font-weight:var(--gse-ui-toggle-label-fontWeight);line-height:var(--gse-ui-toggle-label-lineHeight);color:var(--gse-ui-formControl-label-labelColor);word-wrap:break-word}.gux-toggle-container .gux-toggle-input .gux-toggle-label .gux-toggle-label-text .gux-toggle-label-text-inner.gux-hidden{visibility:hidden}.gux-toggle-container .gux-toggle-input .gux-toggle-label .gux-toggle-label-loading{position:absolute;inset:0;display:flex;flex-direction:row;flex-wrap:nowrap;place-content:stretch center;align-items:center}.gux-toggle-container .gux-toggle-error .gux-toggle-error-container{display:flex;flex-direction:row;flex-wrap:nowrap;gap:var(--gse-ui-toggle-gap);place-content:stretch flex-start;padding:var(--gse-ui-formControl-helper-errorPadding);font-family:var(--gse-ui-toggle-label-fontFamily);font-size:var(--gse-ui-toggle-label-fontSize);font-weight:var(--gse-ui-toggle-label-fontWeight);line-height:var(--gse-ui-toggle-label-lineHeight);color:var(--gse-ui-formControl-helper-errorColor)}.gux-toggle-container .gux-toggle-error .gux-toggle-error-container gux-icon{flex:0 1 auto;order:0;color:var(--gse-ui-formControl-helper-errorColor)}.gux-toggle-container .gux-toggle-error .gux-toggle-error-container .gux-toggle-error-message{flex:0 1 auto;align-self:auto;order:0}";

const GuxToggle = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.check = index.createEvent(this, "check", 7);
        this.labelId = randomHtmlId.randomHTMLId('gux-toggle-label');
        this.errorId = randomHtmlId.randomHTMLId('gux-toggle-error');
        this.checked = false;
        this.disabled = false;
        this.loading = false;
        this.labelPosition = 'right';
        this.displayInline = false;
    }
    handleLoading(loading) {
        if (loading) {
            void this.announceElement.guxAnnounce(this.i18n('toggleIsLoading'));
        }
        else {
            void this.announceElement.guxAnnounce(this.i18n('toggleIsFinishedLoading'));
        }
    }
    onKeydown(event) {
        switch (event.key) {
            case ' ':
                event.preventDefault();
                this.toggle();
        }
    }
    toggle() {
        if (!this.disabled && !this.loading) {
            const checkEvent = this.check.emit(!this.checked);
            if (!checkEvent.defaultPrevented) {
                this.checked = !this.checked;
            }
        }
    }
    getAriaLabel() {
        return (this.root.getAttribute('aria-label') ||
            this.label ||
            this.checkedLabel ||
            this.root.title ||
            this.i18n('defaultAriaLabel'));
    }
    async componentWillLoad() {
        this.i18n = await index$1.buildI18nForComponent(this.root, translationResources);
        const variant = this.checkedLabel || this.uncheckedLabel ? 'labled' : 'unlabled';
        usage.trackComponent(this.root, { variant });
    }
    renderLoading() {
        if (this.loading) {
            return (index.h("div", { class: "gux-toggle-label-loading" }, index.h("gux-radial-loading", { context: "input" })));
        }
    }
    renderLabel() {
        if (this.label) {
            return (index.h("div", { class: "gux-toggle-label-and-error" }, index.h("div", { class: "gux-toggle-label" }, index.h("div", { class: "gux-toggle-label-text" }, index.h("span", { class: "gux-toggle-label-text-inner" }, index.h("span", { id: this.labelId }, this.label), this.renderLoading())))));
        }
        else if (this.uncheckedLabel && this.checkedLabel) {
            const labelText = this.checked ? this.checkedLabel : this.uncheckedLabel;
            return (index.h("div", { class: "gux-toggle-label-and-error" }, index.h("div", { class: "gux-toggle-label" }, index.h("div", { class: "gux-toggle-label-text" }, index.h("span", { class: "gux-toggle-label-text-inner" }, index.h("span", { id: this.labelId }, labelText), this.renderLoading()), index.h("span", { class: "gux-toggle-label-text-inner gux-hidden" }, this.checkedLabel), index.h("span", { class: "gux-toggle-label-text-inner gux-hidden" }, this.uncheckedLabel)))));
        }
    }
    renderError() {
        if (this.errorMessage) {
            return (index.h("div", { id: this.errorId, class: "gux-toggle-error" }, index.h("div", { class: "gux-toggle-error-container" }, index.h("gux-icon", { "icon-name": "fa/hexagon-exclamation-solid", decorative: true, size: "small" }), index.h("div", { class: "gux-toggle-error-message" }, this.errorMessage))));
        }
    }
    render() {
        return (index.h(index.Host, { key: 'b88824afb7ff7ba8de9cb5604c369cbee3021850', class: { 'gux-display-inline': this.displayInline } }, index.h("div", { key: '7991eaf3ea3729f498301284d4f634d7ed830b63', class: {
                'gux-toggle-container': true,
                'gux-toggle-label-left': this.labelPosition === 'left',
                'gux-disabled': this.disabled || this.loading
            } }, index.h("div", { key: '5ff56480ae831b37f30a815d21d8e07dbc484d5d', class: "gux-toggle-input", onClick: this.toggle.bind(this) }, index.h("gux-toggle-slider", { key: 'c9c514fba798e622a0bd94b8e970e97051083441', checked: this.checked, disabled: this.disabled || this.loading, guxAriaLabel: this.getAriaLabel(), labelId: this.checkedLabel && this.uncheckedLabel ? this.labelId : '', onKeyDown: this.onKeydown.bind(this), errorId: this.errorMessage ? this.errorId : '' }), this.renderLabel()), this.renderError()), index.h("gux-announce-beta", { key: '9537a2b1426ead4dbef7637f836e83f3f922fac6', ref: el => (this.announceElement = el) })));
    }
    static get delegatesFocus() { return true; }
    get root() { return index.getElement(this); }
    static get watchers() { return {
        "loading": ["handleLoading"]
    }; }
};
GuxToggle.style = guxToggleCss;

exports.gux_toggle = GuxToggle;
