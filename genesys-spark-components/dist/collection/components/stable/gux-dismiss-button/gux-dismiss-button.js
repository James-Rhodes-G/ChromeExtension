import { h } from "@stencil/core";
import { trackComponent } from "../../../utils/tracking/usage";
import { buildI18nForComponent } from "../../../i18n";
import translationResources from "./i18n/en.json";
export class GuxDismissButton {
    constructor() {
        this.position = 'absolute';
        this.size = 'medium';
    }
    async componentWillLoad() {
        trackComponent(this.root, { variant: this.position });
        this.i18n = await buildI18nForComponent(this.root, translationResources);
    }
    render() {
        return (h("gux-button-slot", { key: '699c5876801bf26edbae2803ca5f7ba7d047b27e', accent: "ghost", class: {
                'gux-inherit': this.position == 'inherit',
                'gux-dismiss-small': this.size == 'small'
            } }, h("button", { key: 'de66227205545b4dbf92210167fa4d5ca1ca4a48', type: "button", title: this.i18n('dismiss') }, h("div", { key: 'f9284ac02c27e32ea3646718efcad36954099ce6', class: "gux-icon-container" }, h("gux-icon", { key: 'fc37236b5f832358416119d97e8aa6cc3612a825', "icon-name": "fa/xmark-large-regular", decorative: true, size: "small" })))));
    }
    static get is() { return "gux-dismiss-button"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-dismiss-button.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-dismiss-button.css"]
        };
    }
    static get properties() {
        return {
            "position": {
                "type": "string",
                "attribute": "position",
                "mutable": false,
                "complexType": {
                    "original": "GuxDismissButtonPosition",
                    "resolved": "\"absolute\" | \"inherit\"",
                    "references": {
                        "GuxDismissButtonPosition": {
                            "location": "import",
                            "path": "./gux-dismiss-button.types",
                            "id": "src/components/stable/gux-dismiss-button/gux-dismiss-button.types.ts::GuxDismissButtonPosition"
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
                "defaultValue": "'absolute'"
            },
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "GuxDismissButtonSize",
                    "resolved": "\"medium\" | \"small\"",
                    "references": {
                        "GuxDismissButtonSize": {
                            "location": "import",
                            "path": "./gux-dismiss-button.types",
                            "id": "src/components/stable/gux-dismiss-button/gux-dismiss-button.types.ts::GuxDismissButtonSize"
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
                "defaultValue": "'medium'"
            }
        };
    }
    static get elementRef() { return "root"; }
}
