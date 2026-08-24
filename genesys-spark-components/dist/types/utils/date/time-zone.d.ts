import { GuxTimeZoneListing } from '../../components/beta/gux-time-zone-picker/gux-time-zone-picker.types';
/**
 * @desc create a formatted offset string
 * @param {number} offset timezone offset in minutes
 * @returns {string} formatted offset string
 * @example '+HH:mm' or '-HH:mm'
 */
export declare function formatOffset(offset?: number): string;
export declare function getTimeZoneList(): GuxTimeZoneListing[];
