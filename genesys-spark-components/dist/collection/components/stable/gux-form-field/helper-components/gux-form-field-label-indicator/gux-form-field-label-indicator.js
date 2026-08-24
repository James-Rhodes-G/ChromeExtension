import { h } from "@stencil/core";
import { trackComponent } from "../../../../../utils/tracking/usage";
import { buildI18nForComponent } from "../../../../../i18n";
import translationResources from "./i18n/en.json";
export class GuxFormFieldLabelIndicator {
    constructor() {
        this.variant = 'required';
        this.required = false;
    }
    async componentWillLoad() {
        trackComponent(this.root, { variant: this.variant });
        this.i18n = await buildI18nForComponent(this.root, translationResources);
    }
    render() {
        if (this.variant === 'optional' && !this.required) {
            return (h("span", { class: "gux-form-field-label-indicator-optional" }, "(", this.i18n('optional'), ")"));
        }
        else if (this.variant === 'required' && this.required) {
            return (h("span", { class: "gux-form-field-label-indicator-required", "aria-hidden": "true" }, "*"));
        }
        else {
            return null;
        }
    }
    static get is() { return "gux-form-field-label-indicator"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-form-field-label-indicator.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-form-field-label-indicator.css"]
        };
    }
    static get properties() {
        return {
            "variant": {
                "type": "string",
                "attribute": "variant",
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'required'"
            },
            "required": {
                "type": "boolean",
                "attribute": "required",
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
