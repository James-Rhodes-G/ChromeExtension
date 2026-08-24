import { r as registerInstance, h, H as Host, a as getElement } from './index-xFL2agjT.js';
import { t as trackComponent } from './usage-D2Q7fj4V.js';
import { b as buildI18nForComponent } from './index-Dac2qHbK.js';
import { g as getTimeZoneList, f as formatOffset, t as translationResources } from './time-zone-DzB2fI_Z.js';
import './get-closest-element-Cd4R0amv.js';

function shortenZone(zone) {
    const sections = zone.split('/');
    return (sections === null || sections === void 0 ? void 0 : sections.pop()) || zone;
}
function getLocalizedOffset(localizedUTC, timeZoneId) {
    const zoneList = getTimeZoneList();
    const timeZone = zoneList.find(zone => zone.name === timeZoneId);
    const formattedOffset = formatOffset(timeZone === null || timeZone === void 0 ? void 0 : timeZone.currentTimeOffsetInMinutes);
    return `${localizedUTC}${formattedOffset}`;
}

const GuxTimeZoneBeta = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h("span", null, displayText));
    }
    async componentWillLoad() {
        trackComponent(this.root);
        this.i18n = await buildI18nForComponent(this.root, translationResources, 'gux-time-zone-picker');
    }
    render() {
        return (h(Host, { key: 'c7d65b4a3e43ca4e5ba122747a9b2d80a33a901f' }, this.renderZoneDisplay()));
    }
    get root() { return getElement(this); }
};

export { GuxTimeZoneBeta as gux_time_zone_beta };
