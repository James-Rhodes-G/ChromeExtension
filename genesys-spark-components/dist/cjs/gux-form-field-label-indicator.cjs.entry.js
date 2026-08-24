'use strict';

var index = require('./index-BLhHoh_r.js');
var usage = require('./usage-v50bi18B.js');
var index$1 = require('./index-QInGO-Pu.js');
require('./get-closest-element-CfyZl7i7.js');

const optional = "optional";
var translationResources = {
	optional: optional
};

const guxFormFieldLabelIndicatorCss = ".gux-form-field-label-indicator-required{padding-inline-start:var(--gse-ui-formControl-formField-gap);color:var(--gse-ui-formControl-label-indicator-requiredColor)}.gux-form-field-label-indicator-optional{margin-inline-start:var(--gse-ui-formControl-formField-gap);font-family:var(--gse-ui-formControl-label-indicator-text-fontFamily);font-size:var(--gse-ui-formControl-label-indicator-text-fontSize);font-weight:var(--gse-ui-formControl-label-indicator-text-fontWeight);line-height:var(--gse-ui-formControl-label-indicator-text-lineHeight);color:var(--gse-ui-formControl-label-indicator-optionalColor)}";

const GuxFormFieldLabelIndicator = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.variant = 'required';
        this.required = false;
    }
    async componentWillLoad() {
        usage.trackComponent(this.root, { variant: this.variant });
        this.i18n = await index$1.buildI18nForComponent(this.root, translationResources);
    }
    render() {
        if (this.variant === 'optional' && !this.required) {
            return (index.h("span", { class: "gux-form-field-label-indicator-optional" }, "(", this.i18n('optional'), ")"));
        }
        else if (this.variant === 'required' && this.required) {
            return (index.h("span", { class: "gux-form-field-label-indicator-required", "aria-hidden": "true" }, "*"));
        }
        else {
            return null;
        }
    }
    get root() { return index.getElement(this); }
};
GuxFormFieldLabelIndicator.style = guxFormFieldLabelIndicatorCss;

exports.gux_form_field_label_indicator = GuxFormFieldLabelIndicator;
