import { h } from "@stencil/core";
import { randomHTMLId } from "../../../utils/dom/random-html-";
import { trackComponent } from "../../../utils/tracking/usage";
import { buildI18nForComponent } from "../../../i18n";
import translationResources from "./i18n/en.json";
/**
 * @slot panel-content - Slot for content of panel
 */
export class GuxDisclosureButtonLegacy {
    constructor() {
        this.panelId = randomHTMLId('gux-disclosure-button-panel');
        /**
         * Indicates the position of the button panel
         */
        this.position = 'left';
        /**
         * Used to open or close the disclosure panel
         */
        this.isOpen = false;
        /**
         * Indicated image used by button
         */
        this.icon = 'fa/caret-right-solid';
    }
    watchIsOpen() {
        this.updateIcon();
    }
    changeState() {
        this.togglePanel();
        this.active.emit(this.isOpen);
    }
    togglePanel() {
        this.isOpen = !this.isOpen;
    }
    updateIcon() {
        if (this.position === 'right') {
            this.icon = this.isOpen ? 'fa/caret-right-solid' : 'fa/caret-left-solid';
        }
        else {
            this.icon = this.isOpen ? 'fa/caret-left-solid' : 'fa/caret-right-solid';
        }
    }
    async componentWillLoad() {
        trackComponent(this.root, { variant: this.position });
        this.i18n = await buildI18nForComponent(this.root, translationResources);
        this.updateIcon();
    }
    render() {
        return (h("div", { key: 'c96d5f177492ff489747baca32b70f93adaf1bf5', class: `gux-disclosure-button-container gux-${this.position}` }, h("button", { key: 'f71f8d93c8146fa3367acdab0c4c116197abbba7', class: "gux-disclosure-button", onClick: () => this.changeState(), "aria-controls": this.panelId, "aria-expanded": this.isOpen.toString(), "aria-label": this.label || this.i18n('defaultLabel'), "data-testid": "disclosure-button" }, h("gux-icon", { key: '7bbf022e573cd8f16fde788be416c6b93b76f203', "icon-name": `${this.icon}`, decorative: true })), h("div", { key: '53f88d45530817e81c91f130f083307e4b166bbe', id: this.panelId, class: {
                'gux-disclosure-panel': true,
                'gux-active': this.isOpen
            }, role: "region" }, h("slot", { key: '3e234ddc4164e3da3aaf9d430d57f016d031068d', name: "panel-content" }))));
    }
    static get is() { return "gux-disclosure-button-legacy"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-disclosure-button.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-disclosure-button.css"]
        };
    }
    static get properties() {
        return {
            "position": {
                "type": "string",
                "attribute": "position",
                "mutable": false,
                "complexType": {
                    "original": "GuxDisclosureButtonPosition",
                    "resolved": "\"left\" | \"right\"",
                    "references": {
                        "GuxDisclosureButtonPosition": {
                            "location": "import",
                            "path": "./gux-disclosure-button.types",
                            "id": "src/components/legacy/gux-disclosure-button-legacy/gux-disclosure-button.types.ts::GuxDisclosureButtonPosition"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Indicates the position of the button panel"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'left'"
            },
            "label": {
                "type": "string",
                "attribute": "label",
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
                    "text": "Indicates the label for the disclosure button"
                },
                "getter": false,
                "setter": false,
                "reflect": false
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
                    "text": "Used to open or close the disclosure panel"
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
            "icon": {}
        };
    }
    static get events() {
        return [{
                "method": "active",
                "name": "active",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [{
                            "name": "return",
                            "text": "the panel state"
                        }],
                    "text": "Return the state of the components panel on state change"
                },
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "root"; }
    static get watchers() {
        return [{
                "propName": "isOpen",
                "methodName": "watchIsOpen"
            }];
    }
}
