import { h } from "@stencil/core";
import { buildI18nForComponent } from "../../../i18n";
import { trackComponent } from "../../../utils/tracking/usage";
import translationResources from "./i18n/en.json";
/**
 * @slot content - Slot for the message.
 */
export class GuxAlert {
    constructor() {
        this.accent = 'info';
    }
    getIcon(accent) {
        switch (accent) {
            case 'info':
                return 'fa/circle-info-solid';
            case 'success':
                return 'fa/circle-check-solid';
            case 'warning':
                return 'fa/triangle-exclamation-solid';
            case 'error':
                return 'fa/hexagon-exclamation-solid';
            default:
                return 'fa/circle-info-solid';
        }
    }
    async componentWillLoad() {
        trackComponent(this.root, { variant: this.accent });
        this.i18n = await buildI18nForComponent(this.root, translationResources);
    }
    render() {
        return (h("div", { key: '638379be5667bcc27e22c18c361646a1eac38a4d', role: "alert", class: {
                'gux-inline-alert': true,
                [`gux-${this.accent}`]: true
            } }, h("div", { key: '4e23dd0604c9903283c0a60cfb12e841d90414df', class: "gux-message-wrapper" }, h("gux-icon", { key: 'a0ec621b3215dc3a262aa9451356ef342bdb4f2f', "icon-name": this.getIcon(this.accent), decorative: true, size: "small" }), h("gux-screen-reader-beta", { key: '27fa3291c12212f8860c302ed004e916c585298b' }, this.i18n(this.accent)), h("div", { key: '94ea666c5d2b0407cee4a35ec94212ab01367697', class: "gux-content" }, h("slot", { key: '4c077cb44053bb1d9ab34e617b48b247434eaafb', name: "content" }, h("slot", { key: '396b9454b31879d7eebeb48088a7894ca7d7ff4a' }))))));
    }
    static get is() { return "gux-inline-alert"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-inline-alert.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-inline-alert.css"]
        };
    }
    static get properties() {
        return {
            "accent": {
                "type": "string",
                "attribute": "accent",
                "mutable": false,
                "complexType": {
                    "original": "GuxAlertAccent",
                    "resolved": "\"error\" | \"info\" | \"success\" | \"warning\"",
                    "references": {
                        "GuxAlertAccent": {
                            "location": "import",
                            "path": "./gux-inline-alert.types",
                            "id": "src/components/stable/gux-inline-alert/gux-inline-alert.types.ts::GuxAlertAccent"
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
