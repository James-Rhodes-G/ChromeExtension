import { h, Host } from "@stencil/core";
import { trackComponent } from "../../../utils/tracking/usage";
/**
 * @slot icon - Required slot for gux-icon
 * @slot title - Required slot for the notification toast title
 * @slot message - Required slot for the notification toast message
 */
export class GuxNotificationToast {
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
        return (h(Host, { key: '1028ea02235e685a46434682add681629d81ed1c' }, h("div", { key: 'a9100ef51dbd153d3b93df43cfc45229da6d1b35', class: `gux-icon gux-${this.accent}` }, h("slot", { key: 'f83911f9ef15beecfe1efa5a445f571c6333df53', name: "icon" })), h("div", { key: '6b642b1effb289db65b2dabf3b684fddc5db0f52', class: "gux-content" }, h("gux-truncate", { key: 'aa35891a528aaa9d1fa20332fc3b7e1c153751e5', class: "gux-title", "max-lines": 1 }, h("slot", { key: '2ef932f47926407f0e0e6bdc2541494029926d0b', name: "title" })), h("gux-truncate", { key: '210594c7defbd0eadeef4b06c89aeb9f028e19e5', class: "gux-message", "max-lines": 2 }, h("slot", { key: '71778069ab9c775f1118628c27ffa5bf48e9f32e', name: "message" }))), h("gux-dismiss-button", { key: 'ef00664ff6305872049296977a8092ae4b0c829d', onClick: this.onDismissClickHandler.bind(this) })));
    }
    onDismissClickHandler(event) {
        event.stopPropagation();
        const dismissEvent = this.guxdismiss.emit();
        if (!dismissEvent.defaultPrevented) {
            this.root.remove();
        }
    }
    static get is() { return "gux-notification-toast-legacy"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-notification-toast.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-notification-toast.css"]
        };
    }
    static get properties() {
        return {
            "accent": {
                "type": "string",
                "attribute": "accent",
                "mutable": false,
                "complexType": {
                    "original": "GuxNotificationToastAccent",
                    "resolved": "\"alert\" | \"neutral\" | \"positive\" | \"warning\"",
                    "references": {
                        "GuxNotificationToastAccent": {
                            "location": "import",
                            "path": "./gux-notification-toast.types",
                            "id": "src/components/legacy/gux-notification-toast-legacy/gux-notification-toast.types.ts::GuxNotificationToastAccent"
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
