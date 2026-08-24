'use strict';

var index = require('./index-BLhHoh_r.js');
var usage = require('./usage-v50bi18B.js');

const guxStepTitleCss = "button{all:unset;font-family:var(--gse-ui-stepper-default-text-fontFamily);font-size:var(--gse-ui-stepper-default-text-fontSize);font-weight:var(--gse-ui-stepper-default-text-fontWeight);line-height:var(--gse-ui-stepper-default-text-lineHeight);color:var(--gse-ui-stepper-title-default);cursor:pointer}button[disabled]{pointer-events:none;user-select:none}button:hover:not([disabled]){font-family:var(--gse-ui-stepper-hover-text-fontFamily);font-size:var(--gse-ui-stepper-hover-text-fontSize);font-weight:var(--gse-ui-stepper-hover-text-fontWeight);line-height:var(--gse-ui-stepper-hover-text-lineHeight);color:var(--gse-ui-stepper-title-hover);text-decoration:var(--gse-ui-stepper-hover-text-textDecoration)}button:focus-visible{outline:var(--gse-ui-stepper-step-focus-border-width) var(--gse-ui-stepper-step-focus-border-style) var(--gse-ui-stepper-step-focus-border-color);outline-offset:var(--gse-ui-stepper-focus-offset);border-radius:var(--gse-ui-stepper-step-focus-borderRadius)}";

const GuxStepTitle = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.internalactivestepchange = index.createEvent(this, "internalactivestepchange", 7);
    }
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
        usage.trackComponent(this.root);
    }
    render() {
        return (index.h("button", { key: '3170eb8c531700e51693f5b78b7e041b7d37704d', type: "button", disabled: this.stepDisabledState }, index.h("gux-truncate", { key: '19bc56b155e1fa0e8c20121dc1a963d3a25fefdc', maxLines: 2 }, index.h("slot", { key: 'be9099cc12e32dbcb3e2455199bb485a0030c77e' }))));
    }
    get root() { return index.getElement(this); }
};
GuxStepTitle.style = guxStepTitleCss;

exports.gux_step_title = GuxStepTitle;
