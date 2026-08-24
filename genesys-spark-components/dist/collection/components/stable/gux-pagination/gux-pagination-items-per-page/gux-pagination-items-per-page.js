import { h } from "@stencil/core";
import { buildI18nForComponent } from "../../../../i18n";
import paginationResources from "./i18n/en.json";
export class GuxPaginationItemsPerPage {
    constructor() {
        this.itemsPerPage = 25;
        this.disabled = false;
    }
    handleChange(event) {
        event.stopPropagation();
        const newItemsPerPageValue = parseInt(this.dropdownElement.value, 10);
        this.internalitemsperpagechange.emit(newItemsPerPageValue);
    }
    async componentWillLoad() {
        this.i18n = await buildI18nForComponent(this.root, paginationResources);
    }
    getDropdown() {
        return (h("gux-dropdown", { ref: el => (this.dropdownElement = el), value: `${this.itemsPerPage}`, disabled: this.disabled, "aria-label": this.i18n('rangeSelected', {
                range: this.itemsPerPage
            }) }, h("gux-listbox", { "aria-label": this.i18n('itemsPerPage') }, h("gux-option", { value: "25" }, "25"), h("gux-option", { value: "50" }, "50"), h("gux-option", { value: "75" }, "75"), h("gux-option", { value: "100" }, "100"))));
    }
    render() {
        return (h("div", { key: '01d977b62514ab6b16ec88caf74918fff37558b0', class: "gux-pagination-items-per-page-container" }, h("div", { key: '7536dc6a93b49cf4cfedc665a980ba96a1eee168', class: "gux-pagination-items-per-page-picker" }, this.getDropdown()), h("div", { key: '1e5134d36a1312b59b48ce4eee1d36f437580100', class: "gux-pagination-per-page" }, this.i18n('perPage'))));
    }
    static get is() { return "gux-pagination-items-per-page"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-pagination-items-per-page.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-pagination-items-per-page.css"]
        };
    }
    static get properties() {
        return {
            "itemsPerPage": {
                "type": "number",
                "attribute": "items-per-page",
                "mutable": false,
                "complexType": {
                    "original": "GuxItemsPerPage",
                    "resolved": "100 | 25 | 50 | 75",
                    "references": {
                        "GuxItemsPerPage": {
                            "location": "import",
                            "path": "../gux-pagination.types",
                            "id": "src/components/stable/gux-pagination/gux-pagination.types.ts::GuxItemsPerPage"
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
                "defaultValue": "25"
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
            }
        };
    }
    static get events() {
        return [{
                "method": "internalitemsperpagechange",
                "name": "internalitemsperpagechange",
                "bubbles": false,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "root"; }
    static get listeners() {
        return [{
                "name": "change",
                "method": "handleChange",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
