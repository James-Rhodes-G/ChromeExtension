import { h, Host } from "@stencil/core";
import { getClosestElement } from "../../../../../../utils/dom/get-closest-element";
export class GuxMonthListItem {
    constructor() {
        this.disabled = false;
        this.selected = false;
    }
    onMouseup() {
        this.focusParentList();
    }
    onMouseover() {
        this.focusParentList();
    }
    focusParentList() {
        const parentList = getClosestElement('gux-month-list', this.root);
        if (parentList &&
            parentList.shadowRoot.activeElement === null &&
            !this.selected) {
            this.root.blur();
            parentList.focus();
        }
    }
    render() {
        return (h(Host, { key: '4efcd330bf11de04d4a3d98a53cbe7a1af5add36', role: "listitem", value: this.value }, h("div", { key: '73e87e967f4093114cc6457b1a2226b7eed49c42', class: "gux-container" }, h("button", { key: '56f774cb1d98c724bafb4d01ce095536d8f550d3', class: { 'gux-selected': this.selected }, type: "button", tabIndex: -1, disabled: this.disabled }, h("slot", { key: 'c6c605d5f0b08f3cf3ff25cfc116d05c86b781e6' })))));
    }
    static get is() { return "gux-month-list-item"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-month-list-item.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-month-list-item.css"]
        };
    }
    static get properties() {
        return {
            "value": {
                "type": "string",
                "attribute": "value",
                "mutable": false,
                "complexType": {
                    "original": "GuxISOYearMonth",
                    "resolved": "`${string}-${string}`",
                    "references": {
                        "GuxISOYearMonth": {
                            "location": "import",
                            "path": "../../../../../../utils/date/year-month-values",
                            "id": "src/utils/date/year-month-values.ts::GuxISOYearMonth"
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
            },
            "selected": {
                "type": "boolean",
                "attribute": "selected",
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
    static get elementRef() { return "root"; }
    static get listeners() {
        return [{
                "name": "mouseup",
                "method": "onMouseup",
                "target": undefined,
                "capture": false,
                "passive": true
            }, {
                "name": "mouseover",
                "method": "onMouseover",
                "target": undefined,
                "capture": false,
                "passive": true
            }];
    }
}
