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
import { h } from "@stencil/core";
import { buildI18nForComponent } from "../../../../../i18n";
import { OnMutation } from "../../../../../utils/decorator/on-mutation";
import { onDisabledChange, onRequiredChange } from "../../../../../utils/dom/on-attribute-change";
import { hasSlot } from "../../../../../utils/dom/has-slot";
import { getSlotTextContent } from "../../../../../utils/dom/get-slot-text-content";
import { GuxFormFieldHelp, GuxFormFieldError, GuxFormFieldFieldsetContainer, GuxFormFieldScreenreaderLabel, GuxFormFieldVisualLabel } from "../../functional-components/functional-components";
import { getComputedLabelPosition, validateFormIds } from "../../gux-form-field.service";
import { trackComponent } from "../../../../../utils/tracking/usage";
import componentResources from "./i18n/en.json";
/**
 * @slot Required slot for gux-time-zone-picker-beta tag
 * @slot label - Required slot for label tag
 * @slot error - Optional slot for error message
 * @slot help - Optional slot for help message
 * @slot label-info - Optional slot for label tooltip
 */
export class GuxFormFieldTimeZonePicker {
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
        this.hasLabelInfo = false;
    }
    watchValue(hasError) {
        const timeZonePickerSlot = this.root.querySelector('gux-time-zone-picker-beta');
        if (timeZonePickerSlot) {
            timeZonePickerSlot.hasError = hasError;
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
        if (this.disabledObserver) {
            this.disabledObserver.disconnect();
        }
        if (this.requiredObserver) {
            this.requiredObserver.disconnect();
        }
    }
    render() {
        var _a;
        return (h(GuxFormFieldFieldsetContainer, { key: '8021fd2c7190564cf28210b0e7141e051d4468e7', labelPosition: this.computedLabelPosition }, h(GuxFormFieldScreenreaderLabel, { key: '8036179008298d39417ad34b64f9d216a40740bd' }, (_a = this.label) === null || _a === void 0 ? void 0 :
            _a.textContent, this.renderText(this.getI18nValue('required'), this.required), this.renderText(getSlotTextContent(this.root, 'error'), this.hasError), this.renderText(getSlotTextContent(this.root, 'label-info'), this.hasLabelInfo)), h(GuxFormFieldVisualLabel, { key: 'cc8145669ae9258493c3cc4d6995ea65190bd325', position: this.computedLabelPosition, required: this.required }, h("slot", { key: '4869a073924cc524b3bdcd1cd8d1c1e2725c6b17', name: "label", onSlotchange: () => this.setLabel() }), h("gux-form-field-label-indicator", { key: '50a1e3f905e392d8813b987457e9cf507e2fed1a', variant: this.indicatorMark, required: this.required }), h("slot", { key: '25cd4be3bf7906da2a99d6cdc7023cebbc3afb1b', name: "label-info" })), h("slot", { key: '192555f7bea53987d464d8d1bc0c70d815a93c91', name: "label-info" }), h("div", { key: '45c0c71fa8a3379446deb5dde6019a8a5a94e2fe', class: "gux-input-and-error-container" }, h("div", { key: '4999945a55ecc936d686e3839e7c68d3994ca3ae', class: {
                'gux-input': true,
                'gux-input-error': this.hasError,
                'gux-time-zone-picker-container': true,
                'gux-disabled': this.disabled
            } }, h("slot", { key: '317cbdecb53e5bd3031e1fd370ed881659cbac21' })), h(GuxFormFieldError, { key: 'c792f6017ee9c3a3c003be19023538ce2cf7b482', show: this.hasError }, h("slot", { key: 'edb2dc0ac5a7b21b79a11fc064abb9cb23f8d8ae', name: "error" })), h(GuxFormFieldHelp, { key: '998daf7b1a75da360eff441d7137cf04c04a5248', show: !this.hasError && this.hasHelp }, h("slot", { key: '6d28f8c56bb8da39142173618e1b1fb74192d914', name: "help" })))));
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
        const type = 'timeZonePicker';
        return `${type}-${labelPositionVariant}`;
    }
    setInput() {
        this.input = this.root.querySelector('gux-time-zone-picker-beta');
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
    static get is() { return "gux-form-field-time-zone-picker"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-form-field-time-zone-picker.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-form-field-time-zone-picker.css"]
        };
    }
    static get properties() {
        return {
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
            "hasLabelInfo": {}
        };
    }
    static get elementRef() { return "root"; }
    static get watchers() {
        return [{
                "propName": "hasError",
                "methodName": "watchValue"
            }];
    }
    static get listeners() {
        return [{
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
], GuxFormFieldTimeZonePicker.prototype, "onMutation", null);
