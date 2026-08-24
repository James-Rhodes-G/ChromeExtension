import { r as registerInstance, h, a as getElement } from './index-xFL2agjT.js';
import { b as buildI18nForComponent } from './index-Dac2qHbK.js';
import { O as OnMutation } from './on-mutation-CQXoeN9i.js';
import { a as onDisabledChange, o as onRequiredChange } from './on-attribute-change-De1NnCmO.js';
import { t as trackComponent } from './usage-D2Q7fj4V.js';
import { G as GuxFormFieldError, a as GuxFormFieldHelp } from './gux-form-field-error-CvxwCzsi.js';
import { G as GuxFormFieldVisualLabel, a as GuxFormFieldScreenreaderLabel, b as GuxFormFieldFieldsetContainer } from './gux-form-field-fieldset-container-K7QuRUfg.js';
import { h as hasSlot } from './has-slot-qzV3vtOw.js';
import { g as getSlotTextContent } from './get-slot-text-content-MAoEg4ig.js';
import { v as validateFormIds, a as getComputedLabelPosition } from './gux-form-field.service-C3WKbzwR.js';
import './get-closest-element-Cd4R0amv.js';
import './random-html-id-D9jKBqIb.js';
import './log-error-DxtJDeL9.js';
import './simulate-native-event-BMRf5pjV.js';

const required = "Required";
var componentResources = {
	required: required
};

