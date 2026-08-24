import { r as registerInstance, h, a as getElement } from './index-xFL2agjT.js';
import { b as buildI18nForComponent } from './index-Dac2qHbK.js';
import { O as OnMutation } from './on-mutation-CQXoeN9i.js';
import { o as onRequiredChange } from './on-attribute-change-De1NnCmO.js';
import { h as hasSlot } from './has-slot-qzV3vtOw.js';
import { G as GuxFormFieldError, a as GuxFormFieldHelp } from './gux-form-field-error-CvxwCzsi.js';
import { G as GuxFormFieldVisualLabel, a as GuxFormFieldScreenreaderLabel, b as GuxFormFieldFieldsetContainer } from './gux-form-field-fieldset-container-K7QuRUfg.js';
import { g as getSlotTextContent } from './get-slot-text-content-MAoEg4ig.js';
import { b as setSlotAriaLabelledby, s as setSlotAriaDescribedby, a as getComputedLabelPosition } from './gux-form-field.service-C3WKbzwR.js';
import { t as trackComponent } from './usage-D2Q7fj4V.js';
import './get-closest-element-Cd4R0amv.js';
import './random-html-id-D9jKBqIb.js';
import './log-error-DxtJDeL9.js';
import './simulate-native-event-BMRf5pjV.js';

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
        const dropdownSlot = this.root.querySelector('gux-dropdown') ||
            this.root.querySelector('gux-dropdown-multi');
        if (dropdownSlot) {
            dropdownSlot.hasError = hasError;
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
        return (h(GuxFormFieldFieldsetContainer, { key: '9020a7db668f3cb5c6ef3db9a230e008ace4bed1', labelPosition: this.computedLabelPosition }, h(GuxFormFieldScreenreaderLabel, { key: '52a423218fba63fa959e8563b323e23316da0ea2' }, (_a = this.label) === null || _a === void 0 ? void 0 :
            _a.textContent, this.renderText(this.getI18nValue('required'), this.required), this.renderText(getSlotTextContent(this.root, 'error'), this.hasError), this.renderText(getSlotTextContent(this.root, 'help'), this.hasHelp), this.renderText(getSlotTextContent(this.root, 'label-info'), this.hasLabelInfo)), h(GuxFormFieldVisualLabel, { key: '61d0d48c3ed153d93c4973615b1285dabc474847', position: this.computedLabelPosition, required: this.required }, h("slot", { key: 'cf6a6a962503f69bc33bb8fe4dbe633561e29985', name: "label", onSlotchange: () => this.setLabel() }), h("gux-form-field-label-indicator", { key: '9d529f92d0fc5977033217a41faf43dcb57bdaf4', variant: this.indicatorMark, required: this.required }), h("slot", { key: '5a93d1502c8337f4037c65fa06870c1244f574ec', name: "label-info" })), h("div", { key: '19ee8d6085059cc637cb46ffee99279c2481ddb8', class: "gux-input-and-error-container" }, h("div", { key: '179346ac87f748081e7a591612f5a69de233e9f1', class: {
                'gux-input': true,
                'gux-input-error': this.hasError
            } }, h("slot", { key: '7a91ec18082348fc7334733f22a36738d74b6d0b' })), h(GuxFormFieldError, { key: 'bb4687aed62b3ba2246967125884897861afdc03', show: this.hasError }, h("slot", { key: '1a7d9292bb9afdfef87cadfd73c042f4ca223ecf', name: "error" })), h(GuxFormFieldHelp, { key: '600311438afad613d07e99aced9b948809b430ae', show: !this.hasError && this.hasHelp }, h("slot", { key: '7590cb2f825a03586d6b4375479cd7c25abbf620', name: "help" })))));
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
        this.requiredObserver = onRequiredChange(this.dropdownElement, (required) => {
            this.required = required;
        });
        setSlotAriaLabelledby(this.root, this.listboxElement, 'label');
        setSlotAriaDescribedby(this.root, this.listboxElement, 'error');
        setSlotAriaDescribedby(this.root, this.listboxElement, 'help');
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
], GuxFormFieldDropdown.prototype, "onMutation", null);
GuxFormFieldDropdown.style = guxFormFieldDropdownCss;

export { GuxFormFieldDropdown as gux_form_field_dropdown };
