'use strict';

var index = require('./index-BLhHoh_r.js');

const GuxFormFieldHelp = ({ show }, children) => {
    return (index.h("div", { class: {
            'gux-form-field-help': true,
            'gux-show': show
        } },
        index.h("div", { class: "gux-message" }, children)));
};

const GuxFormFieldError = ({ show }, children) => {
    return (index.h("div", { role: "alert", class: {
            'gux-form-field-error': true,
            'gux-show': show
        } },
        index.h("gux-icon", { "icon-name": "fa/hexagon-exclamation-solid", decorative: true, size: "small" }),
        index.h("div", { class: "gux-message" }, children)));
};

exports.GuxFormFieldError = GuxFormFieldError;
exports.GuxFormFieldHelp = GuxFormFieldHelp;
