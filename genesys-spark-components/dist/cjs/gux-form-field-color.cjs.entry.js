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

const guxFormFieldColorCss = ".gux-form-field-container{display:flex;flex-direction:column}.gux-form-field-container.gux-beside{flex-direction:row}.gux-form-field-error{display:none;flex-direction:row;flex-wrap:nowrap;gap:var(--gse-ui-formControl-helper-gap);place-content:stretch flex-start;padding:var(--gse-ui-formControl-helper-errorPadding);font-family:var(--gse-ui-formControl-helper-helperText-fontFamily);font-size:var(--gse-ui-formControl-helper-helperText-fontSize);line-height:var(--gse-ui-formControl-helper-helperText-lineHeight);color:var(--gse-ui-formControl-helper-errorColor)}.gux-form-field-error.gux-show{display:flex}.gux-form-field-error gux-icon{flex:0 1 auto;order:0;color:var(--gse-ui-formControl-helper-errorColor)}.gux-form-field-error .gux-message{flex:0 1 auto;align-self:auto;order:0}.gux-form-field-label{display:inline-flex;flex:1 0 auto}.gux-form-field-label ::slotted(label){min-inline-size:0}.gux-form-field-label ::slotted(gux-label-info-beta){padding-inline-start:var(--gse-ui-formControl-formField-gap)}.gux-form-field-label.gux-beside{position:relative;inset-block-start:var(--gse-ui-formControl-input-top);inline-size:fit-content;min-inline-size:var(--gse-ui-formControl-input-textfield-minWidth);max-inline-size:fit-content;margin-inline-end:var(--gse-ui-formControl-group-gapItems)}.gux-form-field-label.gux-above{padding-block-end:var(--gse-ui-formControl-formField-gap)}.gux-form-field-label.gux-screenreader{position:absolute;top:auto;left:-10000px;width:1px;height:1px;overflow:hidden}.gux-form-field-help{display:none;flex-direction:row;flex-wrap:nowrap;place-content:stretch flex-start;align-items:flex-start;justify-content:flex-start;padding-block-start:var(--gse-ui-formControl-formField-gap);font-family:var(--gse-ui-formControl-helper-helperText-fontFamily);font-size:var(--gse-ui-formControl-helper-helperText-fontSize);line-height:var(--gse-ui-formControl-helper-helperText-lineHeight);color:var(--gse-ui-formControl-helper-defaultColor)}.gux-form-field-help.gux-show{display:flex}.gux-form-field-help .gux-message{flex:0 1 auto;align-self:none;order:0}:host{display:block}::slotted(label){font-family:var(--gse-ui-formControl-label-textBold-fontFamily);font-size:var(--gse-ui-formControl-label-textBold-fontSize);font-weight:var(--gse-ui-formControl-label-textBold-fontWeight);line-height:var(--gse-ui-formControl-label-textBold-lineHeight);color:var(--gse-ui-formControl-label-labelColor)}::slotted(input){flex:0 1 auto;align-self:auto;order:0;inline-size:var(--gse-ui-colorPicker-input-swatchSizing);min-inline-size:var(--gse-ui-colorPicker-input-swatchSizing);block-size:var(--gse-ui-colorPicker-input-swatchSizing);padding:0;overflow:hidden;text-overflow:ellipsis;font-family:var(--gse-ui-formControl-input-contentText-fontFamily);font-size:var(--gse-ui-formControl-input-contentText-fontSize);font-weight:var(--gse-ui-formControl-input-contentText-fontWeight);line-height:var(--gse-ui-formControl-input-contentText-lineHeight);color:var(--gse-ui-formControl-input-populatedColor);text-align:end;outline:none;background-color:var(--gse-ui-formControl-input-backgroundColor);border:none}::slotted(input)::placeholder{color:var(--gse-ui-formControl-input-placeholderColor);opacity:1}.gux-input-and-error-container{flex-grow:1}.gux-input-and-error-container .gux-input{display:flex;flex-direction:row;flex-wrap:nowrap;align-content:stretch;align-items:center}.gux-input-and-error-container .gux-input .gux-input-container{box-sizing:border-box;display:flex;flex-direction:row;flex-wrap:nowrap;gap:var(--gse-ui-formControl-input-gap);place-content:stretch center;align-items:center;align-self:auto;order:0;inline-size:var(--gse-ui-formControl-input-colorPicker-size);block-size:var(--gse-ui-formControl-input-colorPicker-size);font-family:var(--gse-ui-formControl-input-contentText-fontFamily);font-size:var(--gse-ui-formControl-input-contentText-fontSize);line-height:var(--gse-ui-formControl-input-contentText-lineHeight);color:var(--gse-ui-formControl-input-populatedColor);background-color:var(--gse-ui-formControl-input-backgroundColor);background-image:none;border:var(--gse-ui-formControl-input-default-border-width) var(--gse-ui-formControl-input-default-border-style) var(--gse-ui-formControl-input-default-border-color);border-radius:var(--gse-ui-formControl-input-borderRadius)}.gux-input-and-error-container .gux-input .gux-input-container.gux-disabled{opacity:var(--gse-ui-formControl-input-disabled-opacity)}.gux-input-and-error-container .gux-input .gux-input-container:focus-within{outline:var(--gse-ui-formControl-input-focus-border-width) var(--gse-ui-formControl-input-focus-border-style) var(--gse-ui-formControl-input-focus-border-color);outline-offset:var(--gse-semantic-focusOutline-offset);border:var(--gse-ui-formControl-input-active-border-width) var(--gse-ui-formControl-input-active-border-style) var(--gse-ui-formControl-input-active-border-color);border-radius:var(--gse-ui-formControl-focusRing-borderRadius)}.gux-input-and-error-container .gux-input .gux-input-container:hover{cursor:pointer;border-color:var(--gse-ui-formControl-input-hover-border-color)}.gux-input-and-error-container .gux-input.gux-input-error .gux-input-container{border-color:var(--gse-ui-formControl-input-error-border-color)}";

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
const GuxFormFieldColor = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Field indicator mark which can show *, (optional) or blank
         * Defaults to required. When set to required, the component will display * for required fields and blank for optional
         * When set to optional, the component will display (optional) for optional and blank for required.
         */
        this.indicatorMark = 'required';
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
        return (index.h(guxFormFieldContainer.GuxFormFieldContainer, { key: '9bb0ee43e91d6bc55f14c79bf205615caef36b6f', labelPosition: this.computedLabelPosition }, index.h(guxFormFieldContainer.GuxFormFieldLabel, { key: '94e0d29db2d749880f35701ce99aa22015d23325', required: this.required, position: this.computedLabelPosition }, index.h("slot", { key: '97a0e24aea02d952179317e1453cea220738733e', name: "label", onSlotchange: () => this.setLabel() }), index.h("gux-form-field-label-indicator", { key: '9efa9064b0e6270f48f756de90d71e5081b6eb3a', variant: this.indicatorMark, required: this.required }), index.h("slot", { key: 'ea8cce3efc4e54fbb18ca9b498f684457f16166d', name: "label-info" })), index.h("div", { key: '85730bcafa56972ec24edfff30b7cba3e22e4f7d', class: "gux-input-and-error-container" }, index.h("div", { key: 'b64c5aaea6f3f16dc9dd05aaca7e4ba4e558a55e', class: {
                'gux-input': true,
                'gux-input-error': this.hasError
            } }, index.h("div", { key: '41c6dcd864d396fd51ef29c381ffe6d157a950c8', class: {
                'gux-input-container': true,
                'gux-disabled': this.disabled
            } }, index.h("slot", { key: '0b967d0efd9eca208a40369679725389f4feccb9', name: "input", onSlotchange: () => this.setInput() }))), index.h(guxFormFieldError.GuxFormFieldError, { key: '03c36ee06dc975ee41dbe176e4c225cf520d3145', show: this.hasError }, index.h("slot", { key: '5f39c0b374eab15bdc51bcc8d4b66d8099a1bae2', name: "error" })), index.h(guxFormFieldError.GuxFormFieldHelp, { key: '308153f1fa7f016ea9e724626e335a48171b8722', show: !this.hasError && this.hasHelp }, index.h("slot", { key: '13d012116faf9688ba1d98b080c545c286d3cb6c', name: "help" })))));
    }
    get variant() {
        return this.labelPosition ? this.labelPosition.toLowerCase() : 'none';
    }
    setInput() {
        this.input = guxFormField_service.getSlottedInput(this.root, 'input[type="color"][slot="input"]');
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
], GuxFormFieldColor.prototype, "onMutation", null);
GuxFormFieldColor.style = guxFormFieldColorCss;

exports.gux_form_field_color = GuxFormFieldColor;
