import { h } from "@stencil/core";
import { buildI18nForComponent } from "../../../../i18n";
import { randomHTMLId } from "../../../../utils/dom/random-html-";
import tableResources from "../i18n/en.json";
export class GuxRowSelect {
    constructor() {
        this.id = randomHTMLId('gux-row-select');
        this.selected = false;
    }
    onCheck(event) {
        event.stopPropagation();
        this.selected = this.inputElement.checked;
        this.internalrowselectchange.emit(this.inputElement.checked);
    }
    async componentWillLoad() {
        this.i18n = await buildI18nForComponent(this.root, tableResources, 'gux-table');
    }
    render() {
        return (h("gux-form-field-checkbox", { key: 'df3c9005eaa984a62ccfccf33cc34be2b142b9a1', "label-position": "screenreader" }, h("input", { key: 'e6430089bdfc4c714e6b6a05c2ef65f6a8158c5b', ref: el => (this.inputElement = el), class: this.selected
                ? 'gux-safari-bug-workaround-1'
                : 'gux-safari-bug-workaround-2', slot: "input", id: this.id, type: "checkbox", checked: this.selected, disabled: this.disabled }), h("label", { key: '7ad81838390999f6497d45055e6b950424ef6f05', slot: "label", htmlFor: this.id }, "\u200B", h("span", { key: 'f1d988bf59c03e4dd128ec99adbb0a72411b7dc4' }, this.i18n('selectTableRow')))));
    }
    static get is() { return "gux-row-select"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-row-select.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-row-select.css"]
        };
    }
    static get properties() {
        return {
            "selected": {
                "type": "boolean",
                "attribute": "selected",
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
                "reflect": false
            }
        };
    }
    static get events() {
        return [{
                "method": "internalrowselectchange",
                "name": "internalrowselectchange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "root"; }
    static get listeners() {
        return [{
                "name": "input",
                "method": "onCheck",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
