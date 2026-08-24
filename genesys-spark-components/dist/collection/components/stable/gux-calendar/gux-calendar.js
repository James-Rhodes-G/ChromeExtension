import { h } from "@stencil/core";
import { afterNextRenderTimeout } from "../../../utils/dom/after-next-render";
import { asIsoDateRange, asIsoDate, fromIsoDateRange, fromIsoDate } from "../../../utils/date/iso-dates";
import { addClassToElements, removeClassToElements } from "../../../utils/dom/manipulate-elements-classes";
import { trackComponent } from "../../../utils/tracking/usage";
import { buildI18nForComponent, getDesiredLocale, getStartOfWeek } from "../../../i18n";
import translationResources from "./i18n/en.json";
import { firstDateInMonth, getWeekdays, getOffsetMonthDate, getDateMonthAndYearString } from "./gux-calendar.service";
export class GuxCalendar {
    constructor() {
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
    static get is() { return "gux-calendar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-calendar.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-calendar.css"]
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
                    "text": "The calendar current selected date"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "''"
            },
            "minDate": {
                "type": "string",
                "attribute": "min-date",
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
                    "text": "The min date selectable"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "''"
            },
            "maxDate": {
                "type": "string",
                "attribute": "max-date",
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
                    "text": "The max date selectable"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "''"
            },
            "mode": {
                "type": "string",
                "attribute": "mode",
                "mutable": false,
                "complexType": {
                    "original": "GuxCalendarMode",
                    "resolved": "CalendarModes.Range | CalendarModes.Single",
                    "references": {
                        "GuxCalendarMode": {
                            "location": "import",
                            "path": "./gux-calendar.types",
                            "id": "src/components/stable/gux-calendar/gux-calendar.types.ts::GuxCalendarMode"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The calendar mode (can be single or range)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "CalendarModes.Single"
            },
            "numberOfMonths": {
                "type": "number",
                "attribute": "number-of-months",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The calendar number of months displayed"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "1"
            },
            "startDayOfWeek": {
                "type": "number",
                "attribute": "start-day-of-week",
                "mutable": true,
                "complexType": {
                    "original": "GuxCalendarDayOfWeek",
                    "resolved": "0 | 1 | 2 | 3 | 4 | 5 | 6 | 7",
                    "references": {
                        "GuxCalendarDayOfWeek": {
                            "location": "import",
                            "path": "./gux-calendar.types",
                            "id": "src/components/stable/gux-calendar/gux-calendar.types.ts::GuxCalendarDayOfWeek"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The day of the week to start each calendar row. ISO weekday number ie 1 - Monday, 2 - Tuesday, ... 7 - Sunday"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "previewValue": {},
            "selectingDate": {}
        };
    }
    static get events() {
        return [{
                "method": "calendarSelect",
                "name": "calendarSelect",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Triggered when user selects a date"
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "setValue": {
                "complexType": {
                    "signature": "(value: Date | [Date, Date]) => Promise<void>",
                    "parameters": [{
                            "name": "value",
                            "type": "Date | [Date, Date]",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "Date": {
                            "location": "global",
                            "id": "global::Date"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Sets new value and rerender the calendar",
                    "tags": []
                }
            },
            "focusPreviewDate": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "HTMLTableCellElement": {
                            "location": "global",
                            "id": "global::HTMLTableCellElement"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Focus the preview date",
                    "tags": []
                }
            },
            "resetCalendarView": {
                "complexType": {
                    "signature": "(value: Date) => Promise<void>",
                    "parameters": [{
                            "name": "value",
                            "type": "Date",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "Date": {
                            "location": "global",
                            "id": "global::Date"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Reset calendar view to show first selected date",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "root"; }
}
