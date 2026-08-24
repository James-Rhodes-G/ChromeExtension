import { r as registerInstance, c as createEvent, h, a as getElement } from './index-xFL2agjT.js';
import { t as trackComponent } from './usage-D2Q7fj4V.js';

const guxStepperCss = ":host{display:flex;flex-direction:column}:host .gux-stepper{display:flex;block-size:100%}:host .gux-stepper.gux-stepper-horizontal{flex-direction:row;--stepper-min-inline-size:var(--gse-ui-stepper-step-horizontal-minWidth);--step-gap:var(--gse-ui-stepper-step-gap);--stepper-padding-block:var(--gse-ui-stepper-step-horizontal-gap) 0;--stepper-border-block-start-incomplete:var(\n      --gse-ui-stepper-bar-horizontal-height\n    )\n    var(--gse-ui-stepper-bar-incompleted-foregroundColor) solid;--stepper-border-block-start-completed:var(\n      --gse-ui-stepper-bar-horizontal-height\n    )\n    var(--gse-ui-stepper-icon-completed-selectedForegroundColor) solid;--stepper-border-block-start-error:var(\n      --gse-ui-stepper-bar-horizontal-height\n    )\n    var(--gse-ui-stepper-bar-error-foregroundColor) solid;--stepper-border-block-start-active:var(\n      --gse-ui-stepper-bar-horizontal-height\n    )\n    var(--gse-ui-stepper-bar-active-foregroundColor) solid}:host .gux-stepper.gux-stepper-vertical{flex-direction:column;--step-gap:var(--gse-ui-stepper-step-vertical-gap);--stepper-min-block-size:var(--gse-ui-stepper-step-vertical-minHeight);--stepper-padding-inline:var(--gse-ui-stepper-step-vertical-gap) 0;--stepper-border-inline-start-incomplete:var(\n      --gse-ui-stepper-bar-horizontal-height\n    )\n    var(--gse-ui-stepper-bar-incompleted-foregroundColor) solid;--stepper-border-inline-start-completed:var(\n      --gse-ui-stepper-bar-horizontal-height\n    )\n    var(--gse-ui-stepper-icon-completed-selectedForegroundColor) solid;--stepper-border-inline-start-error:var(\n      --gse-ui-stepper-bar-horizontal-height\n    )\n    var(--gse-ui-stepper-bar-error-foregroundColor) solid;--stepper-border-inline-start-active:var(\n      --gse-ui-stepper-bar-horizontal-height\n    )\n    var(--gse-ui-stepper-bar-active-foregroundColor) solid;--stepper-step-body-margin:var(\n    --gse-ui-stepper-step-vertical-body-marginTop\n  )}";

const GuxStepper = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.guxactivestepchange = createEvent(this, "guxactivestepchange", 7);
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
    get root() { return getElement(this); }
    static get watchers() { return {
        "activeStepId": ["watchActiveStep"]
    }; }
};
GuxStepper.style = guxStepperCss;

export { GuxStepper as gux_stepper_beta };
