import { h } from "@stencil/core";
import { buildI18nForComponent } from "../../../i18n";
import translationResources from "./i18n/en.json";
import { trackComponent } from "../../../utils/tracking/usage";
import simulateNativeEvent from "../../../utils/dom/simulate-native-event";
import { getTimeZoneList, formatOffset } from "../../../utils/date/time-zone";
export class GuxTimeZonePickerBeta {
    constructor() {
        this.hasError = false;
        this.disabled = false;
        this.required = false;
        this.searchString = '';
    }
    on(event) {
        this.searchString = event.detail;
        this.filteredZoneList = this.filterTimeZoneList(this.timeZoneList);
        this.timeZoneOptionElements = this.renderTimeZones(this.filteredZoneList);
    }
    async componentWillLoad() {
        trackComponent(this.root);
        this.i18n = await buildI18nForComponent(this.root, translationResources);
        this.timeZoneList = this.getTimeZoneOptionsList();
        this.filteredZoneList = this.timeZoneList;
        this.timeZoneOptionElements = this.renderTimeZones(this.filteredZoneList);
    }
    componentDidLoad() {
        var _a;
        const dropdownElement = (_a = this.root) === null || _a === void 0 ? void 0 : _a.shadowRoot.querySelector('gux-dropdown');
        dropdownElement.addEventListener('change', (event) => {
            const selectedElement = event.target;
            const selectedValue = selectedElement === null || selectedElement === void 0 ? void 0 : selectedElement.value;
            this.value = selectedValue;
            simulateNativeEvent(this.root, 'change');
        });
    }
    filterTimeZoneList(timeZoneList) {
        const searchString = this.searchString;
        return timeZoneList.filter(tzOption => {
            return this.getFormattedTimeZoneOption(tzOption)
                .toLowerCase()
                .includes(searchString.toLowerCase());
        });
    }
    getTimeZoneOption(timeZone) {
        const localizedGroupName = this.i18n(timeZone.name);
        const localizedCountryName = timeZone.countryName
            ? this.i18n(timeZone.countryName)
            : undefined;
        if (!localizedGroupName) {
            return;
        }
        const formattedOffset = formatOffset(timeZone.currentTimeOffsetInMinutes);
        const localizedUTC = this.i18n('UTC');
        const displayTextName = `${localizedGroupName}`;
        const displayTextOffset = ` (${localizedUTC}${formattedOffset})`;
        const baseDisplayOffsetText = `${displayTextOffset}`;
        const displayTextNameFormatted = displayTextName.replace(/_/g, ' ');
        const countryName = `${localizedCountryName}`;
        const defaultZone = '';
        const priority = displayTextName.startsWith('Etc/GMT') ? 2 : 1;
        return {
            value: timeZone.name,
            localizedGroupName,
            formattedOffset,
            displayTextNameFormatted,
            displayTextOffset,
            baseDisplayOffsetText,
            countryName,
            defaultZone,
            priority
        };
    }
    getFormattedTimeZoneOption(option) {
        return option.displayTextNameFormatted.startsWith('Etc/GMT')
            ? option.displayTextNameFormatted.concat(option.baseDisplayOffsetText)
            : option.displayTextNameFormatted
                .split('/')
                .pop()
                .concat(', ', option.countryName, option.baseDisplayOffsetText);
    }
    getTimeZoneOptionsList() {
        const allTimeZones = getTimeZoneList();
        const timeZoneOptionsList = [];
        allTimeZones.forEach(timeZone => {
            const zone = this.getTimeZoneOption(timeZone);
            //Filter out zones we don't have a translation for; helps filter out deprecated module zones we don't want to use.
            if (!zone) {
                return;
            }
            timeZoneOptionsList.push(zone);
        });
        return timeZoneOptionsList.sort((a, b) => {
            var _a;
            return a.priority - b.priority ||
                ((_a = a.displayTextNameFormatted) === null || _a === void 0 ? void 0 : _a.localeCompare(b.displayTextNameFormatted));
        });
    }
    getDefaultZones() {
        return [
            this.workspaceDefault,
            this.localDefault,
            this.customDefault
        ].filter(zone => !!zone);
    }
    getDefaultZoneList() {
        const defaultZones = this.getDefaultZones();
        const defaultZoneOptions = this.timeZoneList.reduce((defaults, tz) => {
            if (defaultZones.includes(tz.value)) {
                return defaults.concat([Object.assign({}, tz)]);
            }
            return defaults;
        }, []);
        defaultZoneOptions.forEach(option => {
            if (this.workspaceDefault === this.localDefault) {
                option.defaultZone = `${this.i18n('localAndWorkspaceDefault')}`;
            }
            else if (option.value === this.workspaceDefault) {
                option.defaultZone = `${this.i18n('workspaceDefault')}`;
            }
            else if (option.value === this.localDefault) {
                option.defaultZone = `${this.i18n('localDefault')}`;
            }
            if (option.value === this.customDefault) {
                option.defaultZone = `(${this.customDefaultLabel})`;
            }
        });
        return defaultZoneOptions;
    }
    renderTimeZones(zoneList) {
        return zoneList.map(tzOption => {
            return (h("gux-option", { class: {
                    'gux-has-defaults': tzOption.defaultZone !== ''
                }, value: tzOption.value }, h("div", { class: "gux-option-wrapper" }, h("div", null, this.getFormattedTimeZoneOption(tzOption)), h("span", { class: "gux-default-zone" }, tzOption.defaultZone))));
        });
    }
    renderDefaultsList() {
        const defaults = this.renderTimeZones(this.getDefaultZoneList());
        if (defaults.length) {
            return (h("gux-option-group-beta", { label: this.i18n('default') }, defaults));
        }
    }
    renderAllTimeZoneOptionsList() {
        return (h("gux-option-group-beta", { label: this.i18n('all') }, this.timeZoneOptionElements));
    }
    render() {
        return (h("gux-dropdown", { key: 'c5752466843893b61f8c84e765df74d54a87b575', class: {
                'has-defaults': !!this.workspaceDefault ||
                    !!this.localDefault ||
                    !!this.customDefault
            }, "filter-type": "custom", placeholder: this.i18n('selectZone'), value: this.value, hasError: this.hasError, disabled: this.disabled }, h("gux-listbox", { key: '761fcd634dafa957de29dc10fcafe77c62463ead', "aria-label": this.i18n('timeZones') }, this.renderDefaultsList(), this.renderAllTimeZoneOptionsList())));
    }
    static get is() { return "gux-time-zone-picker-beta"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-time-zone-picker.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-time-zone-picker.css"]
        };
    }
    static get properties() {
        return {
            "value": {
                "type": "string",
                "attribute": "value",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "workspaceDefault": {
                "type": "string",
                "attribute": "workspace-default",
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "localDefault": {
                "type": "string",
                "attribute": "local-default",
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "customDefault": {
                "type": "string",
                "attribute": "custom-default",
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "customDefaultLabel": {
                "type": "string",
                "attribute": "custom-default-label",
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "hasError": {
                "type": "boolean",
                "attribute": "has-error",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "disabled": {
                "type": "boolean",
                "attribute": "disabled",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "required": {
                "type": "boolean",
                "attribute": "required",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "searchString": {},
            "timeZoneOptionElements": {},
            "timeZoneList": {},
            "filteredZoneList": {}
        };
    }
    static get elementRef() { return "root"; }
    static get listeners() {
        return [{
                "name": "guxfilter",
                "method": "on",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
