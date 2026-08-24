import { h } from "@stencil/core";
import { buildI18nForComponent } from "../../../../i18n";
import { randomHTMLId } from "../../../../utils/dom/random-html-";
import tableResources from "../i18n/en.json";
export class GuxAllRowSelect {
    constructor() {
        this.id = randomHTMLId('gux-all-row-select');
        this.selected = false;
    }
    onCheck(event) {
        event.stopPropagation();
        this.selected = this.inputElement.checked;
        this.internalallrowselectchange.emit(this.selected);
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async setIndeterminate(indeterminate = true) {
        this.inputElement.indeterminate = indeterminate;
    }
    async componentWillLoad() {
        this.i18n = await buildI18nForComponent(this.root, tableResources, 'gux-table');
    }
    render() {
        return (h("gux-form-field-checkbox", { key: '561b559830dcaa4f8dcf5b250eda5a87e58b0cdd', "label-position": "screenreader" }, h("input", { key: '01a39509715d4156f0bd074bf35ffd6abaa3895e', ref: el => (this.inputElement = el), slot: "input", id: this.id, type: "checkbox", checked: this.selected, disabled: this.disabled }), h("label", { key: '596c0d1a55275d760e91209797483239c616545b', slot: "label", htmlFor: this.id }, "\u200B", h("span", { key: '9a153c08f9a997d23735beb2a2bd885b7760f623' }, this.i18n('selectAllTableRows')))));
    }
    static get is() { return "gux-all-row-select"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-all-row-select.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-all-row-select.css"]
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
                "method": "internalallrowselectchange",
                "name": "internalallrowselectchange",
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
    static get methods() {
        return {
            "setIndeterminate": {
                "complexType": {
                    "signature": "(indeterminate?: boolean) => Promise<void>",
                    "parameters": [{
                            "name": "indeterminate",
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
            }
        };
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
