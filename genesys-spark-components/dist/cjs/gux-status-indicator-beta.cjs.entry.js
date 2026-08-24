'use strict';

var index = require('./index-BLhHoh_r.js');
var usage = require('./usage-v50bi18B.js');
var hasSlot = require('./has-slot-BFTyqu_U.js');

const guxStatusIndicatorCss = ".gux-status-indicator{display:inline-flex;gap:var(--gse-ui-dataTableItems-statusIndicator-gap);align-items:center;padding:var(--gse-ui-dataTableItems-statusIndicator-gap);font-size:var(--gse-ui-dataTableItems-statusIndicator-label-fontSize);line-height:var(--gse-ui-dataTableItems-statusIndicator-label-lineHeight);border-radius:var(--gse-ui-dataTableItems-statusIndicator-borderRadius)}.gux-status-indicator:hover{cursor:default;background-color:var(--gse-ui-dataTableItems-statusIndicator-hover)}.gux-has-table-parent{position:relative;inset-inline-start:-8px}.gux-status-indicator-text{color:var(--gse-ui-dataTableItems-statusIndicator-text)}.gux-status-icon{display:inline-flex}.gux-status-icon::before{content:\"\"}.gux-status-icon-info::before{-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' %3E%3Cpath d='M6 0C7.59 0 9.12 0.629997 10.245 1.755C11.37 2.88 12 4.41 12 6C12 7.59 11.37 9.12 10.245 10.245C9.12 11.37 7.59 12 6 12C4.41 12 2.88 11.37 1.755 10.245C0.629997 9.12 0 7.59 0 6C0 4.41 0.629997 2.88 1.755 1.755C2.88 0.629997 4.41 0 6 0Z' /%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' %3E%3Cpath d='M6 0C7.59 0 9.12 0.629997 10.245 1.755C11.37 2.88 12 4.41 12 6C12 7.59 11.37 9.12 10.245 10.245C9.12 11.37 7.59 12 6 12C4.41 12 2.88 11.37 1.755 10.245C0.629997 9.12 0 7.59 0 6C0 4.41 0.629997 2.88 1.755 1.755C2.88 0.629997 4.41 0 6 0Z' /%3E%3C/svg%3E\");inline-size:var(--gse-ui-dataTableItems-statusIndicator-label-fontSize);block-size:var(--gse-ui-dataTableItems-statusIndicator-label-fontSize);background:var(--gse-ui-statusGlyph-information)}.gux-status-icon-warning::before{inline-size:var(--gse-ui-dataTableItems-statusIndicator-label-fontSize);block-size:var(--gse-ui-dataTableItems-statusIndicator-label-fontSize);-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' %3E%3Cpath d='M6.16516 0.749268C6.49521 0.749268 6.80275 0.921791 6.97527 1.21434L12.0386 9.8407C12.2111 10.1332 12.2111 10.4933 12.0386 10.7783C11.8735 11.0709 11.5585 11.2509 11.2285 11.2509H1.10186C0.764303 11.2509 0.456764 11.0709 0.291738 10.7783C0.126712 10.4858 0.126712 10.1257 0.291738 9.8407L5.35504 1.21434C5.52757 0.929292 5.8276 0.749268 6.16516 0.749268Z' /%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' %3E%3Cpath d='M6.16516 0.749268C6.49521 0.749268 6.80275 0.921791 6.97527 1.21434L12.0386 9.8407C12.2111 10.1332 12.2111 10.4933 12.0386 10.7783C11.8735 11.0709 11.5585 11.2509 11.2285 11.2509H1.10186C0.764303 11.2509 0.456764 11.0709 0.291738 10.7783C0.126712 10.4858 0.126712 10.1257 0.291738 9.8407L5.35504 1.21434C5.52757 0.929292 5.8276 0.749268 6.16516 0.749268Z' /%3E%3C/svg%3E\");background:var(--gse-ui-statusGlyph-neutral)}.gux-status-icon-error::before{inline-size:var(--gse-ui-dataTableItems-statusIndicator-label-fontSize);block-size:var(--gse-ui-dataTableItems-statusIndicator-label-fontSize);-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' %3E%3Cpath d='M0.236102 6.88C-0.0787008 6.33785 -0.0787008 5.66215 0.236102 5.12L2.36477 1.38C2.67957 0.837853 3.24922 0.5 3.87133 0.5H8.12867C8.75078 0.5 9.32043 0.837853 9.63523 1.38L11.7639 5.12C12.0787 5.66215 12.0787 6.33785 11.7639 6.88L9.63523 10.62C9.32043 11.1621 8.75078 11.5 8.12867 11.5H3.87133C3.24922 11.5 2.67957 11.1621 2.36477 10.62L0.236102 6.88Z' /%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' %3E%3Cpath d='M0.236102 6.88C-0.0787008 6.33785 -0.0787008 5.66215 0.236102 5.12L2.36477 1.38C2.67957 0.837853 3.24922 0.5 3.87133 0.5H8.12867C8.75078 0.5 9.32043 0.837853 9.63523 1.38L11.7639 5.12C12.0787 5.66215 12.0787 6.33785 11.7639 6.88L9.63523 10.62C9.32043 11.1621 8.75078 11.5 8.12867 11.5H3.87133C3.24922 11.5 2.67957 11.1621 2.36477 10.62L0.236102 6.88Z' /%3E%3C/svg%3E\");background:var(--gse-ui-statusGlyph-negative)}.gux-status-icon-success::before{inline-size:var(--gse-ui-dataTableItems-statusIndicator-label-fontSize);block-size:var(--gse-ui-dataTableItems-statusIndicator-label-fontSize);-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' %3E%3Cpath d='M6 0C7.59 0 9.12 0.629997 10.245 1.755C11.37 2.88 12 4.41 12 6C12 7.59 11.37 9.12 10.245 10.245C9.12 11.37 7.59 12 6 12C4.41 12 2.88 11.37 1.755 10.245C0.629997 9.12 0 7.59 0 6C0 4.41 0.629997 2.88 1.755 1.755C2.88 0.629997 4.41 0 6 0Z' /%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' %3E%3Cpath d='M6 0C7.59 0 9.12 0.629997 10.245 1.755C11.37 2.88 12 4.41 12 6C12 7.59 11.37 9.12 10.245 10.245C9.12 11.37 7.59 12 6 12C4.41 12 2.88 11.37 1.755 10.245C0.629997 9.12 0 7.59 0 6C0 4.41 0.629997 2.88 1.755 1.755C2.88 0.629997 4.41 0 6 0Z' /%3E%3C/svg%3E\");background:var(--gse-ui-statusGlyph-positive)}";

