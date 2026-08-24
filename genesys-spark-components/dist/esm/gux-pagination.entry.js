import { r as registerInstance, c as createEvent, d as readTask, h, a as getElement } from './index-xFL2agjT.js';
import { a as afterNextRenderTimeout } from './after-next-render-Bg4q97BS.js';
import { t as trackComponent } from './usage-D2Q7fj4V.js';

const guxPaginationCss = ":host{display:block;block-size:var(--gse-ui-dataTableItems-cell-tablePagination-height);border-block-start:var(--gse-ui-dataTableItems-tablePagination-divider-width) var(--gse-ui-dataTableItems-tablePagination-divider-style) var(--gse-ui-dataTableItems-tablePagination-divider-color)}.gux-pagination-container{display:flex;flex-direction:row;flex-wrap:nowrap;place-content:stretch space-between;align-items:center;padding:var(--gse-ui-dataTableItems-tablePagination-padding);background-color:var(--gse-ui-dataTableItems-tablePagination-defaultBackgroundColor)}.gux-pagination-container .gux-pagination-info{display:flex;flex:0 1 auto;flex-direction:row;flex-wrap:nowrap;gap:var(--gse-ui-dataTableItems-tablePagination-recordsetControls-gap);place-content:stretch flex-start;align-items:center;align-self:auto;order:0}.gux-pagination-container .gux-pagination-info>*{flex:0 1 auto;align-self:auto;order:0}.gux-pagination-container .gux-pagination-spacer{flex:1 1 auto;align-self:auto;order:0}.gux-pagination-container .gux-pagination-change{flex:0 1 auto;align-self:auto;order:0}.gux-pagination-container .gux-pagination-change:first-child{margin-inline-start:0}";

const minAdvancedSpacerWidth = 24;
const GuxPagination = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.guxpaginationchange = createEvent(this, "guxpaginationchange", 7);
        this.reinstateLayoutBreakpoint = 0;
        /**
         * The pagination component can have different layouts to suit the available space
         */
        this.layout = 'advanced';
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
        this.disabled = false;
    }
    setPage(page) {
        if (page <= 0) {
            this.setPage(1);
            return;
        }
        const totalPages = this.calculateTotalPages(this.totalItems, this.itemsPerPage);
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
    handleInternalitemsperpagechange(event) {
        this.itemsPerPage = event.detail;
        this.setPage(1);
    }
    handleInternalcurrentpagechange(event) {
        this.setPage(event.detail);
    }
    calculateTotalPages(totalItems, itemsPerPage) {
        return Math.max(1, Math.ceil(totalItems / itemsPerPage));
    }
    calculateCurrentPage(totalPages, currentPage) {
        const minCurrentPage = totalPages > 0 ? 1 : 0;
        return Math.max(minCurrentPage, Math.min(currentPage, totalPages));
    }
    checkPaginationContainerWidthForLayout() {
        readTask(() => {
            const container = this.root.shadowRoot.querySelector('.gux-pagination-container');
            const spacer = this.root.shadowRoot.querySelector('.gux-pagination-spacer');
            const containerWidth = container.clientWidth;
            const spacerWidth = spacer.clientWidth;
            if (spacerWidth < minAdvancedSpacerWidth &&
                this.displayedLayout !== 'simple') {
                this.reinstateLayoutBreakpoint = containerWidth;
                this.displayedLayout = 'simple';
            }
            else if (containerWidth > this.reinstateLayoutBreakpoint) {
                this.reinstateLayoutBreakpoint = 0;
                this.displayedLayout = this.layout;
            }
        });
    }
    componentWillLoad() {
        trackComponent(this.root, { variant: this.layout });
    }
    componentWillRender() {
        this.totalPages = this.calculateTotalPages(this.totalItems, this.itemsPerPage);
        this.currentPage = this.calculateCurrentPage(this.totalPages, this.currentPage);
    }
    disconnectedCallback() {
        if (this.resizeObserver) {
            this.resizeObserver.unobserve(this.root.shadowRoot.querySelector('.gux-pagination-container'));
        }
    }
    componentDidLoad() {
        if (!this.resizeObserver && window.ResizeObserver) {
            this.resizeObserver = new ResizeObserver(() => this.checkPaginationContainerWidthForLayout());
        }
        if (this.resizeObserver) {
            this.resizeObserver.observe(this.root.shadowRoot.querySelector('.gux-pagination-container'));
        }
        afterNextRenderTimeout(() => {
            this.checkPaginationContainerWidthForLayout();
        }, 500);
    }
    render() {
        return (h("div", { key: 'd5e8052ee365f5925afd4e09ab5fea26137b6600', class: "gux-pagination-container" }, h("div", { key: 'e032223958899b83e73ae8e30d134f0ab619600d', class: "gux-pagination-info" }, h("gux-pagination-item-counts", { key: 'b0fb1f1ed6fc6caf72cffff2cf7b511b41d22150', "total-items": this.totalItems, "current-page": this.currentPage, "items-per-page": this.itemsPerPage }), this.displayedLayout === 'advanced' && (h("gux-pagination-items-per-page", { key: '8c32b9bb5afc9bd7313a6bc0c2bcc26ba2e211eb', disabled: this.disabled, "items-per-page": this.itemsPerPage, onInternalitemsperpagechange: this.handleInternalitemsperpagechange.bind(this) }))), h("div", { key: 'f68268db452ab5901cbb8aa4e6b4de312905fd4c', class: "gux-pagination-spacer" }), h("div", { key: '18a5657a0b3cc0c76a1304b6e29552aeb9cb089d', class: "gux-pagination-change" }, h("gux-pagination-buttons", { key: '6d5d03e9df4c4add8dea0c70b0446167887af369', disabled: this.disabled, layout: this.displayedLayout, "current-page": this.currentPage, "total-pages": this.totalPages, onInternalcurrentpagechange: this.handleInternalcurrentpagechange.bind(this) }))));
    }
    get root() { return getElement(this); }
};
GuxPagination.style = guxPaginationCss;

export { GuxPagination as gux_pagination };
