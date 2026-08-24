import { r as registerInstance, h, H as Host, a as getElement } from './index-xFL2agjT.js';
import { c as calculateInputDisabledState, o as onInputDisabledStateChange } from './on-input-disabled-state-change-Cb3FOYGS.js';
import { O as OnMutation } from './on-mutation-CQXoeN9i.js';
import { p as preventBrowserValidationStyling } from './prevent-browser-validation-styling-PYfNAK8p.js';
import { h as hasSlot } from './has-slot-qzV3vtOw.js';
import { G as GuxFormFieldError, a as GuxFormFieldHelp } from './gux-form-field-error-CvxwCzsi.js';
import { g as getSlottedInput, v as validateFormIds } from './gux-form-field.service-C3WKbzwR.js';
import { t as trackComponent } from './usage-D2Q7fj4V.js';
import './random-html-id-D9jKBqIb.js';
import './log-error-DxtJDeL9.js';
import './simulate-native-event-BMRf5pjV.js';

const guxFormFieldRadioCss = ".gux-form-field-error{display:none;flex-direction:row;flex-wrap:nowrap;gap:var(--gse-ui-formControl-helper-gap);place-content:stretch flex-start;padding:var(--gse-ui-formControl-helper-errorPadding);font-family:var(--gse-ui-formControl-helper-helperText-fontFamily);font-size:var(--gse-ui-formControl-helper-helperText-fontSize);line-height:var(--gse-ui-formControl-helper-helperText-lineHeight);color:var(--gse-ui-formControl-helper-errorColor)}.gux-form-field-error.gux-show{display:flex}.gux-form-field-error gux-icon{flex:0 1 auto;order:0;color:var(--gse-ui-formControl-helper-errorColor)}.gux-form-field-error .gux-message{flex:0 1 auto;align-self:auto;order:0}.gux-form-field-help{display:none;flex-direction:row;flex-wrap:nowrap;place-content:stretch flex-start;align-items:flex-start;justify-content:flex-start;padding-block-start:var(--gse-ui-formControl-formField-gap);font-family:var(--gse-ui-formControl-helper-helperText-fontFamily);font-size:var(--gse-ui-formControl-helper-helperText-fontSize);line-height:var(--gse-ui-formControl-helper-helperText-lineHeight);color:var(--gse-ui-formControl-helper-defaultColor)}.gux-form-field-help.gux-show{display:flex}.gux-form-field-help .gux-message{flex:0 1 auto;align-self:none;order:0}:host{display:block;padding-block-start:4px}:host(.gux-disabled){cursor:not-allowed;opacity:var(--gse-ui-radioButton-disabled-opacity)}:host(.gux-disabled) ::slotted(label){cursor:not-allowed}:host(.gux-input-error) input[type=radio]:checked::before{-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 8C5 6.31563 6.31563 5 8 5C9.65625 5 11 6.31563 11 8C11 9.65625 9.65625 11 8 11C6.31563 11 5 9.65625 5 8ZM16 8C16 12.4187 12.4187 16 8 16C3.58125 16 0 12.4187 0 8C0 3.58125 3.58125 0 8 0C12.4187 0 16 3.58125 16 8ZM8 1.5C4.40938 1.5 1.5 4.40938 1.5 8C1.5 11.5906 4.40938 14.5 8 14.5C11.5906 14.5 14.5 11.5906 14.5 8C14.5 4.40938 11.5906 1.5 8 1.5Z' /%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3Csvg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 8C5 6.31563 6.31563 5 8 5C9.65625 5 11 6.31563 11 8C11 9.65625 9.65625 11 8 11C6.31563 11 5 9.65625 5 8ZM16 8C16 12.4187 12.4187 16 8 16C3.58125 16 0 12.4187 0 8C0 3.58125 3.58125 0 8 0C12.4187 0 16 3.58125 16 8ZM8 1.5C4.40938 1.5 1.5 4.40938 1.5 8C1.5 11.5906 4.40938 14.5 8 14.5C11.5906 14.5 14.5 11.5906 14.5 8C14.5 4.40938 11.5906 1.5 8 1.5Z' /%3E%3C/svg%3E\");background:var(--gse-ui-radioButton-icon-error-foregroundColor)}:host(.gux-input-error) ::slotted(input[type=radio]:not(:checked))::before{-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 8C16 12.4187 12.4187 16 8 16C3.58125 16 0 12.4187 0 8C0 3.58125 3.58125 0 8 0C12.4187 0 16 3.58125 16 8ZM8 1.5C4.40937 1.5 1.5 4.40937 1.5 8C1.5 11.5906 4.40937 14.5 8 14.5C11.5906 14.5 14.5 11.5906 14.5 8C14.5 4.40937 11.5906 1.5 8 1.5Z' /%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3Csvg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 8C16 12.4187 12.4187 16 8 16C3.58125 16 0 12.4187 0 8C0 3.58125 3.58125 0 8 0C12.4187 0 16 3.58125 16 8ZM8 1.5C4.40937 1.5 1.5 4.40937 1.5 8C1.5 11.5906 4.40937 14.5 8 14.5C11.5906 14.5 14.5 11.5906 14.5 8C14.5 4.40937 11.5906 1.5 8 1.5Z' /%3E%3C/svg%3E\");background:var(--gse-ui-radioButton-icon-error-foregroundColor)}:host(.gux-input-error) .gux-form-field-error{font-family:var(--gse-ui-formControl-helper-helperText-fontFamily);color:var(--gse-ui-radioButton-icon-error-foregroundColor)}.gux-input-label{display:flex;flex-direction:row;gap:var(--gse-ui-radioButton-helper-gap)}.gux-input-label .gux-label{display:flex;flex-direction:column;line-height:var(--gse-ui-radioButton-label-text-lineHeight)}.gux-input-label .gux-input{line-height:16px}::slotted(input[type=radio]){display:inline-grid;inline-size:var(--gse-ui-radioButton-icon-width);block-size:var(--gse-ui-radioButton-icon-height);margin:0;vertical-align:middle;color:var(--gse-ui-radioButton-icon-default-unselectedForegroundColor);text-align:center;-webkit-appearance:none;appearance:none;cursor:pointer;outline:none;border:0}::slotted(input[type=radio])::before{grid-area:1/1;content:\"\";border-radius:50%}::slotted(input[type=radio]:focus-visible){outline:var(--gse-ui-radioButton-focus-border-width) var(--gse-ui-radioButton-focus-border-style) var(--gse-ui-radioButton-focus-border-color);outline-offset:var(--gse-semantic-focusOutline-offset);border-radius:var(--gse-ui-radioButton-focus-borderRadius)}::slotted(input[type=radio]:not(:checked))::before{-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M16 8C16 12.4187 12.4187 16 8 16C3.58125 16 0 12.4187 0 8C0 3.58125 3.58125 0 8 0C12.4187 0 16 3.58125 16 8ZM8 1.5C4.40937 1.5 1.5 4.40937 1.5 8C1.5 11.5906 4.40937 14.5 8 14.5C11.5906 14.5 14.5 11.5906 14.5 8C14.5 4.40937 11.5906 1.5 8 1.5Z' fill-rule='evenodd' clip-rule='evenodd' /%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M16 8C16 12.4187 12.4187 16 8 16C3.58125 16 0 12.4187 0 8C0 3.58125 3.58125 0 8 0C12.4187 0 16 3.58125 16 8ZM8 1.5C4.40937 1.5 1.5 4.40937 1.5 8C1.5 11.5906 4.40937 14.5 8 14.5C11.5906 14.5 14.5 11.5906 14.5 8C14.5 4.40937 11.5906 1.5 8 1.5Z' fill-rule='evenodd' clip-rule='evenodd' /%3E%3C/svg%3E\");background:var(--gse-ui-radioButton-icon-default-unselectedForegroundColor)}::slotted(input[type=radio]:not(:checked):not(:disabled):hover)::before{-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M16 8C16 12.4187 12.4187 16 8 16C3.58125 16 0 12.4187 0 8C0 3.58125 3.58125 0 8 0C12.4187 0 16 3.58125 16 8ZM8 1.5C4.40937 1.5 1.5 4.40937 1.5 8C1.5 11.5906 4.40937 14.5 8 14.5C11.5906 14.5 14.5 11.5906 14.5 8C14.5 4.40937 11.5906 1.5 8 1.5Z' fill-rule='evenodd' clip-rule='evenodd' /%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M16 8C16 12.4187 12.4187 16 8 16C3.58125 16 0 12.4187 0 8C0 3.58125 3.58125 0 8 0C12.4187 0 16 3.58125 16 8ZM8 1.5C4.40937 1.5 1.5 4.40937 1.5 8C1.5 11.5906 4.40937 14.5 8 14.5C11.5906 14.5 14.5 11.5906 14.5 8C14.5 4.40937 11.5906 1.5 8 1.5Z' fill-rule='evenodd' clip-rule='evenodd' /%3E%3C/svg%3E\");background:var(--gse-ui-radioButton-icon-hover-foregroundColor)}::slotted(input[type=radio]:checked:not(:disabled):hover)::before{-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 8C5 6.31563 6.31563 5 8 5C9.65625 5 11 6.31563 11 8C11 9.65625 9.65625 11 8 11C6.31563 11 5 9.65625 5 8ZM16 8C16 12.4187 12.4187 16 8 16C3.58125 16 0 12.4187 0 8C0 3.58125 3.58125 0 8 0C12.4187 0 16 3.58125 16 8ZM8 1.5C4.40938 1.5 1.5 4.40938 1.5 8C1.5 11.5906 4.40938 14.5 8 14.5C11.5906 14.5 14.5 11.5906 14.5 8C14.5 4.40938 11.5906 1.5 8 1.5Z' /%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3Csvg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 8C5 6.31563 6.31563 5 8 5C9.65625 5 11 6.31563 11 8C11 9.65625 9.65625 11 8 11C6.31563 11 5 9.65625 5 8ZM16 8C16 12.4187 12.4187 16 8 16C3.58125 16 0 12.4187 0 8C0 3.58125 3.58125 0 8 0C12.4187 0 16 3.58125 16 8ZM8 1.5C4.40938 1.5 1.5 4.40938 1.5 8C1.5 11.5906 4.40938 14.5 8 14.5C11.5906 14.5 14.5 11.5906 14.5 8C14.5 4.40938 11.5906 1.5 8 1.5Z' /%3E%3C/svg%3E\");background:var(--gse-ui-radioButton-icon-hover-foregroundColor)}::slotted(input[type=radio]:checked)::before{-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 8C5 6.31563 6.31563 5 8 5C9.65625 5 11 6.31563 11 8C11 9.65625 9.65625 11 8 11C6.31563 11 5 9.65625 5 8ZM16 8C16 12.4187 12.4187 16 8 16C3.58125 16 0 12.4187 0 8C0 3.58125 3.58125 0 8 0C12.4187 0 16 3.58125 16 8ZM8 1.5C4.40938 1.5 1.5 4.40938 1.5 8C1.5 11.5906 4.40938 14.5 8 14.5C11.5906 14.5 14.5 11.5906 14.5 8C14.5 4.40938 11.5906 1.5 8 1.5Z' /%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3Csvg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 8C5 6.31563 6.31563 5 8 5C9.65625 5 11 6.31563 11 8C11 9.65625 9.65625 11 8 11C6.31563 11 5 9.65625 5 8ZM16 8C16 12.4187 12.4187 16 8 16C3.58125 16 0 12.4187 0 8C0 3.58125 3.58125 0 8 0C12.4187 0 16 3.58125 16 8ZM8 1.5C4.40938 1.5 1.5 4.40938 1.5 8C1.5 11.5906 4.40938 14.5 8 14.5C11.5906 14.5 14.5 11.5906 14.5 8C14.5 4.40938 11.5906 1.5 8 1.5Z' /%3E%3C/svg%3E\");background:var(--gse-ui-radioButton-icon-default-selectedForegroundColor)}::slotted(input[type=radio]:disabled)::before{cursor:not-allowed;opacity:var(--gse-ui-radioButton-disabled-opacity)}::slotted(label){display:inline-block;font-family:var(--gse-ui-radioButton-label-text-fontFamily);font-size:var(--gse-ui-formControl-label-text-fontSize);font-weight:var(--gse-ui-radioButton-label-text-fontWeight);line-height:var(--gse-ui-radioButton-label-text-lineHeight);vertical-align:middle;color:var(--gse-ui-radioButton-label-foregroundColor)}";

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
const GuxFormFieldRadio = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
    get root() { return getElement(this); }
};
__decorate([
    OnMutation({ childList: true, subtree: true })
], GuxFormFieldRadio.prototype, "onMutation", null);
GuxFormFieldRadio.style = guxFormFieldRadioCss;

export { GuxFormFieldRadio as gux_form_field_radio };
