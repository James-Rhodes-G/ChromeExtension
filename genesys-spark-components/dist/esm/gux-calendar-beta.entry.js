import { r as registerInstance, f as forceUpdate, h, a as getElement } from './index-xFL2agjT.js';
import { q as qi } from './index.esm-ByC1Z2e8.js';
import { g as getDesiredLocale, a as getFirstDayOfWeek, b as buildI18nForComponent } from './index-Dac2qHbK.js';
import { a as afterNextRenderTimeout } from './after-next-render-Bg4q97BS.js';
import { a as logError } from './log-error-DxtJDeL9.js';
import { s as simulateNativeEvent } from './simulate-native-event-BMRf5pjV.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './get-closest-element-Cd4R0amv.js';

/**
 * Given a date, return the first day of the month that date is in.
 */
function getFirstOfMonth(date) {
    return qi.PlainDate.from({
        day: 1,
        month: date.month,
        year: date.year
    });
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
    return rotateArray(days, startDayOfWeek);
}
function rotateArray(arr, n) {
    const times = n % arr.length;
    return arr.concat(arr.splice(0, times));
}
function localizedYearMonth(date, locale) {
    return date.toLocaleString(locale, { year: 'numeric', month: 'long' });
}
/**
 * Given a starting date and the first day of the week, find the first date of
 * the week of the provided date. For example, February 1st 2025 is a Saturday.
 * If the first day of the week is considered Monday (1), this function would
 * return a date of 2027-01-27.
 * @param date The date we want to find the start of the week for
 * @param startDayOfWeek The day that should be considered the first day of the week
 * @returns The first day of the first week of the provided month
 */
function firstDateInWeek(date, startDayOfWeek) {
    let dayDelta = startDayOfWeek - date.dayOfWeek;
    if (dayDelta > 0) {
        dayDelta = dayDelta - 7;
    }
    return date.add({ days: dayDelta });
}
class AttributeSynchronizer {
    constructor(options) {
        this.writeTarget = options.writeTo;
        this.mappings = options.mappings;
        this.observer = new MutationObserver(changes => {
            changes.forEach(change => {
                const name = change.attributeName;
                this.syncAttribute(name);
            });
        });
        this.setSourceElement(options.readFrom);
    }
    /**
     * Changes the source element attributes are copied from. Usually called in
     * response to a `slotchange` event.
     * @param sourceElement
     */
    setSourceElement(sourceElement) {
        this.observer.disconnect(); // Stop observing any previously observed element
        this.sourceElement = sourceElement; // Start reading from the new source
        this.syncAll(); // Sync data from the new source
        // Start the observer back up with the new source
        this.observer.observe(sourceElement, {
            attributes: true,
            attributeFilter: Object.keys(this.mappings)
        });
    }
    /**
     * Disconnects the synchronization between the source and destination elements.
     * Should be called to clean up when the relationship is no longer needed,
     * typically on `disconnectedCallback`.
     */
    disconnect() {
        this.observer.disconnect();
    }
    syncAll() {
        Object.keys(this.mappings).forEach(name => {
            this.writeTarget[name] = this.mappings[name](this.sourceElement[name]);
        });
    }
    syncAttribute(name) {
        this.writeTarget[name] = this.mappings[name](this.sourceElement[name]);
    }
}

const previousMonth = "Previous month: {localizedPreviousMonthAndYear}";
const nextMonth = "Next month: {localizedNextMonthAndYear}";
var translationResources = {
	previousMonth: previousMonth,
	nextMonth: nextMonth
};

