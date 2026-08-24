'use strict';

var index = require('./index-BLhHoh_r.js');
var onClickOutside = require('./on-click-outside-CrJioxOT.js');
var index$1 = require('./index-QInGO-Pu.js');
var simulateNativeEvent = require('./simulate-native-event-_MPnVmRN.js');
var afterNextRender = require('./after-next-render-CeY_1Kbz.js');
var onInputDisabledStateChange = require('./on-input-disabled-state-change-CSLxaSas.js');
var usage = require('./usage-v50bi18B.js');
var guxListbox_service = require('./gux-listbox.service-Dvz43AV2.js');
var onMutation = require('./on-mutation-BoagtLIt.js');
require('./get-closest-element-CfyZl7i7.js');

const textInputResults = "Type to filter dropdown results";
const noSelection = "Select...";
const dropdown = "Dropdown";
const numberSelected = "{numberSelected} selected";
const pressEnterToCreate = "Press Enter to create new option, {textInputValue}";
var translationResources = {
	textInputResults: textInputResults,
	noSelection: noSelection,
	dropdown: dropdown,
	numberSelected: numberSelected,
	pressEnterToCreate: pressEnterToCreate
};

const guxDropdownMultiCss = ":host{box-sizing:border-box;color:var(--gse-ui-formControl-input-populatedColor)}.gux-dropdown-container{position:relative}.gux-error.gux-target-container-collapsed .gux-field-button,.gux-error.gux-target-container-expanded{border:var(--gse-ui-formControl-input-error-border-width) var(--gse-ui-formControl-input-error-border-style) var(--gse-ui-formControl-input-error-border-color)}.gux-disabled.gux-target-container-collapsed .gux-field-button,.gux-disabled.gux-target-container-expanded{user-select:none;border:var(--gse-ui-formControl-input-disabled-border-width) var(--gse-ui-formControl-input-disabled-border-style) var(--gse-ui-formControl-input-disabled-border-color)}.gux-field,.gux-target-container-expanded{all:unset;box-sizing:border-box;display:flex;flex-direction:row;flex-wrap:nowrap;place-content:stretch center;align-items:center;inline-size:100%;block-size:var(--gse-ui-formControl-input-textfield-height);font-family:var(--gse-ui-formControl-input-contentText-fontFamily);font-size:var(--gse-ui-formControl-input-contentText-fontSize);font-weight:var(--gse-ui-formControl-input-contentText-fontWeight);line-height:var(--gse-ui-formControl-input-contentText-lineHeight);cursor:pointer;background-color:var(--gse-ui-formControl-input-backgroundColor)}.gux-target-container-expanded,.gux-target-container-collapsed .gux-field{padding:var(--gse-ui-formControl-input-padding)}.gux-target-container-collapsed .gux-field-button:hover,.gux-target-container-expanded:hover{border:var(--gse-ui-formControl-input-hover-border-width) var(--gse-ui-formControl-input-hover-border-style) var(--gse-ui-formControl-input-hover-border-color)}.gux-field.gux-input-field{block-size:var(--gse-ui-formControl-input-contentText-lineHeight)}.gux-field .gux-field-content{position:relative;display:flex;flex:1 1 0;flex-direction:row;flex-wrap:nowrap;place-content:stretch flex-start;align-items:flex-start;min-inline-size:0;block-size:var(--gse-ui-formControl-input-contentText-lineHeight)}.gux-field .gux-field-content .gux-filter,.gux-field .gux-field-content .gux-selected-option,.gux-field .gux-field-content .gux-placeholder{flex:1 1 auto;align-self:auto;order:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gux-field .gux-field-content .gux-filter .gux-sr-only:not(:focus):not(:active),.gux-field .gux-field-content .gux-selected-option .gux-sr-only:not(:focus):not(:active),.gux-field .gux-field-content .gux-placeholder .gux-sr-only:not(:focus):not(:active){position:absolute;width:1px;height:1px;overflow:hidden;white-space:nowrap;clip:rect(0 0 0 0);clip-path:inset(50%)}.gux-field .gux-field-content .gux-filter{position:relative;block-size:100%;padding-inline-start:0}.gux-field .gux-field-content .gux-filter .gux-filter-input{all:unset;inline-size:100%;color:transparent;caret-color:var(--gse-ui-formControl-input-populatedColor)}.gux-field .gux-field-content .gux-filter .gux-filter-input:placeholder-shown{text-overflow:ellipsis}.gux-field .gux-field-content .gux-filter .gux-filter-display{white-space:pre}.gux-field .gux-field-content .gux-filter .gux-filter-display .gux-filter-text{color:var(--gse-ui-formControl-input-populatedColor)}.gux-field .gux-field-content .gux-filter .gux-filter-display .gux-filter-suggestion{color:var(--gse-ui-formControl-input-suggestionColor)}.gux-field .gux-field-content .gux-filter .gux-filter-input,.gux-field .gux-field-content .gux-filter .gux-filter-display{position:absolute}.gux-field .gux-field-content .gux-placeholder{color:var(--gse-ui-formControl-input-placeholderColor)}.gux-field .gux-expand-icon{flex:0 0 auto;align-self:auto;order:0;padding-inline-start:var(--gse-ui-dropdown-gap);color:var(--gse-ui-formControl-input-inputIcon-iconEndColor)}.gux-target-container-expanded{border:var(--gse-ui-formControl-input-active-border-width) var(--gse-ui-formControl-input-active-border-style) var(--gse-ui-formControl-input-active-border-color);border-radius:var(--gse-ui-formControl-input-borderRadius)}.gux-target-container-expanded:focus-visible{outline:var(--gse-semantic-focusOutline-md-borderWidth) solid var(--gse-semantic-border-focus);outline-offset:var(--gse-semantic-focusOutline-offset)}.gux-target-container-expanded:focus-within:has(:focus-visible){outline:var(--gse-semantic-focusOutline-md-borderWidth) solid var(--gse-semantic-border-focus);outline-offset:var(--gse-semantic-focusOutline-offset)}.gux-target-container-expanded .gux-filter-input{background-color:inherit;border:none}.gux-target-container-expanded .gux-filter-input:focus{outline:none;border:none}.gux-target-container-expanded .gux-field-button{inline-size:auto;block-size:var(--gse-ui-formControl-input-contentText-lineHeight);margin:0;outline:none;background:inherit;border:none;box-shadow:none}.gux-target-container-expanded .gux-field-button:focus{outline:none}.gux-target-container-collapsed .gux-field-button{border:var(--gse-ui-formControl-input-default-border-width) var(--gse-ui-formControl-input-default-border-style) var(--gse-ui-formControl-input-default-border-color);border-radius:var(--gse-ui-formControl-input-borderRadius)}.gux-target-container-collapsed .gux-field-button:focus-visible{outline:var(--gse-semantic-focusOutline-md-borderWidth) solid var(--gse-semantic-border-focus);outline-offset:var(--gse-semantic-focusOutline-offset)}.gux-target-container-collapsed .gux-field-button:focus-within:has(:focus-visible){outline:var(--gse-semantic-focusOutline-md-borderWidth) solid var(--gse-semantic-border-focus);outline-offset:var(--gse-semantic-focusOutline-offset)}.gux-listbox-container{box-sizing:border-box;margin:0}";

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
const GuxDropdownMulti = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.guxcreateoption = index.createEvent(this, "guxcreateoption", 7);
        this.guxexpanded = index.createEvent(this, "guxexpanded", 7);
        this.guxcollapsed = index.createEvent(this, "guxcollapsed", 7);
        this.guxfilter = index.createEvent(this, "guxfilter", 7);
        this.disabled = false;
        this.required = false;
        this.loading = false;
        /**
         * Override default filtering behavior
         */
        this.filterType = 'none';
        this.hasError = false;
        /**
         * allows dropdown popup to be wider than input
         * defaults to fitting content if width is not specified for listbox
         * default min-width is set to width of input
         */
        this.exceedTargetWidth = false;
        this.hasCreate = false;
        this.expanded = false;
        this.textInput = '';
    }
    onMutation() {
        var _a;
        if (this.listboxElement) {
            return;
        }
        this.listboxElement = (_a = this.root) === null || _a === void 0 ? void 0 : _a.querySelector('gux-listbox-multi');
        this.applyListboxEventListeners();
    }
    /**
     * Listens for expanded event emitted by gux-popup.
     */
    onInternalExpanded(event) {
        event.stopPropagation();
        this.guxexpanded.emit();
    }
    /**
     * Listens for collapsed event emitted by gux-popup.
     */
    onInternalCollapsed(event) {
        event.stopPropagation();
        this.guxcollapsed.emit();
    }
    focusSelectedItemAfterRender(expanded) {
        if (expanded && this.listboxElement) {
            afterNextRender.afterNextRender(() => {
                if (this.hasTextInput()) {
                    this.textInputElement.focus();
                }
                else {
                    this.listboxElement.focus();
                }
            });
        }
        if (!expanded) {
            this.textInput = '';
        }
    }
    watchDisabled(disabled) {
        if (disabled) {
            this.expanded = false;
        }
    }
    watchValue(newValue) {
        this.validateValue(newValue, this.listboxElement);
    }
    handleFilter(filter) {
        this.guxfilter.emit(filter);
    }
    /**
     * Returns an array of the selected values
     */
    getSelectedValues() {
        return Promise.resolve(guxListbox_service.convertValueToArray(this.value));
    }
    onKeydown(event) {
        switch (event.key) {
            case 'Escape':
                if (this.hasTextInput()) {
                    if (document.activeElement === this.listboxElement) {
                        return this.textInputElement.focus();
                    }
                }
                this.collapseListbox('focusFieldButton');
                return;
            case 'Tab':
                if (this.shiftTabFromFilterListbox(event)) {
                    event.preventDefault();
                    return this.textInputElement.focus();
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
                    guxListbox_service.setInitialActiveOption(this.listboxElement);
                }
                return;
            case 'Enter':
                if (this.canCreateNewOption() && this.isActiveElement()) {
                    this.emitCreateOption();
                }
                if (!this.expanded && !this.isFilterable()) {
                    guxListbox_service.setInitialActiveOption(this.listboxElement);
                }
                return;
            case ' ':
                if (!this.expanded && !this.isFilterable()) {
                    guxListbox_service.setInitialActiveOption(this.listboxElement);
                }
                return;
        }
    }
    /**
     * force update when slotted gux-listbox-multi listbox options change
     */
    onInternallistboxoptionsupdated(event) {
        event.stopPropagation();
        requestAnimationFrame(() => {
            requestAnimationFrame(() => index.forceUpdate(this.root));
        });
    }
    /**
     * clear selected options when gux-dropdown-multi-tag emits event
     */
    onClearselected(event) {
        event.stopPropagation();
        this.updateValue(undefined);
        if (this.listboxElement) {
            this.listboxElement.value = undefined;
        }
        this.validateValue(this.value, this.listboxElement);
        this.fieldButtonElement.focus();
    }
    /**
     * emit guxcreateoption event when gux-create-option emits create event
     */
    onCreatenewoption(event) {
        event.stopPropagation();
        this.emitCreateOption();
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
    connectedCallback() {
        var _a;
        this.listboxElement = (_a = this.root) === null || _a === void 0 ? void 0 : _a.querySelector('gux-listbox-multi');
        if (this.listboxElement) {
            this.validateValue(this.value, this.listboxElement);
            this.hasCreate = !!this.root.querySelector('gux-create-option');
        }
    }
    async componentWillLoad() {
        usage.trackComponent(this.root);
        this.i18n = await index$1.buildI18nForComponent(this.root, translationResources);
        onInputDisabledStateChange.onInputDisabledStateChange(this.root, () => {
            index.forceUpdate(this.root);
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
            this.listboxElement.textInput = this.textInput;
        }
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
        this.value = undefined;
    }
    hasTextInput() {
        return this.isFilterable() || this.hasCreate;
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
    isFilterable() {
        return this.filterType === 'custom' || this.filterType === 'starts-with';
    }
    stopPropagationOfInternalFocusEvents(event) {
        if (this.root.contains(event.relatedTarget)) {
            return event.stopImmediatePropagation();
        }
    }
    getOptionElementByValue(value) {
        const listboxOptionElements = Array.from(this.root.querySelectorAll('gux-option-multi'));
        const values = guxListbox_service.convertValueToArray(value);
        return listboxOptionElements.filter(element => values.includes(element.value));
    }
    fieldButtonClick() {
        this.expanded = !this.expanded;
    }
    fieldButtonInputClick() {
        if (!this.expanded) {
            this.expanded = !this.expanded;
        }
    }
    filterInput(event) {
        event.stopPropagation();
        this.textInput = this.textInputElement.value;
    }
    shiftTabFromExpandedFilterInput(event) {
        return (event.shiftKey &&
            this.hasTextInput() &&
            this.expanded &&
            !(document.activeElement === this.listboxElement));
    }
    shiftTabFromFilterListbox(event) {
        return (event.shiftKey &&
            this.hasTextInput() &&
            document.activeElement === this.listboxElement);
    }
    emitCreateOption() {
        this.guxcreateoption.emit(this.textInput);
        this.textInput = '';
        this.textInputElement.value = '';
    }
    /**
     * check if able to create new option from text input value
     */
    canCreateNewOption() {
        return (this.hasCreate && this.textInput && !this.listboxElement.hasExactMatch);
    }
    isActiveElement() {
        return document.activeElement === this.root;
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
                guxListbox_service.setInitialActiveOption(this.listboxElement);
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
            simulateNativeEvent.simulateNativeEvent(this.root, 'input');
            simulateNativeEvent.simulateNativeEvent(this.root, 'change');
        }
    }
    getTypeaheadText(textInput) {
        var _a;
        const textInputLength = textInput.length;
        if (textInputLength > 0 && !this.loading) {
            const option = guxListbox_service.getSearchOption(this.listboxElement, textInput);
            if (option && this.filterType !== 'custom') {
                const optionSlotTextContent = (_a = guxListbox_service.getOptionDefaultSlot(option)) === null || _a === void 0 ? void 0 : _a.textContent.trim();
                return optionSlotTextContent === null || optionSlotTextContent === void 0 ? void 0 : optionSlotTextContent.substring(textInputLength);
            }
            return '';
        }
    }
    renderTargetDisplay() {
        return (index.h("div", { class: "gux-placeholder" }, this.getSrSelectedText(), this.getSelectedOptionText() ||
            this.placeholder ||
            this.i18n('noSelection')));
    }
    getSelectedOptionText() {
        const selectedElementString = this.getSelectedOptionValueString();
        return selectedElementString
            ? [
                selectedElementString,
                index.h("div", { class: "gux-sr-only" }, this.placeholder)
            ]
            : false;
    }
    getSelectedOptionValueString() {
        return this.getOptionElementByValue(this.value)
            .map(option => {
            var _a;
            return (_a = guxListbox_service.getOptionDefaultSlot(option)) === null || _a === void 0 ? void 0 : _a.textContent.trim();
        })
            .join(', ');
    }
    getSrSelectedText() {
        const selectedListboxOptionElement = this.getOptionElementByValue(this.value);
        if (selectedListboxOptionElement.length) {
            return (index.h("span", { class: "gux-sr-only" }, this.i18n('numberSelected', {
                numberSelected: selectedListboxOptionElement.length.toString()
            })));
        }
    }
    getInputAriaLabel() {
        return this.canCreateNewOption() && this.isActiveElement()
            ? this.i18n('pressEnterToCreate', { textInputValue: this.textInput })
            : this.i18n('textInputResults');
    }
    renderTag() {
        const selectedValues = guxListbox_service.convertValueToArray(this.value);
        if (selectedValues.length) {
            return (index.h("gux-dropdown-multi-tag", { disabled: this.disabled, "number-selected": selectedValues.length }));
        }
    }
    renderFilterInputField() {
        if (this.expanded && this.hasTextInput()) {
            return (index.h("div", { class: "gux-field gux-input-field" }, index.h("div", { class: "gux-field-content" }, index.h("div", { class: "gux-filter" }, index.h("div", { class: "gux-filter-display" }, index.h("span", { class: "gux-filter-text" }, this.textInput), index.h("span", { class: "gux-filter-suggestion" }, this.getTypeaheadText(this.textInput))), index.h("div", { class: "input-and-dropdown-button" }, index.h("input", { onClick: this.fieldButtonInputClick.bind(this), placeholder: this.getSelectedOptionValueString() ||
                    this.placeholder ||
                    this.i18n('noSelection'), class: "gux-filter-input", type: "text", "aria-label": this.getInputAriaLabel(), ref: el => (this.textInputElement = el), onInput: this.filterInput.bind(this), onKeyDown: this.filterKeydown.bind(this), onKeyUp: this.filterKeyup.bind(this), disabled: this.disabled }))))));
        }
    }
    renderPopup() {
        return (index.h("div", { slot: "popup", class: "gux-listbox-container" }, index.h("slot", null)));
    }
    renderTarget() {
        return (index.h("div", { class: {
                'gux-target-container': true,
                'gux-target-container-expanded': this.expanded && this.hasTextInput(),
                'gux-target-container-collapsed': !(this.expanded && this.hasTextInput()),
                'gux-error': this.hasError,
                'gux-disabled': this.disabled
            }, slot: "target" }, this.renderFilterInputField(), index.h("button", { type: "button", class: "gux-field gux-field-button", disabled: this.disabled, onClick: this.fieldButtonClick.bind(this), ref: el => (this.fieldButtonElement = el), "aria-haspopup": "listbox", "aria-expanded": this.expanded.toString() }, this.renderTargetContent(), this.renderTag(), this.renderRadialLoading(), index.h("gux-icon", { class: {
                'gux-expand-icon': true
            }, size: "small", "screenreader-text": this.i18n('dropdown'), iconName: "custom/chevron-down-small-regular" }))));
    }
    renderTargetContent() {
        if (!(this.expanded && this.hasTextInput())) {
            return (index.h("div", { class: "gux-field-content" }, this.renderTargetDisplay()));
        }
    }
    renderRadialLoading() {
        if (this.loading && !this.expanded) {
            return (index.h("gux-radial-loading", { context: "input" }));
        }
    }
    render() {
        return [
            index.h("div", { key: '21470eb5abc8ce97d749c5b4199c97c3209b63d4', class: "gux-dropdown-container" }, index.h("gux-popup", { key: 'a46922d1410cd946f8a8c4d873dfb26fe61de9c3', expanded: this.expanded && (!this.loading || this.isFilterable()), disabled: this.disabled || (this.loading && !this.isFilterable()), exceedTargetWidth: this.exceedTargetWidth }, this.renderTarget(), this.renderPopup()))
        ];
    }
    static get delegatesFocus() { return true; }
    get root() { return index.getElement(this); }
    static get watchers() { return {
        "expanded": ["focusSelectedItemAfterRender"],
        "disabled": ["watchDisabled"],
        "value": ["watchValue"],
        "textInput": ["handleFilter"]
    }; }
};
__decorate([
    onMutation.OnMutation({ childList: true, subtree: true })
], GuxDropdownMulti.prototype, "onMutation", null);
__decorate([
    onClickOutside.OnClickOutside({ triggerEvents: 'mousedown' })
], GuxDropdownMulti.prototype, "onClickOutside", null);
GuxDropdownMulti.style = guxDropdownMultiCss;

exports.gux_dropdown_multi = GuxDropdownMulti;
