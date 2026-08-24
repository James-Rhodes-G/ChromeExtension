import { r as registerInstance, c as createEvent, h, a as getElement } from './index-xFL2agjT.js';
import { a as afterNextRenderTimeout } from './after-next-render-Bg4q97BS.js';
import { a as asIsoDateRange, c as fromIsoDateRange, b as asIsoDate, f as fromIsoDate } from './iso-dates-aKaDsw_5.js';
import { t as trackComponent } from './usage-D2Q7fj4V.js';
import { b as buildI18nForComponent, g as getDesiredLocale, c as getStartOfWeek } from './index-Dac2qHbK.js';
import { c as capitalizeFirstLetter } from './capitalize-first-letter-Cf6_BoFM.js';
import { d as dateTimeFormat } from './intl-CpptOorV.js';
import { u as useRegionalDates } from './use-regional-dates-ZuNZ-MBw.js';
import './get-closest-element-Cd4R0amv.js';
import './get-closest-element-BZb6pJEJ.js';

function addClassToElements(elements, className) {
    manipulateElementsClasses(elements, 'add', className);
}
function removeClassToElements(elements, className) {
    manipulateElementsClasses(elements, 'remove', className);
}
function manipulateElementsClasses(elements = [], action, className) {
    const arr = [].concat(elements);
    for (const el of arr) {
        el.classList[action](className);
    }
}

const previousMonth = "Go to the previous month";
const nextMonth = "Go to the next month";
var translationResources = {
	previousMonth: previousMonth,
	nextMonth: nextMonth
};

function firstDateInMonth(month, year, startDayOfWeek) {
    const startDate = new Date(year, month, 1, 1, 0, 0, 0);
    const firstDayOfMonth = startDate.getDay();
    const firstDayOffset = (-1 * (startDayOfWeek - firstDayOfMonth - 7)) % 7;
    return new Date(startDate.getTime() - firstDayOffset * (86400 * 1000));
}
function getWeekdays(locale, startDayOfWeek) {
    const days = [];
    // Sunday
    const day = new Date(1970, 0, 4);
    for (let i = 0; i < 7; i++) {
        const weekday = day.toLocaleString(locale, { weekday: 'narrow' });
        days.push(weekday);
        day.setDate(day.getDate() + 1);
    }
    return shiftArray(days, startDayOfWeek);
}
function shiftArray(arr, n) {
    const times = n > arr.length ? n % arr.length : n;
    return arr.concat(arr.splice(0, times));
}
function getOffsetMonthDate(baseDate, monthDelta) {
    const date = new Date(baseDate);
    date.setDate(1);
    date.setMonth(date.getMonth() + monthDelta);
    return date;
}
function getDateMonthAndYearString(date, locale) {
    if (useRegionalDates()) {
        return capitalizeFirstLetter(dateTimeFormat(locale, {
            year: 'numeric',
            month: 'long'
        })
            .format(date));
    }
    else {
        return capitalizeFirstLetter(date.toLocaleDateString(locale, { year: 'numeric', month: 'long' }));
    }
}

