'use strict';

var index = require('./index-BLhHoh_r.js');
var floatingUi_dom = require('./floating-ui.dom-CFIqWljW.js');
var randomHtmlId = require('./random-html-id-DH9-ntZu.js');
var afterNextRender = require('./after-next-render-CeY_1Kbz.js');
var isoDates = require('./iso-dates-B-hZmvim.js');
var onClickOutside = require('./on-click-outside-CrJioxOT.js');
var usage = require('./usage-v50bi18B.js');
var index$1 = require('./index-QInGO-Pu.js');
var intl = require('./intl-CN825h6c.js');
var useRegionalDates = require('./use-regional-dates-qjhuD9Ak.js');
require('./get-closest-element-CfyZl7i7.js');
require('./get-closest-element-CIMI0Cx4.js');

const start = "Start";
const end = "End";
const date = "Date";
const toggleCalendar = "Toggle calendar view";
var translationResources = {
	start: start,
	end: end,
	date: date,
	toggleCalendar: toggleCalendar
};

function getCalendarLabels(labelString, mode, defaultLabels) {
    const labels = labelString.split(',').map(label => label.trim());
    if (mode === "range" /* CalendarModes.Range */) {
        return [labels[0] || defaultLabels[0], labels[1] || defaultLabels[1]];
    }
    else if (mode !== "range" /* CalendarModes.Range */ && !labels[0]) {
        return [defaultLabels[2]];
    }
    return [labels[0]];
}
function isOutOfBoundsDate(value, min, max) {
    return (max && max < value) || (min && min > value);
}
function getClampedMonthValue(unclampedMonthValue) {
    let clampedMonthValue = unclampedMonthValue;
    while (clampedMonthValue < 0) {
        clampedMonthValue += 12;
    }
    clampedMonthValue = clampedMonthValue % 12;
    return clampedMonthValue;
}
function incrementDay(delta, focusedDateValue) {
    let newDay = new Date(focusedDateValue.getTime());
    newDay.setDate(newDay.getDate() + delta);
    if (delta < 0) {
        if (newDay.getDate() > focusedDateValue.getDate()) {
            newDay = new Date(focusedDateValue.getFullYear(), focusedDateValue.getMonth() + 1, 0, 0, 0, 0);
        }
    }
    else {
        if (newDay.getDate() < focusedDateValue.getDate()) {
            newDay.setMonth(newDay.getMonth() - 1);
        }
    }
    return newDay;
}
function incrementMonth(delta, focusedDateValue) {
    const newMonth = new Date(focusedDateValue.valueOf());
    const newMonthValue = getClampedMonthValue(newMonth.getMonth() + delta);
    newMonth.setMonth(newMonthValue);
    newMonth.setFullYear(focusedDateValue.getFullYear());
    if (newMonth.getMonth() !== newMonthValue) {
        return incrementMonth(delta, incrementDay(-1, focusedDateValue));
    }
    return newMonth;
}
function incrementYear(delta, focusedDateValue) {
    const newYear = new Date(focusedDateValue.valueOf());
    newYear.setFullYear(focusedDateValue.getFullYear() + delta);
    return newYear;
}
function getFormattedDay(date) {
    return `0${date.getDate().toString()}`.slice(-2);
}
function getFormattedMonth(date) {
    return `0${(date.getMonth() + 1).toString()}`.slice(-2);
}
function getFormattedYear(date, yearFormat) {
    if (yearFormat === 'yyyy') {
        return date.getFullYear().toString();
    }
    else {
        return date.getFullYear().toString().slice(-2);
    }
}
function getFormattedDate(date, format) {
    const formatSeparator = getFormatSeparator(format);
    const dateString = format
        .split(formatSeparator)
        .map(intervalFormat => {
        switch (intervalFormat[0]) {
            case 'd':
                return getFormattedDay(date);
            case 'm':
                return getFormattedMonth(date);
            case 'y':
                return getFormattedYear(date, intervalFormat);
        }
    })
        .join(formatSeparator);
    return dateString;
}
function getIntervalLetter(format, index) {
    const intervalLetter = format[index];
    if (!intervalLetter || intervalLetter === '/') {
        return format[index - 1];
    }
    return intervalLetter;
}
function getFormatSeparator(format) {
    return format.match(/\W/)[0];
}
function getPreviousIntervalRange(format, currentIntervalRange) {
    const intervalOrder = getIntervalOrder(format);
    const currentIntervalLetter = getIntervalLetter(format, currentIntervalRange.selectionStart);
    const currentIntervalOrderIndex = intervalOrder.indexOf(currentIntervalLetter);
    const newIntervalOrderIndex = (currentIntervalOrderIndex + intervalOrder.length - 1) %
        intervalOrder.length;
    const newIntervalLetter = intervalOrder[newIntervalOrderIndex];
    return getIntervalRange(format, newIntervalLetter);
}
function getNextIntervalRange(format, currentIntervalRange) {
    const intervalOrder = getIntervalOrder(format);
    const currentIntervalLetter = getIntervalLetter(format, currentIntervalRange.selectionStart);
    const currentIntervalOrderIndex = intervalOrder.indexOf(currentIntervalLetter);
    const newIntervalOrderIndex = (currentIntervalOrderIndex + 1) % intervalOrder.length;
    const newIntervalLetter = intervalOrder[newIntervalOrderIndex];
    return getIntervalRange(format, newIntervalLetter);
}
function getIntervalOrder(format) {
    const formatSeperator = getFormatSeparator(format);
    return format
        .split(formatSeperator)
        .reduce((acc, cv) => acc.concat(cv[0]), []);
}
function getIntervalRange(format, intervalLetter) {
    const selectionStart = format.indexOf(intervalLetter);
    const selectionEnd = format.lastIndexOf(intervalLetter) + 1;
    return { selectionStart, selectionEnd };
}

