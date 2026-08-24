'use strict';

var index = require('./index-BLhHoh_r.js');
var usage = require('./usage-v50bi18B.js');
var index$1 = require('./index-QInGO-Pu.js');
var en = require('./en-ChMBIoFc.js');
var guxRichTextEditor_service = require('./gux-rich-text-editor.service-DvQrMYXi.js');
require('./get-closest-element-CfyZl7i7.js');
require('./get-closest-element-CIMI0Cx4.js');

const guxRichTextEditorActionCss = ":host{display:block}gux-button-slot{inline-size:var(--gse-ui-button-iconOnly-width);block-size:var(--gse-ui-button-default-height)}gux-button-slot button.gux-is-pressed{color:var(--gse-ui-button-ghost-active-foregroundColor);background-color:var(--gse-ui-button-ghost-active-backgroundColor)}";

const GuxRichTextEditorAction = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.disabled = false;
        this.isActive = false;
    }
    async componentWillLoad() {
        usage.trackComponent(this.root, { variant: this.action });
        this.i18n = await index$1.buildI18nForComponent(this.root, en.translationResources);
    }
    renderTooltip() {
        if (!this.disabled) {
            return (index.h("gux-tooltip-beta", null, index.h("div", { slot: "content" }, this.i18n(this.action))));
        }
    }
    renderActionButton() {
        return (index.h("gux-button-slot", { accent: "ghost", "icon-only": true }, index.h("button", { type: "button", disabled: this.disabled || guxRichTextEditor_service.hasDisabledParent(this.root), class: { 'gux-is-pressed': this.isActive }, "aria-pressed": this.isActive.toString() }, index.h("gux-icon", { "icon-name": guxRichTextEditor_service.returnActionTypeIcon(this.action), decorative: true, size: "small" }), index.h("gux-screen-reader-beta", null, this.i18n(this.action))), this.renderTooltip()));
    }
    render() {
        return this.renderActionButton();
    }
    get root() { return index.getElement(this); }
};
GuxRichTextEditorAction.style = guxRichTextEditorActionCss;

exports.gux_rich_text_editor_action = GuxRichTextEditorAction;
