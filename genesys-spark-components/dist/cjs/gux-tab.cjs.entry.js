'use strict';

var index = require('./index-BLhHoh_r.js');

const guxTabCss = "gux-tabs[orientation=vertical]>gux-tab-list gux-tab{box-sizing:border-box;border-inline-end:var(--gse-ui-tabs-item-divider-vertical-width) solid var(--gse-ui-tabs-item-divider-dividerColor)}gux-tabs[orientation=vertical]>gux-tab-list gux-tab .gux-tab{display:flex;justify-content:flex-end;inline-size:var(--gse-ui-tabs-set-vertical-width);block-size:var(--gse-ui-tabs-item-vertical-fixedHeight);padding:var(--gse-ui-tabs-item-vertical-padding);border-inline-end:var(--gse-ui-tabs-item-indicator-vertical-width) solid transparent}gux-tabs[orientation=vertical]>gux-tab-list gux-tab .gux-tab.gux-active{border-inline-end-color:var(--gse-ui-tabs-item-indicator-activeColor)}gux-tabs[orientation=vertical]>gux-tab-list gux-tab .gux-tab:hover:not(.gux-active):not(.gux-disabled){border-inline-end-color:var(--gse-ui-tabs-item-indicator-hoverColor)}gux-tabs:not([orientation=vertical])>gux-tab-list .gux-tab{box-sizing:border-box;max-inline-size:160px;block-size:var(--gse-ui-tabs-item-horizontal-fixedHeight);padding:var(--gse-ui-tabs-item-horizontal-padding);border-block-end:var(--gse-ui-tabs-item-indicator-horizontal-height) solid transparent}gux-tabs:not([orientation=vertical])>gux-tab-list .gux-tab.gux-active{border-block-end-color:var(--gse-ui-tabs-item-indicator-activeColor)}gux-tabs:not([orientation=vertical])>gux-tab-list .gux-tab:hover:not(.gux-active):not(.gux-disabled){border-block-end-color:var(--gse-ui-tabs-item-indicator-hoverColor)}gux-tabs:not([orientation=vertical])>gux-tab-list .gux-tab gux-tooltip-title{margin:auto}gux-tabs[alignment=center]>gux-tab-list .gux-scrollable-section{justify-content:center}gux-tabs[alignment=full-width]>gux-tab-list .gux-scrollable-section{flex-grow:1}gux-tabs[alignment=full-width]>gux-tab-list gux-tab{inline-size:100%;max-inline-size:100%}gux-tabs[alignment=full-width]>gux-tab-list gux-tab .gux-tab{inline-size:100%;max-inline-size:100%}gux-tab{display:flex}gux-tab .gux-tab{display:flex;align-items:center;block-size:var(--gse-ui-tabs-item-height);font-family:var(--gse-ui-tabs-item-itemText-fontFamily);font-size:var(--gse-ui-tabs-item-itemText-fontSize);font-weight:var(--gse-ui-tabs-item-itemText-fontWeight);line-height:var(--gse-ui-tabs-item-itemText-lineHeight);color:var(--gse-ui-tabs-item-itemTextColor);cursor:pointer;background-color:transparent;border:none}gux-tab .gux-tab.gux-disabled{cursor:default}gux-tab .gux-tab.gux-disabled gux-tooltip-title{opacity:var(--gse-ui-tabs-item-disableOpacity)}gux-tab .gux-tab:focus-visible{outline:var(--gse-ui-tabs-focusRing-border-width) var(--gse-ui-tabs-focusRing-border-style) var(--gse-ui-tabs-focusRing-border-color);outline-offset:calc(var(--gse-ui-tabs-focusRing-border-width) * -1);border-radius:var(--gse-ui-tabs-focusRing-borderRadius)}gux-tab .gux-tab gux-tooltip-title{white-space:nowrap}";

const GuxTab = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.internalactivatetabpanel = index.createEvent(this, "internalactivatetabpanel", 7);
        /**
         * Specifies if tab is disabled
         */
        this.guxDisabled = false;
        this.active = false;
    }
    onClick() {
        if (!this.active && !this.guxDisabled) {
            this.internalactivatetabpanel.emit(this.tabId);
        }
    }
    onFocusin() {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        void this.tooltipTitleElement.setShowTooltip();
    }
    onFocusout() {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        void this.tooltipTitleElement.setHideTooltip();
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async guxSetActive(active) {
        this.active = active;
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async guxFocus() {
        this.buttonElement.focus();
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async guxGetActive() {
        return this.active;
    }
    getTabIndex() {
        if (this.guxDisabled) {
            return null;
        }
        if (this.active) {
            return 0;
        }
        return -1;
    }
    render() {
        return (index.h("button", { key: 'af9cc1d13fd343ed639af5b5c0a823ecb1d9cbaa', class: {
                'gux-disabled': this.guxDisabled,
                'gux-tab': true,
                'gux-active': this.active
            }, type: "button", disabled: this.guxDisabled, id: `gux-${this.tabId}-tab`, role: "tab", "aria-controls": `gux-${this.tabId}-panel`, "aria-selected": this.active.toString(), tabIndex: this.getTabIndex(), ref: el => (this.buttonElement = el) }, index.h("gux-tooltip-title", { key: 'af4042e5e292f3e08d71e6aae02b46ccc2ad2317', ref: el => (this.tooltipTitleElement = el) }, index.h("span", { key: '4f9d4c95ac84a6dea7315df0603c4afbfbdcfebb' }, index.h("slot", { key: 'f7a3783d3665bc784efde8f190fd0dc37474ceae' })))));
    }
};
GuxTab.style = guxTabCss;

exports.gux_tab = GuxTab;
