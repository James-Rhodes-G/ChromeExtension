import { r as registerInstance, c as createEvent, h, a as getElement } from './index-xFL2agjT.js';
import { b as buildI18nForComponent } from './index-Dac2qHbK.js';
import './get-closest-element-Cd4R0amv.js';

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
        registerInstance(this, hostRef);
        this.internalitemsperpagechange = createEvent(this, "internalitemsperpagechange", 3);
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
    get root() { return getElement(this); }
};
GuxPaginationItemsPerPage.style = guxPaginationItemsPerPageCss;

export { GuxPaginationItemsPerPage as gux_pagination_items_per_page };
