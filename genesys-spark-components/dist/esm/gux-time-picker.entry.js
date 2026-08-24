import { r as registerInstance, h, a as getElement } from './index-xFL2agjT.js';
import { O as OnClickOutside } from './on-click-outside-VvhFhgll.js';
import { s as simulateNativeEvent } from './simulate-native-event-BMRf5pjV.js';
import { b as afterNextRender } from './after-next-render-Bg4q97BS.js';
import { g as getDesiredLocale, b as buildI18nForComponent } from './index-Dac2qHbK.js';
import { t as trackComponent } from './usage-D2Q7fj4V.js';
import { a as logError } from './log-error-DxtJDeL9.js';
import { a as determineDisplayLocale } from './intl-CpptOorV.js';
import { u as useRegionalDates } from './use-regional-dates-ZuNZ-MBw.js';
import './get-closest-element-Cd4R0amv.js';
import './get-closest-element-BZb6pJEJ.js';

const am = "AM";
const clockButton = "Toggle suggested times";
const hoursInput = "Input hours";
const minutesInput = "Input minutes";
const pm = "PM";
const timeOptionsState = "Time options open: {state}";
const toggleAmPM = "{amOrPm} selected, click to toggle";
var translationResources = {
	am: am,
	"time-separator": ":",
	clockButton: clockButton,
	hoursInput: hoursInput,
	minutesInput: minutesInput,
	pm: pm,
	timeOptionsState: timeOptionsState,
	toggleAmPM: toggleAmPM
};

