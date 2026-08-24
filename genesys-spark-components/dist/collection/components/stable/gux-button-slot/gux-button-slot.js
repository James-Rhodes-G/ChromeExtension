import { h, Host } from "@stencil/core";
import { trackComponent } from "../../../utils/tracking/usage";
import { logError } from "../../../utils/error/log-error";
/**
 * @slot - button, input[type="button"] or input[type="submit"] element
 */
export class GuxButtonSlot {
    constructor() {
        this.accent = 'secondary';
    }
    validateSlotContent() {
        let slottedElement = this.root.children[0];
        let slottedTagName = slottedElement.tagName;
        if (slottedTagName === 'SLOT') {
            slottedElement = slottedElement.assignedNodes()[0];
            slottedTagName = slottedElement.tagName;
        }
        if (slottedTagName === 'BUTTON') {
            return;
        }
        else if (slottedTagName === 'INPUT') {
            const slottedType = slottedElement.getAttribute('type');
            if (slottedType === 'button' || slottedType === 'submit') {
                return;
            }
        }
        logError(this.root, 'You must slot a button, input[type="button"] or input[type="submit"] element.');
    }
    componentWillLoad() {
        trackComponent(this.root);
        this.validateSlotContent();
    }
    render() {
        return (h(Host, { key: '2f0d21a41e3f692f1f5f64a096e69c2c39feac8f', accent: this.accent, "icon-only": this.iconOnly }, h("slot", { key: '1f7173b22404bc2e7e56cd25873dac40d1c803a6' })));
    }
    static get is() { return "gux-button-slot"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-button-slot.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-button-slot.css"]
        };
    }
    static get properties() {
        return {
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
                            "path": "../gux-button/gux-button.types",
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
            "iconOnly": {
                "type": "boolean",
                "attribute": "icon-only",
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
                "reflect": false
            }
        };
    }
    static get elementRef() { return "root"; }
}
