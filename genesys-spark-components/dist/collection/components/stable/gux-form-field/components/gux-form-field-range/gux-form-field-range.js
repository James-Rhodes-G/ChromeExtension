var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { forceUpdate, h, Host } from "@stencil/core";
import { calculateInputDisabledState } from "../../../../../utils/dom/calculate-input-disabled-state";
import { onInputDisabledStateChange } from "../../../../../utils/dom/on-input-disabled-state-change";
import { OnMutation } from "../../../../../utils/decorator/on-mutation";
import { onRequiredChange } from "../../../../../utils/dom/on-attribute-change";
import { preventBrowserValidationStyling } from "../../../../../utils/dom/prevent-browser-validation-styling";
import { hasSlot } from "../../../../../utils/dom/has-slot";
import { GuxFormFieldHelp, GuxFormFieldError, GuxFormFieldLabel, GuxFormFieldContainer } from "../../functional-components/functional-components";
import { getComputedLabelPosition, validateFormIds, getSlottedInput } from "../../gux-form-field.service";
import { trackComponent } from "../../../../../utils/tracking/usage";
import { OnResize } from "../../../../../utils/decorator/on-resize";
/**
 * @slot input - Required slot for input tag
 * @slot label - Required slot for label tag
 * @slot error - Optional slot for error message
 * @slot help - Optional slot for help message
 * @slot label-info - Optional slot for label tooltip
 */
export class GuxFormFieldRange {
    constructor() {
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
    static get is() { return "gux-form-field-range"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-form-field-range.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-form-field-range.css"]
        };
    }
    static get properties() {
        return {
            "displayUnits": {
                "type": "string",
                "attribute": "display-units",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "valueInTooltip": {
                "type": "boolean",
                "attribute": "value-in-tooltip",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "labelPosition": {
                "type": "string",
                "attribute": "label-position",
                "mutable": false,
                "complexType": {
                    "original": "GuxFormFieldLabelPosition",
                    "resolved": "\"above\" | \"beside\" | \"screenreader\"",
                    "references": {
                        "GuxFormFieldLabelPosition": {
                            "location": "import",
                            "path": "../../gux-form-field.types",
                            "id": "src/components/stable/gux-form-field/gux-form-field.types.ts::GuxFormFieldLabelPosition"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "indicatorMark": {
                "type": "string",
                "attribute": "indicator-mark",
                "mutable": false,
                "complexType": {
                    "original": "GuxFormFieldIndicatorMark",
                    "resolved": "\"none\" | \"optional\" | \"required\"",
                    "references": {
                        "GuxFormFieldIndicatorMark": {
                            "location": "import",
                            "path": "../../gux-form-field.types",
                            "id": "src/components/stable/gux-form-field/gux-form-field.types.ts::GuxFormFieldIndicatorMark"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Field indicator mark which can show *, (optional) or blank\nDefaults to required. When set to required, the component will display * for required fields and blank for optional\nWhen set to optional, the component will display (optional) for optional and blank for required."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'required'"
            }
        };
    }
    static get states() {
        return {
            "computedLabelPosition": {},
            "disabled": {},
            "required": {},
            "hasError": {},
            "hasHelp": {},
            "value": {},
            "active": {},
            "valueWatcherId": {}
        };
    }
    static get elementRef() { return "root"; }
    static get listeners() {
        return [{
                "name": "input",
                "method": "onInput",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "focusin",
                "method": "onMousedown",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "mousedown",
                "method": "onMousedown",
                "target": undefined,
                "capture": false,
                "passive": true
            }, {
                "name": "mouseup",
                "method": "onMouseup",
                "target": undefined,
                "capture": false,
                "passive": true
            }, {
                "name": "keyup",
                "method": "handleKeyup",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "focusout",
                "method": "onFocusout",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
__decorate([
    OnMutation({ childList: true, subtree: true })
], GuxFormFieldRange.prototype, "onMutation", null);
__decorate([
    OnResize()
], GuxFormFieldRange.prototype, "updatePosition", null);
