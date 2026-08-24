import { r as registerInstance, h, a as getElement } from './index-xFL2agjT.js';
import { O as OnMutation } from './on-mutation-CQXoeN9i.js';
import { h as hasSlot } from './has-slot-qzV3vtOw.js';
import { t as trackComponent } from './usage-D2Q7fj4V.js';
import { G as GuxFormFieldError, a as GuxFormFieldHelp } from './gux-form-field-error-CvxwCzsi.js';
import { G as GuxFormFieldLabel, a as GuxFormFieldContainer } from './gux-form-field-container-CPY3Y_-p.js';
import { a as getComputedLabelPosition, g as getSlottedInput, v as validateFormIds } from './gux-form-field.service-C3WKbzwR.js';
import { p as preventBrowserValidationStyling } from './prevent-browser-validation-styling-PYfNAK8p.js';
import { o as onRequiredChange } from './on-attribute-change-De1NnCmO.js';
import './random-html-id-D9jKBqIb.js';
import './log-error-DxtJDeL9.js';
import './simulate-native-event-BMRf5pjV.js';

const guxFormFieldFileCss = ".gux-form-field-container{display:flex;flex-direction:column}.gux-form-field-container.gux-beside{flex-direction:row}.gux-form-field-error{display:none;flex-direction:row;flex-wrap:nowrap;gap:var(--gse-ui-formControl-helper-gap);place-content:stretch flex-start;padding:var(--gse-ui-formControl-helper-errorPadding);font-family:var(--gse-ui-formControl-helper-helperText-fontFamily);font-size:var(--gse-ui-formControl-helper-helperText-fontSize);line-height:var(--gse-ui-formControl-helper-helperText-lineHeight);color:var(--gse-ui-formControl-helper-errorColor)}.gux-form-field-error.gux-show{display:flex}.gux-form-field-error gux-icon{flex:0 1 auto;order:0;color:var(--gse-ui-formControl-helper-errorColor)}.gux-form-field-error .gux-message{flex:0 1 auto;align-self:auto;order:0}.gux-form-field-label{display:inline-flex;flex:1 0 auto}.gux-form-field-label ::slotted(label){min-inline-size:0}.gux-form-field-label ::slotted(gux-label-info-beta){padding-inline-start:var(--gse-ui-formControl-formField-gap)}.gux-form-field-label.gux-beside{position:relative;inset-block-start:var(--gse-ui-formControl-input-top);inline-size:fit-content;min-inline-size:var(--gse-ui-formControl-input-textfield-minWidth);max-inline-size:fit-content;margin-inline-end:var(--gse-ui-formControl-group-gapItems)}.gux-form-field-label.gux-above{padding-block-end:var(--gse-ui-formControl-formField-gap)}.gux-form-field-label.gux-screenreader{position:absolute;top:auto;left:-10000px;width:1px;height:1px;overflow:hidden}.gux-form-field-help{display:none;flex-direction:row;flex-wrap:nowrap;place-content:stretch flex-start;align-items:flex-start;justify-content:flex-start;padding-block-start:var(--gse-ui-formControl-formField-gap);font-family:var(--gse-ui-formControl-helper-helperText-fontFamily);font-size:var(--gse-ui-formControl-helper-helperText-fontSize);line-height:var(--gse-ui-formControl-helper-helperText-lineHeight);color:var(--gse-ui-formControl-helper-defaultColor)}.gux-form-field-help.gux-show{display:flex}.gux-form-field-help .gux-message{flex:0 1 auto;align-self:none;order:0}:host{display:block}::slotted(label){font-family:var(--gse-ui-formControl-label-textBold-fontFamily);font-size:var(--gse-ui-formControl-label-textBold-fontSize);font-weight:var(--gse-ui-formControl-label-textBold-fontWeight);line-height:var(--gse-ui-formControl-label-textBold-lineHeight);color:var(--gse-ui-formControl-label-labelColor)}.gux-input-and-error-container{flex-grow:1}";

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
const GuxFormFieldFile = class {
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
        this.required = false;
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
        this.hasError = hasSlot(this.root, 'error');
        this.hasHelp = hasSlot(this.root, 'help');
        this.labelInfo = this.root.querySelector('[slot=label-info]');
        trackComponent(this.root, { variant: this.variant });
    }
    disconnectedCallback() {
        if (this.requiredObserver) {
            this.requiredObserver.disconnect();
        }
    }
    setLabel() {
        this.label = this.root.querySelector('label[slot="label"]');
        this.computedLabelPosition = getComputedLabelPosition(this.label, this.labelPosition);
    }
    setInput() {
        this.input = getSlottedInput(this.root, 'input[type="file"][slot="input"]');
        preventBrowserValidationStyling(this.input);
        this.required = this.input.required;
        this.requiredObserver = onRequiredChange(this.input, (required) => {
            this.required = required;
        });
        validateFormIds(this.root, this.input);
    }
    get variant() {
        const labelPositionVariant = this.labelPosition
            ? this.labelPosition.toLowerCase()
            : 'none';
        const type = 'fileInput';
        return `${type}-${labelPositionVariant}`;
    }
    render() {
        return (h(GuxFormFieldContainer, { key: 'c81fbfa48e90ff635a168d726efb0317912e8eec', labelPosition: this.computedLabelPosition }, h(GuxFormFieldLabel, { key: 'df4978a1e3d8b36f15f6a38194513a4dc3608a38', position: this.computedLabelPosition, required: this.required }, h("slot", { key: 'bcb8e39bf89e2a56ae2863d9fdececb28450aa29', name: "label", onSlotchange: () => this.setLabel() }), h("gux-form-field-label-indicator", { key: '27fe84a8081016d09788b5f054fa37cda4f5673b', variant: this.indicatorMark, required: this.required }), h("slot", { key: 'faffd8212a5705085e9c279cd8b5dc209bc95b67', name: "label-info" })), h("div", { key: '92e9275b73d2952e66e0409ebc9dbe933b591c1c', class: "gux-input-and-error-container" }, h("slot", { key: '976de47774150f01eab0302f77818917fcc8c5a6', name: "input", onSlotchange: () => this.setInput() }), h(GuxFormFieldError, { key: '73113ae0f0e5447df7466f0cfb77ced4d9177078', show: this.hasError }, h("slot", { key: 'c55abb34569f8e1ac336698613f8846df65a35f7', name: "error" })), h(GuxFormFieldHelp, { key: '89df5ee890bffc28be97e4181e5450bfdb97bd91', show: !this.hasError && this.hasHelp }, h("slot", { key: '0f5a5a4124ae5bfbf8988ecd3710dd66428416cf', name: "help" })))));
    }
    get root() { return getElement(this); }
};
__decorate([
    OnMutation({ childList: true, subtree: true })
], GuxFormFieldFile.prototype, "onMutation", null);
GuxFormFieldFile.style = guxFormFieldFileCss;

export { GuxFormFieldFile as gux_form_field_file };
