'use strict';

var index = require('./index-BLhHoh_r.js');
var eventIsFrom = require('./event-is-from-D62oX3Ld.js');
var randomHtmlId = require('./random-html-id-DH9-ntZu.js');
var afterNextRender = require('./after-next-render-CeY_1Kbz.js');
var index$1 = require('./index-QInGO-Pu.js');
var en = require('./en-D98yzdC_.js');
require('./get-closest-element-CfyZl7i7.js');

const guxTabAdvancedCss = "gux-tab-advanced .gux-tab{display:flex;align-items:center;border-color:transparent;border-block-start-width:var(--gse-ui-advancedTabs-item-indicator-height);border-block-end-style:solid;border-block-end-width:var(--gse-ui-advancedTabs-item-indicator-height)}gux-tab-advanced .gux-tab .gux-buttons{display:flex;flex:1 1 0;gap:var(--gse-ui-advancedTabs-item-gap);align-items:center;inline-size:var(--gse-ui-advancedTabs-item-width);min-inline-size:0}gux-tab-advanced .gux-tab .gux-buttons .gux-tab-button{all:unset;flex:1 1 0;inline-size:100px;min-inline-size:0;padding:var(--gse-ui-advancedTabs-item-padding)}gux-tab-advanced .gux-tab .gux-buttons .gux-tab-button:focus-visible{outline:var(--gse-semantic-focusOutline-md-borderWidth) solid var(--gse-semantic-border-focus);outline-offset:var(--gse-semantic-focusOutline-offset);outline-offset:calc(-1 * var(--gse-semantic-focusOutline-md-borderWidth));border-radius:var(--gse-ui-advancedTabs-item-focus-borderRadius)}gux-tab-advanced .gux-tab .gux-buttons .gux-tab-button .gux-tab-button-text{font-family:var(--gse-ui-advancedTabs-item-itemText-fontFamily);font-size:var(--gse-ui-advancedTabs-item-itemText-fontSize);font-weight:var(--gse-ui-advancedTabs-item-itemText-fontWeight);line-height:var(--gse-ui-advancedTabs-item-itemText-lineHeight);color:var(--gse-ui-advancedTabs-item-text-color);white-space:nowrap}gux-tab-advanced .gux-tab .gux-tab-options button{block-size:var(--gse-ui-button-default-height);padding:var(--gse-ui-button-default-paddingIconOnly);border-radius:var(--gse-ui-button-borderRadius)}gux-tab-advanced .gux-tab .gux-tab-options .gux-tab-options-trigger gux-icon{inline-size:var(--gse-ui-icon-small-size);block-size:var(--gse-ui-icon-small-size)}gux-tab-advanced .gux-tab .gux-tab-options .gux-tab-options-container{--no-op:none}gux-tab-advanced .gux-tab .gux-divider{inline-size:var(--gse-ui-advancedTabs-item-divider-right-width);block-size:var(--gse-ui-advancedTabs-item-divider-right-height);background-color:var(--gse-ui-advancedTabs-divider-dividerColor)}gux-tab-advanced .gux-tab:hover:not(.gux-disabled),gux-tab-advanced .gux-tab:focus-within{border-block-end-color:var(--gse-ui-advancedTabs-item-indicator-activeColor)}gux-tab-advanced .gux-tab.gux-selected{background-color:var(--gse-ui-advancedTabs-item-backgroundColor);border-block-end-color:var(--gse-ui-advancedTabs-item-indicator-activeColor)}gux-tab-advanced .gux-tab.gux-selected.gux-disabled{opacity:var(--gse-ui-advancedTabs-item-disabled-opacity)}gux-tab-advanced .gux-tab.gux-disabled .gux-buttons .gux-tab-button .gux-tab-button-text{opacity:var(--gse-ui-advancedTabs-item-disabled-opacity)}";

