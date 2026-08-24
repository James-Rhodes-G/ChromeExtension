'use strict';

var index = require('./index-BLhHoh_r.js');
var index$1 = require('./index-QInGO-Pu.js');
var usage = require('./usage-v50bi18B.js');
var getClosestElement = require('./get-closest-element-CfyZl7i7.js');
var onMutation = require('./on-mutation-MIY4v9bf.js');
var en = require('./en-BCiQgP2I.js');

const guxSortControlCss = ".gux-container{position:absolute;inset:0;display:flex;flex-direction:row;flex-wrap:nowrap;place-content:flex-start flex-start;align-items:center;border-block-start:var(--gse-ui-dataTableItems-header-selectedBar-height) solid transparent;border-block-end:var(--gse-ui-dataTableItems-header-selectedBar-height) solid transparent}.gux-container.gux-active{border-block-end-color:var(--gse-ui-dataTableItems-header-selectedIndicatorColor)}.gux-container:focus-within{border-block-end-color:var(--gse-ui-dataTableItems-header-selectedIndicatorColor)}.gux-container .gux-sort-button{all:unset;flex:1 1 auto;align-self:stretch;order:0;cursor:pointer}.gux-container .gux-sort-button .gux-sort-icon{float:inline-end;margin-block:0;margin-inline:var(--gse-ui-dataTableItems-header-gap);color:var(--gse-ui-dataTableItems-header-sort-foregroundColor)}.gux-container .gux-sort-button .gux-sort-icon.gux-left{float:inline-start;margin-inline-start:calc(2px + var(--gse-ui-dataTableItems-header-gap))}.gux-container .gux-resize-spacer{flex:0 1 auto;align-self:stretch;order:0;inline-size:2px}";

const GuxSortControl = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.guxsortchanged = index.createEvent(this, "guxsortchanged", 7);
        this.includeUnsorted = false;
        this.active = false;
        this.sort = 'none';
        this.isLeftAlignIcon = false;
    }
    async componentWillLoad() {
        usage.trackComponent(this.root);
        this.i18n = await index$1.buildI18nForComponent(this.root, en.tableResources, 'gux-table');
        this.tableHeader = getClosestElement.getClosestElement('th', this.root);
        this.thObserver = onMutation.onMutation(this.tableHeader, () => {
            this.setState();
        }, {
            attributes: true,
            childList: false,
            subtree: false
        });
        this.setState();
    }
    disconnectedCallback() {
        if (this.thObserver) {
            this.thObserver.disconnect();
        }
    }
    onClick() {
        this.guxsortchanged.emit({
            columnName: this.tableHeader.dataset.columnName,
            sortDirection: this.getNextSort(this.sort)
        });
    }
    setState() {
        this.headerContent = this.tableHeader.textContent;
        this.isLeftAlignIcon =
            this.tableHeader.hasAttribute('data-cell-numeric') ||
                this.tableHeader.hasAttribute('data-cell-action');
        const ariaSort = this.tableHeader.getAttribute('aria-sort');
        switch (ariaSort) {
            case 'ascending':
            case 'descending':
                this.active = true;
                this.sort = ariaSort;
                break;
            default:
                this.active = false;
                this.sort = 'none';
        }
    }
    getIconName(colSortDirection) {
        switch (colSortDirection) {
            case 'descending':
                return 'fa/caret-down-solid';
            case 'ascending':
            default:
                return 'fa/caret-up-solid';
        }
    }
    getNextSort(colSortDirection) {
        switch (colSortDirection) {
            case 'none':
                return 'ascending';
            case 'ascending':
                return 'descending';
            case 'descending':
            default: {
                if (this.includeUnsorted) {
                    return 'none';
                }
                return 'ascending';
            }
        }
    }
    getSRText(colSortDirection) {
        switch (colSortDirection) {
            case 'ascending':
                return this.i18n('ascendingColumnSort', {
                    headerContent: this.headerContent
                });
            case 'descending': {
                if (this.includeUnsorted) {
                    return this.i18n('descendingColumnSortIncludeUnsorted', {
                        headerContent: this.headerContent
                    });
                }
                return this.i18n('descendingColumnSort', {
                    headerContent: this.headerContent
                });
            }
            default:
                return this.i18n('noColumnSort', { headerContent: this.headerContent });
        }
    }
    render() {
        return (index.h("div", { key: '74c2227a0d337f215b66f144bb4ca319faa89241', class: { 'gux-container': true, 'gux-active': this.active } }, index.h("button", { key: '7a0760f87902cec08544f78173952cbcfea2f593', class: "gux-sort-button", type: "button", onClick: () => this.onClick(), "aria-label": this.getSRText(this.sort) }, index.h("gux-icon", { key: 'fb1634abc9e95555a0259068719e9cb9f238dc88', class: {
                'gux-sort-icon': true,
                'gux-left': this.isLeftAlignIcon
            }, size: "small", "icon-name": this.getIconName(this.sort), decorative: true })), index.h("div", { key: '23e8fbc7d9402e3dae72c13a5331b4ec2019fcac', class: "gux-resize-spacer" })));
    }
    static get delegatesFocus() { return true; }
    get root() { return index.getElement(this); }
};
GuxSortControl.style = guxSortControlCss;

exports.gux_sort_control = GuxSortControl;
