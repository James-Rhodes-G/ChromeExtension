import { h } from "@stencil/core";
import { trackComponent } from "../../../../utils/tracking/usage";
/**
 * @slot title - Slot for gux-step-title element.
 * @slot helper - Optional slot for help message.
 */
export class GuxStep {
    constructor() {
        this.status = 'incomplete';
        this.disabled = false;
        this.active = false;
    }
    onClick() {
        if (!this.active && !this.disabled) {
            this.internalactivatestep.emit(this.stepId);
        }
    }
    async guxSetActive(active) {
        this.active = active;
    }
    componentWillLoad() {
        trackComponent(this.root);
    }
    getStatusIcon(status) {
        switch (status) {
            case 'incomplete':
                return 'fa/circle-dashed-regular';
            case 'completed':
                return 'fa/circle-check-solid';
            case 'error':
                return 'fa/hexagon-exclamation-solid';
            default:
                return 'fa/circle-dashed-regular';
        }
    }
    render() {
        return (h("div", { key: 'ed40d52213ee404606dfdb8d0df864bd63e8c4bb', class: {
                'gux-stepper': true,
                [`gux-step-${this.status}`]: true,
                'gux-disabled': this.disabled,
                'gux-active': this.active
            }, "aria-current": this.active.toString(), "aria-disabled": this.disabled.toString() }, h("gux-icon", { key: '0d07c6a3d9ff154d91af782415c24ad9a0b91119', size: "small", "icon-name": this.active
                ? 'fa/circle-half-stroke-regular'
                : this.getStatusIcon(this.status), decorative: true }), h("div", { key: 'd0806d39762f881465a70be4e5f6813809959235', class: "gux-step-information" }, h("slot", { key: '247d30e05a7dcb9606d288c2dff8b6b94b8ba541', name: "title" }), h("gux-truncate", { key: '7001143cb50e79448ae9881b2c0af90e18309774', maxLines: 2 }, h("slot", { key: '8b8492477ccd3f8946baa29793b3fdfce396ba68', name: "helper" })))));
    }
    static get is() { return "gux-step"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-step.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-step.css"]
        };
    }
    static get properties() {
        return {
            "status": {
                "type": "string",
                "attribute": "status",
                "mutable": false,
                "complexType": {
                    "original": "GuxStepStatus",
                    "resolved": "\"completed\" | \"error\" | \"incomplete\"",
                    "references": {
                        "GuxStepStatus": {
                            "location": "import",
                            "path": "../gux-stepper.types",
                            "id": "src/components/beta/gux-stepper/gux-stepper.types.ts::GuxStepStatus"
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
                "defaultValue": "'incomplete'"
            },
            "stepId": {
                "type": "string",
                "attribute": "step-id",
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
                    "text": "Step id for the step"
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
            "active": {}
        };
    }
    static get events() {
        return [{
                "method": "internalactivatestep",
                "name": "internalactivatestep",
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
            "guxSetActive": {
                "complexType": {
                    "signature": "(active: boolean) => Promise<void>",
                    "parameters": [{
                            "name": "active",
                            "type": "boolean",
                            "docs": ""
                        }],
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
                "name": "internalactivestepchange",
                "method": "onClick",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
