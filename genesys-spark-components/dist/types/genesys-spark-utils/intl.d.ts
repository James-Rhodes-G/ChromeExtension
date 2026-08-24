/**
 * Provides an [Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)
 * object for formatting dates and times. Unlike the native version, `locale` is
 * an optional argument. If not provided, the function will try to determine the
 * locale from the DOM, where it should be set for a11y reasons.
 * @param locale optional locale to use for formatting
 * @param options options to pass to the Intl.DateTimeFormat constructor
 * @returns a new DateTimeFormat
 */
export declare function dateTimeFormat(localeOrOptions: string | Intl.DateTimeFormatOptions, options?: Intl.DateTimeFormatOptions): Intl.DateTimeFormat;
/**
 * Provides an [Intl.RelativeTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat)
 * object for formatting dates and times. Unlike the native version, `locale` is
 * an optional argument. If not provided, the function will try to determine the
 * locale from the DOM, where it should be set for a11y reasons.
 * @param locale optional locale to use for formatting
 * @param options options to pass to the Intl.RelativeTimeFormat constructor
 * @returns a new RelativeTimeFormat
 */
export declare function relativeTimeFormat(localeOrOptions: string | Intl.RelativeTimeFormatOptions, options?: Intl.RelativeTimeFormatOptions): Intl.RelativeTimeFormat;
/**
 * Makes a best effort to return the locale that should be used for a given element
 * by checking language tags on ancestors. If no element is provided, it will
 * start with the document's <body> tag. If no locale can be found, it will use
 * the browser's locale preference. It will also try to add a region to regionless
 * locales when there is a partial match with the browser's locale.
 * @returns a locale string (e.g. 'en-US', 'en', 'de-DE', etc)
 */
export declare function determineDisplayLocale(element?: HTMLElement): string;
export declare function getFormat(locale: string): string;
