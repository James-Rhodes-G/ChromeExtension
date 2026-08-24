import { r as registerInstance, h, a as getElement } from './index-xFL2agjT.js';
import { O as OnMutation } from './on-mutation-CQXoeN9i.js';
import { h as hasSlot } from './has-slot-qzV3vtOw.js';
import { b as buildI18nForComponent } from './index-Dac2qHbK.js';
import { a as GuxFormFieldHelp, G as GuxFormFieldError } from './gux-form-field-error-CvxwCzsi.js';
import { G as GuxFormFieldVisualLabel, a as GuxFormFieldScreenreaderLabel, b as GuxFormFieldFieldsetContainer } from './gux-form-field-fieldset-container-K7QuRUfg.js';
import { g as getSlotTextContent } from './get-slot-text-content-MAoEg4ig.js';
import { t as trackComponent } from './usage-D2Q7fj4V.js';
import './get-closest-element-Cd4R0amv.js';

const required = "Required";
var componentResources = {
	required: required
};

const guxFormFieldRadioGroupCss = ".gux-form-field-fieldset-container{display:flex;min-inline-size:0;padding:0;margin:0;border:none}.gux-form-field-fieldset-container.gux-beside{flex-direction:row}.gux-form-field-fieldset-container.gux-above{flex-direction:column}.gux-form-field-error{display:none;flex-direction:row;flex-wrap:nowrap;gap:var(--gse-ui-formControl-helper-gap);place-content:stretch flex-start;padding:var(--gse-ui-formControl-helper-errorPadding);font-family:var(--gse-ui-formControl-helper-helperText-fontFamily);font-size:var(--gse-ui-formControl-helper-helperText-fontSize);line-height:var(--gse-ui-formControl-helper-helperText-lineHeight);color:var(--gse-ui-formControl-helper-errorColor)}.gux-form-field-error.gux-show{display:flex}.gux-form-field-error gux-icon{flex:0 1 auto;order:0;color:var(--gse-ui-formControl-helper-errorColor)}.gux-form-field-error .gux-message{flex:0 1 auto;align-self:auto;order:0}.gux-form-field-help{display:none;flex-direction:row;flex-wrap:nowrap;place-content:stretch flex-start;align-items:flex-start;justify-content:flex-start;padding-block-start:var(--gse-ui-formControl-formField-gap);font-family:var(--gse-ui-formControl-helper-helperText-fontFamily);font-size:var(--gse-ui-formControl-helper-helperText-fontSize);line-height:var(--gse-ui-formControl-helper-helperText-lineHeight);color:var(--gse-ui-formControl-helper-defaultColor)}.gux-form-field-help.gux-show{display:flex}.gux-form-field-help .gux-message{flex:0 1 auto;align-self:none;order:0}.gux-form-field-error{display:none;flex-direction:row;flex-wrap:nowrap;gap:var(--gse-ui-formControl-helper-gap);place-content:stretch flex-start;padding:var(--gse-ui-formControl-helper-errorPadding);font-family:var(--gse-ui-formControl-helper-helperText-fontFamily);font-size:var(--gse-ui-formControl-helper-helperText-fontSize);line-height:var(--gse-ui-formControl-helper-helperText-lineHeight);color:var(--gse-ui-formControl-helper-errorColor)}.gux-form-field-error.gux-show{display:flex}.gux-form-field-error gux-icon{flex:0 1 auto;order:0;color:var(--gse-ui-formControl-helper-errorColor)}.gux-form-field-error .gux-message{flex:0 1 auto;align-self:auto;order:0}.gux-form-field-help{display:none;flex-direction:row;flex-wrap:nowrap;place-content:stretch flex-start;align-items:flex-start;justify-content:flex-start;padding-block-start:var(--gse-ui-formControl-formField-gap);font-family:var(--gse-ui-formControl-helper-helperText-fontFamily);font-size:var(--gse-ui-formControl-helper-helperText-fontSize);line-height:var(--gse-ui-formControl-helper-helperText-lineHeight);color:var(--gse-ui-formControl-helper-defaultColor)}.gux-form-field-help.gux-show{display:flex}.gux-form-field-help .gux-message{flex:0 1 auto;align-self:none;order:0}.gux-form-field-visual-label{display:inline-flex;flex:1 0 auto}.gux-form-field-visual-label ::slotted(label){min-inline-size:0}.gux-form-field-visual-label ::slotted(gux-label-info-beta){padding-inline-start:var(--gse-ui-formControl-formField-gap)}.gux-form-field-visual-label.gux-beside{position:relative;inset-block-start:var(--gse-ui-formControl-input-top);inline-size:fit-content;min-inline-size:var(--gse-ui-formControl-input-textfield-minWidth);max-inline-size:fit-content;margin-inline-end:var(--gse-ui-formControl-group-gapItems)}.gux-form-field-visual-label.gux-above{padding-block-end:var(--gse-ui-formControl-formField-gap)}.gux-form-field-visual-label.gux-screenreader{display:none}.gux-form-field-screenreader-label{position:absolute;top:auto;left:-10000px;width:1px;height:1px;overflow:hidden}:host{display:block}::slotted(gux-form-field-radio){padding-block-start:var(--gse-ui-formControl-group-gapItems)}::slotted(gux-form-field-radio:first-of-type){padding-block-start:0}:host([disabled]) ::slotted(label){opacity:var(--gse-ui-formControl-input-disabled-opacity)}::slotted(label){font-family:var(--gse-ui-formControl-label-textBold-fontFamily);font-size:var(--gse-ui-formControl-label-textBold-fontSize);font-weight:var(--gse-ui-formControl-label-textBold-fontWeight);line-height:var(--gse-ui-formControl-label-textBold-lineHeight);color:var(--gse-ui-formControl-label-labelColor)}";

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
const GuxFormFieldRadioGroupBeta = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.required = false;
        /**
         * Field indicator mark which can show *, (optional) or blank
         * Defaults to required. When set to required, the component will display * for required fields and blank for optional
         * When set to optional, the component will display (optional) for optional and blank for required.
         */
        this.indicatorMark = 'required';
        /**
         *  Radio group has error text.
         */
        this.hasGroupError = false;
        /**
         *  radio group has help text.
         */
        this.hasGroupHelp = false;
        /**
         *  radio group has label info tooltip
         */
        this.hasGroupLabelInfo = false;
        /**
         * Disables the radio buttons in the group.
         */
        this.disabled = false;
    }
    watchGroupError(hasGroupError) {
        const radioSlots = this.root.querySelectorAll('gux-form-field-radio');
        if (radioSlots) {
            radioSlots.forEach(item => {
                item.hasGroupError = hasGroupError;
            });
        }
    }
    watchDisabled() {
        this.setDisabledRadio();
    }
    onMutation() {
        this.groupLabelInfo = this.root.querySelector('[slot=group-label-info]');
        this.hasGroupError = hasSlot(this.root, 'group-error');
        this.hasGroupHelp = hasSlot(this.root, 'group-help');
    }
    handleKeyup(event) {
        var _a, _b;
        switch (event.key) {
            case 'Tab': {
                if (this.root.matches(':focus-within')) {
                    void ((_a = this.groupLabelInfo) === null || _a === void 0 ? void 0 : _a.showTooltip());
                    this.hideTooltipTimeout = setTimeout(() => {
                        var _a;
                        void ((_a = this.groupLabelInfo) === null || _a === void 0 ? void 0 : _a.hideTooltip());
                    }, 6000);
                }
                break;
            }
            default: {
                if (this.root.matches(':focus-within')) {
                    void ((_b = this.groupLabelInfo) === null || _b === void 0 ? void 0 : _b.hideTooltip());
                    clearTimeout(this.hideTooltipTimeout);
                }
                break;
            }
        }
    }
    onFocusout() {
        var _a;
        void ((_a = this.groupLabelInfo) === null || _a === void 0 ? void 0 : _a.hideTooltip());
        clearTimeout(this.hideTooltipTimeout);
    }
    async componentWillLoad() {
        this.getI18nValue = await buildI18nForComponent(this.root, componentResources);
        this.groupLabelInfo = this.root.querySelector('[slot=group-label-info]');
        this.hasGroupError = hasSlot(this.root, 'group-error');
        this.hasGroupHelp = hasSlot(this.root, 'group-help');
        this.hasGroupLabelInfo = hasSlot(this.root, 'group-label-info');
        this.setLabel();
        this.setDisabledRadio();
        trackComponent(this.root);
    }
    disconnectedCallback() {
        if (this.disabledObserver) {
            this.disabledObserver.disconnect();
        }
    }
    setDisabledRadio() {
        const radioSlots = this.root.querySelectorAll('gux-form-field-radio');
        if (radioSlots) {
            radioSlots.forEach(item => {
                item.hasGroupDisabled = this.disabled;
            });
        }
    }
    renderText(text, condition = false) {
        if (condition) {
            return ' ' + text;
        }
    }
    render() {
        var _a;
        return (h(GuxFormFieldFieldsetContainer, { key: 'fad484fb7fa8ec26abc118586b82c66b5952915c', labelPosition: "above", disabled: this.disabled }, h(GuxFormFieldScreenreaderLabel, { key: 'e8446de191e32faf08297a3baaa710caceda7290' }, (_a = this.label) === null || _a === void 0 ? void 0 :
            _a.textContent, this.renderText(this.getI18nValue('required'), this.required), this.renderText(getSlotTextContent(this.root, 'group-error'), this.hasGroupError), this.renderText(getSlotTextContent(this.root, 'group-help'), this.hasGroupHelp), this.renderText(getSlotTextContent(this.root, 'group-label-info'), this.hasGroupLabelInfo)), h(GuxFormFieldVisualLabel, { key: 'ee8f1870612c16fd90dfa7ae69155abdd0768013', position: "above", required: this.required }, h("slot", { key: '6b20419b25b7b7381740834b42d6f057db18ad2a', name: "group-label", onSlotchange: () => this.setLabel() }), h("gux-form-field-label-indicator", { key: 'de00848bbb489b3db197dfd92328940f529cc85c', variant: this.indicatorMark, required: this.required }), h("slot", { key: 'd1bd07ac555ca287b40a850458b212f0ea13728d', name: "group-label-info" })), h("slot", { key: '525f68e3742ae671bdf928c8578581893eddca07' }), h(GuxFormFieldError, { key: '46e74e1785062aab209be58ac7a34d4f9041353f', show: this.hasGroupError }, h("slot", { key: '41824728fe7ae908f4428147f3f3696c7d139c5e', name: "group-error" })), h(GuxFormFieldHelp, { key: '1e3c4ab5237c81ed55d6d075f5d0c6983c04dbd7', show: !this.hasGroupError && this.hasGroupHelp }, h("slot", { key: 'b89ae47b91befcb31fbca744ea3a5768ffe40060', name: "group-help" }))));
    }
    setLabel() {
        this.label = this.root.querySelector('label[slot="group-label"]');
    }
    get root() { return getElement(this); }
    static get watchers() { return {
        "hasGroupError": ["watchGroupError"],
        "disabled": ["watchDisabled"]
    }; }
};
__decorate([
    OnMutation({ childList: true, subtree: true })
], GuxFormFieldRadioGroupBeta.prototype, "onMutation", null);
GuxFormFieldRadioGroupBeta.style = guxFormFieldRadioGroupCss;

export { GuxFormFieldRadioGroupBeta as gux_form_field_radio_group_beta };
