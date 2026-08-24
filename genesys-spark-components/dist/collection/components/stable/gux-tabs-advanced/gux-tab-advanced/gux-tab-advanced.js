import { h } from "@stencil/core";
import { eventIsFrom } from "../../../../utils/dom/event-is-from";
import { randomHTMLId } from "../../../../utils/dom/random-html-";
import { afterNextRenderTimeout } from "../../../../utils/dom/after-next-render";
import { buildI18nForComponent } from "../../../../i18n";
import tabsResources from "../i18n/en.json";
/**
 * @slot default - gux-icon (optional) and text node (required)
 * @slot dropdown-options - optional slot for tab options, must slot a gux-list element with gux-list-item children
 */
export class GuxTabAdvanced {
    constructor() {
        this.dropdownOptionsButtonId = randomHTMLId();
        this.tabTitle = '';
        this.focusinFromClick = false;
        /**
         * indicates whether or not the tab is selected
         */
        this.active = false;
        this.guxDisabled = false;
        this.popoverHidden = true;
    }
    onFocusin(event) {
        if (!this.focusinFromClick &&
            event.target.classList.contains('gux-tab-button')) {
            void this.tooltipTitleElement.setShowTooltip();
        }
    }
    onFocusout(event) {
        if (!this.root.querySelector('.gux-tab').contains(event.relatedTarget)) {
            this.popoverHidden = true;
        }
        if (event.target.classList.contains('gux-tab-button')) {
            void this.tooltipTitleElement.setHideTooltip();
        }
        this.focusinFromClick = false;
    }
    onKeydown(event) {
        switch (event.key) {
            case 'ArrowDown':
                if (eventIsFrom('.gux-tab-options-trigger', event)) {
                    event.stopPropagation();
                    event.preventDefault();
                    this.popoverHidden = false;
                    this.focusFirstItemInPopupList();
                }
                if (eventIsFrom('gux-list[slot="dropdown-options"]', event)) {
                    event.stopImmediatePropagation();
                    event.stopPropagation();
                }
                break;
            case 'Enter':
                if (eventIsFrom('.gux-tab-options-trigger', event)) {
                    event.stopPropagation();
                    event.preventDefault();
                    this.popoverHidden = false;
                    this.focusFirstItemInPopupList();
                }
                break;
            case 'Escape':
                if (eventIsFrom('gux-list[slot="dropdown-options"]', event)) {
                    event.stopPropagation();
                    this.popoverHidden = true;
                    afterNextRenderTimeout(() => {
                        var _a;
                        (_a = this.tabOptionsButtonElement) === null || _a === void 0 ? void 0 : _a.focus();
                    });
                }
                break;
            case 'ArrowRight':
            case 'ArrowLeft':
            case 'ArrowUp':
            case 'Tab':
            case 'Home':
            case 'End':
                if (eventIsFrom('gux-list[slot="dropdown-options"]', event)) {
                    event.stopImmediatePropagation();
                    event.stopPropagation();
                }
                break;
        }
    }
    onKeyup(event) {
        switch (event.key) {
            case ' ':
                if (eventIsFrom('.gux-tab-options-trigger', event)) {
                    this.focusFirstItemInPopupList();
                }
        }
    }
    onClick(event) {
        if (eventIsFrom('.gux-tab-options-trigger', event)) {
            return;
        }
        if (!this.active && !this.guxDisabled) {
            this.internalactivatetabpanel.emit(this.tabId);
        }
    }
    onMouseDown() {
        this.focusinFromClick = true;
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async guxSetActive(active) {
        this.active = active;
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async guxGetActive() {
        return this.active;
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async guxFocus() {
        this.buttonElement.focus();
    }
    get hasDropdownOptions() {
        return Boolean(this.root.querySelector('gux-list[slot="dropdown-options"]'));
    }
    focusFirstItemInPopupList() {
        const listElement = this.root.querySelector('gux-list[slot="dropdown-options"]');
        afterNextRenderTimeout(() => {
            void (listElement === null || listElement === void 0 ? void 0 : listElement.guxFocusFirstItem());
        });
    }
    toggleOptions() {
        this.popoverHidden = !this.popoverHidden;
    }
    onSelectDropdownOption(e) {
        this.popoverHidden = true;
        e.stopPropagation();
        afterNextRenderTimeout(() => {
            this.tabOptionsButtonElement.focus();
        });
    }
    async componentWillLoad() {
        this.i18n = await buildI18nForComponent(this.root, tabsResources, 'gux-tabs-advanced');
    }
    componentDidLoad() {
        this.tabTitle = this.root
            .querySelector('gux-tooltip-title')
            .textContent.trim();
    }
    popoverOnClick(e) {
        e.stopPropagation();
    }
    renderTabOptions() {
        if (this.hasDropdownOptions) {
            return (h("div", { class: "gux-tab-options" }, h("gux-button-slot", { accent: "ghost" }, h("button", { id: this.dropdownOptionsButtonId, role: "tab", "aria-expanded": (!this.popoverHidden).toString(), type: "button", class: "gux-tab-options-trigger", ref: el => (this.tabOptionsButtonElement = el), onClick: () => this.toggleOptions(), tabIndex: this.active ? 0 : -1, disabled: this.guxDisabled }, h("gux-icon", { "icon-name": "fa/ellipsis-vertical-regular", decorative: true }), h("gux-screen-reader-beta", null, this.i18n('options', {
                tabTitle: this.tabTitle
            })))), h("gux-popover-list", { position: "top-end", for: this.dropdownOptionsButtonId, displayDismissButton: false, "is-open": !this.popoverHidden, closeOnClickOutside: true, onGuxdismiss: () => (this.popoverHidden = true), onClick: (e) => this.popoverOnClick(e), onFocusout: e => e.stopImmediatePropagation() }, h("div", { class: "gux-dropdown-options-container", onClick: (e) => this.onSelectDropdownOption(e) }, h("slot", { name: "dropdown-options" })))));
        }
        return null;
    }
    renderTabButton() {
        return (h("button", { class: "gux-tab-button", type: "button", role: "tab", disabled: this.guxDisabled, "aria-selected": this.active.toString(), "aria-disabled": this.guxDisabled.toString(), "aria-controls": `gux-${this.tabId}-panel`, ref: el => (this.buttonElement = el), tabIndex: this.active ? 0 : -1, id: `gux-${this.tabId}-tab` }, h("gux-tooltip-title", { ref: el => (this.tooltipTitleElement = el) }, h("span", { class: "gux-tab-button-text" }, h("slot", null)))));
    }
    render() {
        return [
            h("div", { key: 'dd06632dccdf89459ede7c2e65498aa6df402f99', class: {
                    'gux-tab': true,
                    'gux-selected': this.active,
                    'gux-dropdown-options': this.hasDropdownOptions,
                    'gux-disabled': this.guxDisabled
                } }, h("div", { key: 'bbe55ffeb18b9dbb610679e4c5941e8f2f6a2cfb', class: "gux-buttons" }, this.renderTabButton(), this.renderTabOptions()), h("div", { key: '812986bbbc9ce2e092f39f22f73cff3541926212', class: "gux-divider" }))
        ];
    }
    static get is() { return "gux-tab-advanced"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-tab-advanced.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-tab-advanced.css"]
        };
    }
    static get properties() {
        return {
            "tabId": {
                "type": "string",
                "attribute": "tab-id",
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
                    "text": "unique id for the tab"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "guxDisabled": {
                "type": "boolean",
                "attribute": "gux-disabled",
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
            "active": {},
            "popoverHidden": {}
        };
    }
    static get events() {
        return [{
                "method": "internalactivatetabpanel",
                "name": "internalactivatetabpanel",
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
    static get methods() {
        return {
            "guxSetActive": {
                "complexType": {
                    "signature": "(active: boolean) => Promise<void>",
                    "parameters": [{
                            "name": "active",
                            "type": "boolean",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "guxGetActive": {
                "complexType": {
                    "signature": "() => Promise<boolean>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<boolean>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
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
                    "text": "",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "root"; }
    static get listeners() {
        return [{
                "name": "focusin",
                "method": "onFocusin",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "focusout",
                "method": "onFocusout",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
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
            }, {
                "name": "click",
                "method": "onClick",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "mousedown",
                "method": "onMouseDown",
                "target": undefined,
                "capture": false,
                "passive": true
            }];
    }
}
