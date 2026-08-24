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
var focusInputElement = require('./focus-input-element-DmhIgp7F.js');
require('./random-html-id-DH9-ntZu.js');
require('./log-error-nWO_o1C3.js');
require('./simulate-native-event-_MPnVmRN.js');

const guxFormFieldTextLikeCss = ".gux-form-field-container{display:flex;flex-direction:column}.gux-form-field-container.gux-beside{flex-direction:row}.gux-form-field-error{display:none;flex-direction:row;flex-wrap:nowrap;gap:var(--gse-ui-formControl-helper-gap);place-content:stretch flex-start;padding:var(--gse-ui-formControl-helper-errorPadding);font-family:var(--gse-ui-formControl-helper-helperText-fontFamily);font-size:var(--gse-ui-formControl-helper-helperText-fontSize);line-height:var(--gse-ui-formControl-helper-helperText-lineHeight);color:var(--gse-ui-formControl-helper-errorColor)}.gux-form-field-error.gux-show{display:flex}.gux-form-field-error gux-icon{flex:0 1 auto;order:0;color:var(--gse-ui-formControl-helper-errorColor)}.gux-form-field-error .gux-message{flex:0 1 auto;align-self:auto;order:0}.gux-form-field-label{display:inline-flex;flex:1 0 auto}.gux-form-field-label ::slotted(label){min-inline-size:0}.gux-form-field-label ::slotted(gux-label-info-beta){padding-inline-start:var(--gse-ui-formControl-formField-gap)}.gux-form-field-label.gux-beside{position:relative;inset-block-start:var(--gse-ui-formControl-input-top);inline-size:fit-content;min-inline-size:var(--gse-ui-formControl-input-textfield-minWidth);max-inline-size:fit-content;margin-inline-end:var(--gse-ui-formControl-group-gapItems)}.gux-form-field-label.gux-above{padding-block-end:var(--gse-ui-formControl-formField-gap)}.gux-form-field-label.gux-screenreader{position:absolute;top:auto;left:-10000px;width:1px;height:1px;overflow:hidden}.gux-form-field-help{display:none;flex-direction:row;flex-wrap:nowrap;place-content:stretch flex-start;align-items:flex-start;justify-content:flex-start;padding-block-start:var(--gse-ui-formControl-formField-gap);font-family:var(--gse-ui-formControl-helper-helperText-fontFamily);font-size:var(--gse-ui-formControl-helper-helperText-fontSize);line-height:var(--gse-ui-formControl-helper-helperText-lineHeight);color:var(--gse-ui-formControl-helper-defaultColor)}.gux-form-field-help.gux-show{display:flex}.gux-form-field-help .gux-message{flex:0 1 auto;align-self:none;order:0}:host{display:block}::slotted(label){font-family:var(--gse-ui-formControl-label-textBold-fontFamily);font-size:var(--gse-ui-formControl-label-textBold-fontSize);font-weight:var(--gse-ui-formControl-label-textBold-fontWeight);line-height:var(--gse-ui-formControl-label-textBold-lineHeight);color:var(--gse-ui-formControl-label-labelColor)}::slotted(input){flex:1 1 auto;align-self:auto;order:0;inline-size:100%;overflow:hidden;text-overflow:ellipsis;font-family:var(--gse-ui-formControl-input-contentText-fontFamily);font-size:var(--gse-ui-formControl-input-contentText-fontSize);font-weight:var(--gse-ui-formControl-input-contentText-fontWeight);line-height:var(--gse-ui-formControl-input-contentText-lineHeight);color:var(--gse-ui-formControl-input-populatedColor);outline:none;background-color:var(--gse-ui-formControl-input-backgroundColor);border:none}::slotted(input)::placeholder{color:var(--gse-ui-formControl-input-placeholderColor);opacity:1}slot[name=prefix],slot[name=suffix]{font-family:var(--gse-ui-formControl-input-prefixSufix-text-fontFamily);font-size:var(--gse-ui-formControl-input-prefixSufix-text-fontSize);line-height:var(--gse-ui-formControl-input-prefixSufix-text-lineHeight);color:var(--gse-ui-formControl-input-prefixSufix-defaultColor);text-align:center;white-space:nowrap;text-decoration:none}.gux-input-and-error-container{flex-grow:1}.gux-input-and-error-container .gux-input .gux-input-container{box-sizing:border-box;display:flex;flex-direction:row;flex-wrap:nowrap;gap:var(--gse-ui-formControl-input-gap);place-content:stretch center;align-items:center;inline-size:100%;block-size:var(--gse-ui-formControl-input-textfield-height);padding:var(--gse-ui-formControl-input-padding);font-family:var(--gse-ui-formControl-input-contentText-fontFamily);font-size:var(--gse-ui-formControl-input-contentText-fontSize);font-weight:var(--gse-ui-formControl-input-contentText-fontWeight);line-height:var(--gse-ui-formControl-input-contentText-lineHeight);color:var(--gse-ui-formControl-input-populatedColor);cursor:text;background-color:var(--gse-ui-formControl-input-backgroundColor);background-image:none;border:var(--gse-ui-formControl-input-default-border-width) var(--gse-ui-formControl-input-default-border-style) var(--gse-ui-formControl-input-default-border-color);border-radius:var(--gse-ui-formControl-input-borderRadius)}.gux-input-and-error-container .gux-input .gux-input-container.gux-has-suffix:not(.gux-input-and-error-container .gux-input .gux-input-container.gux-has-prefix) ::slotted(input){text-align:end}.gux-input-and-error-container .gux-input .gux-input-container.gux-disabled{cursor:default;opacity:var(--gse-ui-formControl-input-disabled-opacity)}.gux-input-and-error-container .gux-input .gux-input-container:focus-within{outline:var(--gse-ui-formControl-input-focus-border-width) var(--gse-ui-formControl-input-focus-border-style) var(--gse-ui-formControl-input-focus-border-color);outline-offset:var(--gse-semantic-focusOutline-offset);border:var(--gse-ui-formControl-input-active-border-width) var(--gse-ui-formControl-input-active-border-style) var(--gse-ui-formControl-input-active-border-color);border-radius:var(--gse-ui-formControl-focusRing-borderRadius)}.gux-input-and-error-container .gux-input .gux-input-container:hover:not(.gux-disabled){border:var(--gse-ui-formControl-input-hover-border-width) var(--gse-ui-formControl-input-hover-border-style) var(--gse-ui-formControl-input-hover-border-color)}.gux-input-and-error-container .gux-input.gux-input-error .gux-input-container{border-color:var(--gse-ui-formControl-input-error-border-color)}";

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
const GuxFormFieldTextLike = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.loading = false;
        /**
         * Field indicator mark which can show *, (optional) or blank
         * Defaults to required. When set to required, the component will display * for required fields and blank for optional
         * When set to optional, the component will display (optional) for optional and blank for required.
         */
        this.indicatorMark = 'required';
        this.computedLabelPosition = 'above';
        this.hasContent = false;
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
    // eslint-disable-next-line @typescript-eslint/require-await
    async guxForceUpdate() {
        this.hasContent = guxFormField_service.hasContent(this.input);
        this.hasError = hasSlot.hasSlot(this.root, 'error');
        this.hasHelp = hasSlot.hasSlot(this.root, 'help');
        index.forceUpdate(this.root);
    }
    renderRadialLoading() {
        if (this.loading) {
            return (index.h("div", { role: "status" }, index.h("gux-radial-loading", { context: "input" })));
        }
    }
    componentWillLoad() {
        this.setInput();
        this.setLabel();
        this.labelInfo = this.root.querySelector('[slot=label-info]');
        this.hasError = hasSlot.hasSlot(this.root, 'error');
        this.hasHelp = hasSlot.hasSlot(this.root, 'help');
        this.hasPrefix = Boolean(this.root.querySelector('[slot="prefix"]'));
        this.hasSuffix = Boolean(this.root.querySelector('[slot="suffix"]'));
        if (this.hasPrefix) {
            guxFormField_service.setSlotAriaDescribedby(this.root, this.input, 'prefix');
        }
        if (this.hasSuffix) {
            guxFormField_service.setSlotAriaDescribedby(this.root, this.input, 'suffix');
        }
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
        return (index.h(guxFormFieldContainer.GuxFormFieldContainer, { key: '6e268f9b2f5cdefcf05f51b95bbdabfc7f90a58b', labelPosition: this.computedLabelPosition }, index.h(guxFormFieldContainer.GuxFormFieldLabel, { key: '8da38ac30c89cc7f4a6d7a9ca95096622354f786', required: this.required, position: this.computedLabelPosition }, index.h("slot", { key: 'f4f8cb4dd7165fab77df91759603cf2a67b9d967', name: "label", onSlotchange: () => this.setLabel() }), index.h("gux-form-field-label-indicator", { key: 'b742165e6f2ae4bae2527cf2e23fc02793ae8b92', variant: this.indicatorMark, required: this.required }), index.h("slot", { key: 'c86c3d5580a44bfc070d801f85797333c68340df', name: "label-info" })), index.h("div", { key: '97a46a9562bf08388684e4c13781cbc67ffa00b4', class: "gux-input-and-error-container" }, index.h("div", { key: 'faa6d68074db30e416db0f0712467e10322d5551', class: {
                'gux-input': true,
                'gux-input-error': this.hasError
            } }, index.h("div", { key: 'f29ddc3ae15dab4002423197ce745426a9b81989', class: {
                'gux-input-container': true,
                'gux-disabled': this.disabled,
                'gux-has-prefix': this.hasPrefix,
                'gux-has-suffix': this.hasSuffix
            }, onClick: () => focusInputElement.focusInputElement(this.input) }, index.h("slot", { key: '159068cc7389df4caa747e849b3443b6a8e68525', name: "prefix" }), index.h("slot", { key: 'a1a529019ed80868047a04eeade0257efafff654', name: "input" }), this.renderRadialLoading(), index.h("slot", { key: 'ed703884556dd9302248d1c3a25fcb8bed8ac661', name: "suffix" }), this.clearable && this.hasContent && !this.disabled && (index.h("gux-form-field-input-clear-button", { key: '7f47627751268f2703b3246884ecf1ba4a719cb6', onClick: () => guxFormField_service.clearInput(this.input) })))), index.h(guxFormFieldError.GuxFormFieldError, { key: '243eba4b6bb5dbfba50e68b376f9df5dd1352e72', show: this.hasError }, index.h("slot", { key: '77f90dec9b23318b005379b5c35c66b922b3c6bb', name: "error" })), index.h(guxFormFieldError.GuxFormFieldHelp, { key: '48da44761dc115f5f1f451a7a61f338098ea0e93', show: !this.hasError && this.hasHelp }, index.h("slot", { key: '4355d3580e354d94639d8ceeaf0d862172bb0fb7', name: "help" })))));
    }
    get variant() {
        const labelPositionVariant = this.labelPosition
            ? this.labelPosition.toLowerCase()
            : 'none';
        const typeVariant = this.input.getAttribute('type');
        const clearableVariant = this.clearable ? 'clearable' : 'unclearable';
        return `${typeVariant}-${clearableVariant}-${labelPositionVariant}`;
    }
    setInput() {
        this.input = guxFormField_service.getSlottedInput(this.root, 'input[type="email"][slot="input"], input[type="number"][slot="input"], input[type="password"][slot="input"], input[type="text"][slot="input"]');
        this.hasContent = guxFormField_service.hasContent(this.input);
        preventBrowserValidationStyling.preventBrowserValidationStyling(this.input);
        this.input.addEventListener('input', () => {
            this.hasContent = guxFormField_service.hasContent(this.input);
        });
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
], GuxFormFieldTextLike.prototype, "onMutation", null);
GuxFormFieldTextLike.style = guxFormFieldTextLikeCss;

exports.gux_form_field_text_like = GuxFormFieldTextLike;
