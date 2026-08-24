import { h } from "@stencil/core";
/**
 * @slot - Slot for section heading element.
 */
export class GuxFormHeading {
    render() {
        return (h("slot", { key: 'f3dc7b4c83524a983b2d616fdacde57df9878978' }));
    }
    static get is() { return "gux-form-heading"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-form-heading.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-form-heading.css"]
        };
    }
}
