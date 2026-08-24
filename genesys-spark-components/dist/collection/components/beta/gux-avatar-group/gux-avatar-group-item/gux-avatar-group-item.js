import { h, Host } from "@stencil/core";
import { trackComponent } from "../../../../utils/tracking/usage";
import { logWarn } from "../../../../utils/error/log-error";
import { groupKeyboardNavigation } from "../gux-avatar-group.service";
import { generateInitials } from "../../../../utils/string/generate-initials";
import { getAvatarAccentClass } from "../../gux-avatar/gux-avatar.service";
/**
 * @slot image - Avatar photo.
 */
export class GuxAvatarGroupItem {
    constructor() {
        /**
         * Manually sets avatar accent
         */
        this.accent = 'auto';
    }
    async componentWillLoad() {
        trackComponent(this.root);
    }
    componentDidLoad() {
        this.validatingInputs();
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
    isLastItemInGroup() {
        const parent = this.root.parentElement;
        const children = Array.from(parent.children);
        const index = children.findIndex(i => i === this.root);
        return index === children.length - 1;
    }
    validatingInputs() {
        const avatarImage = this.root.querySelector('img');
        if (!this.name) {
            logWarn(this.root, 'Name prop is required for accessibility');
        }
        if (avatarImage && !avatarImage.getAttribute('alt')) {
            logWarn(this.root, 'Alt attribute is required for slotted image.');
        }
    }
    render() {
        return (h(Host, { key: '16b06052216c2bd34a5b468e8f0d1b43ca5e14d6', role: "menuitem" }, h("button", { key: 'e84a7bb648979e04adcd2610f7eb40405c9e1d9a', type: "button", "aria-label": this.name, tabIndex: -1, class: {
                'gux-avatar': true,
                [getAvatarAccentClass(this.accent, this.name)]: true,
                'gux-last-item': this.isLastItemInGroup()
            } }, h("slot", { key: '0f00f3593e9e2f888e208430261832d2c72fe7d3', name: "image" }, h("span", { key: '1a901e537a5347b121492d3dc60a9710ce98943c', class: "gux-avatar-initials", "aria-hidden": "true" }, generateInitials(this.name))), h("gux-tooltip-beta", { key: 'd25dcc843ef37b8b32d4f3f598dc9cf3ea60c6ff', "aria-hidden": "true", "visual-only": true, placement: "top", ref: el => (this.tooltip = el) }, h("div", { key: '934cf7c0cf8640032ff5d970b075d6bfc78be695', slot: "content" }, this.name)))));
    }
    static get is() { return "gux-avatar-group-item-beta"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-avatar-group-item.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-avatar-group-item.css"]
        };
    }
    static get properties() {
        return {
            "name": {
                "type": "string",
                "attribute": "name",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Name which is shown as initials. Should be formatted 'Lastname Firstname' for JA, zhCN and KO names.\nNames without blank space will show first 2 characters of string."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "accent": {
                "type": "string",
                "attribute": "accent",
                "mutable": false,
                "complexType": {
                    "original": "GuxAvatarAccent",
                    "resolved": "\"0\" | \"1\" | \"10\" | \"11\" | \"12\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"7\" | \"8\" | \"9\" | \"auto\" | \"default\" | \"inherit\"",
                    "references": {
                        "GuxAvatarAccent": {
                            "location": "import",
                            "path": "components/beta/gux-avatar/gux-avatar.types",
                            "id": "src/components/beta/gux-avatar/gux-avatar.types.ts::GuxAvatarAccent"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Manually sets avatar accent"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'auto'"
            }
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
