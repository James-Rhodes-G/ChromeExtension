import { r as registerInstance, c as createEvent, f as forceUpdate, h, a as getElement, H as Host } from './index-xFL2agjT.js';
import { O as OnClickOutside } from './on-click-outside-VvhFhgll.js';
import { b as buildI18nForComponent } from './index-Dac2qHbK.js';
import { s as simulateNativeEvent } from './simulate-native-event-BMRf5pjV.js';
import { o as onInputDisabledStateChange, c as calculateInputDisabledState } from './on-input-disabled-state-change-Cb3FOYGS.js';
import { b as afterNextRender } from './after-next-render-Bg4q97BS.js';
import { t as trackComponent } from './usage-D2Q7fj4V.js';
import { O as OnMutation } from './on-mutation-CQXoeN9i.js';
import { s as setInitialActiveOption, b as getListOptions, g as getSearchOption, a as getOptionDefaultSlot, d as clearActiveOptions, h as hasActiveOption, e as setLastOptionActive, f as setFirstOptionActive, i as hasPreviousOption, j as setPreviousOptionActive, k as hasNextOption, l as setNextOptionActive, m as actOnActiveOption, n as goToOption, o as onClickedOption, c as convertValueToArray, p as matchOption } from './gux-listbox.service-B_WlCjG2.js';
import { h as hasSlot } from './has-slot-qzV3vtOw.js';
import { w as whenEventIsFrom } from './when-event-is-from-kLXvN2m9.js';
import { g as getClosestElement } from './get-closest-element-Cd4R0amv.js';
import { r as randomHTMLId } from './random-html-id-D9jKBqIb.js';

const filterResults = "Type to filter dropdown results";
const noSelection = "Select...";
const dropdown = "Dropdown";
var translationResources$1 = {
	filterResults: filterResults,
	noSelection: noSelection,
	dropdown: dropdown
};

