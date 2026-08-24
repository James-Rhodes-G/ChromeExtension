/**
 * Helpers for working with the temporal polyfill. We should be able to remove
 * these once Temporal lands in browsers.
 */
import { Temporal } from '@js-temporal/polyfill';
/**
 * Formats a PlainDate Temporal polyfill object. Once browser support for Temporal
 * lands, this can be removed, as the `Intl` formatters should handle Temporal
 * entities natively at that point.
 *
 * @param formatter The formatter to use - should be derived from from our intl utilities
 * @param date The date to format
 * @returns a formatted date string
 */
export declare function formatPlainDate(formatter: Intl.DateTimeFormat, date: Temporal.PlainDate): string;
