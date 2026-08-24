import { r as registerInstance, f as forceUpdate, h, a as getElement } from './index-xFL2agjT.js';
import { c as calculateInputDisabledState, o as onInputDisabledStateChange } from './on-input-disabled-state-change-Cb3FOYGS.js';
import { O as OnMutation } from './on-mutation-CQXoeN9i.js';
import { o as onRequiredChange } from './on-attribute-change-De1NnCmO.js';
import { p as preventBrowserValidationStyling } from './prevent-browser-validation-styling-PYfNAK8p.js';
import { h as hasSlot } from './has-slot-qzV3vtOw.js';
import { G as GuxFormFieldError, a as GuxFormFieldHelp } from './gux-form-field-error-CvxwCzsi.js';
import { G as GuxFormFieldLabel, a as GuxFormFieldContainer } from './gux-form-field-container-CPY3Y_-p.js';
import { h as hasContent, c as clearInput, g as getSlottedInput, v as validateFormIds, a as getComputedLabelPosition } from './gux-form-field.service-C3WKbzwR.js';
import { t as trackComponent } from './usage-D2Q7fj4V.js';
import { f as focusInputElement } from './focus-input-element-JHLuJ8Pb.js';
import './random-html-id-D9jKBqIb.js';
import './log-error-DxtJDeL9.js';
import './simulate-native-event-BMRf5pjV.js';

