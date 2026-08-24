'use strict';

var index = require('./index-BLhHoh_r.js');

const GuxFormFieldVisualLabel = ({ position, required }, children) => {
    return (index.h("div", { class: {
            'gux-form-field-visual-label': true,
            [`gux-${position}`]: true,
            'gux-required': required
        }, role: "presentation" }, children));
};

const GuxFormFieldScreenreaderLabel = (_, children) => {
    return (index.h("legend", { class: "gux-form-field-screenreader-label" }, children));
};

const GuxFormFieldFieldsetContainer = ({ labelPosition, disabled }, children) => {
    if (disabled) {
        return (index.h("fieldset", { class: {
                'gux-form-field-fieldset-container': true,
                [`gux-${labelPosition}`]: Boolean(labelPosition)
            }, "aria-disabled": "true" }, children));
    }
    return (index.h("fieldset", { class: {
            'gux-form-field-fieldset-container': true,
            [`gux-${labelPosition}`]: Boolean(labelPosition)
        } }, children));
};

exports.GuxFormFieldFieldsetContainer = GuxFormFieldFieldsetContainer;
exports.GuxFormFieldScreenreaderLabel = GuxFormFieldScreenreaderLabel;
exports.GuxFormFieldVisualLabel = GuxFormFieldVisualLabel;
