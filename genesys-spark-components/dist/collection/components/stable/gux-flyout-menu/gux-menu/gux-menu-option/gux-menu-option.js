import { h } from "@stencil/core";
import { menuNavigation } from "../gux-menu.common";
/**
 * @slot - text
 */
export class GuxMenuOption {
    connectedCallback() {
        this.internals.role = 'menuitem';
    }
    /**
     * Focus on the components button element
     */
    // eslint-disable-next-line @typescript-eslint/require-await
    async guxFocus() {
        this.buttonElement.focus();
    }
    onKeydown(event) {
        menuNavigation(event, this.root);
        switch (event.key) {
            case 'ArrowRight':
            case 'Enter':
                event.stopPropagation();
                break;
        }
    }
    onKeyup(event) {
        switch (event.key) {
            case ' ':
                event.stopPropagation();
                break;
        }
    }
    render() {
        return (h("button", { key: 'a6e20affe6260ec5c17148cefdbfebe4a53ad9c6', type: "button", class: "gux-menu-option-button", "aria-haspopup": "false", tabIndex: -1, ref: el => (this.buttonElement = el) }, h("span", { key: '446395c2040c00b76ea1ce85e5f5599cae769aa7', class: "gux-menu-option-button-text" }, h("slot", { key: '4cd4228be9a88d2c02e9ec1431eb3128b72c02e5' }))));
    }
    static get is() { return "gux-menu-option"; }
    static get encapsulation() { return "shadow"; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-menu-option.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-menu-option.css"]
        };
    }
    static get methods() {
        return {
            "guxFocus": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Focus on the components button element",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "root"; }
    static get listeners() {
        return [{
                "name": "keydown",
                "method": "onKeydown",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "keyup",
                "method": "onKeyup",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
    static get attachInternalsMemberName() { return "internals"; }
}
