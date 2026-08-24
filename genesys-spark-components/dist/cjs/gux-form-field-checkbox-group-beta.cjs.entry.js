'use strict';

var index = require('./index-BLhHoh_r.js');
var onMutation = require('./on-mutation-BoagtLIt.js');
var hasSlot = require('./has-slot-BFTyqu_U.js');
var logError = require('./log-error-nWO_o1C3.js');
var index$1 = require('./index-QInGO-Pu.js');
var simulateNativeEvent = require('./simulate-native-event-_MPnVmRN.js');
var guxFormFieldError = require('./gux-form-field-error-BRPetX-t.js');
var guxFormFieldFieldsetContainer = require('./gux-form-field-fieldset-container-CP24qwTm.js');
var getSlotTextContent = require('./get-slot-text-content-DZwcXMIm.js');
var usage = require('./usage-v50bi18B.js');
require('./get-closest-element-CfyZl7i7.js');

function setAllCheckboxInputs(root, checked) {
    getNestedCheckboxInputs(root).forEach(checkboxInput => {
        if (checkboxInput.checked !== checked && !checkboxInput.disabled) {
            checkboxInput.checked = checked;
            simulateNativeEvent.simulateNativeEvent(checkboxInput, 'input');
            simulateNativeEvent.simulateNativeEvent(checkboxInput, 'change');
        }
    });
}
function setParentCheckboxElementCheckedState(root, mainCheckboxElement) {
    if (mainCheckboxElement) {
        const { checkedCheckboxes, totalCheckboxes } = getSelectedColumnCount(root);
        if (checkedCheckboxes === 0) {
            mainCheckboxElement.indeterminate = false;
            mainCheckboxElement.checked = false;
        }
        else if (checkedCheckboxes === totalCheckboxes) {
            mainCheckboxElement.indeterminate = false;
            mainCheckboxElement.checked = true;
        }
        else {
            mainCheckboxElement.indeterminate = true;
        }
    }
}
function getSelectedColumnCount(root) {
    const totalCheckboxes = getNestedCheckboxInputs(root).length;
    const checkedCheckboxes = getCheckedCheckboxInputs(root).length;
    return { checkedCheckboxes, totalCheckboxes };
}
function getNestedCheckboxInputs(root) {
    return Array.from(root.querySelectorAll('gux-form-field-checkbox input:not(gux-form-field-checkbox[slot="group-checkbox"] input'));
}
function getCheckedCheckboxInputs(root) {
    const checkboxInputs = getNestedCheckboxInputs(root);
    return checkboxInputs.filter(x => x.checked);
}

const required = "Required";
var componentResources = {
	required: required
};