const guxCalendarCss = ":host{display:inline-block}.gux-calendar{margin-block-start:2px;border-radius:8px;box-shadow:var(--gse-ui-calendarMenu-boxShadow)}.gux-calendar .gux-header{display:flex;align-items:center;justify-content:space-between;block-size:var(--gse-ui-calendarMenu-month-single-header-height);padding:var(--gse-ui-calendarMenu-header-padding);font-style:normal;font-weight:var(--gse-ui-calendarMenu-month-currentText-fontWeight);color:var(--gse-ui-calendarMenu-header-foregroundColor);text-align:center;background-color:var(--gse-ui-calendarMenu-header-backgroundColor);border-radius:var(--gse-ui-calendarMenu-single-header-borderRadius)}.gux-calendar .gux-header .gux-header-month-and-year{inline-size:var(--gse-ui-calendarMenu-month-single-header-textWidth);font-family:var(--gse-ui-calendarMenu-month-headerText-fontFamily);font-size:var(--gse-ui-calendarMenu-month-headerText-fontSize);line-height:var(--gse-ui-calendarMenu-month-headerText-lineHeight);color:var(--gse-ui-calendarMenu-month-selected-foregroundColor)}.gux-calendar .gux-header .gux-left,.gux-calendar .gux-header .gux-right{block-size:100%;color:var(--gse-ui-calendarMenu-header-foregroundColor);cursor:pointer;outline:none;background:none;border:none}.gux-calendar .gux-header .gux-left:focus-visible,.gux-calendar .gux-header .gux-right:focus-visible{outline:var(--gse-semantic-focusOutline-md-borderWidth) solid var(--gse-semantic-border-focus);outline-offset:var(--gse-semantic-focusOutline-offset)}.gux-calendar .gux-header .gux-month-list{display:flex;justify-content:space-between;inline-size:100%;font-family:var(--gse-ui-calendarMenu-month-headerText-fontFamily);font-size:var(--gse-ui-calendarMenu-month-headerText-fontSize);line-height:var(--gse-ui-calendarMenu-month-headerText-lineHeight)}.gux-calendar .gux-header .gux-month-list label{inline-size:100%;text-align:center}.gux-calendar .gux-content{display:flex;align-items:flex-start;block-size:var(--gse-ui-calendarMenu-height);padding:var(--gse-ui-calendarMenu-dateBody-padding);color:var(--gse-ui-calendarMenu-month-default-foregroundColor);background-color:var(--gse-ui-calendarMenu-backgroundColor);border-radius:var(--gse-ui-calendarMenu-single-body-borderRadius)}.gux-calendar .gux-content table{inline-size:var(--gse-ui-calendarMenu-day-input-width);text-align:start;-ms-user-select:none;user-select:none;table-layout:fixed;border-spacing:0}.gux-calendar .gux-content table:not(:last-child){padding-inline-end:24px}.gux-calendar .gux-content table tr{block-size:var(--gse-ui-calendarMenu-day-input-height)}.gux-calendar .gux-content table tr:empty{display:none}.gux-calendar .gux-content table tr th,.gux-calendar .gux-content table tr td{inline-size:var(--gse-ui-calendarMenu-day-date-size);block-size:var(--gse-ui-calendarMenu-day-date-size);padding:0;margin:0;text-align:center}.gux-calendar .gux-content table tr th{font-family:var(--gse-ui-calendarMenu-day-headerText-fontFamily);font-size:var(--gse-ui-calendarMenu-day-headerText-fontSize);font-weight:var(--gse-ui-calendarMenu-day-headerText-fontWeight);line-height:var(--gse-ui-calendarMenu-day-headerText-lineHeight)}.gux-calendar .gux-content table tr td{font-family:var(--gse-ui-calendarMenu-date-defaultText-fontFamily);font-size:var(--gse-ui-calendarMenu-date-defaultText-fontSize);font-weight:var(--gse-ui-calendarMenu-date-defaultText-fontWeight);line-height:var(--gse-ui-calendarMenu-date-defaultText-lineHeight);color:var(--gse-ui-calendarMenu-date-default-foregroundColor);cursor:pointer}.gux-calendar .gux-content table tr td.gux-hovered{background-color:var(--gse-ui-calendarMenu-date-range-backgroundColor)}.gux-calendar .gux-content table tr td.gux-selected{color:var(--gse-ui-calendarMenu-date-selected-foregroundColor);background-color:var(--gse-ui-calendarMenu-date-selected-backgroundColor);border-radius:var(--gse-ui-calendarMenu-month-borderRadius)}.gux-calendar .gux-content table tr td.gux-selected:hover:not(.gux-calendar .gux-content table tr td.gux-selected.gux-start-date):not(.gux-calendar .gux-content table tr td.gux-selected.gux-end-date){background-color:var(--gse-ui-calendarMenu-date-selected-hoverBackgroundColor)}.gux-calendar .gux-content table tr td.gux-start-date,.gux-calendar .gux-content table tr td.gux-end-date{background-color:var(--gse-ui-calendarMenu-date-range-backgroundColor)}.gux-calendar .gux-content table tr td.gux-start-date .gux-date,.gux-calendar .gux-content table tr td.gux-end-date .gux-date{display:flex;align-items:center;justify-content:center;inline-size:var(--gse-ui-calendarMenu-day-date-size);block-size:var(--gse-ui-calendarMenu-day-date-size);background-color:var(--gse-ui-calendarMenu-date-selected-backgroundColor);border-radius:var(--gse-ui-calendarMenu-month-borderRadius)}.gux-calendar .gux-content table tr td.gux-start-date .gux-date:hover,.gux-calendar .gux-content table tr td.gux-end-date .gux-date:hover{background-color:var(--gse-ui-calendarMenu-date-selected-hoverBackgroundColor)}.gux-calendar .gux-content table tr td.gux-start-date{border-radius:var(--gse-ui-calendarMenu-range-date-startDate-borderRadius)}.gux-calendar .gux-content table tr td.gux-end-date{border-radius:var(--gse-ui-calendarMenu-range-date-endDate-borderRadius)}.gux-calendar .gux-content table tr td:hover:not(.gux-calendar .gux-content table tr td.gux-start-date):not(.gux-calendar .gux-content table tr td.gux-end-date):not(.gux-calendar .gux-content table tr td.gux-hovered):not(.gux-calendar .gux-content table tr td.gux-selected){background-color:var(--gse-ui-calendarMenu-date-hover-backgroundColor);border-radius:var(--gse-ui-calendarMenu-month-borderRadius)}.gux-calendar .gux-content table tr td.gux-disabled{pointer-events:none;opacity:var(--gse-ui-calendarMenu-disabled-opacity)}.gux-calendar .gux-content table tr td.gux-not-in-month{opacity:var(--gse-ui-calendarMenu-disabled-opacity)}.gux-calendar .gux-content table tr td.gux-not-in-month:hover{background-color:var(--gse-ui-calendarMenu-date-hover-backgroundColor)}.gux-calendar .gux-content table tr td.gux-not-in-month.gux-hidden{visibility:hidden}.gux-calendar .gux-content table tr td.gux-current-date{font-family:var(--gse-ui-calendarMenu-date-currentText-fontFamily);font-size:var(--gse-ui-calendarMenu-date-currentText-fontSize);font-weight:var(--gse-ui-calendarMenu-date-currentText-fontWeight);line-height:var(--gse-ui-calendarMenu-date-currentText-lineHeight)}.gux-calendar .gux-content table tr td:focus-visible{border-radius:var(--gse-ui-calendarMenu-month-focusBorderRadius);outline:var(--gse-semantic-focusOutline-md-borderWidth) solid var(--gse-semantic-border-focus);outline-offset:var(--gse-semantic-focusOutline-offset)}.gux-sr-only{position:absolute;top:auto;left:-10000px;width:1px;height:1px;overflow:hidden}";