const guxDropdownCss = ":host{box-sizing:border-box;color:var(--gse-ui-formControl-input-populatedColor)}.gux-field,.gux-target-container-expanded{all:unset;box-sizing:border-box;display:flex;flex-direction:row;flex-wrap:nowrap;place-content:stretch center;align-items:center;inline-size:100%;block-size:var(--gse-ui-formControl-input-textfield-height);font-family:var(--gse-ui-formControl-input-contentText-fontFamily);font-size:var(--gse-ui-formControl-input-contentText-fontSize);font-weight:var(--gse-ui-formControl-input-contentText-fontWeight);line-height:var(--gse-ui-formControl-input-contentText-lineHeight);cursor:pointer;background-color:var(--gse-ui-formControl-input-backgroundColor)}.gux-target-container-expanded,.gux-target-container-collapsed .gux-field{padding:var(--gse-ui-formControl-input-padding)}.gux-error.gux-target-container-collapsed .gux-field-button,.gux-error.gux-target-container-expanded{border:var(--gse-ui-formControl-input-error-border-width) var(--gse-ui-formControl-input-error-border-style) var(--gse-ui-formControl-input-error-border-color)}.gux-disabled.gux-target-container-collapsed .gux-field-button,.gux-disabled.gux-target-container-expanded{user-select:none;border:var(--gse-ui-formControl-input-disabled-border-width) var(--gse-ui-formControl-input-disabled-border-style) var(--gse-ui-formControl-input-disabled-border-color)}.gux-target-container-collapsed .gux-field-button:hover,.gux-target-container-expanded:hover{border:var(--gse-ui-formControl-input-hover-border-width) var(--gse-ui-formControl-input-hover-border-style) var(--gse-ui-formControl-input-hover-border-color)}.gux-field.gux-input-field{block-size:var(--gse-ui-formControl-input-contentText-lineHeight)}.gux-field .gux-field-content{--gux-zindex-tooltip:3;display:flex;flex:1 1 0;flex-direction:row;flex-wrap:nowrap;place-content:stretch flex-start;align-items:flex-start;min-inline-size:0;block-size:var(--gse-ui-formControl-input-contentText-lineHeight)}.gux-field .gux-field-content .gux-filter,.gux-field .gux-field-content .gux-selected-option,.gux-field .gux-field-content .gux-placeholder{flex:1 1 auto;align-self:auto;order:0;padding:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gux-field .gux-field-content .gux-filter{position:relative;block-size:100%}.gux-field .gux-field-content .gux-filter .gux-filter-input{all:unset;inline-size:100%;color:transparent;caret-color:var(--gse-ui-formControl-input-populatedColor)}.gux-field .gux-field-content .gux-filter .gux-filter-display{white-space:pre}.gux-field .gux-field-content .gux-filter .gux-filter-display .gux-filter-text{color:var(--gse-ui-formControl-input-populatedColor)}.gux-field .gux-field-content .gux-filter .gux-filter-display .gux-filter-suggestion{color:var(--gse-ui-formControl-input-suggestionColor)}.gux-field .gux-field-content .gux-filter .gux-filter-input,.gux-field .gux-field-content .gux-filter .gux-filter-display{position:absolute}.gux-field .gux-field-content .gux-placeholder{color:var(--gse-ui-formControl-input-placeholderColor)}.gux-field .gux-expand-icon{flex:0 0 auto;align-self:auto;order:0;padding-inline-start:var(--gse-ui-dropdown-gap);color:var(--gse-ui-formControl-input-inputIcon-iconEndColor)}.gux-target-container-expanded{border:var(--gse-ui-formControl-input-active-border-width) var(--gse-ui-formControl-input-active-border-style) var(--gse-ui-formControl-input-active-border-color);border-radius:var(--gse-ui-formControl-input-borderRadius)}.gux-target-container-expanded:focus-visible{outline:var(--gse-ui-formControl-input-focus-border-width) var(--gse-ui-formControl-input-focus-border-style) var(--gse-ui-formControl-input-focus-border-color);outline-offset:var(--gse-semantic-focusOutline-offset)}.gux-target-container-expanded:focus-within:has(:focus-visible){outline:var(--gse-ui-formControl-input-focus-border-width) var(--gse-ui-formControl-input-focus-border-style) var(--gse-ui-formControl-input-focus-border-color);outline-offset:var(--gse-semantic-focusOutline-offset)}.gux-target-container-expanded .gux-filter-input{background-color:inherit;border:none}.gux-target-container-expanded .gux-filter-input:focus{outline:none;border:none}.gux-target-container-expanded .gux-field-button{inline-size:auto;block-size:var(--gse-ui-formControl-input-contentText-lineHeight);margin:0;outline:none;background:inherit;border:none;box-shadow:none}.gux-target-container-expanded .gux-field-button:focus{outline:none}.gux-target-container-collapsed .gux-field-button{border:var(--gse-ui-formControl-input-default-border-width) var(--gse-ui-formControl-input-default-border-style) var(--gse-ui-formControl-input-default-border-color);border-radius:var(--gse-ui-formControl-input-borderRadius)}.gux-target-container-collapsed .gux-field-button:focus-visible{outline:var(--gse-ui-formControl-input-focus-border-width) var(--gse-ui-formControl-input-focus-border-style) var(--gse-ui-formControl-input-focus-border-color);outline-offset:var(--gse-semantic-focusOutline-offset)}.gux-target-container-collapsed .gux-field-button:focus-within:has(:focus-visible){outline:var(--gse-ui-formControl-input-focus-border-width) var(--gse-ui-formControl-input-focus-border-style) var(--gse-ui-formControl-input-focus-border-color);outline-offset:var(--gse-semantic-focusOutline-offset)}::slotted(gux-listbox){outline:none;box-shadow:var(--gse-ui-menu-boxShadow)}.gux-selected-icon{display:flex;flex-direction:row;align-items:center}.gux-selected-icon.gux-icon-position-end{flex-direction:row-reverse}.gux-selected-icon gux-icon{padding-inline-end:var(--gse-ui-dropdown-gap)}";

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
const GuxDropdown = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.guxexpanded = createEvent(this, "guxexpanded", 7);
        this.guxcollapsed = createEvent(this, "guxcollapsed", 7);
        this.guxfilter = createEvent(this, "guxfilter", 7);
        this.disabled = false;
        this.required = false;
        this.loading = false;
        this.filterType = 'none';
        this.hasError = false;
        /**
         * allows dropdown popup to be wider than input
         * defaults to fitting content if width is not specified for listbox
         * default min-width is set to width of input
         */
        this.exceedTargetWidth = false;
        this.expanded = false;
        this.filter = '';
    }
    watchExpanded(expanded) {
        if (!expanded) {
            this.filter = '';
        }
    }
    watchValue(newValue) {
        this.validateValue(newValue, this.listboxElement);
    }
    handleFilter(filter) {
        this.guxfilter.emit(filter);
    }
    watchDisabled(disabled) {
        if (disabled) {
            this.expanded = false;
        }
    }
    onKeydown(event) {
        switch (event.key) {
            case 'Escape':
                if (this.isFilterable()) {
                    if (document.activeElement === this.listboxElement) {
                        return this.filterElement.focus();
                    }
                }
                this.collapseListbox('focusFieldButton');
                return;
            case 'Tab':
                if (this.shiftTabFromFilterListbox(event)) {
                    event.preventDefault();
                    return this.filterElement.focus();
                }
                else if (this.shiftTabFromExpandedFilterInput(event)) {
                    event.preventDefault();
                    return this.collapseListbox('focusFieldButton');
                }
                else {
                    this.collapseListbox('noFocusChange');
                }
                return;
            case 'ArrowDown':
                if (this.activeElementNotListbox()) {
                    event.preventDefault();
                    this.expanded = true;
                    setInitialActiveOption(this.listboxElement);
                }
                return;
            case 'Enter':
            case ' ':
                if (!this.expanded && !this.isFilterable()) {
                    setInitialActiveOption(this.listboxElement);
                }
                return;
        }
    }
    onInternallistboxoptionsupdated(event) {
        event.stopPropagation();
        forceUpdate(this.root);
    }
    onBlur(event) {
        this.stopPropagationOfInternalFocusEvents(event);
    }
    onFocus(event) {
        this.stopPropagationOfInternalFocusEvents(event);
    }
    onFocusout(event) {
        this.stopPropagationOfInternalFocusEvents(event);
    }
    onFocusin(event) {
        this.stopPropagationOfInternalFocusEvents(event);
    }
    onClickOutside() {
        this.collapseListbox('noFocusChange');
    }
    onMutation() {
        var _a;
        if (this.listboxElement) {
            return;
        }
        this.listboxElement = (_a = this.root) === null || _a === void 0 ? void 0 : _a.querySelector('gux-listbox');
        this.applyListboxEventListeners();
    }
    onInternalExpanded(event) {
        event.stopPropagation();
        this.guxexpanded.emit();
        if (this.listboxElement) {
            afterNextRender(() => {
                this.listboxElement.focus();
                if (this.isFilterable() && this.filterElement) {
                    this.filterElement.focus();
                }
            });
        }
    }
    onInternalCollapsed(event) {
        event.stopPropagation();
        this.guxcollapsed.emit();
    }
    connectedCallback() {
        var _a;
        this.listboxElement = (_a = this.root) === null || _a === void 0 ? void 0 : _a.querySelector('gux-listbox');
        if (this.listboxElement) {
            this.validateValue(this.value, this.listboxElement);
        }
    }
    async componentWillLoad() {
        trackComponent(this.root);
        this.i18n = await buildI18nForComponent(this.root, translationResources$1);
        onInputDisabledStateChange(this.root, () => {
            forceUpdate(this.root);
        });
    }
    componentDidLoad() {
        this.applyListboxEventListeners();
    }
    componentWillRender() {
        if (this.listboxElement) {
            this.validateValue(this.value, this.listboxElement);
            this.listboxElement.loading = this.loading;
            this.listboxElement.filterType = this.filterType;
            this.listboxElement.filter = this.filter;
        }
    }
    showTooltip() {
        var _a;
        void ((_a = this.truncateElement) === null || _a === void 0 ? void 0 : _a.setShowTooltip());
    }
    hideTooltip() {
        var _a;
        void ((_a = this.truncateElement) === null || _a === void 0 ? void 0 : _a.setHideTooltip());
    }
    validateValue(newValue, listboxElement) {
        if (newValue === undefined) {
            if (listboxElement) {
                listboxElement.value = newValue;
            }
            return;
        }
        const selectedListboxOptionElement = this.getOptionElementByValue(newValue);
        if (selectedListboxOptionElement) {
            listboxElement.value = newValue;
            return;
        }
    }
    applyListboxEventListeners() {
        var _a, _b;
        (_a = this.listboxElement) === null || _a === void 0 ? void 0 : _a.addEventListener('input', (event) => {
            event.stopPropagation();
            this.updateValue(event.target.value);
        });
        (_b = this.listboxElement) === null || _b === void 0 ? void 0 : _b.addEventListener('change', (event) => {
            event.stopPropagation();
        });
    }
    stopPropagationOfInternalFocusEvents(event) {
        if (this.root.contains(event.relatedTarget)) {
            return event.stopImmediatePropagation();
        }
    }
    isFilterable() {
        return this.filterType === 'starts-with' || this.filterType === 'custom';
    }
    get optionElements() {
        return getListOptions(this.listboxElement);
    }
    getOptionElementByValue(value) {
        return this.optionElements.find(optionElement => {
            return optionElement.value === value;
        });
    }
    fieldButtonClick() {
        this.expanded = !this.expanded;
    }
    filterInput(event) {
        event.stopPropagation();
        this.filter = this.filterElement.value;
    }
    shiftTabFromExpandedFilterInput(event) {
        return (event.shiftKey &&
            this.isFilterable() &&
            this.expanded &&
            !(document.activeElement === this.listboxElement));
    }
    shiftTabFromFilterListbox(event) {
        return (event.shiftKey &&
            this.isFilterable() &&
            document.activeElement === this.listboxElement);
    }
    activeElementNotListbox() {
        return document.activeElement !== this.listboxElement;
    }
    filterKeydown(event) {
        switch (event.key) {
            case 'ArrowDown':
                event.stopImmediatePropagation();
                event.preventDefault();
                this.listboxElement.focus();
                setInitialActiveOption(this.listboxElement);
                return;
            case 'Enter':
                void this.listboxElement.guxSelectActive();
                event.preventDefault();
                return;
        }
    }
    filterKeyup(event) {
        switch (event.key) {
            case ' ':
                event.preventDefault();
                return;
        }
    }
    collapseListbox(focusChange) {
        if (this.expanded) {
            this.expanded = false;
        }
        if (focusChange === 'focusFieldButton') {
            this.fieldButtonElement.focus();
        }
    }
    updateValue(newValue) {
        if (this.value !== newValue) {
            this.value = newValue;
            simulateNativeEvent(this.root, 'input');
            simulateNativeEvent(this.root, 'change');
        }
        this.collapseListbox('focusFieldButton');
    }
    getTypeaheadText(filter) {
        var _a;
        const filterLength = filter.length;
        if (filterLength > 0 && !this.loading) {
            const option = getSearchOption(this.listboxElement, filter);
            if (option && this.filterType !== 'custom') {
                //The text content needs to be trimmed as white space can occur around the textContent if options are populated asynchronously.
                const optionSlotTextContent = (_a = getOptionDefaultSlot(option)) === null || _a === void 0 ? void 0 : _a.textContent.trim();
                return optionSlotTextContent === null || optionSlotTextContent === void 0 ? void 0 : optionSlotTextContent.substring(filterLength);
            }
        }
        return '';
    }
    renderTargetDisplay() {
        const selectedListboxOptionElement = this.getOptionElementByValue(this.value);
        if (selectedListboxOptionElement) {
            return (h("div", { class: "gux-selected-option" }, this.renderSelectedItem(selectedListboxOptionElement)));
        }
        return (h("div", { class: "gux-placeholder" }, this.placeholder || this.i18n('noSelection')));
    }
    /**
     * Renders the selection display for the selected item. This function needs a branch to handle
     * each type defined in GuxDropdownOptionType
     *
     * @param item The selected item. This can be any of the node types defined in GuxDropdownOptionType.
     * @returns Rendered selection details.
     */
    renderSelectedItem(item) {
        const tag = item.tagName.toLowerCase();
        switch (tag) {
            case 'gux-option':
                return this.renderOption(item);
            case 'gux-option-icon':
                return this.renderIconOption(item);
            case 'gux-option-status-beta':
                return this.renderIconOption(item);
            default:
                // eslint-disable-next-line no-case-declarations
                const _exhaustiveCheck = tag;
                return _exhaustiveCheck;
        }
    }
    getOptionDefaultText(optionElement) {
        var _a;
        return (_a = getOptionDefaultSlot(optionElement)) === null || _a === void 0 ? void 0 : _a.textContent.trim();
    }
    renderOption(option) {
        return (h("gux-truncate", { ref: el => (this.truncateElement = el), dir: "auto" }, this.getOptionDefaultText(option)));
    }
    renderIconOption(iconOption) {
        let iconStyle = null;
        let optionText = iconOption.textContent;
        if (iconOption.iconColor !== null) {
            iconStyle = { color: iconOption.iconColor };
        }
        if (hasSlot(iconOption, 'subtext')) {
            optionText = this.getOptionDefaultText(iconOption);
        }
        return (h("span", { class: {
                'gux-selected-icon': true,
                'gux-icon-position-end': iconOption.iconPosition === 'end'
            } }, h("gux-icon", { "icon-name": iconOption.iconName, style: iconStyle, decorative: true, size: "small" }), h("gux-truncate", { ref: el => (this.truncateElement = el) }, optionText)));
    }
    renderFilterInputField() {
        if (this.expanded && this.isFilterable()) {
            return (h("div", { class: "gux-field gux-input-field", dir: "auto" }, h("div", { class: "gux-field-content" }, h("div", { class: "gux-filter" }, h("div", { class: "gux-filter-display" }, h("span", { class: "gux-filter-text" }, this.filter), h("span", { class: "gux-filter-suggestion" }, this.getTypeaheadText(this.filter))), h("div", { class: "input-and-dropdown-button" }, h("input", { onClick: this.fieldButtonClick.bind(this), class: "gux-filter-input", type: "text", "aria-label": this.i18n('filterResults'), ref: el => (this.filterElement = el), onInput: this.filterInput.bind(this), onKeyDown: this.filterKeydown.bind(this), onKeyUp: this.filterKeyup.bind(this), disabled: this.disabled }))))));
        }
    }
    renderPopup() {
        return (h("slot", { slot: "popup" }));
    }
    renderTarget() {
        return (h("div", { class: {
                'gux-target-container-expanded': this.expanded && this.isFilterable(),
                'gux-target-container-collapsed': !(this.expanded && this.isFilterable()),
                'gux-error': this.hasError,
                'gux-disabled': this.disabled
            }, slot: "target" }, this.renderFilterInputField(), h("button", { type: "button", class: "gux-field gux-field-button", disabled: calculateInputDisabledState(this.root), onClick: this.fieldButtonClick.bind(this), onFocusin: this.showTooltip.bind(this), onFocusout: this.hideTooltip.bind(this), ref: el => (this.fieldButtonElement = el), "aria-haspopup": "listbox", "aria-expanded": this.expanded.toString() }, this.renderTargetContent(), this.renderRadialLoading(), h("gux-icon", { class: {
                'gux-expand-icon': true
            }, "screenreader-text": this.i18n('dropdown'), size: "small", iconName: this.expanded
                ? 'custom/chevron-up-small-regular'
                : 'custom/chevron-down-small-regular' }))));
    }
    renderTargetContent() {
        if (!(this.expanded && this.isFilterable())) {
            return (h("div", { class: "gux-field-content" }, this.renderTargetDisplay()));
        }
    }
    renderRadialLoading() {
        if (this.loading && !this.expanded) {
            return (h("gux-radial-loading", { context: "input" }));
        }
    }
    render() {
        return (h("gux-popup", { key: '1489eb86035a07be578c9add3edf616e95061f16', expanded: this.expanded && (!this.loading || this.isFilterable()), disabled: this.disabled || (this.loading && !this.isFilterable()), exceedTargetWidth: this.exceedTargetWidth }, this.renderTarget(), this.renderPopup()));
    }
    static get delegatesFocus() { return true; }
    get root() { return getElement(this); }
    static get watchers() { return {
        "expanded": ["watchExpanded"],
        "value": ["watchValue"],
        "filter": ["handleFilter"],
        "disabled": ["watchDisabled"]
    }; }
};
__decorate([
    OnClickOutside({ triggerEvents: 'mousedown' })
], GuxDropdown.prototype, "onClickOutside", null);
__decorate([
    OnMutation({ childList: true, subtree: true })
], GuxDropdown.prototype, "onMutation", null);
GuxDropdown.style = guxDropdownCss;

