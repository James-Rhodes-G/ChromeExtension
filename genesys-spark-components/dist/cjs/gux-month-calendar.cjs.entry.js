'use strict';

var index = require('./index-BLhHoh_r.js');
var index$1 = require('./index-QInGO-Pu.js');
var intl = require('./intl-CN825h6c.js');
var useRegionalDates = require('./use-regional-dates-qjhuD9Ak.js');
var simulateNativeEvent = require('./simulate-native-event-_MPnVmRN.js');
var afterNextRender = require('./after-next-render-CeY_1Kbz.js');
var yearMonthValues = require('./year-month-values-CuDMneF9.js');
require('./get-closest-element-CfyZl7i7.js');
require('./get-closest-element-CIMI0Cx4.js');

const changeYear = "Current year is {currentYear}, Click to change year to {changeYear}";
var translationResources = {
	changeYear: changeYear
};

const guxMonthCalendarCss = ".gux-month-calendar{flex-wrap:wrap;inline-size:var(--gse-ui-calendarMenu-width);box-shadow:var(--gse-ui-calendarMenu-boxShadow)}.gux-month-calendar.gux-hidden{display:none}.gux-month-calendar .gux-current-month{font-family:var(--gse-ui-calendarMenu-month-currentText-fontFamily);font-size:var(--gse-ui-calendarMenu-month-currentText-fontSize);font-weight:var(--gse-ui-calendarMenu-month-currentText-fontWeight);line-height:var(--gse-ui-calendarMenu-month-currentText-lineHeight);color:var(--gse-ui-calendarMenu-month-default-foregroundColor)}.gux-month-calendar .gux-year-header{position:relative;display:flex;align-items:center;justify-content:space-between;block-size:var(--gse-ui-calendarMenu-month-single-header-height);padding:var(--gse-ui-calendarMenu-header-padding);font-family:var(--gse-ui-calendarMenu-day-headerText-fontFamily);font-size:var(--gse-ui-calendarMenu-day-headerText-fontSize);font-weight:var(--gse-ui-calendarMenu-day-headerText-fontWeight);line-height:var(--gse-ui-calendarMenu-day-headerText-lineHeight);color:var(--gse-ui-calendarMenu-header-foregroundColor);background-color:var(--gse-ui-calendarMenu-header-backgroundColor);border-radius:var(--gse-ui-calendarMenu-single-header-borderRadius)}.gux-month-calendar .gux-year-header button{padding:var(--gse-ui-calendarMenu-header-arrow-padding);color:inherit;cursor:pointer;outline:none;background:none;border:none}.gux-month-calendar .gux-year-header button:focus-visible{outline:var(--gse-semantic-focusOutline-md-borderWidth) solid var(--gse-ui-color-focus);outline-offset:var(--gse-semantic-focusOutline-offset);border-radius:calc(var(--gse-semantic-focusOutline-sm-borderRadius) - var(--gse-semantic-focusOutline-offset))}.gux-month-calendar .gux-year-header button.gux-year-change:disabled{cursor:default;opacity:var(--gse-ui-calendarMenu-disabled-opacity)}.gux-month-calendar .gux-year-header button gux-icon{pointer-events:none}";

