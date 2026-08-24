import { h, Host, forceUpdate } from "@stencil/core";
import simulateNativeEvent from "../../../utils/dom/simulate-native-event";
import { trackComponent } from "../../../utils/tracking/usage";
/**
 * @slot - list of gux-segmented-control-item elements
 */
export class GuxSegmentedControl {
    constructor() {
        this.disabled = false; // This is used by child items
        this.items = [];
    }
    onClick(e) {
        e.stopPropagation();
        const switchItem = e.target.closest('gux-segmented-control-item');
        if (switchItem && this.value !== switchItem.value) {
            this.value = switchItem.value;
            simulateNativeEvent(this.root, 'input');
            simulateNativeEvent(this.root, 'change');
        }
    }
    watchDisabled() {
        this.items.forEach(switchItem => {
            forceUpdate(switchItem);
        });
    }
    slotChanged() {
        this.items = Array.from(this.root.children);
    }
    componentWillLoad() {
        trackComponent(this.root);
    }
    componentWillRender() {
        this.items.forEach(switchItem => {
            switchItem.selected = switchItem.value === this.value;
        });
    }
    render() {
        return (h(Host, { key: '6313278a473c749972e2298b83f28cb11dd47a32', role: "group" }, h("slot", { key: '4d589907bbccb2a17d0912e6338ce5e6756e6071', onSlotchange: this.slotChanged.bind(this) })));
    }
    static get is() { return "gux-segmented-control-beta"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-segmented-control.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-segmented-control.css"]
        };
    }
    static get properties() {
        return {
            "value": {
                "type": "string",
                "attribute": "value",
                "mutable": true,
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
            }
        };
    }
    static get states() {
        return {
            "items": {}
        };
    }
    static get elementRef() { return "root"; }
    static get watchers() {
        return [{
                "propName": "disabled",
                "methodName": "watchDisabled"
            }];
    }
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
