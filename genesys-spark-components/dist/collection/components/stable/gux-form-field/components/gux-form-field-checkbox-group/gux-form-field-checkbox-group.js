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
import { OnMutation } from "../../../../../utils/decorator/on-mutation";
import { hasSlot } from "../../../../../utils/dom/has-slot";
import { logWarn } from "../../../../../utils/error/log-error";
import { buildI18nForComponent } from "../../../../../i18n";
import { setAllCheckboxInputs, setParentCheckboxElementCheckedState } from "./gux-form-field-checkbox-group.service";
import { GuxFormFieldError, GuxFormFieldHelp, GuxFormFieldScreenreaderLabel, GuxFormFieldVisualLabel, GuxFormFieldFieldsetContainer } from "../../functional-components/functional-components";
import { getSlotTextContent } from "../../../../../utils/dom/get-slot-text-content";
import { trackComponent } from "../../../../../utils/tracking/usage";
import componentResources from "./i18n/en.json";
/**
 * @slot group-label - Required slot for label tag
 * @slot group-checkbox - Optional slot
 * @slot group-error - Optional slot for error message
 * @slot group-help - Optional slot for help message
 */
export class GuxFormFieldCheckboxGroupBeta {
    constructor() {
        /**
         * Field indicator mark which can show *, (optional) or blank
         * Defaults to required. When set to required, the component will display * for required fields and blank for optional
         * When set to optional, the component will display (optional) for optional and blank for required.
         */
        this.indicatorMark = 'required';
        this.required = false;
        /**
         *  Checkbox group has error text.
         */
        this.hasGroupError = false;
        /**
         *  Checkbox group has help text.
         */
        this.hasGroupHelp = false;
        /**
         *  radio group has label info tooltip
         */
        this.hasGroupLabelInfo = false;
        /**
         * Disables the checkboxes in the group.
         */
        this.disabled = false;
    }
    watchGroupError(hasGroupError) {
        const checkboxSlots = this.root.querySelectorAll('gux-form-field-checkbox');
        if (checkboxSlots) {
            checkboxSlots.forEach(item => {
                item.hasGroupError = hasGroupError;
            });
        }
    }
    watchDisabled() {
        this.setDisabledCheckboxes();
    }
    onMutation() {
        this.hasGroupError = hasSlot(this.root, 'group-error');
        this.hasGroupHelp = hasSlot(this.root, 'group-help');
        this.hasGroupLabelInfo = hasSlot(this.root, 'group-label-info');
    }
    async componentWillLoad() {
        this.getI18nValue = await buildI18nForComponent(this.root, componentResources);
        this.hasGroupError = hasSlot(this.root, 'group-error');
        this.hasGroupHelp = hasSlot(this.root, 'group-help');
        this.hasGroupLabelInfo = hasSlot(this.root, 'group-label-info');
        this.setLabel();
        this.setDisabledCheckboxes();
        trackComponent(this.root);
    }
    componentDidLoad() {
        setParentCheckboxElementCheckedState(this.root, this.root.querySelector('gux-form-field-checkbox[slot="group-checkbox"] input'));
    }
    disconnectedCallback() {
        if (this.disabledObserver) {
            this.disabledObserver.disconnect();
        }
    }
    getGroupCheckboxElement() {
        return this.root.querySelector('gux-form-field-checkbox[slot="group-checkbox"] input');
    }
    setDisabledCheckboxes() {
        const checkboxSlots = this.root.querySelectorAll('gux-form-field-checkbox');
        if (checkboxSlots) {
            checkboxSlots.forEach(item => {
                item.hasGroupDisabled = this.disabled;
            });
        }
    }
    onMainCheckboxChange() {
        const groupCheckbox = this.getGroupCheckboxElement();
        setAllCheckboxInputs(this.root, groupCheckbox.checked);
        forceUpdate(this.root);
    }
    setupNestedCheckboxes() {
        this.warnMultipleGroupCheckbox();
        this.warnGroupCheckboxNameAttr();
        const groupCheckbox = this.getGroupCheckboxElement();
        if (groupCheckbox) {
            this.root.classList.add('gux-group-checkbox');
        }
        else {
            this.root.classList.remove('gux-group-checkbox');
        }
        groupCheckbox === null || groupCheckbox === void 0 ? void 0 : groupCheckbox.addEventListener('change', () => {
            this.onMainCheckboxChange();
        });
        this.initialSetNestedCheckboxes(groupCheckbox === null || groupCheckbox === void 0 ? void 0 : groupCheckbox.checked);
    }
    initialSetNestedCheckboxes(groupCheckboxChecked) {
        const checkboxSlots = Array.from(this.root.querySelectorAll('gux-form-field-checkbox input:not(gux-form-field-checkbox[slot="group-checkbox"] input)'));
        if (checkboxSlots === null || checkboxSlots === void 0 ? void 0 : checkboxSlots.length) {
            checkboxSlots.forEach(item => {
                item.addEventListener('change', () => {
                    this.updateMainCheckbox();
                });
                if (groupCheckboxChecked && !item.disabled) {
                    item.checked = true;
                }
            });
        }
    }
    warnMultipleGroupCheckbox() {
        const groupCheckboxList = this.root.querySelectorAll('gux-form-field-checkbox[slot="group-checkbox"] input');
        if ((groupCheckboxList === null || groupCheckboxList === void 0 ? void 0 : groupCheckboxList.length) > 1) {
            logWarn(this.root, 'Can only have one group checkbox');
        }
    }
    warnGroupCheckboxNameAttr() {
        const groupCheckbox = this.getGroupCheckboxElement();
        if (groupCheckbox === null || groupCheckbox === void 0 ? void 0 : groupCheckbox.hasAttribute('name')) {
            logWarn(this.root, 'Group checkbox should not have a name attribute');
        }
    }
    updateMainCheckbox() {
        setParentCheckboxElementCheckedState(this.root, this.root.querySelector('gux-form-field-checkbox[slot="group-checkbox"] input'));
        forceUpdate(this.root);
    }
    renderText(text, condition = false) {
        if (condition) {
            return ' ' + text;
        }
    }
    render() {
        var _a;
        return (h(GuxFormFieldFieldsetContainer, { key: 'e510f0c0fcf9fd76c3c391bd66ec2fef75b7be9a', labelPosition: "above" }, h(GuxFormFieldScreenreaderLabel, { key: 'bc4bb057d2d535f204cefe85ad27d9b6217dec46' }, (_a = this.label) === null || _a === void 0 ? void 0 :
            _a.textContent, this.renderText(this.getI18nValue('required'), this.required), this.renderText(getSlotTextContent(this.root, 'group-error'), this.hasGroupError), this.renderText(getSlotTextContent(this.root, 'group-help'), this.hasGroupHelp), this.renderText(getSlotTextContent(this.root, 'group-label-info'), this.hasGroupLabelInfo)), h(GuxFormFieldVisualLabel, { key: '5e5164adc2563d6d3bab22188a5d75440c572e27', position: "above", required: this.required }, h("slot", { key: '0906ef1243947d52d9c3d2618c0c88a62b94b945', name: "group-label", onSlotchange: () => this.setLabel() }), h("gux-form-field-label-indicator", { key: '19e888030a5c2078c38dab9b5685e6c8e4dcb4f9', variant: this.indicatorMark, required: this.required }), h("slot", { key: '5dd452934445d8269cd667ae910f1533aee27f75', name: "group-label-info" })), h("slot", { key: '4155cf7d2f092ffe73188f573c04b62a50aacdc2', onSlotchange: () => this.setupNestedCheckboxes(), name: "group-checkbox" }), h("slot", { key: '34ef875c9dc46ff37eb3574ef94b065e44199c21', onSlotchange: () => this.updateMainCheckbox() }), h(GuxFormFieldError, { key: 'e367804623750343279f24afbb6030c7405f0360', show: this.hasGroupError }, h("slot", { key: 'e140d2c5cf27f58464cabc70f7f49023061696ec', name: "group-error" })), h(GuxFormFieldHelp, { key: '6828d92569eee8d5fdadbe1fbcd93910091ae9b0', show: !this.hasGroupError && this.hasGroupHelp }, h("slot", { key: '2b5e8829043e90f7f55c13ec14842436ce6dfa29', name: "group-help" }))));
    }
    setLabel() {
        this.label = this.root.querySelector('label[slot="group-label"]');
    }
    static get is() { return "gux-form-field-checkbox-group-beta"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-form-field-checkbox-group.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-form-field-checkbox-group.css"]
        };
    }
    static get properties() {
        return {
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
                    "text": "Disables the checkboxes in the group."
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
}
__decorate([
    OnMutation({ childList: true, subtree: true })
], GuxFormFieldCheckboxGroupBeta.prototype, "onMutation", null);
