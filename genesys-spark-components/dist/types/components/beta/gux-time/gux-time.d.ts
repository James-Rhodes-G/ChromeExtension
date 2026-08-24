import { JSX } from '../../../stencil-public-runtime';
import { GuxDateTimeFormat } from '../../../i18n/DateTimeFormatter';
import { GuxTimeZoneIdentifier } from '../../../i18n/time-zone/types';
export declare class GuxTime {
    private formatter;
    private hasRegionalDatesCookie;
    /**
     * Reference to the host element.
     */
    root: HTMLElement;
    /**
     * The ISO string representation of the time to format
     */
    datetime: string;
    /**
     * Format option type
     */
    format: GuxDateTimeFormat;
    /**
     * Format time zone
     */
    /**
     * Time zone identifier
     */
    timeZone: GuxTimeZoneIdentifier;
    componentWillLoad(): void;
    private renderTime;
    render(): JSX.Element;
}
