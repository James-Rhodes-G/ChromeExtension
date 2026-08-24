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
import { randomHTMLId } from "../../../utils/dom/random-html-";
import { trackComponent } from "../../../utils/tracking/usage";
import { buildI18nForComponent } from "../../../i18n/index";
import translationResources from "./i18n/en.json";
import { OnClickOutside } from "../../../utils/decorator/on-click-outside";
import { afterNextRender } from "../../../utils/dom/after-next-render";
import { whenEventIsFrom } from "../../../utils/dom/when-event-is-from";
export class GuxContextMenu {
    constructor() {
        this.buttonId = randomHTMLId();
        /**
         * Indicates button density style. Intended to be paired with gux-table property.
         */
        this.compact = false;
        /**
         * Controls the disabled state of the internal button
         */
        this.disabled = false;
        /**
         * Screenreader text for context menu button
         * defaults to "context menu"
         */
        this.screenreaderText = '';
        /**
         * Placement of the popup
         * defaults to is "bottom-start"
         */
        this.placement = 'bottom-start';
        /**
         * Controls the visibility of the popover list
         */
        this.isOpen = false;
    }
    /**
     * Updates the state on click outside the element
     */
    onClickOutside() {
        this.isOpen = false;
    }
    // Note(E.Yankova): keydown handler
    // reference: https://www.w3.org/WAI/ARIA/apg/example-index/menu-button/menu-button-actions-active-descendant
    // section: "Keyboard Support" and "Menu"
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
    onButtonClick() {
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
            this.focusFirstListItem();
        }
    }
    onListClick(event) {
        whenEventIsFrom('gux-list-item', event, () => {
            this.isOpen = false;
            this.button.focus();
        });
    }
    async componentWillLoad() {
        trackComponent(this.root);
        this.i18n = await buildI18nForComponent(this.root, translationResources);
    }
    render() {
        return (h(Host, { key: '5c6fcdb16aca67d10d68a84a74ed9e882366594f' }, h("gux-popup", { key: 'a058fa9045b1ea9bf7baf6e7bd7acb20316021a1', placement: this.placement, expanded: this.isOpen, offset: 4, "exceed-target-width": true }, h("div", { key: 'b39b560341aff900fbfa5b0bf0927b1c4b9dbc33', slot: "target", class: "gux-button-container" }, h("gux-button-slot", { key: '70e97e654db145292fc372398101cfb7c26dce08', accent: "ghost" }, h("button", { key: '8cb5ca88159f66d55870701b463f7db5144989c9', type: "button", onClick: () => this.onButtonClick(), id: this.buttonId, class: { 'gux-compact': this.compact }, ref: el => (this.button = el), "aria-haspopup": "true", "aria-expanded": this.isOpen.toString(), disabled: this.disabled }, h("gux-screen-reader-beta", { key: '3a6f2b1215ae7fc383bacb7264f74cbd03b342a0' }, this.screenreaderText ||
            this.i18n('contextMenuScreenreaderText')), h("gux-icon", { key: '882669bc46a37800d7b9ced560de2e9d41105c4b', "icon-name": "fa/ellipsis-vertical-regular", size: "small", decorative: true })))), h("div", { key: 'b29801fdedc5ed27bbc0e3159749ec514d441a22', slot: "popup", class: "gux-list-container" }, h("gux-list", { key: '5fc919f53286974f3d9a38a069592227ce185103', onClick: e => this.onListClick(e), ref: el => (this.listElement = el) }, h("slot", { key: '184fa8c0df6a3f7fd91bbf2ad78f734c7b2654cf' }))))));
    }
    static get is() { return "gux-context-menu"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-context-menu.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-context-menu.css"]
        };
    }
    static get properties() {
        return {
            "compact": {
                "type": "boolean",
                "attribute": "compact",
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
                    "text": "Indicates button density style. Intended to be paired with gux-table property."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
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
                    "text": "Controls the disabled state of the internal button"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "screenreaderText": {
                "type": "string",
                "attribute": "screenreader-text",
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
                    "text": "Screenreader text for context menu button\ndefaults to \"context menu\""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "''"
            },
            "placement": {
                "type": "string",
                "attribute": "placement",
                "mutable": false,
                "complexType": {
                    "original": "Placement",
                    "resolved": "\"bottom\" | \"bottom-end\" | \"bottom-start\" | \"left\" | \"left-end\" | \"left-start\" | \"right\" | \"right-end\" | \"right-start\" | \"top\" | \"top-end\" | \"top-start\"",
                    "references": {
                        "Placement": {
                            "location": "import",
                            "path": "@floating-ui/dom",
                            "id": "../../node_modules/@floating-ui/dom/dist/floating-ui.dom.d.ts::Placement"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Placement of the popup\ndefaults to is \"bottom-start\""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'bottom-start'"
            }
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
], GuxContextMenu.prototype, "onClickOutside", null);
