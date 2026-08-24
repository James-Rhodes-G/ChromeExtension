import { h } from "@stencil/core";
import { largeSpinner, largeBorder, smallSpinner, smallBorder } from "./gux-radial-loading.service";
export const GuxSpinnerState = ({ context = 'modal', screenreaderText }) => {
    let size = largeSpinner;
    let radius = largeSpinner * 0.5 - largeBorder * 0.5;
    if (context === 'input') {
        size = smallSpinner;
        radius = smallSpinner * 0.5 - smallBorder * 0.5;
    }
    return (h("div", { class: `gux-${context}`, role: "progressbar", "aria-label": screenreaderText }, h("svg", { class: "gux-svg-container", viewBox: `0 0 ${size} ${size}`, role: "presentation" }, h("circle", { cx: "50%", cy: "50%", r: radius, class: "gux-static-circle" }), h("circle", { cx: "50%", cy: "50%", r: radius, class: "gux-dynamic-circle", "stroke-linecap": "round" }), h("circle", { cx: "50%", cy: "50%", r: radius, class: "gux-dynamic-circle-mask", "stroke-linecap": "round" }))));
};