const guxFormFieldPhoneCss = ".gux-form-field-fieldset-container{display:flex;min-inline-size:0;padding:0;margin:0;border:none}.gux-form-field-fieldset-container.gux-beside{flex-direction:row}.gux-form-field-fieldset-container.gux-above{flex-direction:column}.gux-form-field-error{display:none;flex-direction:row;flex-wrap:nowrap;gap:var(--gse-ui-formControl-helper-gap);place-content:stretch flex-start;padding:var(--gse-ui-formControl-helper-errorPadding);font-family:var(--gse-ui-formControl-helper-helperText-fontFamily);font-size:var(--gse-ui-formControl-helper-helperText-fontSize);line-height:var(--gse-ui-formControl-helper-helperText-lineHeight);color:var(--gse-ui-formControl-helper-errorColor)}.gux-form-field-error.gux-show{display:flex}.gux-form-field-error gux-icon{flex:0 1 auto;order:0;color:var(--gse-ui-formControl-helper-errorColor)}.gux-form-field-error .gux-message{flex:0 1 auto;align-self:auto;order:0}.gux-form-field-help{display:none;flex-direction:row;flex-wrap:nowrap;place-content:stretch flex-start;align-items:flex-start;justify-content:flex-start;padding-block-start:var(--gse-ui-formControl-formField-gap);font-family:var(--gse-ui-formControl-helper-helperText-fontFamily);font-size:var(--gse-ui-formControl-helper-helperText-fontSize);line-height:var(--gse-ui-formControl-helper-helperText-lineHeight);color:var(--gse-ui-formControl-helper-defaultColor)}.gux-form-field-help.gux-show{display:flex}.gux-form-field-help .gux-message{flex:0 1 auto;align-self:none;order:0}.gux-form-field-visual-label{display:inline-flex;flex:1 0 auto}.gux-form-field-visual-label ::slotted(label){min-inline-size:0}.gux-form-field-visual-label ::slotted(gux-label-info-beta){padding-inline-start:var(--gse-ui-formControl-formField-gap)}.gux-form-field-visual-label.gux-beside{position:relative;inset-block-start:var(--gse-ui-formControl-input-top);inline-size:fit-content;min-inline-size:var(--gse-ui-formControl-input-textfield-minWidth);max-inline-size:fit-content;margin-inline-end:var(--gse-ui-formControl-group-gapItems)}.gux-form-field-visual-label.gux-above{padding-block-end:var(--gse-ui-formControl-formField-gap)}.gux-form-field-visual-label.gux-screenreader{display:none}.gux-form-field-screenreader-label{position:absolute;top:auto;left:-10000px;width:1px;height:1px;overflow:hidden}::slotted(label){font-family:var(--gse-ui-formControl-label-textBold-fontFamily);font-size:var(--gse-ui-formControl-label-textBold-fontSize);font-weight:var(--gse-ui-formControl-label-textBold-fontWeight);line-height:var(--gse-ui-formControl-label-textBold-lineHeight);color:var(--gse-ui-formControl-label-labelColor)}.gux-input-and-error-container{flex-grow:1}";

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
const GuxFormFieldPhone = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Field indicator mark which can show *, (optional) or blank
         * Defaults to required. When set to required, the component will display * for required fields and blank for optional
         * When set to optional, the component will display (optional) for optional and blank for required.
         */
        this.indicatorMark = 'required';
        this.computedLabelPosition = 'above';
        this.required = false;
        this.hasError = false;
        this.hasHelp = false;
        this.hasLabelInfo = false;
    }
    watchValue(hasError) {
        const phoneInputSlot = this.root.querySelector('gux-phone-input-beta');
        if (phoneInputSlot) {
            phoneInputSlot.hasError = hasError;
        }
    }
    onMutation() {
        this.labelInfo = this.root.querySelector('[slot=label-info]');
        this.hasError = hasSlot(this.root, 'error');
        this.hasHelp = hasSlot(this.root, 'help');
        this.hasLabelInfo = hasSlot(this.root, 'label-info');
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
        this.disabledObserver.disconnect();
        this.requiredObserver.disconnect();
    }
    render() {
        var _a;
        return (h(GuxFormFieldFieldsetContainer, { key: '84fb36ddae824e95b57ed1bd01658a94a3b6647b', labelPosition: this.computedLabelPosition }, h(GuxFormFieldScreenreaderLabel, { key: 'b9054d4ab45c67a347abcff39f938ce98c93e252' }, (_a = this.label) === null || _a === void 0 ? void 0 :
            _a.textContent, this.renderText(this.getI18nValue('required'), this.required), this.renderText(getSlotTextContent(this.root, 'error'), this.hasError), this.renderText(getSlotTextContent(this.root, 'label-info'), this.hasLabelInfo)), h(GuxFormFieldVisualLabel, { key: 'bc002ae72821d78a90bd2c2585908b0e54e08538', position: this.computedLabelPosition, required: this.required }, h("slot", { key: '6e5b2bed76416bbcc247f9263df9f40141c436f8', name: "label", onSlotchange: () => this.setLabel() }), h("gux-form-field-label-indicator", { key: '147c97654d5598e45b84f32c3d8a9e3bf794ecca', variant: this.indicatorMark, required: this.required }), h("slot", { key: 'd915277d0a0a7f6ef7b57158f7fd3ef1e3397004', name: "label-info" })), h("div", { key: '20aa48151cd584bb3f932639d2e2c5cf6d0fb1aa', class: "gux-input-and-error-container" }, h("div", { key: '301d5dddcd2557cfabfa637556c8dad695d780e5', class: {
                'gux-input': true,
                'gux-input-error': this.hasError
            } }, h("div", { key: '02ceeccbe07de8777c292d5dc6fcfc4243009eef', class: {
                'gux-input-container': true,
                'gux-disabled': this.disabled
            } }, h("slot", { key: '2b40a34bfd3da43d81e5ba8b2c98be33a3bb631b' }))), h(GuxFormFieldError, { key: 'defff04d82a5caf40dd2adca0eb74861618a14f9', show: this.hasError }, h("slot", { key: '8bbfb9bf2dc1938027f97c163ce4940d641ff692', name: "error" })), h(GuxFormFieldHelp, { key: '4b9ada38eaffa65c80a24c2e035447f01c04e04a', show: !this.hasError && this.hasHelp }, h("slot", { key: 'bb45642d29768d246dca2ce61e9121cc4aa34206', name: "help" })))));
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
        const type = 'phoneInput';
        return `${type}-${labelPositionVariant}`;
    }
    setInput() {
        this.input = this.root.querySelector('gux-phone-input-beta');
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
], GuxFormFieldPhone.prototype, "onMutation", null);
GuxFormFieldPhone.style = guxFormFieldPhoneCss;

export { GuxFormFieldPhone as gux_form_field_phone };
