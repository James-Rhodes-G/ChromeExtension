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
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { h } from "@stencil/core";
import { trackComponent } from "../../../utils/tracking/usage";
import { OnClickOutside } from "../../../utils/decorator/on-click-outside";
import { buildI18nForComponent, getDesiredLocale } from "../../../i18n";
import * as sparkIntl from "../../../genesys-spark-utils/intl";
import { useRegionalDates } from "../../../i18n/use-regional-dates";
import simulateNativeEvent from "../../../utils/dom/simulate-native-event";
import { afterNextRender } from "../../../utils/dom/after-next-render";
import { getCurrentISOYearMonth, getISOYearMonth, getYearMonthObject } from "../../../utils/date/year-month-values";
import translationResources from "./i18n/en.json";
const DateTimeFormats = { year: 'numeric', month: 'long' };
const YearFirstLocales = ['ar', 'he', 'ja', 'ko', 'zh-cn', 'zh-tw'];
export class GuxMonthPicker {
    constructor() {
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
        simulateNativeEvent(this.root, 'input');
        simulateNativeEvent(this.root, 'change');
    }
    onClickOutside() {
        this.expanded = false;
    }
    async componentWillLoad() {
        trackComponent(this.root);
        this.i18n = await buildI18nForComponent(this.root, translationResources);
        if (useRegionalDates()) {
            this.locale = sparkIntl.determineDisplayLocale(this.root);
        }
        else {
            this.locale = getDesiredLocale(this.root);
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
            afterNextRender(() => {
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
            const { year: currentYear, month: currentMonth } = getYearMonthObject(this.value);
            const newMonth = (((parseInt(currentMonth) + 11 + delta) % 12) + 1)
                .toString()
                .padStart(2, '0');
            this.value = getISOYearMonth(currentYear, newMonth);
        }
        else {
            this.value = getCurrentISOYearMonth();
        }
    }
    incrementYear(delta) {
        if (this.value) {
            const { year: currentYear, month: currentMonth } = getYearMonthObject(this.value);
            const newYear = Math.max(Number(currentYear) + delta, 0).toString();
            this.value = getISOYearMonth(newYear, currentMonth);
        }
        else {
            this.value = getCurrentISOYearMonth();
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
                afterNextRender(() => {
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
                afterNextRender(() => {
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
            const { year, month } = getYearMonthObject(this.value);
            return new Date(Number(year), Number(month) - 1).toLocaleDateString(this.locale, { [period]: DateTimeFormats[period] });
        }
        return this.i18n(period);
    }
    getSpinnerValueNow(period) {
        return this.value ? getYearMonthObject(this.value)[period] : '0';
    }
    getSpinnerValueText() {
        if (this.value) {
            const { year, month } = getYearMonthObject(this.value);
            return new Date(Number(year), Number(month) - 1).toLocaleDateString(this.locale, { year: 'numeric', month: 'long' });
        }
        return this.i18n('unset');
    }
    renderMonthSpinnerButton() {
        return (h("div", { role: "spinbutton", class: "gux-spinner", tabIndex: this.disabled ? -1 : 0, onKeyDown: (e) => this.onSpinnerKeyDown(e, d => this.incrementMonth(d), this.yearSpinnerElement), onKeyUp: (e) => this.onSpinnerKeyUp(e), onClick: () => this.onSpinnerClick(), ref: (el) => (this.monthSpinnerElement = el), "aria-valuenow": this.getSpinnerValueNow('month'), "aria-valuetext": this.getSpinnerValueText(), "aria-valuemin": "1", "aria-valuemax": "12", "aria-label": this.i18n('month') }, this.getSpinnerLabel('month')));
    }
    renderYearSpinnerButton() {
        return (h("div", { role: "spinbutton", class: "gux-spinner", tabIndex: this.disabled ? -1 : 0, onKeyDown: (e) => this.onSpinnerKeyDown(e, d => this.incrementYear(d), this.monthSpinnerElement), onKeyUp: (e) => this.onSpinnerKeyUp(e), onClick: () => this.onSpinnerClick(), ref: (el) => (this.yearSpinnerElement = el), "aria-valuenow": this.getSpinnerValueNow('year'), "aria-valuetext": this.getSpinnerValueText(), "aria-valuemin": "0", "aria-label": this.i18n('year') }, this.getSpinnerLabel('year')));
    }
    renderSpinnerButtons() {
        if (YearFirstLocales.includes(this.locale)) {
            return (h("span", { class: "gux-display" }, this.renderYearSpinnerButton(), this.renderMonthSpinnerButton()));
        }
        return (h("span", { class: "gux-display" }, this.renderMonthSpinnerButton(), this.renderYearSpinnerButton()));
    }
    renderCalendarToggleButton() {
        return (h("button", { class: {
                'gux-popup-toggle': true,
                'gux-expanded': this.expanded
            }, ref: (el) => (this.calendarToggleButtonElement = el), type: "button", onClick: () => this.toggleCalendar(), disabled: this.disabled }, h("gux-icon", { "icon-name": "fa/calendar-regular", decorative: true, size: "small" }), h("gux-screen-reader-beta", null, this.i18n('toggleCalendar'))));
    }
    renderTarget() {
        return (h("div", { class: "gux-target", slot: "target" }, this.renderSpinnerButtons(), this.renderCalendarToggleButton()));
    }
    renderPopup() {
        return (h("gux-month-calendar", { slot: "popup", ref: (el) => (this.monthCalendarElement = el), onInput: () => this.onMonthCalendarInput(), value: this.value, min: this.min, max: this.max }));
    }
    render() {
        return (h("gux-popup", { key: '26805430e6effefb8295ac3f69d23180369f74d1', expanded: this.expanded, disabled: this.disabled, "exceed-target-width": true }, this.renderTarget(), this.renderPopup()));
    }
    static get is() { return "gux-month-picker-beta"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-month-picker.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-month-picker.css"]
        };
    }
    static get properties() {
        return {
            "value": {
                "type": "string",
                "attribute": "value",
                "mutable": true,
                "complexType": {
                    "original": "GuxISOYearMonth",
                    "resolved": "`${string}-${string}`",
                    "references": {
                        "GuxISOYearMonth": {
                            "location": "import",
                            "path": "../../../utils/date/year-month-values",
                            "id": "src/utils/date/year-month-values.ts::GuxISOYearMonth"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The current selected year and month in ISO8601 format (yyyy-mm)"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "min": {
                "type": "string",
                "attribute": "min",
                "mutable": false,
                "complexType": {
                    "original": "GuxISOYearMonth",
                    "resolved": "`${string}-${string}`",
                    "references": {
                        "GuxISOYearMonth": {
                            "location": "import",
                            "path": "../../../utils/date/year-month-values",
                            "id": "src/utils/date/year-month-values.ts::GuxISOYearMonth"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The min year and month selectable in ISO8601 format (yyyy-mm)"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "max": {
                "type": "string",
                "attribute": "max",
                "mutable": false,
                "complexType": {
                    "original": "GuxISOYearMonth",
                    "resolved": "`${string}-${string}`",
                    "references": {
                        "GuxISOYearMonth": {
                            "location": "import",
                            "path": "../../../utils/date/year-month-values",
                            "id": "src/utils/date/year-month-values.ts::GuxISOYearMonth"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The max year and month selectable in ISO8601 format (yyyy-mm)"
                },
                "getter": false,
                "setter": false,
                "reflect": false
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
            }
        };
    }
    static get states() {
        return {
            "expanded": {},
            "locale": {}
        };
    }
    static get elementRef() { return "root"; }
    static get watchers() {
        return [{
                "propName": "value",
                "methodName": "onValueUpdate"
            }];
    }
    static get listeners() {
        return [{
                "name": "keydown",
                "method": "onKeyDown",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "focusout",
                "method": "onFocusout",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
__decorate([
    OnClickOutside({ triggerEvents: 'mousedown' })
], GuxMonthPicker.prototype, "onClickOutside", null);