const guxFormFieldCheckboxGroupCss = ".gux-form-field-fieldset-container{display:flex;min-inline-size:0;padding:0;margin:0;border:none}.gux-form-field-fieldset-container.gux-beside{flex-direction:row}.gux-form-field-fieldset-container.gux-above{flex-direction:column}.gux-form-field-error{display:none;flex-direction:row;flex-wrap:nowrap;gap:var(--gse-ui-formControl-helper-gap);place-content:stretch flex-start;padding:var(--gse-ui-formControl-helper-errorPadding);font-family:var(--gse-ui-formControl-helper-helperText-fontFamily);font-size:var(--gse-ui-formControl-helper-helperText-fontSize);line-height:var(--gse-ui-formControl-helper-helperText-lineHeight);color:var(--gse-ui-formControl-helper-errorColor)}.gux-form-field-error.gux-show{display:flex}.gux-form-field-error gux-icon{flex:0 1 auto;order:0;color:var(--gse-ui-formControl-helper-errorColor)}.gux-form-field-error .gux-message{flex:0 1 auto;align-self:auto;order:0}.gux-form-field-help{display:none;flex-direction:row;flex-wrap:nowrap;place-content:stretch flex-start;align-items:flex-start;justify-content:flex-start;padding-block-start:var(--gse-ui-formControl-formField-gap);font-family:var(--gse-ui-formControl-helper-helperText-fontFamily);font-size:var(--gse-ui-formControl-helper-helperText-fontSize);line-height:var(--gse-ui-formControl-helper-helperText-lineHeight);color:var(--gse-ui-formControl-helper-defaultColor)}.gux-form-field-help.gux-show{display:flex}.gux-form-field-help .gux-message{flex:0 1 auto;align-self:none;order:0}.gux-form-field-error{display:none;flex-direction:row;flex-wrap:nowrap;gap:var(--gse-ui-formControl-helper-gap);place-content:stretch flex-start;padding:var(--gse-ui-formControl-helper-errorPadding);font-family:var(--gse-ui-formControl-helper-helperText-fontFamily);font-size:var(--gse-ui-formControl-helper-helperText-fontSize);line-height:var(--gse-ui-formControl-helper-helperText-lineHeight);color:var(--gse-ui-formControl-helper-errorColor)}.gux-form-field-error.gux-show{display:flex}.gux-form-field-error gux-icon{flex:0 1 auto;order:0;color:var(--gse-ui-formControl-helper-errorColor)}.gux-form-field-error .gux-message{flex:0 1 auto;align-self:auto;order:0}.gux-form-field-help{display:none;flex-direction:row;flex-wrap:nowrap;place-content:stretch flex-start;align-items:flex-start;justify-content:flex-start;padding-block-start:var(--gse-ui-formControl-formField-gap);font-family:var(--gse-ui-formControl-helper-helperText-fontFamily);font-size:var(--gse-ui-formControl-helper-helperText-fontSize);line-height:var(--gse-ui-formControl-helper-helperText-lineHeight);color:var(--gse-ui-formControl-helper-defaultColor)}.gux-form-field-help.gux-show{display:flex}.gux-form-field-help .gux-message{flex:0 1 auto;align-self:none;order:0}.gux-form-field-visual-label{display:inline-flex;flex:1 0 auto}.gux-form-field-visual-label ::slotted(label){min-inline-size:0}.gux-form-field-visual-label ::slotted(gux-label-info-beta){padding-inline-start:var(--gse-ui-formControl-formField-gap)}.gux-form-field-visual-label.gux-beside{position:relative;inset-block-start:var(--gse-ui-formControl-input-top);inline-size:fit-content;min-inline-size:var(--gse-ui-formControl-input-textfield-minWidth);max-inline-size:fit-content;margin-inline-end:var(--gse-ui-formControl-group-gapItems)}.gux-form-field-visual-label.gux-above{padding-block-end:var(--gse-ui-formControl-formField-gap)}.gux-form-field-visual-label.gux-screenreader{display:none}.gux-form-field-screenreader-label{position:absolute;top:auto;left:-10000px;width:1px;height:1px;overflow:hidden}:host{display:block}:host([disabled]) .gux-form-field-legend-label{opacity:var(--gse-ui-formControl-input-disabled-opacity)}::slotted(gux-form-field-checkbox){padding-block-start:var(--gse-ui-formControl-group-gapItems)}::slotted(gux-form-field-checkbox:first-of-type){padding-block-start:0}:host(.gux-group-checkbox) ::slotted(gux-form-field-checkbox){padding-inline-start:24px}:host(.gux-group-checkbox) slot[name=group-checkbox]::slotted(gux-form-field-checkbox){padding-inline-start:0}.gux-form-field-legend-label{font-family:var(--gse-ui-formControl-label-text-fontFamily);font-size:var(--gse-ui-formControl-label-text-fontSize);font-weight:var(--gse-ui-formControl-label-text-fontWeight);line-height:var(--gse-ui-formControl-label-text-lineHeight);color:var(--gse-ui-formControl-label-labelColor)}:host([disabled]) ::slotted(label){opacity:var(--gse-ui-formControl-input-disabled-opacity)}::slotted(label){font-family:var(--gse-ui-formControl-label-textBold-fontFamily);font-size:var(--gse-ui-formControl-label-textBold-fontSize);font-weight:var(--gse-ui-formControl-label-textBold-fontWeight);line-height:var(--gse-ui-formControl-label-textBold-lineHeight);color:var(--gse-ui-formControl-label-labelColor)}";

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const GuxFormFieldCheckboxGroupBeta = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        this.hasGroupError = hasSlot.hasSlot(this.root, 'group-error');
        this.hasGroupHelp = hasSlot.hasSlot(this.root, 'group-help');
        this.hasGroupLabelInfo = hasSlot.hasSlot(this.root, 'group-label-info');
    }
    async componentWillLoad() {
        this.getI18nValue = await index$1.buildI18nForComponent(this.root, componentResources);
        this.hasGroupError = hasSlot.hasSlot(this.root, 'group-error');
        this.hasGroupHelp = hasSlot.hasSlot(this.root, 'group-help');
        this.hasGroupLabelInfo = hasSlot.hasSlot(this.root, 'group-label-info');
        this.setLabel();
        this.setDisabledCheckboxes();
        usage.trackComponent(this.root);
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
        index.forceUpdate(this.root);
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
            logError.logWarn(this.root, 'Can only have one group checkbox');
        }
    }
    warnGroupCheckboxNameAttr() {
        const groupCheckbox = this.getGroupCheckboxElement();
        if (groupCheckbox === null || groupCheckbox === void 0 ? void 0 : groupCheckbox.hasAttribute('name')) {
            logError.logWarn(this.root, 'Group checkbox should not have a name attribute');
        }
    }
    updateMainCheckbox() {
        setParentCheckboxElementCheckedState(this.root, this.root.querySelector('gux-form-field-checkbox[slot="group-checkbox"] input'));
        index.forceUpdate(this.root);
    }
    renderText(text, condition = false) {
        if (condition) {
            return ' ' + text;
        }
    }
    render() {
        var _a;
        return (index.h(guxFormFieldFieldsetContainer.GuxFormFieldFieldsetContainer, { key: 'e510f0c0fcf9fd76c3c391bd66ec2fef75b7be9a', labelPosition: "above" }, index.h(guxFormFieldFieldsetContainer.GuxFormFieldScreenreaderLabel, { key: 'bc4bb057d2d535f204cefe85ad27d9b6217dec46' }, (_a = this.label) === null || _a === void 0 ? void 0 :
            _a.textContent, this.renderText(this.getI18nValue('required'), this.required), this.renderText(getSlotTextContent.getSlotTextContent(this.root, 'group-error'), this.hasGroupError), this.renderText(getSlotTextContent.getSlotTextContent(this.root, 'group-help'), this.hasGroupHelp), this.renderText(getSlotTextContent.getSlotTextContent(this.root, 'group-label-info'), this.hasGroupLabelInfo)), index.h(guxFormFieldFieldsetContainer.GuxFormFieldVisualLabel, { key: '5e5164adc2563d6d3bab22188a5d75440c572e27', position: "above", required: this.required }, index.h("slot", { key: '0906ef1243947d52d9c3d2618c0c88a62b94b945', name: "group-label", onSlotchange: () => this.setLabel() }), index.h("gux-form-field-label-indicator", { key: '19e888030a5c2078c38dab9b5685e6c8e4dcb4f9', variant: this.indicatorMark, required: this.required }), index.h("slot", { key: '5dd452934445d8269cd667ae910f1533aee27f75', name: "group-label-info" })), index.h("slot", { key: '4155cf7d2f092ffe73188f573c04b62a50aacdc2', onSlotchange: () => this.setupNestedCheckboxes(), name: "group-checkbox" }), index.h("slot", { key: '34ef875c9dc46ff37eb3574ef94b065e44199c21', onSlotchange: () => this.updateMainCheckbox() }), index.h(guxFormFieldError.GuxFormFieldError, { key: 'e367804623750343279f24afbb6030c7405f0360', show: this.hasGroupError }, index.h("slot", { key: 'e140d2c5cf27f58464cabc70f7f49023061696ec', name: "group-error" })), index.h(guxFormFieldError.GuxFormFieldHelp, { key: '6828d92569eee8d5fdadbe1fbcd93910091ae9b0', show: !this.hasGroupError && this.hasGroupHelp }, index.h("slot", { key: '2b5e8829043e90f7f55c13ec14842436ce6dfa29', name: "group-help" }))));
    }
    setLabel() {
        this.label = this.root.querySelector('label[slot="group-label"]');
    }
    get root() { return index.getElement(this); }
    static get watchers() { return {
        "hasGroupError": ["watchGroupError"],
        "disabled": ["watchDisabled"]
    }; }
};
__decorate([
    onMutation.OnMutation({ childList: true, subtree: true })
], GuxFormFieldCheckboxGroupBeta.prototype, "onMutation", null);
GuxFormFieldCheckboxGroupBeta.style = guxFormFieldCheckboxGroupCss;

exports.gux_form_field_checkbox_group_beta = GuxFormFieldCheckboxGroupBeta;
