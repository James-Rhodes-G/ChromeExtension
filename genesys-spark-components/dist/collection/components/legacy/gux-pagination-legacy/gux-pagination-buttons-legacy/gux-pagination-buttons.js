import { h } from "@stencil/core";
import { buildI18nForComponent } from "../../../../i18n";
import paginationResources from "./i18n/en.json";
import { GuxPaginationButtonsService } from "./gux-pagination-button.service";
export class GuxPaginationButtonsLegacy {
    constructor() {
        this.layout = 'full';
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
    handleClickPage(pageNumber) {
        this.internalcurrentpagechange.emit(pageNumber);
    }
    setPageFromInput(value) {
        const page = parseInt(value, 10);
        if (!page || isNaN(page)) {
            this.textFieldRef.value = String(this.currentPage);
        }
        else {
            this.internalcurrentpagechange.emit(page);
        }
    }
    getPageListEnteries(currentPage, totalPages) {
        return GuxPaginationButtonsService.getPageList(currentPage, totalPages).reduce((acc, cv) => {
            if (cv.current) {
                return acc.concat((h("button", { class: "gux-pagination-buttons-list-button gux-current" }, cv.display)));
            }
            return acc.concat((h("button", { class: "gux-pagination-buttons-list-button gux-target", onClick: () => this.handleClickPage(cv.pageNumber) }, cv.display)));
        }, []);
    }
    getSmallPagePicker() {
        return (h("div", { class: 'gux-pagination-buttons-spacer' }));
    }
    getExpandedPagePicker() {
        return (h("div", { class: "gux-pagination-buttons-list-container" }, this.getPageListEnteries(this.currentPage, this.totalPages)));
    }
    getFullPagePicker() {
        return (h("div", { class: "gux-pagination-buttons-input-container" }, h("div", null, this.i18n('page')), h("div", { class: "gux-pagination-buttons-input" }, h("gux-form-field-text-like", { "label-position": "screenreader" }, h("label", { slot: "label" }, this.i18n('pageInputLabel', {
            currentPage: this.currentPage,
            totalPages: this.totalPages
        })), h("input", { type: "text", slot: "input", value: String(this.currentPage), ref: ref => (this.textFieldRef = ref), onChange: () => this.setPageFromInput(this.textFieldRef.value) }))), h("div", null, this.i18n('totalPages', { totalPages: this.totalPages }))));
    }
    getPagePicker(layout) {
        if (layout === 'small') {
            return this.getSmallPagePicker();
        }
        if (layout === 'expanded') {
            return this.getExpandedPagePicker();
        }
        return this.getFullPagePicker();
    }
    async componentWillLoad() {
        this.i18n = await buildI18nForComponent(this.root, paginationResources);
    }
    render() {
        return (h("div", { key: '0d4772429868e48f1f1f5496fd610261b05dce01', class: `gux-pagination-buttons-container gux-${this.layout}` }, h("div", { key: '980bbda1f84c6d6b5610cafdb8c3f176ff0a0298', class: "gux-pagination-buttons-group" }, h("gux-button-slot", { key: '3d6b26301edee8387d38a1fc38f5c7cc38afc4d5', accent: "ghost" }, h("button", { key: '4eee3435dcb62d77d1ec6997d164714f472e69fc', title: this.i18n('first'), disabled: this.onFirstPage, onClick: this.handleClickFirst.bind(this) }, h("gux-icon", { key: '0a5eb67869460a7ae52acaf03abccb495406447c', decorative: true, "icon-name": "fa/chevrons-left-regular" }))), h("gux-button-slot", { key: '8e5f0c069ec74111e4f72b8bf4255d557db1264e', accent: "ghost" }, h("button", { key: '2dc2323f66220aa6d075cd368b037ab4be497eb8', title: this.i18n('previous'), disabled: this.onFirstPage, onClick: this.handleClickPrevious.bind(this) }, h("gux-icon", { key: 'da5d20f1efbe2f4a6c69b98d1d65544d122915c3', decorative: true, "icon-name": "custom/chevron-left-small-regular" })))), this.getPagePicker(this.layout), h("div", { key: '17a601fb01be437563764834129f10854e2c6910', class: "gux-pagination-buttons-group" }, h("gux-button-slot", { key: '444a86967aa34b651bbfc83a144947b850c76beb', accent: "ghost" }, h("button", { key: 'c3d00613c5e8ec8c42a9e94f4da8957f8696954e', title: this.i18n('next'), disabled: this.onLastPage, onClick: this.handleClickNext.bind(this) }, h("gux-icon", { key: '736e70db0bfd031cb578a9818dbe92c3d823c14b', decorative: true, "icon-name": "custom/chevron-right-small-regular" }))), h("gux-button-slot", { key: '7471cb3d2f5616c60c5403c716679753f7a79cb3', accent: "ghost" }, h("button", { key: 'e1954b39e68a59ded7daab7a6a5d20c55615f0af', title: this.i18n('last'), disabled: this.onLastPage, onClick: this.handleClickLast.bind(this) }, h("gux-icon", { key: '5662ea67d264c5879f21c4810e70958a81bbb1e2', decorative: true, "icon-name": "fa/chevrons-right-regular" }))))));
    }
    static get is() { return "gux-pagination-buttons-legacy"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-pagination-buttons-legacy.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-pagination-buttons-legacy.css"]
        };
    }
    static get properties() {
        return {
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
                    "resolved": "\"expanded\" | \"full\" | \"small\"",
                    "references": {
                        "GuxPaginationLayout": {
                            "location": "import",
                            "path": "../gux-pagination.types",
                            "id": "src/components/legacy/gux-pagination-legacy/gux-pagination.types.ts::GuxPaginationLayout"
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
                "defaultValue": "'full'"
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
}
