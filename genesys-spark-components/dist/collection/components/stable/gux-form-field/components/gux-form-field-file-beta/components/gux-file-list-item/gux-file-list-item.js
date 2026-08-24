import { h } from "@stencil/core";
import { buildI18nForComponent } from "../../../../../../../i18n/index";
import { trackComponent } from "../../../../../../../utils/tracking/usage";
import componentResources from "./i18n/en.json";
export class GuxFileListItem {
    constructor() {
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
    static get is() { return "gux-file-list-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-file-list-item.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-file-list-item.css"]
        };
    }
    static get properties() {
        return {
            "name": {
                "type": "string",
                "attribute": "name",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "index": {
                "type": "number",
                "attribute": "index",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "status": {
                "type": "string",
                "attribute": "status",
                "mutable": false,
                "complexType": {
                    "original": "'default' | 'loading' | 'success' | 'error'",
                    "resolved": "\"default\" | \"error\" | \"loading\" | \"success\"",
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
                "reflect": false
            }
        };
    }
    static get events() {
        return [{
                "method": "guxremovefile",
                "name": "guxremovefile",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "root"; }
}
