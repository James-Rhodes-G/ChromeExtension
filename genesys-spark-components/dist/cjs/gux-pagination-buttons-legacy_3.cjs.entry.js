'use strict';

var index = require('./index-BLhHoh_r.js');
var index$1 = require('./index-QInGO-Pu.js');
require('./get-closest-element-CfyZl7i7.js');

const page = "Page";
const totalPages = " of {totalPages, number}";
const first = "First";
const previous = "Previous";
const next = "Next";
const last = "Last";
const pageInputLabel = "Page {currentPage, number} of {totalPages, number}";
var paginationResources$2 = {
	page: page,
	totalPages: totalPages,
	first: first,
	previous: previous,
	next: next,
	last: last,
	pageInputLabel: pageInputLabel
};

class GuxPaginationButtonsService {
    static getPageList(currentPage, totalPages) {
        if (totalPages <= 10) {
            return [...Array(totalPages).keys()].map(index => {
                const pageNumber = index + 1;
                return {
                    pageNumber,
                    display: String(pageNumber),
                    current: pageNumber === currentPage
                };
            });
        }
        if (currentPage <= 5) {
            const startPageList = [...Array(6).keys()].map(index => {
                const pageNumber = index + 1;
                return {
                    pageNumber,
                    display: String(pageNumber),
                    current: pageNumber === currentPage
                };
            });
            return [
                ...startPageList,
                {
                    pageNumber: 7,
                    display: '...',
                    current: false
                },
                {
                    pageNumber: totalPages,
                    display: String(totalPages),
                    current: false
                }
            ];
        }
        if (currentPage > totalPages - 5) {
            const endPageList = [...Array(6).keys()].map(index => {
                const pageNumber = index + totalPages - 5;
                return {
                    pageNumber,
                    display: String(pageNumber),
                    current: pageNumber === currentPage
                };
            });
            return [
                {
                    pageNumber: 1,
                    display: '1',
                    current: false
                },
                {
                    pageNumber: totalPages - 6,
                    display: '...',
                    current: false
                },
                ...endPageList
            ];
        }
        const middlePageList = [...Array(5).keys()].map(index => {
            const pageNumber = index + currentPage - 2;
            return {
                pageNumber,
                display: String(pageNumber),
                current: pageNumber === currentPage
            };
        });
        return [
            {
                pageNumber: 1,
                display: '1',
                current: false
            },
            {
                pageNumber: currentPage - 3,
                display: '...',
                current: false
            },
            ...middlePageList,
            {
                pageNumber: currentPage + 3,
                display: '...',
                current: false
            },
            {
                pageNumber: totalPages,
                display: String(totalPages),
                current: false
            }
        ];
    }
}

