'use strict';

var index = require('./index-BLhHoh_r.js');
var onInputDisabledStateChange = require('./on-input-disabled-state-change-CSLxaSas.js');
var onMutation = require('./on-mutation-BoagtLIt.js');
var onAttributeChange = require('./on-attribute-change-Cv7L_5Zv.js');
var preventBrowserValidationStyling = require('./prevent-browser-validation-styling-Dcbciyyc.js');
var hasSlot = require('./has-slot-BFTyqu_U.js');
var guxFormFieldError = require('./gux-form-field-error-BRPetX-t.js');
var guxFormFieldContainer = require('./gux-form-field-container-Fmn2fSq-.js');
var guxFormField_service = require('./gux-form-field.service-MaWFZxSN.js');
var usage = require('./usage-v50bi18B.js');
require('./random-html-id-DH9-ntZu.js');
require('./log-error-nWO_o1C3.js');
require('./simulate-native-event-_MPnVmRN.js');

const guxFormFieldSelectCss = ".gux-form-field-container{display:flex;flex-direction:column}.gux-form-field-container.gux-beside{flex-direction:row}.gux-form-field-error{display:none;flex-direction:row;flex-wrap:nowrap;gap:var(--gse-ui-formControl-helper-gap);place-content:stretch flex-start;padding:var(--gse-ui-formControl-helper-errorPadding);font-family:var(--gse-ui-formControl-helper-helperText-fontFamily);font-size:var(--gse-ui-formControl-helper-helperText-fontSize);line-height:var(--gse-ui-formControl-helper-helperText-lineHeight);color:var(--gse-ui-formControl-helper-errorColor)}.gux-form-field-error.gux-show{display:flex}.gux-form-field-error gux-icon{flex:0 1 auto;order:0;color:var(--gse-ui-formControl-helper-errorColor)}.gux-form-field-error .gux-message{flex:0 1 auto;align-self:auto;order:0}.gux-form-field-label{display:inline-flex;flex:1 0 auto}.gux-form-field-label ::slotted(label){min-inline-size:0}.gux-form-field-label ::slotted(gux-label-info-beta){padding-inline-start:var(--gse-ui-formControl-formField-gap)}.gux-form-field-label.gux-beside{position:relative;inset-block-start:var(--gse-ui-formControl-input-top);inline-size:fit-content;min-inline-size:var(--gse-ui-formControl-input-textfield-minWidth);max-inline-size:fit-content;margin-inline-end:var(--gse-ui-formControl-group-gapItems)}.gux-form-field-label.gux-above{padding-block-end:var(--gse-ui-formControl-formField-gap)}.gux-form-field-label.gux-screenreader{position:absolute;top:auto;left:-10000px;width:1px;height:1px;overflow:hidden}.gux-form-field-help{display:none;flex-direction:row;flex-wrap:nowrap;place-content:stretch flex-start;align-items:flex-start;justify-content:flex-start;padding-block-start:var(--gse-ui-formControl-formField-gap);font-family:var(--gse-ui-formControl-helper-helperText-fontFamily);font-size:var(--gse-ui-formControl-helper-helperText-fontSize);line-height:var(--gse-ui-formControl-helper-helperText-lineHeight);color:var(--gse-ui-formControl-helper-defaultColor)}.gux-form-field-help.gux-show{display:flex}.gux-form-field-help .gux-message{flex:0 1 auto;align-self:none;order:0}:host{display:block}::slotted(label){font-family:var(--gse-ui-formControl-label-textBold-fontFamily);font-size:var(--gse-ui-formControl-label-textBold-fontSize);font-weight:var(--gse-ui-formControl-label-textBold-fontWeight);line-height:var(--gse-ui-formControl-label-textBold-lineHeight);color:var(--gse-ui-formControl-label-labelColor)}::slotted(select){flex:1 1 auto;align-self:auto;order:0;inline-size:100%;block-size:var(--gse-ui-formControl-input-textfield-height);padding-inline-start:var(--gse-ui-formControl-input-gap);color:var(--gse-ui-formControl-input-populatedColor);-moz-appearance:none;-webkit-appearance:none;appearance:none;outline:none;background-color:var(--gse-ui-formControl-input-backgroundColor);border:none;border-radius:var(--gse-ui-formControl-input-borderRadius)}::slotted(select)::placeholder{color:var(--gse-ui-formControl-input-placeholderColor);opacity:1}.gux-input-and-error-container{flex-grow:1}.gux-input-and-error-container .gux-input .gux-input-container{position:relative;box-sizing:border-box;display:flex;flex-direction:row;flex-wrap:nowrap;gap:var(--gse-ui-formControl-input-gap);place-content:stretch center;align-items:center;inline-size:100%;font-family:var(--gse-ui-formControl-input-contentText-fontFamily);font-size:var(--gse-ui-formControl-input-contentText-fontSize);font-weight:var(--gse-ui-formControl-input-contentText-fontWeight);line-height:var(--gse-ui-formControl-input-contentText-lineHeight);color:var(--gse-ui-formControl-input-populatedColor);background-color:var(--gse-ui-formControl-input-backgroundColor);background-image:none;border:var(--gse-ui-formControl-input-default-border-width) var(--gse-ui-formControl-input-default-border-style) var(--gse-ui-formControl-input-default-border-color);border-radius:var(--gse-ui-formControl-input-borderRadius)}.gux-input-and-error-container .gux-input .gux-input-container.gux-disabled{pointer-events:none;opacity:var(--gse-ui-formControl-input-disabled-opacity)}.gux-input-and-error-container .gux-input .gux-input-container:hover gux-icon{color:var(--gse-ui-formControl-input-inputIcon-iconEndColor)}.gux-input-and-error-container .gux-input .gux-input-container gux-icon{position:absolute;inset-block-start:0;inset-inline-end:0;margin:var(--gse-ui-formControl-input-padding);pointer-events:none}.gux-input-and-error-container .gux-input .gux-input-container:focus-within{outline:var(--gse-ui-formControl-input-focus-border-width) var(--gse-ui-formControl-input-focus-border-style) var(--gse-ui-formControl-input-focus-border-color);outline-offset:var(--gse-semantic-focusOutline-offset);border:var(--gse-ui-formControl-input-active-border-width) var(--gse-ui-formControl-input-active-border-style) var(--gse-ui-formControl-input-active-border-color);border-radius:var(--gse-ui-formControl-focusRing-borderRadius)}.gux-input-and-error-container .gux-input.gux-input-error .gux-input-container{border-color:var(--gse-ui-formControl-input-error-border-color)}";

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
const GuxFormFieldSelect = class {
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
    }
    onMutation() {
        this.labelInfo = this.root.querySelector('[slot=label-info]');
        this.hasError = hasSlot.hasSlot(this.root, 'error');
        this.hasHelp = hasSlot.hasSlot(this.root, 'help');
    }
    handleKeyup(event) {
        var _a, _b;
        switch (event.key) {
            case 'Tab': {
                if (this.input.matches(':focus-visible')) {
                    void ((_a = this.labelInfo) === null || _a === void 0 ? void 0 : _a.showTooltip());
                    this.hideLabelInfoTimeout = setTimeout(() => {
                        var _a;
                        void ((_a = this.labelInfo) === null || _a === void 0 ? void 0 : _a.hideTooltip());
                    }, 6000);
                }
                break;
            }
            default: {
                if (this.input.matches(':focus-visible')) {
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
    componentWillLoad() {
        this.setInput();
        this.setLabel();
        this.labelInfo = this.root.querySelector('[slot=label-info]');
        this.hasError = hasSlot.hasSlot(this.root, 'error');
        this.hasHelp = hasSlot.hasSlot(this.root, 'help');
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
        return (index.h(guxFormFieldContainer.GuxFormFieldContainer, { key: 'b6ce224a4b33a6a2d3a950494d34ae3844e9c0a7', labelPosition: this.computedLabelPosition }, index.h(guxFormFieldContainer.GuxFormFieldLabel, { key: '01336b42268cbe502fb800dcaf5e7b18c1c200b6', required: this.required, position: this.computedLabelPosition }, index.h("slot", { key: 'b08d39ff081c8bf5b832874738ebc3cdbb944ff4', name: "label", onSlotchange: () => this.setLabel() }), index.h("gux-form-field-label-indicator", { key: '96a20d06e3ead1697adb52cdd0ccfb71bdb7be66', variant: this.indicatorMark, required: this.required }), index.h("slot", { key: '68a80e71e4ca4e92c0fe6d1e00fedda401c1e3b3', name: "label-info" })), index.h("div", { key: '4d45d92191e7054e2540bd27ced7c19d2adc4be8', class: "gux-input-and-error-container" }, index.h("div", { key: '95df686d8f03b2dd4e22a4e9703ad8c96558ea85', class: {
                'gux-input': true,
                'gux-input-error': this.hasError
            } }, index.h("div", { key: '25ecbf15b554772fbb9b49d85c1bd11dab27471b', class: {
                'gux-input-container': true,
                'gux-disabled': this.disabled
            } }, index.h("slot", { key: '62a0c05ec3535f0e7b34194ea219c482e4f2c0e7', name: "input" }), index.h("gux-icon", { key: '9de257807857681d39181e538ceaff0446fc818b', "icon-name": "custom/chevron-down-small-regular", decorative: true, size: "small" }))), index.h(guxFormFieldError.GuxFormFieldError, { key: '7dfe214d32e27283fcfc5b66104e4ae8b98fce74', show: this.hasError }, index.h("slot", { key: '502d6075ab0b2d19bffec4563f737ea9ed77feed', name: "error" })), index.h(guxFormFieldError.GuxFormFieldHelp, { key: '14a7b1a64d1b6d25f531cd9b3d08316742510c2d', show: !this.hasError && this.hasHelp }, index.h("slot", { key: '543d618d86f2a83229ef0fe0489c9f5ead55baea', name: "help" })))));
    }
    get variant() {
        const labelPositionVariant = this.labelPosition
            ? this.labelPosition.toLowerCase()
            : 'none';
        const type = this.input.getAttribute('type');
        return `${type}-${labelPositionVariant}`;
    }
    setInput() {
        this.input = this.root.querySelector('select[slot="input"]');
        preventBrowserValidationStyling.preventBrowserValidationStyling(this.input);
        this.disabled = onInputDisabledStateChange.calculateInputDisabledState(this.input);
        this.required = this.input.required;
        this.disabledObserver = onInputDisabledStateChange.onInputDisabledStateChange(this.input, (disabled) => {
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
};
__decorate([
    onMutation.OnMutation({ childList: true, subtree: true })
], GuxFormFieldSelect.prototype, "onMutation", null);
GuxFormFieldSelect.style = guxFormFieldSelectCss;

exports.gux_form_field_select = GuxFormFieldSelect;
