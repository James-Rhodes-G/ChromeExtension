import { h } from "@stencil/core";
/**
 *  @slot - Slot for description.
 */
export class GuxFormDescription {
    render() {
        return (h("slot", { key: '856101faf04e13b5c812769e6332eeb073bc92bf' }));
    }
    static get is() { return "gux-form-description"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-form-description.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-form-description.css"]
        };
    }
}
