import { h, Host } from "@stencil/core";
import { randomHTMLId } from "../../../../utils/dom/random-html-";
import { buildI18nForComponent } from "../../../../i18n";
import translationResources from "./i18n/en.json";
export class GuxCreateOption {
    constructor() {
        this.active = false;
        this.hidden = true;
        this.filtered = true;
        this.hovered = false;
    }
    onmouseenter() {
        this.hovered = true;
    }
    onMouseleave() {
        this.hovered = false;
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async guxEmitInternalCreateNewOption() {
        this.internalcreatenewoption.emit();
    }
    handleClick() {
        this.internalcreatenewoption.emit(this.value);
    }
    async componentWillLoad() {
        this.i18n = await buildI18nForComponent(this.root, translationResources);
        this.root.id = this.root.id || randomHTMLId('gux-option-multi');
    }
    // COMUI-3905: Without this method the dropdown multi's add option button triggers an infinite loop when it is hidden adter being displayed.
    async componentWillRender() { }
    renderCustomOptionInstructions() {
        return (h("span", { class: "gux-screenreader" }, this.i18n('createCustomOptionInstructions')));
    }
    render() {
        return (h(Host, { key: '5923b19a166b698b50e5ac02f459ab397fd8f210', role: "option", "aria-selected": false, class: {
                'gux-active': this.active,
                'gux-hovered': this.hovered,
                'gux-filtered': this.filtered
            } }, h("div", { key: 'e40509866e7b082d270e2479bfea61253e57eca2', class: "gux-option" }, h("gux-icon", { key: 'a9ee42b9a7f4e587c8f447880a2e3ff067038254', decorative: true, "icon-name": "fa/plus-regular", size: "small" }), h("div", { key: '51545fd248d82632c543b75acc52fbfc88ce596b', class: "gux-create-text" }, this.i18n('createOption', {
            optionValue: this.value
        })), this.renderCustomOptionInstructions())));
    }
    static get is() { return "gux-create-option"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-create-option.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-create-option.css"]
        };
    }
    static get properties() {
        return {
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
            },
            "active": {
                "type": "boolean",
                "attribute": "active",
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
            "hidden": {
                "type": "boolean",
                "attribute": "hidden",
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
                "defaultValue": "true"
            },
            "filtered": {
                "type": "boolean",
                "attribute": "filtered",
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
                "defaultValue": "true"
            }
        };
    }
    static get states() {
        return {
            "hovered": {}
        };
    }
    static get events() {
        return [{
                "method": "internalcreatenewoption",
                "name": "internalcreatenewoption",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "guxEmitInternalCreateNewOption": {
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
                "name": "mouseenter",
                "method": "onmouseenter",
                "target": undefined,
                "capture": false,
                "passive": true
            }, {
                "name": "mouseleave",
                "method": "onMouseleave",
                "target": undefined,
                "capture": false,
                "passive": true
            }, {
                "name": "click",
                "method": "handleClick",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
