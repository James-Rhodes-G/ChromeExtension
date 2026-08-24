'use strict';

var index = require('./index-BLhHoh_r.js');
var index$1 = require('./index-QInGO-Pu.js');
var onMutation = require('./on-mutation-BoagtLIt.js');
var onAttributeChange = require('./on-attribute-change-Cv7L_5Zv.js');
var hasSlot = require('./has-slot-BFTyqu_U.js');
var getSlotTextContent = require('./get-slot-text-content-DZwcXMIm.js');
var guxFormFieldError = require('./gux-form-field-error-BRPetX-t.js');
var guxFormFieldFieldsetContainer = require('./gux-form-field-fieldset-container-CP24qwTm.js');
var guxFormField_service = require('./gux-form-field.service-MaWFZxSN.js');
var usage = require('./usage-v50bi18B.js');
require('./get-closest-element-CfyZl7i7.js');
require('./random-html-id-DH9-ntZu.js');
require('./log-error-nWO_o1C3.js');
require('./simulate-native-event-_MPnVmRN.js');

const required = "Required";
var componentResources = {
	required: required
};

const guxFormFieldTimePickerCss = ".gux-form-field-fieldset-container{display:flex;min-inline-size:0;padding:0;margin:0;border:none}.gux-form-field-fieldset-container.gux-beside{flex-direction:row}.gux-form-field-fieldset-container.gux-above{flex-direction:column}.gux-form-field-error{display:none;flex-direction:row;flex-wrap:nowrap;gap:var(--gse-ui-formControl-helper-gap);place-content:stretch flex-start;padding:var(--gse-ui-formControl-helper-errorPadding);font-family:var(--gse-ui-formControl-helper-helperText-fontFamily);font-size:var(--gse-ui-formControl-helper-helperText-fontSize);line-height:var(--gse-ui-formControl-helper-helperText-lineHeight);color:var(--gse-ui-formControl-helper-errorColor)}.gux-form-field-error.gux-show{display:flex}.gux-form-field-error gux-icon{flex:0 1 auto;order:0;color:var(--gse-ui-formControl-helper-errorColor)}.gux-form-field-error .gux-message{flex:0 1 auto;align-self:auto;order:0}.gux-form-field-help{display:none;flex-direction:row;flex-wrap:nowrap;place-content:stretch flex-start;align-items:flex-start;justify-content:flex-start;padding-block-start:var(--gse-ui-formControl-formField-gap);font-family:var(--gse-ui-formControl-helper-helperText-fontFamily);font-size:var(--gse-ui-formControl-helper-helperText-fontSize);line-height:var(--gse-ui-formControl-helper-helperText-lineHeight);color:var(--gse-ui-formControl-helper-defaultColor)}.gux-form-field-help.gux-show{display:flex}.gux-form-field-help .gux-message{flex:0 1 auto;align-self:none;order:0}.gux-form-field-visual-label{display:inline-flex;flex:1 0 auto}.gux-form-field-visual-label ::slotted(label){min-inline-size:0}.gux-form-field-visual-label ::slotted(gux-label-info-beta){padding-inline-start:var(--gse-ui-formControl-formField-gap)}.gux-form-field-visual-label.gux-beside{position:relative;inset-block-start:var(--gse-ui-formControl-input-top);inline-size:fit-content;min-inline-size:var(--gse-ui-formControl-input-textfield-minWidth);max-inline-size:fit-content;margin-inline-end:var(--gse-ui-formControl-group-gapItems)}.gux-form-field-visual-label.gux-above{padding-block-end:var(--gse-ui-formControl-formField-gap)}.gux-form-field-visual-label.gux-screenreader{display:none}.gux-form-field-screenreader-label{position:absolute;top:auto;left:-10000px;width:1px;height:1px;overflow:hidden}::slotted(label){font-family:var(--gse-ui-formControl-label-textBold-fontFamily);font-size:var(--gse-ui-formControl-label-textBold-fontSize);font-weight:var(--gse-ui-formControl-label-textBold-fontWeight);line-height:var(--gse-ui-formControl-label-textBold-lineHeight);color:var(--gse-ui-formControl-label-labelColor)}.gux-input-and-error-container{flex-grow:1}";

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
const GuxFormFieldTimePicker = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        const timePickerSlot = this.root.querySelector('gux-time-picker');
        if (timePickerSlot) {
            timePickerSlot.hasError = hasError;
        }
    }
    onMutation() {
        this.labelInfo = this.root.querySelector('[slot=label-info]');
        this.hasError = hasSlot.hasSlot(this.root, 'error');
        this.hasHelp = hasSlot.hasSlot(this.root, 'help');
    }
    handleKeyup(event) {
        var _a;
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
        this.getI18nValue = await index$1.buildI18nForComponent(this.root, componentResources);
        this.setInput();
        this.setLabel();
        this.labelInfo = this.root.querySelector('[slot=label-info]');
        this.hasError = hasSlot.hasSlot(this.root, 'error');
        this.hasHelp = hasSlot.hasSlot(this.root, 'help');
        this.hasLabelInfo = hasSlot.hasSlot(this.root, 'label-info');
        usage.trackComponent(this.root, { variant: this.variant });
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
        return (index.h(guxFormFieldFieldsetContainer.GuxFormFieldFieldsetContainer, { key: 'e5ab32131a3844ad93870a33d351da143a222c6b', labelPosition: this.computedLabelPosition }, index.h(guxFormFieldFieldsetContainer.GuxFormFieldScreenreaderLabel, { key: '4d7cb96a26b7b31a8383d22e6e4df8a9723099cf' }, (_a = this.label) === null || _a === void 0 ? void 0 :
            _a.textContent, this.renderText(this.getI18nValue('required'), this.required), this.renderText(getSlotTextContent.getSlotTextContent(this.root, 'error'), this.hasError), this.renderText(getSlotTextContent.getSlotTextContent(this.root, 'label-info'), this.hasLabelInfo)), index.h(guxFormFieldFieldsetContainer.GuxFormFieldVisualLabel, { key: 'bc421902a00a0ab3d5b5592c41e2195455b191a6', position: this.computedLabelPosition, required: this.required }, index.h("slot", { key: '647bdf0750f5b4a016ee3982a915f93ccee5ec4b', name: "label", onSlotchange: () => this.setLabel() }), index.h("gux-form-field-label-indicator", { key: '0ee6eaa080a98eddc3da07793eb7fbdbf9957a1f', variant: this.indicatorMark, required: this.required }), index.h("slot", { key: '366b6e3430380f2afb2a1b50fdbd15acaf641da2', name: "label-info" })), index.h("div", { key: 'b7c79d73f8d74c0c47a5cf3b294116637a1946d7', class: "gux-input-and-error-container" }, index.h("div", { key: 'aebc1a7a98b438fa5ff5495a74959e60e27a6ce5', class: {
                'gux-input': true,
                'gux-input-error': this.hasError
            } }, index.h("div", { key: 'a31bf94ed550ed8725857a549033f5853f169a63', class: {
                'gux-time-picker-container': true,
                'gux-disabled': this.disabled
            } }, index.h("slot", { key: 'bafbf7a6865c062092c0be4381d2c7888c41db10' }))), index.h(guxFormFieldError.GuxFormFieldError, { key: '9f5eaba5a3aa7cf29495e7f53d6d6460dd15636b', show: this.hasError }, index.h("slot", { key: '967f2ffe29b5d418724df96a0a1a11cd55866eae', name: "error" })), index.h(guxFormFieldError.GuxFormFieldHelp, { key: '740561aa70b2112decc2c101752ac2ea57fb4080', show: !this.hasError && this.hasHelp }, index.h("slot", { key: '6a6b6fb5d2878afa127c9bf9665680869086a251', name: "help" })))));
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
        const type = 'timePicker';
        return `${type}-${labelPositionVariant}`;
    }
    setInput() {
        this.input = this.root.querySelector('gux-time-picker');
        this.disabled = this.input.disabled;
        this.required = this.input.required;
        this.disabledObserver = onAttributeChange.onDisabledChange(this.input, (disabled) => {
            this.disabled = disabled;
        });
        this.requiredObserver = onAttributeChange.onRequiredChange(this.input, (required) => {
            this.required = required;
        });
        guxFormField_service.validateFormIds(this.root, this.input);
    }
    setLabel() {
        this.label = this.root.querySelector('label[slot="label"]');
        this.computedLabelPosition = guxFormField_service.getComputedLabelPosition(this.label, this.labelPosition);
    }
    get root() { return index.getElement(this); }
    static get watchers() { return {
        "hasError": ["watchValue"]
    }; }
};
__decorate([
    onMutation.OnMutation({ childList: true, subtree: true })
], GuxFormFieldTimePicker.prototype, "onMutation", null);
GuxFormFieldTimePicker.style = guxFormFieldTimePickerCss;

exports.gux_form_field_time_picker = GuxFormFieldTimePicker;
