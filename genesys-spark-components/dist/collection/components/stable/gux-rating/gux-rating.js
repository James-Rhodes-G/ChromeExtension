import { h, Host } from "@stencil/core";
import simulateNativeEvent from "../../../utils/dom/simulate-native-event";
import clamp from "../../../utils/number/clamp";
import { trackComponent } from "../../../utils/tracking/usage";
import { logWarn } from "../../../utils/error/log-error";
export class GuxRating {
    constructor() {
        this.value = 0;
        this.maxValue = 5;
        this.disabled = false;
        this.readonly = false;
        this.increment = 'default';
    }
    onClick(event) {
        event.stopPropagation();
        if (this.disabled || this.readonly) {
            return;
        }
        const [clickedElement] = event.composedPath();
        const ratingStar = clickedElement.getRootNode();
        const clickedStarIndex = Array.from(this.starContainer.children).findIndex(child => child.shadowRoot === ratingStar);
        const clickedStarNominalValue = clickedStarIndex + 1;
        if (clickedStarNominalValue === this.value + 0.5) {
            this.updateRatingValue(clickedStarNominalValue);
        }
        else if (clickedStarNominalValue === this.value) {
            this.updateRatingValue(0);
        }
        else if (clickedStarNominalValue !== Math.floor(this.value)) {
            if (this.increment === 'half') {
                this.updateRatingValue(clickedStarNominalValue - 0.5);
            }
            else {
                this.updateRatingValue(clickedStarNominalValue);
            }
        }
        else {
            this.updateRatingValue(clickedStarNominalValue);
        }
    }
    onKeyDown(event) {
        event.stopPropagation();
        if (this.disabled || this.readonly) {
            return;
        }
        const increment = this.increment === 'half' ? 0.5 : 1;
        switch (event.key) {
            case 'ArrowUp':
            case 'ArrowRight':
                event.preventDefault();
                this.updateRatingValue(this.value + increment);
                break;
            case 'ArrowDown':
            case 'ArrowLeft':
                event.preventDefault();
                this.updateRatingValue(this.value - increment);
                break;
            case 'End':
                event.preventDefault();
                this.updateRatingValue(Infinity);
                break;
            case 'Home':
                event.preventDefault();
                this.updateRatingValue(-Infinity);
                break;
        }
    }
    updateRatingValue(newValue) {
        const clampedNewValue = clamp(newValue, 0, Array.from(this.starContainer.children).length);
        const increment = this.increment === 'half' ? 0.5 : 1;
        const validatedNewValue = Math.round(clampedNewValue / increment) * increment;
        if (this.value !== validatedNewValue) {
            this.value = validatedNewValue;
            simulateNativeEvent(this.root, 'input');
            simulateNativeEvent(this.root, 'change');
        }
    }
    getRatingStarElements() {
        return [...Array(this.maxValue).keys()]
            .reduce((acc, cv) => {
            if (cv + 0.5 === this.value) {
                return acc.concat('fa/star-sharp-half-stroke-regular');
            }
            else if (cv + 1 <= this.value) {
                return acc.concat('fa/star-solid');
            }
            return acc.concat('fa/star-regular');
        }, [])
            .map(iconName => (h("gux-icon", { "icon-name": iconName, decorative: true, size: "small" })));
    }
    getTabIndex() {
        return this.disabled ? -1 : 0;
    }
    componentWillLoad() {
        trackComponent(this.root);
    }
    componentDidLoad() {
        if (!(this.root.getAttribute('aria-label') ||
            this.root.getAttribute('aria-labelledby'))) {
            logWarn(this.root, '`gux-rating` requires a label. Either provide a label and associate it with the gux-rating element using `aria-labelledby` or add an `aria-label` attribute to the gux-rating element.');
        }
    }
    render() {
        return (h(Host, { key: 'd22ed4f6c5c2307405398ada32c9f0e97f074f36', role: "spinbutton", tabindex: this.getTabIndex(), "aria-readonly": this.readonly.toString(), "aria-valuenow": this.value, "aria-valuemin": "0", "aria-valuemax": this.maxValue }, h("div", { key: 'dfd8c8054e8019305f9fb9a2db43b2c11ddba799', ref: (el) => (this.starContainer = el), class: {
                'gux-rating-star-container': true,
                'gux-disabled': this.disabled
            } }, this.getRatingStarElements())));
    }
    static get is() { return "gux-rating"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-rating.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-rating.css"]
        };
    }
    static get properties() {
        return {
            "value": {
                "type": "number",
                "attribute": "value",
                "mutable": true,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
                "defaultValue": "0"
            },
            "maxValue": {
                "type": "number",
                "attribute": "max-value",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
                "defaultValue": "5"
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
            "readonly": {
                "type": "boolean",
                "attribute": "readonly",
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
            "increment": {
                "type": "string",
                "attribute": "increment",
                "mutable": false,
                "complexType": {
                    "original": "'default' | 'half'",
                    "resolved": "\"default\" | \"half\"",
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
                "defaultValue": "'default'"
            }
        };
    }
    static get elementRef() { return "root"; }
    static get listeners() {
        return [{
                "name": "click",
                "method": "onClick",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "keydown",
                "method": "onKeyDown",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
