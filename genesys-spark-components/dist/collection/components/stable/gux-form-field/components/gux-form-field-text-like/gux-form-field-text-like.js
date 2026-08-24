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
import { calculateInputDisabledState } from "../../../../../utils/dom/calculate-input-disabled-state";
import { onInputDisabledStateChange } from "../../../../../utils/dom/on-input-disabled-state-change";
import { OnMutation } from "../../../../../utils/decorator/on-mutation";
import { onRequiredChange } from "../../../../../utils/dom/on-attribute-change";
import { preventBrowserValidationStyling } from "../../../../../utils/dom/prevent-browser-validation-styling";
import { hasSlot } from "../../../../../utils/dom/has-slot";
import { GuxFormFieldHelp, GuxFormFieldError, GuxFormFieldLabel, GuxFormFieldContainer } from "../../functional-components/functional-components";
import { clearInput, hasContent, getComputedLabelPosition, validateFormIds, setSlotAriaDescribedby, getSlottedInput } from "../../gux-form-field.service";
import { trackComponent } from "../../../../../utils/tracking/usage";
import { focusInputElement } from "../../../../../utils/dom/focus-input-element";
/**
 * @slot input - Required slot for input tag
 * @slot label - Required slot for label tag
 * @slot prefix - Optional slot for prefix
 * @slot suffix - Optional slot for suffix
 * @slot error - Optional slot for error message
 * @slot help - Optional slot for help message
 * @slot label-info - Optional slot for label tooltip
 */
export class GuxFormFieldTextLike {
    constructor() {
        this.loading = false;
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
    renderRadialLoading() {
        if (this.loading) {
            return (h("div", { role: "status" }, h("gux-radial-loading", { context: "input" })));
        }
    }
    componentWillLoad() {
        this.setInput();
        this.setLabel();
        this.labelInfo = this.root.querySelector('[slot=label-info]');
        this.hasError = hasSlot(this.root, 'error');
        this.hasHelp = hasSlot(this.root, 'help');
        this.hasPrefix = Boolean(this.root.querySelector('[slot="prefix"]'));
        this.hasSuffix = Boolean(this.root.querySelector('[slot="suffix"]'));
        if (this.hasPrefix) {
            setSlotAriaDescribedby(this.root, this.input, 'prefix');
        }
        if (this.hasSuffix) {
            setSlotAriaDescribedby(this.root, this.input, 'suffix');
        }
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
        return (h(GuxFormFieldContainer, { key: '6e268f9b2f5cdefcf05f51b95bbdabfc7f90a58b', labelPosition: this.computedLabelPosition }, h(GuxFormFieldLabel, { key: '8da38ac30c89cc7f4a6d7a9ca95096622354f786', required: this.required, position: this.computedLabelPosition }, h("slot", { key: 'f4f8cb4dd7165fab77df91759603cf2a67b9d967', name: "label", onSlotchange: () => this.setLabel() }), h("gux-form-field-label-indicator", { key: 'b742165e6f2ae4bae2527cf2e23fc02793ae8b92', variant: this.indicatorMark, required: this.required }), h("slot", { key: 'c86c3d5580a44bfc070d801f85797333c68340df', name: "label-info" })), h("div", { key: '97a46a9562bf08388684e4c13781cbc67ffa00b4', class: "gux-input-and-error-container" }, h("div", { key: 'faa6d68074db30e416db0f0712467e10322d5551', class: {
                'gux-input': true,
                'gux-input-error': this.hasError
            } }, h("div", { key: 'f29ddc3ae15dab4002423197ce745426a9b81989', class: {
                'gux-input-container': true,
                'gux-disabled': this.disabled,
                'gux-has-prefix': this.hasPrefix,
                'gux-has-suffix': this.hasSuffix
            }, onClick: () => focusInputElement(this.input) }, h("slot", { key: '159068cc7389df4caa747e849b3443b6a8e68525', name: "prefix" }), h("slot", { key: 'a1a529019ed80868047a04eeade0257efafff654', name: "input" }), this.renderRadialLoading(), h("slot", { key: 'ed703884556dd9302248d1c3a25fcb8bed8ac661', name: "suffix" }), this.clearable && this.hasContent && !this.disabled && (h("gux-form-field-input-clear-button", { key: '7f47627751268f2703b3246884ecf1ba4a719cb6', onClick: () => clearInput(this.input) })))), h(GuxFormFieldError, { key: '243eba4b6bb5dbfba50e68b376f9df5dd1352e72', show: this.hasError }, h("slot", { key: '77f90dec9b23318b005379b5c35c66b922b3c6bb', name: "error" })), h(GuxFormFieldHelp, { key: '48da44761dc115f5f1f451a7a61f338098ea0e93', show: !this.hasError && this.hasHelp }, h("slot", { key: '4355d3580e354d94639d8ceeaf0d862172bb0fb7', name: "help" })))));
    }
    get variant() {
        const labelPositionVariant = this.labelPosition
            ? this.labelPosition.toLowerCase()
            : 'none';
        const typeVariant = this.input.getAttribute('type');
        const clearableVariant = this.clearable ? 'clearable' : 'unclearable';
        return `${typeVariant}-${clearableVariant}-${labelPositionVariant}`;
    }
    setInput() {
        this.input = getSlottedInput(this.root, 'input[type="email"][slot="input"], input[type="number"][slot="input"], input[type="password"][slot="input"], input[type="text"][slot="input"]');
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
    static get is() { return "gux-form-field-text-like"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-form-field-text-like.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-form-field-text-like.css"]
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
            "loading": {
                "type": "boolean",
                "attribute": "loading",
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
                "reflect": false,
                "defaultValue": "false"
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
            "hasPrefix": {},
            "hasSuffix": {},
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
], GuxFormFieldTextLike.prototype, "onMutation", null);