const guxPaginationButtonsLegacyCss = "gux-pagination-buttons-legacy .gux-pagination-buttons-container{display:flex;flex-direction:row;flex-wrap:nowrap;gap:var(--gse-ui-dataTableItems-tablePagination-recordsetControls-gap);place-content:stretch flex-end;align-items:center;margin-left:var(--gse-ui-dataTableItems-tablePagination-recordsetControls-gap)}gux-pagination-buttons-legacy .gux-pagination-buttons-container.gux-expanded{justify-content:center}gux-pagination-buttons-legacy .gux-pagination-buttons-container>div{flex:0 1 auto;align-self:auto;order:0}gux-pagination-buttons-legacy .gux-pagination-buttons-container .gux-pagination-buttons-group{white-space:nowrap}gux-pagination-buttons-legacy .gux-pagination-buttons-container .gux-pagination-buttons-input-container{display:flex;flex-direction:row;flex-wrap:nowrap;gap:var(--gse-ui-dataTableItems-tablePagination-recordsetControls-gap);place-content:stretch center;align-items:center}gux-pagination-buttons-legacy .gux-pagination-buttons-container .gux-pagination-buttons-input-container>div{flex:0 1 auto;align-self:auto;order:0;white-space:nowrap}gux-pagination-buttons-legacy .gux-pagination-buttons-container .gux-pagination-buttons-input-container .gux-pagination-buttons-input{width:60px}gux-pagination-buttons-legacy .gux-pagination-buttons-container .gux-pagination-buttons-input-container .gux-pagination-buttons-input input{width:60px;text-align:center;background-color:transparent}gux-pagination-buttons-legacy .gux-pagination-buttons-container .gux-pagination-buttons-list-container{display:flex;flex-direction:row;flex-wrap:nowrap;gap:var(--gse-ui-dataTableItems-tablePagination-recordsetControls-gap);place-content:stretch center;align-items:center}gux-pagination-buttons-legacy .gux-pagination-buttons-container .gux-pagination-buttons-list-container .gux-pagination-buttons-list-button{height:32px;padding-right:var(--gse-ui-dataTableItems-tablePagination-countDisplay-gap);padding-left:var(--gse-ui-dataTableItems-tablePagination-countDisplay-gap);margin-right:var(--gse-ui-dataTableItems-tablePagination-countDisplay-gap);margin-left:var(--gse-ui-dataTableItems-tablePagination-countDisplay-gap);background:inherit;border:none}gux-pagination-buttons-legacy .gux-pagination-buttons-container .gux-pagination-buttons-list-container .gux-pagination-buttons-list-button:focus-visible{outline:var(--gse-semantic-focusOutline-md-borderWidth) solid var(--gse-ui-color-focus);outline-offset:var(--gse-semantic-focusOutline-offset);border-radius:calc(var(--gse-semantic-focusOutline-sm-borderRadius) - var(--gse-semantic-focusOutline-offset))}gux-pagination-buttons-legacy .gux-pagination-buttons-container .gux-pagination-buttons-list-container .gux-pagination-buttons-list-button.gux-current{padding-right:var(--gse-ui-dataTableItems-tablePagination-padding);padding-left:var(--gse-ui-dataTableItems-tablePagination-padding);background-color:var(--gse-ui-button-ghost-active-backgroundColor);border-radius:var(--gse-ui-button-borderRadius);font-family:var(--gse-ui-dataTableItems-tablePagination-defaultText-fontFamily);font-size:var(--gse-ui-dataTableItems-tablePagination-defaultText-fontSize);font-weight:var(--gse-ui-dataTableItems-tablePagination-currentResultText-fontWeight);line-height:var(--gse-ui-dataTableItems-tablePagination-defaultText-lineHeight);color:var(--gse-ui-button-ghost-default-foregroundColor)}gux-pagination-buttons-legacy .gux-pagination-buttons-container .gux-pagination-buttons-list-container .gux-pagination-buttons-list-button.gux-target{padding-right:var(--gse-ui-dataTableItems-tablePagination-padding);padding-left:var(--gse-ui-dataTableItems-tablePagination-padding);cursor:pointer;font-family:var(--gse-ui-dataTableItems-tablePagination-defaultText-fontFamily);font-size:var(--gse-ui-dataTableItems-tablePagination-defaultText-fontSize);font-weight:var(--gse-ui-dataTableItems-tablePagination-currentResultText-fontWeight);line-height:var(--gse-ui-dataTableItems-tablePagination-defaultText-lineHeight);color:var(--gse-ui-button-ghost-default-foregroundColor)}gux-pagination-buttons-legacy .gux-pagination-buttons-container .gux-pagination-buttons-list-container .gux-pagination-buttons-list-button.gux-target:hover{color:var(--gse-ui-button-ghost-hover-foregroundColor);background-color:var(--gse-ui-button-ghost-hover-backgroundColor);border-radius:var(--gse-ui-button-borderRadius)}gux-pagination-buttons-legacy .gux-pagination-buttons-container .gux-pagination-buttons-spacer{width:var(--gse-ui-dataTableItems-tablePagination-padding)}";

