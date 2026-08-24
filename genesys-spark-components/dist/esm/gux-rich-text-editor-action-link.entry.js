import { r as registerInstance, c as createEvent, h, H as Host, a as getElement } from './index-xFL2agjT.js';
import { O as OnClickOutside } from './on-click-outside-VvhFhgll.js';
import { t as trackComponent } from './usage-D2Q7fj4V.js';
import { b as buildI18nForComponent } from './index-Dac2qHbK.js';
import { t as translationResources } from './en-DN3YAdAX.js';
import { b as afterNextRender } from './after-next-render-Bg4q97BS.js';
import { h as hasDisabledParent } from './gux-rich-text-editor.service-CJnB9AGA.js';
import './get-closest-element-Cd4R0amv.js';
import './get-closest-element-BZb6pJEJ.js';

const guxRichTextEditorActionLinkCss = ":host{display:block}gux-popover div.gux-popover-content-wrapper{display:flex;flex-direction:column;gap:var(--gse-ui-popover-gap)}gux-button-slot{inline-size:var(--gse-ui-button-iconOnly-width);block-size:var(--gse-ui-button-default-height)}gux-button-slot button.gux-is-pressed{color:var(--gse-ui-button-ghost-active-foregroundColor);background-color:var(--gse-ui-button-ghost-active-backgroundColor)}";

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
const GuxRichTextEditorActionLink = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.linkOptions = createEvent(this, "linkOptions", 7);
        this.disabled = false;
        this.isActive = false;
        this.isOpen = false;
    }
    onClickOutside() {
        this.isOpen = false;
    }
    handleKeydown(event) {
        const composedPath = event.composedPath();
        switch (event.key) {
            case 'Escape':
                this.isOpen = false;
                this.actionButton.focus();
                break;
            case 'ArrowDown':
            case 'Enter':
                if (composedPath.includes(this.actionButton)) {
                    event.preventDefault();
                    this.isOpen = true;
                    this.focusTextToDisplayInputElement();
                }
                break;
        }
    }
    async componentWillLoad() {
        trackComponent(this.root);
        this.i18n = await buildI18nForComponent(this.root, translationResources);
    }
    emitLinkOptions() {
        const linkOptions = {
            textToDisplay: this.textToDisplayInputElement.value,
            href: this.linkAddressInputElement.value
        };
        this.linkOptions.emit(linkOptions);
        this.textToDisplayInputElement.value = null;
        this.linkAddressInputElement.value = null;
        this.isOpen = false;
    }
    togglePopover() {
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
            this.focusTextToDisplayInputElement();
        }
        else {
            this.actionButton.focus();
        }
    }
    focusTextToDisplayInputElement() {
        afterNextRender(() => {
            this.textToDisplayInputElement.focus();
        });
    }
    renderTooltip() {
        if (!this.disabled) {
            return (h("gux-tooltip-beta", null, h("div", { slot: "content" }, this.i18n('link'))));
        }
    }
    render() {
        return (h(Host, { key: '7cf1282de26e3435355bd1e56082a6bf82c8ee41' }, h("gux-button-slot", { key: 'a3989e6cf8045e14a692bcd6794adeb495c8eb52', accent: "ghost", "icon-only": true }, h("button", { key: 'fa0f503c88a30d0a33ec290ac74496e14dca317f', id: "popover-target", class: { 'gux-is-pressed': this.isActive || this.isOpen }, onClick: () => this.togglePopover(), ref: el => (this.actionButton = el), type: "button", disabled: this.disabled || hasDisabledParent(this.root), "aria-label": this.i18n('link'), "aria-haspopup": "true", "aria-expanded": this.isOpen.toString(), "aria-pressed": this.isActive.toString() }, h("gux-icon", { key: '7e15018402b7837cb4a956cc0b93c1cca0464a61', size: "small", "icon-name": "fa/link-simple-regular", decorative: true })), this.renderTooltip()), h("gux-popover", { key: 'ec30b2f47af90d979eed841792d38fc6e6a0e16f', "is-open": this.isOpen, for: "popover-target" }, h("div", { key: 'f8a3175a12fb9cf43222b65427b5d61fa20340f9', class: "gux-popover-content-wrapper" }, h("gux-form-field-text-like", { key: 'ae81694b4b7eacd3149946dbd3ce689c1e09f62c' }, h("input", { key: '8d362954344ea9816221bb61b5dc9fb91375bf22', id: "textToDisplay", ref: el => (this.textToDisplayInputElement = el), slot: "input", type: "text" }), h("label", { key: '37df778fed4a89f12db534a36bed2aa9ab8ed0d0', slot: "label" }, this.i18n('textToDisplay'))), h("gux-form-field-text-like", { key: '669a4e47dbe0bbc16fa81ddd612a9d4d3639e84e' }, h("input", { key: 'c17e684a83dfdd16213022f8caa8147d2d9885a5', ref: el => (this.linkAddressInputElement = el), slot: "input", type: "text" }), h("label", { key: '41be8853cddd956df0a0d9bf0654fe7de1c183ce', slot: "label" }, this.i18n('linkAddress'))), h("gux-cta-group", { key: '36ded973565793d7fb723bc59cdbe34e0b6c0de9', align: "end" }, h("gux-button", { key: '018ece746fc3629506b948efeb530a50595a25dc', onClick: () => this.emitLinkOptions(), slot: "primary" }, this.i18n('insert')), h("gux-button", { key: '9ec7fad709478eaeafeb86a65d3e64a859196607', onClick: () => this.togglePopover(), slot: "dismiss" }, this.i18n('cancel')))))));
    }
    get root() { return getElement(this); }
};
__decorate([
    OnClickOutside({ triggerEvents: 'mousedown' })
], GuxRichTextEditorActionLink.prototype, "onClickOutside", null);
GuxRichTextEditorActionLink.style = guxRichTextEditorActionLinkCss;

export { GuxRichTextEditorActionLink as gux_rich_text_editor_action_link };
