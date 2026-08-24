import { h } from "@stencil/core";
import { trackComponent } from "../../../utils/tracking/usage";
/**
 * @slot - for gux-step elements
 */
export class GuxStepper {
    constructor() {
        /**
         *  Specifies horizontal or vertical orientation of steps.
         */
        this.orientation = 'horizontal';
        this.disabled = false;
        this.stepList = [];
    }
    onInternalActiveStepChange(event) {
        event.stopPropagation();
        const stepId = event === null || event === void 0 ? void 0 : event.detail;
        this.activateStep(stepId, this.stepList);
    }
    watchActiveStep(newStepId) {
        this.activateStep(newStepId, this.stepList);
        this.guxactivestepchange.emit(newStepId);
    }
    componentWillLoad() {
        trackComponent(this.root);
    }
    componentDidLoad() {
        this.activateStep(this.activeStepId, this.stepList);
        if (this.activeStepId) {
            this.guxactivestepchange.emit(this.activeStepId);
        }
    }
    activateStep(stepId, stepList) {
        if (stepId) {
            this.activeStepId = stepId;
        }
        stepList === null || stepList === void 0 ? void 0 : stepList.forEach(step => void step.guxSetActive(step.stepId === this.activeStepId));
    }
    onSlotChange() {
        const slot = this.root.shadowRoot.querySelector('slot');
        this.stepList = slot.assignedElements();
    }
    render() {
        return (h("div", { key: 'bb0f6b1ff55c74d62e3067d756a22f9697e769e3', class: {
                'gux-stepper': true,
                [`gux-stepper-${this.orientation}`]: true
            } }, h("slot", { key: '7e8fb1bfef750bb842719fe4dda298dd29302bda', onSlotchange: this.onSlotChange.bind(this) })));
    }
    static get is() { return "gux-stepper-beta"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-stepper.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-stepper.css"]
        };
    }
    static get properties() {
        return {
            "orientation": {
                "type": "string",
                "attribute": "orientation",
                "mutable": false,
                "complexType": {
                    "original": "GuxStepperOrientation",
                    "resolved": "\"horizontal\" | \"vertical\"",
                    "references": {
                        "GuxStepperOrientation": {
                            "location": "import",
                            "path": "./gux-stepper.types",
                            "id": "src/components/beta/gux-stepper/gux-stepper.types.ts::GuxStepperOrientation"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Specifies horizontal or vertical orientation of steps."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'horizontal'"
            },
            "activeStepId": {
                "type": "string",
                "attribute": "active-step-id",
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
                    "text": "stepId of the currently active step."
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
            "stepList": {}
        };
    }
    static get events() {
        return [{
                "method": "guxactivestepchange",
                "name": "guxactivestepchange",
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
    static get watchers() {
        return [{
                "propName": "activeStepId",
                "methodName": "watchActiveStep"
            }];
    }
    static get listeners() {
        return [{
                "name": "internalactivatestep",
                "method": "onInternalActiveStepChange",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
