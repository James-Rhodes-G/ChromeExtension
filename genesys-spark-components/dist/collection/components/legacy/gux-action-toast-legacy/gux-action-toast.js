import { h, Host } from "@stencil/core";
import { trackComponent } from "../../../utils/tracking/usage";
/**
 * @slot icon - Required slot for gux-icon
 * @slot title - Required slot for the action toast title
 * @slot message - Required slot for the action toast message
 * @slot negative-button - Required slot for the action toast negative button
 * @slot positive-button - Required slot for the action toast positive button
 */
export class GuxActionToast {
    componentWillLoad() {
        trackComponent(this.root);
    }
    render() {
        return (h(Host, { key: '86c7d4b10a2b6aff27aefc4b301600d37d3a2b95' }, h("div", { key: 'c91122959f04e871256924658943d42e3efa086d', class: "gux-header" }, h("div", { key: '197997e4491ecfef4eae36be626625d63e5cafe6', class: "gux-icon" }, h("slot", { key: '42299d9477f16ead474126a0eb6c18dec4e51ba5', name: "icon" })), h("div", { key: '79aa729ba27becac9f95ac5278d105e14ed69211', class: "gux-title" }, h("slot", { key: '59b6d808b0c56b6e0468ec59598326039758074d', name: "title" }))), h("div", { key: 'b1e73ea83c95fd1e17f0f1657ab8aa5b9b7deb14', class: "gux-message" }, h("slot", { key: 'e16d6521334acf2997d594c62589662b65eba647', name: "message" })), h("div", { key: '4c72959e5ac48709d03f49ed00d3af1e0b9241bb', class: "gux-action-buttons" }, h("div", { key: '6d451a966ff94fa805f78462215ca3858d6bcc11', class: "gux-positive-button" }, h("slot", { key: '5e7f6901f414700e0dacff47fc2bb4ea591bbedb', name: "positive-button" })), h("div", { key: '6a51a2a92c669756d643655487e3deeabdd94e04', class: "gux-negative-button" }, h("slot", { key: '3194513f90919ad3f4f4f2d0c50f4fedd92bb6c0', name: "negative-button" })))));
    }
    static get is() { return "gux-action-toast-legacy"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-action-toast.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-action-toast.css"]
        };
    }
    static get elementRef() { return "root"; }
}
