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
import { h } from "@stencil/core";
import { OnClickOutside } from "../../../../../utils/decorator/on-click-outside";
import { trackComponent } from "../../../../../utils/tracking/usage";
import { buildI18nForComponent } from "../../../../../i18n/index";
import translationResources from "../i18n/en.json";
import { hasDisabledParent } from "../../gux-rich-text-editor.service";
import { whenEventIsFrom } from "../../../../../utils/dom/when-event-is-from";
import { afterNextRender } from "../../../../../utils/dom/after-next-render";
import { eventIsFrom } from "../../../../../utils/dom/event-is-from";
/**
 * @slot - for a collection of gux-rich-highlight-list-item.
 */
export class GuxRichTextEditorActionTextHighlight {
    constructor() {
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
    static get is() { return "gux-rich-text-editor-action-text-highlight"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-rich-text-editor-action-text-highlight.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-rich-text-editor-action-text-highlight.css"]
        };
    }
    static get properties() {
        return {
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
            },
            "isActive": {
                "type": "boolean",
                "attribute": "is-active",
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
    static get events() {
        return [{
                "method": "noHighlightAction",
                "name": "noHighlightAction",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "root"; }
    static get watchers() {
        return [{
                "propName": "disabled",
                "methodName": "watchDisabled"
            }];
    }
    static get listeners() {
        return [{
                "name": "keydown",
                "method": "handleKeydown",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
__decorate([
    OnClickOutside({ triggerEvents: 'mousedown' })
], GuxRichTextEditorActionTextHighlight.prototype, "onClickOutside", null);
