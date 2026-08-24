import { r as registerInstance, h, H as Host, a as getElement } from './index-xFL2agjT.js';
import { t as trackComponent } from './usage-D2Q7fj4V.js';
import { D as DateTimeFormatter, g as getValidTimezone } from './get-valid-timezone-0-EKRx8O.js';
import { d as dateTimeFormat, a as determineDisplayLocale } from './intl-CpptOorV.js';
import { u as useRegionalDates } from './use-regional-dates-ZuNZ-MBw.js';
import { g as getDesiredLocale } from './index-Dac2qHbK.js';
import './get-closest-element-BZb6pJEJ.js';
import './get-closest-element-Cd4R0amv.js';

const GuxDateTime = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.hasRegionalDatesCookie = false;
        /**
         * The ISO string representation of the datetime to format
         */
        this.datetime = new Date().toISOString();
        /**
         * Format option type
         */
        this.format = 'short';
    }
    componentWillLoad() {
        trackComponent(this.root);
        if (useRegionalDates()) {
            this.hasRegionalDatesCookie = true;
        }
        else {
            this.formatter = new DateTimeFormatter(getDesiredLocale(this.root));
        }
    }
    renderDateTime() {
        if (this.hasRegionalDatesCookie) {
            return dateTimeFormat(determineDisplayLocale(this.root), {
                dateStyle: this.format,
                timeStyle: this.format,
                timeZone: getValidTimezone(this.timeZone)
            })
                .format(new Date(this.datetime));
        }
        else {
            return this.formatter.formatDateTime(new Date(this.datetime), this.format, {
                timeZone: getValidTimezone(this.timeZone)
            });
        }
    }
    render() {
        return (h(Host, { key: '225dd061be97e285818fd2cc95dc91f3ab8caad3' }, this.renderDateTime()));
    }
    get root() { return getElement(this); }
};

export { GuxDateTime as gux_date_time_beta };
