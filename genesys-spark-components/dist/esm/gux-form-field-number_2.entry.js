import { r as registerInstance, f as forceUpdate, h, a as getElement, c as createEvent } from './index-xFL2agjT.js';
import { b as buildI18nForComponent } from './index-Dac2qHbK.js';
import { c as calculateInputDisabledState, o as onInputDisabledStateChange } from './on-input-disabled-state-change-Cb3FOYGS.js';
import { O as OnMutation } from './on-mutation-CQXoeN9i.js';
import { o as onRequiredChange } from './on-attribute-change-De1NnCmO.js';
import { p as preventBrowserValidationStyling } from './prevent-browser-validation-styling-PYfNAK8p.js';
import { h as hasContent, c as clearInput, g as getSlottedInput, v as validateFormIds, a as getComputedLabelPosition, d as setInputValue } from './gux-form-field.service-C3WKbzwR.js';
import { s as simulateNativeEvent } from './simulate-native-event-BMRf5pjV.js';
import { h as hasSlot } from './has-slot-qzV3vtOw.js';
import { G as GuxFormFieldError, a as GuxFormFieldHelp } from './gux-form-field-error-CvxwCzsi.js';
import { G as GuxFormFieldLabel, a as GuxFormFieldContainer } from './gux-form-field-container-CPY3Y_-p.js';
import { t as trackComponent } from './usage-D2Q7fj4V.js';
import { f as focusInputElement } from './focus-input-element-JHLuJ8Pb.js';
import { t as translationResources } from './en-BFMPPR7N.js';
import { O as OnClickOutside } from './on-click-outside-VvhFhgll.js';
import { b as afterNextRender } from './after-next-render-Bg4q97BS.js';
import './get-closest-element-Cd4R0amv.js';
import './random-html-id-D9jKBqIb.js';
import './log-error-DxtJDeL9.js';

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
        registerInstance(this, hostRef);
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
    async componentWillLoad() {
        this.getI18nValue = await buildI18nForComponent(this.root, componentResources);
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
        const showClearButton = this.clearable && this.hasContent && !this.disabled;
        return (h(GuxFormFieldContainer, { key: 'edb6b56da16df96351ddb058dddb8d9b14e14392', labelPosition: this.computedLabelPosition }, h(GuxFormFieldLabel, { key: 'f6ea1699ba8db6572769e468fd1c97b8d305f28a', required: this.required, position: this.computedLabelPosition }, h("slot", { key: 'cdb3dc75c64bbfcadc13def9dab2d310e392d8fa', name: "label", onSlotchange: () => this.setLabel() }), h("gux-form-field-label-indicator", { key: 'c49ba227f4d66e5418b0c21f9e7f5c1bb6e48212', variant: this.indicatorMark, required: this.required }), h("slot", { key: '55aa21efa1f278a0e816e5c27ee99ce926dca80b', name: "label-info" })), h("div", { key: '73d9ce4436dd94c458c281ac9a288b6c101cbac9', class: "gux-input-and-error-container" }, h("div", { key: 'ef7d9d1f4e5be99d839ad69b6be888a208eed405', class: {
                'gux-input': true,
                'gux-input-error': this.hasError
            }, part: "input-section" }, h("div", { key: '2611ee74b88f36ea13e737a9ca2628ce239c2723', class: {
                'gux-input-container': true,
                'gux-disabled': this.disabled,
                'gux-clear': showClearButton
            }, onClick: () => focusInputElement(this.input) }, h("slot", { key: 'ce295da6ddf992d86bd463ddf8145bdfdfb67788', name: "input", onSlotchange: () => this.setInput() }), showClearButton && (h("gux-form-field-input-clear-button", { key: '7b2083a27f83ab12bca4dc3f9741029d03ab09eb', onClick: () => clearInput(this.input) }))), this.renderStepButtons(this.input, this.getI18nValue, this.disabled)), h(GuxFormFieldError, { key: 'e319a958a910322f1e5ea30eba226cd50fbf494e', show: this.hasError }, h("slot", { key: '60bbbecb56a2c6e97e85f2a032853f561e946c9c', name: "error" })), h(GuxFormFieldHelp, { key: '33279665977b056a4d17a515cfdfb11b7fd45016', show: !this.hasError && this.hasHelp }, h("slot", { key: 'eb112d1eacfd8b341a8ef72a2e1e4b673f6e6ff9', name: "help" })))));
    }
    get variant() {
        const labelPositionVariant = this.labelPosition
            ? this.labelPosition.toLowerCase()
            : 'none';
        const clearableVariant = this.clearable ? 'clearable' : 'unclearable';
        return `${clearableVariant}-${labelPositionVariant}`;
    }
    setInput() {
        this.input = getSlottedInput(this.root, 'input[type="number"][slot="input"]');
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
    renderStepButtons(input, getI18nValue, disabled) {
        return (h("div", { class: "gux-step-buttons-container" }, h("button", { class: "gux-step-button", tabIndex: -1, type: "button", title: getI18nValue('increment'), disabled: disabled, onClick: () => this.stepUp(input) }, h("gux-icon", { "icon-name": "custom/chevron-up-small-regular", decorative: true })), h("button", { class: "gux-step-button", tabIndex: -1, type: "button", title: getI18nValue('decrement'), disabled: disabled, onClick: () => this.stepDown(input) }, h("gux-icon", { "icon-name": "custom/chevron-down-small-regular", decorative: true }))));
    }
    stepDown(input) {
        if (input.value === '') {
            setInputValue(input, input.min || '0', false);
        }
        else {
            input.stepDown();
            this.simulateNativeInputAndChangeEvents(input);
        }
    }
    stepUp(input) {
        if (input.value === '') {
            setInputValue(input, input.min || '0', false);
        }
        else {
            input.stepUp();
            this.simulateNativeInputAndChangeEvents(input);
        }
    }
    simulateNativeInputAndChangeEvents(input) {
        simulateNativeEvent(input, 'input');
        simulateNativeEvent(input, 'change');
    }
    static get delegatesFocus() { return true; }
    get root() { return getElement(this); }
};
__decorate$1([
    OnMutation({ childList: true, subtree: true })
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
        registerInstance(this, hostRef);
        this.goToPage = createEvent(this, "goToPage", 7);
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
        afterNextRender(() => {
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
        this.i18n = await buildI18nForComponent(this.root, translationResources, 'gux-pagination-buttons');
        trackComponent(this.root);
    }
    componentDidLoad() {
        this.applyInputListener();
    }
    render() {
        return [
            h("gux-button", { key: '454441358989e2ef8054889e263e714a74b98411', accent: "ghost", id: "popover-target", type: "button", disabled: this.disabled, ref: el => (this.ellipsisButton = el), onClick: () => this.toggle(), "aria-haspopup": "true", "aria-expanded": this.isOpen.toString() }, h("gux-icon", { key: '0e56ff1b9756228976929d4db5d4da5edc5437a2', screenreaderText: this.i18n('goToPage'), "icon-name": "fa/ellipsis-regular", size: "small" })),
            h("gux-tooltip", { key: '2eed7f75f9de5709ec09f756250c93a5c6d6852e', for: "popover-target" }, h("div", { key: 'd9e02b0f0f8abf8c0d18387006d534a6cb2f5d2b', slot: "content" }, this.i18n('goToPage'))),
            h("gux-popover", { key: 'dfc6e87c29e082fe2de4e7e5ca4504996fdb648b', "is-open": this.isOpen, for: "popover-target" }, h("span", { key: '0dff29cc2478921d133c73c56922ad42f98dc309', slot: "title" }, this.i18n('goToPage')), h("gux-form-field-number", { key: '910764919a171ec5d15215856011353acd23079c' }, h("input", { key: 'f12b964eafa335c9626d4cf5978e7a7ab68ed196', slot: "input", type: "number", ref: el => (this.inputElement = el), min: "1", max: this.totalPages, value: "1", onKeyDown: evt => ['e', 'E', '+', '-', '.'].includes(evt.key) &&
                    evt.preventDefault() }), h("label", { key: '5175b0b5d341d49b770e29cb80ae9c5d73a35f42', slot: "label" })))
        ];
    }
    get root() { return getElement(this); }
    static get watchers() { return {
        "disabled": ["watchIsDisabled"]
    }; }
};
__decorate([
    OnClickOutside({ triggerEvents: 'mousedown' })
], GuxPaginationEllipsisButton.prototype, "onClickOutside", null);
GuxPaginationEllipsisButton.style = guxPaginationEllipsisButtonCss;

export { GuxFormFieldNumber as gux_form_field_number, GuxPaginationEllipsisButton as gux_pagination_ellipsis_button };
