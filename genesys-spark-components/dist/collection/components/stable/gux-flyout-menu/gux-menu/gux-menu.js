import { h, Host } from "@stencil/core";
/**
 * @slot - collection of menu-option, submenu elements
 */
export class GuxMenu {
    render() {
        return (h(Host, { key: '0e69a50f9eaaed2e1ed5b8d9f612101dad7d7282', role: "menu" }, h("slot", { key: '37cb104c320d31ddf8770b323a9c72ff3e7bdf53' })));
    }
    static get is() { return "gux-menu"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-menu.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-menu.css"]
        };
    }
}
