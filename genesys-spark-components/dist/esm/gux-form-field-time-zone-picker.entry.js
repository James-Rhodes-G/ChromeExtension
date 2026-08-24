import { r as registerInstance, h, a as getElement } from './index-xFL2agjT.js';
import { b as buildI18nForComponent } from './index-Dac2qHbK.js';
import { O as OnMutation } from './on-mutation-CQXoeN9i.js';
import { a as onDisabledChange, o as onRequiredChange } from './on-attribute-change-De1NnCmO.js';
import { h as hasSlot } from './has-slot-qzV3vtOw.js';
import { g as getSlotTextContent } from './get-slot-text-content-MAoEg4ig.js';
import { G as GuxFormFieldError, a as GuxFormFieldHelp } from './gux-form-field-error-CvxwCzsi.js';
import { G as GuxFormFieldVisualLabel, a as GuxFormFieldScreenreaderLabel, b as GuxFormFieldFieldsetContainer } from './gux-form-field-fieldset-container-K7QuRUfg.js';
import { v as validateFormIds, a as getComputedLabelPosition } from './gux-form-field.service-C3WKbzwR.js';
import { t as trackComponent } from './usage-D2Q7fj4V.js';
import './get-closest-element-Cd4R0amv.js';
import './random-html-id-D9jKBqIb.js';
import './log-error-DxtJDeL9.js';
import './simulate-native-event-BMRf5pjV.js';

const required = "Required";
var componentResources = {
	required: required
};

