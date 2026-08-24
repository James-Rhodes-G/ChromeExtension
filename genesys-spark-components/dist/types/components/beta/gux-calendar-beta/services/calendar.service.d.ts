import { Temporal } from '@js-temporal/polyfill';
/**
 * Given a date, return the first day of the month that date is in.
 */
export declare function getFirstOfMonth(date: Temporal.PlainDate): Temporal.PlainDate;
export declare function getWeekdays(locale: Intl.LocalesArgument, startDayOfWeek: number): string[];
export declare function localizedYearMonth(date: Temporal.PlainDate, locale: string): string;
/**
 * Given a starting date and the first day of the week, find the first date of
 * the week of the provided date. For example, February 1st 2025 is a Saturday.
 * If the first day of the week is considered Monday (1), this function would
 * return a date of 2027-01-27.
 * @param date The date we want to find the start of the week for
 * @param startDayOfWeek The day that should be considered the first day of the week
 * @returns The first day of the first week of the provided month
 */
export declare function firstDateInWeek(date: Temporal.PlainDate, startDayOfWeek: number): Temporal.PlainDate;
type SynchronizerMappings<Source, Dest> = {
    [Property in keyof Dest & keyof Source]: (source: Source[Property]) => Dest[Property];
};
interface AttributeSynchronizerOptions<S extends HTMLElement, D> {
    readFrom: S;
    writeTo: D;
    mappings: SynchronizerMappings<S, D>;
}
export declare class AttributeSynchronizer<S extends HTMLElement, D> {
    sourceElement: S;
    writeTarget: D;
    mappings: SynchronizerMappings<S, D>;
    observer: MutationObserver;
    constructor(options: AttributeSynchronizerOptions<S, D>);
    /**
     * Changes the source element attributes are copied from. Usually called in
     * response to a `slotchange` event.
     * @param sourceElement
     */
    setSourceElement(sourceElement: S): void;
    /**
     * Disconnects the synchronization between the source and destination elements.
     * Should be called to clean up when the relationship is no longer needed,
     * typically on `disconnectedCallback`.
     */
    disconnect(): void;
    private syncAll;
    private syncAttribute;
}
export {};
