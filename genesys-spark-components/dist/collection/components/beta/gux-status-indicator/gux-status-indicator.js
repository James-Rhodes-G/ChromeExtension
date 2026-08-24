import { h } from "@stencil/core";
import { trackComponent } from "../../../utils/tracking/usage";
import { hasSlot } from "../../../utils/dom/has-slot";
/**
 * @slot default - Slot for the status indicator text.
 * @slot tooltip-text - Slot for the optional tooltip text
 */
export class GuxStatusIndicator {
    constructor() {
        this.accent = 'info';
    }
    async componentWillLoad() {
        trackComponent(this.root, { variant: this.accent });
    }
    componentDidLoad() {
        this.applyTableStyle();
    }
    applyTableStyle() {
        var _a;
        if (((_a = this.root.parentElement) === null || _a === void 0 ? void 0 : _a.tagName.toLowerCase()) === 'td') {
            this.statusIndicatorContainerElement.classList.add('gux-has-table-parent');
        }
    }
    renderTooltip() {
        if (hasSlot(this.root, 'tooltip-text')) {
            return (h("gux-tooltip", null, h("slot", { name: "tooltip-text" })));
        }
    }
    render() {
        return (h("div", { key: 'a5bf8a008546f7a81c2bef3edfc544a3f1063328', class: "gux-status-indicator", ref: (el) => (this.statusIndicatorContainerElement = el) }, h("span", { key: '90c526c391b945da940e5a8e63fe272736ccb929', class: `gux-status-icon gux-status-icon-${this.accent}` }), h("div", { key: '66cd298fde0e420f9c5671fe8b80b3a2728abb84', class: "gux-status-indicator-text" }, h("slot", { key: 'cf1961ce0b3ac416f0ffbf25d13eda82cbd85a41' })), this.renderTooltip()));
    }
    static get is() { return "gux-status-indicator-beta"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-status-indicator.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-status-indicator.css"]
        };
    }
    static get properties() {
        return {
            "accent": {
                "type": "string",
                "attribute": "accent",
                "mutable": false,
                "complexType": {
                    "original": "GuxStatusIndicatorVariant",
                    "resolved": "\"error\" | \"info\" | \"success\" | \"warning\"",
                    "references": {
                        "GuxStatusIndicatorVariant": {
                            "location": "import",
                            "path": "./gux-status-indicator.types",
                            "id": "src/components/beta/gux-status-indicator/gux-status-indicator.types.ts::GuxStatusIndicatorVariant"
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
            }
        };
    }
    static get elementRef() { return "root"; }
}
