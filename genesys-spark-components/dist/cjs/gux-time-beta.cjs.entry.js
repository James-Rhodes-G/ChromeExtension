'use strict';

var index = require('./index-BLhHoh_r.js');
var usage = require('./usage-v50bi18B.js');
var getValidTimezone = require('./get-valid-timezone-BsXNFmOL.js');
var intl = require('./intl-CN825h6c.js');
var useRegionalDates = require('./use-regional-dates-qjhuD9Ak.js');
var index$1 = require('./index-QInGO-Pu.js');
require('./get-closest-element-CIMI0Cx4.js');
require('./get-closest-element-CfyZl7i7.js');

const GuxTime = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.hasRegionalDatesCookie = false;
        /**
         * The ISO string representation of the time to format
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
    renderTime() {
        if (this.hasRegionalDatesCookie) {
            return intl.dateTimeFormat(intl.determineDisplayLocale(this.root), {
                timeStyle: this.format,
                timeZone: getValidTimezone.getValidTimezone(this.timeZone)
            })
                .format(new Date(this.datetime));
        }
        else {
            return this.formatter.formatTime(new Date(this.datetime), this.format, {
                timeZone: getValidTimezone.getValidTimezone(this.timeZone)
            });
        }
    }
    render() {
        return (index.h(index.Host, { key: 'ff847978a4b90cfa030506f5e8bf3627b4bb616d' }, this.renderTime()));
    }
    get root() { return index.getElement(this); }
};

exports.gux_time_beta = GuxTime;
