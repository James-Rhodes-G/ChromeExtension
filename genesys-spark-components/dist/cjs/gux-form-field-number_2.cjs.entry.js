'use strict';

var index = require('./index-BLhHoh_r.js');
var index$1 = require('./index-QInGO-Pu.js');
var onInputDisabledStateChange = require('./on-input-disabled-state-change-CSLxaSas.js');
var onMutation = require('./on-mutation-BoagtLIt.js');
var onAttributeChange = require('./on-attribute-change-Cv7L_5Zv.js');
var preventBrowserValidationStyling = require('./prevent-browser-validation-styling-Dcbciyyc.js');
var guxFormField_service = require('./gux-form-field.service-MaWFZxSN.js');
var simulateNativeEvent = require('./simulate-native-event-_MPnVmRN.js');
var hasSlot = require('./has-slot-BFTyqu_U.js');
var guxFormFieldError = require('./gux-form-field-error-BRPetX-t.js');
var guxFormFieldContainer = require('./gux-form-field-container-Fmn2fSq-.js');
var usage = require('./usage-v50bi18B.js');
var focusInputElement = require('./focus-input-element-DmhIgp7F.js');
var en = require('./en-0H0Z_nRu.js');
var onClickOutside = require('./on-click-outside-CrJioxOT.js');
var afterNextRender = require('./after-next-render-CeY_1Kbz.js');
require('./get-closest-element-CfyZl7i7.js');
require('./random-html-id-DH9-ntZu.js');
require('./log-error-nWO_o1C3.js');

const increment = "Increment";
const decrement = "Decrement";
var componentResources = {
	increment: increment,
	decrement: decrement
};

