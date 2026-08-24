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
import { afterNextRender } from "../../../utils/dom/after-next-render";
import { trackComponent } from "../../../utils/tracking/usage";
import { OnMutation } from "../../../utils/decorator/on-mutation";
import translationResources from "./i18n/en.json";
import { getListOptions, setInitialActiveOption } from "../../stable/gux-listbox/gux-listbox.service";
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
    static get is() { return "gux-inline-dropdown-beta"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-inline-dropdown.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-inline-dropdown.css"]
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
            }
        };
    }
    static get states() {
        return {
            "expanded": {}
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
            }];
    }
    static get elementRef() { return "root"; }
    static get watchers() {
        return [{
                "propName": "value",
                "methodName": "watchValue"
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