const guxCalendarCss = ".gux-calendar-beta.gux-disabled{pointer-events:none;opacity:var(--gse-ui-calendarMenu-disabled-opacity)}.gux-calendar-beta{box-sizing:border-box;display:inline-flex;flex-direction:column;font-family:var(--gse-ui-calendarMenu-month-defaultText-fontFamily);font-size:var(--gse-ui-calendarMenu-month-defaultText-fontSize);background:var(--gse-ui-calendarMenu-backgroundColor);border-radius:8px;box-shadow:var(--gse-ui-calendarMenu-boxShadow)}.gux-calendar-beta .gux-header{display:flex;align-items:center;justify-content:space-between;block-size:var(--gse-ui-calendarMenu-month-single-header-height);padding:var(--gse-ui-calendarMenu-header-padding);font-style:normal;font-weight:var(--gse-ui-calendarMenu-month-currentText-fontWeight);color:var(--gse-ui-calendarMenu-header-foregroundColor);text-align:center;background-color:var(--gse-ui-calendarMenu-header-backgroundColor);border-radius:var(--gse-ui-calendarMenu-single-header-borderRadius)}.gux-calendar-beta .gux-header .gux-header-month-and-year{inline-size:var(--gse-ui-calendarMenu-month-single-header-textWidth);font-family:var(--gse-ui-calendarMenu-month-headerText-fontFamily);font-size:var(--gse-ui-calendarMenu-month-headerText-fontSize);line-height:var(--gse-ui-calendarMenu-month-headerText-lineHeight);color:var(--gse-ui-calendarMenu-month-selected-foregroundColor)}.gux-calendar-beta .gux-header .gux-left,.gux-calendar-beta .gux-header .gux-right{block-size:100%;color:var(--gse-ui-calendarMenu-header-foregroundColor);cursor:pointer;outline:none;background:none;border:none}.gux-calendar-beta .gux-header .gux-left:focus-visible,.gux-calendar-beta .gux-header .gux-right:focus-visible{outline:var(--gse-semantic-focusOutline-md-borderWidth) solid var(--gse-semantic-border-focus);outline-offset:var(--gse-semantic-focusOutline-offset)}.gux-calendar-beta .gux-content{display:flex;flex-direction:column;gap:var(--gse-ui-calendarMenu-dateBody-gap);padding:var(--gse-ui-calendarMenu-dateBody-padding);color:var(--gse-ui-calendarMenu-date-default-foregroundColor);background-color:var(--gse-ui-calendarMenu-backgroundColor);border-radius:var(--gse-ui-calendarMenu-single-body-borderRadius)}.gux-calendar-beta .gux-week-days{font-family:var(--gse-ui-calendarMenu-day-headerText-fontFamily);font-size:var(--gse-ui-calendarMenu-day-headerText-fontSize);font-weight:var(--gse-ui-calendarMenu-day-headerText-fontWeight);color:var(--gse-ui-calendarMenu-month-default-foregroundColor);text-align:center}.gux-calendar-beta .gux-week-days .gux-week-day{display:inline-block;inline-size:var(--gse-ui-calendarMenu-day-range-height);block-size:var(--gse-ui-calendarMenu-day-range-width)}";

const GuxCalendar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * The date that receives focus when selecting a specific day. This also
         * determines what month is currently displayed. The corresponding element
         * does not necessarily have browser focus at any given time, since focus
         * may be on other parts of the component.
         */
        this.focusDate = qi.Now.plainDateISO();
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
                    return val ? qi.PlainDate.from(val) : undefined;
                },
                max: (val) => {
                    return val ? qi.PlainDate.from(val) : undefined;
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
        const selectedDate = qi.PlainDate.from(dayElement.day);
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
        const shiftInterval = qi.Duration.from(interval);
        let newFocusedValue = this.focusDate.add(shiftInterval);
        // Clamp to the valid range
        if (this.min &&
            qi.PlainDate.compare(newFocusedValue, this.min) == -1) {
            newFocusedValue = this.min;
        }
        else if (this.max &&
            qi.PlainDate.compare(newFocusedValue, this.max) == 1) {
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
        return ((this.min && qi.PlainDate.compare(date, this.min) == -1) ||
            (this.max && qi.PlainDate.compare(date, this.max) == 1));
    }
    getMonthDays() {
        const today = qi.Now.plainDateISO();
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
                date: qi.PlainDate.from(currentDate),
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
            return qi.PlainDate.from(this.slottedInput.value);
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
    get root() { return getElement(this); }
};
GuxCalendar.style = guxCalendarCss;

export { GuxCalendar as gux_calendar_beta };
