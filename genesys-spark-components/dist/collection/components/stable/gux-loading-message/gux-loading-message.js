import { h } from "@stencil/core";
import { trackComponent } from "../../../utils/tracking/usage";
/**
 * @slot progress - Required slot for progress.
 * @slot primary-guidance - Required slot for primary guidance.
 * @slot additional-guidance - Slot for additional guidance.
 */
export class GuxLoadingMessage {
    componentWillLoad() {
        trackComponent(this.root);
    }
    render() {
        return (h("div", { key: 'e25839bd66c76c1a7815d1a942427937782e09cf', class: "gux-container", role: "alert", "aria-live": "assertive" }, h("div", { key: '3b898f4e0da0d14dc9a11650816a6a378a58a822', class: "gux-progress" }, h("slot", { key: '8616138d449823589247a86f11a1d3bf2ce49209', name: "progress" })), h("div", { key: '615aad13fc71e5beb1af0fb4acae36d94f94556e', class: "gux-primary-message" }, h("slot", { key: 'f58a816704e34aac8b871898c584183cd3c69ce1', name: "primary-message" })), h("div", { key: '138758f5b3d09f2a03ac9fb9e806ba0b94deed6e', class: "gux-additional-guidance" }, h("slot", { key: '16f2698501b6afa2b47080fe44f640509d93ccd5', name: "additional-guidance" }))));
    }
    static get is() { return "gux-loading-message"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-loading-message.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-loading-message.css"]
        };
    }
    static get elementRef() { return "root"; }
}
