var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { h } from "@stencil/core";
import { trackComponent } from "../../../utils/tracking/usage";
import { buildI18nForComponent } from "../../../i18n";
import translationResources from "./i18n/en.json";
import { OnMutation } from "../../../utils/decorator/on-mutation";
/**
 * @slot - Required slot for label
 */
export class GuxBadge {
    constructor() {
        this.accent = 'info';
        this.bold = false;
    }
    onMutation() {
        this.label = this.root.textContent || '';
    }
    onSlotChange(event) {
        const slotAssignedNodes = event.composedPath()[0].assignedNodes();
        this.label = slotAssignedNodes
            .map(nodeItem => nodeItem.textContent)
            .join('');
    }
    renderBadgeTitle() {
        return (
        /*
          NVDA will announce items as 'clickable' if event handlers are detected.
          In this case, the hover event handler is used on the tooltip-title.
          Since this is not useful for screen reader users, we hide the tooltip-title.
        */
        h("gux-tooltip-title", { "aria-hidden": "true" }, h("span", null, h("slot", { "aria-hidden": "true", onSlotchange: this.onSlotChange.bind(this) }))));
    }
    renderSrText() {
        return (h("div", { class: "gux-sr-only" }, this.i18n(this.getVariant(), {
            label: this.label
        })));
    }
    getVariant() {
        return `${this.accent}${this.bold ? '-bold' : ''}`;
    }
    async componentWillLoad() {
        trackComponent(this.root);
        this.i18n = await buildI18nForComponent(this.root, translationResources);
    }
    render() {
        return (h("div", { key: 'b86da02a9ae67308fc5c9ac6aa0b7a1f7a747ae0', class: {
                'gux-badge': true,
                [`gux-${this.accent}`]: true,
                'gux-bold': this.bold
            } }, this.renderBadgeTitle(), this.renderSrText()));
    }
    static get is() { return "gux-badge"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-badge.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-badge.css"]
        };
    }
    static get properties() {
        return {
            "accent": {
                "type": "string",
                "attribute": "accent",
                "mutable": false,
                "complexType": {
                    "original": "GuxBadgeAccent",
                    "resolved": "\"error\" | \"info\" | \"inherit\" | \"success\" | \"warning\"",
                    "references": {
                        "GuxBadgeAccent": {
                            "location": "import",
                            "path": "./gux-badge.types",
                            "id": "src/components/stable/gux-badge/gux-badge.types.ts::GuxBadgeAccent"
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
                "defaultValue": "'info'"
            },
            "bold": {
                "type": "boolean",
                "attribute": "bold",
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "label": {}
        };
    }
    static get elementRef() { return "root"; }
}
__decorate([
    OnMutation({ childList: true, subtree: true, characterData: true })
], GuxBadge.prototype, "onMutation", null);
