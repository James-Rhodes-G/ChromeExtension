import { h } from "@stencil/core";
import { trackComponent } from "../../../../utils/tracking/usage";
import { validateFormIds, getSlottedInput } from "../../../stable/gux-form-field/gux-form-field.service";
import { calculateInputDisabledState } from "../../../../utils/dom/calculate-input-disabled-state";
import { onInputDisabledStateChange } from "../../../../utils/dom/on-input-disabled-state-change";
import { preventBrowserValidationStyling } from "../../../../utils/dom/prevent-browser-validation-styling";
import { setSlotAriaDescribedby } from "../../../stable/gux-form-field/gux-form-field.service";
/**
 * @slot icon - Required slot for icon
 * @slot input - Required slot for input tag
 * @slot label - Required slot for label tag
 * @slot description - Optional slot for additional text description
 * @slot badge - Optional slot for badge
 */
export class GuxSelectorCard {
    constructor() {
        this.variant = 'simple';
    }
    componentWillLoad() {
        this.setInput();
        trackComponent(this.root, { variant: this.variant });
    }
    disconnectedCallback() {
        if (this.disabledObserver) {
            this.disabledObserver.disconnect();
        }
    }
    setInput() {
        this.input = getSlottedInput(this.root, 'input[type="radio"][slot="input"], input[type="checkbox"][slot="input"]');
        preventBrowserValidationStyling(this.input);
        setSlotAriaDescribedby(this.root, this.input, 'description');
        this.disabled = calculateInputDisabledState(this.input);
        this.disabledObserver = onInputDisabledStateChange(this.input, (disabled) => {
            this.disabled = disabled;
        });
        validateFormIds(this.root, this.input);
    }
    renderDescription() {
        if (this.variant === 'simple') {
            return (h("span", { class: "gux-screenreader" }, h("slot", { name: "description" })));
        }
        else {
            return (h("div", { class: "gux-description-container" }, h("slot", { name: "description" })));
        }
    }
    renderBadge() {
        if (this.variant === 'descriptive') {
            return (h("slot", { name: "badge" }));
        }
    }
    render() {
        return (h("div", { key: '97ab16baffb3926895233003ba989f4c1e9e309a', class: {
                'gux-selector-card': true,
                [`gux-${this.variant}`]: true,
                'gux-disabled': this.disabled
            } }, h("div", { key: 'd0b66d6f254baede578851e47880221128eeea12', class: "gux-content" }, h("div", { key: '15130d174bbce1505191d1bbfe2f40e3d59c85d1', class: "gux-icon" }, h("slot", { key: '753b20d4ec466c04c3f54f91fb8b8549f8a69d0c', name: "icon" })), h("div", { key: '0b2a096960f86a1c9845de005de25c6d2aed9be2', class: "gux-label-container" }, h("slot", { key: '0466e924796a7d44f658a7bab8a4bb96771e9277', name: "label" })), h("slot", { key: 'dc6dbd6544931f7fd407e353397af0f6d3697c03', name: "input" }), this.renderDescription(), this.renderBadge())));
    }
    static get is() { return "gux-selector-card-beta"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-selector-card.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-selector-card.css"]
        };
    }
    static get properties() {
        return {
            "variant": {
                "type": "string",
                "attribute": "variant",
                "mutable": false,
                "complexType": {
                    "original": "GuxSelectorCardVariant",
                    "resolved": "\"descriptive\" | \"simple\"",
                    "references": {
                        "GuxSelectorCardVariant": {
                            "location": "import",
                            "path": "./gux-selector-card.types",
                            "id": "src/components/beta/gux-selector-cards/gux-selector-card/gux-selector-card.types.ts::GuxSelectorCardVariant"
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
                "defaultValue": "'simple'"
            }
        };
    }
    static get states() {
        return {
            "disabled": {}
        };
    }
    static get elementRef() { return "root"; }
}