const GuxTabAdvanced = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.internalactivatetabpanel = index.createEvent(this, "internalactivatetabpanel", 7);
        this.dropdownOptionsButtonId = randomHtmlId.randomHTMLId();
        this.tabTitle = '';
        this.focusinFromClick = false;
        /**
         * indicates whether or not the tab is selected
         */
        this.active = false;
        this.guxDisabled = false;
        this.popoverHidden = true;
    }
    onFocusin(event) {
        if (!this.focusinFromClick &&
            event.target.classList.contains('gux-tab-button')) {
            void this.tooltipTitleElement.setShowTooltip();
        }
    }
    onFocusout(event) {
        if (!this.root.querySelector('.gux-tab').contains(event.relatedTarget)) {
            this.popoverHidden = true;
        }
        if (event.target.classList.contains('gux-tab-button')) {
            void this.tooltipTitleElement.setHideTooltip();
        }
        this.focusinFromClick = false;
    }
    onKeydown(event) {
        switch (event.key) {
            case 'ArrowDown':
                if (eventIsFrom.eventIsFrom('.gux-tab-options-trigger', event)) {
                    event.stopPropagation();
                    event.preventDefault();
                    this.popoverHidden = false;
                    this.focusFirstItemInPopupList();
                }
                if (eventIsFrom.eventIsFrom('gux-list[slot="dropdown-options"]', event)) {
                    event.stopImmediatePropagation();
                    event.stopPropagation();
                }
                break;
            case 'Enter':
                if (eventIsFrom.eventIsFrom('.gux-tab-options-trigger', event)) {
                    event.stopPropagation();
                    event.preventDefault();
                    this.popoverHidden = false;
                    this.focusFirstItemInPopupList();
                }
                break;
            case 'Escape':
                if (eventIsFrom.eventIsFrom('gux-list[slot="dropdown-options"]', event)) {
                    event.stopPropagation();
                    this.popoverHidden = true;
                    afterNextRender.afterNextRenderTimeout(() => {
                        var _a;
                        (_a = this.tabOptionsButtonElement) === null || _a === void 0 ? void 0 : _a.focus();
                    });
                }
                break;
            case 'ArrowRight':
            case 'ArrowLeft':
            case 'ArrowUp':
            case 'Tab':
            case 'Home':
            case 'End':
                if (eventIsFrom.eventIsFrom('gux-list[slot="dropdown-options"]', event)) {
                    event.stopImmediatePropagation();
                    event.stopPropagation();
                }
                break;
        }
    }
    onKeyup(event) {
        switch (event.key) {
            case ' ':
                if (eventIsFrom.eventIsFrom('.gux-tab-options-trigger', event)) {
                    this.focusFirstItemInPopupList();
                }
        }
    }
    onClick(event) {
        if (eventIsFrom.eventIsFrom('.gux-tab-options-trigger', event)) {
            return;
        }
        if (!this.active && !this.guxDisabled) {
            this.internalactivatetabpanel.emit(this.tabId);
        }
    }
    onMouseDown() {
        this.focusinFromClick = true;
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async guxSetActive(active) {
        this.active = active;
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async guxGetActive() {
        return this.active;
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async guxFocus() {
        this.buttonElement.focus();
    }
    get hasDropdownOptions() {
        return Boolean(this.root.querySelector('gux-list[slot="dropdown-options"]'));
    }
    focusFirstItemInPopupList() {
        const listElement = this.root.querySelector('gux-list[slot="dropdown-options"]');
        afterNextRender.afterNextRenderTimeout(() => {
            void (listElement === null || listElement === void 0 ? void 0 : listElement.guxFocusFirstItem());
        });
    }
    toggleOptions() {
        this.popoverHidden = !this.popoverHidden;
    }
    onSelectDropdownOption(e) {
        this.popoverHidden = true;
        e.stopPropagation();
        afterNextRender.afterNextRenderTimeout(() => {
            this.tabOptionsButtonElement.focus();
        });
    }
    async componentWillLoad() {
        this.i18n = await index$1.buildI18nForComponent(this.root, en.tabsResources, 'gux-tabs-advanced');
    }
    componentDidLoad() {
        this.tabTitle = this.root
            .querySelector('gux-tooltip-title')
            .textContent.trim();
    }
    popoverOnClick(e) {
        e.stopPropagation();
    }
    renderTabOptions() {
        if (this.hasDropdownOptions) {
            return (index.h("div", { class: "gux-tab-options" }, index.h("gux-button-slot", { accent: "ghost" }, index.h("button", { id: this.dropdownOptionsButtonId, role: "tab", "aria-expanded": (!this.popoverHidden).toString(), type: "button", class: "gux-tab-options-trigger", ref: el => (this.tabOptionsButtonElement = el), onClick: () => this.toggleOptions(), tabIndex: this.active ? 0 : -1, disabled: this.guxDisabled }, index.h("gux-icon", { "icon-name": "fa/ellipsis-vertical-regular", decorative: true }), index.h("gux-screen-reader-beta", null, this.i18n('options', {
                tabTitle: this.tabTitle
            })))), index.h("gux-popover-list", { position: "top-end", for: this.dropdownOptionsButtonId, displayDismissButton: false, "is-open": !this.popoverHidden, closeOnClickOutside: true, onGuxdismiss: () => (this.popoverHidden = true), onClick: (e) => this.popoverOnClick(e), onFocusout: e => e.stopImmediatePropagation() }, index.h("div", { class: "gux-dropdown-options-container", onClick: (e) => this.onSelectDropdownOption(e) }, index.h("slot", { name: "dropdown-options" })))));
        }
        return null;
    }
    renderTabButton() {
        return (index.h("button", { class: "gux-tab-button", type: "button", role: "tab", disabled: this.guxDisabled, "aria-selected": this.active.toString(), "aria-disabled": this.guxDisabled.toString(), "aria-controls": `gux-${this.tabId}-panel`, ref: el => (this.buttonElement = el), tabIndex: this.active ? 0 : -1, id: `gux-${this.tabId}-tab` }, index.h("gux-tooltip-title", { ref: el => (this.tooltipTitleElement = el) }, index.h("span", { class: "gux-tab-button-text" }, index.h("slot", null)))));
    }
    render() {
        return [
            index.h("div", { key: 'dd06632dccdf89459ede7c2e65498aa6df402f99', class: {
                    'gux-tab': true,
                    'gux-selected': this.active,
                    'gux-dropdown-options': this.hasDropdownOptions,
                    'gux-disabled': this.guxDisabled
                } }, index.h("div", { key: 'bbe55ffeb18b9dbb610679e4c5941e8f2f6a2cfb', class: "gux-buttons" }, this.renderTabButton(), this.renderTabOptions()), index.h("div", { key: '812986bbbc9ce2e092f39f22f73cff3541926212', class: "gux-divider" }))
        ];
    }
    get root() { return index.getElement(this); }
};
GuxTabAdvanced.style = guxTabAdvancedCss;

exports.gux_tab_advanced = GuxTabAdvanced;
