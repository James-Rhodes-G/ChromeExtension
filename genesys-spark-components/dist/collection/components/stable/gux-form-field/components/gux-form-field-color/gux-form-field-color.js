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
import { calculateInputDisabledState } from "../../../../../utils/dom/calculate-input-disabled-state";
import { onInputDisabledStateChange } from "../../../../../utils/dom/on-input-disabled-state-change";
import { OnMutation } from "../../../../../utils/decorator/on-mutation";
import { onRequiredChange } from "../../../../../utils/dom/on-attribute-change";
import { preventBrowserValidationStyling } from "../../../../../utils/dom/prevent-browser-validation-styling";
import { hasSlot } from "../../../../../utils/dom/has-slot";
import { GuxFormFieldHelp, GuxFormFieldError, GuxFormFieldLabel, GuxFormFieldContainer } from "../../functional-components/functional-components";
import { getComputedLabelPosition, validateFormIds, getSlottedInput } from "../../gux-form-field.service";
import { trackComponent } from "../../../../../utils/tracking/usage";
/**
 * @slot input - Required slot for input tag
 * @slot label - Required slot for label tag
 * @slot error - Optional slot for error message
 * @slot help - Optional slot for help message
 * @slot label-info - Optional slot for label tooltip
 */
export class GuxFormFieldColor {
    constructor() {
        /**
         * Field indicator mark which can show *, (optional) or blank
         * Defaults to required. When set to required, the component will display * for required fields and blank for optional
         * When set to optional, the component will display (optional) for optional and blank for required.
         */
        this.indicatorMark = 'required';
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
    disconnectedCallback() {
        if (this.disabledObserver) {
            this.disabledObserver.disconnect();
        }
        if (this.requiredObserver) {
            this.requiredObserver.disconnect();
        }
    }
    render() {
        return (h(GuxFormFieldContainer, { key: '9bb0ee43e91d6bc55f14c79bf205615caef36b6f', labelPosition: this.computedLabelPosition }, h(GuxFormFieldLabel, { key: '94e0d29db2d749880f35701ce99aa22015d23325', required: this.required, position: this.computedLabelPosition }, h("slot", { key: '97a0e24aea02d952179317e1453cea220738733e', name: "label", onSlotchange: () => this.setLabel() }), h("gux-form-field-label-indicator", { key: '9efa9064b0e6270f48f756de90d71e5081b6eb3a', variant: this.indicatorMark, required: this.required }), h("slot", { key: 'ea8cce3efc4e54fbb18ca9b498f684457f16166d', name: "label-info" })), h("div", { key: '85730bcafa56972ec24edfff30b7cba3e22e4f7d', class: "gux-input-and-error-container" }, h("div", { key: 'b64c5aaea6f3f16dc9dd05aaca7e4ba4e558a55e', class: {
                'gux-input': true,
                'gux-input-error': this.hasError
            } }, h("div", { key: '41c6dcd864d396fd51ef29c381ffe6d157a950c8', class: {
                'gux-input-container': true,
                'gux-disabled': this.disabled
            } }, h("slot", { key: '0b967d0efd9eca208a40369679725389f4feccb9', name: "input", onSlotchange: () => this.setInput() }))), h(GuxFormFieldError, { key: '03c36ee06dc975ee41dbe176e4c225cf520d3145', show: this.hasError }, h("slot", { key: '5f39c0b374eab15bdc51bcc8d4b66d8099a1bae2', name: "error" })), h(GuxFormFieldHelp, { key: '308153f1fa7f016ea9e724626e335a48171b8722', show: !this.hasError && this.hasHelp }, h("slot", { key: '13d012116faf9688ba1d98b080c545c286d3cb6c', name: "help" })))));
    }
    get variant() {
        return this.labelPosition ? this.labelPosition.toLowerCase() : 'none';
    }
    setInput() {
        this.input = getSlottedInput(this.root, 'input[type="color"][slot="input"]');
        preventBrowserValidationStyling(this.input);
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
    static get is() { return "gux-form-field-color"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-form-field-color.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-form-field-color.css"]
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
            "hasHelp": {}
        };
    }
    static get elementRef() { return "root"; }
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
], GuxFormFieldColor.prototype, "onMutation", null);
