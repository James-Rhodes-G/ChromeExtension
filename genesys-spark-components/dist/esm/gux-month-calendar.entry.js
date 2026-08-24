import { r as registerInstance, h, a as getElement } from './index-xFL2agjT.js';
import { b as buildI18nForComponent, g as getDesiredLocale } from './index-Dac2qHbK.js';
import { a as determineDisplayLocale } from './intl-CpptOorV.js';
import { u as useRegionalDates } from './use-regional-dates-ZuNZ-MBw.js';
import { s as simulateNativeEvent } from './simulate-native-event-BMRf5pjV.js';
import { b as afterNextRender } from './after-next-render-Bg4q97BS.js';
import { g as getYearMonthObject, b as getCurrentISOYearMonth, a as getISOYearMonth } from './year-month-values-Dwrcabgx.js';
import './get-closest-element-Cd4R0amv.js';
import './get-closest-element-BZb6pJEJ.js';

const changeYear = "Current year is {currentYear}, Click to change year to {changeYear}";
var translationResources = {
	changeYear: changeYear
};

const guxMonthCalendarCss = ".gux-month-calendar{flex-wrap:wrap;inline-size:var(--gse-ui-calendarMenu-width);box-shadow:var(--gse-ui-calendarMenu-boxShadow)}.gux-month-calendar.gux-hidden{display:none}.gux-month-calendar .gux-current-month{font-family:var(--gse-ui-calendarMenu-month-currentText-fontFamily);font-size:var(--gse-ui-calendarMenu-month-currentText-fontSize);font-weight:var(--gse-ui-calendarMenu-month-currentText-fontWeight);line-height:var(--gse-ui-calendarMenu-month-currentText-lineHeight);color:var(--gse-ui-calendarMenu-month-default-foregroundColor)}.gux-month-calendar .gux-year-header{position:relative;display:flex;align-items:center;justify-content:space-between;block-size:var(--gse-ui-calendarMenu-month-single-header-height);padding:var(--gse-ui-calendarMenu-header-padding);font-family:var(--gse-ui-calendarMenu-day-headerText-fontFamily);font-size:var(--gse-ui-calendarMenu-day-headerText-fontSize);font-weight:var(--gse-ui-calendarMenu-day-headerText-fontWeight);line-height:var(--gse-ui-calendarMenu-day-headerText-lineHeight);color:var(--gse-ui-calendarMenu-header-foregroundColor);background-color:var(--gse-ui-calendarMenu-header-backgroundColor);border-radius:var(--gse-ui-calendarMenu-single-header-borderRadius)}.gux-month-calendar .gux-year-header button{padding:var(--gse-ui-calendarMenu-header-arrow-padding);color:inherit;cursor:pointer;outline:none;background:none;border:none}.gux-month-calendar .gux-year-header button:focus-visible{outline:var(--gse-semantic-focusOutline-md-borderWidth) solid var(--gse-ui-color-focus);outline-offset:var(--gse-semantic-focusOutline-offset);border-radius:calc(var(--gse-semantic-focusOutline-sm-borderRadius) - var(--gse-semantic-focusOutline-offset))}.gux-month-calendar .gux-year-header button.gux-year-change:disabled{cursor:default;opacity:var(--gse-ui-calendarMenu-disabled-opacity)}.gux-month-calendar .gux-year-header button gux-icon{pointer-events:none}";

const GuxMonthCalendar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
            this.locale = determineDisplayLocale(this.root);
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
    static get delegatesFocus() { return true; }
    get root() { return getElement(this); }
    static get watchers() { return {
        "value": ["onValueUpdate"]
    }; }
};
GuxMonthCalendar.style = guxMonthCalendarCss;

export { GuxMonthCalendar as gux_month_calendar };
