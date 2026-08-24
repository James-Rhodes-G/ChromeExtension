import { h, Host } from "@stencil/core";
import { trackComponent } from "../../../utils/tracking/usage";
/**
 * @slot icon - Required slot for gux-icon
 * @slot message - Required slot for the simple toast message
 */
export class GuxSimpleToast {
    constructor() {
        /**
         * The component accent.
         */
        this.accent = 'neutral';
    }
    componentWillLoad() {
        trackComponent(this.root, { variant: this.accent });
    }
    render() {
        return (h(Host, { key: '370cbfe91752486a47623dcad3cb690383c9be20' }, h("div", { key: '9ee2b7c1de15d6cd522396d30890fb5273668e76', class: `gux-icon gux-${this.accent}` }, h("slot", { key: 'c07d623d41fbf26feba320240c89d44dc2b2ea70', name: "icon" })), h("gux-truncate", { key: 'dca0b0fb9b1a20ef990ad89140418412f48224a9', class: "gux-message", "max-lines": 2 }, h("slot", { key: 'bab604744d2170b0bf01d5a6f572c3aa05bc2f69', name: "message" })), h("gux-dismiss-button", { key: 'f21ee0c87e36d92e9d0c6289da860112b2d94ddf', class: "gux-dismiss", position: "inherit", onClick: this.onDismissClickHandler.bind(this) })));
    }
    onDismissClickHandler(event) {
        event.stopPropagation();
        const dismissEvent = this.guxdismiss.emit();
        if (!dismissEvent.defaultPrevented) {
            this.root.remove();
        }
    }
    static get is() { return "gux-simple-toast-legacy"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-simple-toast.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-simple-toast.css"]
        };
    }
    static get properties() {
        return {
            "accent": {
                "type": "string",
                "attribute": "accent",
                "mutable": false,
                "complexType": {
                    "original": "GuxSimpleToastAccent",
                    "resolved": "\"alert\" | \"neutral\" | \"positive\" | \"warning\"",
                    "references": {
                        "GuxSimpleToastAccent": {
                            "location": "import",
                            "path": "./gux-simple-toast.types",
                            "id": "src/components/legacy/gux-simple-toast-legacy/gux-simple-toast.types.ts::GuxSimpleToastAccent"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The component accent."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'neutral'"
            }
        };
    }
    static get events() {
        return [{
                "method": "guxdismiss",
                "name": "guxdismiss",
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
