import { h, Host } from "@stencil/core";
import { trackComponent } from "../../../../../utils/tracking/usage";
import { logWarn } from "../../../../../utils/error/log-error";
import { generateInitials } from "../../../../../utils/string/generate-initials";
import { overflowNavigation } from "../gux-avatar-overflow.service";
import { getAvatarAccentClass } from "../../../gux-avatar/gux-avatar.service";
/**
 * @slot image - Avatar photo.
 */
export class GuxAvatarOverflowItem {
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
    onKeydown(event) {
        overflowNavigation(event, this.root);
    }
    validatingInputs() {
        const avatarImage = this.root.querySelector('img');
        if (!this.name) {
            logWarn(this.root, 'Name prop is required');
        }
        if (avatarImage && !avatarImage.getAttribute('alt')) {
            logWarn(this.root, 'Alt attribute is required for slotted image.');
        }
    }
    render() {
        return (h(Host, { key: '34b0e018d662b7536da4a91d6ccc055c8cc730d7', role: "menuitem" }, h("button", { key: 'c59be9f70bc25dce8bc62dfc8739f93d6006e68e', type: "button", "aria-label": this.name, tabIndex: -1 }, h("span", { key: '024aae64707578c490f8fb2d2c2aa809e65ffefe', class: {
                'gux-avatar': true,
                [getAvatarAccentClass(this.accent, this.name)]: true
            } }, h("slot", { key: '1e657ac3badc1a73c283d82f0e0b6381033e179e', name: "image" }, h("span", { key: 'b63a8cce36637908e4c07f532fdf27e97831e019', class: "gux-avatar-initials", "aria-hidden": "true" }, generateInitials(this.name)))), h("span", { key: '67247e6254beaa1b31374653ace95300a8e029a4' }, this.name))));
    }
    static get is() { return "gux-avatar-overflow-item-beta"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-avatar-overflow-item.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-avatar-overflow-item.css"]
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
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
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
