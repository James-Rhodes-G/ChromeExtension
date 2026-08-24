import { r as registerInstance, c as createEvent, f as forceUpdate, h, a as getElement } from './index-xFL2agjT.js';
import { O as OnClickOutside } from './on-click-outside-VvhFhgll.js';
import { b as buildI18nForComponent } from './index-Dac2qHbK.js';
import { s as simulateNativeEvent } from './simulate-native-event-BMRf5pjV.js';
import { b as afterNextRender } from './after-next-render-Bg4q97BS.js';
import { t as trackComponent } from './usage-D2Q7fj4V.js';
import { O as OnMutation } from './on-mutation-CQXoeN9i.js';
import { s as setInitialActiveOption, b as getListOptions } from './gux-listbox.service-B_WlCjG2.js';
import { h as hasSlot } from './has-slot-qzV3vtOw.js';
import './get-closest-element-Cd4R0amv.js';

const filterResults = "Type to filter dropdown results";
const noSelection = "Select...";
const dropdown = "Dropdown";
var translationResources = {
	filterResults: filterResults,
	noSelection: noSelection,
	dropdown: dropdown
};

const guxInlineDropdownCss = ":host{display:inline-flex;inline-size:fit-content;min-inline-size:0;max-inline-size:100%}.gux-has-table-parent{position:relative;inset-inline-start:-8px}::slotted(gux-listbox){inline-size:fit-content}.gux-field,.gux-target-container-expanded{all:unset;box-sizing:border-box;display:inline-flex;flex-direction:row;flex-wrap:nowrap;place-content:stretch center;align-items:center;inline-size:100%;max-inline-size:100%;block-size:var(--gse-ui-formControl-input-textfield-height);font-family:var(--gse-ui-dataTableItems-inlineDropdown-label-fontFamily);font-size:var(--gse-ui-dataTableItems-inlineDropdown-label-fontSize);font-weight:var(--gse-ui-dataTableItems-inlineDropdown-label-fontWeight);line-height:var(--gse-ui-dataTableItems-inlineDropdown-label-lineHeight);cursor:pointer;background-color:inherit}.gux-target-container-expanded,.gux-target-container-collapsed .gux-field{padding-block:4px;padding-inline:8px}.gux-target-container-collapsed .gux-field-button:hover,.gux-target-container-expanded:hover{background-color:var(--gse-ui-dataTableItems-statusIndicator-hover)}.gux-field.gux-input-field{block-size:var(--gse-ui-dataTableItems-inlineDropdown-label-lineHeight)}.gux-field .gux-field-content{--gux-zindex-tooltip:3;display:inline-flex;flex:1 1 0;flex-direction:row;flex-wrap:nowrap;place-content:stretch flex-start;align-items:flex-start;min-inline-size:0;block-size:var(--gse-ui-dataTableItems-inlineDropdown-label-lineHeight)}.gux-field .gux-field-content .gux-filter,.gux-field .gux-field-content .gux-selected-option,.gux-field .gux-field-content .gux-placeholder{flex:1 1 auto;align-self:auto;order:0;padding:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.gux-field .gux-field-content .gux-placeholder{color:var(--gse-ui-dataTableItems-inlineDropdown-text)}.gux-field .gux-expand-icon{flex:0 0 auto;align-self:auto;order:0;padding-inline-start:var(--gse-ui-dataTableItems-inlineDropdown-gap);color:var(--gse-ui-dataTableItems-inlineDropdown-chevron-default)}.gux-target-container-expanded{background-color:var(--gse-ui-dataTableItems-inlineDropdown-active);border-radius:var(--gse-ui-dataTableItems-statusIndicator-borderRadius)}.gux-target-container-expanded:focus-visible{outline:var(--gse-ui-formControl-input-focus-border-width) var(--gse-ui-formControl-input-focus-border-style) var(--gse-ui-formControl-input-focus-border-color);outline-offset:var(--gse-semantic-focusOutline-offset)}.gux-target-container-expanded:focus-within:has(:focus-visible){outline:var(--gse-ui-formControl-input-focus-border-width) var(--gse-ui-formControl-input-focus-border-style) var(--gse-ui-formControl-input-focus-border-color);outline-offset:var(--gse-semantic-focusOutline-offset)}.gux-target-container-expanded .gux-filter-input{background-color:inherit;border:none}.gux-target-container-expanded .gux-filter-input:focus{outline:none;border:none}.gux-target-container-expanded .gux-field-button{inline-size:auto;block-size:var(--gse-ui-dataTableItems-inlineDropdown-label-lineHeight);margin:0;outline:none;background:inherit;border:none;box-shadow:none}.gux-target-container-expanded .gux-field-button:focus{outline:none}.gux-target-container-collapsed .gux-field-button{border-radius:var(--gse-ui-dataTableItems-statusIndicator-borderRadius)}.gux-target-container-collapsed .gux-field-button:focus-visible{outline:var(--gse-ui-formControl-input-focus-border-width) var(--gse-ui-formControl-input-focus-border-style) var(--gse-ui-formControl-input-focus-border-color);outline-offset:var(--gse-semantic-focusOutline-offset)}.gux-target-container-collapsed .gux-field-button:focus-within:has(:focus-visible){outline:var(--gse-ui-formControl-input-focus-border-width) var(--gse-ui-formControl-input-focus-border-style) var(--gse-ui-formControl-input-focus-border-color);outline-offset:var(--gse-semantic-focusOutline-offset)}::slotted(gux-listbox){outline:none;box-shadow:var(--gse-ui-menu-boxShadow)}.gux-selected-icon{display:flex;flex-direction:row;align-items:center}.gux-selected-icon.gux-icon-position-end{flex-direction:row-reverse}.gux-selected-icon gux-icon{padding-inline-end:var(--gse-ui-dataTableItems-inlineDropdown-gap)}.gux-status-indicator{display:inline-flex;gap:var(--gse-ui-dataTableItems-statusIndicator-gap);align-items:center}.gux-status-icon{display:inline-flex}.gux-status-icon::before{content:\"\"}.gux-status-icon-info::before{-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' %3E%3Cpath d='M6 0C7.59 0 9.12 0.629997 10.245 1.755C11.37 2.88 12 4.41 12 6C12 7.59 11.37 9.12 10.245 10.245C9.12 11.37 7.59 12 6 12C4.41 12 2.88 11.37 1.755 10.245C0.629997 9.12 0 7.59 0 6C0 4.41 0.629997 2.88 1.755 1.755C2.88 0.629997 4.41 0 6 0Z' /%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' %3E%3Cpath d='M6 0C7.59 0 9.12 0.629997 10.245 1.755C11.37 2.88 12 4.41 12 6C12 7.59 11.37 9.12 10.245 10.245C9.12 11.37 7.59 12 6 12C4.41 12 2.88 11.37 1.755 10.245C0.629997 9.12 0 7.59 0 6C0 4.41 0.629997 2.88 1.755 1.755C2.88 0.629997 4.41 0 6 0Z' /%3E%3C/svg%3E\");inline-size:var(--gse-ui-dataTableItems-statusIndicator-label-fontSize);block-size:var(--gse-ui-dataTableItems-statusIndicator-label-fontSize);background:var(--gse-ui-statusGlyph-information)}.gux-status-icon-warning::before{inline-size:var(--gse-ui-dataTableItems-statusIndicator-label-fontSize);block-size:var(--gse-ui-dataTableItems-statusIndicator-label-fontSize);-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' %3E%3Cpath d='M6.16516 0.749268C6.49521 0.749268 6.80275 0.921791 6.97527 1.21434L12.0386 9.8407C12.2111 10.1332 12.2111 10.4933 12.0386 10.7783C11.8735 11.0709 11.5585 11.2509 11.2285 11.2509H1.10186C0.764303 11.2509 0.456764 11.0709 0.291738 10.7783C0.126712 10.4858 0.126712 10.1257 0.291738 9.8407L5.35504 1.21434C5.52757 0.929292 5.8276 0.749268 6.16516 0.749268Z' /%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' %3E%3Cpath d='M6.16516 0.749268C6.49521 0.749268 6.80275 0.921791 6.97527 1.21434L12.0386 9.8407C12.2111 10.1332 12.2111 10.4933 12.0386 10.7783C11.8735 11.0709 11.5585 11.2509 11.2285 11.2509H1.10186C0.764303 11.2509 0.456764 11.0709 0.291738 10.7783C0.126712 10.4858 0.126712 10.1257 0.291738 9.8407L5.35504 1.21434C5.52757 0.929292 5.8276 0.749268 6.16516 0.749268Z' /%3E%3C/svg%3E\");background:var(--gse-ui-statusGlyph-neutral)}.gux-status-icon-error::before{inline-size:var(--gse-ui-dataTableItems-statusIndicator-label-fontSize);block-size:var(--gse-ui-dataTableItems-statusIndicator-label-fontSize);-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' %3E%3Cpath d='M0.236102 6.88C-0.0787008 6.33785 -0.0787008 5.66215 0.236102 5.12L2.36477 1.38C2.67957 0.837853 3.24922 0.5 3.87133 0.5H8.12867C8.75078 0.5 9.32043 0.837853 9.63523 1.38L11.7639 5.12C12.0787 5.66215 12.0787 6.33785 11.7639 6.88L9.63523 10.62C9.32043 11.1621 8.75078 11.5 8.12867 11.5H3.87133C3.24922 11.5 2.67957 11.1621 2.36477 10.62L0.236102 6.88Z' /%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' %3E%3Cpath d='M0.236102 6.88C-0.0787008 6.33785 -0.0787008 5.66215 0.236102 5.12L2.36477 1.38C2.67957 0.837853 3.24922 0.5 3.87133 0.5H8.12867C8.75078 0.5 9.32043 0.837853 9.63523 1.38L11.7639 5.12C12.0787 5.66215 12.0787 6.33785 11.7639 6.88L9.63523 10.62C9.32043 11.1621 8.75078 11.5 8.12867 11.5H3.87133C3.24922 11.5 2.67957 11.1621 2.36477 10.62L0.236102 6.88Z' /%3E%3C/svg%3E\");background:var(--gse-ui-statusGlyph-negative)}.gux-status-icon-success::before{inline-size:var(--gse-ui-dataTableItems-statusIndicator-label-fontSize);block-size:var(--gse-ui-dataTableItems-statusIndicator-label-fontSize);-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' %3E%3Cpath d='M6 0C7.59 0 9.12 0.629997 10.245 1.755C11.37 2.88 12 4.41 12 6C12 7.59 11.37 9.12 10.245 10.245C9.12 11.37 7.59 12 6 12C4.41 12 2.88 11.37 1.755 10.245C0.629997 9.12 0 7.59 0 6C0 4.41 0.629997 2.88 1.755 1.755C2.88 0.629997 4.41 0 6 0Z' /%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' %3E%3Cpath d='M6 0C7.59 0 9.12 0.629997 10.245 1.755C11.37 2.88 12 4.41 12 6C12 7.59 11.37 9.12 10.245 10.245C9.12 11.37 7.59 12 6 12C4.41 12 2.88 11.37 1.755 10.245C0.629997 9.12 0 7.59 0 6C0 4.41 0.629997 2.88 1.755 1.755C2.88 0.629997 4.41 0 6 0Z' /%3E%3C/svg%3E\");background:var(--gse-ui-statusGlyph-positive)}";

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
        this.required = false;
        this.expanded = false;
    }
    watchValue(newValue) {
        this.validateValue(newValue, this.listboxElement);
    }
    onKeydown(event) {
        switch (event.key) {
            case 'Escape':
                this.collapseListbox('focusFieldButton');
                return;
            case 'Tab':
                this.collapseListbox('noFocusChange');
                return;
            case 'ArrowDown':
                if (this.activeElementNotListbox()) {
                    event.preventDefault();
                    this.expanded = true;
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
    }
    componentDidLoad() {
        this.applyListboxEventListeners();
        this.applyTableStyle();
    }
    componentWillRender() {
        if (this.listboxElement) {
            this.validateValue(this.value, this.listboxElement);
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
    applyTableStyle() {
        var _a;
        if (((_a = this.root.parentElement) === null || _a === void 0 ? void 0 : _a.tagName.toLowerCase()) === 'td') {
            this.popupElement.classList.add('gux-has-table-parent');
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
    activeElementNotListbox() {
        return document.activeElement !== this.listboxElement;
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
                return this.renderStatusOption(item);
            default:
                // eslint-disable-next-line no-case-declarations
                const _exhaustiveCheck = tag;
                return _exhaustiveCheck;
        }
    }
    renderOption(option) {
        let optionText = option.textContent;
        if (hasSlot(option, 'subtext')) {
            const subtext = option.querySelector('[slot=subtext]');
            optionText = optionText.substring(0, optionText.length - subtext.textContent.length);
        }
        return (h("gux-truncate", { ref: el => (this.truncateElement = el), dir: "auto" }, optionText));
    }
    renderIconOption(iconOption) {
        let iconStyle = null;
        if (iconOption.iconColor !== null) {
            iconStyle = { color: iconOption.iconColor };
        }
        return (h("span", { class: {
                'gux-selected-icon': true,
                'gux-icon-position-end': iconOption.iconPosition === 'end'
            } }, h("gux-icon", { "icon-name": iconOption.iconName, style: iconStyle, decorative: true, size: "small" }), h("gux-truncate", { ref: el => (this.truncateElement = el) }, iconOption.textContent)));
    }
    renderStatusOption(statusOption) {
        const optionText = statusOption.textContent;
        return (h("div", { class: "gux-status-indicator" }, h("span", { class: `gux-status-icon gux-status-icon-${statusOption.accent}` }), h("div", { class: "gux-status-indicator-text" }, optionText)));
    }
    renderPopup() {
        return (h("slot", { slot: "popup" }));
    }
    renderTarget() {
        return (h("div", { class: {
                'gux-target-container-collapsed': true
            }, slot: "target" }, h("button", { type: "button", class: "gux-field gux-field-button", onClick: this.fieldButtonClick.bind(this), onFocusin: this.showTooltip.bind(this), onFocusout: this.hideTooltip.bind(this), ref: el => (this.fieldButtonElement = el), "aria-haspopup": "listbox", "aria-expanded": this.expanded.toString() }, this.renderTargetContent(), h("gux-icon", { class: {
                'gux-expand-icon': true
            }, "screenreader-text": this.i18n('dropdown'), size: "small", iconName: this.expanded
                ? 'custom/chevron-up-small-regular'
                : 'custom/chevron-down-small-regular' }))));
    }
    renderTargetContent() {
        return (h("div", { class: "gux-field-content" }, this.renderTargetDisplay()));
    }
    render() {
        return (h("gux-popup", { key: '1e1f41acc86df82fba60ef357891f96f083e8c8e', expanded: this.expanded, inline: true, ref: (el) => (this.popupElement = el) }, this.renderTarget(), this.renderPopup()));
    }
    static get delegatesFocus() { return true; }
    get root() { return getElement(this); }
    static get watchers() { return {
        "value": ["watchValue"]
    }; }
};
__decorate([
    OnClickOutside({ triggerEvents: 'mousedown' })
], GuxDropdown.prototype, "onClickOutside", null);
__decorate([
    OnMutation({ childList: true, subtree: true })
], GuxDropdown.prototype, "onMutation", null);
GuxDropdown.style = guxInlineDropdownCss;

export { GuxDropdown as gux_inline_dropdown_beta };
