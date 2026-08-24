import { JSX } from '../../../stencil-public-runtime';
import { Temporal } from '@js-temporal/polyfill';
/**
 * The gux-day component is how we render a day within an calendar. It should
 * not be used stand-alone.
 */
export declare class GuxDay {
    root: HTMLElement;
    day: string;
    disabled: boolean;
    date: Temporal.PlainDate;
    onDayPropChange(): void;
    dayFormatter: Intl.DateTimeFormat;
    readerFormatter: Intl.DateTimeFormat;
    /**
     * Syncs the internal rich `date` from the string `day` prop. Needs
     * to run when connected to the DOM, and when the prop changes.
     */
    readDateFromProp(): void;
    connectedCallback(): Promise<void>;
    render(): JSX.Element;
}
