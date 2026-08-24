import { r as registerInstance, f as forceUpdate, h, H as Host, a as getElement } from './index-xFL2agjT.js';
import { c as calculateInputDisabledState, o as onInputDisabledStateChange } from './on-input-disabled-state-change-Cb3FOYGS.js';
import { O as OnMutation } from './on-mutation-CQXoeN9i.js';
import { o as onRequiredChange } from './on-attribute-change-De1NnCmO.js';
import { p as preventBrowserValidationStyling } from './prevent-browser-validation-styling-PYfNAK8p.js';
import { h as hasSlot } from './has-slot-qzV3vtOw.js';
import { G as GuxFormFieldError, a as GuxFormFieldHelp } from './gux-form-field-error-CvxwCzsi.js';
import { a as GuxFormFieldContainer, G as GuxFormFieldLabel } from './gux-form-field-container-CPY3Y_-p.js';
import { g as getSlottedInput, v as validateFormIds, a as getComputedLabelPosition } from './gux-form-field.service-C3WKbzwR.js';
import { t as trackComponent } from './usage-D2Q7fj4V.js';
import { O as OnResize } from './on-resize-DOAx3QfC.js';
import './random-html-id-D9jKBqIb.js';
import './log-error-DxtJDeL9.js';
import './simulate-native-event-BMRf5pjV.js';

