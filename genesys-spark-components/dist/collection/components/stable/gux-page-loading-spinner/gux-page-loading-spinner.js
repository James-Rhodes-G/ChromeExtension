import { h } from "@stencil/core";
import { trackComponent } from "../../../utils/tracking/usage";
export class GuxPageLoadingSpinner {
    componentWillLoad() {
        trackComponent(this.root);
    }
    render() {
        return (h("gux-radial-loading", { key: 'c7b94a36199c69318067bb31917d17a951bed4ad', class: "gux-spinner", "screenreader-text": this.screenreaderText, context: "full-page" }));
    }
    static get is() { return "gux-page-loading-spinner"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-page-loading-spinner.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-page-loading-spinner.css"]
        };
    }
    static get properties() {
        return {
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
                    "text": "Localized text to provide an accessible label for the component.\nIf no screenreader text is provided, the localized string \"Loading\" will be used by default"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
    static get elementRef() { return "root"; }
}