/**
 * This list of valid option tags lets us derive both a union type for the tags
 * and a CSS selector for matching them in the DOM.
 */
const optionTypes = [
    'gux-option',
    'gux-option-icon',
    'gux-option-status-beta'
];
/**
 * Useful CSS selector generated from the list of option tags.
 */
const optionTagSelector = optionTypes.join(',');

const noMatches = "No matches";
const loading = "Loading...";
var translationResources = {
	noMatches: noMatches,
	loading: loading
};

const guxListboxCss = ":host{box-sizing:border-box;display:block;max-block-size:var(--gse-ui-menu-maxHeight);padding:var(--gse-ui-menu-padding);margin:0;overflow:visible auto;outline:none;background:var(--gse-ui-menu-backgroundColor);border:var(--gse-ui-menu-border-width) var(--gse-ui-menu-border-style) var(--gse-ui-menu-border-color);border-radius:var(--gse-ui-menu-borderRadius)}:host(:focus-visible){outline:var(--gse-semantic-focusOutline-md-borderWidth) solid var(--gse-ui-color-focus);outline-offset:var(--gse-semantic-focusOutline-offset)}.gux-message-container{display:flex;flex-direction:column;flex-wrap:nowrap;place-content:stretch center;align-items:center;text-align:center}.gux-message-container .gux-no-matches{box-sizing:border-box;block-size:var(--gse-ui-menu-option-height);padding-block:var(--gse-ui-dropdown-gap);font-family:var(--gse-ui-menu-option-label-active-text-fontFamily);font-size:var(--gse-ui-menu-option-label-active-text-fontSize);font-weight:var(--gse-ui-menu-option-label-active-text-fontWeight);line-height:var(--gse-ui-menu-option-label-active-text-lineHeight);color:var(--gse-ui-menu-option-label-foregroundColor)}";

