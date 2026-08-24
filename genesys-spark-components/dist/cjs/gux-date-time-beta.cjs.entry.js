'use strict';

var index = require('./index-BLhHoh_r.js');
var usage = require('./usage-v50bi18B.js');
var getValidTimezone = require('./get-valid-timezone-BsXNFmOL.js');
var intl = require('./intl-CN825h6c.js');
var useRegionalDates = require('./use-regional-dates-qjhuD9Ak.js');
var index$1 = require('./index-QInGO-Pu.js');
require('./get-closest-element-CIMI0Cx4.js');
require('./get-closest-element-CfyZl7i7.js');

const GuxDateTime = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        usage.trackComponent(this.root);
        if (useRegionalDates.useRegionalDates()) {
            this.hasRegionalDatesCookie = true;
        }
        else {
            this.formatter = new getValidTimezone.DateTimeFormatter(index$1.getDesiredLocale(this.root));
        }
    }
    renderDateTime() {
        if (this.hasRegionalDatesCookie) {
            return intl.dateTimeFormat(intl.determineDisplayLocale(this.root), {
                dateStyle: this.format,
                timeStyle: this.format,
                timeZone: getValidTimezone.getValidTimezone(this.timeZone)
            })
                .format(new Date(this.datetime));
        }
        else {
            return this.formatter.formatDateTime(new Date(this.datetime), this.format, {
                timeZone: getValidTimezone.getValidTimezone(this.timeZone)
            });
        }
    }
    render() {
        return (index.h(index.Host, { key: '225dd061be97e285818fd2cc95dc91f3ab8caad3' }, this.renderDateTime()));
    }
    get root() { return index.getElement(this); }
};

exports.gux_date_time_beta = GuxDateTime;
