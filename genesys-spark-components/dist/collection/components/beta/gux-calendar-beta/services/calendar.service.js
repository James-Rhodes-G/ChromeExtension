import { Temporal } from "@js-temporal/polyfill";
/**
 * Given a date, return the first day of the month that date is in.
 */
export function getFirstOfMonth(date) {
    return Temporal.PlainDate.from({
        day: 1,
        month: date.month,
        year: date.year
    });
}
export function getWeekdays(locale, startDayOfWeek) {
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
export function localizedYearMonth(date, locale) {
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
export function firstDateInWeek(date, startDayOfWeek) {
    let dayDelta = startDayOfWeek - date.dayOfWeek;
    if (dayDelta > 0) {
        dayDelta = dayDelta - 7;
    }
    return date.add({ days: dayDelta });
}
export class AttributeSynchronizer {
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
