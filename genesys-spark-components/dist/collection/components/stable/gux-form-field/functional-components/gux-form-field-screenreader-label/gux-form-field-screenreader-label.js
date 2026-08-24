import { h } from "@stencil/core";
export const GuxFormFieldScreenreaderLabel = (_, children) => {
    return (h("legend", { class: "gux-form-field-screenreader-label" }, children));
};
