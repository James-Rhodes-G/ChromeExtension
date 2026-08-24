import { r as registerInstance, h, H as Host, a as getElement } from './index-xFL2agjT.js';
import { t as trackComponent } from './usage-D2Q7fj4V.js';
import { D as DateTimeFormatter, g as getValidTimezone } from './get-valid-timezone-0-EKRx8O.js';
import { d as dateTimeFormat, a as determineDisplayLocale } from './intl-CpptOorV.js';
import { u as useRegionalDates } from './use-regional-dates-ZuNZ-MBw.js';
import { g as getDesiredLocale } from './index-Dac2qHbK.js';
import './get-closest-element-BZb6pJEJ.js';
import './get-closest-element-Cd4R0amv.js';

const GuxDate = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.hasRegionalDatesCookie = false;
        /**
         * The ISO string representation of the date to format
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
    renderDate() {
        if (this.hasRegionalDatesCookie) {
            return dateTimeFormat(determineDisplayLocale(this.root), {
                dateStyle: this.format,
                timeZone: getValidTimezone(this.timeZone)
            })
                .format(new Date(this.datetime));
        }
        else {
            return this.formatter.formatDate(new Date(this.datetime), this.format, {
                timeZone: getValidTimezone(this.timeZone)
            });
        }
    }
    render() {
        return (h(Host, { key: '491e0809d9072e6cdddb2fbb18e9a19b0bb827f6' }, this.renderDate()));
    }
    get root() { return getElement(this); }
};

export { GuxDate as gux_date_beta };
