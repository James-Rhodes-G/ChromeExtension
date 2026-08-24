import { h } from "@stencil/core";
import { logWarn } from "../../../../utils/error/log-error";
import { buildI18nForComponent } from "../../../../i18n";
import defaultResources from "./i18n/en.json";
import { trackComponent } from "../../../../utils/tracking/usage";
/**
 * @slot avatar - gux-avatar-beta tag
 */
export class GuxAvatarChangePhoto {
    async componentWillLoad() {
        this.validateSlot();
        trackComponent(this.root);
        this.i18n = await buildI18nForComponent(this.root, defaultResources);
    }
    validateSlot() {
        const slottedElement = this.root.querySelector('gux-avatar-beta');
        if (!slottedElement) {
            logWarn(this.root, 'Slotted element must be gux-avatar-beta');
        }
    }
    render() {
        return (h("button", { key: 'c88a6a0323e13b6bdd7d68a955f96d8a86a89eb0', class: "gux-change-photo", onClick: () => this.guxchangephoto.emit(), "aria-label": this.i18n('changePhoto') }, h("gux-icon", { key: '8dc2733dfdb2bd75117ab01c9546b96bbd9e0bc5', class: "gux-change-photo-icon", "icon-name": "fa/camera-solid", size: "small", decorative: true }), h("slot", { key: '83bb98873748afca9e7882e399de469267244eff', name: "avatar" }), h("gux-tooltip-beta", { key: '35e11ed2ccc0943d67ec0e72dc3b220a81675617', placement: "top", visualOnly: true }, h("div", { key: '926fe5e737148d1ebf920c2687d624f201a663a7', slot: "content" }, this.i18n('changePhoto')))));
    }
    static get is() { return "gux-avatar-change-photo-beta"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-avatar-change-photo.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-avatar-change-photo.css"]
        };
    }
    static get events() {
        return [{
                "method": "guxchangephoto",
                "name": "guxchangephoto",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "root"; }
}
