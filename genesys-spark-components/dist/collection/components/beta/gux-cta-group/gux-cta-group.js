import { h } from "@stencil/core";
import { logWarn } from "../../../utils/error/log-error";
export class GuxCTAGroup {
    constructor() {
        /**
         * Sets the buttons alignment
         */
        this.align = 'start';
        /**
         * Defines if the primary button should have a danger accent
         */
        this.dangerous = false;
    }
    validatePrimarySlot(slottedElement) {
        if (!slottedElement) {
            logWarn(this.root, 'You must slot a primary CTA.');
            return;
        }
        const validButtonTags = [
            'GUX-BUTTON',
            'GUX-ACTION-BUTTON',
            'GUX-BUTTON-MULTI',
            'GUX-BUTTON-SLOT'
        ];
        const slottedTagName = slottedElement.tagName;
        if (!validButtonTags.includes(slottedTagName)) {
            logWarn(this.root, `You must slot a button element in the primary slot.`);
        }
        if (this.dangerous) {
            slottedElement.accent = 'danger';
        }
        else if (slottedElement.accent !== 'primary') {
            slottedElement.accent = 'primary';
        }
    }
    validateSecondarySlot(slottedElement) {
        if (slottedElement) {
            const slottedTagName = slottedElement.tagName;
            const validButtonTags = [
                'GUX-BUTTON',
                'GUX-ACTION-BUTTON',
                'GUX-BUTTON-MULTI',
                'GUX-BUTTON-SLOT'
            ];
            if (!validButtonTags.includes(slottedTagName)) {
                logWarn(this.root, `You must slot a button element in the secondary slot.`);
            }
            else if (slottedElement.accent !== 'secondary') {
                slottedElement.accent = 'secondary';
            }
        }
    }
    validateDismissSlot(slottedElement) {
        if (slottedElement) {
            const slottedTagName = slottedElement.tagName;
            const validButtonTags = ['GUX-BUTTON', 'GUX-BUTTON-SLOT'];
            if (!validButtonTags.includes(slottedTagName)) {
                logWarn(this.root, `You must slot a gux-button or gux-button-slot in the dismiss slot.`);
            }
            else if (slottedElement.accent !== 'ghost') {
                slottedElement.accent = 'ghost';
            }
        }
    }
    componentWillLoad() {
        this.validatePrimarySlot(this.root.querySelector('[slot=primary]'));
        this.validateSecondarySlot(this.root.querySelector('[slot=secondary]'));
        this.validateDismissSlot(this.root.querySelector('[slot=dismiss]'));
    }
    render() {
        return (h("div", { key: '2d0d16094015def93abded1fa432a367fb2eccf1', class: `gux-cta-group gux-${this.align}-align` }, h("slot", { key: '33058a762539821802457d1544d141ed2fe6d3b2', name: "primary" }), h("slot", { key: '98c7963a90bef02f28b003666b1037d7442c181a', name: "secondary" }), h("slot", { key: 'f1f9a8c8a2070a5ea3f918d819e642b32e4e9a37', name: "dismiss" })));
    }
    static get is() { return "gux-cta-group"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-cta-group.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-cta-group.css"]
        };
    }
    static get properties() {
        return {
            "align": {
                "type": "string",
                "attribute": "align",
                "mutable": false,
                "complexType": {
                    "original": "GuxCTAGroupAlignment",
                    "resolved": "\"end\" | \"start\"",
                    "references": {
                        "GuxCTAGroupAlignment": {
                            "location": "import",
                            "path": "./gux-cta-group.types",
                            "id": "src/components/beta/gux-cta-group/gux-cta-group.types.ts::GuxCTAGroupAlignment"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Sets the buttons alignment"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'start'"
            },
            "dangerous": {
                "type": "boolean",
                "attribute": "dangerous",
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
                    "text": "Defines if the primary button should have a danger accent"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get elementRef() { return "root"; }
}
