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
 * @slot Required slot for gux-time-picker tag
 * @slot label - Required slot for label tag
 * @slot error - Optional slot for error message
 * @slot help - Optional slot for help message
 * @slot label-info - Optional slot for label tooltip
 */
export class GuxFormFieldTimePicker {
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
        const timePickerSlot = this.root.querySelector('gux-time-picker');
        if (timePickerSlot) {
            timePickerSlot.hasError = hasError;
        }
    }
    onMutation() {
        this.labelInfo = this.root.querySelector('[slot=label-info]');
        this.hasError = hasSlot(this.root, 'error');
        this.hasHelp = hasSlot(this.root, 'help');
    }
    handleKeyup(event) {
        var _a;
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
        return (h(GuxFormFieldFieldsetContainer, { key: 'e5ab32131a3844ad93870a33d351da143a222c6b', labelPosition: this.computedLabelPosition }, h(GuxFormFieldScreenreaderLabel, { key: '4d7cb96a26b7b31a8383d22e6e4df8a9723099cf' }, (_a = this.label) === null || _a === void 0 ? void 0 :
            _a.textContent, this.renderText(this.getI18nValue('required'), this.required), this.renderText(getSlotTextContent(this.root, 'error'), this.hasError), this.renderText(getSlotTextContent(this.root, 'label-info'), this.hasLabelInfo)), h(GuxFormFieldVisualLabel, { key: 'bc421902a00a0ab3d5b5592c41e2195455b191a6', position: this.computedLabelPosition, required: this.required }, h("slot", { key: '647bdf0750f5b4a016ee3982a915f93ccee5ec4b', name: "label", onSlotchange: () => this.setLabel() }), h("gux-form-field-label-indicator", { key: '0ee6eaa080a98eddc3da07793eb7fbdbf9957a1f', variant: this.indicatorMark, required: this.required }), h("slot", { key: '366b6e3430380f2afb2a1b50fdbd15acaf641da2', name: "label-info" })), h("div", { key: 'b7c79d73f8d74c0c47a5cf3b294116637a1946d7', class: "gux-input-and-error-container" }, h("div", { key: 'aebc1a7a98b438fa5ff5495a74959e60e27a6ce5', class: {
                'gux-input': true,
                'gux-input-error': this.hasError
            } }, h("div", { key: 'a31bf94ed550ed8725857a549033f5853f169a63', class: {
                'gux-time-picker-container': true,
                'gux-disabled': this.disabled
            } }, h("slot", { key: 'bafbf7a6865c062092c0be4381d2c7888c41db10' }))), h(GuxFormFieldError, { key: '9f5eaba5a3aa7cf29495e7f53d6d6460dd15636b', show: this.hasError }, h("slot", { key: '967f2ffe29b5d418724df96a0a1a11cd55866eae', name: "error" })), h(GuxFormFieldHelp, { key: '740561aa70b2112decc2c101752ac2ea57fb4080', show: !this.hasError && this.hasHelp }, h("slot", { key: '6a6b6fb5d2878afa127c9bf9665680869086a251', name: "help" })))));
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
        const type = 'timePicker';
        return `${type}-${labelPositionVariant}`;
    }
    setInput() {
        this.input = this.root.querySelector('gux-time-picker');
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
    static get is() { return "gux-form-field-time-picker"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-form-field-time-picker.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-form-field-time-picker.css"]
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
], GuxFormFieldTimePicker.prototype, "onMutation", null);
