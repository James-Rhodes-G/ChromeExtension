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
import { buildI18nForComponent } from "../../../../../i18n";
import { GuxFormFieldError, GuxFormFieldHelp, GuxFormFieldScreenreaderLabel, GuxFormFieldFieldsetContainer, GuxFormFieldVisualLabel } from "../../functional-components/functional-components";
import { getSlotTextContent } from "../../../../../utils/dom/get-slot-text-content";
import { trackComponent } from "../../../../../utils/tracking/usage";
import componentResources from "./i18n/en.json";
/**
 * @slot group-label - Required slot for label tag
 * @slot group-error - Optional slot for error message
 * @slot group-help - Optional slot for help message
 * @slot label-info - Optional slot for tooltip
 */
export class GuxFormFieldRadioGroupBeta {
    constructor() {
        this.required = false;
        /**
         * Field indicator mark which can show *, (optional) or blank
         * Defaults to required. When set to required, the component will display * for required fields and blank for optional
         * When set to optional, the component will display (optional) for optional and blank for required.
         */
        this.indicatorMark = 'required';
        /**
         *  Radio group has error text.
         */
        this.hasGroupError = false;
        /**
         *  radio group has help text.
         */
        this.hasGroupHelp = false;
        /**
         *  radio group has label info tooltip
         */
        this.hasGroupLabelInfo = false;
        /**
         * Disables the radio buttons in the group.
         */
        this.disabled = false;
    }
    watchGroupError(hasGroupError) {
        const radioSlots = this.root.querySelectorAll('gux-form-field-radio');
        if (radioSlots) {
            radioSlots.forEach(item => {
                item.hasGroupError = hasGroupError;
            });
        }
    }
    watchDisabled() {
        this.setDisabledRadio();
    }
    onMutation() {
        this.groupLabelInfo = this.root.querySelector('[slot=group-label-info]');
        this.hasGroupError = hasSlot(this.root, 'group-error');
        this.hasGroupHelp = hasSlot(this.root, 'group-help');
    }
    handleKeyup(event) {
        var _a, _b;
        switch (event.key) {
            case 'Tab': {
                if (this.root.matches(':focus-within')) {
                    void ((_a = this.groupLabelInfo) === null || _a === void 0 ? void 0 : _a.showTooltip());
                    this.hideTooltipTimeout = setTimeout(() => {
                        var _a;
                        void ((_a = this.groupLabelInfo) === null || _a === void 0 ? void 0 : _a.hideTooltip());
                    }, 6000);
                }
                break;
            }
            default: {
                if (this.root.matches(':focus-within')) {
                    void ((_b = this.groupLabelInfo) === null || _b === void 0 ? void 0 : _b.hideTooltip());
                    clearTimeout(this.hideTooltipTimeout);
                }
                break;
            }
        }
    }
    onFocusout() {
        var _a;
        void ((_a = this.groupLabelInfo) === null || _a === void 0 ? void 0 : _a.hideTooltip());
        clearTimeout(this.hideTooltipTimeout);
    }
    async componentWillLoad() {
        this.getI18nValue = await buildI18nForComponent(this.root, componentResources);
        this.groupLabelInfo = this.root.querySelector('[slot=group-label-info]');
        this.hasGroupError = hasSlot(this.root, 'group-error');
        this.hasGroupHelp = hasSlot(this.root, 'group-help');
        this.hasGroupLabelInfo = hasSlot(this.root, 'group-label-info');
        this.setLabel();
        this.setDisabledRadio();
        trackComponent(this.root);
    }
    disconnectedCallback() {
        if (this.disabledObserver) {
            this.disabledObserver.disconnect();
        }
    }
    setDisabledRadio() {
        const radioSlots = this.root.querySelectorAll('gux-form-field-radio');
        if (radioSlots) {
            radioSlots.forEach(item => {
                item.hasGroupDisabled = this.disabled;
            });
        }
    }
    renderText(text, condition = false) {
        if (condition) {
            return ' ' + text;
        }
    }
    render() {
        var _a;
        return (h(GuxFormFieldFieldsetContainer, { key: 'fad484fb7fa8ec26abc118586b82c66b5952915c', labelPosition: "above", disabled: this.disabled }, h(GuxFormFieldScreenreaderLabel, { key: 'e8446de191e32faf08297a3baaa710caceda7290' }, (_a = this.label) === null || _a === void 0 ? void 0 :
            _a.textContent, this.renderText(this.getI18nValue('required'), this.required), this.renderText(getSlotTextContent(this.root, 'group-error'), this.hasGroupError), this.renderText(getSlotTextContent(this.root, 'group-help'), this.hasGroupHelp), this.renderText(getSlotTextContent(this.root, 'group-label-info'), this.hasGroupLabelInfo)), h(GuxFormFieldVisualLabel, { key: 'ee8f1870612c16fd90dfa7ae69155abdd0768013', position: "above", required: this.required }, h("slot", { key: '6b20419b25b7b7381740834b42d6f057db18ad2a', name: "group-label", onSlotchange: () => this.setLabel() }), h("gux-form-field-label-indicator", { key: 'de00848bbb489b3db197dfd92328940f529cc85c', variant: this.indicatorMark, required: this.required }), h("slot", { key: 'd1bd07ac555ca287b40a850458b212f0ea13728d', name: "group-label-info" })), h("slot", { key: '525f68e3742ae671bdf928c8578581893eddca07' }), h(GuxFormFieldError, { key: '46e74e1785062aab209be58ac7a34d4f9041353f', show: this.hasGroupError }, h("slot", { key: '41824728fe7ae908f4428147f3f3696c7d139c5e', name: "group-error" })), h(GuxFormFieldHelp, { key: '1e3c4ab5237c81ed55d6d075f5d0c6983c04dbd7', show: !this.hasGroupError && this.hasGroupHelp }, h("slot", { key: 'b89ae47b91befcb31fbca744ea3a5768ffe40060', name: "group-help" }))));
    }
    setLabel() {
        this.label = this.root.querySelector('label[slot="group-label"]');
    }
    static get is() { return "gux-form-field-radio-group-beta"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-form-field-radio-group.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-form-field-radio-group.css"]
        };
    }
    static get properties() {
        return {
            "required": {
                "type": "boolean",
                "attribute": "required",
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
            },
            "disabled": {
                "type": "boolean",
                "attribute": "disabled",
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
                    "text": "Disables the radio buttons in the group."
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
            "hasGroupError": {},
            "hasGroupHelp": {},
            "hasGroupLabelInfo": {}
        };
    }
    static get elementRef() { return "root"; }
    static get watchers() {
        return [{
                "propName": "hasGroupError",
                "methodName": "watchGroupError"
            }, {
                "propName": "disabled",
                "methodName": "watchDisabled"
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
], GuxFormFieldRadioGroupBeta.prototype, "onMutation", null);