const GuxStatusIndicator = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.accent = 'info';
    }
    async componentWillLoad() {
        usage.trackComponent(this.root, { variant: this.accent });
    }
    componentDidLoad() {
        this.applyTableStyle();
    }
    applyTableStyle() {
        var _a;
        if (((_a = this.root.parentElement) === null || _a === void 0 ? void 0 : _a.tagName.toLowerCase()) === 'td') {
            this.statusIndicatorContainerElement.classList.add('gux-has-table-parent');
        }
    }
    renderTooltip() {
        if (hasSlot.hasSlot(this.root, 'tooltip-text')) {
            return (index.h("gux-tooltip", null, index.h("slot", { name: "tooltip-text" })));
        }
    }
    render() {
        return (index.h("div", { key: 'a5bf8a008546f7a81c2bef3edfc544a3f1063328', class: "gux-status-indicator", ref: (el) => (this.statusIndicatorContainerElement = el) }, index.h("span", { key: '90c526c391b945da940e5a8e63fe272736ccb929', class: `gux-status-icon gux-status-icon-${this.accent}` }), index.h("div", { key: '66cd298fde0e420f9c5671fe8b80b3a2728abb84', class: "gux-status-indicator-text" }, index.h("slot", { key: 'cf1961ce0b3ac416f0ffbf25d13eda82cbd85a41' })), this.renderTooltip()));
    }
    get root() { return index.getElement(this); }
};
GuxStatusIndicator.style = guxStatusIndicatorCss;

exports.gux_status_indicator_beta = GuxStatusIndicator;
