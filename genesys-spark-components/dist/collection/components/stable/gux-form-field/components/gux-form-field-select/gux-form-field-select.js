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
export class GuxFormFieldSelect {
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
        return (h(GuxFormFieldContainer, { key: 'b6ce224a4b33a6a2d3a950494d34ae3844e9c0a7', labelPosition: this.computedLabelPosition }, h(GuxFormFieldLabel, { key: '01336b42268cbe502fb800dcaf5e7b18c1c200b6', required: this.required, position: this.computedLabelPosition }, h("slot", { key: 'b08d39ff081c8bf5b832874738ebc3cdbb944ff4', name: "label", onSlotchange: () => this.setLabel() }), h("gux-form-field-label-indicator", { key: '96a20d06e3ead1697adb52cdd0ccfb71bdb7be66', variant: this.indicatorMark, required: this.required }), h("slot", { key: '68a80e71e4ca4e92c0fe6d1e00fedda401c1e3b3', name: "label-info" })), h("div", { key: '4d45d92191e7054e2540bd27ced7c19d2adc4be8', class: "gux-input-and-error-container" }, h("div", { key: '95df686d8f03b2dd4e22a4e9703ad8c96558ea85', class: {
                'gux-input': true,
                'gux-input-error': this.hasError
            } }, h("div", { key: '25ecbf15b554772fbb9b49d85c1bd11dab27471b', class: {
                'gux-input-container': true,
                'gux-disabled': this.disabled
            } }, h("slot", { key: '62a0c05ec3535f0e7b34194ea219c482e4f2c0e7', name: "input" }), h("gux-icon", { key: '9de257807857681d39181e538ceaff0446fc818b', "icon-name": "custom/chevron-down-small-regular", decorative: true, size: "small" }))), h(GuxFormFieldError, { key: '7dfe214d32e27283fcfc5b66104e4ae8b98fce74', show: this.hasError }, h("slot", { key: '502d6075ab0b2d19bffec4563f737ea9ed77feed', name: "error" })), h(GuxFormFieldHelp, { key: '14a7b1a64d1b6d25f531cd9b3d08316742510c2d', show: !this.hasError && this.hasHelp }, h("slot", { key: '543d618d86f2a83229ef0fe0489c9f5ead55baea', name: "help" })))));
    }
    get variant() {
        const labelPositionVariant = this.labelPosition
            ? this.labelPosition.toLowerCase()
            : 'none';
        const type = this.input.getAttribute('type');
        return `${type}-${labelPositionVariant}`;
    }
    setInput() {
        this.input = this.root.querySelector('select[slot="input"]');
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
    static get is() { return "gux-form-field-select"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-form-field-select.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-form-field-select.css"]
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
], GuxFormFieldSelect.prototype, "onMutation", null);
