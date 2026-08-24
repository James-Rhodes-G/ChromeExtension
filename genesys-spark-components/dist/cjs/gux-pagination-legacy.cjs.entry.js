'use strict';

var index = require('./index-BLhHoh_r.js');
var usage = require('./usage-v50bi18B.js');

const guxPaginationLegacyCss = ":host{display:block;border-top:var(--gse-ui-dataTableItems-tablePagination-divider-width) var(--gse-ui-dataTableItems-tablePagination-divider-style) var(--gse-ui-dataTableItems-tablePagination-divider-color)}.gux-pagination-container{display:flex;flex-direction:row;flex-wrap:nowrap;place-content:stretch space-between;align-items:center;height:var(--gse-ui-dataTableItems-cell-tablePagination-height);padding:var(--gse-ui-dataTableItems-tablePagination-padding);background-color:var(--gse-ui-dataTableItems-tablePagination-defaultBackgroundColor)}.gux-pagination-container .gux-pagination-info{display:flex;flex:1 1 auto;flex-direction:row;flex-wrap:nowrap;gap:var(--gse-ui-dataTableItems-tablePagination-recordsetControls-gap);place-content:stretch flex-start;align-items:center;align-self:auto;order:0}.gux-pagination-container .gux-pagination-info>*{flex:0 1 auto;align-self:auto;order:0}.gux-pagination-container .gux-pagination-change{flex:1 1 auto;align-self:auto;order:0}.gux-pagination-container .gux-pagination-change:first-child{margin-left:0}";

const GuxPaginationLegacy = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.guxpaginationchange = index.createEvent(this, "guxpaginationchange", 7);
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
            index.h("gux-pagination-item-counts-legacy", { "total-items": this.totalItems, "current-page": this.currentPage, "items-per-page": this.itemsPerPage })
        ];
        if (layout === 'full') {
            content.push(index.h("gux-pagination-items-per-page-legacy", { "items-per-page": this.itemsPerPage, onInternalitemsperpagechange: this.handleInternalitemsperpagechange.bind(this) }));
        }
        return (index.h("div", { class: "gux-pagination-info" }, content));
    }
    componentWillLoad() {
        usage.trackComponent(this.root, { variant: this.layout });
    }
    componentWillRender() {
        this.totalPages = this.calculateTotalPages();
        this.currentPage = this.calculateCurrentPage();
    }
    render() {
        return (index.h("div", { key: 'b107dfd919c1e04795f6239de7b2c7f56ba61a83', class: "gux-pagination-container" }, this.getPaginationInfoElement(this.layout), index.h("div", { key: 'cdd5c4b9d60e291e732fa8d9058f0c0f3bdeb52d', class: "gux-pagination-change" }, index.h("gux-pagination-buttons-legacy", { key: '6be7e5ce93f5b9ea10e54eb520df2667e2a8ffe8', layout: this.layout, "current-page": this.currentPage, "total-pages": this.totalPages, onInternalcurrentpagechange: this.handleInternalcurrentpagechange.bind(this) }))));
    }
    get root() { return index.getElement(this); }
};
GuxPaginationLegacy.style = guxPaginationLegacyCss;

exports.gux_pagination_legacy = GuxPaginationLegacy;
