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
import { OnClickOutside } from "../../../../utils/decorator/on-click-outside";
import { buildI18nForComponent } from "../../../../i18n";
import translationResources from "./i18n/en.json";
import { afterNextRender } from "../../../../utils/dom/after-next-render";
export class GuxTableToolbarMenuButton {
    constructor() {
        this.expanded = false;
    }
    handleKeyDown(event) {
        const composedPath = event.composedPath();
        switch (event.key) {
            case 'Escape':
                this.expanded = false;
                if (composedPath.includes(this.listElement)) {
                    event.preventDefault();
                    this.dropdownButton.focus();
                }
                break;
            case 'Tab': {
                this.expanded = false;
                break;
            }
            case 'ArrowDown':
            case 'Enter':
                if (composedPath.includes(this.dropdownButton)) {
                    event.preventDefault();
                    this.expanded = true;
                    this.focusFirstItemInPopupList();
                }
                break;
        }
    }
    handleKeyup(event) {
        switch (event.key) {
            case ' ': {
                const composedPath = event.composedPath();
                if (composedPath.includes(this.dropdownButton)) {
                    this.expanded = true;
                    this.focusFirstItemInPopupList();
                }
                break;
            }
        }
    }
    toggle() {
        this.expanded = !this.expanded;
        if (this.expanded) {
            this.focusPopupList();
        }
    }
    onClickOutside() {
        this.expanded = false;
    }
    focusPopupList() {
        afterNextRender(() => {
            this.listElement.focus();
        });
    }
    focusFirstItemInPopupList() {
        afterNextRender(() => {
            void this.listElement.guxFocusFirstItem();
        });
    }
    renderTooltip() {
        if (!this.expanded) {
            return (h("gux-tooltip-beta", null, h("div", { slot: "content" }, this.i18n('additionalActions'))));
        }
    }
    async componentWillLoad() {
        this.i18n = await buildI18nForComponent(this.root, translationResources);
        trackComponent(this.root);
    }
    render() {
        return (h(Host, { key: 'acc9a3590854223ac99cff9f9fdb79f0c45e3b34', class: { 'gux-show-menu': this.showMenu } }, h("gux-popup", { key: '3dfcd0901cb7ecf4d8f68a541b571d69ab9c8dc4', expanded: this.expanded, "exceed-target-width": true }, h("div", { key: '48ef9657c0d9ff9adde14179a323730f9f7e60ae', slot: "target", class: "gux-toolbar-menu-container" }, h("gux-button-slot", { key: '807bff8898b9560a2faf723ad865bb0f7368b83d', accent: "secondary" }, h("button", { key: '8637791c122ee1683fcd56f9ab559c763689b4e6', class: "gux-menu-button", type: "button", ref: el => (this.dropdownButton = el), onMouseUp: () => this.toggle(), "aria-haspopup": "true", "aria-expanded": this.expanded.toString() }, h("gux-icon", { key: '20ef23bd4d57592356bb35af6c77eb8dd994a5cf', "icon-name": "fa/ellipsis-regular", size: "small", decorative: true }), h("gux-screen-reader-beta", { key: '8bd9ed576b8ba2bcb0d2adca54d99e00a62f9fea' }, this.i18n('additionalActions'))), this.renderTooltip())), h("div", { key: '41658ed678031a071d6967b41c285d9dee280cc5', class: "gux-list-container", slot: "popup" }, h("gux-list", { key: '703000ebf60b1d1e0b35496e18d81a98d8cc056a', ref: el => (this.listElement = el) }, h("slot", { key: '07bfabc74212d389991a201f6dcf78cdfcb1bf1e' }))))));
    }
    static get is() { return "gux-table-toolbar-menu-button"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-table-toolbar-menu-button.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-table-toolbar-menu-button.css"]
        };
    }
    static get properties() {
        return {
            "showMenu": {
                "type": "boolean",
                "attribute": "show-menu",
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
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "expanded": {}
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
    OnClickOutside({ triggerEvents: 'mousedown' })
], GuxTableToolbarMenuButton.prototype, "onClickOutside", null);
