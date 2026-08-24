import { h } from "@stencil/core";
import { trackComponent } from "../../../utils/tracking/usage";
import { hasSlot } from "../../../utils/dom/has-slot";
import { logWarn } from "../../../utils/error/log-error";
/**
 * @slot icon - Required slot for toast type of action
 * @slot title - Optional slot for the toast title
 * @slot message - Required slot for the toast message
 * @slot link - Optional slot for a link in any toast except toast type of action
 * @slot primary-button - Required slot for primary action button in an action toast
 * @slot secondary-button - Optional slot for secondary action button in an action toast
 */
export class GuxToast {
    constructor() {
        this.toastType = 'success';
        this.hasLink = false;
        this.hasPrimaryButton = false;
        this.hasSecondaryButton = false;
    }
    componentWillLoad() {
        trackComponent(this.root, { variant: this.toastType });
        this.hasPrimaryButton = hasSlot(this.root, 'primary-button');
        this.hasSecondaryButton = hasSlot(this.root, 'secondary-button');
        this.hasLink = hasSlot(this.root, 'link');
    }
    componentDidLoad() {
        this.checkAriaLive();
    }
    checkAriaLive() {
        let parent = this.root.parentElement;
        while (parent) {
            if (parent.hasAttribute('aria-live')) {
                return;
            }
            parent = parent.parentElement;
        }
        logWarn(this.root, 'gux-toast must have a parent element with an `aria-live` attribute');
    }
    renderToastIcon() {
        switch (this.toastType) {
            case 'success':
                return (h("gux-icon", { "icon-name": "fa/circle-check-solid", decorative: true }));
            case 'warning':
                return (h("gux-icon", { "icon-name": "fa/triangle-exclamation-solid", decorative: true }));
            case 'error':
                return (h("gux-icon", { "icon-name": "fa/hexagon-exclamation-solid", decorative: true }));
            case 'info':
                return (h("gux-icon", { "icon-name": "fa/circle-info-solid", decorative: true }));
            case 'action':
                return (h("slot", { name: "icon" }));
        }
    }
    renderLink() {
        return (h("div", { class: "gux-buttons-bar" }, h("gux-link-beta", { standalone: true }, h("slot", { name: "link" }))));
    }
    renderActions() {
        return (h("gux-cta-group", { class: "gux-buttons-bar", align: "end" }, this.hasSecondaryButton && (h("gux-button-slot", { slot: "secondary" }, h("slot", { name: "secondary-button" }))), h("gux-button-slot", { slot: "primary" }, h("slot", { name: "primary-button" }))));
    }
    render() {
        return (h("div", { key: '6e7d8b1d5d1d68d4034c264f3c057c11c1cca6ad', class: `gux-toast gux-toast-${this.toastType}` }, h("div", { key: 'af29dbf19d6c7d171b86a80bf43590be55e292d8', class: `gux-icon gux-icon-${this.toastType}` }, this.renderToastIcon()), h("div", { key: '175de88a6cc456281551d99a3a613610d7db9ec1', class: "gux-content" }, h("div", { key: '5fc3473349740b8fe677dc1f23855d3d2bc10d4f', class: "gux-message" }, h("gux-truncate", { key: 'a4daefa59e56363cb3caa6f2353a4da3e67d32e7', class: "gux-message-title", "max-lines": 1 }, h("slot", { key: 'd63b036e3583941c40067d9a59e03fe39554eedf', name: "title" })), h("gux-truncate", { key: 'a4182c156a78d13ce54b318aafa8a993a78f0cf7', class: "gux-message-body", "max-lines": 2 }, h("slot", { key: '65a1b44e44a67194076ddfb98a3926260a147994', name: "message" }))), this.toastType !== 'action' && this.hasLink && this.renderLink(), this.toastType === 'action' &&
            this.hasPrimaryButton &&
            this.renderActions()), h("gux-dismiss-button", { key: 'bcaaf5b483d5117558163fdfdda9f10c62d10df5', position: "inherit", onClick: this.onDismissClickHandler.bind(this) })));
    }
    onDismissClickHandler(event) {
        event.stopPropagation();
        const dismissEvent = this.guxdismiss.emit();
        if (!dismissEvent.defaultPrevented) {
            this.root.remove();
        }
    }
    static get is() { return "gux-toast"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-toast.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-toast.css"]
        };
    }
    static get properties() {
        return {
            "toastType": {
                "type": "string",
                "attribute": "toast-type",
                "mutable": false,
                "complexType": {
                    "original": "GuxToastTypes",
                    "resolved": "\"action\" | \"error\" | \"info\" | \"success\" | \"warning\"",
                    "references": {
                        "GuxToastTypes": {
                            "location": "import",
                            "path": "./gux-toast.types",
                            "id": "src/components/stable/gux-toast/gux-toast.types.ts::GuxToastTypes"
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
                "defaultValue": "'success'"
            }
        };
    }
    static get states() {
        return {
            "hasLink": {},
            "hasPrimaryButton": {},
            "hasSecondaryButton": {}
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
