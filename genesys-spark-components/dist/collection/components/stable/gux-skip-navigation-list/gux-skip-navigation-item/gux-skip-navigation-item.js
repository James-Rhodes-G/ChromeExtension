import { Host, h } from "@stencil/core";
/**
 * @slot - hyperlink
 */
export class GuxSkipNavigationItem {
    render() {
        return (h(Host, { key: '37b07a7b5ea621008e76cd732a31d5fa3cfa1f6d', role: "listitem" }, h("slot", { key: 'e01d917548c8eab5d8acab039acacee89bc8e4d0' })));
    }
    static get is() { return "gux-skip-navigation-item"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-skip-navigation-item.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-skip-navigation-item.css"]
        };
    }
}
