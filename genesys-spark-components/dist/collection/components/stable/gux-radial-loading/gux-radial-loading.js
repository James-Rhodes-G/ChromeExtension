import { h } from "@stencil/core";
import { buildI18nForComponent } from "../../../i18n";
import { trackComponent } from "../../../utils/tracking/usage";
import { GuxSpinnerState } from "./gux-radial-loading.functional";
import modalComponentResources from "./i18n/en.json";
export class GuxRadialLoading {
    constructor() {
        /**
         * The display context the component is in.
         */
        this.context = 'modal';
        /**
         * Localized text to provide an accessible label for the component.
         * If no screenreader text is provided, the localized string "Loading" will be used by default.
         */
        this.screenreaderText = '';
    }
    async componentWillLoad() {
        trackComponent(this.root, { variant: this.context });
        this.getI18nValue = await buildI18nForComponent(this.root, modalComponentResources);
    }
    render() {
        return (h(GuxSpinnerState, { key: '998485d0f304fc0fd84dfaef872b9346455ef19f', context: this.context, screenreaderText: this.screenreaderText || this.getI18nValue('loading') }));
    }
    static get is() { return "gux-radial-loading"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-radial-loading.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-radial-loading.css"]
        };
    }
    static get properties() {
        return {
            "context": {
                "type": "string",
                "attribute": "context",
                "mutable": false,
                "complexType": {
                    "original": "GuxRadialLoadingContext",
                    "resolved": "\"full-page\" | \"input\" | \"modal\"",
                    "references": {
                        "GuxRadialLoadingContext": {
                            "location": "import",
                            "path": "./gux-radial-loading.types",
                            "id": "src/components/stable/gux-radial-loading/gux-radial-loading.types.ts::GuxRadialLoadingContext"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The display context the component is in."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'modal'"
            },
            "screenreaderText": {
                "type": "string",
                "attribute": "screenreader-text",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Localized text to provide an accessible label for the component.\nIf no screenreader text is provided, the localized string \"Loading\" will be used by default."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "''"
            }
        };
    }
    static get elementRef() { return "root"; }
}
