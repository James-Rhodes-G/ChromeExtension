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
import { forceUpdate, h } from "@stencil/core";
import { buildI18nForComponent } from "../../../../../i18n";
import { calculateInputDisabledState } from "../../../../../utils/dom/calculate-input-disabled-state";
import { onInputDisabledStateChange } from "../../../../../utils/dom/on-input-disabled-state-change";
import { OnMutation } from "../../../../../utils/decorator/on-mutation";
import { onRequiredChange } from "../../../../../utils/dom/on-attribute-change";
import { preventBrowserValidationStyling } from "../../../../../utils/dom/prevent-browser-validation-styling";
import setInputValue from "../../../../../utils/dom/set-input-value";
import simulateNativeEvent from "../../../../../utils/dom/simulate-native-event";
import { hasSlot } from "../../../../../utils/dom/has-slot";
import { GuxFormFieldHelp, GuxFormFieldError, GuxFormFieldLabel, GuxFormFieldContainer } from "../../functional-components/functional-components";
import { clearInput, getComputedLabelPosition, hasContent, validateFormIds, getSlottedInput } from "../../gux-form-field.service";
import { trackComponent } from "../../../../../utils/tracking/usage";
import componentResources from "./i18n/en.json";
import { focusInputElement } from "../../../../../utils/dom/focus-input-element";
/**
 * @slot input - Required slot for input tag
 * @slot label - Required slot for label tag
 * @slot error - Optional slot for error message
 * @slot help - Optional slot for help message
 * @part input-section - Style input container
 * @slot label-info - Optional slot for label tooltip
 */
export class GuxFormFieldNumber {
    constructor() {
        /**
         * Field indicator mark which can show *, (optional) or blank
         * Defaults to required. When set to required, the component will display * for required fields and blank for optional
         * When set to optional, the component will display (optional) for optional and blank for required.
         */
        this.indicatorMark = 'required';
        this.computedLabelPosition = 'above';
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
    async componentWillLoad() {
        this.getI18nValue = await buildI18nForComponent(this.root, componentResources);
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
        const showClearButton = this.clearable && this.hasContent && !this.disabled;
        return (h(GuxFormFieldContainer, { key: 'edb6b56da16df96351ddb058dddb8d9b14e14392', labelPosition: this.computedLabelPosition }, h(GuxFormFieldLabel, { key: 'f6ea1699ba8db6572769e468fd1c97b8d305f28a', required: this.required, position: this.computedLabelPosition }, h("slot", { key: 'cdb3dc75c64bbfcadc13def9dab2d310e392d8fa', name: "label", onSlotchange: () => this.setLabel() }), h("gux-form-field-label-indicator", { key: 'c49ba227f4d66e5418b0c21f9e7f5c1bb6e48212', variant: this.indicatorMark, required: this.required }), h("slot", { key: '55aa21efa1f278a0e816e5c27ee99ce926dca80b', name: "label-info" })), h("div", { key: '73d9ce4436dd94c458c281ac9a288b6c101cbac9', class: "gux-input-and-error-container" }, h("div", { key: 'ef7d9d1f4e5be99d839ad69b6be888a208eed405', class: {
                'gux-input': true,
                'gux-input-error': this.hasError
            }, part: "input-section" }, h("div", { key: '2611ee74b88f36ea13e737a9ca2628ce239c2723', class: {
                'gux-input-container': true,
                'gux-disabled': this.disabled,
                'gux-clear': showClearButton
            }, onClick: () => focusInputElement(this.input) }, h("slot", { key: 'ce295da6ddf992d86bd463ddf8145bdfdfb67788', name: "input", onSlotchange: () => this.setInput() }), showClearButton && (h("gux-form-field-input-clear-button", { key: '7b2083a27f83ab12bca4dc3f9741029d03ab09eb', onClick: () => clearInput(this.input) }))), this.renderStepButtons(this.input, this.getI18nValue, this.disabled)), h(GuxFormFieldError, { key: 'e319a958a910322f1e5ea30eba226cd50fbf494e', show: this.hasError }, h("slot", { key: '60bbbecb56a2c6e97e85f2a032853f561e946c9c', name: "error" })), h(GuxFormFieldHelp, { key: '33279665977b056a4d17a515cfdfb11b7fd45016', show: !this.hasError && this.hasHelp }, h("slot", { key: 'eb112d1eacfd8b341a8ef72a2e1e4b673f6e6ff9', name: "help" })))));
    }
    get variant() {
        const labelPositionVariant = this.labelPosition
            ? this.labelPosition.toLowerCase()
            : 'none';
        const clearableVariant = this.clearable ? 'clearable' : 'unclearable';
        return `${clearableVariant}-${labelPositionVariant}`;
    }
    setInput() {
        this.input = getSlottedInput(this.root, 'input[type="number"][slot="input"]');
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
    renderStepButtons(input, getI18nValue, disabled) {
        return (h("div", { class: "gux-step-buttons-container" }, h("button", { class: "gux-step-button", tabIndex: -1, type: "button", title: getI18nValue('increment'), disabled: disabled, onClick: () => this.stepUp(input) }, h("gux-icon", { "icon-name": "custom/chevron-up-small-regular", decorative: true })), h("button", { class: "gux-step-button", tabIndex: -1, type: "button", title: getI18nValue('decrement'), disabled: disabled, onClick: () => this.stepDown(input) }, h("gux-icon", { "icon-name": "custom/chevron-down-small-regular", decorative: true }))));
    }
    stepDown(input) {
        if (input.value === '') {
            setInputValue(input, input.min || '0', false);
        }
        else {
            input.stepDown();
            this.simulateNativeInputAndChangeEvents(input);
        }
    }
    stepUp(input) {
        if (input.value === '') {
            setInputValue(input, input.min || '0', false);
        }
        else {
            input.stepUp();
            this.simulateNativeInputAndChangeEvents(input);
        }
    }
    simulateNativeInputAndChangeEvents(input) {
        simulateNativeEvent(input, 'input');
        simulateNativeEvent(input, 'change');
    }
    static get is() { return "gux-form-field-number"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-form-field-number.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-form-field-number.css"]
        };
    }
    static get properties() {
        return {
            "clearable": {
                "type": "boolean",
                "attribute": "clearable",
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
            "hasContent": {},
            "hasError": {},
            "hasHelp": {}
        };
    }
    static get methods() {
        return {
            "guxForceUpdate": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
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
], GuxFormFieldNumber.prototype, "onMutation", null);
