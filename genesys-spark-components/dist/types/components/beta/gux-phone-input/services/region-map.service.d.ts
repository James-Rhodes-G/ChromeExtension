import { GetI18nValue } from '../../../../i18n';
import libphonenumber from 'google-libphonenumber';
import { RegionObject } from '../gux-phone.types';
export declare function getRegionObjects(locale: string, i18n: GetI18nValue, phoneUtil: libphonenumber.PhoneNumberUtil): RegionObject[];
