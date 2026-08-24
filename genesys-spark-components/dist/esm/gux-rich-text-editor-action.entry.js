import { r as registerInstance, h, a as getElement } from './index-xFL2agjT.js';
import { t as trackComponent } from './usage-D2Q7fj4V.js';
import { b as buildI18nForComponent } from './index-Dac2qHbK.js';
import { t as translationResources } from './en-DN3YAdAX.js';
import { h as hasDisabledParent, r as returnActionTypeIcon } from './gux-rich-text-editor.service-CJnB9AGA.js';
import './get-closest-element-Cd4R0amv.js';
import './get-closest-element-BZb6pJEJ.js';

const guxRichTextEditorActionCss = ":host{display:block}gux-button-slot{inline-size:var(--gse-ui-button-iconOnly-width);block-size:var(--gse-ui-button-default-height)}gux-button-slot button.gux-is-pressed{color:var(--gse-ui-button-ghost-active-foregroundColor);background-color:var(--gse-ui-button-ghost-active-backgroundColor)}";

const GuxRichTextEditorAction = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.disabled = false;
        this.isActive = false;
    }
    async componentWillLoad() {
        trackComponent(this.root, { variant: this.action });
        this.i18n = await buildI18nForComponent(this.root, translationResources);
    }
    renderTooltip() {
        if (!this.disabled) {
            return (h("gux-tooltip-beta", null, h("div", { slot: "content" }, this.i18n(this.action))));
        }
    }
    renderActionButton() {
        return (h("gux-button-slot", { accent: "ghost", "icon-only": true }, h("button", { type: "button", disabled: this.disabled || hasDisabledParent(this.root), class: { 'gux-is-pressed': this.isActive }, "aria-pressed": this.isActive.toString() }, h("gux-icon", { "icon-name": returnActionTypeIcon(this.action), decorative: true, size: "small" }), h("gux-screen-reader-beta", null, this.i18n(this.action))), this.renderTooltip()));
    }
    render() {
        return this.renderActionButton();
    }
    get root() { return getElement(this); }
};
GuxRichTextEditorAction.style = guxRichTextEditorActionCss;

export { GuxRichTextEditorAction as gux_rich_text_editor_action };
