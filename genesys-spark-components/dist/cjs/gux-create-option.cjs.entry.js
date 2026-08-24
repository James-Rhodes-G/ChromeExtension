'use strict';

var index = require('./index-BLhHoh_r.js');
var randomHtmlId = require('./random-html-id-DH9-ntZu.js');
var index$1 = require('./index-QInGO-Pu.js');
require('./get-closest-element-CfyZl7i7.js');

const createCustomOptionInstructions = ", select to create a new custom option";
const createOption = "Add \"{optionValue}\"";
var translationResources = {
	createCustomOptionInstructions: createCustomOptionInstructions,
	createOption: createOption
};

const guxCreateOptionCss = ":host{box-sizing:border-box;display:flex;flex-direction:row;flex-wrap:nowrap;align-content:stretch;align-items:center;min-block-size:var(--gse-ui-menu-option-height);padding:var(--gse-ui-menu-option-padding);font-family:var(--gse-ui-menu-option-label-default-text-fontFamily);font-size:var(--gse-ui-menu-option-label-default-text-fontSize);font-weight:var(--gse-ui-menu-option-label-default-text-fontWeight);line-height:var(--gse-ui-menu-option-label-default-text-lineHeight);color:var(--gse-ui-menu-option-label-foregroundColor);word-wrap:break-word;cursor:pointer}:host:host(.gux-disabled){pointer-events:none;cursor:default;opacity:var(--gse-ui-menu-option-disabled-opacity)}:host:host(.gux-active){outline:var(--gse-ui-menu-option-focus-border-width) var(--gse-ui-menu-option-focus-border-style) var(--gse-ui-menu-option-focus-border-color);outline-offset:-2px;border-radius:var(--gse-semantic-focusOutline-sm-borderRadius)}:host:host(.gux-hovered:not([disabled])){background:var(--gse-ui-menu-option-hover-backgroundColor)}:host:host(.gux-filtered){display:none}:host gux-icon{padding-inline-end:var(--gse-ui-menu-option-gap)}:host .gux-option{display:inline-flex}:host .gux-screenreader{position:absolute;top:auto;left:-10000px;width:1px;height:1px;overflow:hidden}";

const GuxCreateOption = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.internalcreatenewoption = index.createEvent(this, "internalcreatenewoption", 7);
        this.active = false;
        this.hidden = true;
        this.filtered = true;
        this.hovered = false;
    }
    onmouseenter() {
        this.hovered = true;
    }
    onMouseleave() {
        this.hovered = false;
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async guxEmitInternalCreateNewOption() {
        this.internalcreatenewoption.emit();
    }
    handleClick() {
        this.internalcreatenewoption.emit(this.value);
    }
    async componentWillLoad() {
        this.i18n = await index$1.buildI18nForComponent(this.root, translationResources);
        this.root.id = this.root.id || randomHtmlId.randomHTMLId('gux-option-multi');
    }
    // COMUI-3905: Without this method the dropdown multi's add option button triggers an infinite loop when it is hidden adter being displayed.
    async componentWillRender() { }
    renderCustomOptionInstructions() {
        return (index.h("span", { class: "gux-screenreader" }, this.i18n('createCustomOptionInstructions')));
    }
    render() {
        return (index.h(index.Host, { key: '5923b19a166b698b50e5ac02f459ab397fd8f210', role: "option", "aria-selected": false, class: {
                'gux-active': this.active,
                'gux-hovered': this.hovered,
                'gux-filtered': this.filtered
            } }, index.h("div", { key: 'e40509866e7b082d270e2479bfea61253e57eca2', class: "gux-option" }, index.h("gux-icon", { key: 'a9ee42b9a7f4e587c8f447880a2e3ff067038254', decorative: true, "icon-name": "fa/plus-regular", size: "small" }), index.h("div", { key: '51545fd248d82632c543b75acc52fbfc88ce596b', class: "gux-create-text" }, this.i18n('createOption', {
            optionValue: this.value
        })), this.renderCustomOptionInstructions())));
    }
    get root() { return index.getElement(this); }
};
GuxCreateOption.style = guxCreateOptionCss;

exports.gux_create_option = GuxCreateOption;
