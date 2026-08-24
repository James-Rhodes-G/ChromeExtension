import { timeZoneIdentifiers } from "../../i18n/time-zone/identifiers";
export function getValidTimezone(input, fallback) {
    if (timeZoneIdentifiers.includes(input)) {
        return input;
    }
    return fallback;
}
