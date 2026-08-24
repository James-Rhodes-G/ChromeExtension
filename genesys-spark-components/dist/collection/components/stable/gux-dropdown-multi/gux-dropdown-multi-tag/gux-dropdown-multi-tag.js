import { h } from "@stencil/core";
import { buildI18nForComponent } from "../../../../i18n";
import translationResources from "./i18n/en.json";
export class GuxDropdownMultiTag {
    constructor() {
        /**
         * Tag is disabled.
         */
        this.disabled = false;
        this.numberSelected = 0;
        this.label = '';
    }
    onKeyDown(event) {
        switch (event.key) {
            case 'Backspace':
            case 'Delete':
                this.removeTag(event);
        }
    }
    removeTag(event) {
        event.stopPropagation();
        if (this.disabled) {
            return;
        }
        this.internalclearselected.emit();
    }
    renderRemoveButton() {
        return (h("button", { class: "gux-tag-remove-button", onClick: this.removeTag.bind(this), type: "button", disabled: this.disabled }, h("gux-icon", { class: "gux-tag-remove-icon", size: "small", "icon-name": "fa/xmark-large-regular", "screenreader-text": this.i18n('clearSelection', {
                numberSelected: this.numberSelected.toString()
            }) })));
    }
    async componentWillRender() {
        this.i18n = await buildI18nForComponent(this.root, translationResources);
    }
    render() {
        return (h("div", { key: '736f46e03112b67563ab34cff27d60a81b74d06f', class: {
                'gux-tag': true,
                'gux-disabled': this.disabled
            }, "aria-disabled": this.disabled.toString() }, this.numberSelected.toString(), this.renderRemoveButton()));
    }
    static get is() { return "gux-dropdown-multi-tag"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-dropdown-multi-tag.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-dropdown-multi-tag.css"]
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
                    "text": "Tag is disabled."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "numberSelected": {
                "type": "number",
                "attribute": "number-selected",
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
                "reflect": false,
                "defaultValue": "0"
            }
        };
    }
    static get states() {
        return {
            "label": {}
        };
    }
    static get events() {
        return [{
                "method": "internalclearselected",
                "name": "internalclearselected",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Triggered when click on remove button"
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "root"; }
    static get listeners() {
        return [{
                "name": "keydown",
                "method": "onKeyDown",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
