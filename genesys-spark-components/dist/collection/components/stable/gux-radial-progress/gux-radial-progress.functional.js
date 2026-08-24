import { h } from "@stencil/core";
import { getPercentageString, STROKE_DASH, RADIUS, OVERALL_SIZE } from "./gux-radial-progress.service";
export const GuxPercentageState = ({ value, max, screenreaderText }) => {
    return (h("div", { role: "progressbar", "aria-valuenow": value, "aria-valuemin": "0", "aria-valuemax": max, "aria-label": screenreaderText }, h("svg", { class: "gux-svg-container", viewBox: `0 0 ${OVERALL_SIZE} ${OVERALL_SIZE}`, role: "presentation" }, h("circle", { cx: "50%", cy: "50%", r: RADIUS, class: "gux-static-circle" }), h("circle", { cx: "50%", cy: "50%", r: RADIUS, class: "gux-dynamic-circle", "stroke-dashoffset": STROKE_DASH * (1 - value / max), "stroke-dasharray": STROKE_DASH, "stroke-linecap": "round" }), h("text", { x: "50%", y: "50%", "dominant-baseline": "central", class: "gux-percentage" }, getPercentageString(value, max)))));
};
export const GuxSpinnerState = ({ screenreaderText }) => {
    return (h("gux-radial-loading", { "screenreader-text": screenreaderText, context: "modal" }));
};
