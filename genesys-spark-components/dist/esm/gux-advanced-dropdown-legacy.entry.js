import { r as registerInstance, c as createEvent, h, a as getElement } from './index-xFL2agjT.js';
import { o as onMutation } from './on-mutation-CF55kYjc.js';
import { O as OnClickOutside } from './on-click-outside-VvhFhgll.js';
import { a as afterNextRenderTimeout } from './after-next-render-Bg4q97BS.js';
import { t as trackComponent } from './usage-D2Q7fj4V.js';
import { b as buildI18nForComponent } from './index-Dac2qHbK.js';
import './get-closest-element-Cd4R0amv.js';

const searchAria = "Search";
var advancedDropDownResources = {
	searchAria: searchAria
};

const guxAdvancedDropdownCss = ":host{color:#2e394c}gux-popup{display:block;margin:4px 0}gux-popup .gux-select-field{position:relative;width:100%;height:32px}gux-popup .gux-select-field a.gux-select-input{position:absolute;inset:0;padding:6px 24px 6px 12px;overflow:hidden;text-overflow:ellipsis;color:#2e394c;white-space:nowrap;text-decoration:none;cursor:pointer;background-color:#f6f7f9;background-image:none;border:1px solid #6b7585;border-radius:4px;box-shadow:inset 0 0 4px rgba(32, 41, 55, 0.16)}gux-popup .gux-select-field a.gux-select-input .gux-select-placeholder,gux-popup .gux-select-field a.gux-select-input .gux-select-value{line-height:20px}gux-popup .gux-select-field a.gux-select-input .gux-select-placeholder{color:#596373}gux-popup .gux-select-field a.gux-select-input:focus-visible{outline:var(--gse-semantic-focusOutline-md-borderWidth) solid var(--gse-semantic-border-focus);outline-offset:var(--gse-semantic-focusOutline-offset)}gux-popup .gux-select-field .gux-icon-wrapper{position:absolute;top:1px;right:8px;bottom:0;display:flex;align-items:center;overflow:hidden;cursor:pointer}gux-popup .gux-select-field .gux-icon-wrapper gux-icon{width:16px;height:16px;color:#596373}gux-popup .gux-select-field:hover .gux-icon-wrapper gux-icon{color:#2e394c}gux-popup .gux-advanced-dropdown-menu{background:#fdfdfd;border:1px solid #b4bccb;border-radius:4px;box-shadow:0 0 2px 0 rgba(32, 41, 55, 0.24)}gux-popup .gux-advanced-dropdown-menu .gux-dropdown-menu-container gux-form-field-search{margin:8px 16px}gux-popup .gux-advanced-dropdown-menu .gux-dropdown-menu-container gux-form-field-search input::-webkit-search-cancel-button,gux-popup .gux-advanced-dropdown-menu .gux-dropdown-menu-container gux-form-field-search input::-webkit-search-results-button,gux-popup .gux-advanced-dropdown-menu .gux-dropdown-menu-container gux-form-field-search input::-webkit-calendar-picker-indicator{display:none;-webkit-appearance:none}gux-popup .gux-dropdown-options{padding:8px 0;margin:0;overflow-y:auto;color:#2e394c;background:#fdfdfd;border-radius:4px;box-shadow:none}";

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const GuxAdvancedDropdownLegacy = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.input = createEvent(this, "input", 7);
        this.filter = createEvent(this, "filter", 7);
        /**
         * Disable the input and prevent interactions.
         */
        this.disabled = false;
        /**
         * Whether the list should filter its current options.
         */
        this.noFilter = false;
        /**
         * Timeout between filter input changed and event being emitted.
         */
        this.filterDebounceTimeout = 500;
        /**
         * CSS string used to set the maximum height of the dropdown option container. Default is set to 10 options as defined by UX.
         */
        this.dropdownHeight = '320px';
    }
    watchValue(newValue) {
        if (this.opened && newValue) {
            this.closeDropdown(false);
        }
    }
    get value() {
        var _a;
        return (_a = this.currentlySelectedOption) === null || _a === void 0 ? void 0 : _a.text;
    }
    /**
     * Gets the currently selected values.
     *
     * @returns The array of selected values.
     */
    getSelectedValues() {
        // Once multi-select gets added there will
        // be multiple values selectable.
        return Promise.resolve([this.value]);
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async setLabeledBy(id) {
        this.srLabelledby = id;
    }
    onClickOutside() {
        this.closeDropdown(false);
    }
    async componentWillLoad() {
        trackComponent(this.root);
        this.i18n = await buildI18nForComponent(this.root, advancedDropDownResources);
        this.handleSelectionChange = this.handleSelectionChange.bind(this);
        this.updateSelectionState();
        this.addOptionListener();
        this.slotObserver = onMutation(this.root, () => this.updateSelectionState());
    }
    disconnectedCallback() {
        if (this.slotObserver) {
            this.slotObserver.disconnect();
        }
    }
    render() {
        return (h("gux-popup", { key: 'd41f1a7e46667e03d7aea00cf76e41f0bc5cea80', expanded: this.opened, disabled: this.disabled }, h("div", { key: '244e5e3fc340a4d1d7e901589dd979e2349a8490', slot: "target", class: "gux-select-field", onMouseDown: () => this.inputMouseDown() }, h("a", { key: '10d8b3ffc2b8fb20657a787e9ad4279ea4c827ff', ref: el => (this.inputBox = el), class: "gux-select-input", "aria-labelledby": this.srLabelledby, tabindex: "0", onKeyDown: e => this.inputKeyDown(e) }, this.placeholder && !this.value && (h("span", { key: '5b1f9d9730c645274f78c873005bd348e13ec915', class: "gux-select-placeholder", title: this.placeholder }, this.placeholder)), this.value && (h("span", { key: '737e474d88c6d6e1784d7ddb09c6bc4767d93f21', class: "gux-select-value", title: this.value }, this.value))), h("div", { key: 'ba4e4c852695a8de28c01e68fb433c5458372e1b', class: "gux-icon-wrapper" }, h("gux-icon", { key: 'baebb260e06c027a8966d8e9d4f1a9e363389348', decorative: true, "icon-name": "custom/chevron-down-small-regular" }))), h("div", { key: '20f5635cc8b7cbe68154fa756f493ae4f555bf03', slot: "popup", class: "gux-advanced-dropdown-menu" }, h("div", { key: 'b4bfdd196c7a46161d084ebb350ed2709fcee346', class: "gux-dropdown-menu-container" }, h("gux-form-field-search", { key: '9f3a8c05391065246fd0f58c1245fd7a2cec7b0d', "label-position": "screenreader" }, h("label", { key: '68908618c59e9f4bf27ffc46f263c5468e5f10fb', slot: "label" }, this.i18n('searchAria')), h("input", { key: 'c8ca819f3bbeb8daadc46795fbb6a0745d9e6591', slot: "input", type: "search", onInput: (event) => {
                this.handleSearchInput(event);
            }, ref: el => (this.searchInput = el) })), h("div", { key: 'dfc60a1e40be71ce841d33bf24fb587d89d6d648', class: "gux-dropdown-options", style: { maxHeight: this.dropdownHeight }, onKeyDown: e => this.optionsKeyDown(e) }, h("slot", { key: '0f51073ffc5e046975d74902fb4bff45a05a3352' }))))));
    }
    updateSelectionState() {
        this.selectionOptions = this.getSelectionOptions();
        this.currentlySelectedOption = this.selectionOptions.find(option => option.selected);
    }
    addOptionListener() {
        this.root.addEventListener('selectedChanged', (event) => this.handleSelectionChange(event));
    }
    handleSelectionChange({ target }) {
        const option = target;
        this.closeDropdown(true);
        if (this.currentlySelectedOption === option) {
            return;
        }
        if (this.currentlySelectedOption) {
            this.currentlySelectedOption.selected = false;
        }
        this.currentlySelectedOption = option;
        this.input.emit(option.value);
    }
    getSelectionOptions() {
        const options = this.root.querySelectorAll('gux-dropdown-option');
        return Array.from(options);
    }
    inputMouseDown() {
        if (this.disabled) {
            return;
        }
        if (this.opened) {
            this.closeDropdown(true);
        }
        else {
            this.openDropdown(false);
        }
    }
    getFocusIndex() {
        return this.selectionOptions.findIndex(option => {
            return option.matches(':focus');
        });
    }
    optionsKeyDown(event) {
        switch (event.key) {
            case 'ArrowUp': {
                event.preventDefault();
                const focusIndex = this.getFocusIndex();
                if (focusIndex > 0) {
                    this.selectionOptions[focusIndex - 1].focus();
                }
                break;
            }
            case 'ArrowDown': {
                event.preventDefault();
                const focusIndex = this.getFocusIndex();
                if (focusIndex < this.selectionOptions.length - 1) {
                    this.selectionOptions[focusIndex + 1].focus();
                }
                break;
            }
            case 'Home':
                if (!this.selectionOptions.length) {
                    return;
                }
                this.selectionOptions[0].focus();
                break;
            case 'End':
                if (!this.selectionOptions.length) {
                    return;
                }
                this.selectionOptions[this.selectionOptions.length - 1].focus();
                break;
        }
    }
    inputKeyDown(event) {
        switch (event.key) {
            case 'ArrowUp':
            case 'ArrowDown':
            case ' ':
                this.openDropdown(true);
                break;
        }
    }
    handleSearchInput(event) {
        event.stopPropagation();
        clearTimeout(this.filterDebounceTimer);
        this.filterDebounceTimer = setTimeout(() => this.searchRequested(), this.filterDebounceTimeout);
    }
    searchRequested() {
        const value = this.searchInput.value;
        this.filter.emit(value);
        this.setFilteredOptions();
    }
    setFilteredOptions() {
        const value = this.searchInput.value;
        if (!this.noFilter) {
            for (const option of this.selectionOptions) {
                void option.shouldFilter(value).then(isFiltered => {
                    option.filtered = isFiltered;
                });
            }
        }
    }
    changeFocusToSearch() {
        afterNextRenderTimeout(() => {
            this.searchInput.focus();
        });
    }
    openDropdown(focusSearch) {
        this.opened = true;
        if (focusSearch) {
            this.changeFocusToSearch();
        }
    }
    closeDropdown(focus) {
        this.opened = false;
        this.searchInput.value = '';
        this.setFilteredOptions();
        if (focus) {
            this.inputBox.focus();
        }
    }
    get root() { return getElement(this); }
    static get watchers() { return {
        "disabled": ["watchValue"]
    }; }
};
__decorate([
    OnClickOutside({ triggerEvents: 'mousedown' })
], GuxAdvancedDropdownLegacy.prototype, "onClickOutside", null);
GuxAdvancedDropdownLegacy.style = guxAdvancedDropdownCss;

export { GuxAdvancedDropdownLegacy as gux_advanced_dropdown_legacy };
