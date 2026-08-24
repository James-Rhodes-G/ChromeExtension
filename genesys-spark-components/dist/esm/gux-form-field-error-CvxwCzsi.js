import { h } from './index-xFL2agjT.js';

const GuxFormFieldHelp = ({ show }, children) => {
    return (h("div", { class: {
            'gux-form-field-help': true,
            'gux-show': show
        } },
        h("div", { class: "gux-message" }, children)));
};

const GuxFormFieldError = ({ show }, children) => {
    return (h("div", { role: "alert", class: {
            'gux-form-field-error': true,
            'gux-show': show
        } },
        h("gux-icon", { "icon-name": "fa/hexagon-exclamation-solid", decorative: true, size: "small" }),
        h("div", { class: "gux-message" }, children)));
};

export { GuxFormFieldError as G, GuxFormFieldHelp as a };