const guxFormFieldNumberCss = ".gux-form-field-container{display:flex;flex-direction:column}.gux-form-field-container.gux-beside{flex-direction:row}.gux-form-field-error{display:none;flex-direction:row;flex-wrap:nowrap;gap:var(--gse-ui-formControl-helper-gap);place-content:stretch flex-start;padding:var(--gse-ui-formControl-helper-errorPadding);font-family:var(--gse-ui-formControl-helper-helperText-fontFamily);font-size:var(--gse-ui-formControl-helper-helperText-fontSize);line-height:var(--gse-ui-formControl-helper-helperText-lineHeight);color:var(--gse-ui-formControl-helper-errorColor)}.gux-form-field-error.gux-show{display:flex}.gux-form-field-error gux-icon{flex:0 1 auto;order:0;color:var(--gse-ui-formControl-helper-errorColor)}.gux-form-field-error .gux-message{flex:0 1 auto;align-self:auto;order:0}.gux-form-field-label{display:inline-flex;flex:1 0 auto}.gux-form-field-label ::slotted(label){min-inline-size:0}.gux-form-field-label ::slotted(gux-label-info-beta){padding-inline-start:var(--gse-ui-formControl-formField-gap)}.gux-form-field-label.gux-beside{position:relative;inset-block-start:var(--gse-ui-formControl-input-top);inline-size:fit-content;min-inline-size:var(--gse-ui-formControl-input-textfield-minWidth);max-inline-size:fit-content;margin-inline-end:var(--gse-ui-formControl-group-gapItems)}.gux-form-field-label.gux-above{padding-block-end:var(--gse-ui-formControl-formField-gap)}.gux-form-field-label.gux-screenreader{position:absolute;top:auto;left:-10000px;width:1px;height:1px;overflow:hidden}.gux-form-field-help{display:none;flex-direction:row;flex-wrap:nowrap;place-content:stretch flex-start;align-items:flex-start;justify-content:flex-start;padding-block-start:var(--gse-ui-formControl-formField-gap);font-family:var(--gse-ui-formControl-helper-helperText-fontFamily);font-size:var(--gse-ui-formControl-helper-helperText-fontSize);line-height:var(--gse-ui-formControl-helper-helperText-lineHeight);color:var(--gse-ui-formControl-helper-defaultColor)}.gux-form-field-help.gux-show{display:flex}.gux-form-field-help .gux-message{flex:0 1 auto;align-self:none;order:0}:host{display:block}::slotted(label){font-family:var(--gse-ui-formControl-label-textBold-fontFamily);font-size:var(--gse-ui-formControl-label-textBold-fontSize);font-weight:var(--gse-ui-formControl-label-textBold-fontWeight);line-height:var(--gse-ui-formControl-label-textBold-lineHeight);color:var(--gse-ui-formControl-label-labelColor)}::slotted(input){flex:1 1 auto;align-self:auto;order:0;inline-size:100%;padding-block-end:0;overflow:hidden;text-overflow:ellipsis;font-family:var(--gse-ui-formControl-input-contentText-fontFamily);font-size:var(--gse-ui-formControl-input-contentText-fontSize);font-weight:var(--gse-ui-formControl-input-contentText-fontWeight);line-height:var(--gse-ui-formControl-input-contentText-lineHeight);color:var(--gse-ui-formControl-input-populatedColor);text-align:end;outline:none;background-color:var(--gse-ui-formControl-input-backgroundColor);border:none}::slotted(input)::placeholder{color:var(--gse-ui-formControl-input-placeholderColor);opacity:1}.gux-input-and-error-container{flex-grow:1}.gux-input-and-error-container .gux-input{display:flex;flex-direction:row;flex-wrap:nowrap;align-content:stretch;align-items:center;inline-size:100%}.gux-input-and-error-container .gux-input .gux-input-container{box-sizing:border-box;display:flex;flex:1 1 auto;flex-direction:row;flex-wrap:nowrap;gap:var(--gse-ui-formControl-input-gap);place-content:stretch center;align-items:center;align-self:auto;order:0;inline-size:100%;block-size:var(--gse-ui-formControl-input-textfield-height);padding:var(--gse-ui-formControl-input-padding);font-family:var(--gse-ui-formControl-input-contentText-fontFamily);font-size:var(--gse-ui-formControl-input-contentText-fontSize);line-height:var(--gse-ui-formControl-input-contentText-lineHeight);color:var(--gse-ui-formControl-input-populatedColor);cursor:text;background-color:var(--gse-ui-formControl-input-backgroundColor);background-image:none;border:var(--gse-ui-formControl-input-default-border-width) var(--gse-ui-formControl-input-default-border-style) var(--gse-ui-formControl-input-default-border-color);border-radius:var(--gse-ui-formControl-input-borderRadius)}.gux-input-and-error-container .gux-input .gux-input-container.gux-disabled{cursor:default;opacity:var(--gse-ui-formControl-input-disabled-opacity)}.gux-input-and-error-container .gux-input .gux-input-container:focus-within{outline:var(--gse-ui-formControl-input-focus-border-width) var(--gse-ui-formControl-input-focus-border-style) var(--gse-ui-formControl-input-focus-border-color);outline-offset:var(--gse-semantic-focusOutline-offset);border:var(--gse-ui-formControl-input-active-border-width) var(--gse-ui-formControl-input-active-border-style) var(--gse-ui-formControl-input-active-border-color);border-radius:var(--gse-ui-formControl-focusRing-borderRadius)}.gux-input-and-error-container .gux-input.gux-input-error .gux-input-container{border-color:var(--gse-ui-formControl-input-error-border-color)}.gux-step-buttons-container{flex:0 1 14px;align-self:auto;order:0;margin-inline-start:var(--gse-ui-formControl-spinButton-gap)}.gux-step-buttons-container .gux-step-button{display:flex;flex:0 1 auto;align-items:center;align-self:auto;justify-content:center;order:0;padding:0;color:var(--gse-ui-formControl-input-inputIcon-defaultColor);background:transparent;border:var(--gse-ui-formControl-input-default-border-width) var(--gse-ui-formControl-input-default-border-style) transparent}.gux-step-buttons-container .gux-step-button:not(:disabled):focus-visible,.gux-step-buttons-container .gux-step-button:not(:disabled):hover{cursor:pointer;border:var(--gse-ui-formControl-input-hover-border-width) var(--gse-ui-formControl-input-hover-border-style) var(--gse-ui-formControl-input-hover-border-color)}.gux-step-buttons-container .gux-step-button gux-icon{flex:0 0 auto;inline-size:14px;block-size:14px}";

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const GuxFormFieldNumber = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        this.hasError = hasSlot.hasSlot(this.root, 'error');
        this.hasHelp = hasSlot.hasSlot(this.root, 'help');
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
        this.hasContent = guxFormField_service.hasContent(this.input);
        this.hasError = hasSlot.hasSlot(this.root, 'error');
        this.hasHelp = hasSlot.hasSlot(this.root, 'help');
        index.forceUpdate(this.root);
    }
    async componentWillLoad() {
        this.getI18nValue = await index$1.buildI18nForComponent(this.root, componentResources);
        this.setInput();
        this.setLabel();
        this.labelInfo = this.root.querySelector('[slot=label-info]');
        this.hasError = hasSlot.hasSlot(this.root, 'error');
        this.hasHelp = hasSlot.hasSlot(this.root, 'help');
        usage.trackComponent(this.root, { variant: this.variant });
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
        const showClearButton = this.clearable && this.hasContent && !this.disabled;
        return (index.h(guxFormFieldContainer.GuxFormFieldContainer, { key: 'edb6b56da16df96351ddb058dddb8d9b14e14392', labelPosition: this.computedLabelPosition }, index.h(guxFormFieldContainer.GuxFormFieldLabel, { key: 'f6ea1699ba8db6572769e468fd1c97b8d305f28a', required: this.required, position: this.computedLabelPosition }, index.h("slot", { key: 'cdb3dc75c64bbfcadc13def9dab2d310e392d8fa', name: "label", onSlotchange: () => this.setLabel() }), index.h("gux-form-field-label-indicator", { key: 'c49ba227f4d66e5418b0c21f9e7f5c1bb6e48212', variant: this.indicatorMark, required: this.required }), index.h("slot", { key: '55aa21efa1f278a0e816e5c27ee99ce926dca80b', name: "label-info" })), index.h("div", { key: '73d9ce4436dd94c458c281ac9a288b6c101cbac9', class: "gux-input-and-error-container" }, index.h("div", { key: 'ef7d9d1f4e5be99d839ad69b6be888a208eed405', class: {
                'gux-input': true,
                'gux-input-error': this.hasError
            }, part: "input-section" }, index.h("div", { key: '2611ee74b88f36ea13e737a9ca2628ce239c2723', class: {
                'gux-input-container': true,
                'gux-disabled': this.disabled,
                'gux-clear': showClearButton
            }, onClick: () => focusInputElement.focusInputElement(this.input) }, index.h("slot", { key: 'ce295da6ddf992d86bd463ddf8145bdfdfb67788', name: "input", onSlotchange: () => this.setInput() }), showClearButton && (index.h("gux-form-field-input-clear-button", { key: '7b2083a27f83ab12bca4dc3f9741029d03ab09eb', onClick: () => guxFormField_service.clearInput(this.input) }))), this.renderStepButtons(this.input, this.getI18nValue, this.disabled)), index.h(guxFormFieldError.GuxFormFieldError, { key: 'e319a958a910322f1e5ea30eba226cd50fbf494e', show: this.hasError }, index.h("slot", { key: '60bbbecb56a2c6e97e85f2a032853f561e946c9c', name: "error" })), index.h(guxFormFieldError.GuxFormFieldHelp, { key: '33279665977b056a4d17a515cfdfb11b7fd45016', show: !this.hasError && this.hasHelp }, index.h("slot", { key: 'eb112d1eacfd8b341a8ef72a2e1e4b673f6e6ff9', name: "help" })))));
    }
    get variant() {
        const labelPositionVariant = this.labelPosition
            ? this.labelPosition.toLowerCase()
            : 'none';
        const clearableVariant = this.clearable ? 'clearable' : 'unclearable';
        return `${clearableVariant}-${labelPositionVariant}`;
    }
    setInput() {
        this.input = guxFormField_service.getSlottedInput(this.root, 'input[type="number"][slot="input"]');
        this.hasContent = guxFormField_service.hasContent(this.input);
        preventBrowserValidationStyling.preventBrowserValidationStyling(this.input);
        this.input.addEventListener('input', () => {
            this.hasContent = guxFormField_service.hasContent(this.input);
        });
        this.disabled = onInputDisabledStateChange.calculateInputDisabledState(this.input);
        this.required = this.input.required;
        this.disabledObserver = onInputDisabledStateChange.onInputDisabledStateChange(this.input, (disabled) => {
            this.disabled = disabled;
        });
        this.requiredObserver = onAttributeChange.onRequiredChange(this.input, (required) => {
            this.required = required;
        });
        guxFormField_service.validateFormIds(this.root, this.input);
    }
    setLabel() {
        this.label = this.root.querySelector('label[slot="label"]');
        this.computedLabelPosition = guxFormField_service.getComputedLabelPosition(this.label, this.labelPosition);
    }
    renderStepButtons(input, getI18nValue, disabled) {
        return (index.h("div", { class: "gux-step-buttons-container" }, index.h("button", { class: "gux-step-button", tabIndex: -1, type: "button", title: getI18nValue('increment'), disabled: disabled, onClick: () => this.stepUp(input) }, index.h("gux-icon", { "icon-name": "custom/chevron-up-small-regular", decorative: true })), index.h("button", { class: "gux-step-button", tabIndex: -1, type: "button", title: getI18nValue('decrement'), disabled: disabled, onClick: () => this.stepDown(input) }, index.h("gux-icon", { "icon-name": "custom/chevron-down-small-regular", decorative: true }))));
    }
    stepDown(input) {
        if (input.value === '') {
            guxFormField_service.setInputValue(input, input.min || '0', false);
        }
        else {
            input.stepDown();
            this.simulateNativeInputAndChangeEvents(input);
        }
    }
    stepUp(input) {
        if (input.value === '') {
            guxFormField_service.setInputValue(input, input.min || '0', false);
        }
        else {
            input.stepUp();
            this.simulateNativeInputAndChangeEvents(input);
        }
    }
    simulateNativeInputAndChangeEvents(input) {
        simulateNativeEvent.simulateNativeEvent(input, 'input');
        simulateNativeEvent.simulateNativeEvent(input, 'change');
    }
    static get delegatesFocus() { return true; }
    get root() { return index.getElement(this); }
};
__decorate$1([
    onMutation.OnMutation({ childList: true, subtree: true })
], GuxFormFieldNumber.prototype, "onMutation", null);
GuxFormFieldNumber.style = guxFormFieldNumberCss;

