import { r as registerInstance, h, a as getElement } from './index-xFL2agjT.js';
import { t as trackComponent } from './usage-D2Q7fj4V.js';
import { b as buildI18nForComponent } from './index-Dac2qHbK.js';
import './get-closest-element-Cd4R0amv.js';

const optional = "optional";
var translationResources = {
	optional: optional
};

const guxFormFieldLabelIndicatorCss = ".gux-form-field-label-indicator-required{padding-inline-start:var(--gse-ui-formControl-formField-gap);color:var(--gse-ui-formControl-label-indicator-requiredColor)}.gux-form-field-label-indicator-optional{margin-inline-start:var(--gse-ui-formControl-formField-gap);font-family:var(--gse-ui-formControl-label-indicator-text-fontFamily);font-size:var(--gse-ui-formControl-label-indicator-text-fontSize);font-weight:var(--gse-ui-formControl-label-indicator-text-fontWeight);line-height:var(--gse-ui-formControl-label-indicator-text-lineHeight);color:var(--gse-ui-formControl-label-indicator-optionalColor)}";

const GuxFormFieldLabelIndicator = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.variant = 'required';
        this.required = false;
    }
    async componentWillLoad() {
        trackComponent(this.root, { variant: this.variant });
        this.i18n = await buildI18nForComponent(this.root, translationResources);
    }
    render() {
        if (this.variant === 'optional' && !this.required) {
            return (h("span", { class: "gux-form-field-label-indicator-optional" }, "(", this.i18n('optional'), ")"));
        }
        else if (this.variant === 'required' && this.required) {
            return (h("span", { class: "gux-form-field-label-indicator-required", "aria-hidden": "true" }, "*"));
        }
        else {
            return null;
        }
    }
    get root() { return getElement(this); }
};
GuxFormFieldLabelIndicator.style = guxFormFieldLabelIndicatorCss;

export { GuxFormFieldLabelIndicator as gux_form_field_label_indicator };
