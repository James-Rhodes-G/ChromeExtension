import { h, Host } from "@stencil/core";
import { trackComponent } from "../../../utils/tracking/usage";
import { getClosestElement } from "../../../utils/dom/get-closest-element";
export class GuxLink {
    constructor() {
        this.size = 'medium';
        this.standalone = false;
    }
    componentWillLoad() {
        trackComponent(this.root, {
            variant: this.size + (this.standalone ? '-standalone' : '')
        });
    }
    checkBreadcrumbParent() {
        return !!getClosestElement('.gux-breadcrumb-generation', this.root);
    }
    render() {
        return (h(Host, { key: '9bf00be3f4e8906b91364d00f28a6bd5d2fa2f7e', size: this.size, standalone: this.standalone, class: { 'gux-breadcrumb-link': this.checkBreadcrumbParent() } }, h("slot", { key: '519c3642d33eeac030274ba7d3516d6a6cc6edff' })));
    }
    static get is() { return "gux-link-beta"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-link.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-link.css"]
        };
    }
    static get properties() {
        return {
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "'medium' | 'small'",
                    "resolved": "\"medium\" | \"small\"",
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
                "defaultValue": "'medium'"
            },
            "standalone": {
                "type": "boolean",
                "attribute": "standalone",
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
