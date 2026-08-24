import { h } from "@stencil/core";
import { trackComponent } from "../../../utils/tracking/usage";
/**
 * @slot - text
 */
export class GuxScreenReader {
    componentWillLoad() {
        trackComponent(this.root);
    }
    render() {
        return (h("span", { key: '95824e610f97c40b42b517f7ff0782ec60f0385e', class: "gux-sr-only" }, h("slot", { key: '5017a13a4fa03145ac42029c7c9ae6908d357aa3' })));
    }
    static get is() { return "gux-screen-reader-beta"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-screen-reader.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-screen-reader.css"]
        };
    }
    static get elementRef() { return "root"; }
}
