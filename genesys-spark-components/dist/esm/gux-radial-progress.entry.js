import { h, r as registerInstance, a as getElement } from './index-xFL2agjT.js';
import { t as trackComponent } from './usage-D2Q7fj4V.js';
import { l as logWarn } from './log-error-DxtJDeL9.js';

const OVERALL_SIZE = 48; // Linked to --gse-ui-progressAndLoading-spinner-large
const BORDER_SIZE = 4; // Linked to --gse-ui-progressAndLoading-largeBorder
const RADIUS = OVERALL_SIZE * 0.5 - BORDER_SIZE * 0.5;
const STROKE_DASH = 2 * Math.PI * RADIUS;
function canShowPercentageState(value, max) {
    return !(isNaN(value) || isNaN(max) || value > max || value < 0 || max === 0);
}
function getPercentageString(value, max) {
    return `${Math.round(((value + Number.EPSILON) / max) * 100)}%`;
}

const GuxPercentageState = ({ value, max, screenreaderText }) => {
    return (h("div", { role: "progressbar", "aria-valuenow": value, "aria-valuemin": "0", "aria-valuemax": max, "aria-label": screenreaderText },
        h("svg", { class: "gux-svg-container", viewBox: `0 0 ${OVERALL_SIZE} ${OVERALL_SIZE}`, role: "presentation" },
            h("circle", { cx: "50%", cy: "50%", r: RADIUS, class: "gux-static-circle" }),
            h("circle", { cx: "50%", cy: "50%", r: RADIUS, class: "gux-dynamic-circle", "stroke-dashoffset": STROKE_DASH * (1 - value / max), "stroke-dasharray": STROKE_DASH, "stroke-linecap": "round" }),
            h("text", { x: "50%", y: "50%", "dominant-baseline": "central", class: "gux-percentage" }, getPercentageString(value, max)))));
};
const GuxSpinnerState = ({ screenreaderText }) => {
    return (h("gux-radial-loading", { "screenreader-text": screenreaderText, context: "modal" }));
};

const guxRadialProgressCss = ":host{display:inline-block}div[role=progressbar] .gux-svg-container{display:block;inline-size:var(--gse-ui-progressAndLoading-spinner-large);block-size:var(--gse-ui-progressAndLoading-spinner-large)}div[role=progressbar] .gux-svg-container .gux-dynamic-circle{fill:none;stroke:var(--gse-ui-progressAndLoading-spinner-foreground);stroke-width:4;transform:rotate(-90deg);transform-origin:50% 50%}div[role=progressbar] .gux-svg-container .gux-static-circle{fill:none;stroke:var(--gse-ui-progressAndLoading-spinner-base);stroke-width:4}div[role=progressbar] .gux-svg-container .gux-percentage{font-family:var(--gse-ui-progressAndLoading-spinner-text-fontFamily);font-size:var(--gse-ui-progressAndLoading-spinner-text-fontSize);font-weight:var(--gse-ui-progressAndLoading-spinner-text-fontWeight);line-height:var(--gse-ui-progressAndLoading-spinner-text-lineHeight);text-anchor:middle;fill:var(--gse-ui-progressAndLoading-textColor)}";

const GuxRadialProgress = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * The max value of the progress spinner
         */
        this.max = 100;
        /**
         * Required localized text to provide an accessible label for the component
         */
        this.screenreaderText = '';
    }
    componentWillLoad() {
        trackComponent(this.root);
    }
    componentDidLoad() {
        if (!this.screenreaderText &&
            canShowPercentageState(this.value, this.max)) {
            logWarn(this.root, 'No screenreader-text provided. Provide a localized screenreader-text property for the component.');
        }
    }
    render() {
        return canShowPercentageState(this.value, this.max)
            ? (h(GuxPercentageState, { value: this.value, max: this.max, screenreaderText: this.screenreaderText }))
            : (h(GuxSpinnerState, { screenreaderText: this.screenreaderText }));
    }
    get root() { return getElement(this); }
};
GuxRadialProgress.style = guxRadialProgressCss;

export { GuxRadialProgress as gux_radial_progress };
