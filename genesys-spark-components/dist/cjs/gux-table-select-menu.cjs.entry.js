'use strict';

var index = require('./index-BLhHoh_r.js');
var afterNextRender = require('./after-next-render-CeY_1Kbz.js');
var eventIsFrom = require('./event-is-from-D62oX3Ld.js');
var randomHtmlId = require('./random-html-id-DH9-ntZu.js');
var index$1 = require('./index-QInGO-Pu.js');
var en = require('./en-BCiQgP2I.js');
require('./get-closest-element-CfyZl7i7.js');

const guxTableSelectMenuCss = "gux-table-select-menu{display:inline-flex;font-family:var(--gse-ui-popover-body-text-fontFamily);font-size:var(--gse-ui-popover-body-text-fontSize);font-weight:var(--gse-ui-popover-body-text-fontWeight);line-height:var(--gse-ui-popover-body-text-lineHeight)}gux-table-select-menu .gux-select-menu-button{padding:0;margin-inline-start:var(--gse-ui-dataTableItems-header-gap);color:var(--gse-ui-dataTableItems-cell-chevron-foregroundColor);outline:none;background-color:inherit;border:none}gux-table-select-menu .gux-select-menu-button:focus-visible{outline:var(--gse-semantic-focusOutline-md-borderWidth) solid var(--gse-semantic-border-focus);outline-offset:var(--gse-semantic-focusOutline-offset);border-radius:4px}";

const GuxTableSelectMenu = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.dropdownOptionsButtonId = randomHtmlId.randomHTMLId('gux-table-select-menu');
        this.hasSelectMenuOptions = false;
        this.dropdownDisabled = false;
        this.popoverHidden = true;
    }
    focusFirstItemInPopupList() {
        const listElement = this.root.querySelector('gux-list');
        afterNextRender.afterNextRenderTimeout(() => {
            void (listElement === null || listElement === void 0 ? void 0 : listElement.guxFocusFirstItem());
        });
    }
    async componentWillLoad() {
        this.hasSelectMenuOptions = !!this.root.querySelector('[slot="select-menu-options"]');
        this.i18n = await index$1.buildI18nForComponent(this.root, en.tableResources, 'gux-table');
    }
    onKeydown(event) {
        var _a;
        switch (event.key) {
            case 'ArrowDown':
                if (eventIsFrom.eventIsFrom('.gux-select-menu-button', event)) {
                    this.toggleOptions();
                    this.focusFirstItemInPopupList();
                }
                break;
            case 'Enter':
                if (eventIsFrom.eventIsFrom('.gux-select-menu-button', event)) {
                    void this.focusFirstItemInPopupList();
                }
                break;
            case 'Escape':
                if (eventIsFrom.eventIsFrom('gux-list', event)) {
                    event.stopPropagation();
                    this.popoverHidden = true;
                    (_a = this.tableSelectMenuButtonElement) === null || _a === void 0 ? void 0 : _a.focus();
                }
                break;
            case 'Tab':
                this.popoverHidden = true;
                break;
        }
    }
    onKeyup(event) {
        switch (event.key) {
            case ' ':
                if (eventIsFrom.eventIsFrom('.gux-select-menu-button', event)) {
                    this.focusFirstItemInPopupList();
                }
        }
    }
    toggleOptions() {
        this.popoverHidden = !this.popoverHidden;
    }
    renderSelectDropdown() {
        if (this.hasSelectMenuOptions) {
            return [
                index.h("button", { id: this.dropdownOptionsButtonId, "aria-haspopup": "listbox", "aria-expanded": (!this.popoverHidden).toString(), type: "button", class: "gux-select-menu-button", ref: el => (this.tableSelectMenuButtonElement = el), onClick: () => this.toggleOptions(), disabled: this.dropdownDisabled }, index.h("gux-icon", { "icon-name": "custom/chevron-down-small-regular", "screenreader-text": this.i18n('tableOptions'), size: "small" })),
                index.h("gux-popover-list", { for: this.dropdownOptionsButtonId, isOpen: !this.popoverHidden, closeOnClickOutside: true, onGuxdismiss: () => (this.popoverHidden = true) }, index.h("div", null, index.h("slot", { name: "select-menu-options" })))
            ];
        }
    }
    render() {
        return (index.h(index.Host, { key: '19a7a5b2280ef1980f15b7b67038c1a4bc9e575f' }, index.h("slot", { key: 'cc06b3e2792f400afe3dbb37fb19b8b7aa37161e' }), this.renderSelectDropdown()));
    }
    get root() { return index.getElement(this); }
};
GuxTableSelectMenu.style = guxTableSelectMenuCss;

exports.gux_table_select_menu = GuxTableSelectMenu;
