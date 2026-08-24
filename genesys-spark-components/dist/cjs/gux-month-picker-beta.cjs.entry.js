'use strict';

var index = require('./index-BLhHoh_r.js');
var usage = require('./usage-v50bi18B.js');
var onClickOutside = require('./on-click-outside-CrJioxOT.js');
var index$1 = require('./index-QInGO-Pu.js');
var intl = require('./intl-CN825h6c.js');
var useRegionalDates = require('./use-regional-dates-qjhuD9Ak.js');
var simulateNativeEvent = require('./simulate-native-event-_MPnVmRN.js');
var afterNextRender = require('./after-next-render-CeY_1Kbz.js');
var yearMonthValues = require('./year-month-values-CuDMneF9.js');
require('./get-closest-element-CfyZl7i7.js');
require('./get-closest-element-CIMI0Cx4.js');

const toggleCalendar = "Toggle month calendar view";
const month = "Month";
const year = "Year";
const unset = "Unset";
var translationResources = {
	toggleCalendar: toggleCalendar,
	month: month,
	year: year,
	unset: unset
};

const guxMonthPickerCss = ":host{display:inline-block}.gux-target{display:inline-flex;gap:var(--gse-ui-formControl-input-gap);padding:var(--gse-ui-formControl-textarea-padding);cursor:pointer;background-color:var(--gse-ui-calendarMenu-backgroundColor);border:var(--gse-ui-formControl-input-default-border-width) var(--gse-ui-formControl-input-default-border-style) var(--gse-ui-formControl-input-default-border-color);border-radius:var(--gse-ui-formControl-input-borderRadius)}.gux-target:focus-within{outline:var(--gse-ui-formControl-input-focus-border-width) var(--gse-ui-formControl-input-focus-border-style) var(--gse-ui-formControl-input-focus-border-color);outline-offset:var(--gse-semantic-focusOutline-offset);border:var(--gse-ui-formControl-input-active-border-width) var(--gse-ui-formControl-input-active-border-style) var(--gse-ui-formControl-input-active-border-color);border-radius:var(--gse-ui-formControl-focusRing-borderRadius)}.gux-target .gux-display{display:inline-flex;align-items:center;min-inline-size:100px;padding-inline-end:var(--gse-ui-formControl-input-gap);font-family:var(--gse-ui-formControl-label-text-fontFamily);font-size:var(--gse-ui-formControl-label-text-fontSize);font-weight:var(--gse-ui-formControl-label-text-fontWeight);line-height:var(--gse-ui-formControl-label-text-lineHeight);color:var(--gse-ui-formControl-label-labelColor)}.gux-target .gux-display .gux-spinner{outline:none}.gux-target .gux-display .gux-spinner:not(:first-child){margin-inline-start:4px}.gux-target .gux-display .gux-spinner:focus-visible{background:var(--gse-ui-calendarMenu-month-hover-backgroundColor)}.gux-target .gux-popup-toggle{justify-content:right;color:var(--gse-ui-monthPicker-calendarStates-defaultColor);background:transparent;border:none}.gux-target .gux-popup-toggle:focus-visible{outline:var(--gse-ui-monthPicker-calendarStates-focus-border-width) var(--gse-ui-monthPicker-calendarStates-focus-border-style) var(--gse-ui-monthPicker-calendarStates-focus-border-color);outline-offset:var(--gse-semantic-focusOutline-offset);border-radius:var(--gse-ui-calendarMenu-month-calendarButton-focusBorderRadius)}.gux-target .gux-popup-toggle:not(:disabled):hover{color:var(--gse-ui-monthPicker-calendarStates-hoverColor);cursor:pointer}.gux-target .gux-popup-toggle:not(:disabled):focus{color:var(--gse-ui-monthPicker-calendarStates-activeColor);cursor:pointer}.gux-target .gux-popup-toggle:disabled{color:var(--gse-ui-monthPicker-calendarStates-disabledColor)}.gux-target .gux-popup-toggle.gux-expanded{color:var(--gse-ui-monthPicker-calendarStates-activeColor)}";

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
const DateTimeFormats = { year: 'numeric', month: 'long' };
const YearFirstLocales = ['ar', 'he', 'ja', 'ko', 'zh-cn', 'zh-tw'];
const GuxMonthPicker = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.disabled = false;
        this.expanded = false;
    }
    onKeyDown(event) {
        switch (event.key) {
            case 'Escape':
                this.expanded = false;
                this.calendarToggleButtonElement.focus();
                break;
        }
    }
    onValueUpdate(newValue) {
        if (this.isOutOfBounds(newValue)) {
            if (this.isBeforeMin(newValue)) {
                this.value = this.min;
            }
            else {
                this.value = this.max;
            }
        }
        else {
            this.value = newValue;
        }
        simulateNativeEvent.simulateNativeEvent(this.root, 'input');
        simulateNativeEvent.simulateNativeEvent(this.root, 'change');
    }
    onClickOutside() {
        this.expanded = false;
    }
    async componentWillLoad() {
        usage.trackComponent(this.root);
        this.i18n = await index$1.buildI18nForComponent(this.root, translationResources);
        if (useRegionalDates.useRegionalDates()) {
            this.locale = intl.determineDisplayLocale(this.root);
        }
        else {
            this.locale = index$1.getDesiredLocale(this.root);
        }
    }
    onFocusout(event) {
        const focusIsOutsideComponent = event.relatedTarget && !this.root.contains(event.relatedTarget);
        if (focusIsOutsideComponent) {
            this.expanded = false;
        }
    }
    isOutOfBounds(value) {
        return this.isBeforeMin(value) || this.isAfterMax(value);
    }
    isBeforeMin(value) {
        return this.min && this.min > value;
    }
    isAfterMax(value) {
        return this.max && this.max < value;
    }
    toggleCalendar() {
        this.expanded = !this.expanded;
        if (this.expanded) {
            afterNextRender.afterNextRender(() => {
                void this.monthCalendarElement.guxFocus(this.value);
            });
        }
    }
    onMonthCalendarInput() {
        this.value = this.monthCalendarElement.value;
        this.expanded = false;
        this.calendarToggleButtonElement.focus();
    }
    incrementMonth(delta) {
        if (this.value) {
            const { year: currentYear, month: currentMonth } = yearMonthValues.getYearMonthObject(this.value);
            const newMonth = (((parseInt(currentMonth) + 11 + delta) % 12) + 1)
                .toString()
                .padStart(2, '0');
            this.value = yearMonthValues.getISOYearMonth(currentYear, newMonth);
        }
        else {
            this.value = yearMonthValues.getCurrentISOYearMonth();
        }
    }
    incrementYear(delta) {
        if (this.value) {
            const { year: currentYear, month: currentMonth } = yearMonthValues.getYearMonthObject(this.value);
            const newYear = Math.max(Number(currentYear) + delta, 0).toString();
            this.value = yearMonthValues.getISOYearMonth(newYear, currentMonth);
        }
        else {
            this.value = yearMonthValues.getCurrentISOYearMonth();
        }
    }
    onSpinnerKeyDown(event, incrementor, nextFocusElement) {
        switch (event.key) {
            case 'ArrowDown':
                event.preventDefault();
                incrementor(-1);
                break;
            case 'ArrowUp':
                event.preventDefault();
                incrementor(1);
                break;
            case 'ArrowLeft':
            case 'ArrowRight':
                event.preventDefault();
                nextFocusElement.focus();
                break;
            case 'Enter':
                event.preventDefault();
                this.expanded = true;
                afterNextRender.afterNextRender(() => {
                    void this.monthCalendarElement.guxFocus(this.value);
                });
                break;
            case ' ':
                event.preventDefault();
                break;
        }
    }
    onSpinnerKeyUp(event) {
        event.stopPropagation();
        switch (event.key) {
            case ' ':
                event.preventDefault();
                this.expanded = true;
                afterNextRender.afterNextRender(() => {
                    void this.monthCalendarElement.guxFocus(this.value);
                });
                break;
        }
    }
    onSpinnerClick() {
        this.expanded = true;
    }
    getSpinnerLabel(period) {
        if (this.value) {
            const { year, month } = yearMonthValues.getYearMonthObject(this.value);
            return new Date(Number(year), Number(month) - 1).toLocaleDateString(this.locale, { [period]: DateTimeFormats[period] });
        }
        return this.i18n(period);
    }
    getSpinnerValueNow(period) {
        return this.value ? yearMonthValues.getYearMonthObject(this.value)[period] : '0';
    }
    getSpinnerValueText() {
        if (this.value) {
            const { year, month } = yearMonthValues.getYearMonthObject(this.value);
            return new Date(Number(year), Number(month) - 1).toLocaleDateString(this.locale, { year: 'numeric', month: 'long' });
        }
        return this.i18n('unset');
    }
    renderMonthSpinnerButton() {
        return (index.h("div", { role: "spinbutton", class: "gux-spinner", tabIndex: this.disabled ? -1 : 0, onKeyDown: (e) => this.onSpinnerKeyDown(e, d => this.incrementMonth(d), this.yearSpinnerElement), onKeyUp: (e) => this.onSpinnerKeyUp(e), onClick: () => this.onSpinnerClick(), ref: (el) => (this.monthSpinnerElement = el), "aria-valuenow": this.getSpinnerValueNow('month'), "aria-valuetext": this.getSpinnerValueText(), "aria-valuemin": "1", "aria-valuemax": "12", "aria-label": this.i18n('month') }, this.getSpinnerLabel('month')));
    }
    renderYearSpinnerButton() {
        return (index.h("div", { role: "spinbutton", class: "gux-spinner", tabIndex: this.disabled ? -1 : 0, onKeyDown: (e) => this.onSpinnerKeyDown(e, d => this.incrementYear(d), this.monthSpinnerElement), onKeyUp: (e) => this.onSpinnerKeyUp(e), onClick: () => this.onSpinnerClick(), ref: (el) => (this.yearSpinnerElement = el), "aria-valuenow": this.getSpinnerValueNow('year'), "aria-valuetext": this.getSpinnerValueText(), "aria-valuemin": "0", "aria-label": this.i18n('year') }, this.getSpinnerLabel('year')));
    }
    renderSpinnerButtons() {
        if (YearFirstLocales.includes(this.locale)) {
            return (index.h("span", { class: "gux-display" }, this.renderYearSpinnerButton(), this.renderMonthSpinnerButton()));
        }
        return (index.h("span", { class: "gux-display" }, this.renderMonthSpinnerButton(), this.renderYearSpinnerButton()));
    }
    renderCalendarToggleButton() {
        return (index.h("button", { class: {
                'gux-popup-toggle': true,
                'gux-expanded': this.expanded
            }, ref: (el) => (this.calendarToggleButtonElement = el), type: "button", onClick: () => this.toggleCalendar(), disabled: this.disabled }, index.h("gux-icon", { "icon-name": "fa/calendar-regular", decorative: true, size: "small" }), index.h("gux-screen-reader-beta", null, this.i18n('toggleCalendar'))));
    }
    renderTarget() {
        return (index.h("div", { class: "gux-target", slot: "target" }, this.renderSpinnerButtons(), this.renderCalendarToggleButton()));
    }
    renderPopup() {
        return (index.h("gux-month-calendar", { slot: "popup", ref: (el) => (this.monthCalendarElement = el), onInput: () => this.onMonthCalendarInput(), value: this.value, min: this.min, max: this.max }));
    }
    render() {
        return (index.h("gux-popup", { key: '26805430e6effefb8295ac3f69d23180369f74d1', expanded: this.expanded, disabled: this.disabled, "exceed-target-width": true }, this.renderTarget(), this.renderPopup()));
    }
    get root() { return index.getElement(this); }
    static get watchers() { return {
        "value": ["onValueUpdate"]
    }; }
};
__decorate([
    onClickOutside.OnClickOutside({ triggerEvents: 'mousedown' })
], GuxMonthPicker.prototype, "onClickOutside", null);
GuxMonthPicker.style = guxMonthPickerCss;

exports.gux_month_picker_beta = GuxMonthPicker;
