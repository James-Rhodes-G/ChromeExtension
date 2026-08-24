import { r as registerInstance, f as forceUpdate, h, a as getElement } from './index-xFL2agjT.js';
import { t as trackComponent } from './usage-D2Q7fj4V.js';
import { h as hasDisabledParent } from './gux-rich-text-editor.service-CJnB9AGA.js';
import { O as OnClickOutside } from './on-click-outside-VvhFhgll.js';
import { b as afterNextRender } from './after-next-render-Bg4q97BS.js';
import { b as buildI18nForComponent } from './index-Dac2qHbK.js';
import { t as translationResources } from './en-DN3YAdAX.js';
import './get-closest-element-BZb6pJEJ.js';
import './get-closest-element-Cd4R0amv.js';

const guxRichTextEditorActionRichStyleCss = ":host{display:block}gux-button-slot button .gux-target-display{display:flex;flex-direction:row;gap:4px;align-items:center;justify-content:center}gux-button-slot button.gux-is-pressed{color:var(--gse-ui-button-ghost-active-foregroundColor);background-color:var(--gse-ui-button-ghost-active-backgroundColor)}.gux-list-container{inline-size:214px;margin:0;overflow-y:auto;background:var(--gse-ui-menu-backgroundColor);border-color:var(--gse-ui-menu-border-color);border-style:var(--gse-ui-menu-border-style);border-width:var(--gse-ui-menu-border-width);border-radius:var(--gse-ui-menu-borderRadius);box-shadow:var(--gse-ui-menu-boxShadow)}";

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
const GuxRichTextEditorActionRichStyle = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.expanded = false;
        this.disabled = false;
    }
    onClickOutside() {
        this.expanded = false;
    }
    watchValue(newValue) {
        this.validateValue(newValue, this.listElement);
    }
    watchDisabled(disabled) {
        if (disabled) {
            this.expanded = false;
        }
    }
    onInternallistitemsupdated(event) {
        event.stopPropagation();
        forceUpdate(this.root);
    }
    handleKeydown(event) {
        const isButtonEvent = event.composedPath().includes(this.actionButton);
        const isListEvent = event.composedPath().includes(this.listElement);
        switch (event.key) {
            case 'Escape':
                if (isListEvent) {
                    event.preventDefault();
                    this.expanded = false;
                    this.actionButton.focus();
                }
                break;
            case 'ArrowDown':
            case 'Enter': {
                if (isButtonEvent && !this.expanded) {
                    event.preventDefault();
                    this.expanded = true;
                    this.focusFirstListItem();
                }
                break;
            }
            case 'Tab':
                this.expanded = false;
                break;
            case 'ArrowUp':
                if (isButtonEvent && !this.expanded) {
                    event.preventDefault();
                    this.expanded = true;
                    this.focusLastListItem();
                }
        }
    }
    handleKeyup(event) {
        switch (event.key) {
            case ' ': {
                if (event.composedPath().includes(this.actionButton)) {
                    event.preventDefault();
                    this.expanded = true;
                    this.focusFirstListItem();
                }
                break;
            }
        }
    }
    focusFirstListItem() {
        afterNextRender(() => {
            void this.listElement.guxFocusFirstItem();
        });
    }
    focusLastListItem() {
        afterNextRender(() => {
            void this.listElement.guxFocusLastItem();
        });
    }
    async componentWillLoad() {
        trackComponent(this.root);
        this.i18n = await buildI18nForComponent(this.root, translationResources);
    }
    componentWillRender() {
        if (this === null || this === void 0 ? void 0 : this.listElement) {
            this.validateValue(this.value, this.listElement);
        }
    }
    validateValue(newValue, listElement) {
        if (newValue === undefined) {
            listElement.value = newValue;
            return;
        }
        const selectedListItem = this.getListItemElementByValue(newValue);
        if (selectedListItem) {
            listElement.value = newValue;
            return;
        }
    }
    get listItemElements() {
        const slot = this.listElement.querySelector('slot');
        if (slot) {
            return Array.from(slot.assignedElements());
        }
    }
    getListItemElementByValue(value) {
        return this.listItemElements.find(itemElement => {
            return itemElement.value === value;
        });
    }
    renderTargetDisplay() {
        if (this === null || this === void 0 ? void 0 : this.listElement) {
            const selectedListItemElement = this.getListItemElementByValue(this.value);
            if (selectedListItemElement) {
                return (h("span", null, this.renderListItem(selectedListItemElement)));
            }
        }
    }
    renderMenu() {
        return (h("div", { class: "gux-target-display" }, this.renderTargetDisplay(), h("gux-icon", { "icon-name": this.expanded
                ? 'custom/chevron-up-small-regular'
                : 'custom/chevron-down-small-regular', "screenreader-text": this.i18n('richStyleDropdown') })));
    }
    renderListItem(item) {
        return (h("gux-truncate", { "max-lines": 1 }, item.textContent));
    }
    renderTooltip() {
        if (!this.disabled && !this.expanded) {
            return (h("gux-tooltip-beta", null, h("div", { slot: "content" }, this.i18n('richStyle'))));
        }
    }
    onActionButtonClick() {
        this.expanded = !this.expanded;
        if (this.expanded) {
            this.focusFirstListItem();
        }
    }
    updateValue(newValue) {
        if (this.value !== newValue) {
            this.value = newValue;
        }
    }
    onListClick(event) {
        // Ensure we get the closest `gux-rich-style-list-item` if the click is on a nested element eg h1,h2,h3.
        const listItem = event.target.closest('gux-rich-style-list-item');
        if (listItem) {
            this.expanded = false;
            this.updateValue(listItem.value);
            this.actionButton.focus();
        }
    }
    renderPopup() {
        return (h("div", { class: "gux-list-container", slot: "popup" }, h("gux-rich-text-editor-list", { ref: el => (this.listElement = el), onClick: e => this.onListClick(e) }, h("slot", null))));
    }
    renderTarget() {
        return (h("gux-button-slot", { accent: "ghost", slot: "target", "icon-only": true }, h("button", { type: "button", ref: el => (this.actionButton = el), class: { 'gux-is-pressed': this.expanded }, onClick: () => this.onActionButtonClick(), disabled: this.disabled || hasDisabledParent(this.root), "aria-haspopup": "true", "aria-expanded": this.expanded.toString() }, this.renderMenu()), this.renderTooltip()));
    }
    render() {
        return (h("gux-popup", { key: 'a3acff488d05a0c81e3e877015c8ccf90f901479', expanded: this.expanded, exceedTargetWidth: true, placement: "bottom-start" }, this.renderTarget(), this.renderPopup()));
    }
    static get delegatesFocus() { return true; }
    get root() { return getElement(this); }
    static get watchers() { return {
        "value": ["watchValue"],
        "disabled": ["watchDisabled"]
    }; }
};
__decorate([
    OnClickOutside({ triggerEvents: 'mousedown' })
], GuxRichTextEditorActionRichStyle.prototype, "onClickOutside", null);
GuxRichTextEditorActionRichStyle.style = guxRichTextEditorActionRichStyleCss;

export { GuxRichTextEditorActionRichStyle as gux_rich_text_editor_action_rich_style };
