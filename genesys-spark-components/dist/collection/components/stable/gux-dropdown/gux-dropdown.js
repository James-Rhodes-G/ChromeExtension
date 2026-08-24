var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { forceUpdate, h } from "@stencil/core";
import { OnClickOutside } from "../../../utils/decorator/on-click-outside";
import { buildI18nForComponent } from "../../../i18n";
import simulateNativeEvent from "../../../utils/dom/simulate-native-event";
import { calculateInputDisabledState } from "../../../utils/dom/calculate-input-disabled-state";
import { onInputDisabledStateChange } from "../../../utils/dom/on-input-disabled-state-change";
import { afterNextRender } from "../../../utils/dom/after-next-render";
import { trackComponent } from "../../../utils/tracking/usage";
import { OnMutation } from "../../../utils/decorator/on-mutation";
import translationResources from "./i18n/en.json";
import { getSearchOption, getListOptions, setInitialActiveOption, getOptionDefaultSlot } from "../gux-listbox/gux-listbox.service";
import { hasSlot } from "../../../utils/dom/has-slot";
/**
 * Our Dropdown component. In the most basic case, it's used with `gux-option` to give users
 * a list of text options to select from, but other types of options with different appearance
 * can be created by creating a new component and adding it to `validOptionTags` list in
 * gux-dropdown-types.ts, then following the resulting compiler errors.
 *
 * @slot - for a gux-listbox containing ValidDropdownOption children
 */
export class GuxDropdown {
    constructor() {
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
        this.i18n = await buildI18nForComponent(this.root, translationResources);
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
    static get is() { return "gux-dropdown"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-dropdown.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-dropdown.css"]
        };
    }
    static get properties() {
        return {
            "value": {
                "type": "string",
                "attribute": "value",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "disabled": {
                "type": "boolean",
                "attribute": "disabled",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "required": {
                "type": "boolean",
                "attribute": "required",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "loading": {
                "type": "boolean",
                "attribute": "loading",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "placeholder": {
                "type": "string",
                "attribute": "placeholder",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "filterType": {
                "type": "string",
                "attribute": "filter-type",
                "mutable": false,
                "complexType": {
                    "original": "GuxFilterTypes",
                    "resolved": "\"custom\" | \"none\" | \"starts-with\"",
                    "references": {
                        "GuxFilterTypes": {
                            "location": "import",
                            "path": "./gux-dropdown.types",
                            "id": "src/components/stable/gux-dropdown/gux-dropdown.types.ts::GuxFilterTypes"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'none'"
            },
            "hasError": {
                "type": "boolean",
                "attribute": "has-error",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "exceedTargetWidth": {
                "type": "boolean",
                "attribute": "exceed-target-width",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "allows dropdown popup to be wider than input\ndefaults to fitting content if width is not specified for listbox\ndefault min-width is set to width of input"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "expanded": {},
            "filter": {}
        };
    }
    static get events() {
        return [{
                "method": "guxexpanded",
                "name": "guxexpanded",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "guxcollapsed",
                "name": "guxcollapsed",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "guxfilter",
                "name": "guxfilter",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "root"; }
    static get watchers() {
        return [{
                "propName": "expanded",
                "methodName": "watchExpanded"
            }, {
                "propName": "value",
                "methodName": "watchValue"
            }, {
                "propName": "filter",
                "methodName": "handleFilter"
            }, {
                "propName": "disabled",
                "methodName": "watchDisabled"
            }];
    }
    static get listeners() {
        return [{
                "name": "keydown",
                "method": "onKeydown",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "internallistboxoptionsupdated",
                "method": "onInternallistboxoptionsupdated",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "blur",
                "method": "onBlur",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "focus",
                "method": "onFocus",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "focusout",
                "method": "onFocusout",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "focusin",
                "method": "onFocusin",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "internalexpanded",
                "method": "onInternalExpanded",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "internalcollapsed",
                "method": "onInternalCollapsed",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
__decorate([
    OnClickOutside({ triggerEvents: 'mousedown' })
], GuxDropdown.prototype, "onClickOutside", null);
__decorate([
    OnMutation({ childList: true, subtree: true })
], GuxDropdown.prototype, "onMutation", null);
