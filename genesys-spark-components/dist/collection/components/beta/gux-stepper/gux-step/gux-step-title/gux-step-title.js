import { h } from "@stencil/core";
import { trackComponent } from "../../../../../utils/tracking/usage";
/**
 * @slot - slot for text
 */
export class GuxStepTitle {
    onClick() {
        if (!this.stepDisabledState) {
            this.internalactivestepchange.emit();
        }
    }
    // Get the disabled state from the closest gux-step-beta element.
    get stepDisabledState() {
        var _a;
        return (_a = this.root.closest('gux-step')) === null || _a === void 0 ? void 0 : _a.disabled;
    }
    componentWillLoad() {
        trackComponent(this.root);
    }
    render() {
        return (h("button", { key: '3170eb8c531700e51693f5b78b7e041b7d37704d', type: "button", disabled: this.stepDisabledState }, h("gux-truncate", { key: '19bc56b155e1fa0e8c20121dc1a963d3a25fefdc', maxLines: 2 }, h("slot", { key: 'be9099cc12e32dbcb3e2455199bb485a0030c77e' }))));
    }
    static get is() { return "gux-step-title"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-step-title.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-step-title.css"]
        };
    }
    static get events() {
        return [{
                "method": "internalactivestepchange",
                "name": "internalactivestepchange",
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
                "name": "click",
                "method": "onClick",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
