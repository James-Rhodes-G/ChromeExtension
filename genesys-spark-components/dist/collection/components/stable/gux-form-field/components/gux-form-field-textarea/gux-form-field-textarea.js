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
import { getComputedLabelPosition, validateFormIds } from "../../gux-form-field.service";
import { trackComponent } from "../../../../../utils/tracking/usage";
/**
 * @slot input - Required slot for input tag
 * @slot label - Required slot for label tag
 * @slot error - Optional slot for error message
 * @slot help - Optional slot for help message
 * @slot label-info - Optional slot for label tooltip
 */
export class GuxFormFieldTextarea {
    constructor() {
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
    static get is() { return "gux-form-field-textarea"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-form-field-textarea.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-form-field-textarea.css"]
        };
    }
    static get properties() {
        return {
            "resize": {
                "type": "string",
                "attribute": "resize",
                "mutable": false,
                "complexType": {
                    "original": "GuxFormFieldTextAreaResize",
                    "resolved": "\"auto\" | \"manual\" | \"none\"",
                    "references": {
                        "GuxFormFieldTextAreaResize": {
                            "location": "import",
                            "path": "./gux-form-field-textarea.types",
                            "id": "src/components/stable/gux-form-field/components/gux-form-field-textarea/gux-form-field-textarea.types.ts::GuxFormFieldTextAreaResize"
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
], GuxFormFieldTextarea.prototype, "onMutation", null);
