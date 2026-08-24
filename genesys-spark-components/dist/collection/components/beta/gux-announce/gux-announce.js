import { h, Host } from "@stencil/core";
import { trackComponent } from "../../../utils/tracking/usage";
import { afterNextRender } from "../../../utils/dom/after-next-render";
/**
 * @slot - element
 */
export class GuxAnnounce {
    constructor() {
        this.politeness = 'polite';
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async guxAnnounce(text) {
        this.containerElement.innerText = '';
        afterNextRender(() => {
            this.containerElement.innerText = text;
        });
    }
    componentWillLoad() {
        trackComponent(this.root);
    }
    render() {
        return (h(Host, { key: '96acda36ac04edb73e9fcc5af71fa83cd30fce92', "aria-live": this.politeness }, h("slot", { key: 'b490bf95af7e150220969cc20383b9406b4bcf19' }), h("div", { key: '2c731aff495c684d15bda9ed006030608bc9a4e7', ref: el => (this.containerElement = el) })));
    }
    static get is() { return "gux-announce-beta"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-announce.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-announce.css"]
        };
    }
    static get properties() {
        return {
            "politeness": {
                "type": "string",
                "attribute": "politeness",
                "mutable": false,
                "complexType": {
                    "original": "GuxAnnouncePoliteness",
                    "resolved": "\"assertive\" | \"off\" | \"polite\"",
                    "references": {
                        "GuxAnnouncePoliteness": {
                            "location": "import",
                            "path": "./gux-announce.types",
                            "id": "src/components/beta/gux-announce/gux-announce.types.ts::GuxAnnouncePoliteness"
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
                "defaultValue": "'polite'"
            }
        };
    }
    static get methods() {
        return {
            "guxAnnounce": {
                "complexType": {
                    "signature": "(text: string) => Promise<void>",
                    "parameters": [{
                            "name": "text",
                            "type": "string",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "root"; }
}
