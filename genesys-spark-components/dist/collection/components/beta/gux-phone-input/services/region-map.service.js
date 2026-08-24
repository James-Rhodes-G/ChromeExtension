import { regionCountryCodeMap } from "./RegionCountryCodeMap";
export function getRegionObjects(locale, i18n, phoneUtil) {
    let regionObjects = [];
    for (const [key, val] of Object.entries(regionCountryCodeMap)) {
        regionObjects.push({
            alpha2Code: key,
            name: i18n(key),
            dialCode: val
        });
    }
    regionObjects = regionObjects.filter(r => phoneUtil
        .getSupportedRegions()
        .includes(r.alpha2Code));
    regionObjects.sort((a, b) => a.name.localeCompare(b.name, locale));
    return regionObjects;
}
