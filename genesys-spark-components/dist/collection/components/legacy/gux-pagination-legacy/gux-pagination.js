import { h } from "@stencil/core";
import { trackComponent } from "../../../utils/tracking/usage";
export class GuxPaginationLegacy {
    constructor() {
        /**
         * The currently select page. Changes are watched by the component.
         */
        this.currentPage = 1;
        /**
         * The total number of items in the data set. Used to calculate total page count
         */
        this.totalItems = 0;
        /**
         * The max number of items on a page. Used to calculate total page count
         */
        this.itemsPerPage = 25;
        /**
         * The pagination component can have different layouts to suit the available space
         */
        this.layout = 'full';
    }
    setPage(page) {
        if (page <= 0) {
            this.setPage(1);
            return;
        }
        const totalPages = this.calculateTotalPages();
        if (page > totalPages) {
            this.setPage(totalPages);
            return;
        }
        this.currentPage = page;
        this.guxpaginationchange.emit({
            currentPage: this.currentPage,
            itemsPerPage: this.itemsPerPage
        });
    }
    calculateTotalPages() {
        return Math.max(1, Math.ceil(this.totalItems / this.itemsPerPage));
    }
    calculateCurrentPage() {
        const minCurrentPage = this.totalPages > 0 ? 1 : 0;
        return Math.max(minCurrentPage, Math.min(this.currentPage, this.totalPages));
    }
    handleInternalitemsperpagechange(event) {
        this.itemsPerPage = event.detail;
        this.setPage(1);
    }
    handleInternalcurrentpagechange(event) {
        this.setPage(event.detail);
    }
    getPaginationInfoElement(layout) {
        if (layout === 'expanded') {
            return null;
        }
        const content = [
            h("gux-pagination-item-counts-legacy", { "total-items": this.totalItems, "current-page": this.currentPage, "items-per-page": this.itemsPerPage })
        ];
        if (layout === 'full') {
            content.push(h("gux-pagination-items-per-page-legacy", { "items-per-page": this.itemsPerPage, onInternalitemsperpagechange: this.handleInternalitemsperpagechange.bind(this) }));
        }
        return (h("div", { class: "gux-pagination-info" }, content));
    }
    componentWillLoad() {
        trackComponent(this.root, { variant: this.layout });
    }
    componentWillRender() {
        this.totalPages = this.calculateTotalPages();
        this.currentPage = this.calculateCurrentPage();
    }
    render() {
        return (h("div", { key: 'b107dfd919c1e04795f6239de7b2c7f56ba61a83', class: "gux-pagination-container" }, this.getPaginationInfoElement(this.layout), h("div", { key: 'cdd5c4b9d60e291e732fa8d9058f0c0f3bdeb52d', class: "gux-pagination-change" }, h("gux-pagination-buttons-legacy", { key: '6be7e5ce93f5b9ea10e54eb520df2667e2a8ffe8', layout: this.layout, "current-page": this.currentPage, "total-pages": this.totalPages, onInternalcurrentpagechange: this.handleInternalcurrentpagechange.bind(this) }))));
    }
    static get is() { return "gux-pagination-legacy"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-pagination-legacy.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-pagination-legacy.css"]
        };
    }
    static get properties() {
        return {
            "currentPage": {
                "type": "number",
                "attribute": "current-page",
                "mutable": true,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The currently select page. Changes are watched by the component."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "1"
            },
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
                    "text": "The total number of items in the data set. Used to calculate total page count"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "0"
            },
            "itemsPerPage": {
                "type": "number",
                "attribute": "items-per-page",
                "mutable": true,
                "complexType": {
                    "original": "GuxItemsPerPage",
                    "resolved": "100 | 25 | 50 | 75",
                    "references": {
                        "GuxItemsPerPage": {
                            "location": "import",
                            "path": "./gux-pagination.types",
                            "id": "src/components/legacy/gux-pagination-legacy/gux-pagination.types.ts::GuxItemsPerPage"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The max number of items on a page. Used to calculate total page count"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "25"
            },
            "layout": {
                "type": "string",
                "attribute": "layout",
                "mutable": false,
                "complexType": {
                    "original": "GuxPaginationLayout",
                    "resolved": "\"expanded\" | \"full\" | \"small\"",
                    "references": {
                        "GuxPaginationLayout": {
                            "location": "import",
                            "path": "./gux-pagination.types",
                            "id": "src/components/legacy/gux-pagination-legacy/gux-pagination.types.ts::GuxPaginationLayout"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The pagination component can have different layouts to suit the available space"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'full'"
            }
        };
    }
    static get states() {
        return {
            "totalPages": {}
        };
    }
    static get events() {
        return [{
                "method": "guxpaginationchange",
                "name": "guxpaginationchange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "GuxPaginationState",
                    "resolved": "{ currentPage: number; itemsPerPage: number; }",
                    "references": {
                        "GuxPaginationState": {
                            "location": "import",
                            "path": "./gux-pagination.types",
                            "id": "src/components/legacy/gux-pagination-legacy/gux-pagination.types.ts::GuxPaginationState"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "root"; }
}
