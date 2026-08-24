import { h } from "@stencil/core";
import { trackComponent } from "../../../utils/tracking/usage";
/**
 * @slot - Slot for selector cards
 */
export class GuxSelectorCards {
    componentWillLoad() {
        trackComponent(this.root);
    }
    render() {
        return (h("div", { key: '89a3e4a7b94ff9a0b21bf654631736f728dc21b0', class: "gux-selector-cards" }, h("slot", { key: 'c74c7d62000770e26a6534bcc9854a7c478775d0' })));
    }
    static get is() { return "gux-selector-cards-beta"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-selector-cards.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-selector-cards.css"]
        };
    }
    static get elementRef() { return "root"; }
}
