import { h } from "@stencil/core";
import { trackComponent } from "../../../utils/tracking/usage";
import { randomHTMLId } from "../../../utils/dom/random-html-";
/**
 * @slot - content
 */
export class GuxButton {
    constructor() {
        this.buttonId = randomHTMLId('button');
        /**
         * The component button type
         */
        this.type = 'button';
        /**
         * Indicate if the button is disabled or not
         */
        this.disabled = false;
        this.accent = 'secondary';
        this.autofocus = false;
    }
    connectedCallback() {
        this.slotChanged();
    }
    componentWillLoad() {
        trackComponent(this.root, { variant: this.accent });
    }
    render() {
        return [
            h("button", { key: '24dbbdfe3e039dea0cbdc2d452cb0cf5da7f9d9b', id: this.buttonId, type: this.type, disabled: this.disabled, class: {
                    [`gux-${this.accent}`]: true,
                    'gux-icon-only': this.iconOnly
                }, "aria-label": this.guxTitle, autofocus: this.autofocus }, h("slot", { key: '3cdf6222d210ad14536037885d5d6b54f684a209', onSlotchange: this.slotChanged.bind(this) })),
            this.renderTooltip()
        ];
    }
    renderTooltip() {
        return this.guxTitle
            ? (h("gux-tooltip-beta", { for: this.buttonId, visualOnly: true }, h("div", { slot: "content" }, this.guxTitle)))
            : '';
    }
    stopEventIfDisabled(event) {
        if (this.disabled) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }
    }
    makeSlotContentDisableable() {
        this.root.shadowRoot.addEventListener('click', (event) => this.stopEventIfDisabled(event));
        Array.from(this.root.children).forEach(slotElement => {
            slotElement.addEventListener('click', (event) => this.stopEventIfDisabled(event));
        });
    }
    hasIconOnly() {
        const children = Array.from(this.root.children);
        if (children.length === 1) {
            const child = children[0];
            if (child.tagName === 'GUX-ICON') {
                return true;
            }
        }
        else if (children.length === 2 &&
            children[0].tagName === 'GUX-ICON' &&
            ['GUX-TOOLTIP', 'GUX-TOOLTIP-BETA'].includes(children[1].tagName)) {
            return true;
        }
        return false;
    }
    slotChanged() {
        this.makeSlotContentDisableable();
        this.iconOnly = this.hasIconOnly();
    }
    static get is() { return "gux-button"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-button.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-button.css"]
        };
    }
    static get properties() {
        return {
            "type": {
                "type": "string",
                "attribute": "type",
                "mutable": false,
                "complexType": {
                    "original": "GuxButtonType",
                    "resolved": "\"button\" | \"reset\" | \"submit\"",
                    "references": {
                        "GuxButtonType": {
                            "location": "import",
                            "path": "./gux-button.types",
                            "id": "src/components/stable/gux-button/gux-button.types.ts::GuxButtonType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The component button type"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'button'"
            },
            "guxTitle": {
                "type": "string",
                "attribute": "gux-title",
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
                    "text": "The component title"
                },
                "getter": false,
                "setter": false,
                "reflect": false
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
                    "text": "Indicate if the button is disabled or not"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "accent": {
                "type": "string",
                "attribute": "accent",
                "mutable": false,
                "complexType": {
                    "original": "GuxButtonAccent",
                    "resolved": "\"danger\" | \"ghost\" | \"inline\" | \"primary\" | \"secondary\" | \"tertiary\"",
                    "references": {
                        "GuxButtonAccent": {
                            "location": "import",
                            "path": "./gux-button.types",
                            "id": "src/components/stable/gux-button/gux-button.types.ts::GuxButtonAccent"
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
                "defaultValue": "'secondary'"
            },
            "autofocus": {
                "type": "boolean",
                "attribute": "autofocus",
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
            "iconOnly": {}
        };
    }
    static get elementRef() { return "root"; }
}
