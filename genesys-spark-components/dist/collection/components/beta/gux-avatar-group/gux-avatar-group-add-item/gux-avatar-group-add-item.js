import { h, Host } from "@stencil/core";
import { trackComponent } from "../../../../utils/tracking/usage";
import { groupKeyboardNavigation } from "../gux-avatar-group.service";
import { buildI18nForComponent } from "../../../../i18n";
import defaultResources from "./i18n/en.json";
export class GuxAvatarGroupAddItem {
    async componentWillLoad() {
        trackComponent(this.root);
        this.i18n = await buildI18nForComponent(this.root, defaultResources);
    }
    /*
     * Hide tooltip
     */
    async hideTooltip() {
        return await this.tooltip.hideTooltip();
    }
    onKeydown(event) {
        groupKeyboardNavigation(event, this.root);
    }
    render() {
        return (h(Host, { key: 'c2208087a0df24f9930d65f5cc0b4e33e9365f3d', role: "menuitem" }, h("button", { key: 'c84beab4ccbf57c154859e7bd16ba4de69705ffa', type: "button", "aria-label": this.i18n('addToGroup'), tabIndex: -1, class: "gux-avatar" }, h("span", { key: 'de3cafb76d43b51a17d80d825a1902662e55585c', "aria-hidden": "true" }, "+"), h("gux-tooltip-beta", { key: '02843211a8a4cedfbaafa6b650ddc29d77802a7d', "aria-hidden": "true", "visual-only": true, placement: "top", ref: el => (this.tooltip = el) }, h("div", { key: 'a5c8e606aa2cbb12517bf295d26520ca5358aeff', slot: "content" }, this.i18n('addToGroup'))))));
    }
    static get is() { return "gux-avatar-group-add-item-beta"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-avatar-group-add-item.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-avatar-group-add-item.css"]
        };
    }
    static get methods() {
        return {
            "hideTooltip": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "root"; }
    static get listeners() {
        return [{
                "name": "keydown",
                "method": "onKeydown",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
