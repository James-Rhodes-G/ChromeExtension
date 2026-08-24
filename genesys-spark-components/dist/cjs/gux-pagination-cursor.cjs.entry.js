'use strict';

var index = require('./index-BLhHoh_r.js');
var usage = require('./usage-v50bi18B.js');
var index$1 = require('./index-QInGO-Pu.js');
require('./get-closest-element-CfyZl7i7.js');

const previous = "Previous";
const next = "Next";
var translationResources = {
	previous: previous,
	next: next
};

const guxPaginationCursorCss = ":host{display:flex;flex-direction:row-reverse;flex-wrap:nowrap;place-content:stretch space-between;align-items:flex-start;padding:var(--gse-ui-dataTableItems-tablePagination-padding);font-family:var(--gse-ui-dataTableItems-tablePagination-defaultText-fontFamily);font-size:var(--gse-ui-dataTableItems-tablePagination-defaultText-fontSize);font-weight:var(--gse-ui-dataTableItems-tablePagination-defaultText-fontWeight);line-height:var(--gse-ui-dataTableItems-tablePagination-defaultText-lineHeight);color:var(--gse-ui-dataTableItems-tablePagination-foregroundColor);background-color:var(--gse-ui-dataTableItems-tablePagination-defaultBackgroundColor);border-block-start:var(--gse-ui-dataTableItems-tablePagination-divider-width) var(--gse-ui-dataTableItems-tablePagination-divider-style) var(--gse-ui-dataTableItems-tablePagination-divider-color)}:host .gux-pagination-button-container{display:flex;flex-wrap:nowrap;gap:var(--gse-ui-dataTableItems-tablePagination-recordsetControls-gap);align-content:center}:host .gux-button-align-content{display:flex;flex-direction:row;flex-wrap:nowrap;gap:var(--gse-ui-button-gap);align-content:center;align-items:center}:host .gux-button-align-content>*{flex:0 1 auto;align-self:auto;order:0}:host gux-icon{display:flex}";

const GuxPaginationCursor = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.guxPaginationCursorchange = index.createEvent(this, "guxPaginationCursorchange", 7);
        this.guxitemsperpagechange = index.createEvent(this, "guxitemsperpagechange", 7);
        this.hasPrevious = false;
        this.hasNext = false;
        this.layout = 'simple';
    }
    handleInternalitemsperpagechange(event) {
        this.guxitemsperpagechange.emit(event.detail);
    }
    onButtonClick(paginationDetail) {
        if ((paginationDetail === 'previous' && this.hasPrevious) ||
            (paginationDetail === 'next' && this.hasNext)) {
            this.guxPaginationCursorchange.emit(paginationDetail);
        }
    }
    async componentWillLoad() {
        usage.trackComponent(this.root);
        this.i18n = await index$1.buildI18nForComponent(this.root, translationResources);
    }
    renderSimpleLayout() {
        return [
            index.h("nav", { "aria-label": this.label, class: "gux-pagination-button-container" }, index.h("gux-button-slot", { accent: "ghost" }, index.h("button", { class: "gux-simple-button", type: "button", disabled: !this.hasPrevious, onClick: () => this.onButtonClick('previous') }, index.h("gux-icon", { iconName: "custom/chevron-left-small-regular", decorative: true, size: "small" }), index.h("gux-screen-reader-beta", null, this.i18n('previous')))), index.h("gux-button-slot", { accent: "ghost" }, index.h("button", { class: "gux-simple-button", type: "button", disabled: !this.hasNext, onClick: () => this.onButtonClick('next') }, index.h("gux-icon", { iconName: "custom/chevron-right-small-regular", decorative: true, size: "small" }), index.h("gux-screen-reader-beta", null, this.i18n('next')))))
        ];
    }
    renderAdvancedLayout() {
        return [
            index.h("nav", { "aria-label": this.label, class: "gux-pagination-button-container" }, index.h("gux-button-slot", { accent: "ghost" }, index.h("button", { type: "button", disabled: !this.hasPrevious, onClick: () => this.onButtonClick('previous') }, index.h("div", { class: "gux-button-align-content" }, index.h("gux-icon", { decorative: true, iconName: "custom/chevron-left-small-regular", size: "small" }), index.h("span", null, this.i18n('previous'))))), index.h("gux-button-slot", { accent: "ghost" }, index.h("button", { type: "button", disabled: !this.hasNext, onClick: () => this.onButtonClick('next') }, index.h("div", { class: "gux-button-align-content" }, index.h("span", null, this.i18n('next')), index.h("gux-icon", { decorative: true, iconName: "custom/chevron-right-small-regular", size: "small" }))))),
            this.renderItemsPerPage()
        ];
    }
    renderItemsPerPage() {
        return (this.itemsPerPage &&
            (index.h("gux-pagination-items-per-page", { "items-per-page": this.itemsPerPage, onInternalitemsperpagechange: this.handleInternalitemsperpagechange.bind(this) })));
    }
    render() {
        return this.layout === 'advanced'
            ? this.renderAdvancedLayout()
            : this.renderSimpleLayout();
    }
    get root() { return index.getElement(this); }
};
GuxPaginationCursor.style = guxPaginationCursorCss;

exports.gux_pagination_cursor = GuxPaginationCursor;