function getTimeDisplayValues(minuteInterval, clockType, min, max) {
    const minuteOptions = [0, 15, 30, 45]
        .filter(option => Number.isInteger(option / minuteInterval))
        .map(x => String(x).padStart(2, '0'));
    const hourOptions = clockType === '12h'
        ? ['12', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11']
        : Array.from(Array(24).keys()).map(x => String(x).padStart(2, '0'));
    const hourOptionsFormatted = hourOptions.reduce((acc, hourOption) => {
        return acc.concat(minuteOptions.map(minuteOption => `${hourOption}:${minuteOption}`));
    }, []);
    return clockType === '24h'
        ? applyHourBoundaries(hourOptionsFormatted, min, max)
        : hourOptionsFormatted;
}
function applyHourBoundaries(hours, min, max) {
    // Check if min and max are wrapped around (e.g. min of 22:00 and max of 04:00)
    if (min && max && hourToMilliseconds(min) > hourToMilliseconds(max)) {
        hours = hours.filter(hour => {
            const hourConverted = hourToMilliseconds(hour);
            const minConverted = hourToMilliseconds(min);
            const maxConverted = hourToMilliseconds(max);
            const dayCeiling = hourToMilliseconds('23:59');
            return ((hourConverted >= minConverted && hourConverted < dayCeiling) ||
                hourConverted <= maxConverted);
        });
    }
    else {
        // min and max are not wrapped around (e.g. min of 03:30 and max of 20:00)
        if (min) {
            hours = hours.filter(hour => hourToMilliseconds(hour) >= hourToMilliseconds(min));
        }
        if (max) {
            hours = hours.filter(hour => hourToMilliseconds(hour) <= hourToMilliseconds(max));
        }
    }
    return hours;
}
function hourToMilliseconds(hour) {
    // Convert the hour to milliseconds from midnight
    const date = new Date();
    const [hours, minutes] = hour.split(':');
    date.setHours(parseFloat(hours));
    date.setMinutes(parseFloat(minutes));
    date.setSeconds(0);
    const seconds = date.getTime();
    return seconds;
}
function getLocaleClockType(root) {
    let locale;
    if (useRegionalDates()) {
        locale = determineDisplayLocale(root).toLowerCase();
    }
    else {
        locale = getDesiredLocale(root).toLowerCase();
    }
    const date = new Date('January 19, 1975 15:00:00 UTC+00:00');
    const time = new Intl.DateTimeFormat(locale, {
        timeStyle: 'short',
        timeZone: 'UTC'
    }).format(date);
    // LEGACY -- The localization team has requested that some locales be hardcoded to the 24h clock. https://inindca.atlassian.net/browse/LOCAL-9597
    // Localization team has requested to removing hardcoded 24h clock locales as requested in https://inindca.atlassian.net/browse/COMUI-2890
    if (!useRegionalDates()) {
        const localesSetTo24h = ['ar', 'ko', 'zh-cn', 'zh-tw'];
        if (localesSetTo24h.some(localeSetTo24h => locale.startsWith(localeSetTo24h))) {
            return '24h';
        }
    }
    return new RegExp('.*15.*').test(time) ? '24h' : '12h';
}
function incrementHour(value, delta) {
    const [hour, minute] = value.split(':');
    const newHour = ((parseInt(hour, 10) + delta + 24) % 24)
        .toString()
        .padStart(2, '0');
    return `${newHour}:${minute}`;
}
function incrementMinute(value, delta, step) {
    const [hour, minute] = value.split(':');
    const minuteInt = parseInt(minute, 10);
    let newMinuteInt = (minuteInt + delta + 60) % 60;
    while (newMinuteInt % step !== 0) {
        newMinuteInt = (newMinuteInt + delta + 60) % 60;
    }
    const newMinute = newMinuteInt.toString().padStart(2, '0');
    return `${hour}:${newMinute}`;
}
function getDisplayValue(value, clockType) {
    const [hour, minute] = value.split(':');
    if (clockType === '12h') {
        const parsedHour = parseInt(hour, 10) % 12 || 12;
        const fullHour = parsedHour.toString().padStart(2, '0');
        return `${fullHour}:${minute}`;
    }
    return `${hour}:${minute}`;
}
function getValue(displayValue, clockType, isAm) {
    const [hour, minute] = displayValue.split(':');
    if (clockType === '12h') {
        if (isAm) {
            return `${(parseInt(hour, 10) % 12)
                .toString()
                .padStart(2, '0')}:${minute}`;
        }
        return `${((parseInt(hour, 10) % 12) + 12)
            .toString()
            .padStart(2, '0')}:${minute}`;
    }
    return `${hour}:${minute}`;
}
function getHourDisplayValue(value, clockType) {
    const [hour] = getDisplayValue(value, clockType).split(':');
    return hour;
}
function getMinuteDisplayValue(value) {
    const [, minute] = value.split(':');
    return minute;
}
function isAm(value) {
    const [hour] = value.split(':');
    return parseInt(hour, 10) < 12;
}
function getHoursPattern(clockType) {
    if (clockType === '12h') {
        return '^(0?[1-9]|1[012])$';
    }
    return '^([01]?[0-9]|2[0-3])$';
}
function getMinutesPattern() {
    return '^[0-5][0-9]$';
}
function getValidValueHourChange(value, clockType, change, selectionStart, hourInputLength) {
    const [displayValue, minute] = getDisplayValue(value, clockType).split(':');
    let wantedDisplayValue = displayValue;
    if (change === 'Backspace') {
        if (clockType == '12h' && hourInputLength == 1) {
            wantedDisplayValue = wantedDisplayValue
                .split('')
                .filter((_, i) => i == selectionStart - 1)
                .join('');
        }
        else {
            wantedDisplayValue = wantedDisplayValue
                .split('')
                .filter((_, i) => i !== selectionStart - 1)
                .join('')
                .padStart(2, '0');
        }
    }
    else {
        wantedDisplayValue = parseInt(wantedDisplayValue.slice(0, selectionStart) +
            change +
            wantedDisplayValue.slice(selectionStart + 1), 10)
            .toString()
            .slice(-2)
            .padStart(2, '0');
    }
    if (!new RegExp(getHoursPattern(clockType)).test(wantedDisplayValue)) {
        if (clockType === '12h') {
            wantedDisplayValue = change;
        }
        else {
            wantedDisplayValue = change.padStart(2, '0');
        }
    }
    return getValue(`${wantedDisplayValue}:${minute}`, clockType, isAm(value));
}
function getValidValueMinuteChange(value, change, selectionStart) {
    const [hour, minute] = value.split(':');
    let wanted = minute;
    if (change === 'Backspace') {
        wanted = wanted
            .split('')
            .filter((_, i) => i !== selectionStart - 1)
            .join('')
            .padStart(2, '0');
    }
    else {
        wanted = (wanted.slice(0, selectionStart) +
            change +
            wanted.slice(selectionStart + 1))
            .slice(-2)
            .padStart(2, '0');
    }
    if (!new RegExp(getMinutesPattern()).test(wanted)) {
        wanted = change.padStart(2, '0');
    }
    return `${hour}:${wanted}`;
}

const guxTimePickerCss = ".gux-time-picker{position:relative;display:inline-block}.gux-time-picker.gux-error .gux-input-time{border-color:var(--gse-ui-formControl-input-error-border-color)}.gux-time-picker .gux-input-time{box-sizing:border-box;display:flex;flex-direction:row;flex-wrap:nowrap;gap:var(--gse-ui-formControl-input-gap);place-content:stretch center;align-items:center;inline-size:100%;block-size:var(--gse-ui-formControl-input-textfield-height);padding:var(--gse-ui-formControl-input-padding);font-family:var(--gse-ui-formControl-input-contentText-fontFamily);font-size:var(--gse-ui-formControl-input-contentText-fontSize);line-height:var(--gse-ui-formControl-input-contentText-lineHeight);color:var(--gse-ui-formControl-input-populatedColor);white-space:nowrap;background-color:var(--gse-ui-formControl-input-backgroundColor);background-image:none;border:var(--gse-ui-formControl-input-default-border-width) var(--gse-ui-formControl-input-default-border-style) var(--gse-ui-formControl-input-default-border-color);border-radius:var(--gse-ui-formControl-input-borderRadius)}.gux-time-picker .gux-input-time:focus-within{outline:var(--gse-semantic-focusOutline-md-borderWidth) solid var(--gse-semantic-border-focus);outline-offset:var(--gse-semantic-focusOutline-offset)}.gux-time-picker .gux-input-time:hover:not(:disabled){border:var(--gse-ui-formControl-input-hover-border-width) var(--gse-ui-formControl-input-hover-border-style) var(--gse-ui-formControl-input-hover-border-color)}.gux-time-picker .gux-input-time input{flex:1 1 auto;align-self:auto;order:0;inline-size:2ch;padding:0;font-size:var(--gse-ui-formControl-label-text-fontSize);color:var(--gse-ui-formControl-input-populatedColor);outline:none;background-color:var(--gse-ui-formControl-input-backgroundColor);border:none}.gux-time-picker .gux-input-time input.gux-input-time-hours{text-align:end}.gux-time-picker .gux-input-time input::placeholder{color:var(--gse-ui-formControl-input-placeholderColor);opacity:1}.gux-time-picker .gux-input-time .gux-input-time-am-pm-selector{display:grid;grid-template:auto 1fr/auto 1fr auto;place-items:flex-end;padding:0;font-family:var(--gse-ui-formControl-input-prefixSufix-text-fontFamily);font-size:var(--gse-ui-formControl-input-prefixSufix-text-fontSize);font-weight:var(--gse-ui-formControl-input-prefixSufix-text-fontWeight);line-height:var(--gse-ui-formControl-input-prefixSufix-text-lineHeight);color:var(--gse-ui-formControl-input-populatedColor);outline:none;background:transparent;border:none}.gux-time-picker .gux-input-time .gux-input-time-am-pm-selector:focus-visible{outline:var(--gse-semantic-focusOutline-md-borderWidth) solid var(--gse-semantic-border-focus);outline-offset:var(--gse-semantic-focusOutline-offset);border-radius:var(--gse-ui-timePicker-focusAmpm-borderRadius)}.gux-time-picker .gux-input-time .gux-input-time-am-pm-selector .gux-meridiem{display:none;grid-row:1/1;grid-column:1/1}.gux-time-picker .gux-input-time .gux-input-time-am-pm-selector .gux-meridiem.gux-visible{display:inline-block}.gux-time-picker .gux-input-time .gux-clock-button{display:flex;flex:0 1 auto;align-items:center;align-self:auto;justify-content:center;order:0;padding:0;color:var(--gse-ui-formControl-input-inputIcon-iconEndColor);outline:none;background:transparent;border:none}.gux-time-picker .gux-input-time .gux-clock-button.gux-active:not(:disabled){color:var(--gse-ui-timePicker-clockStates-activeColor);cursor:pointer}.gux-time-picker .gux-input-time .gux-clock-button:focus-visible{outline:var(--gse-semantic-focusOutline-md-borderWidth) solid var(--gse-semantic-border-focus);outline-offset:var(--gse-semantic-focusOutline-offset);border-radius:var(--gse-ui-timePicker-focusClock-borderRadius)}.gux-time-picker .gux-input-time .gux-clock-button gux-icon{padding:var(--gse-ui-timePicker-clock-padding)}.gux-time-picker .gux-time-separator{padding-block:0;padding-inline:1ch}.gux-time-picker .gux-list-container{max-block-size:150px;margin:0;overflow-y:auto;background:var(--gse-ui-menu-backgroundColor);border-color:var(--gse-ui-menu-border-color);border-style:var(--gse-ui-menu-border-style);border-width:var(--gse-ui-menu-border-width);border-radius:var(--gse-ui-menu-borderRadius);box-shadow:var(--gse-ui-menu-boxShadow)}";

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const GuxTimePicker = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.value = '00:00';
        this.interval = 60;
        this.step = 1;
        this.disabled = false;
        this.required = false;
        this.hasError = false;
        this.expanded = false;
    }
    onFocus() {
        this.valueLastChange = this.value;
    }
    onBlur() {
        if (this.valueLastChange !== this.value) {
            simulateNativeEvent(this.root, 'change');
        }
    }
    onClickOutside() {
        this.expanded = false;
    }
    handleKeydown(event) {
        switch (event.key) {
            case 'Escape':
            case 'Tab':
                this.expanded = false;
                break;
        }
    }
    async componentWillLoad() {
        trackComponent(this.root);
        this.i18n = await buildI18nForComponent(this.root, translationResources);
        this.clockType = this.clockType || getLocaleClockType(this.root);
        this.validateValueFormat(this.value, '00:00');
        if (this.clockType == '12h' && (this.min || this.max)) {
            logError(this.root, 'clock type must be "24h" when using min/max props');
        }
    }
    validateValueFormat(newValue, oldValue) {
        if (!this.isValidTimeFormat(newValue)) {
            logError(this.root, `"${newValue}" is not a valid value format. Format must be "hh:mm" or "h:mm". Falling back to previous value: "${oldValue}"`);
            this.value = oldValue;
        }
    }
    isValidTimeFormat(value) {
        return typeof value === 'string' && /^\d{1,2}:\d{2}$/.test(value);
    }
    updateValue(value, fireChange = false) {
        if (value !== this.value) {
            this.value = value;
            simulateNativeEvent(this.root, 'input');
            if (fireChange) {
                if (this.valueLastChange !== this.value) {
                    simulateNativeEvent(this.root, 'change');
                    this.valueLastChange = this.value;
                }
            }
        }
    }
    valueToId(value) {
        return `gux-id-${value.replace(':', '-')}`;
    }
    focusRelevantItemInPopupList() {
        afterNextRender(() => {
            void this.listElement.guxFocusItemByClosestId(this.valueToId(this.value));
        });
    }
    toggleDropdown() {
        this.expanded = !this.expanded;
        if (this.expanded) {
            this.focusRelevantItemInPopupList();
        }
    }
    onTargetClick(event) {
        const clickPath = event.composedPath();
        const clickedClockButton = clickPath.includes(this.clockButton);
        const clickedAmPmButton = clickPath.includes(this.amPmElement);
        const clickedHourInput = clickPath.includes(this.hourInputElement);
        const clickedMinuteInput = clickPath.includes(this.minuteInputElement);
        // Toggle the dropdown if you click in the padded area of the target container
        if (!clickedClockButton &&
            !clickedAmPmButton &&
            !clickedMinuteInput &&
            !clickedHourInput) {
            this.toggleDropdown();
        }
    }
    handleClickDropdownValue(displayValue) {
        const value = getValue(displayValue, this.clockType, isAm(this.value));
        this.updateValue(value, true);
        this.clockButton.focus();
        this.expanded = false;
    }
    onHourKeyDown(event) {
        switch (event.key) {
            case 'Tab':
            case 'ArrowLeft':
            case 'ArrowRight':
            case 'Escape':
                break;
            case 'ArrowDown':
                event.preventDefault();
                this.updateValue(incrementHour(this.value, -1));
                break;
            case 'ArrowUp':
                event.preventDefault();
                this.updateValue(incrementHour(this.value, 1));
                break;
            case 'Backspace':
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                {
                    event.preventDefault();
                    this.hourInputElement.setSelectionRange(2, 2);
                    this.updateValue(getValidValueHourChange(this.value, this.clockType, event.key, this.hourInputElement.selectionStart, this.hourInputElement.value.length));
                }
                break;
            default:
                event.preventDefault();
        }
    }
    onMinuteKeyDown(event) {
        switch (event.key) {
            case 'Tab':
            case 'ArrowLeft':
            case 'ArrowRight':
            case 'Escape':
                break;
            case 'ArrowDown':
                event.preventDefault();
                this.updateValue(incrementMinute(this.value, -1, this.step));
                break;
            case 'ArrowUp':
                event.preventDefault();
                this.updateValue(incrementMinute(this.value, 1, this.step));
                break;
            case 'Backspace':
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9': {
                event.preventDefault();
                this.minuteInputElement.setSelectionRange(2, 2);
                this.updateValue(getValidValueMinuteChange(this.value, event.key, this.minuteInputElement.selectionStart));
                break;
            }
            default:
                event.preventDefault();
        }
    }
    onAmPmButtonKeyDown(event) {
        switch (event.key) {
            case 'ArrowDown':
            case 'ArrowUp':
                this.toggleAmPm(event);
                break;
        }
    }
    onListKeyDown(event) {
        switch (event.key) {
            case 'Escape':
                this.expanded = false;
                this.clockButton.focus();
                break;
        }
    }
    toggleAmPm(event) {
        event.preventDefault();
        this.updateValue(incrementHour(this.value, 12), true);
    }
    getAmPmString() {
        return isAm(this.value) ? this.i18n('am') : this.i18n('pm');
    }
    renderNumberInput() {
        return (h("div", { class: "gux-input-time-container" }, h("input", { role: "spinbutton", class: "gux-input-time-hours", type: "text", disabled: this.disabled, value: getHourDisplayValue(this.value, this.clockType), onKeyDown: e => this.onHourKeyDown(e), "aria-label": this.i18n('hoursInput'), pattern: getHoursPattern(this.clockType), ref: el => (this.hourInputElement = el), "aria-valuetext": getHourDisplayValue(this.value, this.clockType), "aria-valuenow": getHourDisplayValue(this.value, this.clockType), "aria-valuemin": this.clockType === '24h' ? 0 : 1, "aria-valuemax": this.clockType === '24h' ? 23 : 12 }), h("span", { class: "gux-time-separator" }, this.i18n('time-separator')), h("input", { role: "spinbutton", class: "gux-input-time-minutes", type: "text", disabled: this.disabled, value: getMinuteDisplayValue(this.value), onKeyDown: e => this.onMinuteKeyDown(e), "aria-label": this.i18n('minutesInput'), pattern: getMinutesPattern(), ref: el => (this.minuteInputElement = el), "aria-valuetext": getMinuteDisplayValue(this.value), "aria-valuenow": getMinuteDisplayValue(this.value), "aria-valuemin": 0, "aria-valuemax": 59 })));
    }
    renderAmPmSelector() {
        if (this.clockType === '12h') {
            return (h("button", { class: "gux-input-time-am-pm-selector", type: "button", disabled: this.disabled, "aria-label": this.i18n('toggleAmPM', { amOrPm: this.getAmPmString() }), onClick: (e) => this.toggleAmPm(e), onKeyDown: (e) => this.onAmPmButtonKeyDown(e), ref: el => (this.amPmElement = el) }, h("div", { class: {
                    'gux-meridiem': true,
                    'gux-visible': isAm(this.value)
                } }, this.i18n('am')), h("div", { class: {
                    'gux-meridiem': true,
                    'gux-visible': !isAm(this.value)
                } }, this.i18n('pm'))));
        }
    }
    renderClockButton() {
        return (h("button", { class: {
                'gux-clock-button': true,
                'gux-active': this.expanded
            }, type: "button", disabled: this.disabled, "aria-label": this.i18n('clockButton'), "aria-expanded": this.expanded.toString(), onClick: this.toggleDropdown.bind(this), ref: el => (this.clockButton = el) }, h("gux-icon", { decorative: true, "icon-name": "fa/clock-regular", size: "small" })));
    }
    renderTimeListItems() {
        return getTimeDisplayValues(this.interval, this.clockType, this.min, this.max).map(displayValue => {
            const value = getValue(displayValue, this.clockType, isAm(this.value));
            return (h("gux-list-item", { id: this.valueToId(value), onClick: () => this.handleClickDropdownValue(displayValue) }, displayValue));
        });
    }
    renderTarget() {
        return (h("div", { class: "gux-input-time", slot: "target", onClick: this.onTargetClick.bind(this) }, this.renderNumberInput(), this.renderAmPmSelector(), this.renderClockButton()));
    }
    renderPopup() {
        return (h("div", { slot: "popup", class: "gux-list-container", onKeyDown: (e) => this.onListKeyDown(e) }, h("gux-list", { ref: el => (this.listElement = el) }, this.renderTimeListItems())));
    }
    render() {
        return (h("gux-popup", { key: '92235cbe9dedb5be240f395a6ec9b9f2de67170d', class: {
                'gux-time-picker': true,
                'gux-error': this.hasError
            }, expanded: this.expanded, disabled: this.disabled }, this.renderTarget(), this.renderPopup()));
    }
    get root() { return getElement(this); }
    static get watchers() { return {
        "value": ["validateValueFormat"]
    }; }
};
__decorate([
    OnClickOutside({ triggerEvents: 'mousedown' })
], GuxTimePicker.prototype, "onClickOutside", null);
GuxTimePicker.style = guxTimePickerCss;

export { GuxTimePicker as gux_time_picker };
