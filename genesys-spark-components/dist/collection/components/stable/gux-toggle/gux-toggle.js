import { h, Host } from "@stencil/core";
import { trackComponent } from "../../../utils/tracking/usage";
import { randomHTMLId } from "../../../utils/dom/random-html-";
import { buildI18nForComponent } from "../../../i18n";
import translationResources from "./i18n/en.json";
export class GuxToggle {
    constructor() {
        this.labelId = randomHTMLId('gux-toggle-label');
        this.errorId = randomHTMLId('gux-toggle-error');
        this.checked = false;
        this.disabled = false;
        this.loading = false;
        this.labelPosition = 'right';
        this.displayInline = false;
    }
    handleLoading(loading) {
        if (loading) {
            void this.announceElement.guxAnnounce(this.i18n('toggleIsLoading'));
        }
        else {
            void this.announceElement.guxAnnounce(this.i18n('toggleIsFinishedLoading'));
        }
    }
    onKeydown(event) {
        switch (event.key) {
            case ' ':
                event.preventDefault();
                this.toggle();
        }
    }
    toggle() {
        if (!this.disabled && !this.loading) {
            const checkEvent = this.check.emit(!this.checked);
            if (!checkEvent.defaultPrevented) {
                this.checked = !this.checked;
            }
        }
    }
    getAriaLabel() {
        return (this.root.getAttribute('aria-label') ||
            this.label ||
            this.checkedLabel ||
            this.root.title ||
            this.i18n('defaultAriaLabel'));
    }
    async componentWillLoad() {
        this.i18n = await buildI18nForComponent(this.root, translationResources);
        const variant = this.checkedLabel || this.uncheckedLabel ? 'labled' : 'unlabled';
        trackComponent(this.root, { variant });
    }
    renderLoading() {
        if (this.loading) {
            return (h("div", { class: "gux-toggle-label-loading" }, h("gux-radial-loading", { context: "input" })));
        }
    }
    renderLabel() {
        if (this.label) {
            return (h("div", { class: "gux-toggle-label-and-error" }, h("div", { class: "gux-toggle-label" }, h("div", { class: "gux-toggle-label-text" }, h("span", { class: "gux-toggle-label-text-inner" }, h("span", { id: this.labelId }, this.label), this.renderLoading())))));
        }
        else if (this.uncheckedLabel && this.checkedLabel) {
            const labelText = this.checked ? this.checkedLabel : this.uncheckedLabel;
            return (h("div", { class: "gux-toggle-label-and-error" }, h("div", { class: "gux-toggle-label" }, h("div", { class: "gux-toggle-label-text" }, h("span", { class: "gux-toggle-label-text-inner" }, h("span", { id: this.labelId }, labelText), this.renderLoading()), h("span", { class: "gux-toggle-label-text-inner gux-hidden" }, this.checkedLabel), h("span", { class: "gux-toggle-label-text-inner gux-hidden" }, this.uncheckedLabel)))));
        }
    }
    renderError() {
        if (this.errorMessage) {
            return (h("div", { id: this.errorId, class: "gux-toggle-error" }, h("div", { class: "gux-toggle-error-container" }, h("gux-icon", { "icon-name": "fa/hexagon-exclamation-solid", decorative: true, size: "small" }), h("div", { class: "gux-toggle-error-message" }, this.errorMessage))));
        }
    }
    render() {
        return (h(Host, { key: 'b88824afb7ff7ba8de9cb5604c369cbee3021850', class: { 'gux-display-inline': this.displayInline } }, h("div", { key: '7991eaf3ea3729f498301284d4f634d7ed830b63', class: {
                'gux-toggle-container': true,
                'gux-toggle-label-left': this.labelPosition === 'left',
                'gux-disabled': this.disabled || this.loading
            } }, h("div", { key: '5ff56480ae831b37f30a815d21d8e07dbc484d5d', class: "gux-toggle-input", onClick: this.toggle.bind(this) }, h("gux-toggle-slider", { key: 'c9c514fba798e622a0bd94b8e970e97051083441', checked: this.checked, disabled: this.disabled || this.loading, guxAriaLabel: this.getAriaLabel(), labelId: this.checkedLabel && this.uncheckedLabel ? this.labelId : '', onKeyDown: this.onKeydown.bind(this), errorId: this.errorMessage ? this.errorId : '' }), this.renderLabel()), this.renderError()), h("gux-announce-beta", { key: '9537a2b1426ead4dbef7637f836e83f3f922fac6', ref: el => (this.announceElement = el) })));
    }
    static get is() { return "gux-toggle"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-toggle.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-toggle.css"]
        };
    }
    static get properties() {
        return {
            "checked": {
                "type": "boolean",
                "attribute": "checked",
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
                    "text": ""
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "loading": {
                "type": "boolean",
                "attribute": "loading",
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "checkedLabel": {
                "type": "string",
                "attribute": "checked-label",
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "uncheckedLabel": {
                "type": "string",
                "attribute": "unchecked-label",
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "labelPosition": {
                "type": "string",
                "attribute": "label-position",
                "mutable": false,
                "complexType": {
                    "original": "GuxToggleLabelPosition",
                    "resolved": "\"left\" | \"right\"",
                    "references": {
                        "GuxToggleLabelPosition": {
                            "location": "import",
                            "path": "./gux-toggle.types",
                            "id": "src/components/stable/gux-toggle/gux-toggle.types.ts::GuxToggleLabelPosition"
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
                "defaultValue": "'right'"
            },
            "errorMessage": {
                "type": "string",
                "attribute": "error-message",
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "displayInline": {
                "type": "boolean",
                "attribute": "display-inline",
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
    static get events() {
        return [{
                "method": "check",
                "name": "check",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
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
                "propName": "loading",
                "methodName": "handleLoading"
            }];
    }
}
