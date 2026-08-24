'use strict';

var index = require('./index-BLhHoh_r.js');
var index$1 = require('./index-QInGO-Pu.js');
var onMutation = require('./on-mutation-BoagtLIt.js');
var hasSlot = require('./has-slot-BFTyqu_U.js');
var usage = require('./usage-v50bi18B.js');
var guxFormFieldError = require('./gux-form-field-error-BRPetX-t.js');
var guxFormFieldContainer = require('./gux-form-field-container-Fmn2fSq-.js');
var guxFormField_service = require('./gux-form-field.service-MaWFZxSN.js');
var preventBrowserValidationStyling = require('./prevent-browser-validation-styling-Dcbciyyc.js');
var onAttributeChange = require('./on-attribute-change-Cv7L_5Zv.js');
var simulateNativeEvent = require('./simulate-native-event-_MPnVmRN.js');
require('./get-closest-element-CfyZl7i7.js');
require('./random-html-id-DH9-ntZu.js');
require('./log-error-nWO_o1C3.js');

const uploadFile = "Upload file";
const uploadFiles = "Upload files";
const changeFile = "Change file";
const changeFiles = "Change files";
const clickToUpload = "Click to upload";
const dragAndDropFileInstructions = "Drag and drop a file here or";
const dragAndDropFilesInstructions = "Drag and drop files here or";
var componentResources = {
	uploadFile: uploadFile,
	uploadFiles: uploadFiles,
	changeFile: changeFile,
	changeFiles: changeFiles,
	clickToUpload: clickToUpload,
	dragAndDropFileInstructions: dragAndDropFileInstructions,
	dragAndDropFilesInstructions: dragAndDropFilesInstructions
};

