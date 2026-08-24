'use strict';

var index = require('./index-BLhHoh_r.js');
var index$1 = require('./index-QInGO-Pu.js');
var onMutation = require('./on-mutation-BoagtLIt.js');
var onAttributeChange = require('./on-attribute-change-Cv7L_5Zv.js');
var hasSlot = require('./has-slot-BFTyqu_U.js');
var guxFormFieldError = require('./gux-form-field-error-BRPetX-t.js');
var guxFormFieldFieldsetContainer = require('./gux-form-field-fieldset-container-CP24qwTm.js');
var getSlotTextContent = require('./get-slot-text-content-DZwcXMIm.js');
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

const guxFormFieldDropdownCss = ".gux-form-field-fieldset-container{display:flex;min-inline-size:0;padding:0;margin:0;border:none}.gux-form-field-fieldset-container.gux-beside{flex-direction:row}.gux-form-field-fieldset-container.gux-above{flex-direction:column}.gux-form-field-error{display:none;flex-direction:row;flex-wrap:nowrap;gap:var(--gse-ui-formControl-helper-gap);place-content:stretch flex-start;padding:var(--gse-ui-formControl-helper-errorPadding);font-family:var(--gse-ui-formControl-helper-helperText-fontFamily);font-size:var(--gse-ui-formControl-helper-helperText-fontSize);line-height:var(--gse-ui-formControl-helper-helperText-lineHeight);color:var(--gse-ui-formControl-helper-errorColor)}.gux-form-field-error.gux-show{display:flex}.gux-form-field-error gux-icon{flex:0 1 auto;order:0;color:var(--gse-ui-formControl-helper-errorColor)}.gux-form-field-error .gux-message{flex:0 1 auto;align-self:auto;order:0}.gux-form-field-help{display:none;flex-direction:row;flex-wrap:nowrap;place-content:stretch flex-start;align-items:flex-start;justify-content:flex-start;padding-block-start:var(--gse-ui-formControl-formField-gap);font-family:var(--gse-ui-formControl-helper-helperText-fontFamily);font-size:var(--gse-ui-formControl-helper-helperText-fontSize);line-height:var(--gse-ui-formControl-helper-helperText-lineHeight);color:var(--gse-ui-formControl-helper-defaultColor)}.gux-form-field-help.gux-show{display:flex}.gux-form-field-help .gux-message{flex:0 1 auto;align-self:none;order:0}.gux-form-field-visual-label{display:inline-flex;flex:1 0 auto}.gux-form-field-visual-label ::slotted(label){min-inline-size:0}.gux-form-field-visual-label ::slotted(gux-label-info-beta){padding-inline-start:var(--gse-ui-formControl-formField-gap)}.gux-form-field-visual-label.gux-beside{position:relative;inset-block-start:var(--gse-ui-formControl-input-top);inline-size:fit-content;min-inline-size:var(--gse-ui-formControl-input-textfield-minWidth);max-inline-size:fit-content;margin-inline-end:var(--gse-ui-formControl-group-gapItems)}.gux-form-field-visual-label.gux-above{padding-block-end:var(--gse-ui-formControl-formField-gap)}.gux-form-field-visual-label.gux-screenreader{display:none}.gux-form-field-screenreader-label{position:absolute;top:auto;left:-10000px;width:1px;height:1px;overflow:hidden}:host{display:block}::slotted(label){font-family:var(--gse-ui-formControl-label-textBold-fontFamily);font-size:var(--gse-ui-formControl-label-textBold-fontSize);font-weight:var(--gse-ui-formControl-label-textBold-fontWeight);line-height:var(--gse-ui-formControl-label-textBold-lineHeight);color:var(--gse-ui-formControl-label-labelColor)}.gux-input-and-error-container{flex-grow:1;inline-size:100%}";

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
const GuxFormFieldDropdown = class {
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
        const dropdownSlot = this.root.querySelector('gux-dropdown') ||
            this.root.querySelector('gux-dropdown-multi');
        if (dropdownSlot) {
            dropdownSlot.hasError = hasError;
        }
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
                if (this.dropdownElement.matches(':focus-within')) {
                    void ((_a = this.labelInfo) === null || _a === void 0 ? void 0 : _a.showTooltip());
                    this.hideLabelInfoTimeout = setTimeout(() => {
                        var _a;
                        void ((_a = this.labelInfo) === null || _a === void 0 ? void 0 : _a.hideTooltip());
                    }, 6000);
                }
                break;
            }
            default: {
                if (this.dropdownElement.matches(':focus-within')) {
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
        if (this.requiredObserver) {
            this.requiredObserver.disconnect();
        }
    }
    renderText(text, condition = false) {
        if (condition) {
            return ' ' + text;
        }
    }
    render() {
        var _a;
        return (index.h(guxFormFieldFieldsetContainer.GuxFormFieldFieldsetContainer, { key: '9020a7db668f3cb5c6ef3db9a230e008ace4bed1', labelPosition: this.computedLabelPosition }, index.h(guxFormFieldFieldsetContainer.GuxFormFieldScreenreaderLabel, { key: '52a423218fba63fa959e8563b323e23316da0ea2' }, (_a = this.label) === null || _a === void 0 ? void 0 :
            _a.textContent, this.renderText(this.getI18nValue('required'), this.required), this.renderText(getSlotTextContent.getSlotTextContent(this.root, 'error'), this.hasError), this.renderText(getSlotTextContent.getSlotTextContent(this.root, 'help'), this.hasHelp), this.renderText(getSlotTextContent.getSlotTextContent(this.root, 'label-info'), this.hasLabelInfo)), index.h(guxFormFieldFieldsetContainer.GuxFormFieldVisualLabel, { key: '61d0d48c3ed153d93c4973615b1285dabc474847', position: this.computedLabelPosition, required: this.required }, index.h("slot", { key: 'cf6a6a962503f69bc33bb8fe4dbe633561e29985', name: "label", onSlotchange: () => this.setLabel() }), index.h("gux-form-field-label-indicator", { key: '9d529f92d0fc5977033217a41faf43dcb57bdaf4', variant: this.indicatorMark, required: this.required }), index.h("slot", { key: '5a93d1502c8337f4037c65fa06870c1244f574ec', name: "label-info" })), index.h("div", { key: '19ee8d6085059cc637cb46ffee99279c2481ddb8', class: "gux-input-and-error-container" }, index.h("div", { key: '179346ac87f748081e7a591612f5a69de233e9f1', class: {
                'gux-input': true,
                'gux-input-error': this.hasError
            } }, index.h("slot", { key: '7a91ec18082348fc7334733f22a36738d74b6d0b' })), index.h(guxFormFieldError.GuxFormFieldError, { key: 'bb4687aed62b3ba2246967125884897861afdc03', show: this.hasError }, index.h("slot", { key: '1a7d9292bb9afdfef87cadfd73c042f4ca223ecf', name: "error" })), index.h(guxFormFieldError.GuxFormFieldHelp, { key: '600311438afad613d07e99aced9b948809b430ae', show: !this.hasError && this.hasHelp }, index.h("slot", { key: '7590cb2f825a03586d6b4375479cd7c25abbf620', name: "help" })))));
    }
    get variant() {
        const labelPositionVariant = this.labelPosition
            ? this.labelPosition.toLowerCase()
            : 'none';
        const type = 'dropdown';
        return `${type}-${labelPositionVariant}`;
    }
    setInput() {
        this.dropdownElement =
            this.root.querySelector('gux-dropdown') ||
                this.root.querySelector('gux-dropdown-multi');
        this.listboxElement =
            this.root.querySelector('gux-listbox') ||
                this.root.querySelector('gux-listbox-multi');
        this.required = this.dropdownElement.required;
        this.requiredObserver = onAttributeChange.onRequiredChange(this.dropdownElement, (required) => {
            this.required = required;
        });
        guxFormField_service.setSlotAriaLabelledby(this.root, this.listboxElement, 'label');
        guxFormField_service.setSlotAriaDescribedby(this.root, this.listboxElement, 'error');
        guxFormField_service.setSlotAriaDescribedby(this.root, this.listboxElement, 'help');
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
], GuxFormFieldDropdown.prototype, "onMutation", null);
GuxFormFieldDropdown.style = guxFormFieldDropdownCss;

exports.gux_form_field_dropdown = GuxFormFieldDropdown;
