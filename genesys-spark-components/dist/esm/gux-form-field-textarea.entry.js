import { r as registerInstance, h, a as getElement } from './index-xFL2agjT.js';
import { c as calculateInputDisabledState, o as onInputDisabledStateChange } from './on-input-disabled-state-change-Cb3FOYGS.js';
import { O as OnMutation } from './on-mutation-CQXoeN9i.js';
import { o as onRequiredChange } from './on-attribute-change-De1NnCmO.js';
import { p as preventBrowserValidationStyling } from './prevent-browser-validation-styling-PYfNAK8p.js';
import { h as hasSlot } from './has-slot-qzV3vtOw.js';
import { G as GuxFormFieldError, a as GuxFormFieldHelp } from './gux-form-field-error-CvxwCzsi.js';
import { G as GuxFormFieldLabel, a as GuxFormFieldContainer } from './gux-form-field-container-CPY3Y_-p.js';
import { v as validateFormIds, a as getComputedLabelPosition } from './gux-form-field.service-C3WKbzwR.js';
import { t as trackComponent } from './usage-D2Q7fj4V.js';
import './random-html-id-D9jKBqIb.js';
import './log-error-DxtJDeL9.js';
import './simulate-native-event-BMRf5pjV.js';

const guxFormFieldTextareaCss = ".gux-form-field-container{display:flex;flex-direction:column}.gux-form-field-container.gux-beside{flex-direction:row}.gux-form-field-error{display:none;flex-direction:row;flex-wrap:nowrap;gap:var(--gse-ui-formControl-helper-gap);place-content:stretch flex-start;padding:var(--gse-ui-formControl-helper-errorPadding);font-family:var(--gse-ui-formControl-helper-helperText-fontFamily);font-size:var(--gse-ui-formControl-helper-helperText-fontSize);line-height:var(--gse-ui-formControl-helper-helperText-lineHeight);color:var(--gse-ui-formControl-helper-errorColor)}.gux-form-field-error.gux-show{display:flex}.gux-form-field-error gux-icon{flex:0 1 auto;order:0;color:var(--gse-ui-formControl-helper-errorColor)}.gux-form-field-error .gux-message{flex:0 1 auto;align-self:auto;order:0}.gux-form-field-label{display:inline-flex;flex:1 0 auto}.gux-form-field-label ::slotted(label){min-inline-size:0}.gux-form-field-label ::slotted(gux-label-info-beta){padding-inline-start:var(--gse-ui-formControl-formField-gap)}.gux-form-field-label.gux-beside{position:relative;inset-block-start:var(--gse-ui-formControl-input-top);inline-size:fit-content;min-inline-size:var(--gse-ui-formControl-input-textfield-minWidth);max-inline-size:fit-content;margin-inline-end:var(--gse-ui-formControl-group-gapItems)}.gux-form-field-label.gux-above{padding-block-end:var(--gse-ui-formControl-formField-gap)}.gux-form-field-label.gux-screenreader{position:absolute;top:auto;left:-10000px;width:1px;height:1px;overflow:hidden}.gux-form-field-help{display:none;flex-direction:row;flex-wrap:nowrap;place-content:stretch flex-start;align-items:flex-start;justify-content:flex-start;padding-block-start:var(--gse-ui-formControl-formField-gap);font-family:var(--gse-ui-formControl-helper-helperText-fontFamily);font-size:var(--gse-ui-formControl-helper-helperText-fontSize);line-height:var(--gse-ui-formControl-helper-helperText-lineHeight);color:var(--gse-ui-formControl-helper-defaultColor)}.gux-form-field-help.gux-show{display:flex}.gux-form-field-help .gux-message{flex:0 1 auto;align-self:none;order:0}:host{display:block}::slotted(label){font-family:var(--gse-ui-formControl-label-textBold-fontFamily);font-size:var(--gse-ui-formControl-label-textBold-fontSize);font-weight:var(--gse-ui-formControl-label-textBold-fontWeight);line-height:var(--gse-ui-formControl-label-textBold-lineHeight);color:var(--gse-ui-formControl-label-labelColor)}::slotted(textarea){flex:1 1 auto;align-self:auto;order:0;font-family:inherit;font-family:var(--gse-ui-formControl-input-contentText-fontFamily);font-size:var(--gse-ui-formControl-input-contentText-fontSize);font-weight:var(--gse-ui-formControl-input-contentText-fontWeight);line-height:var(--gse-ui-formControl-input-contentText-lineHeight);color:var(--gse-ui-formControl-input-populatedColor);resize:vertical;outline:none;background-color:var(--gse-ui-formControl-input-backgroundColor);background-image:none;border:none;border-radius:var(--gse-ui-formControl-input-borderRadius);padding:var(--gse-ui-formControl-textarea-padding);margin:0}::slotted(textarea)::placeholder{color:var(--gse-ui-formControl-input-placeholderColor);opacity:1}::slotted(textarea)[disabled]{opacity:var(--gse-ui-formControl-input-disabled-opacity)}.gux-input-and-error-container{flex-grow:1}.gux-input-and-error-container .gux-input{position:relative;display:flex;outline:none;border:var(--gse-ui-formControl-input-default-border-width) var(--gse-ui-formControl-input-default-border-style) var(--gse-ui-formControl-input-default-border-color);border-radius:var(--gse-ui-formControl-input-borderRadius)}.gux-input-and-error-container .gux-input:focus-within{outline:var(--gse-ui-formControl-input-focus-border-width) var(--gse-ui-formControl-input-focus-border-style) var(--gse-ui-formControl-input-focus-border-color);outline-offset:var(--gse-semantic-focusOutline-offset);border:var(--gse-ui-formControl-input-active-border-width) var(--gse-ui-formControl-input-active-border-style) var(--gse-ui-formControl-input-active-border-color);border-radius:var(--gse-ui-formControl-focusRing-borderRadius)}.gux-input-and-error-container .gux-input:hover:not(.gux-disabled){border:var(--gse-ui-formControl-input-hover-border-width) var(--gse-ui-formControl-input-hover-border-style) var(--gse-ui-formControl-input-hover-border-color)}.gux-input-and-error-container .gux-input.gux-input-error{border-color:var(--gse-ui-formControl-input-error-border-color)}.gux-input-and-error-container .gux-input.gux-disabled{opacity:var(--gse-ui-formControl-input-disabled-opacity)}.gux-input-and-error-container .gux-input.gux-resize-none ::slotted(textarea){resize:none}.gux-input-and-error-container .gux-input.gux-resize-auto{display:grid;overflow:hidden;word-break:normal;word-break:break-word;overflow-wrap:anywhere}.gux-input-and-error-container .gux-input.gux-resize-auto::after{visibility:hidden;grid-row-start:1;grid-row-end:2;grid-column-start:1;grid-column-end:2;white-space:pre-wrap;content:attr(data-replicated-value) \" \";padding:var(--gse-ui-formControl-textarea-padding);margin:0}.gux-input-and-error-container .gux-input.gux-resize-auto ::slotted(textarea){grid-row-start:1;grid-row-end:2;grid-column-start:1;grid-column-end:2;overflow-x:hidden;resize:none}";

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
const GuxFormFieldTextarea = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Field indicator mark which can show *, (optional) or blank
         * Defaults to required. When set to required, the component will display * for required fields and blank for optional
         * When set to optional, the component will display (optional) for optional and blank for required.
         */
        this.indicatorMark = 'required';
        this.computedLabelPosition = 'above';
        this.required = true;
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
    componentWillLoad() {
        this.setInput();
        this.setLabel();
        this.labelInfo = this.root.querySelector('[slot=label-info]');
        this.hasError = hasSlot(this.root, 'error');
        this.hasHelp = hasSlot(this.root, 'help');
        trackComponent(this.root, { variant: this.variant });
    }
    componentDidLoad() {
        this.updateHeight(this.textareaContainerElement, this.input, this.resize);
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
        return (h(GuxFormFieldContainer, { key: '5539bcc193900bca981990934f660389a9b256af', labelPosition: this.computedLabelPosition }, h(GuxFormFieldLabel, { key: '5cc443a9662783a2b010f41322071cb955401668', required: this.required, position: this.computedLabelPosition }, h("slot", { key: '0be61a2c251d589df7c7df838edf14a30a2f115a', name: "label", onSlotchange: () => this.setLabel() }), h("gux-form-field-label-indicator", { key: '1c25639be2027a5da960a1dac7f8be09fedc3eb4', variant: this.indicatorMark, required: this.required }), h("slot", { key: '4935e3efde33317b3af154a44ce311f466fd7db0', name: "label-info" })), h("div", { key: '28e68131226da13bc0c33b884d5a9509b6237822', class: "gux-input-and-error-container" }, h("div", { key: 'f5efe5efdc7ae39756203dc4634c339886b77fd7', ref: el => (this.textareaContainerElement = el), class: {
                'gux-input': true,
                [`gux-resize-${this.resize}`]: true,
                'gux-disabled': this.disabled,
                'gux-input-error': this.hasError
            } }, h("slot", { key: 'd98880eac70689c74c68a4d43d73f6fe9bc55746', name: "input" })), h(GuxFormFieldError, { key: '2044eba06442cb284a519e4d106e99e55bcb4b2a', show: this.hasError }, h("slot", { key: 'c2c56343f4dd9ec2b57673151fe082c7f9f8908c', name: "error" })), h(GuxFormFieldHelp, { key: '65e117c1c7f83aeb2c79c9f3419ee494ac6922b5', show: !this.hasError && this.hasHelp }, h("slot", { key: '56c589e6779487604b186df550ab4a8f7bd5ccb1', name: "help" })))));
    }
    get variant() {
        const labelPositionVariant = this.labelPosition
            ? this.labelPosition.toLowerCase()
            : 'none';
        return `${this.resize}-${labelPositionVariant}`;
    }
    setInput() {
        this.input = this.root.querySelector('textarea[slot="input"]');
        preventBrowserValidationStyling(this.input);
        this.updateHeight(this.textareaContainerElement, this.input, this.resize);
        this.input.addEventListener('input', () => {
            this.updateHeight(this.textareaContainerElement, this.input, this.resize);
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
    updateHeight(container, input, resize) {
        if (resize === 'auto') {
            if (container) {
                container.dataset.replicatedValue = input.value;
                container.style.maxHeight = input.style.maxHeight;
            }
        }
    }
    get root() { return getElement(this); }
};
__decorate([
    OnMutation({ childList: true, subtree: true })
], GuxFormFieldTextarea.prototype, "onMutation", null);
GuxFormFieldTextarea.style = guxFormFieldTextareaCss;

export { GuxFormFieldTextarea as gux_form_field_textarea };
