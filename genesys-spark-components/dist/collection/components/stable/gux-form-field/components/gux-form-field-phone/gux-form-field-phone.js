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
import { trackComponent } from "../../../../../utils/tracking/usage";
import { GuxFormFieldError, GuxFormFieldFieldsetContainer, GuxFormFieldScreenreaderLabel, GuxFormFieldVisualLabel } from "../../functional-components/functional-components";
import { hasSlot } from "../../../../../utils/dom/has-slot";
import { getSlotTextContent } from "../../../../../utils/dom/get-slot-text-content";
import { getComputedLabelPosition, validateFormIds } from "../../gux-form-field.service";
import componentResources from "./i18n/en.json";
import { GuxFormFieldHelp } from "../../functional-components/gux-form-field-help/gux-form-field-help";
/**
 * @slot - Required slot for gux-phone-input-beta tag
 * @slot label - Required slot for label tag
 * @slot error - Optional slot for error message
 * @slot help - Optional slot for help message
 * @slot label-info - Optional slot for label tooltip
 */
export class GuxFormFieldPhone {
    constructor() {
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
    static get is() { return "gux-form-field-phone"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-form-field-phone.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-form-field-phone.css"]
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
], GuxFormFieldPhone.prototype, "onMutation", null);
