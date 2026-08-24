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
import { h, forceUpdate } from "@stencil/core";
import { buildI18nForComponent } from "../../../../../i18n";
import { OnMutation } from "../../../../../utils/decorator/on-mutation";
import { hasSlot } from "../../../../../utils/dom/has-slot";
import { trackComponent } from "../../../../../utils/tracking/usage";
import { GuxFormFieldError, GuxFormFieldContainer, GuxFormFieldHelp, GuxFormFieldLabel } from "../../functional-components/functional-components";
import { getSlottedInput, validateFormIds } from "../../gux-form-field.service";
import { preventBrowserValidationStyling } from "../../../../../utils/dom/prevent-browser-validation-styling";
import { onDisabledChange, onRequiredChange, onMultipleChange } from "../../../../../utils/dom/on-attribute-change";
import simulateNativeEvent from "../../../../../utils/dom/simulate-native-event";
import componentResources from "./i18n/en.json";
/**
 * @slot input - Required slot for input tag
 * @slot label - Required slot for label tag
 * @slot error - Optional slot for error message
 * @slot help - Optional slot for help message
 * @slot label-info - Optional slot for tooltip
 */
export class GuxFormFieldFileBeta {
    constructor() {
        /**
         * Field indicator mark which can show *, (optional) or blank
         * Defaults to required. When set to required, the component will display * for required fields and blank for optional
         * When set to optional, the component will display (optional) for optional and blank for required.
         */
        this.indicatorMark = 'required';
        this.dragAndDrop = false;
        this.disabled = false;
        this.hasError = false;
        this.hasHelp = false;
        this.required = false;
        this.multiple = false;
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
    onGuxRemoveFile(event) {
        this.removeFile(event.detail);
    }
    async componentWillLoad() {
        this.getI18nValue = await buildI18nForComponent(this.root, componentResources);
        this.setInput();
        this.hasError = hasSlot(this.root, 'error');
        this.hasHelp = hasSlot(this.root, 'help');
        this.labelInfo = this.root.querySelector('[slot=label-info]');
        trackComponent(this.root);
    }
    disconnectedCallback() {
        var _a, _b, _c;
        (_a = this.disabledObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
        (_b = this.requiredObserver) === null || _b === void 0 ? void 0 : _b.disconnect();
        (_c = this.multipleObserver) === null || _c === void 0 ? void 0 : _c.disconnect();
    }
    render() {
        return (h(GuxFormFieldContainer, { key: '8451c2a30bb00d14fad89e1fbb993a1c5058ad5a', labelPosition: "above" }, h(GuxFormFieldLabel, { key: '3dcf64d426c989bb005eddb277411e8bea6b1852', position: "above", required: this.required }, h("slot", { key: '3ea96a58a420162f051ffaeb07cc0e3697cf695a', name: "label" }), h("gux-form-field-label-indicator", { key: '924a17317d4b72fc4c69e5cfb38cf384db936b79', variant: this.indicatorMark, required: this.required }), h("slot", { key: 'b381194dade9716256eb6fab4e52d6916a5c275b', name: "label-info" })), h("div", { key: '6226c9f869e8ecef880151f338bc97fcb55869a4', class: "gux-input-and-error-container" }, h(GuxFormFieldHelp, { key: 'ffac960d9eecf25043264127195d89d22d789c79', show: this.hasHelp }, h("slot", { key: 'a11355486ece569db8df0933ac7924792e891ef9', name: "help" })), this.renderInputSlot(), h(GuxFormFieldError, { key: '276793d8e2fde30fddcd52ced436aeab2e056c17', show: this.hasError }, h("slot", { key: 'ea31b2604bfc7e070d857659b43badcc70fd3afc', name: "error" })), this.renderFileList())));
    }
    setInput() {
        this.input = getSlottedInput(this.root, 'input[type="file"][slot="input"]');
        this.input.addEventListener('input', () => {
            forceUpdate(this.root);
        });
        preventBrowserValidationStyling(this.input);
        this.disabled = this.input.disabled;
        this.required = this.input.required;
        this.multiple = this.input.multiple;
        this.disabledObserver = onDisabledChange(this.input, (disabled) => {
            this.disabled = disabled;
        });
        this.requiredObserver = onRequiredChange(this.input, (required) => {
            this.required = required;
        });
        this.multipleObserver = onMultipleChange(this.input, (multiple) => {
            this.multiple = multiple;
        });
        validateFormIds(this.root, this.input);
    }
    getDropZoneText() {
        if (this.multiple) {
            return this.getI18nValue('dragAndDropFilesInstructions');
        }
        else {
            return this.getI18nValue('dragAndDropFileInstructions');
        }
    }
    getProxyButtonText() {
        if (this.dragAndDrop) {
            return this.getI18nValue('clickToUpload');
        }
        else if (this.multiple) {
            if (this.input.files.length > 0) {
                return this.getI18nValue('changeFiles');
            }
            return this.getI18nValue('uploadFiles');
        }
        else {
            if (this.input.files.length > 0) {
                return this.getI18nValue('changeFile');
            }
            return this.getI18nValue('uploadFile');
        }
    }
    removeFile(index) {
        const fileList = this.input.files;
        const dt = new DataTransfer();
        for (let i = 0; i < fileList.length; i++) {
            if (index !== i) {
                dt.items.add(fileList[i]);
            }
        }
        this.modifyInputFiles(dt.files);
    }
    modifyInputFiles(files) {
        this.input.files = files;
        simulateNativeEvent(this.root, 'input');
        simulateNativeEvent(this.root, 'change');
        forceUpdate(this.root);
    }
    onProxyFileButtonClick(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        this.input.focus();
        this.input.click();
    }
    onDrop(event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.disabled) {
            return;
        }
        const currentFileList = this.input.files;
        const newFileList = event.dataTransfer.items;
        const dt = new DataTransfer();
        if (this.multiple) {
            for (let i = 0; i < currentFileList.length; i++) {
                dt.items.add(currentFileList[i]);
            }
        }
        for (let i = 0; i < newFileList.length; i++) {
            const item = newFileList[i];
            if (item.kind === 'file' && item.webkitGetAsEntry().isFile) {
                dt.items.add(item.getAsFile());
                if (!this.multiple) {
                    break;
                }
            }
        }
        this.dropContainer.classList.remove('gux-drag-over');
        this.modifyInputFiles(dt.files);
    }
    onDragOver(event) {
        event.preventDefault();
        event.stopPropagation();
        if (!this.disabled) {
            this.dropContainer.classList.add('gux-drag-over');
        }
    }
    onDragLeave(event) {
        event.preventDefault();
        event.stopPropagation();
        this.dropContainer.classList.remove('gux-drag-over');
    }
    renderFileList() {
        const files = Array.from(this.input.files || new DataTransfer().files);
        if (files.length === 0) {
            return null;
        }
        return (h("div", { class: "gux-file-list" }, files.map((file, index) => {
            return (h("slot", { name: `file-${index}` }, h("gux-file-list-item", { name: file.name, index: index, disabled: this.disabled })));
        })));
    }
    renderInputSlot() {
        return (h("div", { ref: el => (this.dropContainer = el), class: {
                'gux-drop-container': true,
                'gux-drop-zone': this.dragAndDrop,
                'gux-disabled': this.disabled
            }, onDrop: event => this.onDrop(event), onDragOver: event => this.onDragOver(event), onDragEnter: event => this.onDragOver(event), onDragLeave: event => this.onDragLeave(event) }, this.dragAndDrop && (h("div", { class: "gux-drag-and-drop-text" }, this.getDropZoneText())), h("div", { class: "gux-proxy-button" }, h("gux-button-slot", { accent: "tertiary" }, h("button", { tabIndex: -1, type: "button", disabled: this.disabled, onClick: e => this.onProxyFileButtonClick(e) }, h("div", null, this.getProxyButtonText()))), h("div", { class: "gux-offscreen" }, h("slot", { name: "input", onSlotchange: () => this.setInput() })))));
    }
    static get is() { return "gux-form-field-file-beta"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-form-field-file.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-form-field-file.css"]
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
            "dragAndDrop": {
                "type": "boolean",
                "attribute": "drag-and-drop",
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
            "hasError": {},
            "hasHelp": {},
            "required": {},
            "multiple": {}
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
            }, {
                "name": "guxremovefile",
                "method": "onGuxRemoveFile",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
__decorate([
    OnMutation({ childList: true, subtree: true })
], GuxFormFieldFileBeta.prototype, "onMutation", null);
