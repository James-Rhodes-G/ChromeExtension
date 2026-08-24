import { h } from "@stencil/core";
import { trackComponent } from "../../../../utils/tracking/usage";
import { buildI18nForComponent } from "../../../../i18n/index";
import translationResources from "./i18n/en.json";
import { hasDisabledParent, returnActionTypeIcon } from "../gux-rich-text-editor.service";
export class GuxRichTextEditorAction {
    constructor() {
        this.disabled = false;
        this.isActive = false;
    }
    async componentWillLoad() {
        trackComponent(this.root, { variant: this.action });
        this.i18n = await buildI18nForComponent(this.root, translationResources);
    }
    renderTooltip() {
        if (!this.disabled) {
            return (h("gux-tooltip-beta", null, h("div", { slot: "content" }, this.i18n(this.action))));
        }
    }
    renderActionButton() {
        return (h("gux-button-slot", { accent: "ghost", "icon-only": true }, h("button", { type: "button", disabled: this.disabled || hasDisabledParent(this.root), class: { 'gux-is-pressed': this.isActive }, "aria-pressed": this.isActive.toString() }, h("gux-icon", { "icon-name": returnActionTypeIcon(this.action), decorative: true, size: "small" }), h("gux-screen-reader-beta", null, this.i18n(this.action))), this.renderTooltip()));
    }
    render() {
        return this.renderActionButton();
    }
    static get is() { return "gux-rich-text-editor-action"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-rich-text-editor-action.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-rich-text-editor-action.css"]
        };
    }
    static get properties() {
        return {
            "action": {
                "type": "string",
                "attribute": "action",
                "mutable": false,
                "complexType": {
                    "original": "GuxRichTextEditorActionTypes",
                    "resolved": "\"blockQuote\" | \"bold\" | \"bulletList\" | \"clearFormatting\" | \"codeblock\" | \"delete\" | \"italic\" | \"orderedList\" | \"redo\" | \"strike\" | \"underline\" | \"undo\"",
                    "references": {
                        "GuxRichTextEditorActionTypes": {
                            "location": "import",
                            "path": "./gux-rich-text-editor-action.types",
                            "id": "src/components/beta/gux-rich-text-editor/gux-rich-text-editor-action/gux-rich-text-editor-action.types.ts::GuxRichTextEditorActionTypes"
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
            "isActive": {
                "type": "boolean",
                "attribute": "is-active",
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
