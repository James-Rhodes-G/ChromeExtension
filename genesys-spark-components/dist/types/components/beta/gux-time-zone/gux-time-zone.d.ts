import { JSX } from '../../../stencil-public-runtime';
import { GuxTimeZoneIdentifier } from '../../../i18n/time-zone/types';
export declare class GuxTimeZoneBeta {
    private i18n;
    /**
     * Reference to the host element.
     */
    root: HTMLElement;
    /**
     * The id of the time zone to display
     */
    timeZoneId: GuxTimeZoneIdentifier;
    /**
     * True to display the zone's offset from UTC
     */
    offset: boolean;
    /**
     * True to display surround the offset with parentheses
     */
    surroundOffset: boolean;
    /**
     * True to shorten the displayed zone name: 'Europe/London' -> 'London'
     */
    shorten: boolean;
    private renderZoneDisplay;
    componentWillLoad(): Promise<void>;
    render(): JSX.Element;
}
