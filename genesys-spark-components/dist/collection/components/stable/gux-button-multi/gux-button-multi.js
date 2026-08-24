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
import { getGuxButtonMultiAccent } from "./gux-button-multi.types";
/**
 * @slot title - slot for icon and button text
 */
export class GuxButtonMulti {
    constructor() {
        /**
         * Disables the action button.
         */
        this.disabled = false;
        this.accent = 'secondary';
        /**
         * Aria label for button tag
         */
        this.guxAriaLabel = '';
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
            case 'Enter':
            case 'ArrowDown':
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
    onClickOutside() {
        this.isOpen = false;
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
            this.listElement.focus();
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
    onListClick(event) {
        whenEventIsFrom('gux-list-item', event, () => {
            this.isOpen = false;
            this.dropdownButton.focus();
        });
    }
    componentWillLoad() {
        trackComponent(this.root, { variant: this.accent });
    }
    render() {
        return (h("gux-popup", { key: '1de80e87fb808e2c1c67f11069ff854b3c8bb594', expanded: this.isOpen, "exceed-target-width": true, placement: "bottom-end" }, h("div", { key: 'ec449bb3cb5a07b22aa19a1cfbe7bad390348c58', slot: "target", class: "gux-button-multi-container" }, h("gux-button-slot", { key: '59a02ac2a0617c39bdee504aec91325e5fa6b011', class: "gux-dropdown-button", accent: getGuxButtonMultiAccent(this.accent) }, h("button", { key: '8e774e6ff321588c41ffe731c1967752dc5ca622', type: "button", disabled: this.disabled, ref: el => (this.dropdownButton = el), onMouseUp: () => this.toggle(), "aria-haspopup": "true", "aria-expanded": this.isOpen.toString(), "aria-label": this.guxAriaLabel }, h("slot", { key: '18b5e98f45e5b7f4b4644e55417575f88d240d21', name: "title" }), h("gux-icon", { key: '625f150aebd9cb9c87214c200309e1c76c7ed372', size: "small", decorative: true, "icon-name": "custom/chevron-down-small-regular" })))), h("div", { key: '3f328498971bffd3d0c79d2dc01e6cca83079af4', class: "gux-list-container", slot: "popup" }, h("gux-list", { key: '8263e75953b2091c4af783245e89b5abfabedfe5', onClick: (e) => this.onListClick(e), ref: el => (this.listElement = el) }, h("slot", { key: '2eebad343f088ea4f234ba23c9758d24d082daed' })))));
    }
    static get is() { return "gux-button-multi"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-button-multi.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-button-multi.css"]
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
                    "original": "GuxButtonMultiAccent",
                    "resolved": "\"primary\" | \"secondary\" | \"tertiary\"",
                    "references": {
                        "GuxButtonMultiAccent": {
                            "location": "import",
                            "path": "./gux-button-multi.types",
                            "id": "src/components/stable/gux-button-multi/gux-button-multi.types.ts::GuxButtonMultiAccent"
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
            "guxAriaLabel": {
                "type": "string",
                "attribute": "gux-aria-label",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Aria label for button tag"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "''"
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
    OnClickOutside({ triggerEvents: 'mousedown' })
], GuxButtonMulti.prototype, "onClickOutside", null);