const GuxListbox = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.internallistboxoptionsupdated = createEvent(this, "internallistboxoptionsupdated", 7);
        this.loading = false;
        this.filter = '';
        this.filterType = 'none';
        /* This is used by child components to keep track of this component's disabled state */
        this.disabled = false;
        this.selectedValues = [];
        this.listboxOptions = [];
    }
    onBlur() {
        clearActiveOptions(this.root);
    }
    onKeydown(event) {
        if (!hasActiveOption(this.root)) {
            event.preventDefault();
            setInitialActiveOption(this.root);
            return;
        }
        switch (event.key) {
            case 'Enter':
                event.preventDefault();
                actOnActiveOption(this.root, value => this.updateValue(value));
                return;
            case 'ArrowDown':
                event.preventDefault();
                if (hasNextOption(this.root)) {
                    event.stopPropagation();
                    setNextOptionActive(this.root);
                }
                else {
                    setFirstOptionActive(this.root);
                }
                return;
            case 'ArrowUp': {
                event.preventDefault();
                if (hasPreviousOption(this.root)) {
                    event.stopPropagation();
                    setPreviousOptionActive(this.root);
                }
                else {
                    setLastOptionActive(this.root);
                }
                return;
            }
            case 'Home': {
                event.preventDefault();
                setFirstOptionActive(this.root);
                return;
            }
            case 'End': {
                event.preventDefault();
                setLastOptionActive(this.root);
                return;
            }
            case ' ': {
                event.preventDefault();
                return;
            }
        }
        if (event.key.length === 1) {
            goToOption(this.root, event.key);
            return;
        }
    }
    onKeyup(event) {
        switch (event.key) {
            case ' ':
                actOnActiveOption(this.root, value => this.updateValue(value));
                return;
        }
    }
    onMousemove() {
        clearActiveOptions(this.root);
    }
    onClick(event) {
        // If it's got a value attribute, that's good enough.
        whenEventIsFrom(optionTagSelector, event, (option) => {
            onClickedOption(option, value => this.updateValue(value));
        });
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async guxSelectActive() {
        actOnActiveOption(this.root, value => this.updateValue(value));
    }
    setListboxOptions() {
        this.selectedValues = convertValueToArray(this.value);
        this.listboxOptions = getListOptions(this.root);
        this.internallistboxoptionsupdated.emit();
    }
    updateValue(newValue) {
        if (this.value !== newValue) {
            this.value = newValue;
        }
        simulateNativeEvent(this.root, 'input');
        simulateNativeEvent(this.root, 'change');
    }
    async componentWillLoad() {
        trackComponent(this.root);
        this.i18n = await buildI18nForComponent(this.root, translationResources);
        this.setListboxOptions();
    }
    componentWillRender() {
        this.listboxOptions.forEach(listboxOption => {
            listboxOption.selected = listboxOption.value === this.value;
            if (this.filterType !== 'custom' && this.filterType !== 'none') {
                listboxOption.filtered = !matchOption(listboxOption, this.filter);
            }
        });
        this.allListboxOptionsFiltered =
            this.listboxOptions.filter(listboxOption => !listboxOption.filtered)
                .length === 0;
    }
    // The slot must always be rendered so onSlotchange can be called
    renderHiddenSlot() {
        return (h("div", { hidden: true }, h("slot", { onSlotchange: () => this.setListboxOptions() })));
    }
    renderLoading() {
        return [
            h("div", { class: "gux-message-container" }, h("gux-radial-loading", { context: "modal" }), h("span", null, this.i18n('loading'))),
            this.renderHiddenSlot()
        ];
    }
    renderAllListboxOptionsFiltered() {
        return [
            h("div", { class: "gux-message-container" }, h("div", { class: "gux-no-matches" }, this.emptyMessage || this.i18n('noMatches'))),
            this.renderHiddenSlot()
        ];
    }
    render() {
        if (this.loading) {
            return this.renderLoading();
        }
        if (this.allListboxOptionsFiltered) {
            return this.renderAllListboxOptionsFiltered();
        }
        return (h(Host, { role: "listbox", tabindex: 0 }, h("slot", { onSlotchange: () => this.setListboxOptions() })));
    }
    get root() { return getElement(this); }
};
GuxListbox.style = guxListboxCss;

