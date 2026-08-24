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
import { OnClickOutside } from "../../../utils/decorator/on-click-outside";
import { whenEventIsFrom } from "../../../utils/dom/when-event-is-from";
import { afterNextRenderTimeout } from "../../../utils/dom/after-next-render";
import { trackComponent } from "../../../utils/tracking/usage";
import { buildI18nForComponent } from "../../../i18n";
import defaultResources from "./i18n/en.json";
import { getGuxActionButtonAccent } from "./gux-action-button.types";
/**
 * @slot title - slot for icon and button text
 */
export class GuxActionButton {
    constructor() {
        /**
         * The component button type
         */
        this.type = 'button';
        /**
         * Disables the action button.
         */
        this.disabled = false;
        this.accent = 'secondary';
        /**
         * It is used to open or not the list.
         */
        this.isOpen = false;
    }
    handleKeydown(event) {
        const composedPath = event.composedPath();
        switch (event.key) {
            case 'Escape':
                this.isOpen = false;
                if (composedPath.includes(this.listElement)) {
                    event.preventDefault();
                    this.dropdownButton.focus();
                }
                break;
            case 'Tab': {
                this.isOpen = false;
                break;
            }
            case 'ArrowDown':
            case 'Enter':
                if (composedPath.includes(this.dropdownButton)) {
                    event.preventDefault();
                    this.isOpen = true;
                    this.focusFirstItemInPopupList();
                }
                break;
            case 'ArrowUp':
                if (composedPath.includes(this.dropdownButton)) {
                    event.preventDefault();
                    this.isOpen = true;
                    this.focusLastItemInPopupList();
                }
                break;
        }
    }
    handleKeyup(event) {
        switch (event.key) {
            case ' ': {
                const composedPath = event.composedPath();
                if (composedPath.includes(this.dropdownButton)) {
                    this.isOpen = true;
                    this.focusFirstItemInPopupList();
                }
                break;
            }
        }
    }
    watchDisabled(disabled) {
        if (disabled) {
            this.isOpen = false;
        }
    }
    watchValue(isOpen) {
        if (isOpen) {
            this.open.emit();
        }
        else {
            this.listElement.blur();
            this.close.emit();
        }
    }
    onClickOutside(event) {
        if (event.relatedTarget === null) {
            this.isOpen = false;
        }
    }
    toggle() {
        if (!this.disabled) {
            this.isOpen = !this.isOpen;
            if (this.isOpen) {
                this.focusPopupList();
            }
        }
    }
    focusPopupList() {
        afterNextRenderTimeout(() => {
            var _a;
            (_a = this.listElement) === null || _a === void 0 ? void 0 : _a.focus();
        });
    }
    focusFirstItemInPopupList() {
        afterNextRenderTimeout(() => {
            void this.listElement.guxFocusFirstItem();
        });
    }
    focusLastItemInPopupList() {
        afterNextRenderTimeout(() => {
            void this.listElement.guxFocusLastItem();
        });
    }
    onActionClick() {
        if (!this.disabled) {
            this.isOpen = false;
            this.actionClick.emit();
        }
    }
    onListClick(event) {
        whenEventIsFrom('gux-list-item', event, () => {
            this.isOpen = false;
            this.dropdownButton.focus();
        });
    }
    async componentWillLoad() {
        trackComponent(this.root, { variant: this.type });
        this.i18n = await buildI18nForComponent(this.root, defaultResources);
    }
    render() {
        return (h("div", { key: 'f14d323f9c10b003797a9de4b18af7dcac6fcf7e', class: "gux-action-button-container" }, h("gux-popup", { key: '714da05054cf5b53dcfa00d35a820eaa742225d8', expanded: this.isOpen, disabled: this.disabled, placement: "bottom-end", "exceed-target-width": true }, h("div", { key: 'f5154cfbf4d41bb0ba8955d6f9e52978d28d6e17', slot: "target", class: "gux-action-button-container" }, h("gux-button-slot", { key: 'ca2510f0946954e9af16c61390b744bab208083d', class: "gux-action-button", accent: getGuxActionButtonAccent(this.accent) }, h("button", { key: '3b39ea4b471dca0aad9049a78ce783e52902f9c6', type: this.type, disabled: this.disabled, onClick: () => this.onActionClick(), "data-testid": "action-button" }, h("slot", { key: '2e03cf69a0308100b41dccb4f04b25711d63a8bb', name: "title" }))), h("gux-button-slot", { key: 'e8ff491d344751fbd3aad8a4883d218540fd8053', class: "gux-dropdown-button", accent: getGuxActionButtonAccent(this.accent) }, h("button", { key: '806b5b458454bc12104f8dedb46a8e75c9bef212', type: "button", disabled: this.disabled, ref: el => (this.dropdownButton = el), onMouseUp: () => this.toggle(), "aria-haspopup": "true", "aria-expanded": this.isOpen.toString(), "aria-label": this.i18n('moreOptions'), "data-testid": "dropdown-button" }, h("gux-icon", { key: 'dfb75af52b0817f9b54125e28c990fefdf150957', decorative: true, "icon-name": "custom/chevron-down-small-regular", size: "small" })))), h("div", { key: '1165c634704e0436e67eea3801e8650325c496ef', class: "gux-list-container", slot: "popup" }, h("gux-list", { key: 'ec0c603e4fce250e05494b6c3e310c695676bf4d', onClick: (e) => this.onListClick(e), ref: el => (this.listElement = el) }, h("slot", { key: 'e3882349fc5ae5c7fe6c2e4979c8b9eb4297190d' }))))));
    }
    static get is() { return "gux-action-button"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-action-button.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-action-button.css"]
        };
    }
    static get properties() {
        return {
            "type": {
                "type": "string",
                "attribute": "type",
                "mutable": false,
                "complexType": {
                    "original": "GuxActionButtonType",
                    "resolved": "\"button\" | \"reset\" | \"submit\"",
                    "references": {
                        "GuxActionButtonType": {
                            "location": "import",
                            "path": "./gux-action-button.types",
                            "id": "src/components/stable/gux-action-button/gux-action-button.types.ts::GuxActionButtonType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The component button type"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'button'"
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
                    "text": "Disables the action button."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "accent": {
                "type": "string",
                "attribute": "accent",
                "mutable": false,
                "complexType": {
                    "original": "GuxActionButtonAccent",
                    "resolved": "\"danger\" | \"primary\" | \"secondary\" | \"tertiary\"",
                    "references": {
                        "GuxActionButtonAccent": {
                            "location": "import",
                            "path": "./gux-action-button.types",
                            "id": "src/components/stable/gux-action-button/gux-action-button.types.ts::GuxActionButtonAccent"
                        }
                    }
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
                "defaultValue": "'secondary'"
            },
            "isOpen": {
                "type": "boolean",
                "attribute": "is-open",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "It is used to open or not the list."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get events() {
        return [{
                "method": "open",
                "name": "open",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Triggered when the menu is open"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "close",
                "name": "close",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Triggered when the menu is close"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "actionClick",
                "name": "actionClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Triggered when the action button is clicked"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "root"; }
    static get watchers() {
        return [{
                "propName": "disabled",
                "methodName": "watchDisabled"
            }, {
                "propName": "isOpen",
                "methodName": "watchValue"
            }];
    }
    static get listeners() {
        return [{
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
    OnClickOutside({ triggerEvents: 'click' })
], GuxActionButton.prototype, "onClickOutside", null);