const guxFormFieldTimeZonePickerCss = ".gux-form-field-fieldset-container{display:flex;min-inline-size:0;padding:0;margin:0;border:none}.gux-form-field-fieldset-container.gux-beside{flex-direction:row}.gux-form-field-fieldset-container.gux-above{flex-direction:column}.gux-form-field-error{display:none;flex-direction:row;flex-wrap:nowrap;gap:var(--gse-ui-formControl-helper-gap);place-content:stretch flex-start;padding:var(--gse-ui-formControl-helper-errorPadding);font-family:var(--gse-ui-formControl-helper-helperText-fontFamily);font-size:var(--gse-ui-formControl-helper-helperText-fontSize);line-height:var(--gse-ui-formControl-helper-helperText-lineHeight);color:var(--gse-ui-formControl-helper-errorColor)}.gux-form-field-error.gux-show{display:flex}.gux-form-field-error gux-icon{flex:0 1 auto;order:0;color:var(--gse-ui-formControl-helper-errorColor)}.gux-form-field-error .gux-message{flex:0 1 auto;align-self:auto;order:0}.gux-form-field-help{display:none;flex-direction:row;flex-wrap:nowrap;place-content:stretch flex-start;align-items:flex-start;justify-content:flex-start;padding-block-start:var(--gse-ui-formControl-formField-gap);font-family:var(--gse-ui-formControl-helper-helperText-fontFamily);font-size:var(--gse-ui-formControl-helper-helperText-fontSize);line-height:var(--gse-ui-formControl-helper-helperText-lineHeight);color:var(--gse-ui-formControl-helper-defaultColor)}.gux-form-field-help.gux-show{display:flex}.gux-form-field-help .gux-message{flex:0 1 auto;align-self:none;order:0}.gux-form-field-visual-label{display:inline-flex;flex:1 0 auto}.gux-form-field-visual-label ::slotted(label){min-inline-size:0}.gux-form-field-visual-label ::slotted(gux-label-info-beta){padding-inline-start:var(--gse-ui-formControl-formField-gap)}.gux-form-field-visual-label.gux-beside{position:relative;inset-block-start:var(--gse-ui-formControl-input-top);inline-size:fit-content;min-inline-size:var(--gse-ui-formControl-input-textfield-minWidth);max-inline-size:fit-content;margin-inline-end:var(--gse-ui-formControl-group-gapItems)}.gux-form-field-visual-label.gux-above{padding-block-end:var(--gse-ui-formControl-formField-gap)}.gux-form-field-visual-label.gux-screenreader{display:none}.gux-form-field-screenreader-label{position:absolute;top:auto;left:-10000px;width:1px;height:1px;overflow:hidden}::slotted(label){font-family:var(--gse-ui-formControl-label-textBold-fontFamily);font-size:var(--gse-ui-formControl-label-textBold-fontSize);font-weight:var(--gse-ui-formControl-label-textBold-fontWeight);line-height:var(--gse-ui-formControl-label-textBold-lineHeight);color:var(--gse-ui-formControl-label-labelColor)}.gux-input-and-error-container{flex-grow:1}";

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
const GuxFormFieldTimeZonePicker = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Field indicator mark which can show *, (optional) or blank
         * Defaults to required. When set to required, the component will display * for required fields and blank for optional
         * When set to optional, the component will display (optional) for optional and blank for required.
         */
        this.indicatorMark = 'required';
        this.computedLabelPosition = 'above';
        this.hasError = false;
        this.hasHelp = false;
        this.hasLabelInfo = false;
    }
    watchValue(hasError) {
        const timeZonePickerSlot = this.root.querySelector('gux-time-zone-picker-beta');
        if (timeZonePickerSlot) {
            timeZonePickerSlot.hasError = hasError;
        }
    }
    onMutation() {
        this.labelInfo = this.root.querySelector('[slot=label-info]');
        this.hasError = hasSlot(this.root, 'error');
        this.hasHelp = hasSlot(this.root, 'help');
    }
    handleKeyup(event) {
        var _a, _b;
        switch (event.key) {
            case 'Tab': {
                if (this.input.matches(':focus-within')) {
                    void ((_a = this.labelInfo) === null || _a === void 0 ? void 0 : _a.showTooltip());
                    this.hideLabelInfoTimeout = setTimeout(() => {
                        var _a;
                        void ((_a = this.labelInfo) === null || _a === void 0 ? void 0 : _a.hideTooltip());
                    }, 6000);
                }
                break;
            }
            default: {
                if (this.input.matches(':focus-within')) {
                    void ((_b = this.labelInfo) === null || _b === void 0 ? void 0 : _b.hideTooltip());
                    clearTimeout(this.hideLabelInfoTimeout);
                }
                break;
            }
        }
    }
    onFocusout() {
        var _a;
        void ((_a = this.labelInfo) === null || _a === void 0 ? void 0 : _a.hideTooltip());
        clearTimeout(this.hideLabelInfoTimeout);
    }
    async componentWillLoad() {
        this.getI18nValue = await buildI18nForComponent(this.root, componentResources);
        this.setInput();
        this.setLabel();
        this.labelInfo = this.root.querySelector('[slot=label-info]');
        this.hasError = hasSlot(this.root, 'error');
        this.hasHelp = hasSlot(this.root, 'help');
        this.hasLabelInfo = hasSlot(this.root, 'label-info');
        trackComponent(this.root, { variant: this.variant });
    }
    disconnectedCallback() {
        if (this.disabledObserver) {
            this.disabledObserver.disconnect();
        }
        if (this.requiredObserver) {
            this.requiredObserver.disconnect();
        }
    }
    render() {
        var _a;
        return (h(GuxFormFieldFieldsetContainer, { key: '8021fd2c7190564cf28210b0e7141e051d4468e7', labelPosition: this.computedLabelPosition }, h(GuxFormFieldScreenreaderLabel, { key: '8036179008298d39417ad34b64f9d216a40740bd' }, (_a = this.label) === null || _a === void 0 ? void 0 :
            _a.textContent, this.renderText(this.getI18nValue('required'), this.required), this.renderText(getSlotTextContent(this.root, 'error'), this.hasError), this.renderText(getSlotTextContent(this.root, 'label-info'), this.hasLabelInfo)), h(GuxFormFieldVisualLabel, { key: 'cc8145669ae9258493c3cc4d6995ea65190bd325', position: this.computedLabelPosition, required: this.required }, h("slot", { key: '4869a073924cc524b3bdcd1cd8d1c1e2725c6b17', name: "label", onSlotchange: () => this.setLabel() }), h("gux-form-field-label-indicator", { key: '50a1e3f905e392d8813b987457e9cf507e2fed1a', variant: this.indicatorMark, required: this.required }), h("slot", { key: '25cd4be3bf7906da2a99d6cdc7023cebbc3afb1b', name: "label-info" })), h("slot", { key: '192555f7bea53987d464d8d1bc0c70d815a93c91', name: "label-info" }), h("div", { key: '45c0c71fa8a3379446deb5dde6019a8a5a94e2fe', class: "gux-input-and-error-container" }, h("div", { key: '4999945a55ecc936d686e3839e7c68d3994ca3ae', class: {
                'gux-input': true,
                'gux-input-error': this.hasError,
                'gux-time-zone-picker-container': true,
                'gux-disabled': this.disabled
            } }, h("slot", { key: '317cbdecb53e5bd3031e1fd370ed881659cbac21' })), h(GuxFormFieldError, { key: 'c792f6017ee9c3a3c003be19023538ce2cf7b482', show: this.hasError }, h("slot", { key: 'edb2dc0ac5a7b21b79a11fc064abb9cb23f8d8ae', name: "error" })), h(GuxFormFieldHelp, { key: '998daf7b1a75da360eff441d7137cf04c04a5248', show: !this.hasError && this.hasHelp }, h("slot", { key: '6d28f8c56bb8da39142173618e1b1fb74192d914', name: "help" })))));
    }
    renderText(text, condition = false) {
        if (condition) {
            return ' ' + text;
        }
    }
    get variant() {
        const labelPositionVariant = this.labelPosition
            ? this.labelPosition.toLowerCase()
            : 'none';
        const type = 'timeZonePicker';
        return `${type}-${labelPositionVariant}`;
    }
    setInput() {
        this.input = this.root.querySelector('gux-time-zone-picker-beta');
        this.disabled = this.input.disabled;
        this.required = this.input.required;
        this.disabledObserver = onDisabledChange(this.input, (disabled) => {
            this.disabled = disabled;
        });
        this.requiredObserver = onRequiredChange(this.input, (required) => {
            this.required = required;
        });
        validateFormIds(this.root, this.input);
    }
    setLabel() {
        this.label = this.root.querySelector('label[slot="label"]');
        this.computedLabelPosition = getComputedLabelPosition(this.label, this.labelPosition);
    }
    get root() { return getElement(this); }
    static get watchers() { return {
        "hasError": ["watchValue"]
    }; }
};
__decorate([
    OnMutation({ childList: true, subtree: true })
], GuxFormFieldTimeZonePicker.prototype, "onMutation", null);
GuxFormFieldTimeZonePicker.style = guxFormFieldTimeZonePickerCss;

export { GuxFormFieldTimeZonePicker as gux_form_field_time_zone_picker };