const guxOptionCss = ":host{box-sizing:border-box;display:flex;flex-direction:row;flex-wrap:nowrap;gap:var(--gse-ui-menu-option-gap);place-content:stretch center;align-items:center;block-size:var(--gse-ui-menu-option-height);padding:var(--gse-ui-menu-option-padding);font-family:var(--gse-ui-menu-option-label-default-text-fontFamily);font-size:var(--gse-ui-menu-option-label-default-text-fontSize);font-weight:var(--gse-ui-menu-option-label-default-text-fontWeight);line-height:var(--gse-ui-menu-option-label-default-text-lineHeight);color:var(--gse-ui-menu-option-label-foregroundColor);word-wrap:break-word;cursor:pointer}:host .gux-option-wrapper{inline-size:100%}:host .gux-slot-container{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host(.gux-disabled){pointer-events:none;cursor:default;opacity:var(--gse-ui-menu-option-disabled-opacity)}:host(.gux-selected){font-family:var(--gse-ui-menu-option-label-active-text-fontFamily);font-size:var(--gse-ui-menu-option-label-active-text-fontSize);font-weight:var(--gse-ui-menu-option-label-active-text-fontWeight);line-height:var(--gse-ui-menu-option-label-active-text-lineHeight);background:var(--gse-ui-menu-option-selected-backgroundColor)}:host(:active:not(:disabled)){font-family:var(--gse-ui-menu-option-label-active-text-fontFamily);font-size:var(--gse-ui-menu-option-label-active-text-fontSize);font-weight:var(--gse-ui-menu-option-label-active-text-fontWeight);line-height:var(--gse-ui-menu-option-label-active-text-lineHeight)}:host(.gux-active){outline:var(--gse-ui-menu-option-focus-border-width) var(--gse-ui-menu-option-focus-border-style) var(--gse-ui-menu-option-focus-border-color);outline-offset:-2px;border-radius:var(--gse-semantic-focusOutline-sm-borderRadius)}:host(.gux-show-subtext){place-content:stretch flex-start;block-size:auto}:host(.gux-show-subtext) .gux-option-wrapper{display:flex;flex-direction:column}:host(.gux-show-subtext) slot[name=subtext]::slotted(*){font-weight:var(--gse-ui-menu-option-label-default-text-fontWeight);color:var(--gse-ui-menu-groupedMenu-subtext-foregroundColor)}:host(:hover:not(:disabled)){background:var(--gse-ui-menu-option-hover-backgroundColor)}:host(.gux-filtered){display:none}";

