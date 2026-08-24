import { h } from "@stencil/core";
export const GuxFormFieldError = ({ show }, children) => {
    return (h("div", { role: "alert", class: {
            'gux-form-field-error': true,
            'gux-show': show
        } }, h("gux-icon", { "icon-name": "fa/hexagon-exclamation-solid", decorative: true, size: "small" }), h("div", { class: "gux-message" }, children)));
};
