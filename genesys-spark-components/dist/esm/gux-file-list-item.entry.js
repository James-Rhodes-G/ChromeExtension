import { r as registerInstance, c as createEvent, h, a as getElement } from './index-xFL2agjT.js';
import { b as buildI18nForComponent } from './index-Dac2qHbK.js';
import { t as trackComponent } from './usage-D2Q7fj4V.js';
import './get-closest-element-Cd4R0amv.js';

const removeFile = "Remove {filename} file";
const uploadingFile = "Uploading {filename} file";
const success = "{filename} file uploaded successfully";
const error = "{filename} file has an error";
var componentResources = {
	removeFile: removeFile,
	uploadingFile: uploadingFile,
	success: success,
	error: error
};

const guxFileListItemCss = ":host{display:block}.gux-file-list-item{display:flex;flex-direction:column;align-items:flex-start;background-color:var(--gse-ui-fileUpload-fileCard-foregroundColor);border:var(--gse-ui-fileUpload-fileCard-mainContainer-default-border-width) var(--gse-ui-fileUpload-fileCard-mainContainer-default-border-style) var(--gse-ui-fileUpload-fileCard-mainContainer-default-border-color);border-radius:var(--gse-ui-fileUpload-fileCard-borderRadius);box-shadow:var(--gse-ui-fileUpload-fileCard-boxShadow)}.gux-file-list-item.gux-disabled{opacity:0.5}.gux-file-list-item.gux-error{padding-block-start:0;border:var(--gse-ui-fileUpload-fileCard-mainContainer-error-border-width) var(--gse-ui-fileUpload-fileCard-mainContainer-error-border-style) var(--gse-ui-fileUpload-fileCard-mainContainer-error-border-color)}.gux-file-list-item .gux-info{box-sizing:border-box;display:flex;gap:var(--gse-ui-fileUpload-fileCard-card-gap);align-items:center;inline-size:100%;block-size:32px;padding:var(--gse-ui-fileUpload-fileCard-card-padding)}.gux-file-list-item .gux-info .gux-file-name{font-family:var(--gse-ui-fileUpload-fileCard-fileName-text-fontFamily);font-size:var(--gse-ui-fileUpload-fileCard-fileName-text-fontSize);font-weight:var(--gse-ui-fileUpload-fileCard-fileName-text-fontWeight);line-height:var(--gse-ui-fileUpload-fileCard-fileName-text-lineHeight);color:var(--gse-ui-fileUpload-fileCard-fileName-default)}.gux-file-list-item .gux-info .gux-indicator[icon-name=\"fa/circle-check-solid\"]{--gse-ui-formControl-label-tooltipTrigger-color:ui.$gse-ui-fileUpload-fileCard-statusIcon-success}.gux-file-list-item .gux-info .gux-indicator[icon-name=\"fa/hexagon-exclamation-solid\"]{--gse-ui-formControl-label-tooltipTrigger-color:ui.$gse-ui-fileUpload-fileCard-statusIcon-error}.gux-file-list-item .gux-info gux-button-slot{inline-size:var(--gse-ui-button-dismiss-small-width);block-size:var(--gse-ui-button-dismiss-small-height)}.gux-file-list-item .gux-info gux-button-slot button{--gse-ui-button-default-paddingIconOnly:4px;inline-size:var(--gse-ui-button-dismiss-small-width);min-inline-size:var(--gse-ui-button-dismiss-small-width);block-size:var(--gse-ui-button-dismiss-small-height)}.gux-file-list-item .gux-additional-info{display:flex;flex-direction:column;gap:var(--gse-ui-fileUpload-fileCard-card-errorCard-errorTextSection-gap);inline-size:100%;padding:var(--gse-ui-fileUpload-fileCard-card-errorCard-mainContainer-padding);font-family:var(--gse-ui-fileUpload-fileCard-error-text-fontFamily);font-size:var(--gse-ui-fileUpload-fileCard-error-text-fontSize);font-weight:var(--gse-ui-fileUpload-fileCard-error-text-fontWeight);line-height:var(--gse-ui-fileUpload-fileCard-error-text-lineHeight);border-block-start:var(--gse-ui-fileUpload-fileCard-mainContainer-default-border-width) var(--gse-ui-fileUpload-fileCard-mainContainer-default-border-style) var(--gse-ui-fileUpload-fileCard-mainContainer-default-border-color)}.gux-file-list-item .gux-additional-info .gux-additional-info-header{padding:var(--gse-ui-fileUpload-fileCard-card-padding);color:var(--gse-ui-fileUpload-fileCard-error-errorMessage)}.gux-file-list-item .gux-additional-info .gux-additional-info-content{padding:var(--gse-ui-fileUpload-fileCard-card-padding);color:var(--gse-ui-fileUpload-fileCard-error-errorHelper)}";

const GuxFileListItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.guxremovefile = createEvent(this, "guxremovefile", 7);
        this.disabled = false;
    }
    async componentWillLoad() {
        this.getI18nValue = await buildI18nForComponent(this.root, componentResources);
        trackComponent(this.root);
    }
    render() {
        return (h("div", { key: 'f3728cb6a3f569b8e40e2306f6f352bbf3ba32d3', class: {
                'gux-file-list-item': true,
                [`gux-${this.status}`]: true,
                'gux-disabled': this.disabled
            } }, h("div", { key: 'ab8b83c2c6e544d5061311b15661d823f2dc48da', class: "gux-info" }, h("gux-truncate", { key: '9d43e488a09c57d3b7c6623609b58571d032e79a' }, h("span", { key: '3026f444ac1c121e3a6cbdb5a084217de0eb9fab', class: "gux-file-name" }, this.name)), this.renderStatusIndicator(), this.renderFileRemoveButton()), this.renderAdditionalInfo()));
    }
    renderStatusIndicator() {
        switch (this.status) {
            case 'loading':
                return (h("gux-radial-loading", { context: "input", "screenreader-text": this.getI18nValue('uploadingFile', {
                        filename: this.name
                    }) }));
            case 'success':
                return (h("gux-icon-tooltip-beta", { "icon-name": "fa/circle-check-solid", class: "gux-indicator" }, h("span", { slot: "content" }, this.getI18nValue('success', { filename: this.name }))));
            case 'error':
                return (h("gux-icon-tooltip-beta", { "icon-name": "fa/hexagon-exclamation-solid", class: "gux-indicator" }, h("span", { slot: "content" }, this.getI18nValue('error', { filename: this.name }))));
            default:
                return null;
        }
    }
    renderFileRemoveButton() {
        if (this.disabled) {
            return null;
        }
        return (h("gux-button-slot", { accent: "ghost", "icon-only": true }, h("button", { type: "button", onClick: () => this.guxremovefile.emit(this.index) }, h("gux-icon", { "icon-name": "fa/xmark-large-regular", size: "small", decorative: true }), h("gux-screen-reader-beta", null, this.getI18nValue('removeFile', { filename: this.name })))));
    }
    renderAdditionalInfo() {
        if (this.status === 'error') {
            return (h("div", { class: "gux-additional-info" }, h("div", { class: "gux-additional-info-header" }, h("slot", { name: "additional-info-header" })), h("div", { class: "gux-additional-info-content" }, h("slot", { name: "additional-info-content" }))));
        }
        return null;
    }
    get root() { return getElement(this); }
};
GuxFileListItem.style = guxFileListItemCss;

export { GuxFileListItem as gux_file_list_item };
