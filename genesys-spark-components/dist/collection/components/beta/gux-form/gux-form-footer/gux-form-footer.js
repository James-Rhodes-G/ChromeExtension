import { h, Host } from "@stencil/core";
import { trackComponent } from "../../../../utils/tracking/usage";
/**
 * @slot - Slot for footer element.
 */
export class GuxFormFooter {
    constructor() {
        this.placement = 'page-desktop';
    }
    componentWillLoad() {
        trackComponent(this.root, { variant: this.placement });
    }
    render() {
        return (h(Host, { key: '4f6079d93cee9ed8f9ac2e99c23c61ce4266621e', class: {
                [`gux-form-footer-${this.placement}`]: true
            } }, h("slot", { key: '099c671fbbf9d2465a54e14c5314b219eda9fb74' })));
    }
    static get is() { return "gux-form-footer"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-form-footer.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-form-footer.css"]
        };
    }
    static get properties() {
        return {
            "placement": {
                "type": "string",
                "attribute": "placement",
                "mutable": false,
                "complexType": {
                    "original": "GuxFormFooterPlacement",
                    "resolved": "\"page-desktop\" | \"page-mobile\" | \"side-sheet-desktop\"",
                    "references": {
                        "GuxFormFooterPlacement": {
                            "location": "import",
                            "path": "./gux-form-footer.types",
                            "id": "src/components/beta/gux-form/gux-form-footer/gux-form-footer.types.ts::GuxFormFooterPlacement"
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
                "defaultValue": "'page-desktop'"
            }
        };
    }
    static get elementRef() { return "root"; }
}