const GuxCalendar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.calendarSelect = createEvent(this, "calendarSelect", 7);
        /**
         * The calendar current selected date
         */
        this.value = '';
        /**
         * The min date selectable
         */
        this.minDate = '';
        /**
         * The max date selectable
         */
        this.maxDate = '';
        /**
         * The calendar mode (can be single or range)
         */
        this.mode = "single" /* CalendarModes.Single */;
        /**
         * The calendar number of months displayed
         */
        this.numberOfMonths = 1;
        this.previewValue = new Date();
        this.selectingDate = null;
        this.locale = 'en';
    }
    emitCalendarSelect() {
        this.calendarSelect.emit(this.value);
    }
    /**
     * Sets new value and rerender the calendar
     */
    // eslint-disable-next-line @typescript-eslint/require-await
    async setValue(value) {
        if (this.mode === "range" /* CalendarModes.Range */ && value instanceof Array) {
            const [date1, date2] = value;
            this.value = asIsoDateRange(date1, date2); // sorts
            this.previewValue = fromIsoDateRange(this.value)[0];
        }
        else {
            const selected = value;
            this.value = asIsoDate(selected);
            this.previewValue = selected;
        }
    }
    /**
     * Focus the preview date
     */
    // eslint-disable-next-line @typescript-eslint/require-await
    async focusPreviewDate() {
        const target = this.root.shadowRoot.querySelector(`td[data-date="${this.previewValue.getTime()}"]`);
        if (target) {
            target.focus();
        }
    }
    /**
     * Reset calendar view to show first selected date
     */
    // eslint-disable-next-line @typescript-eslint/require-await
    async resetCalendarView(value) {
        this.previewValue = value;
    }
    incrementPreviewDateByMonth(increment) {
        this.previewValue = new Date(this.previewValue.getFullYear(), this.previewValue.getMonth() + increment, 15, // Don't use the day from the old value, because we'll skip a month on the 31st
        0, 0, 0);
    }
    async setValueAndEmit(value) {
        await this.setValue(value);
        this.emitCalendarSelect();
    }
    outOfBounds(date) {
        return ((this.maxDate !== '' && fromIsoDate(this.maxDate) < date) ||
            (this.minDate !== '' && fromIsoDate(this.minDate) > date));
    }
    generateDatesFrom(month, startDate, length) {
        const arr = [];
        const currentDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), 0, 0, 0, 0);
        for (let i = 0; i < length; i++) {
            const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 0, 0, 0, 0);
            const classes = [];
            const today = new Date();
            const isToday = currentDate.getFullYear() === today.getFullYear() &&
                currentDate.getMonth() === today.getMonth() &&
                currentDate.getDate() === today.getDate();
            let disabled = false;
            let hidden = false;
            if (date.getMonth() !== month) {
                classes.push('gux-not-in-month');
                disabled = true;
                if (this.mode === "range" /* CalendarModes.Range */) {
                    classes.push('gux-hidden');
                    hidden = true;
                }
            }
            if (this.outOfBounds(date)) {
                classes.push('gux-disabled');
                disabled = true;
            }
            let isSelected = false;
            if (isToday) {
                classes.push('gux-current-date');
            }
            if (this.mode === "range" /* CalendarModes.Range */) {
                const [start, end] = fromIsoDateRange(this.value);
                const fromTimeStamp = start.getTime();
                const toTimeStamp = end.getTime();
                if (date.getTime() === fromTimeStamp &&
                    date.getTime() === toTimeStamp) {
                    isSelected = true;
                    classes.push('gux-selected');
                }
                else if (date.getTime() === fromTimeStamp) {
                    isSelected = true;
                    classes.push('gux-selected');
                    classes.push('gux-start-date');
                }
                else if (date.getTime() === toTimeStamp) {
                    isSelected = true;
                    classes.push('gux-selected');
                    classes.push('gux-end-date');
                }
            }
            else {
                const selectedTimestamp = fromIsoDate(this.value).getTime();
                if (date.getTime() === selectedTimestamp) {
                    isSelected = true;
                    classes.push('gux-selected');
                }
            }
            arr.push({
                class: classes.join(' '),
                date,
                hidden,
                disabled,
                selected: isSelected,
                isToday
            });
            currentDate.setDate(currentDate.getDate() + 1);
        }
        return arr;
    }
    create2DArray(arr, chunkSize) {
        const result = [];
        for (let i = 0; i < chunkSize - 1; i++) {
            const week = arr.slice(i * chunkSize, i * chunkSize + chunkSize);
            if (this.weekShouldBeDisplayed(week)) {
                result.push(week);
            }
        }
        return result;
    }
    isFocusableDate(day) {
        return day.selected || this.previewValue.getTime() === day.date.getTime();
    }
    weekShouldBeDisplayed(week) {
        const hasNonHiddenDate = week.find(date => {
            return !date.hidden;
        });
        return week.length && !!hasNonHiddenDate;
    }
    getMonthDays(index) {
        const month = new Date(this.previewValue.getTime());
        month.setDate(1);
        month.setMonth(month.getMonth() + index);
        const monthIndex = month.getMonth();
        const year = month.getFullYear();
        const startDate = firstDateInMonth(monthIndex, year, this.startDayOfWeek);
        const datesArray = this.generateDatesFrom(monthIndex, startDate, 42);
        return this.create2DArray(datesArray, 7);
    }
    addDays(date, days) {
        const newDate = new Date(date.valueOf());
        newDate.setDate(newDate.getDate() + days);
        return newDate;
    }
    getAllDatesElements() {
        const targets = this.root.shadowRoot.querySelectorAll('td');
        return Array.from(targets);
    }
    getAllSelectableDatesElements() {
        const targets = this.root.shadowRoot.querySelectorAll('td[tabindex="0"]');
        return Array.from(targets);
    }
    getRangeDatesElements(from, to) {
        const elements = [];
        let rangeDates;
        if (to < from) {
            rangeDates = this.getRangeDates(to, from);
        }
        else {
            rangeDates = this.getRangeDates(from, to);
        }
        for (const date of rangeDates) {
            const target = this.root.shadowRoot.querySelector(`td[data-date="${date.getTime()}"]:not(.gux-hidden)`);
            if (target) {
                elements.push(target);
            }
        }
        return elements;
    }
    getRangeDates(from, to) {
        const array = [];
        let currentDate = from;
        while (currentDate <= to) {
            array.push(new Date(currentDate));
            currentDate = this.addDays(currentDate, 1);
        }
        return array;
    }
    async onDateClick(date) {
        if (!this.outOfBounds(date)) {
            if (this.mode !== "range" /* CalendarModes.Range */) {
                await this.setValueAndEmit(date);
            }
            else {
                if (this.selectingDate === null) {
                    // First click
                    removeClassToElements(this.getAllDatesElements(), 'gux-hovered');
                    this.selectingDate = new Date(date.valueOf());
                    this.value = asIsoDateRange(date, date);
                }
                else {
                    // Second click
                    const target = this.root.shadowRoot.querySelector(`td[data-date="${date.getTime()}"]`);
                    if (target) {
                        target.classList.add('gux-selected');
                    }
                    this.updateRangeElements();
                    await this.setValueAndEmit([this.selectingDate, date]);
                    this.previewValue = date;
                    this.selectingDate = null;
                }
            }
        }
    }
    onDateMouseEnter(date) {
        if (this.mode === "range" /* CalendarModes.Range */ && this.selectingDate !== null) {
            this.value = asIsoDateRange(date, this.selectingDate);
            this.updateRangeElements();
        }
    }
    updateRangeElements() {
        if (this.mode === "range" /* CalendarModes.Range */) {
            removeClassToElements(this.getAllDatesElements(), 'gux-hovered');
            const [start, end] = fromIsoDateRange(this.value);
            const rangeElements = this.getRangeDatesElements(start, end);
            addClassToElements(rangeElements, 'gux-hovered');
        }
    }
    async onKeyDown(event) {
        switch (event.key) {
            case ' ':
            case 'Enter':
                event.preventDefault();
                await this.onDateClick(this.previewValue);
                break;
            case 'ArrowDown':
                event.preventDefault();
                this.previewValue = new Date(this.previewValue.setDate(this.previewValue.getDate() + 7));
                this.onDateMouseEnter(this.previewValue);
                afterNextRenderTimeout(() => {
                    void this.focusPreviewDate();
                });
                break;
            case 'ArrowUp':
                event.preventDefault();
                this.previewValue = new Date(this.previewValue.setDate(this.previewValue.getDate() - 7));
                this.onDateMouseEnter(this.previewValue);
                afterNextRenderTimeout(() => {
                    void this.focusPreviewDate();
                });
                break;
            case 'ArrowLeft':
                event.preventDefault();
                this.previewValue = new Date(this.previewValue.setDate(this.previewValue.getDate() - 1));
                this.onDateMouseEnter(this.previewValue);
                afterNextRenderTimeout(() => {
                    void this.focusPreviewDate();
                });
                break;
            case 'ArrowRight':
                event.preventDefault();
                this.previewValue = new Date(this.previewValue.setDate(this.previewValue.getDate() + 1));
                this.onDateMouseEnter(this.previewValue);
                afterNextRenderTimeout(() => {
                    void this.focusPreviewDate();
                });
                break;
            case 'PageUp':
                event.preventDefault();
                this.incrementPreviewDateByMonth(1);
                this.onDateMouseEnter(this.previewValue);
                // Wait for render before focusing preview date
                afterNextRenderTimeout(() => {
                    void this.focusPreviewDate();
                });
                break;
            case 'PageDown':
                event.preventDefault();
                this.incrementPreviewDateByMonth(-1);
                this.onDateMouseEnter(this.previewValue);
                // Wait for render before focusing preview date
                afterNextRenderTimeout(() => {
                    void this.focusPreviewDate();
                });
                break;
        }
    }
    async componentWillLoad() {
        trackComponent(this.root, { variant: this.mode });
        this.i18n = await buildI18nForComponent(this.root, translationResources);
        this.locale = getDesiredLocale(this.root);
        this.startDayOfWeek = this.startDayOfWeek || getStartOfWeek(this.locale);
        if (!this.value) {
            const now = new Date();
            now.setHours(0, 0, 0, 0);
            if (this.mode === "range" /* CalendarModes.Range */) {
                this.value = asIsoDateRange(now, now);
            }
            else {
                this.value = asIsoDate(now);
            }
        }
        this.previewValue = fromIsoDate(this.value);
    }
    componentDidRender() {
        this.updateRangeElements();
    }
    renderMonthHeader() {
        return (h("div", { class: "gux-month-list" }, Array.from(Array(this.numberOfMonths).keys()).map(index => {
            const offsetMonthDate = getOffsetMonthDate(this.previewValue, index);
            return (h("label", null, getDateMonthAndYearString(offsetMonthDate, this.locale)));
        })));
    }
    renderCalendarTable(index) {
        return (h("table", null, h("tr", null, getWeekdays(this.locale, this.startDayOfWeek).map(day => (h("th", null, day)))), this.getMonthDays(index).map(week => (h("tr", null, week.map(day => (h("td", { tabindex: this.isFocusableDate(day) ? '0' : '-1', class: day.class, "aria-hidden": day.hidden ? 'true' : 'false', "aria-disabled": day.disabled ? 'true' : 'false', "data-date": day.date.getTime(), onClick: () => void this.onDateClick(day.date), onMouseEnter: () => this.onDateMouseEnter(day.date), onKeyDown: e => void this.onKeyDown(e) }, h("div", { class: "gux-date" }, day.date.getDate(), h("span", { class: "gux-sr-only" }, getDateMonthAndYearString(day.date, this.locale)))))))))));
    }
    render() {
        return (h("div", { key: '0c55a401066c6b0187e748aa283250a0b1241319', class: "gux-calendar" }, h("div", { key: '5a74b7258882a980360239957794b1c2ae89f26f', class: "gux-header" }, h("button", { key: '74a80f686c61660c3dacb46c3ea39254b175767f', type: "button", class: "gux-left", "aria-label": this.i18n('previousMonth'), onClick: () => this.incrementPreviewDateByMonth(-1) }, h("gux-icon", { key: 'e6591ea5f66819d5d28628fd1eec2fbcaf29bd7a', size: "small", decorative: true, "icon-name": "custom/chevron-left-small-regular" })), this.renderMonthHeader(), h("button", { key: '4cd50eea789472a67ea8dab48160f9d372f22633', type: "button", class: "gux-right", "aria-label": this.i18n('nextMonth'), onClick: () => this.incrementPreviewDateByMonth(1) }, h("gux-icon", { key: 'c70331f456b7af4a5df486c555d7a38ed06ff5a4', size: "small", decorative: true, "icon-name": "custom/chevron-right-small-regular" }))), h("div", { key: '5ec1b7c7032ab13ed4c2e1fc55a861695d3ec7de', class: "gux-content" }, Array.from(Array(this.numberOfMonths).keys()).map(index => this.renderCalendarTable(index)))));
    }
    get root() { return getElement(this); }
};
GuxCalendar.style = guxCalendarCss;

export { GuxCalendar as gux_calendar };
