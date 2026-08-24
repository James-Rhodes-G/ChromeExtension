import { r as registerInstance, h, a as getElement } from './index-xFL2agjT.js';
import { b as buildI18nForComponent } from './index-Dac2qHbK.js';
import { t as translationResources, f as formatOffset, g as getTimeZoneList } from './time-zone-DzB2fI_Z.js';
import { t as trackComponent } from './usage-D2Q7fj4V.js';
import { s as simulateNativeEvent } from './simulate-native-event-BMRf5pjV.js';
import './get-closest-element-Cd4R0amv.js';

const guxTimeZonePickerCss = "gux-dropdown .zone-header{padding-block:8px 4px;padding-inline:12px;color:#6b7585;text-transform:uppercase}gux-dropdown gux-option{padding:var(--gse-ui-menu-option-padding)}gux-dropdown gux-option.gux-has-defaults{block-size:auto}gux-dropdown gux-option .gux-option-wrapper{display:flex;flex-direction:column}gux-dropdown gux-option .gux-default-zone{color:#626e84}";

const GuxTimeZonePickerBeta = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
    get root() { return getElement(this); }
};
GuxTimeZonePickerBeta.style = guxTimeZonePickerCss;

export { GuxTimeZonePickerBeta as gux_time_zone_picker_beta };
