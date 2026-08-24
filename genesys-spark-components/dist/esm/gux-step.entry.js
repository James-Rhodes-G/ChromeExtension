import { r as registerInstance, c as createEvent, h, a as getElement } from './index-xFL2agjT.js';
import { t as trackComponent } from './usage-D2Q7fj4V.js';

const guxStepCss = ":host{inline-size:100%;max-inline-size:100%}.gux-stepper{display:flex;flex-direction:row;gap:var(--step-gap);align-items:flex-start;justify-content:flex-start;min-inline-size:var(--stepper-min-inline-size, 0);min-block-size:var(--stepper-min-block-size, 0);padding-block:var(--stepper-padding-block, 0);padding-inline:var(--stepper-padding-inline, 0);background-color:transparent;border:none}.gux-stepper gux-icon{flex-shrink:0;align-self:flex-start;margin-block-start:var(--stepper-step-body-margin, 0)}.gux-stepper.gux-step-incomplete{color:var(--gse-ui-stepper-icon-incompleted-foregroundColor);border-block-start:var(--stepper-border-block-start-incomplete, none);border-inline-start:var(--stepper-border-inline-start-incomplete)}.gux-stepper.gux-step-completed{color:var(--gse-ui-stepper-icon-completed-selectedForegroundColor);border-block-start:var(--stepper-border-block-start-completed, none);border-inline-start:var(--stepper-border-inline-start-completed, none)}.gux-stepper.gux-step-error{color:var(--gse-ui-stepper-icon-error-foregroundColor);border-block-start:var(--stepper-border-block-start-error, none);border-inline-start:var(--stepper-border-inline-start-error, none)}.gux-stepper.gux-active{color:var(--gse-ui-stepper-icon-active-foregroundColor);border-block-start:var(--stepper-border-block-start-active, none);border-inline-start:var(--stepper-border-inline-start-active, none)}.gux-stepper>.gux-step-information{margin-block-start:var(--stepper-step-body-margin, 0)}.gux-step-information{display:flex;flex:1 0 0;flex-direction:column;gap:var(--gse-ui-stepper-step-text-gap);align-items:flex-start;justify-content:flex-start;margin-inline-end:var(--gse-ui-stepper-step-horizontal-body-marginRight)}.gux-step-information slot[name=helper]{font-family:var(--gse-ui-formControl-helper-helperText-fontFamily);font-size:var(--gse-ui-formControl-helper-helperText-fontSize);font-weight:var(--gse-ui-formControl-helper-helperText-fontWeight);line-height:var(--gse-ui-formControl-helper-helperText-lineHeight);color:var(--gse-ui-formControl-helper-defaultColor)}.gux-disabled{pointer-events:none;cursor:default;user-select:none}.gux-disabled>*{opacity:var(--gse-ui-stepper-step-disabled-opacity)}gux-truncate{text-align:start}";

const GuxStep = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.internalactivatestep = createEvent(this, "internalactivatestep", 7);
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
    get root() { return getElement(this); }
};
GuxStep.style = guxStepCss;

export { GuxStep as gux_step };