const guxFormFieldSearchCss = ".gux-form-field-container{display:flex;flex-direction:column}.gux-form-field-container.gux-beside{flex-direction:row}.gux-form-field-error{display:none;flex-direction:row;flex-wrap:nowrap;gap:var(--gse-ui-formControl-helper-gap);place-content:stretch flex-start;padding:var(--gse-ui-formControl-helper-errorPadding);font-family:var(--gse-ui-formControl-helper-helperText-fontFamily);font-size:var(--gse-ui-formControl-helper-helperText-fontSize);line-height:var(--gse-ui-formControl-helper-helperText-lineHeight);color:var(--gse-ui-formControl-helper-errorColor)}.gux-form-field-error.gux-show{display:flex}.gux-form-field-error gux-icon{flex:0 1 auto;order:0;color:var(--gse-ui-formControl-helper-errorColor)}.gux-form-field-error .gux-message{flex:0 1 auto;align-self:auto;order:0}.gux-form-field-label{display:inline-flex;flex:1 0 auto}.gux-form-field-label ::slotted(label){min-inline-size:0}.gux-form-field-label ::slotted(gux-label-info-beta){padding-inline-start:var(--gse-ui-formControl-formField-gap)}.gux-form-field-label.gux-beside{position:relative;inset-block-start:var(--gse-ui-formControl-input-top);inline-size:fit-content;min-inline-size:var(--gse-ui-formControl-input-textfield-minWidth);max-inline-size:fit-content;margin-inline-end:var(--gse-ui-formControl-group-gapItems)}.gux-form-field-label.gux-above{padding-block-end:var(--gse-ui-formControl-formField-gap)}.gux-form-field-label.gux-screenreader{position:absolute;top:auto;left:-10000px;width:1px;height:1px;overflow:hidden}.gux-form-field-help{display:none;flex-direction:row;flex-wrap:nowrap;place-content:stretch flex-start;align-items:flex-start;justify-content:flex-start;padding-block-start:var(--gse-ui-formControl-formField-gap);font-family:var(--gse-ui-formControl-helper-helperText-fontFamily);font-size:var(--gse-ui-formControl-helper-helperText-fontSize);line-height:var(--gse-ui-formControl-helper-helperText-lineHeight);color:var(--gse-ui-formControl-helper-defaultColor)}.gux-form-field-help.gux-show{display:flex}.gux-form-field-help .gux-message{flex:0 1 auto;align-self:none;order:0}:host{display:block}::slotted(label){font-family:var(--gse-ui-formControl-label-textBold-fontFamily);font-size:var(--gse-ui-formControl-label-textBold-fontSize);font-weight:var(--gse-ui-formControl-label-textBold-fontWeight);line-height:var(--gse-ui-formControl-label-textBold-lineHeight);color:var(--gse-ui-formControl-label-labelColor)}::slotted(input){flex:1 1 auto;align-self:auto;order:0;inline-size:100%;overflow:hidden;text-overflow:ellipsis;font-family:var(--gse-ui-formControl-input-contentText-fontFamily);font-size:var(--gse-ui-formControl-input-contentText-fontSize);font-weight:var(--gse-ui-formControl-input-contentText-fontWeight);line-height:var(--gse-ui-formControl-input-contentText-lineHeight);color:var(--gse-ui-formControl-input-populatedColor);outline:none;background-color:var(--gse-ui-formControl-input-backgroundColor);border:none}::slotted(input)::placeholder{color:var(--gse-ui-formControl-input-placeholderColor);opacity:1}.gux-input-and-error-container{flex-grow:1}.gux-input-and-error-container .gux-input{display:flex;flex-direction:row;flex-wrap:nowrap;align-content:stretch;align-items:center}.gux-input-and-error-container .gux-input .gux-input-container{box-sizing:border-box;display:flex;flex:1 1 auto;flex-direction:row;flex-wrap:nowrap;gap:var(--gse-ui-formControl-input-gap);place-content:stretch center;align-items:center;align-self:auto;order:0;inline-size:100%;block-size:var(--gse-ui-formControl-input-textfield-height);padding:var(--gse-ui-formControl-input-padding);font-family:var(--gse-ui-formControl-input-contentText-fontFamily);font-size:var(--gse-ui-formControl-input-contentText-fontSize);font-weight:var(--gse-ui-formControl-input-contentText-fontWeight);line-height:var(--gse-ui-formControl-input-contentText-lineHeight);color:var(--gse-ui-formControl-input-populatedColor);cursor:text;background-color:var(--gse-ui-formControl-input-backgroundColor);background-image:none;border:var(--gse-ui-formControl-input-default-border-width) var(--gse-ui-formControl-input-default-border-style) var(--gse-ui-formControl-input-default-border-color);border-radius:var(--gse-ui-formControl-input-borderRadius)}.gux-input-and-error-container .gux-input .gux-input-container.gux-disabled{cursor:default;opacity:var(--gse-ui-formControl-input-disabled-opacity)}.gux-input-and-error-container .gux-input .gux-input-container gux-icon[icon-name=\"fa/magnifying-glass-regular\"]{flex:0 0 auto;align-self:auto;order:0;color:var(--gse-ui-formControl-input-inputIcon-defaultColor)}.gux-input-and-error-container .gux-input .gux-input-container:focus-within{outline:var(--gse-ui-formControl-input-focus-border-width) var(--gse-ui-formControl-input-focus-border-style) var(--gse-ui-formControl-input-focus-border-color);outline-offset:var(--gse-semantic-focusOutline-offset);border:var(--gse-ui-formControl-input-active-border-width) var(--gse-ui-formControl-input-active-border-style) var(--gse-ui-formControl-input-active-border-color);border-radius:var(--gse-ui-formControl-focusRing-borderRadius)}.gux-input-and-error-container .gux-input .gux-input-container:hover:not(.gux-disabled){border:var(--gse-ui-formControl-input-hover-border-width) var(--gse-ui-formControl-input-hover-border-style) var(--gse-ui-formControl-input-hover-border-color)}.gux-input-and-error-container .gux-input.gux-input-error .gux-input-container{border-color:var(--gse-ui-formControl-input-error-border-color)}";

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
const GuxFormFieldSearch = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Field indicator mark which can show *, (optional) or blank
         * Defaults to required. When set to required, the component will display * for required fields and blank for optional
         * When set to optional, the component will display (optional) for optional and blank for required.
         */
        this.indicatorMark = 'required';
        this.computedLabelPosition = 'above';
        this.clearable = true;
        this.hasContent = false;
        this.hasError = false;
        this.hasHelp = false;
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
    // eslint-disable-next-line @typescript-eslint/require-await
    async guxForceUpdate() {
        this.hasContent = hasContent(this.input);
        this.hasError = hasSlot(this.root, 'error');
        this.hasHelp = hasSlot(this.root, 'help');
        forceUpdate(this.root);
    }
    componentWillLoad() {
        this.setInput();
        this.setLabel();
        this.labelInfo = this.root.querySelector('[slot=label-info]');
        this.hasError = hasSlot(this.root, 'error');
        this.hasHelp = hasSlot(this.root, 'help');
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
        return (h(GuxFormFieldContainer, { key: '8a63dea595a1c5d42dcb4cd8facc9d460a9e5a1b', labelPosition: this.computedLabelPosition }, h(GuxFormFieldLabel, { key: 'cfd0eec1ecf20523561684958daa1f6acf972caa', required: this.required, position: this.computedLabelPosition }, h("slot", { key: 'a3aaeff0832e5a64d1df1117d740c278c9c272af', name: "label", onSlotchange: () => this.setLabel() }), h("gux-form-field-label-indicator", { key: '70fe33bfb767af9d906cedcc9ce9ee60ca747af8', variant: this.indicatorMark, required: this.required }), h("slot", { key: 'a56375db0f57772478adc032a6098545abef2a19', name: "label-info" })), h("div", { key: 'c018d09f0cec6cca6986fc5e3dbe3d2ed110e1cd', class: "gux-input-and-error-container" }, h("div", { key: '612e3730ffec8c4e2c6cd1a99f6b236f7f4c3294', class: {
                'gux-input': true,
                'gux-input-error': this.hasError
            } }, h("div", { key: '4484c395ec89c16ea0e431ce4ba40c7f12f07f4c', class: {
                'gux-input-container': true,
                'gux-disabled': this.disabled
            }, onClick: () => focusInputElement(this.input) }, h("gux-icon", { key: 'fc268ba929820ea0cb29914dc49dfc6a2ca65128', "icon-name": "fa/magnifying-glass-regular", decorative: true, size: "small" }), h("slot", { key: '7454d1c6c2bdce9896dc23bc146186da366fcc2a', name: "input" }), this.clearable && this.hasContent && !this.disabled && (h("gux-form-field-input-clear-button", { key: 'f503f5d0aa5b2ec5528002b88364eab21e698824', onClick: () => clearInput(this.input) })))), h(GuxFormFieldError, { key: 'bbc51e468617a53ac4e6765ca62b5b4a3c9f4d56', show: this.hasError }, h("slot", { key: '694a574192897e77f2ddee09372e79918625e835', name: "error" })), h(GuxFormFieldHelp, { key: 'b790d4a1238ca6d77415785f8c98c0fba45143eb', show: !this.hasError && this.hasHelp }, h("slot", { key: '710ab2c334609e1d6d803046a08e25abf3e6ce6a', name: "help" })))));
    }
    get variant() {
        const labelPositionVariant = this.labelPosition
            ? this.labelPosition.toLowerCase()
            : 'none';
        const type = this.input.getAttribute('type');
        return `${type}-${labelPositionVariant}`;
    }
    setInput() {
        this.input = getSlottedInput(this.root, 'input[type="search"][slot="input"]');
        this.hasContent = hasContent(this.input);
        preventBrowserValidationStyling(this.input);
        this.input.addEventListener('input', () => {
            this.hasContent = hasContent(this.input);
        });
        this.disabled = calculateInputDisabledState(this.input);
        this.required = this.input.required;
        this.disabledObserver = onInputDisabledStateChange(this.input, (disabled) => {
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
};
__decorate([
    OnMutation({ childList: true, subtree: true })
], GuxFormFieldSearch.prototype, "onMutation", null);
GuxFormFieldSearch.style = guxFormFieldSearchCss;

export { GuxFormFieldSearch as gux_form_field_search };
