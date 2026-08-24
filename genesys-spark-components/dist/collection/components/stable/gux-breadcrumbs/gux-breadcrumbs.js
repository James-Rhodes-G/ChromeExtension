import { h, forceUpdate } from "@stencil/core";
import { buildI18nForComponent } from "../../../i18n";
import { trackComponent } from "../../../utils/tracking/usage";
import breadcrumbsResources from "./i18n/en.json";
/**
 * @slot - collection of gux-breadcrumb-item elements
 */
export class GuxBreadcrumbs {
    constructor() {
        this.accent = 'primary';
    }
    componentWillLoad() {
        trackComponent(this.root, { variant: this.accent });
    }
    async componentWillRender() {
        this.i18n = await buildI18nForComponent(this.root, breadcrumbsResources);
    }
    onSlotChange() {
        Array.from(this.root.children).forEach(child => forceUpdate(child));
    }
    render() {
        return (h("nav", { key: '97573bc551ca35d0f29c2f77f3cae221a7dbb532', "aria-label": this.i18n('breadcrumbs') }, h("ol", { key: 'b35d243aeb4bce30d1d5145a1efb62bfcc7e3806' }, h("slot", { key: '9f03f2e162e635d107284f73483f2bcd0405337f', onSlotchange: this.onSlotChange.bind(this) }))));
    }
    static get is() { return "gux-breadcrumbs"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-breadcrumbs.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-breadcrumbs.css"]
        };
    }
    static get properties() {
        return {
            "accent": {
                "type": "string",
                "attribute": "accent",
                "mutable": false,
                "complexType": {
                    "original": "GuxBreadcrumbAccent",
                    "resolved": "\"primary\" | \"secondary\"",
                    "references": {
                        "GuxBreadcrumbAccent": {
                            "location": "import",
                            "path": "./gux-breadcrumbs.types",
                            "id": "src/components/stable/gux-breadcrumbs/gux-breadcrumbs.types.ts::GuxBreadcrumbAccent"
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
                "defaultValue": "'primary'"
            }
        };
    }
    static get elementRef() { return "root"; }
}
