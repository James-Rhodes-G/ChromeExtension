import { r as registerInstance, c as createEvent, h, a as getElement } from './index-xFL2agjT.js';
import { b as buildI18nForComponent } from './index-Dac2qHbK.js';
import { t as translationResources } from './en-BFMPPR7N.js';
import { b as afterNextRender } from './after-next-render-Bg4q97BS.js';
import './get-closest-element-Cd4R0amv.js';

class GuxPaginationButtonsService {
    static displayAllPageButtons(currentPage, totalPages, layout) {
        switch (layout) {
            case 'advanced':
                return getAdvancedList(currentPage, totalPages);
            case 'simple':
                return getSimpleList(currentPage, totalPages);
        }
    }
}
function getAdvancedList(currentPage, totalPages) {
    if (totalPages <= 7) {
        return [...Array(totalPages).keys()].map(index => {
            const pageNumber = index + 1;
            return {
                pageNumber,
                display: String(pageNumber),
                current: pageNumber === currentPage
            };
        });
    }
    if (currentPage <= 3) {
        const startPageList = [...Array(5).keys()].map(index => {
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
                pageNumber: 6,
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
    if (currentPage > totalPages - 3) {
        const endPageList = [...Array(5).keys()].map(index => {
            const pageNumber = index + totalPages - 4;
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
    const middlePageList = [...Array(3).keys()].map(index => {
        const pageNumber = index + currentPage - 1;
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
function getSimpleList(currentPage, totalPages) {
    if (totalPages <= 3) {
        return [...Array(totalPages).keys()].map(index => {
            const pageNumber = index + 1;
            return {
                pageNumber,
                display: String(pageNumber),
                current: pageNumber === currentPage
            };
        });
    }
    if (totalPages === currentPage) {
        return [
            {
                pageNumber: 1,
                display: '1',
                current: false
            },
            {
                pageNumber: currentPage,
                display: '...',
                current: false
            },
            {
                pageNumber: totalPages,
                display: String(totalPages),
                current: true
            }
        ];
    }
    if (totalPages >= 4) {
        const startPageList = [...Array(1).keys()].map(index => {
            const pageNumber = index + currentPage;
            return {
                pageNumber,
                display: String(pageNumber),
                current: pageNumber !== totalPages
            };
        });
        return [
            ...startPageList,
            {
                pageNumber: currentPage,
                display: '...',
                current: false
            },
            {
                pageNumber: totalPages,
                display: String(totalPages),
                current: totalPages == currentPage
            }
        ];
    }
}

const guxPaginationButtonsCss = "gux-pagination-buttons .gux-pagination-buttons-container{display:flex;flex-direction:row;flex-wrap:nowrap;gap:var(--gse-ui-dataTableItems-tablePagination-recordsetControls-gap);place-content:stretch flex-end;align-items:center;margin-inline-start:var(--gse-ui-dataTableItems-tablePagination-recordsetControls-gap)}gux-pagination-buttons .gux-pagination-buttons-container>div{flex:0 1 auto;align-self:auto;order:0}gux-pagination-buttons .gux-pagination-buttons-container .gux-pagination-buttons-group{display:flex;flex-direction:row;gap:var(--gse-ui-dataTableItems-tablePagination-recordsetControls-gap);white-space:nowrap}gux-pagination-buttons .gux-pagination-buttons-container .gux-pagination-buttons-list-container{display:flex;flex-shrink:0;flex-direction:row;flex-wrap:nowrap;gap:var(--gse-ui-dataTableItems-tablePagination-recordsetControls-gap);place-content:stretch center;align-items:center}gux-pagination-buttons .gux-pagination-buttons-container .gux-pagination-buttons-list-container .gux-pagination-buttons-list-current{color:var(--gse-ui-button-ghost-active-foregroundColor);background-color:var(--gse-ui-button-ghost-active-backgroundColor);border-radius:var(--gse-ui-button-borderRadius)}";

const GuxPaginationButtons = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.internalcurrentpagechange = createEvent(this, "internalcurrentpagechange", 3);
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
        this.i18n = await buildI18nForComponent(this.root, translationResources);
    }
    render() {
        return (h("div", { key: '99d79cba0e16a1b74e914e4d0f0c02c3b4a73d0e', class: `gux-pagination-buttons-container gux-${this.layout}` }, h("div", { key: 'efe76116dd1478094927617059457f681d0bd6c7', class: "gux-pagination-buttons-group" }, h("gux-button-slot", { key: 'dceec181beb25f217be3d8a0a720a9370c342510', accent: "ghost", "icon-only": true }, h("button", { key: '5f0466be061263ff91d0866f23eb21e5a708cbc8', title: this.i18n('firstPage'), disabled: this.onFirstPage || this.disabled, onClick: this.handleClickFirst.bind(this) }, h("gux-icon", { key: 'd538e9965f9d1066722ae31f536ee10b60b868e9', size: "small", decorative: true, "icon-name": "fa/chevrons-left-regular" }))), h("gux-button-slot", { key: 'f53bb6a0577856540f9c09482a7600a2ee28a46f', accent: "ghost", "icon-only": true }, h("button", { key: '53ae1dc112b8c4084cd73d54ff3efe2ea97df3d6', title: this.i18n('previousPage'), disabled: this.onFirstPage || this.disabled, onClick: this.handleClickPrevious.bind(this) }, h("gux-icon", { key: 'b57b1ca6a1a8789fbc928aa1bd57bc2cb1aa029b', size: "small", decorative: true, "icon-name": "custom/chevron-left-small-regular" })))), this.getPageNavigation(), h("div", { key: 'da0251b955fec752c91a3f70f5deed1147aa9628', class: "gux-pagination-buttons-group" }, h("gux-button-slot", { key: '311c7e2c1912981031123ebb5ef3b252e09c8024', accent: "ghost", "icon-only": true }, h("button", { key: 'c1b788b8e3598ff03eaeff1d1387d675c55e3692', title: this.i18n('nextPage'), disabled: this.onLastPage || this.disabled, onClick: this.handleClickNext.bind(this) }, h("gux-icon", { key: 'e124103cf66f28053f0ea8e98a69a15fee145ca4', size: "small", decorative: true, "icon-name": "custom/chevron-right-small-regular" }))), h("gux-button-slot", { key: '1fc691395a2e8c512c565f8809fb1c3c282a2e2b', accent: "ghost", "icon-only": true }, h("button", { key: '776866e1d667ee62ea65177c479227fa5f33d79c', title: this.i18n('lastPage'), disabled: this.onLastPage || this.disabled, onClick: this.handleClickLast.bind(this) }, h("gux-icon", { key: '1a937000dcf86f0fb5323fae3053e210c7f58086', size: "small", decorative: true, "icon-name": "fa/chevrons-right-regular" }))))));
    }
    get root() { return getElement(this); }
};
GuxPaginationButtons.style = guxPaginationButtonsCss;

const itemCountDisplay = "{firstItem, number} - {lastItem, number}";
const totalItems = " of {totalItems, number}";
var paginationResources = {
	itemCountDisplay: itemCountDisplay,
	totalItems: totalItems
};

const guxPaginationItemCountsCss = "gux-pagination-item-counts .gux-pagination-item-counts-container{display:flex;flex-direction:row;gap:var(--gse-ui-dataTableItems-tablePagination-countDisplay-gap);font-family:var(--gse-ui-dataTableItems-tablePagination-defaultText-fontFamily);font-size:var(--gse-ui-dataTableItems-tablePagination-defaultText-fontSize);font-weight:var(--gse-ui-dataTableItems-tablePagination-currentResultText-fontWeight);line-height:var(--gse-ui-dataTableItems-tablePagination-defaultText-lineHeight);color:var(--gse-ui-dataTableItems-tablePagination-foregroundColor);white-space:nowrap}gux-pagination-item-counts .gux-pagination-item-counts-total{font-family:var(--gse-ui-dataTableItems-tablePagination-defaultText-fontFamily);font-size:var(--gse-ui-dataTableItems-tablePagination-defaultText-fontSize);font-weight:var(--gse-ui-dataTableItems-tablePagination-defaultText-fontWeight);line-height:var(--gse-ui-dataTableItems-tablePagination-defaultText-lineHeight);color:var(--gse-ui-dataTableItems-tablePagination-foregroundColor);white-space:nowrap}";

const GuxPaginationItemCounts = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
    get root() { return getElement(this); }
};
GuxPaginationItemCounts.style = guxPaginationItemCountsCss;

export { GuxPaginationButtons as gux_pagination_buttons, GuxPaginationItemCounts as gux_pagination_item_counts };
