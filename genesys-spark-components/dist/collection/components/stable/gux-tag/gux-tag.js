import { h } from "@stencil/core";
import { buildI18nForComponent } from "../../../i18n";
import { trackComponent } from "../../../utils/tracking/usage";
import tagResources from "./i18n/en.json";
/**
 * @slot - content
 */
export class GuxTag {
    constructor() {
        this.accent = 'default';
        this.disabled = false;
        this.removable = false;
        this.size = 'small';
        this.emphasis = 'bold';
    }
    onKeyDown(event) {
        switch (event.key) {
            case 'Backspace':
            case 'Delete':
                this.removeTag();
        }
    }
    removeTag() {
        if (this.disabled || !this.removable) {
            return;
        }
        this.guxdelete.emit();
    }
    onSlotChange(event) {
        const slotAssignedNodes = event.composedPath()[0].assignedNodes();
        this.label = slotAssignedNodes
            .map(nodeItem => nodeItem.textContent.trim())
            .join('');
    }
    renderTagTitle() {
        return (h("gux-tooltip-title", null, h("span", null, h("slot", { "aria-hidden": "true", onSlotchange: this.onSlotChange.bind(this) }))));
    }
    renderSrText() {
        return (h("div", { class: "gux-sr-only" }, this.disabled
            ? this.i18n('tag-disabled', { label: this.label })
            : this.i18n('tag', { label: this.label })));
    }
    renderRemoveButton() {
        if (this.removable) {
            return (h("button", { class: "gux-tag-remove-button", onClick: this.removeTag.bind(this), type: "button", disabled: this.disabled }, h("gux-icon", { class: "gux-tag-remove-icon", "icon-name": "fa/xmark-large-regular", decorative: true }), h("gux-screen-reader-beta", null, this.i18n('remove-tag', { label: this.label }))));
        }
    }
    componentWillLoad() {
        trackComponent(this.root, {
            variant: this.removable ? 'removable' : 'permenant'
        });
    }
    async componentWillRender() {
        this.i18n = await buildI18nForComponent(this.root, tagResources);
    }
    render() {
        return (h("div", { key: '1ce83ca8403a1dfea1923387c536468e50915071', class: {
                'gux-tag': true,
                [`gux-accent-${this.accent}`]: true,
                'gux-disabled': this.disabled,
                [`gux-size-${this.size}`]: true,
                [`gux-emphasis-${this.emphasis}`]: true
            }, "aria-disabled": this.disabled.toString() }, this.renderTagTitle(), this.renderSrText(), this.renderRemoveButton()));
    }
    static get is() { return "gux-tag"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-tag.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-tag.css"]
        };
    }
    static get properties() {
        return {
            "accent": {
                "type": "string",
                "attribute": "accent",
                "mutable": false,
                "complexType": {
                    "original": "GuxTagAccent",
                    "resolved": "\"1\" | \"10\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"7\" | \"8\" | \"9\" | \"default\" | \"inherit\"",
                    "references": {
                        "GuxTagAccent": {
                            "location": "import",
                            "path": "./gux-tag.types",
                            "id": "src/components/stable/gux-tag/gux-tag.types.ts::GuxTagAccent"
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
                "defaultValue": "'default'"
            },
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
            "removable": {
                "type": "boolean",
                "attribute": "removable",
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
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "GuxTagSize",
                    "resolved": "\"large\" | \"small\"",
                    "references": {
                        "GuxTagSize": {
                            "location": "import",
                            "path": "./gux-tag.types",
                            "id": "src/components/stable/gux-tag/gux-tag.types.ts::GuxTagSize"
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
                "defaultValue": "'small'"
            },
            "emphasis": {
                "type": "string",
                "attribute": "emphasis",
                "mutable": false,
                "complexType": {
                    "original": "GuxTagEmphasis",
                    "resolved": "\"bold\" | \"subtle\"",
                    "references": {
                        "GuxTagEmphasis": {
                            "location": "import",
                            "path": "./gux-tag.types",
                            "id": "src/components/stable/gux-tag/gux-tag.types.ts::GuxTagEmphasis"
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
                "defaultValue": "'bold'"
            }
        };
    }
    static get states() {
        return {
            "label": {}
        };
    }
    static get events() {
        return [{
                "method": "guxdelete",
                "name": "guxdelete",
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
    static get elementRef() { return "root"; }
    static get listeners() {
        return [{
                "name": "keydown",
                "method": "onKeyDown",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
