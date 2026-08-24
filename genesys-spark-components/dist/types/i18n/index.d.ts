import { ILocalizedComponentResources } from './fetchResources';
type I18nValueContext = {
    [key: string]: string | number;
};
export type GetI18nValue = (resourceKey: string, context?: I18nValueContext) => string;
export declare function buildI18nForComponent(component: HTMLElement, defaultResources: ILocalizedComponentResources, parentComponent?: string): Promise<GetI18nValue>;
export declare function getComponentI18nResources(component: HTMLElement, defaultResources: ILocalizedComponentResources, locale: string, parentComponent?: string): Promise<ILocalizedComponentResources>;
export declare function getDesiredLocale(element: HTMLElement): string;
type WeekStartDayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6;
/**
 * Get the 0-indexed first day of the week for a given locale, where 0 represents
 * Sunday. This should be considered deprecated, as newer browser APIs use
 * a different day-of-week indexing scheme, provided by `getFirstDayOfWeek`
 * @param locale
 * @returns A number representing the first day of the week where 0 is Sunday
 */
export declare function getStartOfWeek(locale?: string): WeekStartDayOfWeek;
/**
 * Get the 1-indexed first day of the week for a given locale, where 1 represents
 * Monday. This is the preferred format, as it aligns with the scheme used in the
 * upcoming browser Temporal APIs.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getWeekInfo
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/dayOfWeek
 *
 * @param locale
 * @returns A number representing the first day of the week where 1 is Monday
 */
type FirstDayOfWeek = 1 | 2 | 3 | 4 | 5 | 6 | 7;
export declare function getFirstDayOfWeek(locale?: string): FirstDayOfWeek;
export {};