const guxFormFieldFileCss = ".gux-form-field-container{display:flex;flex-direction:column}.gux-form-field-container.gux-beside{flex-direction:row}.gux-form-field-error{display:none;flex-direction:row;flex-wrap:nowrap;gap:var(--gse-ui-formControl-helper-gap);place-content:stretch flex-start;padding:var(--gse-ui-formControl-helper-errorPadding);font-family:var(--gse-ui-formControl-helper-helperText-fontFamily);font-size:var(--gse-ui-formControl-helper-helperText-fontSize);line-height:var(--gse-ui-formControl-helper-helperText-lineHeight);color:var(--gse-ui-formControl-helper-errorColor)}.gux-form-field-error.gux-show{display:flex}.gux-form-field-error gux-icon{flex:0 1 auto;order:0;color:var(--gse-ui-formControl-helper-errorColor)}.gux-form-field-error .gux-message{flex:0 1 auto;align-self:auto;order:0}.gux-form-field-label{display:inline-flex;flex:1 0 auto}.gux-form-field-label ::slotted(label){min-inline-size:0}.gux-form-field-label ::slotted(gux-label-info-beta){padding-inline-start:var(--gse-ui-formControl-formField-gap)}.gux-form-field-label.gux-beside{position:relative;inset-block-start:var(--gse-ui-formControl-input-top);inline-size:fit-content;min-inline-size:var(--gse-ui-formControl-input-textfield-minWidth);max-inline-size:fit-content;margin-inline-end:var(--gse-ui-formControl-group-gapItems)}.gux-form-field-label.gux-above{padding-block-end:var(--gse-ui-formControl-formField-gap)}.gux-form-field-label.gux-screenreader{position:absolute;top:auto;left:-10000px;width:1px;height:1px;overflow:hidden}.gux-form-field-help{display:none;flex-direction:row;flex-wrap:nowrap;place-content:stretch flex-start;align-items:flex-start;justify-content:flex-start;padding-block-start:var(--gse-ui-formControl-formField-gap);font-family:var(--gse-ui-formControl-helper-helperText-fontFamily);font-size:var(--gse-ui-formControl-helper-helperText-fontSize);line-height:var(--gse-ui-formControl-helper-helperText-lineHeight);color:var(--gse-ui-formControl-helper-defaultColor)}.gux-form-field-help.gux-show{display:flex}.gux-form-field-help .gux-message{flex:0 1 auto;align-self:none;order:0}:host{display:block}::slotted(label){font-family:var(--gse-ui-formControl-label-textBold-fontFamily);font-size:var(--gse-ui-formControl-label-textBold-fontSize);font-weight:var(--gse-ui-formControl-label-textBold-fontWeight);line-height:var(--gse-ui-formControl-label-textBold-lineHeight);color:var(--gse-ui-formControl-label-labelColor)}.gux-input-and-error-container{display:flex;flex-grow:1;flex-direction:column;gap:var(--gse-ui-fileUpload-mainContainer-gap)}.gux-drop-container{box-sizing:border-box;display:flex;flex-direction:column;flex-wrap:nowrap;gap:var(--gse-ui-fileUpload-dragDrop-btnText-gap);margin-inline:0;font-family:var(--gse-ui-fileUpload-dragAndDrop-dropZone-text-fontFamily);font-size:var(--gse-ui-fileUpload-dragAndDrop-dropZone-text-fontSize);font-weight:var(--gse-ui-fileUpload-dragAndDrop-dropZone-text-fontWeight);line-height:var(--gse-ui-fileUpload-dragAndDrop-dropZone-text-lineHeight);color:var(--gse-ui-fileUpload-dragAndDrop-dropZoneText-color)}.gux-drop-container.gux-drop-zone{place-content:stretch center;align-items:center;min-block-size:var(--gse-ui-fileUpload-dragAndDrop-dropZone-minHeight);padding:20px;border:var(--gse-ui-fileUpload-dragAndDrop-dropZone-default-border-width) var(--gse-ui-fileUpload-dragAndDrop-dropZone-default-border-style) var(--gse-ui-fileUpload-dragAndDrop-dropZone-default-border-color);border-radius:var(--gse-ui-fileUpload-dropZone-borderRadius)}.gux-drop-container.gux-drop-zone.gux-drag-over:not(.gux-disabled){background-color:var(--gse-ui-fileUpload-dragAndDrop-dropZone-background-active);border:var(--gse-ui-fileUpload-dragAndDrop-dropZone-active-border-width) var(--gse-ui-fileUpload-dragAndDrop-dropZone-active-border-style) var(--gse-ui-fileUpload-dragAndDrop-dropZone-active-border-color)}.gux-drop-container.gux-drop-zone.gux-disabled{border-color:rgba(0, 0, 64, 0.2509803922)}.gux-drop-container.gux-drop-zone.gux-disabled .gux-drag-and-drop-text{opacity:0.5}.gux-offscreen{position:absolute;top:auto;left:-10000px;width:1px;height:1px;overflow:hidden}.gux-proxy-button{inline-size:fit-content;border-radius:var(--gse-ui-button-borderRadius)}.gux-proxy-button:focus-within{outline:var(--gse-semantic-focusOutline-md-borderWidth) solid var(--gse-semantic-border-focus);outline-offset:var(--gse-semantic-focusOutline-offset)}.gux-file-list{display:flex;flex-direction:column;gap:var(--gse-ui-fileUpload-fileCard-cardGroup-gap);inline-size:100%}";

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
const GuxFormFieldFileBeta = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
    onGuxRemoveFile(event) {
        this.removeFile(event.detail);
    }
    async componentWillLoad() {
        this.getI18nValue = await index$1.buildI18nForComponent(this.root, componentResources);
        this.setInput();
        this.hasError = hasSlot.hasSlot(this.root, 'error');
        this.hasHelp = hasSlot.hasSlot(this.root, 'help');
        this.labelInfo = this.root.querySelector('[slot=label-info]');
        usage.trackComponent(this.root);
    }
    disconnectedCallback() {
        var _a, _b, _c;
        (_a = this.disabledObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
        (_b = this.requiredObserver) === null || _b === void 0 ? void 0 : _b.disconnect();
        (_c = this.multipleObserver) === null || _c === void 0 ? void 0 : _c.disconnect();
    }
    render() {
        return (index.h(guxFormFieldContainer.GuxFormFieldContainer, { key: '8451c2a30bb00d14fad89e1fbb993a1c5058ad5a', labelPosition: "above" }, index.h(guxFormFieldContainer.GuxFormFieldLabel, { key: '3dcf64d426c989bb005eddb277411e8bea6b1852', position: "above", required: this.required }, index.h("slot", { key: '3ea96a58a420162f051ffaeb07cc0e3697cf695a', name: "label" }), index.h("gux-form-field-label-indicator", { key: '924a17317d4b72fc4c69e5cfb38cf384db936b79', variant: this.indicatorMark, required: this.required }), index.h("slot", { key: 'b381194dade9716256eb6fab4e52d6916a5c275b', name: "label-info" })), index.h("div", { key: '6226c9f869e8ecef880151f338bc97fcb55869a4', class: "gux-input-and-error-container" }, index.h(guxFormFieldError.GuxFormFieldHelp, { key: 'ffac960d9eecf25043264127195d89d22d789c79', show: this.hasHelp }, index.h("slot", { key: 'a11355486ece569db8df0933ac7924792e891ef9', name: "help" })), this.renderInputSlot(), index.h(guxFormFieldError.GuxFormFieldError, { key: '276793d8e2fde30fddcd52ced436aeab2e056c17', show: this.hasError }, index.h("slot", { key: 'ea31b2604bfc7e070d857659b43badcc70fd3afc', name: "error" })), this.renderFileList())));
    }
    setInput() {
        this.input = guxFormField_service.getSlottedInput(this.root, 'input[type="file"][slot="input"]');
        this.input.addEventListener('input', () => {
            index.forceUpdate(this.root);
        });
        preventBrowserValidationStyling.preventBrowserValidationStyling(this.input);
        this.disabled = this.input.disabled;
        this.required = this.input.required;
        this.multiple = this.input.multiple;
        this.disabledObserver = onAttributeChange.onDisabledChange(this.input, (disabled) => {
            this.disabled = disabled;
        });
        this.requiredObserver = onAttributeChange.onRequiredChange(this.input, (required) => {
            this.required = required;
        });
        this.multipleObserver = onAttributeChange.onMultipleChange(this.input, (multiple) => {
            this.multiple = multiple;
        });
        guxFormField_service.validateFormIds(this.root, this.input);
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
        simulateNativeEvent.simulateNativeEvent(this.root, 'input');
        simulateNativeEvent.simulateNativeEvent(this.root, 'change');
        index.forceUpdate(this.root);
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
        return (index.h("div", { class: "gux-file-list" }, files.map((file, index$1) => {
            return (index.h("slot", { name: `file-${index$1}` }, index.h("gux-file-list-item", { name: file.name, index: index$1, disabled: this.disabled })));
        })));
    }
    renderInputSlot() {
        return (index.h("div", { ref: el => (this.dropContainer = el), class: {
                'gux-drop-container': true,
                'gux-drop-zone': this.dragAndDrop,
                'gux-disabled': this.disabled
            }, onDrop: event => this.onDrop(event), onDragOver: event => this.onDragOver(event), onDragEnter: event => this.onDragOver(event), onDragLeave: event => this.onDragLeave(event) }, this.dragAndDrop && (index.h("div", { class: "gux-drag-and-drop-text" }, this.getDropZoneText())), index.h("div", { class: "gux-proxy-button" }, index.h("gux-button-slot", { accent: "tertiary" }, index.h("button", { tabIndex: -1, type: "button", disabled: this.disabled, onClick: e => this.onProxyFileButtonClick(e) }, index.h("div", null, this.getProxyButtonText()))), index.h("div", { class: "gux-offscreen" }, index.h("slot", { name: "input", onSlotchange: () => this.setInput() })))));
    }
    get root() { return index.getElement(this); }
};
__decorate([
    onMutation.OnMutation({ childList: true, subtree: true })
], GuxFormFieldFileBeta.prototype, "onMutation", null);
GuxFormFieldFileBeta.style = guxFormFieldFileCss;

exports.gux_form_field_file_beta = GuxFormFieldFileBeta;
