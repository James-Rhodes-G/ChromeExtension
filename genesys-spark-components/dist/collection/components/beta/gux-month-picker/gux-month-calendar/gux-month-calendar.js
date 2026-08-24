import { h } from "@stencil/core";
import { buildI18nForComponent, getDesiredLocale } from "../../../../i18n";
import * as sparkIntl from "../../../../genesys-spark-utils/intl";
// Remove with this ticket https://inindca.atlassian.net/browse/COMUI-2598
import { useRegionalDates } from "../../../../i18n/use-regional-dates";
import simulateNativeEvent from "../../../../utils/dom/simulate-native-event";
import { afterNextRender } from "../../../../utils/dom/after-next-render";
import { getISOYearMonth, getCurrentISOYearMonth, getYearMonthObject } from "../../../../utils/date/year-month-values";
import translationResources from "./i18n/en.json";
export class GuxMonthCalendar {
    constructor() {
        /**
         * Controls hiding and showing the month-calendar
         */
        this.expanded = true;
    }
    onValueUpdate(newValue) {
        const { year } = getYearMonthObject(newValue);
        this.year = year;
    }
    /**
     * Focus a month
     */
    // eslint-disable-next-line @typescript-eslint/require-await
    async guxFocus(iSOYearMonth) {
        this.expanded = true;
        iSOYearMonth = iSOYearMonth || getCurrentISOYearMonth();
        const { year } = getYearMonthObject(iSOYearMonth);
        this.year = year;
        afterNextRender(() => {
            const target = this.root.shadowRoot.querySelector(`gux-month-list-item[value="${iSOYearMonth}"]`);
            if (target) {
                target.focus();
            }
        });
    }
    onKeyDown(event) {
        switch (event.key) {
            case 'Tab':
                if (event.shiftKey) {
                    return;
                }
                if (this.nextYearElement.matches(':focus-visible')) {
                    this.focusSelectedMonth();
                    event.preventDefault();
                }
                else if (this.previousYearElement.matches(':focus-visible') &&
                    this.nextYearElement.disabled) {
                    this.focusSelectedMonth();
                    event.preventDefault();
                }
                break;
        }
    }
    focusSelectedMonth() {
        const monthElement = this.root.shadowRoot.querySelector(`gux-month-list-item[value="${this.previewValue}"]`);
        if (monthElement && monthElement.matches(':focus-visible')) {
            monthElement === null || monthElement === void 0 ? void 0 : monthElement.focus();
        }
        else {
            // Focus the first month that is not disabled
            const children = this.root.shadowRoot.querySelectorAll(`gux-month-list-item`);
            const monthElement = Array.from(children).find(a => !a.disabled);
            monthElement === null || monthElement === void 0 ? void 0 : monthElement.focus();
        }
    }
    nextYearElementOnBlur(event) {
        // If the user hits the next year button and the next year button becomes disabled due
        // to reaching the max date boundary then we want to move focus to the first non-disabled month
        const nextYearElement = event.target;
        if (nextYearElement.disabled && !event.relatedTarget) {
            this.focusSelectedMonth();
            event.preventDefault();
        }
    }
    async componentWillLoad() {
        this.i18n = await buildI18nForComponent(this.root, translationResources);
        if (useRegionalDates()) {
            this.locale = sparkIntl.determineDisplayLocale(this.root);
        }
        else {
            this.locale = getDesiredLocale(this.root);
        }
        if (this.value) {
            this.year = getYearMonthObject(this.value).year;
            this.previewValue = this.value;
        }
        else {
            this.year = getYearMonthObject(getCurrentISOYearMonth()).year;
        }
    }
    updateValue(value) {
        this.value = value;
        this.previewValue = this.value;
        simulateNativeEvent(this.root, 'input');
        simulateNativeEvent(this.root, 'change');
    }
    isOutOfBounds(value) {
        return (this.max && this.max < value) || (this.min && this.min > value);
    }
    onMonthClick(value) {
        if (this.isOutOfBounds(value)) {
            return;
        }
        this.updateValue(value);
    }
    isCurrentMonth(month) {
        return (getYearMonthObject(getCurrentISOYearMonth()).year == this.year &&
            getYearMonthObject(getCurrentISOYearMonth()).month == month);
    }
    getMonthAriaLabel(value) {
        const { year, month } = getYearMonthObject(value);
        return new Date(Number(year), Number(month) - 1).toLocaleDateString(this.locale, { year: 'numeric', month: 'long' });
    }
    getYearLabel(year) {
        return new Date(Number(year), 5).toLocaleDateString(this.locale, {
            year: 'numeric'
        });
    }
    isSelectedMonth(value) {
        return value === this.value;
    }
    isAriaSelectedMonth(value) {
        if (this.isSelectedMonth(value)) {
            return 'true';
        }
        return false;
    }
    changeYear(increment) {
        this.year = (parseInt(this.year) + increment).toString();
        if (this.value) {
            // Update preview value
            const month = getYearMonthObject(this.value).month;
            const value = getISOYearMonth(this.year, month);
            this.previewValue = value;
        }
    }
    isPreviousYearLessThanMinYear(year, minISOYearMonth) {
        return ((parseInt(year) - 1).toString() <
            (minISOYearMonth && getYearMonthObject(minISOYearMonth).year));
    }
    isNextYearGreaterThanMaxYear(year, maxISOYearMonth) {
        return ((parseInt(year) + 1).toString() >
            (maxISOYearMonth && getYearMonthObject(maxISOYearMonth).year));
    }
    getMonthShortName(year, month) {
        return new Date(Number(year), Number(month) - 1).toLocaleDateString(this.locale, { month: 'short' });
    }
    renderHeader() {
        return (h("div", { class: "gux-year-header" }, h("button", { type: "button", class: "gux-year-change", onClick: () => this.changeYear(-1), disabled: this.isPreviousYearLessThanMinYear(this.year, this.min), ref: (el) => (this.previousYearElement = el) }, h("gux-icon", { "icon-name": "custom/chevron-left-small-regular", decorative: true, size: "small" }), h("gux-screen-reader-beta", null, this.i18n('changeYear', {
            currentYear: parseInt(this.year),
            changeYear: parseInt(this.year) - 1
        }))), h("div", { "data-testid": "year-label" }, this.getYearLabel(this.year)), h("button", { type: "button", class: "gux-year-change", onClick: () => this.changeYear(1), disabled: this.isNextYearGreaterThanMaxYear(this.year, this.max), ref: (el) => (this.nextYearElement = el), onBlur: this.nextYearElementOnBlur.bind(this) }, h("gux-icon", { "icon-name": "custom/chevron-right-small-regular", decorative: true, size: "small" }), h("gux-screen-reader-beta", null, this.i18n('changeYear', {
            currentYear: parseInt(this.year),
            changeYear: parseInt(this.year) + 1
        })))));
    }
    renderMonths() {
        const monthButtons = Array.from(new Array(12), (_, i) => String(i + 1).padStart(2, '0')).map(month => {
            const value = getISOYearMonth(this.year, month);
            return (h("gux-month-list-item", { class: { 'gux-current-month': this.isCurrentMonth(month) }, value: value, selected: this.isSelectedMonth(value), "aria-selected": this.isAriaSelectedMonth(value), "aria-label": this.getMonthAriaLabel(value), onClick: () => this.onMonthClick(value), disabled: this.isOutOfBounds(value) }, this.getMonthShortName(this.year, month)));
        });
        return (h("gux-month-list", null, monthButtons));
    }
    render() {
        return (h("div", { key: '4a11c173e29d72a614fef638df5cc3c4a4ce0348', class: {
                'gux-hidden': !this.expanded,
                'gux-month-calendar': true
            } }, this.renderHeader(), this.renderMonths()));
    }
    static get is() { return "gux-month-calendar"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-month-calendar.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-month-calendar.css"]
        };
    }
    static get properties() {
        return {
            "value": {
                "type": "string",
                "attribute": "value",
                "mutable": true,
                "complexType": {
                    "original": "GuxISOYearMonth",
                    "resolved": "`${string}-${string}`",
                    "references": {
                        "GuxISOYearMonth": {
                            "location": "import",
                            "path": "../../../../utils/date/year-month-values",
                            "id": "src/utils/date/year-month-values.ts::GuxISOYearMonth"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The current selected year and month in ISO8601 format (yyyy-mm)"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "min": {
                "type": "string",
                "attribute": "min",
                "mutable": false,
                "complexType": {
                    "original": "GuxISOYearMonth",
                    "resolved": "`${string}-${string}`",
                    "references": {
                        "GuxISOYearMonth": {
                            "location": "import",
                            "path": "../../../../utils/date/year-month-values",
                            "id": "src/utils/date/year-month-values.ts::GuxISOYearMonth"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The min year and month selectable in ISO8601 format (yyyy-mm)"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "max": {
                "type": "string",
                "attribute": "max",
                "mutable": false,
                "complexType": {
                    "original": "GuxISOYearMonth",
                    "resolved": "`${string}-${string}`",
                    "references": {
                        "GuxISOYearMonth": {
                            "location": "import",
                            "path": "../../../../utils/date/year-month-values",
                            "id": "src/utils/date/year-month-values.ts::GuxISOYearMonth"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The max year and month selectable in ISO8601 format (yyyy-mm)"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "year": {},
            "locale": {},
            "previewValue": {},
            "expanded": {}
        };
    }
    static get methods() {
        return {
            "guxFocus": {
                "complexType": {
                    "signature": "(iSOYearMonth: GuxISOYearMonth) => Promise<void>",
                    "parameters": [{
                            "name": "iSOYearMonth",
                            "type": "`${string}-${string}`",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "GuxISOYearMonth": {
                            "location": "import",
                            "path": "../../../../utils/date/year-month-values",
                            "id": "src/utils/date/year-month-values.ts::GuxISOYearMonth"
                        },
                        "HTMLButtonElement": {
                            "location": "global",
                            "id": "global::HTMLButtonElement"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Focus a month",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "root"; }
    static get watchers() {
        return [{
                "propName": "value",
                "methodName": "onValueUpdate"
            }];
    }
    static get listeners() {
        return [{
                "name": "keydown",
                "method": "onKeyDown",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
