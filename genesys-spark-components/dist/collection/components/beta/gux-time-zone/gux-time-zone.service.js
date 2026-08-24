import { getTimeZoneList, formatOffset } from "../../../utils/date/time-zone";
export function shortenZone(zone) {
    const sections = zone.split('/');
    return (sections === null || sections === void 0 ? void 0 : sections.pop()) || zone;
}
export function getLocalizedOffset(localizedUTC, timeZoneId) {
    const zoneList = getTimeZoneList();
    const timeZone = zoneList.find(zone => zone.name === timeZoneId);
    const formattedOffset = formatOffset(timeZone === null || timeZone === void 0 ? void 0 : timeZone.currentTimeOffsetInMinutes);
    return `${localizedUTC}${formattedOffset}`;
}