const GuxMonthCalendar = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Controls hiding and showing the month-calendar
         */
        this.expanded = true;
    }
    onValueUpdate(newValue) {
        const { year } = yearMonthValues.getYearMonthObject(newValue);
        this.year = year;
    }
    /**
     * Focus a month
     */
    // eslint-disable-next-line @typescript-eslint/require-await
    async guxFocus(iSOYearMonth) {
        this.expanded = true;
        iSOYearMonth = iSOYearMonth || yearMonthValues.getCurrentISOYearMonth();
        const { year } = yearMonthValues.getYearMonthObject(iSOYearMonth);
        this.year = year;
        afterNextRender.afterNextRender(() => {
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
        this.i18n = await index$1.buildI18nForComponent(this.root, translationResources);
        if (useRegionalDates.useRegionalDates()) {
            this.locale = intl.determineDisplayLocale(this.root);
        }
        else {
            this.locale = index$1.getDesiredLocale(this.root);
        }
        if (this.value) {
            this.year = yearMonthValues.getYearMonthObject(this.value).year;
            this.previewValue = this.value;
        }
        else {
            this.year = yearMonthValues.getYearMonthObject(yearMonthValues.getCurrentISOYearMonth()).year;
        }
    }
    updateValue(value) {
        this.value = value;
        this.previewValue = this.value;
        simulateNativeEvent.simulateNativeEvent(this.root, 'input');
        simulateNativeEvent.simulateNativeEvent(this.root, 'change');
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
        return (yearMonthValues.getYearMonthObject(yearMonthValues.getCurrentISOYearMonth()).year == this.year &&
            yearMonthValues.getYearMonthObject(yearMonthValues.getCurrentISOYearMonth()).month == month);
    }
    getMonthAriaLabel(value) {
        const { year, month } = yearMonthValues.getYearMonthObject(value);
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
            const month = yearMonthValues.getYearMonthObject(this.value).month;
            const value = yearMonthValues.getISOYearMonth(this.year, month);
            this.previewValue = value;
        }
    }
    isPreviousYearLessThanMinYear(year, minISOYearMonth) {
        return ((parseInt(year) - 1).toString() <
            (minISOYearMonth && yearMonthValues.getYearMonthObject(minISOYearMonth).year));
    }
    isNextYearGreaterThanMaxYear(year, maxISOYearMonth) {
        return ((parseInt(year) + 1).toString() >
            (maxISOYearMonth && yearMonthValues.getYearMonthObject(maxISOYearMonth).year));
    }
    getMonthShortName(year, month) {
        return new Date(Number(year), Number(month) - 1).toLocaleDateString(this.locale, { month: 'short' });
    }
    renderHeader() {
        return (index.h("div", { class: "gux-year-header" }, index.h("button", { type: "button", class: "gux-year-change", onClick: () => this.changeYear(-1), disabled: this.isPreviousYearLessThanMinYear(this.year, this.min), ref: (el) => (this.previousYearElement = el) }, index.h("gux-icon", { "icon-name": "custom/chevron-left-small-regular", decorative: true, size: "small" }), index.h("gux-screen-reader-beta", null, this.i18n('changeYear', {
            currentYear: parseInt(this.year),
            changeYear: parseInt(this.year) - 1
        }))), index.h("div", { "data-testid": "year-label" }, this.getYearLabel(this.year)), index.h("button", { type: "button", class: "gux-year-change", onClick: () => this.changeYear(1), disabled: this.isNextYearGreaterThanMaxYear(this.year, this.max), ref: (el) => (this.nextYearElement = el), onBlur: this.nextYearElementOnBlur.bind(this) }, index.h("gux-icon", { "icon-name": "custom/chevron-right-small-regular", decorative: true, size: "small" }), index.h("gux-screen-reader-beta", null, this.i18n('changeYear', {
            currentYear: parseInt(this.year),
            changeYear: parseInt(this.year) + 1
        })))));
    }
    renderMonths() {
        const monthButtons = Array.from(new Array(12), (_, i) => String(i + 1).padStart(2, '0')).map(month => {
            const value = yearMonthValues.getISOYearMonth(this.year, month);
            return (index.h("gux-month-list-item", { class: { 'gux-current-month': this.isCurrentMonth(month) }, value: value, selected: this.isSelectedMonth(value), "aria-selected": this.isAriaSelectedMonth(value), "aria-label": this.getMonthAriaLabel(value), onClick: () => this.onMonthClick(value), disabled: this.isOutOfBounds(value) }, this.getMonthShortName(this.year, month)));
        });
        return (index.h("gux-month-list", null, monthButtons));
    }
    render() {
        return (index.h("div", { key: '4a11c173e29d72a614fef638df5cc3c4a4ce0348', class: {
                'gux-hidden': !this.expanded,
                'gux-month-calendar': true
            } }, this.renderHeader(), this.renderMonths()));
    }
    static get delegatesFocus() { return true; }
    get root() { return index.getElement(this); }
    static get watchers() { return {
        "value": ["onValueUpdate"]
    }; }
};
GuxMonthCalendar.style = guxMonthCalendarCss;

exports.gux_month_calendar = GuxMonthCalendar;
