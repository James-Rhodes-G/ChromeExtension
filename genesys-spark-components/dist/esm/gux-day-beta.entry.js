import { r as registerInstance, h, a as getElement } from './index-xFL2agjT.js';
import { g as getDesiredLocale } from './index-Dac2qHbK.js';
import { d as dateTimeFormat } from './intl-CpptOorV.js';
import { q as qi } from './index.esm-ByC1Z2e8.js';
import './get-closest-element-Cd4R0amv.js';
import './get-closest-element-BZb6pJEJ.js';
import './_commonjsHelpers-BFTU3MAI.js';

/**
 * Formats a PlainDate Temporal polyfill object. Once browser support for Temporal
 * lands, this can be removed, as the `Intl` formatters should handle Temporal
 * entities natively at that point.
 *
 * @param formatter The formatter to use - should be derived from from our intl utilities
 * @param date The date to format
 * @returns a formatted date string
 */
function formatPlainDate(formatter, date) {
    const formatDate = new Date();
    // These setters interpret the input as if they came from the current browser
    // timezone, so they will not result in day shifts on format to timezones which
    // would happen if we passed the values in via the Date constructor, where
    // they are interpreted as UTC
    formatDate.setFullYear(date.year);
    formatDate.setMonth(date.month - 1);
    formatDate.setDate(date.day);
    formatDate.setHours(12);
    formatDate.setMinutes(0);
    formatDate.setSeconds(0);
    formatDate.setMilliseconds(0);
    return formatter.format(formatDate);
}

const guxDayCss = ":host{display:inline-block;inline-size:var(--gse-ui-calendarMenu-day-date-size);block-size:var(--gse-ui-calendarMenu-day-input-height);outline:none;border:none;border-radius:var(--gse-ui-calendarMenu-month-borderRadius)}:host(:hover){background-color:var(--gse-ui-calendarMenu-date-hover-backgroundColor)}:host(:focus-within){outline:var(--gse-semantic-focusOutline-md-borderWidth) solid var(--gse-semantic-border-focus);outline-offset:var(--gse-semantic-focusOutline-offset);border-radius:var(--gse-ui-calendarMenu-month-focusBorderRadius)}:host([aria-current=true]){color:var(--gse-ui-calendarMenu-date-selected-foregroundColor);background-color:var(--gse-ui-calendarMenu-date-selected-backgroundColor)}:host(:disabled),:host(.gux-muted){opacity:var(--gse-ui-calendarMenu-disabled-opacity)}button{padding:0;margin:0;color:inherit;background:none;border:none;inline-size:100%;block-size:100%;font-family:var(--gse-ui-calendarMenu-date-currentText-fontFamily);font-size:var(--gse-ui-calendarMenu-date-defaultText-fontSize);font-style:normal;font-weight:var(--gse-ui-calendarMenu-date-defaultText-fontWeight);line-height:32px;vertical-align:middle;text-align:center;cursor:pointer}button:focus{outline:none}.gux-sr-only:not(:focus):not(:active){position:absolute;width:1px;height:1px;overflow:hidden;white-space:nowrap;clip:rect(0 0 0 0);clip-path:inset(50%)}";

const GuxDay = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /* Watcher to sync the internal date with the day attribute on changes */
    onDayPropChange() {
        this.readDateFromProp();
    }
    /**
     * Syncs the internal rich `date` from the string `day` prop. Needs
     * to run when connected to the DOM, and when the prop changes.
     */
    readDateFromProp() {
        this.date = qi.PlainDate.from(this.day);
    }
    async connectedCallback() {
        this.readDateFromProp();
        const locale = getDesiredLocale(this.root);
        this.readerFormatter = dateTimeFormat(locale, {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
    render() {
        return (h("button", { key: '4282bb9b77fc4238e0748cc142f4e422ab29be41', type: "button", disabled: this.disabled }, h("slot", { key: '54b746f12a4a7d95468f983e6cb5bbeba0733061' }, h("span", { key: '712abfbeb57c6b477f46ad8999d0931ab12017b8', "aria-hidden": "true" }, this.date.day), h("span", { key: 'be8a82a9454f700a5b2966db75395e1d7b6ad789', class: "gux-sr-only" }, formatPlainDate(this.readerFormatter, this.date)))));
    }
    static get delegatesFocus() { return true; }
    get root() { return getElement(this); }
    static get watchers() { return {
        "day": ["onDayPropChange"]
    }; }
};
GuxDay.style = guxDayCss;

export { GuxDay as gux_day_beta };