const guxFormFieldRangeCss = ".gux-form-field-container{display:flex;flex-direction:column}.gux-form-field-container.gux-beside{flex-direction:row}.gux-form-field-error{display:none;flex-direction:row;flex-wrap:nowrap;gap:var(--gse-ui-formControl-helper-gap);place-content:stretch flex-start;padding:var(--gse-ui-formControl-helper-errorPadding);font-family:var(--gse-ui-formControl-helper-helperText-fontFamily);font-size:var(--gse-ui-formControl-helper-helperText-fontSize);line-height:var(--gse-ui-formControl-helper-helperText-lineHeight);color:var(--gse-ui-formControl-helper-errorColor)}.gux-form-field-error.gux-show{display:flex}.gux-form-field-error gux-icon{flex:0 1 auto;order:0;color:var(--gse-ui-formControl-helper-errorColor)}.gux-form-field-error .gux-message{flex:0 1 auto;align-self:auto;order:0}.gux-form-field-label{display:inline-flex;flex:1 0 auto}.gux-form-field-label ::slotted(label){min-inline-size:0}.gux-form-field-label ::slotted(gux-label-info-beta){padding-inline-start:var(--gse-ui-formControl-formField-gap)}.gux-form-field-label.gux-beside{position:relative;inset-block-start:var(--gse-ui-formControl-input-top);inline-size:fit-content;min-inline-size:var(--gse-ui-formControl-input-textfield-minWidth);max-inline-size:fit-content;margin-inline-end:var(--gse-ui-formControl-group-gapItems)}.gux-form-field-label.gux-above{padding-block-end:var(--gse-ui-formControl-formField-gap)}.gux-form-field-label.gux-screenreader{position:absolute;top:auto;left:-10000px;width:1px;height:1px;overflow:hidden}.gux-form-field-help{display:none;flex-direction:row;flex-wrap:nowrap;place-content:stretch flex-start;align-items:flex-start;justify-content:flex-start;padding-block-start:var(--gse-ui-formControl-formField-gap);font-family:var(--gse-ui-formControl-helper-helperText-fontFamily);font-size:var(--gse-ui-formControl-helper-helperText-fontSize);line-height:var(--gse-ui-formControl-helper-helperText-lineHeight);color:var(--gse-ui-formControl-helper-defaultColor)}.gux-form-field-help.gux-show{display:flex}.gux-form-field-help .gux-message{flex:0 1 auto;align-self:none;order:0}:host{display:block}::slotted(label){font-family:var(--gse-ui-formControl-label-textBold-fontFamily);font-size:var(--gse-ui-formControl-label-textBold-fontSize);font-weight:var(--gse-ui-formControl-label-textBold-fontWeight);line-height:var(--gse-ui-formControl-label-textBold-lineHeight);color:var(--gse-ui-formControl-label-labelColor)}::slotted(input[type=range]){position:absolute;inline-size:100%;block-size:var(--gse-ui-rangeSlider-bar-height);margin-block:calc(var(--gse-ui-rangeSlider-handle-height) / 2);margin-block-start:calc(-1 * (calc(var(--gse-ui-rangeSlider-handle-height) / 2) + var(--gse-ui-rangeSlider-bar-height)));margin-inline:0;-webkit-appearance:none;background:transparent}.gux-input-and-error-container{flex-grow:1}.gux-input-and-error-container.gux-hidden{display:none}.gux-input-and-error-container .gux-range-input-container{display:flex;flex-direction:row;flex-wrap:nowrap;gap:var(--gse-ui-rangeSlider-gap);place-content:stretch flex-start;align-items:center;block-size:var(--gse-ui-rangeSlider-set-height);font-size:var(--gse-ui-rangeSlider-label-text-fontSize)}.gux-input-and-error-container .gux-range-input-container.gux-disabled{opacity:var(--gse-ui-rangeSlider-disabled-opacity)}.gux-input-and-error-container .gux-range-input-container .gux-range{position:relative;flex:1 1 auto;align-self:center;order:0}.gux-input-and-error-container .gux-range-input-container .gux-range:hover .gux-range-tooltip,.gux-input-and-error-container .gux-range-input-container .gux-range:focus-within .gux-range-tooltip{visibility:visible}.gux-input-and-error-container .gux-range-input-container .gux-range .gux-track{inline-size:100%;block-size:var(--gse-ui-rangeSlider-bar-height);margin-block:6px;margin-inline:0;background:var(--gse-ui-rangeSlider-bar-default-backgroundColor);border-radius:var(--gse-ui-rangeSlider-track-borderRadius)}.gux-input-and-error-container .gux-range-input-container .gux-range .gux-track .gux-progress{block-size:var(--gse-ui-rangeSlider-bar-height);background-color:var(--gse-ui-rangeSlider-bar-selected-backgroundColor);border-radius:var(--gse-ui-rangeSlider-track-borderRadius)}.gux-input-and-error-container .gux-range-input-container .gux-display{flex:0 1 auto;align-self:auto;order:0;margin-block:0;margin-inline:var(--gux-spacing-medium) 0;font-family:var(--gse-ui-rangeSlider-label-text-fontFamily);font-size:var(--gse-ui-rangeSlider-label-text-fontSize);font-weight:var(--gse-ui-rangeSlider-label-text-fontWeight);line-height:var(--gse-ui-rangeSlider-label-text-lineHeight);text-align:end}.gux-input-and-error-container .gux-range-input-container .gux-display.gux-hidden{display:none}.gux-form-field-label.gux-beside{inset-block-start:0}";

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
const GuxFormFieldRange = class {
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
    }
    onInput(e) {
        const input = e.target;
        this.updateValue(input.value);
    }
    onMousedown() {
        if (!this.disabled) {
            this.active = true;
        }
    }
    onMouseup() {
        this.active = false;
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
        this.active = false;
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
        this.updatePosition();
        /**
         * Element references are only created after first reference.
         * Trigger another render after the element references are created to update tooltip property.
         */
        if (this.tooltipElement) {
            forceUpdate(this.root);
        }
    }
    disconnectedCallback() {
        if (this.disabledObserver) {
            this.disabledObserver.disconnect();
        }
        if (this.requiredObserver) {
            this.requiredObserver.disconnect();
        }
        clearInterval(this.valueWatcherId);
    }
    render() {
        return (h(Host, { key: '704aa9e8e576207449de82b964c9b3d25b921914', class: {
                'gux-active': this.active
            } }, h(GuxFormFieldContainer, { key: 'a6a6b949bde45af0deb032e32bb40656e347c745', labelPosition: this.computedLabelPosition }, h(GuxFormFieldLabel, { key: '1d49479d7ffa693dffdfe2198d14e542a165ee1c', required: this.required, position: this.computedLabelPosition }, h("slot", { key: 'c556f745745618de8e456287f7bf554cc317b450', name: "label", onSlotchange: () => this.setLabel() }), h("gux-form-field-label-indicator", { key: '879302e5c9f9525d9a7d77dc1cce1e169d5f96a3', variant: this.indicatorMark, required: this.required }), h("slot", { key: '07981edbf4a7c9cb5da907c969857709a3a7d720', name: "label-info" })), h("div", { key: '19c858be378a68cfeb1a62adb01f59877168385c', class: "gux-input-and-error-container" }, this.renderRangeInput(), h(GuxFormFieldError, { key: 'f7031aafcec8679dbf0c848d052735a557bff3ea', show: this.hasError }, h("slot", { key: '5def458db570387d21ab82be06d4fab06b262ac1', name: "error" })), h(GuxFormFieldHelp, { key: '0f8c192c8f5b3f4cb3ec3af98d96dd8dea796cbf', show: !this.hasError && this.hasHelp }, h("slot", { key: '44f652b4b0a8b468569165737db0faae3f3a25bc', name: "help" }))))));
    }
    get variant() {
        return this.labelPosition ? this.labelPosition.toLowerCase() : 'none';
    }
    setInput() {
        this.input = getSlottedInput(this.root, 'input[type="range"][slot="input"]');
        preventBrowserValidationStyling(this.input);
        this.disabled = calculateInputDisabledState(this.input);
        this.required = this.input.required;
        this.value = this.input.value;
        this.disabledObserver = onInputDisabledStateChange(this.input, (disabled) => {
            this.disabled = disabled;
        });
        this.requiredObserver = onRequiredChange(this.input, (required) => {
            this.required = required;
        });
        clearInterval(this.valueWatcherId);
        this.valueWatcherId = setInterval(() => {
            if (this.value !== this.input.value) {
                this.updateValue(this.input.value);
            }
        }, 100);
        validateFormIds(this.root, this.input);
    }
    setLabel() {
        this.label = this.root.querySelector('label[slot="label"]');
        this.computedLabelPosition = getComputedLabelPosition(this.label, this.labelPosition);
    }
    renderRangeInput() {
        return (h("div", { class: {
                'gux-range-input-container': true,
                'gux-disabled': this.disabled
            }, ref: el => (this.containerElement = el) }, h("div", { class: "gux-range" }, h("div", { class: "gux-track" }, h("div", { class: "gux-progress", ref: el => (this.progressElement = el) })), h("slot", { name: "input" }), this.valueInTooltip && (h("gux-tooltip-base-beta", { ref: el => (this.tooltipElement = el), forElement: this.containerElement, offsetY: 10, placement: "top" }, h("span", { slot: "content" }, this.getDisplayValue())))), h("div", { class: {
                'gux-display': true,
                'gux-hidden': this.valueInTooltip
            } }, this.getDisplayValue())));
    }
    updateValue(newValue) {
        this.value = newValue;
        this.updatePosition();
    }
    updatePosition() {
        var _a, _b, _c;
        const value = Number(((_a = this.input) === null || _a === void 0 ? void 0 : _a.value) || 0);
        const min = Number(((_b = this.input) === null || _b === void 0 ? void 0 : _b.min) || 0);
        const max = Number(((_c = this.input) === null || _c === void 0 ? void 0 : _c.max) || 100);
        const placementPercentage = ((value - min) / (max - min)) * 100;
        if (this.tooltipElement) {
            const thumbDiameter = 20;
            const functionalRangeWidth = this.containerElement.offsetWidth - thumbDiameter;
            const percentFromCenter = placementPercentage / 100 - 0.5;
            this.tooltipElement.offsetX = percentFromCenter * functionalRangeWidth;
        }
        if (this.progressElement) {
            this.progressElement.style.width = `${placementPercentage}%`;
        }
    }
    getDisplayValue() {
        if (this.displayUnits) {
            return `${this.value}${this.displayUnits}`;
        }
        return this.value;
    }
    get root() { return getElement(this); }
};
__decorate([
    OnMutation({ childList: true, subtree: true })
], GuxFormFieldRange.prototype, "onMutation", null);
__decorate([
    OnResize()
], GuxFormFieldRange.prototype, "updatePosition", null);
GuxFormFieldRange.style = guxFormFieldRangeCss;

export { GuxFormFieldRange as gux_form_field_range };
