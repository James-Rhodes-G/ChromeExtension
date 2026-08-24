import { h } from "@stencil/core";
import { buildI18nForComponent } from "../../../i18n";
import { trackComponent } from "../../../utils/tracking/usage";
import translationResources from "./i18n/en.json";
/**
 * @slot - collection of gux-navigation-list-item elements
 */
export class GuxSkipNavigationList {
    async componentWillLoad() {
        trackComponent(this.root);
        this.i18n = await buildI18nForComponent(this.root, translationResources);
    }
    render() {
        return (h("div", { key: '0879e8494f729dc4a40c71d2cd455592bc833869', class: "gux-container" }, h("nav", { key: '73cf4ba6e9781a3d2e56f67d7da8bf00afabe450', "aria-label": this.i18n('navigationName') }, h("ul", { key: 'acdb0f31bd6f8a321ad2929077191992f325deda', role: "list" }, h("slot", { key: 'e6f551ce84abde67c2e99686ec8c1501779f2009' })))));
    }
    static get is() { return "gux-skip-navigation-list"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-skip-navigation-list.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-skip-navigation-list.css"]
        };
    }
    static get elementRef() { return "root"; }
}
