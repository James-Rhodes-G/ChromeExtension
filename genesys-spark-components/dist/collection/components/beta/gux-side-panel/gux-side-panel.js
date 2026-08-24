import { h, Host } from "@stencil/core";
import { trackComponent } from "../../../utils/tracking/usage";
import { hasSlot } from "../../../utils/dom/has-slot";
/**
 * @slot heading - Required slot for the heading
 * @slot description - Optional slot for the description
 * @slot content - Required slot for the content
 * @slot footer - Optional slot for the footer
 */
export class GuxSidePanel {
    constructor() {
        this.size = 'small';
    }
    onDismissHandler() {
        this.sidePanelDismiss.emit();
    }
    componentWillLoad() {
        trackComponent(this.root, { variant: this.size });
    }
    renderDescription() {
        if (hasSlot(this.root, 'description')) {
            return (h("div", { class: "gux-side-panel-description" }, h("slot", { name: "description" })));
        }
        return null;
    }
    render() {
        return (h(Host, { key: 'b57d810edc0a2ee6898f700206ca58d764cd561a', role: "complementary" }, h("div", { key: '8b0203fb024e49d65d204fe3ba98f95466065ae5', class: {
                'gux-side-panel': true,
                [`gux-side-panel-${this.size}`]: true
            } }, h("header", { key: 'ac661f82543e6b7c1a04b5857caeddc44f2d9edf' }, h("slot", { key: '55fcd81910e08d3e69dfdee1cc3c88de09157a81', name: "heading" })), h("gux-dismiss-button", { key: 'e9e358c0990a6c762672ec8ed6dab0afd9947ce8', onClick: this.onDismissHandler.bind(this) }), this.renderDescription(), h("div", { key: 'dd200672f94c8d86240009af60d00b088239510e', class: "gux-side-panel-content" }, h("slot", { key: '73f9de5408b009562ac56278fdaa4335e1de165d', name: "content" })), h("footer", { key: 'd85f5c6f66ab8ddee68cfcd0998a09de03930cdd' }, h("slot", { key: '154b790214c721b0cf20a286fb1083619ebb2b5d', name: "footer" })))));
    }
    static get is() { return "gux-side-panel-beta"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-side-panel.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-side-panel.css"]
        };
    }
    static get properties() {
        return {
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "GuxSidePanelSize",
                    "resolved": "\"large\" | \"medium\" | \"small\"",
                    "references": {
                        "GuxSidePanelSize": {
                            "location": "import",
                            "path": "./gux-side-panel.types",
                            "id": "src/components/beta/gux-side-panel/gux-side-panel.types.tsx::GuxSidePanelSize"
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
                "defaultValue": "'small'"
            }
        };
    }
    static get events() {
        return [{
                "method": "sidePanelDismiss",
                "name": "sidePanelDismiss",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "root"; }
}