const guxPaginationEllipsisButtonCss = "gux-button gux-icon{padding-block-start:4px}input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{margin:0;-webkit-appearance:none}input[type=number]{-moz-appearance:textfield}";

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
const GuxPaginationEllipsisButton = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.goToPage = index.createEvent(this, "goToPage", 7);
        this.isOpen = false;
        this.disabled = false;
    }
    handleKeyDown(event) {
        const composedPath = event.composedPath();
        switch (event.key) {
            case 'Escape':
                this.isOpen = false;
                this.ellipsisButton.focus();
                break;
            case 'Tab': {
                this.isOpen = false;
                break;
            }
            case 'ArrowDown':
            case 'Enter':
                if (composedPath.includes(this.ellipsisButton)) {
                    event.preventDefault();
                    this.isOpen = true;
                    this.focusInputElement();
                }
                break;
        }
    }
    handleKeyup(event) {
        switch (event.key) {
            case ' ': {
                const composedPath = event.composedPath();
                if (composedPath.includes(this.ellipsisButton)) {
                    this.isOpen = true;
                    this.focusInputElement();
                }
                break;
            }
        }
    }
    watchIsDisabled(newValue) {
        if (newValue) {
            this.isOpen = false;
        }
    }
    toggle() {
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
            this.focusInputElement();
        }
    }
    onClickOutside() {
        this.isOpen = false;
    }
    focusInputElement() {
        afterNextRender.afterNextRender(() => {
            this.inputElement.focus();
        });
    }
    applyInputListener() {
        var _a;
        (_a = this.inputElement) === null || _a === void 0 ? void 0 : _a.addEventListener('keydown', (event) => {
            const inputValue = event.target.value.trim();
            if (event.key == 'Enter' || event.key == ' ') {
                if (inputValue == '') {
                    event.preventDefault();
                }
                else {
                    event.preventDefault();
                    this.goToPage.emit(event.target.value);
                    this.isOpen = false;
                }
            }
        });
    }
    async componentWillLoad() {
        this.i18n = await index$1.buildI18nForComponent(this.root, en.translationResources, 'gux-pagination-buttons');
        usage.trackComponent(this.root);
    }
    componentDidLoad() {
        this.applyInputListener();
    }
    render() {
        return [
            index.h("gux-button", { key: '454441358989e2ef8054889e263e714a74b98411', accent: "ghost", id: "popover-target", type: "button", disabled: this.disabled, ref: el => (this.ellipsisButton = el), onClick: () => this.toggle(), "aria-haspopup": "true", "aria-expanded": this.isOpen.toString() }, index.h("gux-icon", { key: '0e56ff1b9756228976929d4db5d4da5edc5437a2', screenreaderText: this.i18n('goToPage'), "icon-name": "fa/ellipsis-regular", size: "small" })),
            index.h("gux-tooltip", { key: '2eed7f75f9de5709ec09f756250c93a5c6d6852e', for: "popover-target" }, index.h("div", { key: 'd9e02b0f0f8abf8c0d18387006d534a6cb2f5d2b', slot: "content" }, this.i18n('goToPage'))),
            index.h("gux-popover", { key: 'dfc6e87c29e082fe2de4e7e5ca4504996fdb648b', "is-open": this.isOpen, for: "popover-target" }, index.h("span", { key: '0dff29cc2478921d133c73c56922ad42f98dc309', slot: "title" }, this.i18n('goToPage')), index.h("gux-form-field-number", { key: '910764919a171ec5d15215856011353acd23079c' }, index.h("input", { key: 'f12b964eafa335c9626d4cf5978e7a7ab68ed196', slot: "input", type: "number", ref: el => (this.inputElement = el), min: "1", max: this.totalPages, value: "1", onKeyDown: evt => ['e', 'E', '+', '-', '.'].includes(evt.key) &&
                    evt.preventDefault() }), index.h("label", { key: '5175b0b5d341d49b770e29cb80ae9c5d73a35f42', slot: "label" })))
        ];
    }
    get root() { return index.getElement(this); }
    static get watchers() { return {
        "disabled": ["watchIsDisabled"]
    }; }
};
__decorate([
    onClickOutside.OnClickOutside({ triggerEvents: 'mousedown' })
], GuxPaginationEllipsisButton.prototype, "onClickOutside", null);
GuxPaginationEllipsisButton.style = guxPaginationEllipsisButtonCss;

exports.gux_form_field_number = GuxFormFieldNumber;
exports.gux_pagination_ellipsis_button = GuxPaginationEllipsisButton;
