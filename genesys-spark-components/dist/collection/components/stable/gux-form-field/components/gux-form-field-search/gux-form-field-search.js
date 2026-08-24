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
import { h, forceUpdate } from "@stencil/core";
import { calculateInputDisabledState } from "../../../../../utils/dom/calculate-input-disabled-state";
import { onInputDisabledStateChange } from "../../../../../utils/dom/on-input-disabled-state-change";
import { OnMutation } from "../../../../../utils/decorator/on-mutation";
import { onRequiredChange } from "../../../../../utils/dom/on-attribute-change";
import { preventBrowserValidationStyling } from "../../../../../utils/dom/prevent-browser-validation-styling";
import { hasSlot } from "../../../../../utils/dom/has-slot";
import { GuxFormFieldHelp, GuxFormFieldError, GuxFormFieldLabel, GuxFormFieldContainer } from "../../functional-components/functional-components";
import { clearInput, hasContent, getComputedLabelPosition, validateFormIds, getSlottedInput } from "../../gux-form-field.service";
import { trackComponent } from "../../../../../utils/tracking/usage";
import { focusInputElement } from "../../../../../utils/dom/focus-input-element";
/**
 * @slot input - Required slot for input tag
 * @slot label - Required slot for label tag
 * @slot error - Optional slot for error message
 * @slot help - Optional slot for help message
 * @slot label-info - Optional slot for label tooltip
 */
export class GuxFormFieldSearch {
    constructor() {
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
    static get is() { return "gux-form-field-search"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-form-field-search.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-form-field-search.css"]
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
            "clearable": {},
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
], GuxFormFieldSearch.prototype, "onMutation", null);
