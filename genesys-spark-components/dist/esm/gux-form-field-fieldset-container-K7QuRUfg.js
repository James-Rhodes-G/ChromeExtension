import { h } from './index-xFL2agjT.js';

const GuxFormFieldVisualLabel = ({ position, required }, children) => {
    return (h("div", { class: {
            'gux-form-field-visual-label': true,
            [`gux-${position}`]: true,
            'gux-required': required
        }, role: "presentation" }, children));
};

const GuxFormFieldScreenreaderLabel = (_, children) => {
    return (h("legend", { class: "gux-form-field-screenreader-label" }, children));
};

const GuxFormFieldFieldsetContainer = ({ labelPosition, disabled }, children) => {
    if (disabled) {
        return (h("fieldset", { class: {
                'gux-form-field-fieldset-container': true,
                [`gux-${labelPosition}`]: Boolean(labelPosition)
            }, "aria-disabled": "true" }, children));
    }
    return (h("fieldset", { class: {
            'gux-form-field-fieldset-container': true,
            [`gux-${labelPosition}`]: Boolean(labelPosition)
        } }, children));
};

export { GuxFormFieldVisualLabel as G, GuxFormFieldScreenreaderLabel as a, GuxFormFieldFieldsetContainer as b };
