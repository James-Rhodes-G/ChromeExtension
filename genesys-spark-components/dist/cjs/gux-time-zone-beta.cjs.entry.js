'use strict';

var index = require('./index-BLhHoh_r.js');
var usage = require('./usage-v50bi18B.js');
var index$1 = require('./index-QInGO-Pu.js');
var timeZone = require('./time-zone-D9oxRpEx.js');
require('./get-closest-element-CfyZl7i7.js');

function shortenZone(zone) {
    const sections = zone.split('/');
    return (sections === null || sections === void 0 ? void 0 : sections.pop()) || zone;
}
function getLocalizedOffset(localizedUTC, timeZoneId) {
    const zoneList = timeZone.getTimeZoneList();
    const timeZone$1 = zoneList.find(zone => zone.name === timeZoneId);
    const formattedOffset = timeZone.formatOffset(timeZone$1 === null || timeZone$1 === void 0 ? void 0 : timeZone$1.currentTimeOffsetInMinutes);
    return `${localizedUTC}${formattedOffset}`;
}

const GuxTimeZoneBeta = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    renderZoneDisplay() {
        let localizedZone = this.i18n(this.timeZoneId);
        if (this.shorten) {
            localizedZone = shortenZone(localizedZone);
        }
        let displayText = localizedZone;
        if (this.offset) {
            const localizedUTC = this.i18n('UTC');
            const localizedOffset = getLocalizedOffset(localizedUTC, this.timeZoneId);
            displayText = `${localizedZone} ${localizedOffset}`;
            if (this.surroundOffset) {
                displayText = `${localizedZone} (${localizedOffset})`;
            }
        }
        return (index.h("span", null, displayText));
    }
    async componentWillLoad() {
        usage.trackComponent(this.root);
        this.i18n = await index$1.buildI18nForComponent(this.root, timeZone.translationResources, 'gux-time-zone-picker');
    }
    render() {
        return (index.h(index.Host, { key: 'c7d65b4a3e43ca4e5ba122747a9b2d80a33a901f' }, this.renderZoneDisplay()));
    }
    get root() { return index.getElement(this); }
};

exports.gux_time_zone_beta = GuxTimeZoneBeta;
