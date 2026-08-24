import { h } from "@stencil/core";
import { trackComponent } from "../../../utils/tracking/usage";
import { logWarn } from "../../../utils/error/log-error";
import { GuxPercentageState, GuxSpinnerState } from "./gux-radial-progress.functional";
import { canShowPercentageState } from "./gux-radial-progress.service";
export class GuxRadialProgress {
    constructor() {
        /**
         * The max value of the progress spinner
         */
        this.max = 100;
        /**
         * Required localized text to provide an accessible label for the component
         */
        this.screenreaderText = '';
    }
    componentWillLoad() {
        trackComponent(this.root);
    }
    componentDidLoad() {
        if (!this.screenreaderText &&
            canShowPercentageState(this.value, this.max)) {
            logWarn(this.root, 'No screenreader-text provided. Provide a localized screenreader-text property for the component.');
        }
    }
    render() {
        return canShowPercentageState(this.value, this.max)
            ? (h(GuxPercentageState, { value: this.value, max: this.max, screenreaderText: this.screenreaderText }))
            : (h(GuxSpinnerState, { screenreaderText: this.screenreaderText }));
    }
    static get is() { return "gux-radial-progress"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-radial-progress.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-radial-progress.css"]
        };
    }
    static get properties() {
        return {
            "value": {
                "type": "number",
                "attribute": "value",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The progress made in the progress spinner compared to the max value"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "max": {
                "type": "number",
                "attribute": "max",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The max value of the progress spinner"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "100"
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
                    "text": "Required localized text to provide an accessible label for the component"
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
