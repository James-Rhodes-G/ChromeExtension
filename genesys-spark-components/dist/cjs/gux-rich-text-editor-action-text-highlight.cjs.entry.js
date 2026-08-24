'use strict';

var index = require('./index-BLhHoh_r.js');
var onClickOutside = require('./on-click-outside-CrJioxOT.js');
var usage = require('./usage-v50bi18B.js');
var index$1 = require('./index-QInGO-Pu.js');
var en = require('./en-ChMBIoFc.js');
var guxRichTextEditor_service = require('./gux-rich-text-editor.service-DvQrMYXi.js');
var whenEventIsFrom = require('./when-event-is-from-C6TjNoqM.js');
var afterNextRender = require('./after-next-render-CeY_1Kbz.js');
var eventIsFrom = require('./event-is-from-D62oX3Ld.js');
require('./get-closest-element-CfyZl7i7.js');
require('./get-closest-element-CIMI0Cx4.js');

const guxRichTextEditorActionTextHighlightCss = ":host{display:block}.gux-text-highlight-popup{display:flex;flex-direction:column;gap:var(--gse-ui-rte-colorPalette-gap);inline-size:104px;padding:12px;margin:0;overflow-y:auto;background:var(--gse-ui-menu-backgroundColor);border-color:var(--gse-ui-menu-border-color);border-style:var(--gse-ui-menu-border-style);border-width:var(--gse-ui-menu-border-width);border-radius:var(--gse-ui-menu-borderRadius);box-shadow:var(--gse-ui-menu-boxShadow)}.gux-text-highlight-popup gux-rich-text-editor-list{display:flex;flex-direction:row;flex-wrap:wrap;gap:var(--gse-ui-rte-colorPalette-gap);align-items:flex-start;justify-content:flex-start;padding:0}.gux-text-highlight-popup gux-button-slot{align-self:center;block-size:var(--gse-ui-rte-menuButton-height)}.gux-text-highlight-popup gux-button-slot button{block-size:var(--gse-ui-rte-menuButton-height)}gux-button-slot button.gux-is-pressed{color:var(--gse-ui-button-ghost-active-foregroundColor);background-color:var(--gse-ui-button-ghost-active-backgroundColor)}";

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const GuxRichTextEditorActionTextHighlight = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.noHighlightAction = index.createEvent(this, "noHighlightAction", 7);
        this.disabled = false;
        this.isActive = false;
        this.expanded = false;
    }
    onClickOutside() {
        this.expanded = false;
    }
    watchDisabled(disabled) {
        if (disabled) {
            this.expanded = false;
        }
    }
    handleKeydown(event) {
        const isHighlightItemEvent = eventIsFrom.eventIsFrom('gux-rich-highlight-list-item', event);
        const composedPath = event.composedPath();
        switch (event.key) {
            case 'Escape':
                this.expanded = false;
                this.actionButton.focus();
                break;
            case 'ArrowDown':
            case 'Enter':
                if (composedPath.includes(this.actionButton)) {
                    event.preventDefault();
                    this.expanded = true;
                    this.focusNoHighlightActionButton();
                }
                break;
            case 'Tab':
                if (event.shiftKey) {
                    return;
                }
                if (isHighlightItemEvent) {
                    this.expanded = false;
                }
                break;
        }
    }
    async componentWillLoad() {
        usage.trackComponent(this.root);
        this.i18n = await index$1.buildI18nForComponent(this.root, en.translationResources);
    }
    togglePopup() {
        this.expanded = !this.expanded;
        if (this.expanded) {
            this.focusNoHighlightActionButton();
        }
        else {
            this.actionButton.focus();
        }
    }
    focusNoHighlightActionButton() {
        afterNextRender.afterNextRender(() => {
            this.noHighlightActionButton.focus();
        });
    }
    renderTooltip() {
        if (!this.disabled && !this.expanded) {
            return (index.h("gux-tooltip-beta", null, index.h("div", { slot: "content" }, this.i18n('textHighlight'))));
        }
    }
    renderPopup() {
        return (index.h("div", { class: "gux-text-highlight-popup", slot: "popup" }, this.renderNoHighlightAction(), this.renderTextHighlightColors()));
    }
    renderNoHighlightAction() {
        return (index.h("gux-button-slot", { accent: "tertiary" }, index.h("button", { type: "button", ref: el => (this.noHighlightActionButton = el), onClick: () => this.emitNoHighlightAction() }, index.h("gux-truncate", { "max-lines": 1 }, this.i18n('noHighlight')))));
    }
    onListClick(event) {
        whenEventIsFrom.whenEventIsFrom('gux-rich-highlight-list-item', event, () => {
            this.expanded = false;
            this.actionButton.focus();
        });
    }
    renderTextHighlightColors() {
        return (index.h("gux-rich-text-editor-list", { onClick: (e) => this.onListClick(e) }, index.h("slot", null)));
    }
    emitNoHighlightAction() {
        this.noHighlightAction.emit();
        this.expanded = false;
        this.actionButton.focus();
    }
    renderTarget() {
        return (index.h("gux-button-slot", { accent: "ghost", "icon-only": true, slot: "target" }, index.h("button", { type: "button", ref: el => (this.actionButton = el), onClick: () => this.togglePopup(), disabled: this.disabled || guxRichTextEditor_service.hasDisabledParent(this.root), class: { 'gux-is-pressed': this.isActive || this.expanded }, "aria-haspopup": "true", "aria-expanded": this.expanded.toString(), "aria-pressed": this.isActive.toString() }, index.h("gux-icon", { size: "small", "icon-name": "fa/highlighter-line-regular", decorative: true }), index.h("gux-screen-reader-beta", null, this.i18n('textHighlight'))), this.renderTooltip()));
    }
    render() {
        return (index.h("gux-popup", { key: 'ec879de91b32e19a4db7bb9685ec4a72646e9dec', disabled: this.disabled, expanded: this.expanded, exceedTargetWidth: true, placement: "bottom-start" }, this.renderTarget(), this.renderPopup()));
    }
    static get delegatesFocus() { return true; }
    get root() { return index.getElement(this); }
    static get watchers() { return {
        "disabled": ["watchDisabled"]
    }; }
};
__decorate([
    onClickOutside.OnClickOutside({ triggerEvents: 'mousedown' })
], GuxRichTextEditorActionTextHighlight.prototype, "onClickOutside", null);
GuxRichTextEditorActionTextHighlight.style = guxRichTextEditorActionTextHighlightCss;

exports.gux_rich_text_editor_action_text_highlight = GuxRichTextEditorActionTextHighlight;
