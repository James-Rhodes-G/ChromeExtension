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
import { buildI18nForComponent } from "../../../../../i18n";
import { OnMutation } from "../../../../../utils/decorator/on-mutation";
import { onRequiredChange } from "../../../../../utils/dom/on-attribute-change";
import { hasSlot } from "../../../../../utils/dom/has-slot";
import { GuxFormFieldHelp, GuxFormFieldError, GuxFormFieldFieldsetContainer, GuxFormFieldVisualLabel, GuxFormFieldScreenreaderLabel } from "../../functional-components/functional-components";
import { getSlotTextContent } from "../../../../../utils/dom/get-slot-text-content";
import { getComputedLabelPosition, setSlotAriaLabelledby, setSlotAriaDescribedby } from "../../gux-form-field.service";
import { trackComponent } from "../../../../../utils/tracking/usage";
import componentResources from "./i18n/en.json";
/**
 * @slot input - Required slot for input tag
 * @slot label - Required slot for label tag
 * @slot error - Optional slot for error message
 * @slot help - Optional slot for help message
 * @slot label-info - Optional slot for label tooltip
 */
export class GuxFormFieldDropdown {
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
        this.hasLabelInfo = false;
    }
    watchValue(hasError) {
        const dropdownSlot = this.root.querySelector('gux-dropdown') ||
            this.root.querySelector('gux-dropdown-multi');
        if (dropdownSlot) {
            dropdownSlot.hasError = hasError;
        }
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
                if (this.dropdownElement.matches(':focus-within')) {
                    void ((_a = this.labelInfo) === null || _a === void 0 ? void 0 : _a.showTooltip());
                    this.hideLabelInfoTimeout = setTimeout(() => {
                        var _a;
                        void ((_a = this.labelInfo) === null || _a === void 0 ? void 0 : _a.hideTooltip());
                    }, 6000);
                }
                break;
            }
            default: {
                if (this.dropdownElement.matches(':focus-within')) {
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
    async componentWillLoad() {
        this.getI18nValue = await buildI18nForComponent(this.root, componentResources);
        this.setInput();
        this.setLabel();
        this.labelInfo = this.root.querySelector('[slot=label-info]');
        this.hasError = hasSlot(this.root, 'error');
        this.hasHelp = hasSlot(this.root, 'help');
        this.hasLabelInfo = hasSlot(this.root, 'label-info');
        trackComponent(this.root, { variant: this.variant });
    }
    disconnectedCallback() {
        if (this.requiredObserver) {
            this.requiredObserver.disconnect();
        }
    }
    renderText(text, condition = false) {
        if (condition) {
            return ' ' + text;
        }
    }
    render() {
        var _a;
        return (h(GuxFormFieldFieldsetContainer, { key: '9020a7db668f3cb5c6ef3db9a230e008ace4bed1', labelPosition: this.computedLabelPosition }, h(GuxFormFieldScreenreaderLabel, { key: '52a423218fba63fa959e8563b323e23316da0ea2' }, (_a = this.label) === null || _a === void 0 ? void 0 :
            _a.textContent, this.renderText(this.getI18nValue('required'), this.required), this.renderText(getSlotTextContent(this.root, 'error'), this.hasError), this.renderText(getSlotTextContent(this.root, 'help'), this.hasHelp), this.renderText(getSlotTextContent(this.root, 'label-info'), this.hasLabelInfo)), h(GuxFormFieldVisualLabel, { key: '61d0d48c3ed153d93c4973615b1285dabc474847', position: this.computedLabelPosition, required: this.required }, h("slot", { key: 'cf6a6a962503f69bc33bb8fe4dbe633561e29985', name: "label", onSlotchange: () => this.setLabel() }), h("gux-form-field-label-indicator", { key: '9d529f92d0fc5977033217a41faf43dcb57bdaf4', variant: this.indicatorMark, required: this.required }), h("slot", { key: '5a93d1502c8337f4037c65fa06870c1244f574ec', name: "label-info" })), h("div", { key: '19ee8d6085059cc637cb46ffee99279c2481ddb8', class: "gux-input-and-error-container" }, h("div", { key: '179346ac87f748081e7a591612f5a69de233e9f1', class: {
                'gux-input': true,
                'gux-input-error': this.hasError
            } }, h("slot", { key: '7a91ec18082348fc7334733f22a36738d74b6d0b' })), h(GuxFormFieldError, { key: 'bb4687aed62b3ba2246967125884897861afdc03', show: this.hasError }, h("slot", { key: '1a7d9292bb9afdfef87cadfd73c042f4ca223ecf', name: "error" })), h(GuxFormFieldHelp, { key: '600311438afad613d07e99aced9b948809b430ae', show: !this.hasError && this.hasHelp }, h("slot", { key: '7590cb2f825a03586d6b4375479cd7c25abbf620', name: "help" })))));
    }
    get variant() {
        const labelPositionVariant = this.labelPosition
            ? this.labelPosition.toLowerCase()
            : 'none';
        const type = 'dropdown';
        return `${type}-${labelPositionVariant}`;
    }
    setInput() {
        this.dropdownElement =
            this.root.querySelector('gux-dropdown') ||
                this.root.querySelector('gux-dropdown-multi');
        this.listboxElement =
            this.root.querySelector('gux-listbox') ||
                this.root.querySelector('gux-listbox-multi');
        this.required = this.dropdownElement.required;
        this.requiredObserver = onRequiredChange(this.dropdownElement, (required) => {
            this.required = required;
        });
        setSlotAriaLabelledby(this.root, this.listboxElement, 'label');
        setSlotAriaDescribedby(this.root, this.listboxElement, 'error');
        setSlotAriaDescribedby(this.root, this.listboxElement, 'help');
    }
    setLabel() {
        this.label = this.root.querySelector('label[slot="label"]');
        this.computedLabelPosition = getComputedLabelPosition(this.label, this.labelPosition);
    }
    static get is() { return "gux-form-field-dropdown"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-form-field-dropdown.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-form-field-dropdown.css"]
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
            "required": {},
            "hasError": {},
            "hasHelp": {},
            "hasLabelInfo": {}
        };
    }
    static get elementRef() { return "root"; }
    static get watchers() {
        return [{
                "propName": "hasError",
                "methodName": "watchValue"
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
], GuxFormFieldDropdown.prototype, "onMutation", null);
