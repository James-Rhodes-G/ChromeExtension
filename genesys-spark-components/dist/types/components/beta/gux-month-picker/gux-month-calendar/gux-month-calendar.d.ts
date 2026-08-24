import { JSX } from '../../../../stencil-public-runtime';
import { GuxISOYearMonth } from '../../../../utils/date/year-month-values';
export declare class GuxMonthCalendar {
    private i18n;
    private nextYearElement;
    private previousYearElement;
    root: HTMLElement;
    /**
     * The current selected year and month in ISO8601 format (yyyy-mm)
     */
    value: GuxISOYearMonth;
    /**
     * The min year and month selectable in ISO8601 format (yyyy-mm)
     */
    min: GuxISOYearMonth;
    /**
     * The max year and month selectable in ISO8601 format (yyyy-mm)
     */
    max: GuxISOYearMonth;
    year: string;
    locale: string;
    previewValue: string;
    /**
     * Controls hiding and showing the month-calendar
     */
    expanded: boolean;
    onValueUpdate(newValue: GuxISOYearMonth): void;
    /**
     * Focus a month
     */
    guxFocus(iSOYearMonth: GuxISOYearMonth): Promise<void>;
    onKeyDown(event: KeyboardEvent): void;
    private focusSelectedMonth;
    private nextYearElementOnBlur;
    componentWillLoad(): Promise<void>;
    private updateValue;
    private isOutOfBounds;
    private onMonthClick;
    private isCurrentMonth;
    private getMonthAriaLabel;
    private getYearLabel;
    private isSelectedMonth;
    private isAriaSelectedMonth;
    private changeYear;
    private isPreviousYearLessThanMinYear;
    private isNextYearGreaterThanMaxYear;
    private getMonthShortName;
    private renderHeader;
    private renderMonths;
    render(): JSX.Element;
}
