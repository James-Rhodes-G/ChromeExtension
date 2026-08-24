import { h } from "@stencil/core";
import { buildI18nForComponent } from "../../../../i18n";
import paginationResources from "./i18n/en.json";
import { GuxPaginationButtonsService } from "./gux-pagination-button.service";
import { afterNextRender } from "../../../../utils/dom/after-next-render";
export class GuxPaginationButtons {
    constructor() {
        this.layout = 'advanced';
        this.disabled = false;
    }
    goToPageHandler(event) {
        this.currentPage = event.detail;
        this.handlePageChange(this.currentPage);
        afterNextRender(() => {
            this.currentElement.focus();
        });
    }
    get onFirstPage() {
        return this.currentPage <= 1;
    }
    get onLastPage() {
        return this.currentPage >= this.totalPages;
    }
    handleClickFirst() {
        this.internalcurrentpagechange.emit(1);
    }
    handleClickPrevious() {
        this.internalcurrentpagechange.emit(this.currentPage - 1);
    }
    handleClickNext() {
        this.internalcurrentpagechange.emit(this.currentPage + 1);
    }
    handleClickLast() {
        this.internalcurrentpagechange.emit(this.totalPages);
    }
    handlePageChange(pageNumber) {
        this.internalcurrentpagechange.emit(pageNumber);
    }
    getPageListEnteries(currentPage, totalPages, layout) {
        return GuxPaginationButtonsService.displayAllPageButtons(currentPage, totalPages, layout).reduce((acc, cv) => {
            if (cv.current) {
                return acc.concat((h("gux-button-slot", { accent: "ghost" }, h("button", { disabled: this.disabled, ref: el => (this.currentElement = el), class: "gux-pagination-buttons-list-current", "aria-label": this.i18n('pageSelected', {
                        pageSelected: cv.pageNumber
                    }) }, cv.display))));
            }
            if (cv.display == '...') {
                return acc.concat((h("gux-pagination-ellipsis-button", { disabled: this.disabled, totalPages: this.totalPages })));
            }
            return acc.concat((h("gux-button-slot", { accent: "ghost" }, h("button", { disabled: this.disabled, onClick: () => this.handlePageChange(cv.pageNumber), "aria-label": this.i18n('pageNumber', {
                    pageNumber: cv.pageNumber
                }) }, cv.display))));
        }, []);
    }
    getPageNavigation() {
        return (h("div", { class: "gux-pagination-buttons-list-container" }, this.getPageListEnteries(this.currentPage, this.totalPages, this.layout)));
    }
    async componentWillLoad() {
        this.i18n = await buildI18nForComponent(this.root, paginationResources);
    }
    render() {
        return (h("div", { key: '99d79cba0e16a1b74e914e4d0f0c02c3b4a73d0e', class: `gux-pagination-buttons-container gux-${this.layout}` }, h("div", { key: 'efe76116dd1478094927617059457f681d0bd6c7', class: "gux-pagination-buttons-group" }, h("gux-button-slot", { key: 'dceec181beb25f217be3d8a0a720a9370c342510', accent: "ghost", "icon-only": true }, h("button", { key: '5f0466be061263ff91d0866f23eb21e5a708cbc8', title: this.i18n('firstPage'), disabled: this.onFirstPage || this.disabled, onClick: this.handleClickFirst.bind(this) }, h("gux-icon", { key: 'd538e9965f9d1066722ae31f536ee10b60b868e9', size: "small", decorative: true, "icon-name": "fa/chevrons-left-regular" }))), h("gux-button-slot", { key: 'f53bb6a0577856540f9c09482a7600a2ee28a46f', accent: "ghost", "icon-only": true }, h("button", { key: '53ae1dc112b8c4084cd73d54ff3efe2ea97df3d6', title: this.i18n('previousPage'), disabled: this.onFirstPage || this.disabled, onClick: this.handleClickPrevious.bind(this) }, h("gux-icon", { key: 'b57b1ca6a1a8789fbc928aa1bd57bc2cb1aa029b', size: "small", decorative: true, "icon-name": "custom/chevron-left-small-regular" })))), this.getPageNavigation(), h("div", { key: 'da0251b955fec752c91a3f70f5deed1147aa9628', class: "gux-pagination-buttons-group" }, h("gux-button-slot", { key: '311c7e2c1912981031123ebb5ef3b252e09c8024', accent: "ghost", "icon-only": true }, h("button", { key: 'c1b788b8e3598ff03eaeff1d1387d675c55e3692', title: this.i18n('nextPage'), disabled: this.onLastPage || this.disabled, onClick: this.handleClickNext.bind(this) }, h("gux-icon", { key: 'e124103cf66f28053f0ea8e98a69a15fee145ca4', size: "small", decorative: true, "icon-name": "custom/chevron-right-small-regular" }))), h("gux-button-slot", { key: '1fc691395a2e8c512c565f8809fb1c3c282a2e2b', accent: "ghost", "icon-only": true }, h("button", { key: '776866e1d667ee62ea65177c479227fa5f33d79c', title: this.i18n('lastPage'), disabled: this.onLastPage || this.disabled, onClick: this.handleClickLast.bind(this) }, h("gux-icon", { key: '1a937000dcf86f0fb5323fae3053e210c7f58086', size: "small", decorative: true, "icon-name": "fa/chevrons-right-regular" }))))));
    }
    static get is() { return "gux-pagination-buttons"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-pagination-buttons.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-pagination-buttons.css"]
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "totalPages": {
                "type": "number",
                "attribute": "total-pages",
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
                "reflect": false
            },
            "layout": {
                "type": "string",
                "attribute": "layout",
                "mutable": false,
                "complexType": {
                    "original": "GuxPaginationLayout",
                    "resolved": "\"advanced\" | \"simple\"",
                    "references": {
                        "GuxPaginationLayout": {
                            "location": "import",
                            "path": "../gux-pagination.types",
                            "id": "src/components/stable/gux-pagination/gux-pagination.types.ts::GuxPaginationLayout"
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
                "defaultValue": "'advanced'"
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
                "method": "internalcurrentpagechange",
                "name": "internalcurrentpagechange",
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
                "name": "goToPage",
                "method": "goToPageHandler",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
