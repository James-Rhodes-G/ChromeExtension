import { h } from "@stencil/core";
import { buildI18nForComponent } from "../../../../i18n";
import paginationResources from "./i18n/en.json";
export class GuxPaginationItemsPerPageLegacy {
    constructor() {
        this.itemsPerPage = 25;
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
        return (h("gux-dropdown", { ref: el => (this.dropdownElement = el), value: `${this.itemsPerPage}`, "aria-label": this.i18n('rangeSelected', {
                range: this.itemsPerPage
            }) }, h("gux-listbox", { "aria-label": this.i18n('itemsPerPage') }, h("gux-option", { value: "25" }, "25"), h("gux-option", { value: "50" }, "50"), h("gux-option", { value: "75" }, "75"), h("gux-option", { value: "100" }, "100"))));
    }
    render() {
        return (h("div", { key: 'd6fde66a0dda82512ce40a51a0853b85d3f40166', class: "gux-pagination-items-per-page-container" }, h("div", { key: '7e8f0da433f68b8db632d5c0f09e36c5ea36836a', class: "gux-pagination-items-per-page-picker" }, this.getDropdown()), h("div", { key: 'b863d991f439ff7200b3b8712f5c9456abe74919', class: "gux-pagination-per-page" }, this.i18n('perPage'))));
    }
    static get is() { return "gux-pagination-items-per-page-legacy"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-pagination-items-per-page-legacy.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-pagination-items-per-page-legacy.css"]
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
                            "id": "src/components/legacy/gux-pagination-legacy/gux-pagination.types.ts::GuxItemsPerPage"
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