const GuxOption = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.active = false;
        this.selected = false;
        this.disabled = false;
        this.filtered = false;
        this.hasSubtext = false;
    }
    handleActive(active) {
        var _a, _b;
        if (active) {
            void ((_a = this.truncateElement) === null || _a === void 0 ? void 0 : _a.setShowTooltip());
        }
        else {
            void ((_b = this.truncateElement) === null || _b === void 0 ? void 0 : _b.setHideTooltip());
        }
    }
    componentWillLoad() {
        this.root.id = this.root.id || randomHTMLId('gux-option');
        this.onSubtextChange();
    }
    onSubtextChange() {
        this.hasSubtext = hasSlot(this.root, 'subtext');
    }
    getAriaSelected() {
        if (this.disabled) {
            return false;
        }
        return this.selected ? 'true' : 'false';
    }
    hasDisabledParent() {
        const parentListbox = getClosestElement('gux-listbox', this.root);
        return parentListbox === null || parentListbox === void 0 ? void 0 : parentListbox.disabled;
    }
    render() {
        return (h(Host, { key: 'c2672c6cb5bf516a3495eea8357d3bc4c4c900da', role: "option", class: {
                'gux-active': this.active,
                'gux-disabled': this.disabled || this.hasDisabledParent(),
                'gux-filtered': this.filtered,
                'gux-selected': this.selected,
                'gux-show-subtext': this.hasSubtext
            }, "aria-selected": this.getAriaSelected(), "aria-disabled": this.disabled.toString() }, h("div", { key: 'b85bf4d463039f58f49ec2d6d18d2d1415403f32', class: "gux-option-wrapper" }, h("gux-truncate", { key: '18608184d2d7a77a8fd0018745f9a1b6a8a5fa80', "tooltip-placement": "right", ref: el => (this.truncateElement = el) }, h("slot", { key: '1b42a67570ad5b853612cbfce4481be09442aebd' })), h("slot", { key: '279602519fa45e83691133da63ef404ff014c43e', onSlotchange: () => this.onSubtextChange(), name: "subtext" }))));
    }
    get root() { return getElement(this); }
    static get watchers() { return {
        "active": ["handleActive"]
    }; }
};
GuxOption.style = guxOptionCss;

export { GuxDropdown as gux_dropdown, GuxListbox as gux_listbox, GuxOption as gux_option };
