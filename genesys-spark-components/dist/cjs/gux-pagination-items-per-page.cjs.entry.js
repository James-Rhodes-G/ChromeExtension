'use strict';

var index = require('./index-BLhHoh_r.js');
var index$1 = require('./index-QInGO-Pu.js');
require('./get-closest-element-CfyZl7i7.js');

const perPage = "per page";
const itemsPerPage = "Items per page";
const rangeSelected = "Items per page dropdown, {range} items per page selected";
var paginationResources = {
	perPage: perPage,
	itemsPerPage: itemsPerPage,
	rangeSelected: rangeSelected
};

const guxPaginationItemsPerPageCss = "gux-pagination-items-per-page .gux-pagination-items-per-page-container{display:flex;flex-direction:row;flex-wrap:nowrap;gap:var(--gse-ui-dataTableItems-tablePagination-recordsetControls-gap);place-content:stretch center;align-items:center}gux-pagination-items-per-page .gux-pagination-items-per-page-container>div{flex:0 1 auto;align-self:auto;order:0;white-space:nowrap}gux-pagination-items-per-page .gux-pagination-items-per-page-container .gux-pagination-items-per-page-picker gux-dropdown{display:inline-block;inline-size:fit-content}gux-pagination-items-per-page .gux-pagination-items-per-page-container gux-dropdown div.gux-dropdown .gux-options.gux-opened{inset-block-end:100%;display:flex;flex-direction:column-reverse}gux-pagination-items-per-page .gux-pagination-items-per-page-container .gux-pagination-per-page{font-family:var(--gse-ui-dataTableItems-tablePagination-defaultText-fontFamily);font-size:var(--gse-ui-dataTableItems-tablePagination-defaultText-fontSize);font-weight:var(--gse-ui-dataTableItems-tablePagination-defaultText-fontWeight);line-height:var(--gse-ui-dataTableItems-tablePagination-defaultText-lineHeight);color:var(--gse-ui-dataTableItems-tablePagination-foregroundColor)}";

const GuxPaginationItemsPerPage = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.internalitemsperpagechange = index.createEvent(this, "internalitemsperpagechange", 3);
        this.itemsPerPage = 25;
        this.disabled = false;
    }
    handleChange(event) {
        event.stopPropagation();
        const newItemsPerPageValue = parseInt(this.dropdownElement.value, 10);
        this.internalitemsperpagechange.emit(newItemsPerPageValue);
    }
    async componentWillLoad() {
        this.i18n = await index$1.buildI18nForComponent(this.root, paginationResources);
    }
    getDropdown() {
        return (index.h("gux-dropdown", { ref: el => (this.dropdownElement = el), value: `${this.itemsPerPage}`, disabled: this.disabled, "aria-label": this.i18n('rangeSelected', {
                range: this.itemsPerPage
            }) }, index.h("gux-listbox", { "aria-label": this.i18n('itemsPerPage') }, index.h("gux-option", { value: "25" }, "25"), index.h("gux-option", { value: "50" }, "50"), index.h("gux-option", { value: "75" }, "75"), index.h("gux-option", { value: "100" }, "100"))));
    }
    render() {
        return (index.h("div", { key: '01d977b62514ab6b16ec88caf74918fff37558b0', class: "gux-pagination-items-per-page-container" }, index.h("div", { key: '7536dc6a93b49cf4cfedc665a980ba96a1eee168', class: "gux-pagination-items-per-page-picker" }, this.getDropdown()), index.h("div", { key: '1e5134d36a1312b59b48ce4eee1d36f437580100', class: "gux-pagination-per-page" }, this.i18n('perPage'))));
    }
    get root() { return index.getElement(this); }
};
GuxPaginationItemsPerPage.style = guxPaginationItemsPerPageCss;

exports.gux_pagination_items_per_page = GuxPaginationItemsPerPage;
