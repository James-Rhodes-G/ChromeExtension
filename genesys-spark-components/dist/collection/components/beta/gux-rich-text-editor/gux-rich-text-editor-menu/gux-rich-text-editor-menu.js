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
import { h, Host } from "@stencil/core";
import { trackComponent } from "../../../../utils/tracking/usage";
import { buildI18nForComponent } from "../../../../i18n/index";
import translationResources from "../gux-rich-text-editor-action/i18n/en.json";
import { OnClickOutside } from "../../../../utils/decorator/on-click-outside";
import { afterNextRender } from "../../../../utils/dom/after-next-render";
import { whenEventIsFrom } from "../../../../utils/dom/when-event-is-from";
import { hasDisabledParent } from "../gux-rich-text-editor.service";
export class GuxRichTextEditorMenu {
    constructor() {
        this.isOpen = false;
    }
    onClickOutside() {
        this.isOpen = false;
    }
    handleKeyDown(event) {
        const isListEvent = event.composedPath().includes(this.listElement);
        const isButtonEvent = event.composedPath().includes(this.button);
        switch (event.key) {
            case 'Escape': {
                if (isListEvent) {
                    event.preventDefault();
                    this.isOpen = false;
                    this.button.focus();
                }
                break;
            }
            case 'Tab': {
                this.isOpen = false;
                break;
            }
            case 'ArrowDown':
            case 'Enter': {
                if (isButtonEvent && !this.isOpen) {
                    event.preventDefault();
                    this.isOpen = true;
                    this.focusFirstListItem();
                }
                break;
            }
            case 'ArrowUp': {
                if (isButtonEvent && !this.isOpen) {
                    event.preventDefault();
                    this.isOpen = true;
                    this.focusLastListItem();
                }
                break;
            }
        }
    }
    handleKeyup(event) {
        switch (event.key) {
            case ' ': {
                if (event.composedPath().includes(this.button)) {
                    event.preventDefault();
                    this.isOpen = true;
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
    onActionClick() {
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
            this.focusFirstListItem();
        }
    }
    onListClick(event) {
        whenEventIsFrom('gux-rich-style-list-item', event, () => {
            this.isOpen = false;
            this.button.focus();
        });
    }
    renderTooltip() {
        return (h("gux-tooltip-beta", null, h("div", { slot: "content" }, this.i18n('additionalActions'))));
    }
    async componentWillLoad() {
        trackComponent(this.root);
        this.i18n = await buildI18nForComponent(this.root, translationResources);
    }
    render() {
        return (h(Host, { key: '87963618481ff58c090023c17beab8d53a9b073a' }, h("gux-popup", { key: 'bda2cc0cc677fdd9c879c89743e66f933bfaefa6', expanded: this.isOpen, offset: 4, "exceed-target-width": true }, h("div", { key: 'ecce9e9fce1bb889e36ef7f785b8d93cef132842', slot: "target" }, h("gux-button-slot", { key: '92f988d6ea66dc95a4e5f67a552ea2ff5c36cd6e', accent: "ghost" }, h("button", { key: '8cd5d5dff2e6041c76e5b6d8e71e99d670b68068', type: "button", onClick: () => this.onActionClick(), ref: el => (this.button = el), "aria-haspopup": "true", "aria-expanded": this.isOpen.toString(), disabled: hasDisabledParent(this.root) }, h("gux-icon", { key: '6b2f6de7e1ea240023bd21343674c3932c0666ca', "icon-name": "fa/ellipsis-vertical-regular", decorative: true, size: "small" }), h("gux-screen-reader-beta", { key: '690c884ce0424d98f227385dc63920af27926efa' }, this.i18n('additionalActions'))), this.renderTooltip())), h("div", { key: '24e6a9160a117a401779d0dc73842326e4930435', slot: "popup", class: "gux-list-container" }, h("gux-rich-text-editor-list", { key: '64787b9c585a0ccfbe17faf0370f1001ce50ba6e', onClick: e => this.onListClick(e), ref: el => (this.listElement = el) }, h("slot", { key: '2a5161bb4ac3c07d89636a69aad5746ed55fc6e7' }))))));
    }
    static get is() { return "gux-rich-text-editor-menu"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-rich-text-editor-menu.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-rich-text-editor-menu.css"]
        };
    }
    static get states() {
        return {
            "isOpen": {}
        };
    }
    static get elementRef() { return "root"; }
    static get listeners() {
        return [{
                "name": "keydown",
                "method": "handleKeyDown",
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
    OnClickOutside({ triggerEvents: 'click' })
], GuxRichTextEditorMenu.prototype, "onClickOutside", null);
