import { h } from "@stencil/core";
import { trackComponent } from "../../../../../utils/tracking/usage";
import { buildI18nForComponent } from "../../../../../i18n/index";
import translationResources from "../../gux-rich-text-editor-action/i18n/en.json";
import { getClosestElement } from "../../../../../utils/dom/get-closest-element";
export class GuxRichHighlightListItem {
    constructor() {
        this.disabled = false;
        this.highlight = 'orange';
    }
    onMouseUp() {
        this.focusParentList();
    }
    onMouseOver() {
        this.focusParentList();
    }
    focusParentList() {
        const parentList = getClosestElement('gux-rich-text-editor-list', this.root);
        if (parentList && parentList.shadowRoot.activeElement === null) {
            this.root.blur();
            parentList.focus({
                preventScroll: true
            });
        }
    }
    async componentWillLoad() {
        trackComponent(this.root, { variant: this.highlight });
        this.i18n = await buildI18nForComponent(this.root, translationResources);
    }
    renderTooltip() {
        if (!this.disabled && this.highlight !== 'inherit') {
            return (h("gux-tooltip-beta", null, h("div", { slot: "content" }, this.i18n(`${this.highlight}`))));
        }
    }
    render() {
        return (h("div", { key: '50c3810ca3ad7f64567098681c701703eb4d7922', class: {
                'gux-highlight': true,
                [`gux-${this.highlight}`]: true
            }, role: "listitem" }, h("button", { key: '5d2c996348c87453395739b2c28267cadc7a74c6', type: "button", "aria-label": this.i18n(`${this.highlight}`), tabIndex: -1, disabled: this.disabled }), this.renderTooltip()));
    }
    static get is() { return "gux-rich-highlight-list-item"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-rich-highlight-list-item.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-rich-highlight-list-item.css"]
        };
    }
    static get properties() {
        return {
            "disabled": {
                "type": "boolean",
                "attribute": "disabled",
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
            },
            "highlight": {
                "type": "string",
                "attribute": "highlight",
                "mutable": false,
                "complexType": {
                    "original": "GuxHighlightColor",
                    "resolved": "\"blue\" | \"coral\" | \"inherit\" | \"island\" | \"mango\" | \"mineral\" | \"orange\" | \"pear\" | \"raspberry\"",
                    "references": {
                        "GuxHighlightColor": {
                            "location": "import",
                            "path": "./gux-rich-highlight-list-item.types",
                            "id": "src/components/beta/gux-rich-text-editor/gux-rich-text-editor-list/gux-rich-highlight-list-item/gux-rich-highlight-list-item.types.ts::GuxHighlightColor"
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
                "defaultValue": "'orange'"
            },
            "value": {
                "type": "string",
                "attribute": "value",
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
            }
        };
    }
    static get elementRef() { return "root"; }
    static get listeners() {
        return [{
                "name": "mouseup",
                "method": "onMouseUp",
                "target": undefined,
                "capture": false,
                "passive": true
            }, {
                "name": "mouseover",
                "method": "onMouseOver",
                "target": undefined,
                "capture": false,
                "passive": true
            }];
    }
}
