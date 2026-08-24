import { r as registerInstance, h, H as Host, a as getElement } from './index-xFL2agjT.js';
import { a as afterNextRenderTimeout } from './after-next-render-Bg4q97BS.js';
import { e as eventIsFrom } from './event-is-from-C6ZfOd6U.js';
import { r as randomHTMLId } from './random-html-id-D9jKBqIb.js';
import { b as buildI18nForComponent } from './index-Dac2qHbK.js';
import { t as tableResources } from './en-BIx814vt.js';
import './get-closest-element-Cd4R0amv.js';

const guxTableSelectMenuCss = "gux-table-select-menu{display:inline-flex;font-family:var(--gse-ui-popover-body-text-fontFamily);font-size:var(--gse-ui-popover-body-text-fontSize);font-weight:var(--gse-ui-popover-body-text-fontWeight);line-height:var(--gse-ui-popover-body-text-lineHeight)}gux-table-select-menu .gux-select-menu-button{padding:0;margin-inline-start:var(--gse-ui-dataTableItems-header-gap);color:var(--gse-ui-dataTableItems-cell-chevron-foregroundColor);outline:none;background-color:inherit;border:none}gux-table-select-menu .gux-select-menu-button:focus-visible{outline:var(--gse-semantic-focusOutline-md-borderWidth) solid var(--gse-semantic-border-focus);outline-offset:var(--gse-semantic-focusOutline-offset);border-radius:4px}";

const GuxTableSelectMenu = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.dropdownOptionsButtonId = randomHTMLId('gux-table-select-menu');
        this.hasSelectMenuOptions = false;
        this.dropdownDisabled = false;
        this.popoverHidden = true;
    }
    focusFirstItemInPopupList() {
        const listElement = this.root.querySelector('gux-list');
        afterNextRenderTimeout(() => {
            void (listElement === null || listElement === void 0 ? void 0 : listElement.guxFocusFirstItem());
        });
    }
    async componentWillLoad() {
        this.hasSelectMenuOptions = !!this.root.querySelector('[slot="select-menu-options"]');
        this.i18n = await buildI18nForComponent(this.root, tableResources, 'gux-table');
    }
    onKeydown(event) {
        var _a;
        switch (event.key) {
            case 'ArrowDown':
                if (eventIsFrom('.gux-select-menu-button', event)) {
                    this.toggleOptions();
                    this.focusFirstItemInPopupList();
                }
                break;
            case 'Enter':
                if (eventIsFrom('.gux-select-menu-button', event)) {
                    void this.focusFirstItemInPopupList();
                }
                break;
            case 'Escape':
                if (eventIsFrom('gux-list', event)) {
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
                if (eventIsFrom('.gux-select-menu-button', event)) {
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
                h("button", { id: this.dropdownOptionsButtonId, "aria-haspopup": "listbox", "aria-expanded": (!this.popoverHidden).toString(), type: "button", class: "gux-select-menu-button", ref: el => (this.tableSelectMenuButtonElement = el), onClick: () => this.toggleOptions(), disabled: this.dropdownDisabled }, h("gux-icon", { "icon-name": "custom/chevron-down-small-regular", "screenreader-text": this.i18n('tableOptions'), size: "small" })),
                h("gux-popover-list", { for: this.dropdownOptionsButtonId, isOpen: !this.popoverHidden, closeOnClickOutside: true, onGuxdismiss: () => (this.popoverHidden = true) }, h("div", null, h("slot", { name: "select-menu-options" })))
            ];
        }
    }
    render() {
        return (h(Host, { key: '19a7a5b2280ef1980f15b7b67038c1a4bc9e575f' }, h("slot", { key: 'cc06b3e2792f400afe3dbb37fb19b8b7aa37161e' }), this.renderSelectDropdown()));
    }
    get root() { return getElement(this); }
};
GuxTableSelectMenu.style = guxTableSelectMenuCss;

export { GuxTableSelectMenu as gux_table_select_menu };