const GuxPaginationButtonsLegacy = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.internalcurrentpagechange = index.createEvent(this, "internalcurrentpagechange", 3);
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
                return acc.concat((index.h("button", { class: "gux-pagination-buttons-list-button gux-current" }, cv.display)));
            }
            return acc.concat((index.h("button", { class: "gux-pagination-buttons-list-button gux-target", onClick: () => this.handleClickPage(cv.pageNumber) }, cv.display)));
        }, []);
    }
    getSmallPagePicker() {
        return (index.h("div", { class: 'gux-pagination-buttons-spacer' }));
    }
    getExpandedPagePicker() {
        return (index.h("div", { class: "gux-pagination-buttons-list-container" }, this.getPageListEnteries(this.currentPage, this.totalPages)));
    }
    getFullPagePicker() {
        return (index.h("div", { class: "gux-pagination-buttons-input-container" }, index.h("div", null, this.i18n('page')), index.h("div", { class: "gux-pagination-buttons-input" }, index.h("gux-form-field-text-like", { "label-position": "screenreader" }, index.h("label", { slot: "label" }, this.i18n('pageInputLabel', {
            currentPage: this.currentPage,
            totalPages: this.totalPages
        })), index.h("input", { type: "text", slot: "input", value: String(this.currentPage), ref: ref => (this.textFieldRef = ref), onChange: () => this.setPageFromInput(this.textFieldRef.value) }))), index.h("div", null, this.i18n('totalPages', { totalPages: this.totalPages }))));
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
        this.i18n = await index$1.buildI18nForComponent(this.root, paginationResources$2);
    }
    render() {
        return (index.h("div", { key: '0d4772429868e48f1f1f5496fd610261b05dce01', class: `gux-pagination-buttons-container gux-${this.layout}` }, index.h("div", { key: '980bbda1f84c6d6b5610cafdb8c3f176ff0a0298', class: "gux-pagination-buttons-group" }, index.h("gux-button-slot", { key: '3d6b26301edee8387d38a1fc38f5c7cc38afc4d5', accent: "ghost" }, index.h("button", { key: '4eee3435dcb62d77d1ec6997d164714f472e69fc', title: this.i18n('first'), disabled: this.onFirstPage, onClick: this.handleClickFirst.bind(this) }, index.h("gux-icon", { key: '0a5eb67869460a7ae52acaf03abccb495406447c', decorative: true, "icon-name": "fa/chevrons-left-regular" }))), index.h("gux-button-slot", { key: '8e5f0c069ec74111e4f72b8bf4255d557db1264e', accent: "ghost" }, index.h("button", { key: '2dc2323f66220aa6d075cd368b037ab4be497eb8', title: this.i18n('previous'), disabled: this.onFirstPage, onClick: this.handleClickPrevious.bind(this) }, index.h("gux-icon", { key: 'da5d20f1efbe2f4a6c69b98d1d65544d122915c3', decorative: true, "icon-name": "custom/chevron-left-small-regular" })))), this.getPagePicker(this.layout), index.h("div", { key: '17a601fb01be437563764834129f10854e2c6910', class: "gux-pagination-buttons-group" }, index.h("gux-button-slot", { key: '444a86967aa34b651bbfc83a144947b850c76beb', accent: "ghost" }, index.h("button", { key: 'c3d00613c5e8ec8c42a9e94f4da8957f8696954e', title: this.i18n('next'), disabled: this.onLastPage, onClick: this.handleClickNext.bind(this) }, index.h("gux-icon", { key: '736e70db0bfd031cb578a9818dbe92c3d823c14b', decorative: true, "icon-name": "custom/chevron-right-small-regular" }))), index.h("gux-button-slot", { key: '7471cb3d2f5616c60c5403c716679753f7a79cb3', accent: "ghost" }, index.h("button", { key: 'e1954b39e68a59ded7daab7a6a5d20c55615f0af', title: this.i18n('last'), disabled: this.onLastPage, onClick: this.handleClickLast.bind(this) }, index.h("gux-icon", { key: '5662ea67d264c5879f21c4810e70958a81bbb1e2', decorative: true, "icon-name": "fa/chevrons-right-regular" }))))));
    }
    get root() { return index.getElement(this); }
};
GuxPaginationButtonsLegacy.style = guxPaginationButtonsLegacyCss;

const itemCountDisplay = "{firstItem, number} - {lastItem, number}";
const totalItems = " of {totalItems, number}";
var paginationResources$1 = {
	itemCountDisplay: itemCountDisplay,
	totalItems: totalItems
};

const guxPaginationItemCountsLegacyCss = "gux-pagination-item-counts-legacy .gux-pagination-item-counts-container{display:flex;flex-direction:row;gap:var(--gse-ui-dataTableItems-tablePagination-countDisplay-gap);font-family:var(--gse-ui-dataTableItems-tablePagination-defaultText-fontFamily);font-size:var(--gse-ui-dataTableItems-tablePagination-defaultText-fontSize);font-weight:var(--gse-ui-dataTableItems-tablePagination-currentResultText-fontWeight);line-height:var(--gse-ui-dataTableItems-tablePagination-defaultText-lineHeight);color:var(--gse-ui-dataTableItems-tablePagination-foregroundColor);white-space:nowrap}";

