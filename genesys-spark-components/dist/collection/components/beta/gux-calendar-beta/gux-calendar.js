import { forceUpdate, h } from "@stencil/core";
import { getWeekdays, getFirstOfMonth, localizedYearMonth, firstDateInWeek, AttributeSynchronizer } from "./services/calendar.service";
import { getDesiredLocale, getFirstDayOfWeek, buildI18nForComponent } from "../../../i18n";
import translationResources from "./i18n/en.json";
import { afterNextRenderTimeout } from "../../../utils/dom/after-next-render";
import { logError } from "../../../utils/error/log-error";
import simulateNativeEvent from "../../../utils/dom/simulate-native-event";
import { Temporal } from "@js-temporal/polyfill";
export class GuxCalendar {
    constructor() {
        /**
         * The date that receives focus when selecting a specific day. This also
         * determines what month is currently displayed. The corresponding element
         * does not necessarily have browser focus at any given time, since focus
         * may be on other parts of the component.
         */
        this.focusDate = Temporal.Now.plainDateISO();
        this.disabled = false;
        this.locale = 'en';
        // Total number of dates that will display for each month in the calendar
        this.MONTH_DATE_COUNT = 42;
    }
    async guxForceUpdate() {
        forceUpdate(this.root);
    }
    get slottedInput() {
        return this.root.querySelector('input[type="date"]');
    }
    async componentWillLoad() {
        if (!this.slottedInput) {
            logError(this.root, 'You must slot a date input element like so: input[type="date"].');
        }
        this.locale = getDesiredLocale(this.root);
        // Set start day of week
        this.startDayOfWeek = this.startDayOfWeek || getFirstDayOfWeek(this.locale);
        this.i18n = await buildI18nForComponent(this.root, translationResources);
        const selectedDate = this.getSelectedDate();
        if (selectedDate) {
            this.focusDate = selectedDate;
        }
        this.attributeSynchronizer = new AttributeSynchronizer({
            readFrom: this.slottedInput,
            writeTo: this,
            mappings: {
                min: (val) => {
                    return val ? Temporal.PlainDate.from(val) : undefined;
                },
                max: (val) => {
                    return val ? Temporal.PlainDate.from(val) : undefined;
                },
                disabled: val => val
            }
        });
    }
    onSlotChange() {
        this.attributeSynchronizer.setSourceElement(this.slottedInput);
    }
    async disconnectedCallback() {
        this.attributeSynchronizer.disconnect();
    }
    detectDayClick(event) {
        if (!(event.target.tagName === 'GUX-DAY-BETA')) {
            return;
        }
        const dayElement = event.target;
        const selectedDate = Temporal.PlainDate.from(dayElement.day);
        this.selectDate(selectedDate);
        event.stopPropagation();
    }
    /**
     * Finds the `gux-day` element corresponding to the provided
     * date string.
     * @param dateStr The date to find in ISO format
     */
    getGuxDayForDate(dateStr) {
        return this.root.shadowRoot.querySelector(`.day-${dateStr}`);
    }
    selectDate(date) {
        if (this.isInvalidDate(date)) {
            return;
        }
        const newDateStr = date.toString();
        this.slottedInput.value = newDateStr;
        this.focusDate = date;
        this.focusOnFocusDate();
        simulateNativeEvent(this.root, 'input');
        simulateNativeEvent(this.root, 'change');
    }
    /**
     * Shifts the focused date by the provided interval
     * @param interval A Temporal-compatible interval definition
     */
    shiftFocusDate(interval) {
        const shiftInterval = Temporal.Duration.from(interval);
        let newFocusedValue = this.focusDate.add(shiftInterval);
        // Clamp to the valid range
        if (this.min &&
            Temporal.PlainDate.compare(newFocusedValue, this.min) == -1) {
            newFocusedValue = this.min;
        }
        else if (this.max &&
            Temporal.PlainDate.compare(newFocusedValue, this.max) == 1) {
            newFocusedValue = this.max;
        }
        this.focusDate = newFocusedValue;
    }
    /**
     * Directs browser focus to the element corresponding to the `.focusDate` date.
     */
    focusOnFocusDate() {
        // Wait for render in case the displayed month just changed with the focus date
        afterNextRenderTimeout(() => {
            const isoDateStr = this.focusDate.toString();
            const target = this.getGuxDayForDate(isoDateStr);
            if (target) {
                target.focus();
            }
        });
    }
    onKeyDown(event) {
        switch (event.key) {
            case ' ':
                break;
            case 'ArrowDown':
                event.preventDefault();
                this.shiftFocusDate({ weeks: 1 });
                this.focusOnFocusDate();
                break;
            case 'ArrowUp':
                event.preventDefault();
                this.shiftFocusDate({ weeks: -1 });
                this.focusOnFocusDate();
                break;
            case 'ArrowLeft':
                event.preventDefault();
                this.shiftFocusDate({ days: -1 });
                this.focusOnFocusDate();
                break;
            case 'ArrowRight':
                event.preventDefault();
                this.shiftFocusDate({ days: 1 });
                this.focusOnFocusDate();
                break;
            case 'PageUp':
                event.preventDefault();
                this.shiftFocusDate({ months: 1 });
                this.focusOnFocusDate();
                break;
            case 'PageDown':
                event.preventDefault();
                this.shiftFocusDate({ months: -1 });
                this.focusOnFocusDate();
                break;
        }
    }
    /**
     * Returns true if the date is less than the min date or greater than the max date
     */
    isInvalidDate(date) {
        return ((this.min && Temporal.PlainDate.compare(date, this.min) == -1) ||
            (this.max && Temporal.PlainDate.compare(date, this.max) == 1));
    }
    getMonthDays() {
        const today = Temporal.Now.plainDateISO();
        const firstOfMonth = getFirstOfMonth(this.getFocusDate());
        const weeks = [];
        let currentWeek = { dates: [] };
        let weekDayIndex = 0;
        const currentMonth = firstOfMonth.month;
        const selectedValue = this.getSelectedDate();
        let currentDate = firstDateInWeek(firstOfMonth, this.startDayOfWeek);
        // Generate all of the dates in the current month
        for (let d = 0; d < this.MONTH_DATE_COUNT + 1; d += 1) {
            if (weekDayIndex > 0 && weekDayIndex % 7 === 0) {
                weeks.push(currentWeek);
                currentWeek = {
                    dates: []
                };
            }
            currentWeek.dates.push({
                date: Temporal.PlainDate.from(currentDate),
                disabled: this.isInvalidDate(currentDate),
                inCurrentMonth: currentMonth === currentDate.month,
                selected: selectedValue === null || selectedValue === void 0 ? void 0 : selectedValue.equals(currentDate),
                focused: this.getFocusDate().equals(currentDate),
                isCurrentDate: currentDate.equals(today)
            });
            weekDayIndex += 1;
            currentDate = currentDate.add({ days: 1 });
        }
        return weeks;
    }
    getFocusDate() {
        return this.focusDate;
    }
    getSelectedDate() {
        if (this.slottedInput.value) {
            return Temporal.PlainDate.from(this.slottedInput.value);
        }
        return null;
    }
    renderHeader() {
        return (h("div", { class: "gux-header" }, h("button", { type: "button", class: "gux-left", "aria-label": this.i18n('previousMonth', {
                localizedPreviousMonthAndYear: localizedYearMonth(this.getFocusDate().add({ months: -1 }), this.locale)
            }), onClick: () => this.shiftFocusDate({ months: -1 }) }, h("gux-icon", { size: "small", decorative: true, "icon-name": "custom/chevron-left-small-regular" })), h("span", { class: "gux-header-month-and-year" }, localizedYearMonth(this.getFocusDate(), this.locale)), h("button", { type: "button", class: "gux-right", "aria-label": this.i18n('nextMonth', {
                localizedNextMonthAndYear: localizedYearMonth(this.getFocusDate().add({ months: 1 }), this.locale)
            }), onClick: () => this.shiftFocusDate({ months: 1 }) }, h("gux-icon", { size: "small", decorative: true, "icon-name": "custom/chevron-right-small-regular" }))));
    }
    renderContent() {
        return (h("div", { onKeyDown: e => void this.onKeyDown(e), onClick: e => void this.detectDayClick(e) }, h("div", { class: "gux-content" }, h("div", { class: "gux-week-days" }, getWeekdays(this.locale, this.startDayOfWeek).map(day => (h("div", { class: "gux-week-day" }, day)))), h("div", null, this.getMonthDays().map(week => (h("div", { class: "gux-content-week" }, week.dates.map(day => {
            const isoDateStr = day.date.toString();
            return (h("gux-day-beta", { day: isoDateStr, "aria-current": day.selected ? 'true' : 'false', disabled: day.disabled ? true : false, tabindex: day.selected || day.focused ? '0' : '-1', class: `
                            ${!day.inCurrentMonth || day.disabled ? 'gux-muted' : ''}
                            day-${isoDateStr}  
                          ` }));
        }))))))));
    }
    render() {
        return (h("div", { key: '1da41ece22aace32e14be09942b85ed17a92ee60', class: `gux-calendar-beta ${this.disabled ? 'gux-disabled' : ''}` }, h("slot", { key: '6ab2911fc37e3157a24a4e1c746e8b5de0d2c769', onSlotchange: () => {
                this.onSlotChange();
            } }), this.renderHeader(), this.renderContent()));
    }
    static get is() { return "gux-calendar-beta"; }
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
            "startDayOfWeek": {
                "type": "number",
                "attribute": "start-day-of-week",
                "mutable": true,
                "complexType": {
                    "original": "GuxCalendarDayOfWeek",
                    "resolved": "1 | 2 | 3 | 4 | 5 | 6 | 7",
                    "references": {
                        "GuxCalendarDayOfWeek": {
                            "location": "import",
                            "path": "./gux-calendar.types",
                            "id": "src/components/beta/gux-calendar-beta/gux-calendar.types.ts::GuxCalendarDayOfWeek"
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
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "focusDate": {},
            "min": {},
            "max": {},
            "disabled": {}
        };
    }
    static get methods() {
        return {
            "guxForceUpdate": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "root"; }
}