const guxDatepickerCss = ":host{display:block;inline-size:fit-content}.gux-datepicker{display:flex}.gux-datepicker.gux-disabled{pointer-events:none;cursor:default}.gux-datepicker.gux-disabled .gux-datepicker-field .gux-datepicker-field-input{opacity:var(--gse-ui-datePicker-disabled-opacity)}.gux-datepicker .gux-datepicker-field{display:inline-flex;flex-direction:row;flex-wrap:nowrap;place-content:flex-start flex-start;align-items:center;inline-size:100%}.gux-datepicker .gux-datepicker-field~.gux-datepicker-field{margin-inline-start:var(--gse-ui-datePicker-range-gap)}.gux-datepicker .gux-datepicker-field.gux-above{flex-direction:column;align-items:self-start}.gux-datepicker .gux-datepicker-field.gux-above .gux-datepicker-field-input{margin-block-start:0}.gux-datepicker .gux-datepicker-field.gux-above .gux-datepicker-field-label{margin-inline-end:0}.gux-datepicker .gux-datepicker-field .gux-datepicker-field-label{flex:0 1 auto;align-self:auto;order:0;margin-inline-end:var(--gse-ui-formControl-helper-gap);font-family:var(--gse-ui-formControl-label-textBold-fontFamily);font-size:var(--gse-ui-formControl-label-textBold-fontSize);font-weight:var(--gse-ui-formControl-label-textBold-fontWeight);line-height:var(--gse-ui-formControl-label-textBold-lineHeight);color:var(--gse-ui-formControl-label-labelColor)}.gux-datepicker .gux-datepicker-field .gux-datepicker-field-input{box-sizing:border-box;display:flex;flex-direction:row;flex-wrap:nowrap;gap:var(--gse-ui-formControl-input-gap);place-content:stretch center;align-items:center;inline-size:100%;block-size:var(--gse-ui-formControl-input-textfield-height);padding:var(--gse-ui-formControl-input-padding);color:var(--gse-ui-formControl-input-populatedColor);white-space:nowrap;background-color:var(--gse-ui-formControl-input-backgroundColor);background-image:none;border:var(--gse-ui-formControl-input-default-border-width) var(--gse-ui-formControl-input-default-border-style) var(--gse-ui-formControl-input-default-border-color);border-radius:var(--gse-ui-formControl-input-borderRadius)}.gux-datepicker .gux-datepicker-field .gux-datepicker-field-input:hover{border:var(--gse-ui-formControl-input-hover-border-width) var(--gse-ui-formControl-input-hover-border-style) var(--gse-ui-formControl-input-hover-border-color)}.gux-datepicker .gux-datepicker-field .gux-datepicker-field-input:focus-within{outline:var(--gse-ui-formControl-input-focus-border-width) var(--gse-ui-formControl-input-focus-border-style) var(--gse-ui-formControl-input-focus-border-color);outline-offset:var(--gse-semantic-focusOutline-offset);border:var(--gse-ui-formControl-input-active-border-width) var(--gse-ui-formControl-input-active-border-style) var(--gse-ui-formControl-input-active-border-color);border-radius:var(--gse-ui-formControl-focusRing-borderRadius)}.gux-datepicker .gux-datepicker-field .gux-datepicker-field-input.gux-active{outline:var(--gse-ui-formControl-input-focus-border-width) var(--gse-ui-formControl-input-focus-border-style) var(--gse-ui-formControl-input-focus-border-color);outline-offset:var(--gse-semantic-focusOutline-offset);border:var(--gse-ui-formControl-input-active-border-width) var(--gse-ui-formControl-input-active-border-style) var(--gse-ui-formControl-input-active-border-color);border-radius:var(--gse-ui-formControl-focusRing-borderRadius)}.gux-datepicker .gux-datepicker-field .gux-datepicker-field-input .gux-datepicker-field-text-input{box-sizing:border-box;display:flex;flex:1 1 auto;flex-direction:row;flex-wrap:nowrap}.gux-datepicker .gux-datepicker-field .gux-datepicker-field-input .gux-datepicker-field-text-input input{flex:1 1 auto;align-self:auto;order:0;inline-size:calc(var(--gse-ui-calendarMenu-day-input-width) - var(--gse-ui-icon-small-size));padding:0;overflow:hidden;font-family:var(--gse-ui-formControl-input-contentText-fontFamily);font-size:var(--gse-ui-formControl-input-contentText-fontSize);font-weight:var(--gse-ui-formControl-input-contentText-fontWeight);line-height:var(--gse-ui-formControl-input-contentText-lineHeight);color:var(--gse-ui-formControl-input-populatedColor);outline:none;background-color:var(--gse-ui-formControl-input-backgroundColor);border:none}.gux-datepicker .gux-datepicker-field .gux-datepicker-field-input .gux-datepicker-field-text-input input::placeholder{color:var(--gse-ui-formControl-input-placeholderColor);opacity:1}.gux-datepicker .gux-datepicker-field .gux-datepicker-field-input .gux-datepicker-field-text-input input::-webkit-search-cancel-button,.gux-datepicker .gux-datepicker-field .gux-datepicker-field-input .gux-datepicker-field-text-input input::-webkit-search-results-button,.gux-datepicker .gux-datepicker-field .gux-datepicker-field-input .gux-datepicker-field-text-input input::-webkit-calendar-picker-indicator{display:none;-webkit-appearance:none}.gux-datepicker .gux-datepicker-field .gux-datepicker-field-input .gux-datepicker-field-text-input button{display:flex;flex:0 1 auto;align-items:center;align-self:auto;justify-content:center;order:0;padding:0;color:var(--gse-ui-formControl-input-inputIcon-iconEndColor);outline:none;background:transparent;border:none;border-radius:var(--gse-ui-actionButton-borderRadius)}.gux-datepicker .gux-datepicker-field .gux-datepicker-field-input .gux-datepicker-field-text-input button:focus-within{outline:var(--gse-ui-formControl-input-focus-border-width) var(--gse-ui-formControl-input-focus-border-style) var(--gse-ui-formControl-input-focus-border-color);outline-offset:var(--gse-semantic-focusOutline-offset);border:var(--gse-ui-formControl-input-active-border-width) var(--gse-ui-formControl-input-active-border-style) var(--gse-ui-formControl-input-active-border-color);border-radius:var(--gse-ui-formControl-focusRing-borderRadius);outline-offset:var(--gse-ui-datePicker-focusCalendar-gap);border:none;border-radius:var(--gse-ui-calendarMenu-month-calendarButton-focusBorderRadius)}.gux-datepicker .gux-datepicker-field .gux-datepicker-field-input .gux-datepicker-field-text-input button:not(:disabled):focus-visible,.gux-datepicker .gux-datepicker-field .gux-datepicker-field-input .gux-datepicker-field-text-input button:not(:disabled):hover{color:var(--gse-ui-datePicker-iconHover);cursor:pointer}.gux-datepicker .gux-datepicker-field .gux-datepicker-field-input gux-calendar{position:fixed;z-index:var(--gse-semantic-zIndex-popup);display:none}.gux-datepicker.gux-active .gux-datepicker-field .gux-datepicker-field-input .gux-datepicker-field-text-input button{color:var(--gse-ui-formControl-input-inputIcon-iconEndColor)}.gux-datepicker.gux-active .gux-datepicker-field .gux-datepicker-field-input .gux-datepicker-field-text-input button:not(:disabled):focus-visible,.gux-datepicker.gux-active .gux-datepicker-field .gux-datepicker-field-input .gux-datepicker-field-text-input button:not(:disabled):hover{color:var(--gse-ui-formControl-input-inputIcon-iconEndColor)}.gux-datepicker.gux-active .gux-datepicker-field .gux-datepicker-field-input gux-calendar{display:block}.gux-sr-only{position:absolute;top:auto;left:-10000px;width:1px;height:1px;overflow:hidden}";

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
const GuxDatepicker = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.input = index.createEvent(this, "input", 7);
        this.yearFormat = 'yyyy';
        /**
         * Indicates if the user is selecting the range with the mouse.
         * This prevents other events from processing on the input range.
         */
        this.isSelectingRangeWithMouse = false;
        this.lastYear = new Date().getFullYear();
        this.startInputId = randomHtmlId.randomHTMLId('gux-datepicker');
        this.endInputId = randomHtmlId.randomHTMLId('gux-datepicker');
        /**
         * The datepicker label (can be a single label, or two separated by a comma if it's a range datepicker)
         */
        this.label = '';
        /**
         * The datepicker number of months displayed
         */
        this.numberOfMonths = 1;
        /**
         * The min date selectable
         */
        this.minDate = '';
        /**
         * The max date selectable
         */
        this.maxDate = '';
        /**
         * The calendar mode (can be single or range)
         */
        this.mode = "single" /* CalendarModes.Single */;
        /**
         * Disable the input and prevent interactions.
         */
        this.disabled = false;
        this.labelPosition = 'beside';
        /**
         * The datepicker current value
         */
        this.formattedValue = '';
        /**
         * The datepicker current value
         */
        this.toFormattedValue = '';
        /**
         * Uses styling to control visibility of the calendar element
         */
        this.active = false;
        /**
         * Tracks the amount of key presses when focusing on the input.
         */
        this.pressedKeys = [];
    }
    watchValue() {
        if (this.format) {
            this.updateDate();
        }
    }
    watchMinDate(newDate) {
        if (newDate) {
            this.minDateDate = isoDates.fromIsoDate(newDate);
        }
        else {
            this.minDateDate = null;
        }
    }
    watchMaxDate(newDate) {
        if (newDate) {
            this.maxDateDate = isoDates.fromIsoDate(newDate);
        }
        else {
            this.maxDateDate = null;
        }
    }
    watchFormat(newFormat) {
        if (!newFormat.includes('yyyy')) {
            this.yearFormat = 'yy';
        }
        this.intervalOrder = getIntervalOrder(newFormat);
        this.lastIntervalRange = this.initialIntervalRange;
    }
    watchActiveCalendar(active) {
        if (active === true) {
            const startDateValue = isoDates.fromIsoDate(this.value.split('/')[0]);
            // calendar should open to month containing the start date
            void this.calendarElement.resetCalendarView(startDateValue);
        }
    }
    onKeyDown(event) {
        if (this.isInputFieldEvent(event)) {
            this.focusedField = this.getInputFieldFromEvent(event);
            switch (event.key) {
                case 'Enter':
                case 'Escape':
                    this.focusedField.blur();
                    this.active = false;
                    break;
                case 'Tab':
                    // Allow default behavior of tabbing to the next element - the calendar toggle button
                    break;
                case 'ArrowDown':
                    event.preventDefault();
                    this.increment(-1);
                    this.setCursorRange();
                    break;
                case 'ArrowUp':
                    event.preventDefault();
                    this.increment(1);
                    this.setCursorRange();
                    break;
                case 'ArrowLeft': {
                    event.preventDefault();
                    const previousIntervalRange = getPreviousIntervalRange(this.format, this.intervalRange);
                    this.setIntervalRange(previousIntervalRange);
                    this.setCursorRange();
                    this.pressedKeys.length = 0;
                    break;
                }
                case 'ArrowRight': {
                    event.preventDefault();
                    const nextIntervalRange = getNextIntervalRange(this.format, this.intervalRange);
                    this.setIntervalRange(nextIntervalRange);
                    this.setCursorRange();
                    this.pressedKeys.length = 0;
                    break;
                }
                default:
                    event.preventDefault();
                    if (!this.isSelectingRangeWithMouse) {
                        this.setIntervalRange({
                            selectionStart: this.focusedField.selectionStart,
                            selectionEnd: this.focusedField.selectionEnd
                        });
                        this.updateIntervalValue(event);
                        this.setCursorRange();
                    }
                    break;
            }
        }
        else {
            switch (event.key) {
                case 'Enter':
                case 'Escape':
                case ' ': {
                    this.active = false;
                    const button = this.root.shadowRoot.querySelector('.gux-calendar-toggle-button');
                    afterNextRender.afterNextRenderTimeout(() => {
                        button.focus();
                    });
                    break;
                }
                case 'Tab':
                    if (this.active) {
                        this.active = false;
                    }
                    break;
            }
        }
    }
    onMouseDown(event) {
        if (this.isInputFieldEvent(event)) {
            this.isSelectingRangeWithMouse = true;
        }
        const composedPath = event.composedPath();
        const inDatepicker = composedPath.includes(this.datepickerElement);
        const notToggleButton = Array.from(this.root.shadowRoot.querySelectorAll('.gux-calendar-toggle-button')).every((toggleButtonElement) => !composedPath.includes(toggleButtonElement));
        if (notToggleButton) {
            this.active = inDatepicker;
        }
    }
    onClickOutside() {
        this.active = false;
        this.pressedKeys.length = 0;
    }
    /*********  Event Handlers  **********/
    onInputFocusIn(event) {
        this.focusedField = this.getInputFieldFromEvent(event);
        if (!this.isSelectingRangeWithMouse) {
            // When focusing the input the Safari browser will fight for control of the cursor unless it is done asynchronously
            afterNextRender.afterNextRenderTimeout(() => this.setRange());
        }
    }
    onInputFocusOut() {
        this.lastIntervalRange = this.initialIntervalRange;
    }
    onInputMouseUp(event) {
        event.preventDefault();
        this.lastIntervalRange = getIntervalRange(this.format, getIntervalLetter(this.format, this.focusedField.selectionStart));
        this.setRange();
        this.isSelectingRangeWithMouse = false;
    }
    /********  Other Methods  **********/
    isInputFieldEvent(event) {
        const composedPath = event.composedPath();
        return (composedPath.includes(this.inputElement) ||
            composedPath.includes(this.toInputElement));
    }
    get initialIntervalRange() {
        return getIntervalRange(this.format, getIntervalLetter(this.format, 0));
    }
    getInputFieldFromEvent(event) {
        const composedPath = event.composedPath();
        return composedPath[0];
    }
    updateIntervalValue(event) {
        this.pressedKeys.push(event.key);
        const inputNumber = parseInt(event.key, 10);
        if (!isNaN(inputNumber)) {
            const currentSectionValue = this.focusedField.value.slice(this.focusedField.selectionStart, this.focusedField.selectionEnd);
            if (getIntervalLetter(this.format, this.focusedField.selectionStart) ===
                'y' &&
                this.yearFormat === 'yyyy') {
                this.typeYearValue(currentSectionValue, event.key);
            }
            else {
                if (this.canSetDate(inputNumber) && this.pressedKeys.length >= 2) {
                    this.updateSelection(this.focusedField, `${currentSectionValue[1]}${event.key}`);
                    this.setValue();
                }
                else {
                    this.updateSelection(this.focusedField, `0${event.key}`.replace('00', '01'));
                    this.setValue();
                }
            }
        }
    }
    updateSelection(field, text) {
        field.value =
            field.value.substr(0, this.intervalRange.selectionStart) +
                text +
                field.value.substr(this.intervalRange.selectionEnd);
    }
    getCalendarLabels() {
        return getCalendarLabels(this.label, this.mode, [
            this.i18n('start'),
            this.i18n('end'),
            this.i18n('date')
        ]);
    }
    stringToDate(stringDate) {
        const formatSeparator = getFormatSeparator(this.format);
        const formatItems = this.format.toLowerCase().split(formatSeparator);
        const dateItems = stringDate.split(formatSeparator);
        const year = parseInt(dateItems[formatItems.indexOf(this.yearFormat)], 10);
        const month = parseInt(dateItems[formatItems.indexOf('mm')], 10) - 1;
        const day = parseInt(dateItems[formatItems.indexOf('dd')], 10);
        const date = new Date(year, month, day);
        if (this.yearFormat === 'yy' &&
            date.getFullYear() < 1970 &&
            this.lastYear > 1970) {
            date.setFullYear(date.getFullYear() + 100);
        }
        return date;
    }
    onCalendarSelect(inputEvent) {
        const calendar = inputEvent.target;
        this.value = calendar.value;
        inputEvent.stopPropagation(); // Don't let both events bubble.
        this.input.emit(this.value);
        this.updateDate();
        this.inputElement.value = this.formattedValue;
        if (this.mode === "range" /* CalendarModes.Range */) {
            this.toInputElement.value = this.toFormattedValue;
        }
        if (document.activeElement !== this.inputElement ||
            document.activeElement !== this.toInputElement) {
            this.active = false;
        }
    }
    setValue() {
        if (this.mode === "range" /* CalendarModes.Range */) {
            const fromValue = this.stringToDate(this.inputElement.value);
            const toValue = this.stringToDate(this.toInputElement.value);
            this.value = isoDates.asIsoDateRange(fromValue, toValue);
            this.updateDate();
            void this.calendarElement.setValue([fromValue, toValue]);
        }
        else {
            const date = this.stringToDate(this.inputElement.value);
            this.value = isoDates.asIsoDate(date);
            this.updateDate();
            void this.calendarElement.setValue(date);
        }
        this.input.emit(this.value);
    }
    setRange() {
        this.setIntervalRange(this.lastIntervalRange);
        this.setCursorRange();
    }
    typeYearValue(selection, key) {
        if (selection[0] !== ' ') {
            this.updateSelection(this.focusedField, `   ${key}`);
        }
        else {
            this.updateSelection(this.focusedField, `${selection.substr(1)}${key}`);
            if (!(selection.substr(1) + key).includes(' ')) {
                this.setValue();
            }
        }
    }
    canSetDate(key) {
        const newValue = parseInt([
            this.focusedField.value[this.intervalRange.selectionEnd - 1].toString(),
            key
        ].join(''), 10);
        if (newValue) {
            switch (getIntervalLetter(this.format, this.focusedField.selectionStart)) {
                case 'd': {
                    const dateValue = isoDates.fromIsoDate(this.value);
                    if (newValue <=
                        new Date(dateValue.getFullYear(), dateValue.getMonth() + 1, 0).getDate()) {
                        return true;
                    }
                    break;
                }
                case 'm':
                    if (newValue <= 12) {
                        return true;
                    }
                    break;
                case 'y':
                    return true;
            }
        }
        return false;
    }
    getMapAndRegexFromField(value) {
        const map = {
            dd: `0${value.getDate()}`.slice(-2),
            mm: `0${value.getMonth() + 1}`.slice(-2)
        };
        if (this.yearFormat === 'yyyy') {
            map.yyyy = value.getFullYear().toString();
        }
        else {
            map.yy = value.getFullYear().toString().slice(-2);
        }
        const regexp = new RegExp(Object.keys(map).join('|'), 'gi');
        return {
            map,
            regexp
        };
    }
    updateDate() {
        if (this.mode === "range" /* CalendarModes.Range */) {
            const [from, to] = isoDates.fromIsoDateRange(this.value);
            const { map: map1, regexp: regexp1 } = this.getMapAndRegexFromField(from);
            this.formattedValue = this.format.replace(regexp1, match => {
                return map1[match];
            });
            const { map: map2, regexp: regexp2 } = this.getMapAndRegexFromField(to);
            this.toFormattedValue = this.format.replace(regexp2, match => {
                return map2[match];
            });
        }
        else {
            const dateValue = isoDates.fromIsoDate(this.value);
            const { map: map3, regexp: regexp3 } = this.getMapAndRegexFromField(dateValue);
            this.formattedValue = this.format.replace(regexp3, match => {
                return map3[match];
            });
        }
    }
    /** Selects a range of the input text based on the intervalRange property. */
    setCursorRange() {
        if (this.intervalRange) {
            // If the selection is the same as what you are trying to set, setSelectionRange will deselect it.
            // To prevent this, the line below sets the selection to the full field before setting the range we actually want.
            this.focusedField.setSelectionRange(0, 100);
            // Select the range we want
            this.focusedField.setSelectionRange(this.intervalRange.selectionStart, this.intervalRange.selectionEnd);
        }
    }
    toggleCalendar() {
        this.active = !this.active;
        if (this.active) {
            afterNextRender.afterNextRenderTimeout(() => {
                void this.calendarElement.focusPreviewDate();
            });
        }
    }
    setIntervalRange(intervalRange) {
        this.intervalRange = intervalRange;
    }
    getCombinedFocusedDateValue() {
        return this.mode === "range" /* CalendarModes.Range */
            ? this.getRangeFocusedDateValue()
            : this.getFocusedDateValue();
    }
    getFocusedDateValue() {
        return isoDates.fromIsoDate(this.value);
    }
    getRangeFocusedDateValue() {
        const [start, end] = isoDates.fromIsoDateRange(this.value);
        return this.focusedField === this.inputElement ? start : end;
    }
    increment(delta) {
        const interval = getIntervalLetter(this.format, this.focusedField.selectionStart);
        const focusedDateValue = this.getCombinedFocusedDateValue();
        let newDate;
        switch (interval) {
            case 'd':
                newDate = incrementDay(delta, focusedDateValue);
                break;
            case 'm':
                newDate = incrementMonth(delta, focusedDateValue);
                break;
            case 'y':
                newDate = incrementYear(delta, focusedDateValue);
                break;
        }
        if (isOutOfBoundsDate(newDate, this.minDateDate, this.maxDateDate)) {
            newDate = focusedDateValue;
        }
        this.lastYear = newDate.getFullYear();
        this.setIntervalRange({
            selectionStart: this.focusedField.selectionStart,
            selectionEnd: this.focusedField.selectionEnd
        });
        this.focusedField.value = getFormattedDate(newDate, this.format);
        this.setValue();
    }
    async componentWillLoad() {
        usage.trackComponent(this.root, { variant: this.mode });
        this.i18n = await index$1.buildI18nForComponent(this.root, translationResources);
        if (useRegionalDates.useRegionalDates()) {
            this.format =
                this.format ||
                    intl.getFormat(intl.determineDisplayLocale(this.root));
        }
        else {
            this.format = this.format || 'mm/dd/yyyy';
        }
        this.watchMinDate(this.minDate);
        this.watchMaxDate(this.maxDate);
        this.watchFormat(this.format);
        if (!this.value) {
            const now = new Date();
            now.setHours(0, 0, 0, 0);
            if (this.mode === "range" /* CalendarModes.Range */) {
                this.value = isoDates.asIsoDateRange(now, now);
            }
            else {
                this.value = isoDates.asIsoDate(now);
            }
            if (this.mode === "range" /* CalendarModes.Range */ && this.numberOfMonths < 2) {
                this.numberOfMonths = 2;
            }
        }
        this.updateDate();
    }
    runUpdatePosition() {
        if (this.cleanupUpdatePosition) {
            this.cleanupUpdatePosition();
        }
        this.cleanupUpdatePosition = floatingUi_dom.autoUpdate(this.datepickerElement, this.calendarElement, () => this.updatePosition(), {
            ancestorScroll: true,
            elementResize: true,
            animationFrame: true,
            ancestorResize: true
        });
    }
    updatePosition() {
        void floatingUi_dom.computePosition(this.datepickerElement, this.calendarElement, {
            strategy: 'fixed',
            placement: 'bottom-start',
            middleware: [
                floatingUi_dom.offset({ crossAxis: -3 }),
                floatingUi_dom.flip({
                    fallbackStrategy: 'initialPlacement'
                })
            ]
        }).then(({ x, y }) => {
            Object.assign(this.calendarElement.style, {
                left: `${x}px`,
                top: `${y}px`
            });
        });
    }
    componentDidUpdate() {
        if (this.active) {
            this.runUpdatePosition();
        }
        else if (this.cleanupUpdatePosition) {
            this.cleanupUpdatePosition();
        }
    }
    disconnectedCallback() {
        if (this.cleanupUpdatePosition) {
            this.cleanupUpdatePosition();
        }
    }
    renderCalendarToggleButton() {
        return (index.h("button", { class: "gux-calendar-toggle-button", type: "button", onClick: () => this.toggleCalendar(), "aria-expanded": this.active.toString(), "aria-label": this.i18n('toggleCalendar'), disabled: this.disabled }, index.h("gux-icon", { decorative: true, "icon-name": "fa/calendar-regular", size: "small" })));
    }
    renderCalendar() {
        return (index.h("gux-calendar", { tabindex: "-1", ref: (el) => (this.calendarElement = el), value: this.value, mode: this.mode, onCalendarSelect: (event) => this.onCalendarSelect(event), minDate: this.minDate, maxDate: this.maxDate, numberOfMonths: this.numberOfMonths, startDayOfWeek: this.startDayOfWeek }));
    }
    renderStartDateField() {
        return (index.h("div", { class: {
                'gux-datepicker-field': true,
                'gux-above': this.labelPosition === 'above'
            } }, index.h("label", { htmlFor: this.startInputId, class: {
                'gux-datepicker-field-label': true,
                'gux-sr-only': this.mode === "single" /* CalendarModes.Single */ && !this.label
            } }, this.getCalendarLabels()[0]), index.h("div", { class: "gux-datepicker-field-input" }, index.h("div", { class: "gux-datepicker-field-text-input" }, index.h("input", { id: this.startInputId, type: "text", onClick: e => this.onInputMouseUp(e), onFocusin: e => this.onInputFocusIn(e), onFocusout: () => this.onInputFocusOut(), ref: (el) => (this.inputElement = el), value: this.formattedValue, disabled: this.disabled }), this.renderCalendarToggleButton()), this.renderCalendar())));
    }
    renderEndDateField() {
        if (this.mode === "single" /* CalendarModes.Single */) {
            return null;
        }
        return (index.h("div", { class: {
                'gux-datepicker-field': true,
                'gux-above': this.labelPosition === 'above'
            } }, index.h("label", { htmlFor: this.endInputId, class: "gux-datepicker-field-label" }, this.getCalendarLabels()[1]), index.h("div", { class: "gux-datepicker-field-input" }, index.h("div", { class: "gux-datepicker-field-text-input" }, index.h("input", { id: this.endInputId, type: "text", ref: (el) => (this.toInputElement = el), onMouseUp: e => this.onInputMouseUp(e), onFocusin: e => this.onInputFocusIn(e), onFocusout: () => this.onInputFocusOut(), value: this.toFormattedValue, disabled: this.disabled }), this.renderCalendarToggleButton()))));
    }
    render() {
        return (index.h("div", { key: '8bf19a961f4cd2d4b66e75d6088b93ea72a13879', class: {
                'gux-datepicker': true,
                'gux-active': this.active,
                'gux-disabled': this.disabled
            }, ref: (el) => (this.datepickerElement = el) }, this.renderStartDateField(), this.renderEndDateField()));
    }
    get root() { return index.getElement(this); }
    static get watchers() { return {
        "value": ["watchValue"],
        "minDate": ["watchMinDate"],
        "maxDate": ["watchMaxDate"],
        "format": ["watchFormat"],
        "active": ["watchActiveCalendar"]
    }; }
};
__decorate([
    onClickOutside.OnClickOutside({ triggerEvents: 'mousedown' })
], GuxDatepicker.prototype, "onClickOutside", null);
GuxDatepicker.style = guxDatepickerCss;

exports.gux_datepicker = GuxDatepicker;
