import { h, Host } from "@stencil/core";
/**
 * @slot actions - Slot for gux-rich-text-editor-actions
 */
export class GuxRichTextEditorActionGroup {
    constructor() {
        this.hideActionDivider = false;
    }
    renderActionGroupDivider() {
        if (!this.hideActionDivider) {
            return (h("div", { class: "gux-divider" }));
        }
    }
    render() {
        return (h(Host, { key: 'ae6eedd0bacc0a7b8c07e48a0dcf24bfa65fae32' }, h("div", { key: '5c96762b070a13265e3635f68722854afa305341', class: "gux-action-group-container" }, h("slot", { key: '3a43e2691131b24f25ec64385b325e6fdf89731d' })), this.renderActionGroupDivider()));
    }
    static get is() { return "gux-rich-text-editor-action-group"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-rich-text-editor-action-group.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-rich-text-editor-action-group.css"]
        };
    }
    static get properties() {
        return {
            "hideActionDivider": {
                "type": "boolean",
                "attribute": "hide-action-divider",
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
    static get elementRef() { return "root"; }
}
