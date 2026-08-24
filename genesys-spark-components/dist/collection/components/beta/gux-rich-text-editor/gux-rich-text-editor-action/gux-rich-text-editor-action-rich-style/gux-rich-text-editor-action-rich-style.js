var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { h, forceUpdate } from "@stencil/core";
import { trackComponent } from "../../../../../utils/tracking/usage";
import { hasDisabledParent } from "../../gux-rich-text-editor.service";
import { OnClickOutside } from "../../../../../utils/decorator/on-click-outside";
import { afterNextRender } from "../../../../../utils/dom/after-next-render";
import { buildI18nForComponent } from "../../../../../i18n/index";
import translationResources from "../i18n/en.json";
/**
@slot - for a collection of gux-rich-style-list-item elements.
*/
export class GuxRichTextEditorActionRichStyle {
    constructor() {
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
    static get is() { return "gux-rich-text-editor-action-rich-style"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-rich-text-editor-action-rich-style.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-rich-text-editor-action-rich-style.css"]
        };
    }
    static get properties() {
        return {
            "value": {
                "type": "string",
                "attribute": "value",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "disabled": {
                "type": "boolean",
                "attribute": "disabled",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "expanded": {}
        };
    }
    static get elementRef() { return "root"; }
    static get watchers() {
        return [{
                "propName": "value",
                "methodName": "watchValue"
            }, {
                "propName": "disabled",
                "methodName": "watchDisabled"
            }];
    }
    static get listeners() {
        return [{
                "name": "internallistitemsupdated",
                "method": "onInternallistitemsupdated",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "keydown",
                "method": "handleKeydown",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "keyup",
                "method": "handleKeyup",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
__decorate([
    OnClickOutside({ triggerEvents: 'mousedown' })
], GuxRichTextEditorActionRichStyle.prototype, "onClickOutside", null);
