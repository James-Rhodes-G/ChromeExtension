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
import { OnMutation } from "../../../../../utils/decorator/on-mutation";
import { hasSlot } from "../../../../../utils/dom/has-slot";
import { trackComponent } from "../../../../../utils/tracking/usage";
import { GuxFormFieldError, GuxFormFieldContainer, GuxFormFieldHelp, GuxFormFieldLabel } from "../../functional-components/functional-components";
import { getComputedLabelPosition, getSlottedInput, validateFormIds } from "../../gux-form-field.service";
import { preventBrowserValidationStyling } from "../../../../../utils/dom/prevent-browser-validation-styling";
import { onRequiredChange } from "../../../../../utils/dom/on-attribute-change";
/**
 * @slot input - Required slot for input tag
 * @slot label - Required slot for label tag
 * @slot error - Optional slot for error message
 * @slot help - Optional slot for help message
 * @slot label-info - Optional slot for tooltip
 */
export class GuxFormFieldFile {
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
        this.required = false;
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
        this.hasError = hasSlot(this.root, 'error');
        this.hasHelp = hasSlot(this.root, 'help');
        this.labelInfo = this.root.querySelector('[slot=label-info]');
        trackComponent(this.root, { variant: this.variant });
    }
    disconnectedCallback() {
        if (this.requiredObserver) {
            this.requiredObserver.disconnect();
        }
    }
    setLabel() {
        this.label = this.root.querySelector('label[slot="label"]');
        this.computedLabelPosition = getComputedLabelPosition(this.label, this.labelPosition);
    }
    setInput() {
        this.input = getSlottedInput(this.root, 'input[type="file"][slot="input"]');
        preventBrowserValidationStyling(this.input);
        this.required = this.input.required;
        this.requiredObserver = onRequiredChange(this.input, (required) => {
            this.required = required;
        });
        validateFormIds(this.root, this.input);
    }
    get variant() {
        const labelPositionVariant = this.labelPosition
            ? this.labelPosition.toLowerCase()
            : 'none';
        const type = 'fileInput';
        return `${type}-${labelPositionVariant}`;
    }
    render() {
        return (h(GuxFormFieldContainer, { key: 'c81fbfa48e90ff635a168d726efb0317912e8eec', labelPosition: this.computedLabelPosition }, h(GuxFormFieldLabel, { key: 'df4978a1e3d8b36f15f6a38194513a4dc3608a38', position: this.computedLabelPosition, required: this.required }, h("slot", { key: 'bcb8e39bf89e2a56ae2863d9fdececb28450aa29', name: "label", onSlotchange: () => this.setLabel() }), h("gux-form-field-label-indicator", { key: '27fe84a8081016d09788b5f054fa37cda4f5673b', variant: this.indicatorMark, required: this.required }), h("slot", { key: 'faffd8212a5705085e9c279cd8b5dc209bc95b67', name: "label-info" })), h("div", { key: '92e9275b73d2952e66e0409ebc9dbe933b591c1c', class: "gux-input-and-error-container" }, h("slot", { key: '976de47774150f01eab0302f77818917fcc8c5a6', name: "input", onSlotchange: () => this.setInput() }), h(GuxFormFieldError, { key: '73113ae0f0e5447df7466f0cfb77ced4d9177078', show: this.hasError }, h("slot", { key: 'c55abb34569f8e1ac336698613f8846df65a35f7', name: "error" })), h(GuxFormFieldHelp, { key: '89df5ee890bffc28be97e4181e5450bfdb97bd91', show: !this.hasError && this.hasHelp }, h("slot", { key: '0f5a5a4124ae5bfbf8988ecd3710dd66428416cf', name: "help" })))));
    }
    static get is() { return "gux-form-field-file"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-form-field-file.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-form-field-file.css"]
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
            "hasError": {},
            "hasHelp": {},
            "required": {}
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
], GuxFormFieldFile.prototype, "onMutation", null);
