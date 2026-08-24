import { h } from "@stencil/core";
import { buildI18nForComponent } from "../../../../i18n";
import paginationResources from "./i18n/en.json";
export class GuxPaginationItemCountsLegacy {
    constructor() {
        this.totalItems = 0;
        this.currentPage = 0;
        this.itemsPerPage = 25;
    }
    get firstItem() {
        if (this.totalItems < 1) {
            return 0;
        }
        return (this.currentPage - 1) * this.itemsPerPage + 1;
    }
    get lastItem() {
        if (this.totalItems < 1) {
            return 0;
        }
        return Math.min(this.currentPage * this.itemsPerPage, this.totalItems);
    }
    async componentWillLoad() {
        this.i18n = await buildI18nForComponent(this.root, paginationResources);
    }
    render() {
        return (h("div", { key: 'c1eb5d511624530037247147d21131e6d4179467', class: "gux-pagination-item-counts-container" }, h("span", { key: '95e6e2896e3b8df06478156c4bc471a6a4e963cf', class: "gux-pagination-item-counts-range" }, this.i18n('itemCountDisplay', {
            firstItem: this.firstItem,
            lastItem: this.lastItem
        })), h("span", { key: 'e932b57232dddb43cff4c187b05af0fedf4ef31a' }, this.i18n('totalItems', { totalItems: this.totalItems }))));
    }
    static get is() { return "gux-pagination-item-counts-legacy"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-pagination-item-counts-legacy.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-pagination-item-counts-legacy.css"]
        };
    }
    static get properties() {
        return {
            "totalItems": {
                "type": "number",
                "attribute": "total-items",
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
            },
            "currentPage": {
                "type": "number",
                "attribute": "current-page",
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
            },
            "itemsPerPage": {
                "type": "number",
                "attribute": "items-per-page",
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
                "defaultValue": "25"
            }
        };
    }
    static get elementRef() { return "root"; }
}
