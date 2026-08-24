import { h } from "@stencil/core";
import { capitalizeFirstLetter } from "../../../../utils/string/capitalize-first-letter";
import { trackComponent } from "../../../../utils/tracking/usage";
import { buildI18nForComponent } from "../../../../i18n";
import translationResources from "./i18n/en.json";
export class GuxTableToolbarAction {
    constructor() {
        this.accent = 'secondary';
        this.iconOnly = false;
        this.disabled = false;
    }
    handleClick(event) {
        if (this.disabled) {
            event.preventDefault();
            event.stopImmediatePropagation();
        }
    }
    returnActionLocale(action) {
        return this.i18n(`action${capitalizeFirstLetter(action)}`);
    }
    returnActionTypeIcon(action) {
        switch (action) {
            case 'refresh':
                return 'fa/arrows-rotate-regular';
            case 'delete':
                return 'fa/trash-regular';
            case 'export':
                return 'fa/arrow-up-from-line-regular';
            case 'import':
                return 'fa/file-import-regular';
            case 'revert':
                return 'fa/arrow-rotate-left-regular';
            case 'add':
                return 'fa/plus-regular';
            default:
                return 'fa/square-x-regular';
        }
    }
    async componentWillLoad() {
        trackComponent(this.root, { variant: this.action });
        this.i18n = await buildI18nForComponent(this.root, translationResources);
    }
    render() {
        return (h("gux-table-toolbar-custom-action", { key: 'f459ac4d8bb85c52d56e83300e74f658370c2e58', "icon-only": this.iconOnly, accent: this.accent, disabled: this.disabled }, h("span", { key: 'b0c50b3f8d4482f7cf2574c2330d1e4be892b7b0', slot: "text" }, this.returnActionLocale(this.action)), h("gux-icon", { key: '6f04f46a5403ee081a1ddf0761ce496e62ca66e0', slot: "icon", "icon-name": this.returnActionTypeIcon(this.action), decorative: true })));
    }
    static get is() { return "gux-table-toolbar-action"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-table-toolbar-action.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-table-toolbar-action.css"]
        };
    }
    static get properties() {
        return {
            "action": {
                "type": "string",
                "attribute": "action",
                "mutable": false,
                "complexType": {
                    "original": "GuxTableToolbarActionTypes",
                    "resolved": "\"add\" | \"delete\" | \"export\" | \"import\" | \"refresh\" | \"revert\"",
                    "references": {
                        "GuxTableToolbarActionTypes": {
                            "location": "import",
                            "path": "./gux-table-toolbar-action.types",
                            "id": "src/components/stable/gux-table-toolbar/gux-table-toolbar-action/gux-table-toolbar-action.types.ts::GuxTableToolbarActionTypes"
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
            "accent": {
                "type": "string",
                "attribute": "accent",
                "mutable": false,
                "complexType": {
                    "original": "GuxTableToolbarActionAccent",
                    "resolved": "\"ghost\" | \"primary\" | \"secondary\"",
                    "references": {
                        "GuxTableToolbarActionAccent": {
                            "location": "import",
                            "path": "../gux-table-toolbar-action-accents.types",
                            "id": "src/components/stable/gux-table-toolbar/gux-table-toolbar-action-accents.types.ts::GuxTableToolbarActionAccent"
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
                "reflect": false,
                "defaultValue": "'secondary'"
            },
            "iconOnly": {
                "type": "boolean",
                "attribute": "icon-only",
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
            }
        };
    }
    static get elementRef() { return "root"; }
    static get listeners() {
        return [{
                "name": "click",
                "method": "handleClick",
                "target": undefined,
                "capture": true,
                "passive": false
            }];
    }
}
