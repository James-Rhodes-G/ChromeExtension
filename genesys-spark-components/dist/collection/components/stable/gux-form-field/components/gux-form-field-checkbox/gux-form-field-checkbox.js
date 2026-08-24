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
import { h, Host } from "@stencil/core";
import { calculateInputDisabledState } from "../../../../../utils/dom/calculate-input-disabled-state";
import { onInputDisabledStateChange } from "../../../../../utils/dom/on-input-disabled-state-change";
import { OnMutation } from "../../../../../utils/decorator/on-mutation";
import { preventBrowserValidationStyling } from "../../../../../utils/dom/prevent-browser-validation-styling";
import { hasSlot } from "../../../../../utils/dom/has-slot";
import { GuxFormFieldError, GuxFormFieldHelp } from "../../functional-components/functional-components";
import { trackComponent } from "../../../../../utils/tracking/usage";
import { validateFormIds, getSlottedInput } from "../../gux-form-field.service";
/**
 * @slot input - Required slot for input tag
 * @slot label - Required slot for label tag
 * @slot error - Optional slot for error message
 * @slot help - Optional slot for help message
 */
export class GuxFormFieldCheckbox {
    constructor() {
        this.labelPosition = 'beside';
        this.hasHelp = false;
        this.hasError = false;
        this.hasGroupError = false;
        this.hasGroupDisabled = false;
    }
    onMutation() {
        this.hasError = hasSlot(this.root, 'error');
        this.hasHelp = hasSlot(this.root, 'help');
    }
    componentWillLoad() {
        this.setInput();
        this.hasError = hasSlot(this.root, 'error');
        this.hasHelp = hasSlot(this.root, 'help');
        trackComponent(this.root, { variant: this.variant });
    }
    disconnectedCallback() {
        if (this.disabledObserver) {
            this.disabledObserver.disconnect();
        }
    }
    render() {
        return (h(Host, { key: '9b37ae14b5aa5d2904c22ffcf8393a2d845dc4d4', class: {
                'gux-input-error': this.hasError || this.hasGroupError,
                'gux-disabled': this.disabled
            } }, h("div", { key: '88dcd1250fae77eb5dce53948b529bdbf7d2a305', class: "gux-form-field-container", "aria-disabled": this.disabled ? 'true' : 'false' }, h("div", { key: 'f1286e98b0c3e00b42c97f171f9e0050d5b13ee4', class: "gux-input-label" }, h("div", { key: '1884ee7889b14035720aee337ddf9de0d9d1d1b4', class: "gux-input" }, h("slot", { key: 'cc7e9eb9a01cb65e48b93d1acd53f0aeba2b3d4d', name: "input", onSlotchange: () => this.setInput() })), h("div", { key: '8427792713aa87fd81f71ec3d206cb1723083f77', class: `gux-label-${this.labelPosition}`, "aria-disabled": this.disabled ? 'true' : 'false' }, h("slot", { key: '378f25400af0eb3243918c677435746e41035576', name: "label" }))), h("div", { key: '5af392b1b7a9f2340deda557b9b4c8cb44c80623', class: "error-and-help-text" }, h(GuxFormFieldError, { key: '2f04e17d935c9368401fc6bb6521a070b646910b', show: this.hasError }, h("slot", { key: 'cc324117414007141e0205fad334897811c5f80b', name: "error" })), h(GuxFormFieldHelp, { key: '4f918830189307a41cbfa00893015102ca5136f4', show: !this.hasError && this.hasHelp }, h("slot", { key: '1b464e2b2ea883e46cf2ff7b4d12baef04f2d444', name: "help" }))))));
    }
    get variant() {
        return this.labelPosition.toLowerCase();
    }
    setInput() {
        this.input = getSlottedInput(this.root, 'input[type="checkbox"][slot="input"]');
        if (this.hasGroupDisabled) {
            this.input.disabled = true;
        }
        preventBrowserValidationStyling(this.input);
        this.disabled = calculateInputDisabledState(this.input);
        this.disabledObserver = onInputDisabledStateChange(this.input, (disabled) => {
            this.disabled = disabled;
        });
        validateFormIds(this.root, this.input);
    }
    static get is() { return "gux-form-field-checkbox"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-form-field-checkbox.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-form-field-checkbox.css"]
        };
    }
    static get properties() {
        return {
            "labelPosition": {
                "type": "string",
                "attribute": "label-position",
                "mutable": false,
                "complexType": {
                    "original": "'beside' | 'screenreader'",
                    "resolved": "\"beside\" | \"screenreader\"",
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
                "defaultValue": "'beside'"
            },
            "hasGroupError": {
                "type": "boolean",
                "attribute": "has-group-error",
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
            "hasGroupDisabled": {
                "type": "boolean",
                "attribute": "has-group-disabled",
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
            }
        };
    }
    static get states() {
        return {
            "disabled": {},
            "hasHelp": {},
            "hasError": {}
        };
    }
    static get elementRef() { return "root"; }
}
__decorate([
    OnMutation({ childList: true, subtree: true })
], GuxFormFieldCheckbox.prototype, "onMutation", null);
