import { h, Host } from "@stencil/core";
import { trackComponent } from "../../../utils/tracking/usage";
import { DateTimeFormatter } from "../../../i18n/DateTimeFormatter";
import * as sparkIntl from "../../../genesys-spark-utils/intl";
// Remove with this ticket https://inindca.atlassian.net/browse/COMUI-2598
import { useRegionalDates } from "../../../i18n/use-regional-dates";
import { getDesiredLocale } from "../../../i18n/index";
import { getValidTimezone } from "../../../utils/date/get-valid-timezone";
export class GuxDate {
    constructor() {
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
            return sparkIntl
                .dateTimeFormat(sparkIntl.determineDisplayLocale(this.root), {
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
    static get is() { return "gux-date-beta"; }
    static get encapsulation() { return "shadow"; }
    static get properties() {
        return {
            "datetime": {
                "type": "string",
                "attribute": "datetime",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The ISO string representation of the date to format"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "new Date().toISOString()"
            },
            "format": {
                "type": "string",
                "attribute": "format",
                "mutable": false,
                "complexType": {
                    "original": "GuxDateTimeFormat",
                    "resolved": "\"full\" | \"long\" | \"medium\" | \"short\"",
                    "references": {
                        "GuxDateTimeFormat": {
                            "location": "import",
                            "path": "../../../i18n/DateTimeFormatter",
                            "id": "src/i18n/DateTimeFormatter.ts::GuxDateTimeFormat"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Format option type"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'short'"
            },
            "timeZone": {
                "type": "string",
                "attribute": "time-zone",
                "mutable": false,
                "complexType": {
                    "original": "GuxTimeZoneIdentifier",
                    "resolved": "\"Africa/Abidjan\" | \"Africa/Accra\" | \"Africa/Addis_Ababa\" | \"Africa/Algiers\" | \"Africa/Asmara\" | \"Africa/Bamako\" | \"Africa/Bangui\" | \"Africa/Banjul\" | \"Africa/Bissau\" | \"Africa/Blantyre\" | \"Africa/Brazzaville\" | \"Africa/Bujumbura\" | \"Africa/Cairo\" | \"Africa/Casablanca\" | \"Africa/Ceuta\" | \"Africa/Conakry\" | \"Africa/Dakar\" | \"Africa/Dar_es_Salaam\" | \"Africa/Djibouti\" | \"Africa/Douala\" | \"Africa/El_Aaiun\" | \"Africa/Freetown\" | \"Africa/Gaborone\" | \"Africa/Harare\" | \"Africa/Johannesburg\" | \"Africa/Juba\" | \"Africa/Kampala\" | \"Africa/Khartoum\" | \"Africa/Kigali\" | \"Africa/Kinshasa\" | \"Africa/Lagos\" | \"Africa/Libreville\" | \"Africa/Lome\" | \"Africa/Luanda\" | \"Africa/Lubumbashi\" | \"Africa/Lusaka\" | \"Africa/Malabo\" | \"Africa/Maputo\" | \"Africa/Maseru\" | \"Africa/Mbabane\" | \"Africa/Mogadishu\" | \"Africa/Monrovia\" | \"Africa/Nairobi\" | \"Africa/Ndjamena\" | \"Africa/Niamey\" | \"Africa/Nouakchott\" | \"Africa/Ouagadougou\" | \"Africa/Porto-Novo\" | \"Africa/Sao_Tome\" | \"Africa/Tripoli\" | \"Africa/Tunis\" | \"Africa/Windhoek\" | \"America/Adak\" | \"America/Anchorage\" | \"America/Anguilla\" | \"America/Antigua\" | \"America/Araguaina\" | \"America/Argentina/Buenos_Aires\" | \"America/Argentina/Catamarca\" | \"America/Argentina/Cordoba\" | \"America/Argentina/Jujuy\" | \"America/Argentina/La_Rioja\" | \"America/Argentina/Mendoza\" | \"America/Argentina/Rio_Gallegos\" | \"America/Argentina/Salta\" | \"America/Argentina/San_Juan\" | \"America/Argentina/San_Luis\" | \"America/Argentina/Tucuman\" | \"America/Argentina/Ushuaia\" | \"America/Aruba\" | \"America/Asuncion\" | \"America/Atikokan\" | \"America/Bahia\" | \"America/Bahia_Banderas\" | \"America/Barbados\" | \"America/Belem\" | \"America/Belize\" | \"America/Blanc-Sablon\" | \"America/Boa_Vista\" | \"America/Bogota\" | \"America/Boise\" | \"America/Cambridge_Bay\" | \"America/Campo_Grande\" | \"America/Cancun\" | \"America/Caracas\" | \"America/Cayenne\" | \"America/Cayman\" | \"America/Chicago\" | \"America/Chihuahua\" | \"America/Costa_Rica\" | \"America/Creston\" | \"America/Cuiaba\" | \"America/Curacao\" | \"America/Danmarkshavn\" | \"America/Dawson\" | \"America/Dawson_Creek\" | \"America/Denver\" | \"America/Detroit\" | \"America/Dominica\" | \"America/Edmonton\" | \"America/Eirunepe\" | \"America/El_Salvador\" | \"America/Fort_Nelson\" | \"America/Fortaleza\" | \"America/Glace_Bay\" | \"America/Goose_Bay\" | \"America/Grand_Turk\" | \"America/Grenada\" | \"America/Guadeloupe\" | \"America/Guatemala\" | \"America/Guayaquil\" | \"America/Guyana\" | \"America/Halifax\" | \"America/Havana\" | \"America/Hermosillo\" | \"America/Indiana/Indianapolis\" | \"America/Indiana/Knox\" | \"America/Indiana/Marengo\" | \"America/Indiana/Petersburg\" | \"America/Indiana/Tell_City\" | \"America/Indiana/Vevay\" | \"America/Indiana/Vincennes\" | \"America/Indiana/Winamac\" | \"America/Inuvik\" | \"America/Iqaluit\" | \"America/Jamaica\" | \"America/Juneau\" | \"America/Kentucky/Louisville\" | \"America/Kentucky/Monticello\" | \"America/Kralendijk\" | \"America/La_Paz\" | \"America/Lima\" | \"America/Los_Angeles\" | \"America/Lower_Princes\" | \"America/Maceio\" | \"America/Managua\" | \"America/Manaus\" | \"America/Marigot\" | \"America/Martinique\" | \"America/Matamoros\" | \"America/Mazatlan\" | \"America/Menominee\" | \"America/Merida\" | \"America/Metlakatla\" | \"America/Mexico_City\" | \"America/Miquelon\" | \"America/Moncton\" | \"America/Monterrey\" | \"America/Montevideo\" | \"America/Montserrat\" | \"America/Nassau\" | \"America/New_York\" | \"America/Nome\" | \"America/Noronha\" | \"America/North_Dakota/Beulah\" | \"America/North_Dakota/Center\" | \"America/North_Dakota/New_Salem\" | \"America/Nuuk\" | \"America/Ojinaga\" | \"America/Panama\" | \"America/Paramaribo\" | \"America/Phoenix\" | \"America/Port-au-Prince\" | \"America/Port_of_Spain\" | \"America/Porto_Velho\" | \"America/Puerto_Rico\" | \"America/Punta_Arenas\" | \"America/Rankin_Inlet\" | \"America/Recife\" | \"America/Regina\" | \"America/Resolute\" | \"America/Rio_Branco\" | \"America/Santarem\" | \"America/Santiago\" | \"America/Santo_Domingo\" | \"America/Sao_Paulo\" | \"America/Scoresbysund\" | \"America/Sitka\" | \"America/St_Barthelemy\" | \"America/St_Johns\" | \"America/St_Kitts\" | \"America/St_Lucia\" | \"America/St_Thomas\" | \"America/St_Vincent\" | \"America/Swift_Current\" | \"America/Tegucigalpa\" | \"America/Thule\" | \"America/Tijuana\" | \"America/Toronto\" | \"America/Tortola\" | \"America/Vancouver\" | \"America/Whitehorse\" | \"America/Winnipeg\" | \"America/Yakutat\" | \"Antarctica/Casey\" | \"Antarctica/Davis\" | \"Antarctica/DumontDUrville\" | \"Antarctica/Macquarie\" | \"Antarctica/Mawson\" | \"Antarctica/McMurdo\" | \"Antarctica/Palmer\" | \"Antarctica/Rothera\" | \"Antarctica/Syowa\" | \"Antarctica/Troll\" | \"Antarctica/Vostok\" | \"Arctic/Longyearbyen\" | \"Asia/Aden\" | \"Asia/Almaty\" | \"Asia/Amman\" | \"Asia/Anadyr\" | \"Asia/Aqtau\" | \"Asia/Aqtobe\" | \"Asia/Ashgabat\" | \"Asia/Atyrau\" | \"Asia/Baghdad\" | \"Asia/Bahrain\" | \"Asia/Baku\" | \"Asia/Bangkok\" | \"Asia/Barnaul\" | \"Asia/Beirut\" | \"Asia/Bishkek\" | \"Asia/Brunei\" | \"Asia/Chita\" | \"Asia/Choibalsan\" | \"Asia/Colombo\" | \"Asia/Damascus\" | \"Asia/Dhaka\" | \"Asia/Dili\" | \"Asia/Dubai\" | \"Asia/Dushanbe\" | \"Asia/Famagusta\" | \"Asia/Gaza\" | \"Asia/Hebron\" | \"Asia/Ho_Chi_Minh\" | \"Asia/Hong_Kong\" | \"Asia/Hovd\" | \"Asia/Irkutsk\" | \"Asia/Jakarta\" | \"Asia/Jayapura\" | \"Asia/Jerusalem\" | \"Asia/Kabul\" | \"Asia/Kamchatka\" | \"Asia/Karachi\" | \"Asia/Kathmandu\" | \"Asia/Khandyga\" | \"Asia/Kolkata\" | \"Asia/Krasnoyarsk\" | \"Asia/Kuala_Lumpur\" | \"Asia/Kuching\" | \"Asia/Kuwait\" | \"Asia/Macau\" | \"Asia/Magadan\" | \"Asia/Makassar\" | \"Asia/Manila\" | \"Asia/Muscat\" | \"Asia/Nicosia\" | \"Asia/Novokuznetsk\" | \"Asia/Novosibirsk\" | \"Asia/Omsk\" | \"Asia/Oral\" | \"Asia/Phnom_Penh\" | \"Asia/Pontianak\" | \"Asia/Pyongyang\" | \"Asia/Qatar\" | \"Asia/Qostanay\" | \"Asia/Qyzylorda\" | \"Asia/Riyadh\" | \"Asia/Sakhalin\" | \"Asia/Samarkand\" | \"Asia/Seoul\" | \"Asia/Shanghai\" | \"Asia/Singapore\" | \"Asia/Srednekolymsk\" | \"Asia/Taipei\" | \"Asia/Tashkent\" | \"Asia/Tbilisi\" | \"Asia/Tehran\" | \"Asia/Thimphu\" | \"Asia/Tokyo\" | \"Asia/Tomsk\" | \"Asia/Ulaanbaatar\" | \"Asia/Urumqi\" | \"Asia/Ust-Nera\" | \"Asia/Vientiane\" | \"Asia/Vladivostok\" | \"Asia/Yakutsk\" | \"Asia/Yangon\" | \"Asia/Yekaterinburg\" | \"Asia/Yerevan\" | \"Atlantic/Azores\" | \"Atlantic/Bermuda\" | \"Atlantic/Canary\" | \"Atlantic/Cape_Verde\" | \"Atlantic/Faroe\" | \"Atlantic/Madeira\" | \"Atlantic/Reykjavik\" | \"Atlantic/South_Georgia\" | \"Atlantic/St_Helena\" | \"Atlantic/Stanley\" | \"Australia/Adelaide\" | \"Australia/Brisbane\" | \"Australia/Broken_Hill\" | \"Australia/Darwin\" | \"Australia/Eucla\" | \"Australia/Hobart\" | \"Australia/Lindeman\" | \"Australia/Lord_Howe\" | \"Australia/Melbourne\" | \"Australia/Perth\" | \"Australia/Sydney\" | \"CET\" | \"CST6CDT\" | \"EET\" | \"EST\" | \"EST5EDT\" | \"Etc/GMT\" | \"Etc/GMT+1\" | \"Etc/GMT+10\" | \"Etc/GMT+11\" | \"Etc/GMT+12\" | \"Etc/GMT+2\" | \"Etc/GMT+3\" | \"Etc/GMT+4\" | \"Etc/GMT+5\" | \"Etc/GMT+6\" | \"Etc/GMT+7\" | \"Etc/GMT+8\" | \"Etc/GMT+9\" | \"Etc/GMT-1\" | \"Etc/GMT-10\" | \"Etc/GMT-11\" | \"Etc/GMT-12\" | \"Etc/GMT-13\" | \"Etc/GMT-14\" | \"Etc/GMT-2\" | \"Etc/GMT-3\" | \"Etc/GMT-4\" | \"Etc/GMT-5\" | \"Etc/GMT-6\" | \"Etc/GMT-7\" | \"Etc/GMT-8\" | \"Etc/GMT-9\" | \"Etc/UTC\" | \"Europe/Amsterdam\" | \"Europe/Andorra\" | \"Europe/Astrakhan\" | \"Europe/Athens\" | \"Europe/Belgrade\" | \"Europe/Berlin\" | \"Europe/Bratislava\" | \"Europe/Brussels\" | \"Europe/Bucharest\" | \"Europe/Budapest\" | \"Europe/Busingen\" | \"Europe/Chisinau\" | \"Europe/Copenhagen\" | \"Europe/Dublin\" | \"Europe/Gibraltar\" | \"Europe/Guernsey\" | \"Europe/Helsinki\" | \"Europe/Isle_of_Man\" | \"Europe/Istanbul\" | \"Europe/Jersey\" | \"Europe/Kaliningrad\" | \"Europe/Kirov\" | \"Europe/Kyiv\" | \"Europe/Lisbon\" | \"Europe/Ljubljana\" | \"Europe/London\" | \"Europe/Luxembourg\" | \"Europe/Madrid\" | \"Europe/Malta\" | \"Europe/Mariehamn\" | \"Europe/Minsk\" | \"Europe/Monaco\" | \"Europe/Moscow\" | \"Europe/Oslo\" | \"Europe/Paris\" | \"Europe/Podgorica\" | \"Europe/Prague\" | \"Europe/Riga\" | \"Europe/Rome\" | \"Europe/Samara\" | \"Europe/San_Marino\" | \"Europe/Sarajevo\" | \"Europe/Saratov\" | \"Europe/Simferopol\" | \"Europe/Skopje\" | \"Europe/Sofia\" | \"Europe/Stockholm\" | \"Europe/Tallinn\" | \"Europe/Tirane\" | \"Europe/Ulyanovsk\" | \"Europe/Vaduz\" | \"Europe/Vatican\" | \"Europe/Vienna\" | \"Europe/Vilnius\" | \"Europe/Volgograd\" | \"Europe/Warsaw\" | \"Europe/Zagreb\" | \"Europe/Zurich\" | \"HST\" | \"Indian/Antananarivo\" | \"Indian/Chagos\" | \"Indian/Christmas\" | \"Indian/Cocos\" | \"Indian/Comoro\" | \"Indian/Kerguelen\" | \"Indian/Mahe\" | \"Indian/Maldives\" | \"Indian/Mauritius\" | \"Indian/Mayotte\" | \"Indian/Reunion\" | \"MET\" | \"MST\" | \"MST7MDT\" | \"PST8PDT\" | \"Pacific/Apia\" | \"Pacific/Auckland\" | \"Pacific/Bougainville\" | \"Pacific/Chatham\" | \"Pacific/Chuuk\" | \"Pacific/Easter\" | \"Pacific/Efate\" | \"Pacific/Fakaofo\" | \"Pacific/Fiji\" | \"Pacific/Funafuti\" | \"Pacific/Galapagos\" | \"Pacific/Gambier\" | \"Pacific/Guadalcanal\" | \"Pacific/Guam\" | \"Pacific/Honolulu\" | \"Pacific/Kanton\" | \"Pacific/Kiritimati\" | \"Pacific/Kosrae\" | \"Pacific/Kwajalein\" | \"Pacific/Majuro\" | \"Pacific/Marquesas\" | \"Pacific/Midway\" | \"Pacific/Nauru\" | \"Pacific/Niue\" | \"Pacific/Norfolk\" | \"Pacific/Noumea\" | \"Pacific/Pago_Pago\" | \"Pacific/Palau\" | \"Pacific/Pitcairn\" | \"Pacific/Pohnpei\" | \"Pacific/Port_Moresby\" | \"Pacific/Rarotonga\" | \"Pacific/Saipan\" | \"Pacific/Tahiti\" | \"Pacific/Tarawa\" | \"Pacific/Tongatapu\" | \"Pacific/Wake\" | \"Pacific/Wallis\" | \"UTC\" | \"WET\"",
                    "references": {
                        "GuxTimeZoneIdentifier": {
                            "location": "import",
                            "path": "../../../i18n/time-zone/types",
                            "id": "src/i18n/time-zone/types.ts::GuxTimeZoneIdentifier"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Time zone identifier"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
    static get elementRef() { return "root"; }
}