const GuxPaginationItemCountsLegacy = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        this.i18n = await index$1.buildI18nForComponent(this.root, paginationResources$1);
    }
    render() {
        return (index.h("div", { key: 'c1eb5d511624530037247147d21131e6d4179467', class: "gux-pagination-item-counts-container" }, index.h("span", { key: '95e6e2896e3b8df06478156c4bc471a6a4e963cf', class: "gux-pagination-item-counts-range" }, this.i18n('itemCountDisplay', {
            firstItem: this.firstItem,
            lastItem: this.lastItem
        })), index.h("span", { key: 'e932b57232dddb43cff4c187b05af0fedf4ef31a' }, this.i18n('totalItems', { totalItems: this.totalItems }))));
    }
    get root() { return index.getElement(this); }
};
GuxPaginationItemCountsLegacy.style = guxPaginationItemCountsLegacyCss;

const perPage = "per page";
const itemsPerPage = "Items per page";
const rangeSelected = "Items per page dropdown, {range} selected";
var paginationResources = {
	perPage: perPage,
	itemsPerPage: itemsPerPage,
	rangeSelected: rangeSelected
};

const guxPaginationItemsPerPageLegacyCss = "gux-pagination-items-per-page-legacy .gux-pagination-items-per-page-container{display:flex;flex-direction:row;flex-wrap:nowrap;gap:var(--gse-ui-dataTableItems-tablePagination-recordsetControls-gap);place-content:stretch center;align-items:center}gux-pagination-items-per-page-legacy .gux-pagination-items-per-page-container>div{flex:0 1 auto;align-self:auto;order:0;white-space:nowrap}gux-pagination-items-per-page-legacy .gux-pagination-items-per-page-container .gux-pagination-items-per-page-picker gux-dropdown{display:inline-block;width:64px}gux-pagination-items-per-page-legacy .gux-pagination-items-per-page-container .gux-pagination-per-page{font-family:var(--gse-ui-dataTableItems-tablePagination-defaultText-fontFamily);font-size:var(--gse-ui-dataTableItems-tablePagination-defaultText-fontSize);font-weight:var(--gse-ui-dataTableItems-tablePagination-currentResultText-fontWeight);line-height:var(--gse-ui-dataTableItems-tablePagination-defaultText-lineHeight);color:var(--gse-ui-dataTableItems-tablePagination-foregroundColor)}";

const GuxPaginationItemsPerPageLegacy = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.internalitemsperpagechange = index.createEvent(this, "internalitemsperpagechange", 3);
        this.itemsPerPage = 25;
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
        return (index.h("gux-dropdown", { ref: el => (this.dropdownElement = el), value: `${this.itemsPerPage}`, "aria-label": this.i18n('rangeSelected', {
                range: this.itemsPerPage
            }) }, index.h("gux-listbox", { "aria-label": this.i18n('itemsPerPage') }, index.h("gux-option", { value: "25" }, "25"), index.h("gux-option", { value: "50" }, "50"), index.h("gux-option", { value: "75" }, "75"), index.h("gux-option", { value: "100" }, "100"))));
    }
    render() {
        return (index.h("div", { key: 'd6fde66a0dda82512ce40a51a0853b85d3f40166', class: "gux-pagination-items-per-page-container" }, index.h("div", { key: '7e8f0da433f68b8db632d5c0f09e36c5ea36836a', class: "gux-pagination-items-per-page-picker" }, this.getDropdown()), index.h("div", { key: 'b863d991f439ff7200b3b8712f5c9456abe74919', class: "gux-pagination-per-page" }, this.i18n('perPage'))));
    }
    get root() { return index.getElement(this); }
};
GuxPaginationItemsPerPageLegacy.style = guxPaginationItemsPerPageLegacyCss;

exports.gux_pagination_buttons_legacy = GuxPaginationButtonsLegacy;
exports.gux_pagination_item_counts_legacy = GuxPaginationItemCountsLegacy;
exports.gux_pagination_items_per_page_legacy = GuxPaginationItemsPerPageLegacy;
