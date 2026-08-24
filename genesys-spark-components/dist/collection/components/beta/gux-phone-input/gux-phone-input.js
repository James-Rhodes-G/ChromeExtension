var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { forceUpdate, h } from "@stencil/core";
import libphonenumber, { PhoneNumberFormat, PhoneNumberType } from "google-libphonenumber";
import { trackComponent } from "../../../utils/tracking/usage";
import { buildI18nForComponent, getDesiredLocale } from "../../../i18n";
import countryResources from "./i18n/en.json";
import { OnClickOutside } from "../../../utils/decorator/on-click-outside";
import { getRegionObjects } from "./services/region-map.service";
import { preventBrowserValidationStyling } from "../../../utils/dom/prevent-browser-validation-styling";
import { logWarn } from "../../../utils/error/log-error";
import simulateNativeEvent from "../../../utils/dom/simulate-native-event";
import { focusInputElement } from "../../../utils/dom/focus-input-element";
export class GuxPhoneInput {
    constructor() {
        this.phoneUtil = libphonenumber.PhoneNumberUtil.getInstance();
        this.regionObjects = [];
        this.displayType = PhoneNumberType.FIXED_LINE;
        this.value = '';
        this.hasError = false;
        this.disabled = false;
        this.required = false;
        // Display only. This chooses how to format the number within the input.
        this.phoneNumberFormat = 'NATIONAL';
        // Display only. This chooses the type of example number as the placeholder within the input.
        this.phoneNumberType = 'FIXED_LINE';
        this.regionOptions = [];
        this.expanded = false;
        this.region = null;
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async setRegionAlpha2Code(alpha2Code) {
        this._setRegionAlpha2Code(alpha2Code);
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async setRegionDialCode(dialCode) {
        const newRegion = this.getRegionFromDialCode(dialCode);
        this.updateInputWithNewRegion(newRegion, this.region);
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async getRegion() {
        return this.region;
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async getFormattedNumber(format = 'E164') {
        var _a;
        const phone = this.parsePhoneNumber(this.value, (_a = this.region) === null || _a === void 0 ? void 0 : _a.alpha2Code);
        const libFormat = this.parseDisplayFormat(format);
        return phone ? this.phoneUtil.format(phone, libFormat) : null;
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async getExtension() {
        var _a;
        const phone = this.parsePhoneNumber(this.value, (_a = this.region) === null || _a === void 0 ? void 0 : _a.alpha2Code);
        return phone ? phone.getExtension() : null;
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async isPossibleNumber() {
        var _a;
        const phone = this.parsePhoneNumber(this.value, (_a = this.region) === null || _a === void 0 ? void 0 : _a.alpha2Code);
        return phone ? this.phoneUtil.isPossibleNumber(phone) : false;
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async isValidNumber() {
        var _a;
        const phone = this.parsePhoneNumber(this.value, (_a = this.region) === null || _a === void 0 ? void 0 : _a.alpha2Code);
        return phone ? this.phoneUtil.isValidNumber(phone) : false;
    }
    updateValue(number) {
        var _a;
        this._setRegionAlpha2Code((_a = this.getRegionFromValue(number)) === null || _a === void 0 ? void 0 : _a.alpha2Code);
    }
    focusSelectedItemAfterRender(expanded) {
        if (expanded && this.listboxElement) {
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    this.listboxElement.focus();
                });
            });
        }
    }
    setDisplayFormat(format) {
        this.displayFormat = this.parseDisplayFormat(format);
    }
    setDisplayType(format) {
        this.displayType = this.parsePhoneNumberType(format);
    }
    onInternallistboxoptionsupdated(event) {
        event.stopPropagation();
        forceUpdate(this.root);
    }
    onBlur(event) {
        var _a;
        this.stopPropagationOfInternalFocusEvents(event);
        // Native change events are not composed so they will not propagate out of the outermost of the shadow DOM.
        if (this.value !== this.valueWhenFocused ||
            ((_a = this.region) === null || _a === void 0 ? void 0 : _a.alpha2Code) !== this.regionAlphaCodeWhenFocused) {
            simulateNativeEvent(this.root, 'change');
        }
    }
    onFocus(event) {
        var _a;
        this.stopPropagationOfInternalFocusEvents(event);
        this.valueWhenFocused = this.value;
        this.regionAlphaCodeWhenFocused = (_a = this.region) === null || _a === void 0 ? void 0 : _a.alpha2Code;
        if (this.regionOptions.length === 0) {
            this.regionOptions = this.getRegionOptions();
        }
    }
    onFocusout() {
        this.collapseListbox('noFocusChange');
    }
    onFocusin(event) {
        this.stopPropagationOfInternalFocusEvents(event);
    }
    onClickOutside() {
        this.collapseListbox('noFocusChange');
    }
    async componentWillLoad() {
        this.i18n = await buildI18nForComponent(this.root, countryResources);
        this.regionObjects = getRegionObjects(getDesiredLocale(this.root), this.i18n, this.phoneUtil);
        this.initialValueParse();
        trackComponent(this.root);
    }
    componentDidRender() {
        if (!this.listboxElement) {
            this.listboxElement = this.root.shadowRoot.querySelector('gux-listbox');
        }
    }
    componentDidLoad() {
        this.setInput();
        this.setListBox();
    }
    initialValueParse() {
        var _a;
        this.setDisplayFormat(this.phoneNumberFormat);
        this.setDisplayType(this.phoneNumberType);
        if (this.value) {
            try {
                const phone = this.phoneUtil.parse(this.value);
                this._setRegionAlpha2Code((_a = this.getRegionFromValue(this.value)) === null || _a === void 0 ? void 0 : _a.alpha2Code);
                this.value = this.phoneUtil.format(phone, this.displayFormat);
            }
            catch (_b) {
                logWarn(this.root, 'Number cannot be parsed');
            }
        }
        else {
            this._setRegionAlpha2Code(this.defaultRegionCode);
            this.value = '';
        }
    }
    parseDisplayFormat(format) {
        let output;
        switch (format.toUpperCase()) {
            case 'INTERNATIONAL':
                output = PhoneNumberFormat.INTERNATIONAL;
                break;
            case 'E164':
                output = PhoneNumberFormat.E164;
                break;
            case 'NATIONAL':
            default:
                output = PhoneNumberFormat.NATIONAL;
                break;
        }
        return output;
    }
    parsePhoneNumberType(phoneNumberType) {
        var _a;
        const typeMap = {
            TOLL_FREE: PhoneNumberType.TOLL_FREE,
            FIXED_LINE: PhoneNumberType.FIXED_LINE
        };
        return (_a = typeMap[phoneNumberType]) !== null && _a !== void 0 ? _a : PhoneNumberType.FIXED_LINE;
    }
    /** Returns parsed phone number object or null if utility threw an error (unknown region or impossible to parse number) */
    parsePhoneNumber(value, region = 'ZZ') {
        try {
            return this.phoneUtil.parse(value, region);
        }
        catch (_a) {
            return null;
        }
    }
    onInputChange(number) {
        this.value = number;
    }
    regionObjectToRegion(regionObject) {
        let output = null;
        if (regionObject) {
            const regionCopy = Object.assign({}, regionObject);
            delete regionCopy.name;
            output = regionCopy;
        }
        return output;
    }
    _setRegionAlpha2Code(regionCode) {
        const newAlpha2Code = regionCode === null || regionCode === void 0 ? void 0 : regionCode.toUpperCase();
        const regionMatch = this.regionObjects.find(r => r.alpha2Code === newAlpha2Code);
        const newRegion = this.regionObjectToRegion(regionMatch);
        this.updateInputWithNewRegion(newRegion, this.region);
    }
    updateInputWithNewRegion(region, lastRegion) {
        this.region = region;
        if (this.value.startsWith('+') &&
            (lastRegion === null || lastRegion === void 0 ? void 0 : lastRegion.dialCode) !== (region === null || region === void 0 ? void 0 : region.dialCode) &&
            lastRegion !== null) {
            const newValue = this.value.replace((lastRegion === null || lastRegion === void 0 ? void 0 : lastRegion.dialCode) || '+', (region === null || region === void 0 ? void 0 : region.dialCode) || '');
            if (this.value !== newValue) {
                this.value = newValue;
            }
        }
    }
    get defaultRegionCode() {
        var _a, _b;
        const defaultRegion = (_a = this.defaultRegion) === null || _a === void 0 ? void 0 : _a.toUpperCase();
        const regionMatch = defaultRegion
            ? this.regionObjects.find(r => r.alpha2Code === defaultRegion)
            : undefined;
        return (_b = regionMatch === null || regionMatch === void 0 ? void 0 : regionMatch.alpha2Code) !== null && _b !== void 0 ? _b : null;
    }
    /** Gets example number with fallbacks to handle missing data in the library. */
    getExampleNumber() {
        var _a;
        const regionCode = ((_a = this.region) === null || _a === void 0 ? void 0 : _a.alpha2Code) || this.defaultRegionCode || 'US';
        return (this.phoneUtil.getExampleNumberForType(regionCode, this.displayType) ||
            this.phoneUtil.getExampleNumberForType(regionCode, PhoneNumberType.FIXED_LINE) ||
            this.phoneUtil.getExampleNumberForType('US', PhoneNumberType.FIXED_LINE));
    }
    getRegionFromValue(number) {
        return this.isNationalNumber(number)
            ? this.region || null
            : this.getRegionFromDialCode(number);
    }
    isNationalNumber(number) {
        return !number.startsWith('+');
    }
    getRegionFromDialCode(number) {
        const matches = this.regionObjects
            .filter(region => number.startsWith(region.dialCode))
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(regionObj => this.regionObjectToRegion(regionObj));
        if (number === '+') {
            return this.region || null;
        }
        if (matches.length < 2) {
            return matches[0] || null;
        }
        try {
            // Use googlelib-phonenumber to parse and get the region code (primarily works for complete, valid numbers)
            const parsedNumber = this.phoneUtil.parse(number);
            const parsedRegionCode = this.phoneUtil.getRegionCodeForNumber(parsedNumber);
            const match = matches.find(r => r.alpha2Code === parsedRegionCode);
            if (match) {
                return match;
            }
        }
        catch (_a) {
            // Error thrown while parsing, continue processing without googlelib-phonenumber
        }
        const currentRegionMatch = matches.find(r => { var _a; return r.alpha2Code === ((_a = this.region) === null || _a === void 0 ? void 0 : _a.alpha2Code); });
        const defaultRegionMatch = matches.find(r => r.alpha2Code === this.defaultRegionCode);
        return currentRegionMatch || defaultRegionMatch || matches[0];
    }
    stopPropagationOfInternalFocusEvents(event) {
        if (this.root.contains(event.relatedTarget)) {
            event.stopImmediatePropagation();
        }
    }
    fieldButtonClick() {
        this.expanded = !this.expanded;
    }
    collapseListbox(focusChange) {
        if (this.expanded) {
            this.expanded = false;
        }
        if (focusChange === 'focusFieldButton') {
            this.fieldButtonElement.focus();
        }
    }
    setInput() {
        this.inputElement = this.root.shadowRoot.querySelector('input[type="tel"]');
        preventBrowserValidationStyling(this.inputElement);
        this.inputElement.addEventListener('input', () => {
            this.onInputChange(this.inputElement.value);
        });
        this.inputElement.addEventListener('focusin', (event) => {
            event.stopPropagation();
            this.collapseListbox('noFocusChange');
        });
    }
    setListBox() {
        this.listboxElement.addEventListener('input', (event) => {
            const regionCode = event.target
                .value;
            this.guxregionselect.emit(regionCode);
            this._setRegionAlpha2Code(regionCode);
            this.collapseListbox('focusFieldButton');
        });
        this.listboxElement.addEventListener('focusout', (event) => {
            event.stopPropagation();
        });
        this.listboxElement.addEventListener('keydown', (event) => {
            event.stopPropagation();
            if (event.key === 'Tab') {
                /* calling setTimeout is a workaround as calling focus without it does not work */
                if (event.shiftKey) {
                    setTimeout(() => this.fieldButtonElement.focus(), 0);
                }
                else {
                    setTimeout(() => this.inputElement.focus(), 0);
                }
            }
            else if (event.key === 'Escape') {
                this.collapseListbox('noFocusChange');
            }
        });
    }
    renderExpandIcon() {
        if (!this.disabled) {
            return (h("gux-icon", { class: "gux-expand-icon", size: "small", iconName: "custom/chevron-down-small-regular", decorative: true }));
        }
    }
    renderCountryButton() {
        return (h("div", { class: "gux-region-select" }, h("button", { type: "button", class: {
                'gux-field gux-field-button': true,
                'gux-expanded': this.expanded,
                'gux-disabled': this.disabled
            }, disabled: this.disabled, onClick: this.fieldButtonClick.bind(this), ref: el => (this.fieldButtonElement = el), "aria-haspopup": "listbox", "aria-expanded": this.expanded.toString(), "aria-label": this.i18n('regionDropdownButton') }, h("div", { class: "gux-field-content" }, this.renderButtonDisplay()), this.renderExpandIcon())));
    }
    renderButtonDisplay() {
        var _a, _b;
        return (h("div", { class: "gux-selected-option" }, this.region ? (h("gux-flag-icon-beta", { flag: (_a = this.region) === null || _a === void 0 ? void 0 : _a.alpha2Code, "screenreader-text": this.i18n((_b = this.region) === null || _b === void 0 ? void 0 : _b.alpha2Code) })) : (h("gux-icon", { size: "small", "icon-name": "fa/earth-africa-regular", "screenreader-text": this.i18n('unknownRegion') }))));
    }
    renderInput() {
        return (h("div", { class: "gux-input", onClick: () => focusInputElement(this.inputElement) }, h("input", { id: 'tel-input', class: {
                'gux-phone-text-input': true,
                'gux-disabled': this.disabled
            }, type: "tel", placeholder: this.phoneUtil.format(this.getExampleNumber(), this.displayFormat), value: this.value, disabled: this.disabled })));
    }
    renderTarget() {
        return (h("div", { class: {
                'target-container': true,
                'gux-error': this.hasError
            }, slot: "target" }, this.renderCountryButton(), this.renderInput()));
    }
    getRegionOptions() {
        return [
            (h("gux-option", { value: "" }, h("span", { class: "gux-option-content" }, h("gux-icon", { "icon-name": "fa/earth-africa-regular", decorative: true, size: "small" }), h("span", null, this.i18n('unknownRegion'), ' ', h("span", { class: "gux-country-code" }, "(+)")))))
        ].concat(this.regionObjects.map(region => (h("gux-option", { value: region.alpha2Code }, h("span", { class: "gux-option-content" }, h("gux-flag-icon-beta", { flag: region.alpha2Code }), h("span", null, region.name, ' ', h("span", { class: "gux-country-code" }, "(", region.dialCode, ")")))))));
    }
    renderPopup() {
        return (h("div", { slot: "popup", class: "gux-listbox-container" }, h("gux-listbox", { "aria-label": this.i18n('regionDropdown'), value: this.region ? this.region.alpha2Code : '' }, this.regionOptions)));
    }
    render() {
        return (h("gux-popup", { key: '48b85016cbad67170edb573edcdccafeb6e099fb', expanded: this.expanded, disabled: this.disabled, "exceed-target-width": true }, this.renderTarget(), this.renderPopup()));
    }
    static get is() { return "gux-phone-input-beta"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-phone-input.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-phone-input.css"]
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
                "reflect": false,
                "defaultValue": "''"
            },
            "defaultRegion": {
                "type": "string",
                "attribute": "default-region",
                "mutable": false,
                "complexType": {
                    "original": "Alpha2Code",
                    "resolved": "\"AD\" | \"AE\" | \"AF\" | \"AG\" | \"AI\" | \"AL\" | \"AM\" | \"AO\" | \"AR\" | \"AS\" | \"AT\" | \"AU\" | \"AW\" | \"AX\" | \"AZ\" | \"BA\" | \"BB\" | \"BD\" | \"BE\" | \"BF\" | \"BG\" | \"BH\" | \"BI\" | \"BJ\" | \"BL\" | \"BM\" | \"BN\" | \"BO\" | \"BQ\" | \"BR\" | \"BS\" | \"BT\" | \"BV\" | \"BW\" | \"BY\" | \"BZ\" | \"CA\" | \"CC\" | \"CD\" | \"CF\" | \"CG\" | \"CH\" | \"CI\" | \"CK\" | \"CL\" | \"CM\" | \"CN\" | \"CO\" | \"CR\" | \"CU\" | \"CV\" | \"CW\" | \"CX\" | \"CY\" | \"CZ\" | \"DE\" | \"DJ\" | \"DK\" | \"DM\" | \"DO\" | \"DZ\" | \"EC\" | \"EE\" | \"EG\" | \"EH\" | \"ER\" | \"ES\" | \"ET\" | \"FI\" | \"FJ\" | \"FK\" | \"FM\" | \"FO\" | \"FR\" | \"GA\" | \"GB\" | \"GD\" | \"GE\" | \"GF\" | \"GG\" | \"GH\" | \"GI\" | \"GL\" | \"GM\" | \"GN\" | \"GP\" | \"GQ\" | \"GR\" | \"GS\" | \"GT\" | \"GU\" | \"GW\" | \"GY\" | \"HK\" | \"HN\" | \"HR\" | \"HT\" | \"HU\" | \"ID\" | \"IE\" | \"IL\" | \"IM\" | \"IN\" | \"IO\" | \"IQ\" | \"IR\" | \"IS\" | \"IT\" | \"JE\" | \"JM\" | \"JO\" | \"JP\" | \"KE\" | \"KG\" | \"KH\" | \"KI\" | \"KM\" | \"KN\" | \"KP\" | \"KR\" | \"KW\" | \"KY\" | \"KZ\" | \"LA\" | \"LB\" | \"LC\" | \"LI\" | \"LK\" | \"LR\" | \"LS\" | \"LT\" | \"LU\" | \"LV\" | \"LY\" | \"MA\" | \"MC\" | \"MD\" | \"ME\" | \"MF\" | \"MG\" | \"MH\" | \"MK\" | \"ML\" | \"MM\" | \"MN\" | \"MO\" | \"MP\" | \"MQ\" | \"MR\" | \"MS\" | \"MT\" | \"MU\" | \"MV\" | \"MW\" | \"MX\" | \"MY\" | \"MZ\" | \"NA\" | \"NC\" | \"NE\" | \"NF\" | \"NG\" | \"NI\" | \"NL\" | \"NO\" | \"NP\" | \"NR\" | \"NU\" | \"NZ\" | \"OM\" | \"PA\" | \"PE\" | \"PF\" | \"PG\" | \"PH\" | \"PK\" | \"PL\" | \"PM\" | \"PN\" | \"PR\" | \"PS\" | \"PT\" | \"PW\" | \"PY\" | \"QA\" | \"RE\" | \"RO\" | \"RS\" | \"RU\" | \"RW\" | \"SA\" | \"SB\" | \"SC\" | \"SD\" | \"SE\" | \"SG\" | \"SH\" | \"SI\" | \"SJ\" | \"SK\" | \"SL\" | \"SM\" | \"SN\" | \"SO\" | \"SR\" | \"SS\" | \"ST\" | \"SV\" | \"SX\" | \"SY\" | \"SZ\" | \"TC\" | \"TD\" | \"TG\" | \"TH\" | \"TJ\" | \"TK\" | \"TL\" | \"TM\" | \"TN\" | \"TO\" | \"TR\" | \"TT\" | \"TV\" | \"TW\" | \"TZ\" | \"UA\" | \"UG\" | \"US\" | \"UY\" | \"UZ\" | \"VA\" | \"VC\" | \"VE\" | \"VG\" | \"VI\" | \"VN\" | \"VU\" | \"WF\" | \"WS\" | \"XK\" | \"YE\" | \"YT\" | \"ZA\" | \"ZM\" | \"ZW\"",
                    "references": {
                        "Alpha2Code": {
                            "location": "import",
                            "path": "./gux-phone.types",
                            "id": "src/components/beta/gux-phone-input/gux-phone.types.ts::Alpha2Code"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Default ISO 3166-1 alpha-2 region code."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "labelId": {
                "type": "string",
                "attribute": "label-id",
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
            },
            "phoneNumberFormat": {
                "type": "string",
                "attribute": "phone-number-format",
                "mutable": false,
                "complexType": {
                    "original": "'E164' | 'INTERNATIONAL' | 'NATIONAL'",
                    "resolved": "\"E164\" | \"INTERNATIONAL\" | \"NATIONAL\"",
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
                "defaultValue": "'NATIONAL'"
            },
            "phoneNumberType": {
                "type": "string",
                "attribute": "phone-number-type",
                "mutable": false,
                "complexType": {
                    "original": "'FIXED_LINE' | 'TOLL_FREE'",
                    "resolved": "\"FIXED_LINE\" | \"TOLL_FREE\"",
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
                "defaultValue": "'FIXED_LINE'"
            }
        };
    }
    static get states() {
        return {
            "regionOptions": {},
            "expanded": {},
            "region": {}
        };
    }
    static get events() {
        return [{
                "method": "guxregionselect",
                "name": "guxregionselect",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "setRegionAlpha2Code": {
                "complexType": {
                    "signature": "(alpha2Code: Alpha2Code) => Promise<void>",
                    "parameters": [{
                            "name": "alpha2Code",
                            "type": "\"AD\" | \"AE\" | \"AF\" | \"AG\" | \"AI\" | \"AL\" | \"AM\" | \"AO\" | \"AR\" | \"AS\" | \"AT\" | \"AU\" | \"AW\" | \"AX\" | \"AZ\" | \"BA\" | \"BB\" | \"BD\" | \"BE\" | \"BF\" | \"BG\" | \"BH\" | \"BI\" | \"BJ\" | \"BL\" | \"BM\" | \"BN\" | \"BO\" | \"BQ\" | \"BR\" | \"BS\" | \"BT\" | \"BV\" | \"BW\" | \"BY\" | \"BZ\" | \"CA\" | \"CC\" | \"CD\" | \"CF\" | \"CG\" | \"CH\" | \"CI\" | \"CK\" | \"CL\" | \"CM\" | \"CN\" | \"CO\" | \"CR\" | \"CU\" | \"CV\" | \"CW\" | \"CX\" | \"CY\" | \"CZ\" | \"DE\" | \"DJ\" | \"DK\" | \"DM\" | \"DO\" | \"DZ\" | \"EC\" | \"EE\" | \"EG\" | \"EH\" | \"ER\" | \"ES\" | \"ET\" | \"FI\" | \"FJ\" | \"FK\" | \"FM\" | \"FO\" | \"FR\" | \"GA\" | \"GB\" | \"GD\" | \"GE\" | \"GF\" | \"GG\" | \"GH\" | \"GI\" | \"GL\" | \"GM\" | \"GN\" | \"GP\" | \"GQ\" | \"GR\" | \"GS\" | \"GT\" | \"GU\" | \"GW\" | \"GY\" | \"HK\" | \"HN\" | \"HR\" | \"HT\" | \"HU\" | \"ID\" | \"IE\" | \"IL\" | \"IM\" | \"IN\" | \"IO\" | \"IQ\" | \"IR\" | \"IS\" | \"IT\" | \"JE\" | \"JM\" | \"JO\" | \"JP\" | \"KE\" | \"KG\" | \"KH\" | \"KI\" | \"KM\" | \"KN\" | \"KP\" | \"KR\" | \"KW\" | \"KY\" | \"KZ\" | \"LA\" | \"LB\" | \"LC\" | \"LI\" | \"LK\" | \"LR\" | \"LS\" | \"LT\" | \"LU\" | \"LV\" | \"LY\" | \"MA\" | \"MC\" | \"MD\" | \"ME\" | \"MF\" | \"MG\" | \"MH\" | \"MK\" | \"ML\" | \"MM\" | \"MN\" | \"MO\" | \"MP\" | \"MQ\" | \"MR\" | \"MS\" | \"MT\" | \"MU\" | \"MV\" | \"MW\" | \"MX\" | \"MY\" | \"MZ\" | \"NA\" | \"NC\" | \"NE\" | \"NF\" | \"NG\" | \"NI\" | \"NL\" | \"NO\" | \"NP\" | \"NR\" | \"NU\" | \"NZ\" | \"OM\" | \"PA\" | \"PE\" | \"PF\" | \"PG\" | \"PH\" | \"PK\" | \"PL\" | \"PM\" | \"PN\" | \"PR\" | \"PS\" | \"PT\" | \"PW\" | \"PY\" | \"QA\" | \"RE\" | \"RO\" | \"RS\" | \"RU\" | \"RW\" | \"SA\" | \"SB\" | \"SC\" | \"SD\" | \"SE\" | \"SG\" | \"SH\" | \"SI\" | \"SJ\" | \"SK\" | \"SL\" | \"SM\" | \"SN\" | \"SO\" | \"SR\" | \"SS\" | \"ST\" | \"SV\" | \"SX\" | \"SY\" | \"SZ\" | \"TC\" | \"TD\" | \"TG\" | \"TH\" | \"TJ\" | \"TK\" | \"TL\" | \"TM\" | \"TN\" | \"TO\" | \"TR\" | \"TT\" | \"TV\" | \"TW\" | \"TZ\" | \"UA\" | \"UG\" | \"US\" | \"UY\" | \"UZ\" | \"VA\" | \"VC\" | \"VE\" | \"VG\" | \"VI\" | \"VN\" | \"VU\" | \"WF\" | \"WS\" | \"XK\" | \"YE\" | \"YT\" | \"ZA\" | \"ZM\" | \"ZW\"",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "Alpha2Code": {
                            "location": "import",
                            "path": "./gux-phone.types",
                            "id": "src/components/beta/gux-phone-input/gux-phone.types.ts::Alpha2Code"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "setRegionDialCode": {
                "complexType": {
                    "signature": "(dialCode: string) => Promise<void>",
                    "parameters": [{
                            "name": "dialCode",
                            "type": "string",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "getRegion": {
                "complexType": {
                    "signature": "() => Promise<Region>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "Region": {
                            "location": "import",
                            "path": "./gux-phone.types",
                            "id": "src/components/beta/gux-phone-input/gux-phone.types.ts::Region"
                        }
                    },
                    "return": "Promise<Region>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "getFormattedNumber": {
                "complexType": {
                    "signature": "(format?: typeof this.phoneNumberFormat) => Promise<string>",
                    "parameters": [{
                            "name": "format",
                            "type": "\"E164\" | \"INTERNATIONAL\" | \"NATIONAL\"",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<string>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "getExtension": {
                "complexType": {
                    "signature": "() => Promise<string>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<string>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "isPossibleNumber": {
                "complexType": {
                    "signature": "() => Promise<boolean>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<boolean>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "isValidNumber": {
                "complexType": {
                    "signature": "() => Promise<boolean>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<boolean>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "root"; }
    static get watchers() {
        return [{
                "propName": "value",
                "methodName": "updateValue"
            }, {
                "propName": "expanded",
                "methodName": "focusSelectedItemAfterRender"
            }, {
                "propName": "phoneNumberFormat",
                "methodName": "setDisplayFormat"
            }, {
                "propName": "phoneNumberType",
                "methodName": "setDisplayType"
            }];
    }
    static get listeners() {
        return [{
                "name": "internallistboxoptionsupdated",
                "method": "onInternallistboxoptionsupdated",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "blur",
                "method": "onBlur",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "focus",
                "method": "onFocus",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "focusout",
                "method": "onFocusout",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "focusin",
                "method": "onFocusin",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
__decorate([
    OnClickOutside({ triggerEvents: 'mousedown' })
], GuxPhoneInput.prototype, "onClickOutside", null);
