import { r as registerInstance, c as createEvent, h, a as getElement } from './index-xFL2agjT.js';
import { O as OnClickOutside } from './on-click-outside-VvhFhgll.js';
import { t as trackComponent } from './usage-D2Q7fj4V.js';
import { b as buildI18nForComponent } from './index-Dac2qHbK.js';
import { t as translationResources } from './en-DN3YAdAX.js';
import { h as hasDisabledParent } from './gux-rich-text-editor.service-CJnB9AGA.js';
import { w as whenEventIsFrom } from './when-event-is-from-kLXvN2m9.js';
import { b as afterNextRender } from './after-next-render-Bg4q97BS.js';
import { e as eventIsFrom } from './event-is-from-C6ZfOd6U.js';
import './get-closest-element-Cd4R0amv.js';
import './get-closest-element-BZb6pJEJ.js';

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
        registerInstance(this, hostRef);
        this.noHighlightAction = createEvent(this, "noHighlightAction", 7);
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
        const isHighlightItemEvent = eventIsFrom('gux-rich-highlight-list-item', event);
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
        trackComponent(this.root);
        this.i18n = await buildI18nForComponent(this.root, translationResources);
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
        afterNextRender(() => {
            this.noHighlightActionButton.focus();
        });
    }
    renderTooltip() {
        if (!this.disabled && !this.expanded) {
            return (h("gux-tooltip-beta", null, h("div", { slot: "content" }, this.i18n('textHighlight'))));
        }
    }
    renderPopup() {
        return (h("div", { class: "gux-text-highlight-popup", slot: "popup" }, this.renderNoHighlightAction(), this.renderTextHighlightColors()));
    }
    renderNoHighlightAction() {
        return (h("gux-button-slot", { accent: "tertiary" }, h("button", { type: "button", ref: el => (this.noHighlightActionButton = el), onClick: () => this.emitNoHighlightAction() }, h("gux-truncate", { "max-lines": 1 }, this.i18n('noHighlight')))));
    }
    onListClick(event) {
        whenEventIsFrom('gux-rich-highlight-list-item', event, () => {
            this.expanded = false;
            this.actionButton.focus();
        });
    }
    renderTextHighlightColors() {
        return (h("gux-rich-text-editor-list", { onClick: (e) => this.onListClick(e) }, h("slot", null)));
    }
    emitNoHighlightAction() {
        this.noHighlightAction.emit();
        this.expanded = false;
        this.actionButton.focus();
    }
    renderTarget() {
        return (h("gux-button-slot", { accent: "ghost", "icon-only": true, slot: "target" }, h("button", { type: "button", ref: el => (this.actionButton = el), onClick: () => this.togglePopup(), disabled: this.disabled || hasDisabledParent(this.root), class: { 'gux-is-pressed': this.isActive || this.expanded }, "aria-haspopup": "true", "aria-expanded": this.expanded.toString(), "aria-pressed": this.isActive.toString() }, h("gux-icon", { size: "small", "icon-name": "fa/highlighter-line-regular", decorative: true }), h("gux-screen-reader-beta", null, this.i18n('textHighlight'))), this.renderTooltip()));
    }
    render() {
        return (h("gux-popup", { key: 'ec879de91b32e19a4db7bb9685ec4a72646e9dec', disabled: this.disabled, expanded: this.expanded, exceedTargetWidth: true, placement: "bottom-start" }, this.renderTarget(), this.renderPopup()));
    }
    static get delegatesFocus() { return true; }
    get root() { return getElement(this); }
    static get watchers() { return {
        "disabled": ["watchDisabled"]
    }; }
};
__decorate([
    OnClickOutside({ triggerEvents: 'mousedown' })
], GuxRichTextEditorActionTextHighlight.prototype, "onClickOutside", null);
GuxRichTextEditorActionTextHighlight.style = guxRichTextEditorActionTextHighlightCss;

export { GuxRichTextEditorActionTextHighlight as gux_rich_text_editor_action_text_highlight };
