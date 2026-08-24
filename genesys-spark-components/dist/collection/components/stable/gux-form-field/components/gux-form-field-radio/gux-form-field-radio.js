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
import { validateFormIds, getSlottedInput } from "../../gux-form-field.service";
import { trackComponent } from "../../../../../utils/tracking/usage";
/**
 * @slot input - Required slot for input tag
 * @slot label - Required slot for label tag
 * @slot error - Optional slot for error message
 * @slot help - Optional slot for help message
 */
export class GuxFormFieldRadio {
    constructor() {
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
        trackComponent(this.root);
    }
    disconnectedCallback() {
        if (this.disabledObserver) {
            this.disabledObserver.disconnect();
        }
    }
    render() {
        return (h(Host, { key: 'e9b9c79eb41ac2d19d0bcc932f7ec95a199b9903', class: {
                'gux-input-error': this.hasError || this.hasGroupError,
                'gux-disabled': this.disabled
            } }, h("div", { key: '1da2143e7a310bcbc1516e59e15c9b4fd9f26fdd', class: "gux-form-field-container", "aria-disabled": this.disabled ? 'true' : 'false' }, h("div", { key: '93853b97a827184389f35d5b280d11977c099ca8', class: "gux-input-label" }, h("div", { key: '8f0c0905566540f255a83de16db9a89b3421876a', class: "gux-input" }, h("slot", { key: '946aeb85de8bc850756baf6a60e72dc05eff2de6', name: "input", onSlotchange: () => this.setInput() })), h("div", { key: '5b4cdf94ddff3cc059fe5ac76abfa52ca4db01e1', class: "gux-label" }, h("slot", { key: 'aab275c888fc44566fdbeae133e1950addbff70e', name: "label" }))), h("div", { key: '5b06a11563515764b09ce8d66f9c9ed8600f63ba', class: "error-and-help-text" }, h(GuxFormFieldError, { key: 'db447c98e56b06fca8a73c5db54b7a2af8ff0a3c', show: this.hasError }, h("slot", { key: '372a75fe6ac5a8144b5a516049de6d334b4dff44', name: "error" })), h(GuxFormFieldHelp, { key: '1aecda0403524cbf79fa34e572d83d22a9cab2a9', show: !this.hasError && this.hasHelp }, h("slot", { key: '221aae6237ca1072200759a0ee0fe75c0e227e8b', name: "help" }))))));
    }
    setInput() {
        this.input = getSlottedInput(this.root, 'input[type="radio"][slot="input"]');
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
    static get is() { return "gux-form-field-radio"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-form-field-radio.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-form-field-radio.css"]
        };
    }
    static get properties() {
        return {
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
], GuxFormFieldRadio.prototype, "onMutation", null);
