import { JSX } from '../../../stencil-public-runtime';
import { GuxCalendarDayOfWeek } from './gux-calendar.types';
import { Temporal } from '@js-temporal/polyfill';
export declare class GuxCalendar {
    root: HTMLElement;
    startDayOfWeek: GuxCalendarDayOfWeek;
    guxForceUpdate(): Promise<void>;
    /**
     * The date that receives focus when selecting a specific day. This also
     * determines what month is currently displayed. The corresponding element
     * does not necessarily have browser focus at any given time, since focus
     * may be on other parts of the component.
     */
    private focusDate;
    min: Temporal.PlainDate | null;
    max: Temporal.PlainDate | null;
    disabled: boolean;
    private attributeSynchronizer;
    private locale;
    private i18n;
    private MONTH_DATE_COUNT;
    private get slottedInput();
    componentWillLoad(): Promise<void>;
    onSlotChange(): void;
    disconnectedCallback(): Promise<void>;
    private detectDayClick;
    /**
     * Finds the `gux-day` element corresponding to the provided
     * date string.
     * @param dateStr The date to find in ISO format
     */
    private getGuxDayForDate;
    private selectDate;
    /**
     * Shifts the focused date by the provided interval
     * @param interval A Temporal-compatible interval definition
     */
    private shiftFocusDate;
    /**
     * Directs browser focus to the element corresponding to the `.focusDate` date.
     */
    private focusOnFocusDate;
    private onKeyDown;
    /**
     * Returns true if the date is less than the min date or greater than the max date
     */
    private isInvalidDate;
    private getMonthDays;
    private getFocusDate;
    private getSelectedDate;
    private renderHeader;
    private renderContent;
    render(): JSX.Element;
}
