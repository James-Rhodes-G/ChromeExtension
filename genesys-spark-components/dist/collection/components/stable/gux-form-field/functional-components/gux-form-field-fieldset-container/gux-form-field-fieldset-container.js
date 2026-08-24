import { h } from "@stencil/core";
export const GuxFormFieldFieldsetContainer = ({ labelPosition, disabled }, children) => {
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
