import { h } from "@stencil/core";
import { trackComponent } from "../../../utils/tracking/usage";
/**
 * @slot - Content of card.
 */
export class GuxCard {
    constructor() {
        /**
         * Card Accent.
         */
        this.accent = 'bordered';
    }
    componentWillLoad() {
        trackComponent(this.root, { variant: this.accent });
    }
    render() {
        return (h("div", { key: '363ba6f0a883e4e2f4a056f6d4d441efb0b3ea2c', class: {
                'gux-card': true,
                [`gux-${this.accent}`]: true
            } }, h("slot", { key: 'e36c2a015923aa961bd1c0a308f2066b702e6272' })));
    }
    static get is() { return "gux-card"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-card.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-card.css"]
        };
    }
    static get properties() {
        return {
            "accent": {
                "type": "string",
                "attribute": "accent",
                "mutable": false,
                "complexType": {
                    "original": "GuxCardAccent",
                    "resolved": "\"bordered\" | \"borderless\" | \"raised\"",
                    "references": {
                        "GuxCardAccent": {
                            "location": "import",
                            "path": "./gux-card.types",
                            "id": "src/components/stable/gux-card/gux-card.types.ts::GuxCardAccent"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Card Accent."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'bordered'"
            }
        };
    }
    static get elementRef() { return "root"; }
}
