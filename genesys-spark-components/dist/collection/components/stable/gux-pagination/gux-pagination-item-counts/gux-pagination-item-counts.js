import { h } from "@stencil/core";
import { buildI18nForComponent } from "../../../../i18n";
import paginationResources from "./i18n/en.json";
export class GuxPaginationItemCounts {
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
    getPaginationItemCountsRange() {
        if (this.totalItems) {
            return (h("span", null, this.i18n('totalItems', { totalItems: this.totalItems })));
        }
    }
    render() {
        return (h("div", { key: '93d9be77bfd0298fe1fcff5c283aee2b68968d61', class: "gux-pagination-item-counts-container" }, h("span", { key: '2b57a6eabd3be23e3e76b4bd6fb8f6ab6fe0b81b', class: "gux-pagination-item-counts-range" }, this.i18n('itemCountDisplay', {
            firstItem: this.firstItem,
            lastItem: this.lastItem
        })), h("span", { key: '80b886d6e84a37792490231cbb87a4936c4c9929', class: "gux-pagination-item-counts-total" }, this.getPaginationItemCountsRange())));
    }
    static get is() { return "gux-pagination-item-counts"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-pagination-item-counts.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-pagination-item-counts.css"]
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
