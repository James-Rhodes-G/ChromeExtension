import { h } from "@stencil/core";
import { trackComponent } from "../../../utils/tracking/usage";
import { logWarn } from "../../../utils/error/log-error";
import { render8x8SVG, renderTeamsSVG, renderZoomSVG } from "./svg-utils";
import { buildI18nForComponent } from "../../../i18n";
import defaultResources from "./i18n/en.json";
import { generateInitials } from "../../../utils/string/generate-initials";
import { getAvatarAccentClass } from "./gux-avatar.service";
/**
 * @slot image - Avatar photo.
 */
export class GuxAvatar {
    constructor() {
        this.size = 'large';
        /**
         * Manually sets avatar accent
         */
        this.accent = 'default';
        /**
         * Shows presence such as away or available.
         * Must be combined with badge or ring props to take effect.
         */
        this.presence = 'none';
        /**
         * Controls whether to display a tooltip when the avatar is in a button or link
         */
        this.tooltipEnabled = true;
        /**
         * Shows a ring around the avatar indicating current presence
         */
        this.ring = false;
        /**
         * Shows a badge indicating current presence
         */
        this.badge = false;
        /**
         * Show notifications indicator
         */
        this.notifications = false;
        /**
         * Shows uc integration app logo on large avatar
         */
        this.ucIntegration = 'none';
    }
    get hasUcIntegration() {
        return (['zoom', 'teams', '8x8'].includes(this.ucIntegration) &&
            this.size === 'large');
    }
    validatingInputs() {
        const avatarImage = this.root.querySelector('img');
        if (!this.name) {
            logWarn(this.root, 'Name prop is required for accessibility');
        }
        if (avatarImage && !avatarImage.getAttribute('alt')) {
            logWarn(this.root, 'Alt attribute is required for slotted image.');
        }
        if (this.ucIntegration !== 'none' && this.size !== 'large') {
            logWarn(this.root, 'UC Integration app logo can only be shown on large avatar');
        }
    }
    renderBadge() {
        if (this.notifications) {
            return this.renderNotificationsBadge();
        }
        else if (this.badge && !['idle', 'none'].includes(this.presence)) {
            return (h("div", { "aria-hidden": "true", class: {
                    'gux-avatar-badge': true,
                    [`gux-${this.presence}`]: true,
                    [`gux-${this.size}`]: true
                } }, h("gux-icon", { "icon-name": this.getPresenceIcon(this.presence), decorative: true })));
        }
    }
    renderNotificationsBadge() {
        return (h("div", { "aria-hidden": "true", class: {
                'gux-avatar-badge gux-notifications': true,
                [`gux-${this.size}`]: true
            } }, h("gux-icon", { "icon-name": "fa/bell-regular", decorative: true })));
    }
    getPresenceIcon(presence) {
        switch (presence) {
            case 'available':
                return 'fa/circle-check-solid';
            case 'busy':
            case 'meeting':
                return 'fa/ban-outline';
            case 'away':
            case 'break':
            case 'meal':
            case 'training':
                return 'fa/clock-outline';
            case 'on-queue':
                return 'fa/headset-solid';
            case 'offline':
                return 'fa/circle-xmark-regular';
            case 'out-of-office':
                return 'fa/subtract-circle';
            default:
                return 'fa/circle-xmark-regular';
        }
    }
    renderUcIntegrationsIcon(appName) {
        switch (appName) {
            case 'teams':
                return renderTeamsSVG();
            case 'zoom':
                return renderZoomSVG();
            case '8x8':
                return render8x8SVG();
            default:
                return null;
        }
    }
    getUcIntegrationText(appName) {
        switch (appName) {
            case 'teams':
                return 'Microsoft Teams';
            case 'zoom':
                return 'Zoom';
            case '8x8':
                return '8 by 8';
            default:
                return null;
        }
    }
    renderUcIntegrationBadge() {
        if (this.hasUcIntegration) {
            return (h("div", { class: "gux-avatar-integration-badge", "aria-hidden": "true" }, this.renderUcIntegrationsIcon(this.ucIntegration)));
        }
    }
    renderTooltip() {
        if (this.tooltipEnabled &&
            ['A', 'BUTTON'].includes(this.parentElement.tagName)) {
            return (h("gux-tooltip-beta", { placement: "top", ref: el => (this.tooltip = el), visualOnly: true }, h("div", { slot: "content" }, this.getDescriptionText())));
        }
        else {
            return null;
        }
    }
    getDescriptionText() {
        let description = `${this.name}`;
        if (this.notifications) {
            return (description += ` (${this.i18n('notifications')})`);
        }
        if (this.label && this.presence !== 'none') {
            description = description += ` (${this.label})`;
        }
        if (this.hasUcIntegration) {
            description =
                description += ` (${this.getUcIntegrationText(this.ucIntegration)})`;
        }
        return description;
    }
    /*
     * Show tooltip
     */
    async showTooltip() {
        if (this.tooltipEnabled) {
            return await this.tooltip.showTooltip();
        }
        return;
    }
    /*
     * Hide tooltip
     */
    async hideTooltip() {
        if (this.tooltipEnabled) {
            return await this.tooltip.hideTooltip();
        }
        return;
    }
    async componentWillLoad() {
        this.parentElement = this.root.parentElement;
        trackComponent(this.root, { variant: this.size });
        this.i18n = await buildI18nForComponent(this.root, defaultResources);
    }
    componentDidLoad() {
        this.validatingInputs();
    }
    render() {
        return [
            h("div", { key: 'f8e4ea5d8b1f49d67cc4094209fee7ce98d3a7d9', class: {
                    'gux-avatar': true,
                    [`gux-${this.presence}`]: this.ring || this.badge,
                    [`gux-${this.size}`]: true,
                    'gux-ring': this.ring,
                    [getAvatarAccentClass(this.accent, this.name)]: true
                } }, h("div", { key: '3fb3a3d2338a18c2168397fc781d34f223ece0ec', class: "gux-content" }, h("slot", { key: '8764a5308014599caad2e59dbaf6d771e6cb67fb', name: "image" }, h("span", { key: '4d3a728f9d2a14f95ca5c4b77e2fdad1e743b006', role: "img", "aria-label": this.getDescriptionText() }, generateInitials(this.name)))), this.renderTooltip()),
            this.renderBadge(),
            this.renderUcIntegrationBadge()
        ];
    }
    static get is() { return "gux-avatar-beta"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-avatar.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-avatar.css"]
        };
    }
    static get properties() {
        return {
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "GuxAvatarSize",
                    "resolved": "\"large\" | \"medium\" | \"small\" | \"xsmall\"",
                    "references": {
                        "GuxAvatarSize": {
                            "location": "import",
                            "path": "./gux-avatar.types",
                            "id": "src/components/beta/gux-avatar/gux-avatar.types.ts::GuxAvatarSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'large'"
            },
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
                            "path": "./gux-avatar.types",
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
                "defaultValue": "'default'"
            },
            "presence": {
                "type": "string",
                "attribute": "presence",
                "mutable": false,
                "complexType": {
                    "original": "GuxAvatarPresence",
                    "resolved": "\"available\" | \"away\" | \"break\" | \"busy\" | \"idle\" | \"meal\" | \"meeting\" | \"none\" | \"offline\" | \"on-queue\" | \"out-of-office\" | \"training\"",
                    "references": {
                        "GuxAvatarPresence": {
                            "location": "import",
                            "path": "./gux-avatar.types",
                            "id": "src/components/beta/gux-avatar/gux-avatar.types.ts::GuxAvatarPresence"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Shows presence such as away or available.\nMust be combined with badge or ring props to take effect."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'none'"
            },
            "label": {
                "type": "string",
                "attribute": "label",
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
                    "text": "Label to display for accessibility"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "tooltipEnabled": {
                "type": "boolean",
                "attribute": "tooltip-enabled",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Controls whether to display a tooltip when the avatar is in a button or link"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            },
            "ring": {
                "type": "boolean",
                "attribute": "ring",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Shows a ring around the avatar indicating current presence"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "badge": {
                "type": "boolean",
                "attribute": "badge",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Shows a badge indicating current presence"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "notifications": {
                "type": "boolean",
                "attribute": "notifications",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Show notifications indicator"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "ucIntegration": {
                "type": "string",
                "attribute": "uc-integration",
                "mutable": false,
                "complexType": {
                    "original": "GuxAvatarUcIntegrationApps",
                    "resolved": "\"8x8\" | \"none\" | \"teams\" | \"zoom\"",
                    "references": {
                        "GuxAvatarUcIntegrationApps": {
                            "location": "import",
                            "path": "./gux-avatar.types",
                            "id": "src/components/beta/gux-avatar/gux-avatar.types.ts::GuxAvatarUcIntegrationApps"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Shows uc integration app logo on large avatar"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'none'"
            }
        };
    }
    static get methods() {
        return {
            "showTooltip": {
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
            },
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
}
