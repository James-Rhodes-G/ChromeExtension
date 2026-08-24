import { h } from "@stencil/core";
export const GuxFormFieldVisualLabel = ({ position, required }, children) => {
    return (h("div", { class: {
            'gux-form-field-visual-label': true,
            [`gux-${position}`]: true,
            'gux-required': required
        }, role: "presentation" }, children));
};
