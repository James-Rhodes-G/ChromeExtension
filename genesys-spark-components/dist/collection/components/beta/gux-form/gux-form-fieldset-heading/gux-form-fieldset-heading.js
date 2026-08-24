import { h } from "@stencil/core";
/**
 * @slot - Slot for section heading element.
 */
export class GuxFormFieldsetHeading {
    render() {
        return (h("slot", { key: '711c1a3ecbb67f3240b1ec27c57a3dccf8c915c4' }));
    }
    static get is() { return "gux-form-fieldset-heading"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-form-fieldset-heading.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-form-fieldset-heading.css"]
        };
    }
}
