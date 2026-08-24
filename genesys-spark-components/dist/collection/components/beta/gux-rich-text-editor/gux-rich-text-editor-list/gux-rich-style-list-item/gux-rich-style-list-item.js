import { h, Host } from "@stencil/core";
import { trackComponent } from "../../../../../utils/tracking/usage";
import { getClosestElement } from "../../../../../utils/dom/get-closest-element";
/**
 * @slot - text
 */
export class GuxRichStyleListItem {
    constructor() {
        this.disabled = false;
    }
    onMouseUp() {
        this.focusParentList();
    }
    onMouseOver() {
        this.focusParentList();
    }
    focusParentList() {
        const parentList = getClosestElement('gux-rich-text-editor-list', this.root);
        if (parentList && parentList.shadowRoot.activeElement === null) {
            this.root.blur();
            parentList.focus({
                preventScroll: true
            });
        }
    }
    componentWillLoad() {
        trackComponent(this.root);
    }
    render() {
        return (h(Host, { key: '41a3af25f4d4ca67bb03e36953d04622413b5cde', role: "listitem" }, h("button", { key: 'f3657ff8470ab0bc24bb72fcd21116a736612894', type: "button", tabIndex: -1, disabled: this.disabled }, h("gux-truncate", { key: '4b9627629b04d68cce683829149eaef973da78ae', "max-lines": 1 }, h("slot", { key: 'cd0b368cef0a503eddcb738b9386800fcf1e4686' })))));
    }
    static get is() { return "gux-rich-style-list-item"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-rich-style-list-item.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-rich-style-list-item.css"]
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "value": {
                "type": "string",
                "attribute": "value",
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
                "reflect": true
            }
        };
    }
    static get elementRef() { return "root"; }
    static get listeners() {
        return [{
                "name": "mouseup",
                "method": "onMouseUp",
                "target": undefined,
                "capture": false,
                "passive": true
            }, {
                "name": "mouseover",
                "method": "onMouseOver",
                "target": undefined,
                "capture": false,
                "passive": true
            }];
    }
}
