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
import { trackComponent } from "../../../../../utils/tracking/usage";
import translationResources from "../i18n/en.json";
import { buildI18nForComponent } from "../../../../../i18n/index";
import { OnClickOutside } from "../../../../../utils/decorator/on-click-outside";
import { afterNextRender } from "../../../../../utils/dom/after-next-render";
export class GuxPaginationEllipsisButton {
    constructor() {
        this.isOpen = false;
        this.disabled = false;
    }
    handleKeyDown(event) {
        const composedPath = event.composedPath();
        switch (event.key) {
            case 'Escape':
                this.isOpen = false;
                this.ellipsisButton.focus();
                break;
            case 'Tab': {
                this.isOpen = false;
                break;
            }
            case 'ArrowDown':
            case 'Enter':
                if (composedPath.includes(this.ellipsisButton)) {
                    event.preventDefault();
                    this.isOpen = true;
                    this.focusInputElement();
                }
                break;
        }
    }
    handleKeyup(event) {
        switch (event.key) {
            case ' ': {
                const composedPath = event.composedPath();
                if (composedPath.includes(this.ellipsisButton)) {
                    this.isOpen = true;
                    this.focusInputElement();
                }
                break;
            }
        }
    }
    watchIsDisabled(newValue) {
        if (newValue) {
            this.isOpen = false;
        }
    }
    toggle() {
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
            this.focusInputElement();
        }
    }
    onClickOutside() {
        this.isOpen = false;
    }
    focusInputElement() {
        afterNextRender(() => {
            this.inputElement.focus();
        });
    }
    applyInputListener() {
        var _a;
        (_a = this.inputElement) === null || _a === void 0 ? void 0 : _a.addEventListener('keydown', (event) => {
            const inputValue = event.target.value.trim();
            if (event.key == 'Enter' || event.key == ' ') {
                if (inputValue == '') {
                    event.preventDefault();
                }
                else {
                    event.preventDefault();
                    this.goToPage.emit(event.target.value);
                    this.isOpen = false;
                }
            }
        });
    }
    async componentWillLoad() {
        this.i18n = await buildI18nForComponent(this.root, translationResources, 'gux-pagination-buttons');
        trackComponent(this.root);
    }
    componentDidLoad() {
        this.applyInputListener();
    }
    render() {
        return [
            h("gux-button", { key: '454441358989e2ef8054889e263e714a74b98411', accent: "ghost", id: "popover-target", type: "button", disabled: this.disabled, ref: el => (this.ellipsisButton = el), onClick: () => this.toggle(), "aria-haspopup": "true", "aria-expanded": this.isOpen.toString() }, h("gux-icon", { key: '0e56ff1b9756228976929d4db5d4da5edc5437a2', screenreaderText: this.i18n('goToPage'), "icon-name": "fa/ellipsis-regular", size: "small" })),
            h("gux-tooltip", { key: '2eed7f75f9de5709ec09f756250c93a5c6d6852e', for: "popover-target" }, h("div", { key: 'd9e02b0f0f8abf8c0d18387006d534a6cb2f5d2b', slot: "content" }, this.i18n('goToPage'))),
            h("gux-popover", { key: 'dfc6e87c29e082fe2de4e7e5ca4504996fdb648b', "is-open": this.isOpen, for: "popover-target" }, h("span", { key: '0dff29cc2478921d133c73c56922ad42f98dc309', slot: "title" }, this.i18n('goToPage')), h("gux-form-field-number", { key: '910764919a171ec5d15215856011353acd23079c' }, h("input", { key: 'f12b964eafa335c9626d4cf5978e7a7ab68ed196', slot: "input", type: "number", ref: el => (this.inputElement = el), min: "1", max: this.totalPages, value: "1", onKeyDown: evt => ['e', 'E', '+', '-', '.'].includes(evt.key) &&
                    evt.preventDefault() }), h("label", { key: '5175b0b5d341d49b770e29cb80ae9c5d73a35f42', slot: "label" })))
        ];
    }
    static get is() { return "gux-pagination-ellipsis-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-pagination-ellipsis-button.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-pagination-ellipsis-button.css"]
        };
    }
    static get properties() {
        return {
            "totalPages": {
                "type": "number",
                "attribute": "total-pages",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
            "isOpen": {}
        };
    }
    static get events() {
        return [{
                "method": "goToPage",
                "name": "goToPage",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "root"; }
    static get watchers() {
        return [{
                "propName": "disabled",
                "methodName": "watchIsDisabled"
            }];
    }
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
], GuxPaginationEllipsisButton.prototype, "onClickOutside", null);
