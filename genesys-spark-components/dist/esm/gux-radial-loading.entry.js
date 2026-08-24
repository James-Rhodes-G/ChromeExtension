import { h, r as registerInstance, a as getElement } from './index-xFL2agjT.js';
import { b as buildI18nForComponent } from './index-Dac2qHbK.js';
import { t as trackComponent } from './usage-D2Q7fj4V.js';
import './get-closest-element-Cd4R0amv.js';

const largeSpinner = 48; // Linked to --gse-ui-progressAndLoading-spinner-large
const largeBorder = 4; // Linked to --gse-ui-progressAndLoading-largeBorder
const smallSpinner = 16; // Linked to --gse-ui-progressAndLoading-spinner-small
const smallBorder = 2; // Linked to --gse-ui-progressAndLoading-smallBorder

const GuxSpinnerState = ({ context = 'modal', screenreaderText }) => {
    let size = largeSpinner;
    let radius = largeSpinner * 0.5 - largeBorder * 0.5;
    if (context === 'input') {
        size = smallSpinner;
        radius = smallSpinner * 0.5 - smallBorder * 0.5;
    }
    return (h("div", { class: `gux-${context}`, role: "progressbar", "aria-label": screenreaderText },
        h("svg", { class: "gux-svg-container", viewBox: `0 0 ${size} ${size}`, role: "presentation" },
            h("circle", { cx: "50%", cy: "50%", r: radius, class: "gux-static-circle" }),
            h("circle", { cx: "50%", cy: "50%", r: radius, class: "gux-dynamic-circle", "stroke-linecap": "round" }),
            h("circle", { cx: "50%", cy: "50%", r: radius, class: "gux-dynamic-circle-mask", "stroke-linecap": "round" }))));
};

const loading = "Loading";
var modalComponentResources = {
	loading: loading
};

const guxRadialLoadingCss = "@keyframes largeSpin{0%{stroke-dasharray:1 68.115038379;transform:rotate(0deg)}7.5%{stroke-dasharray:1 68.115038379;transform:rotate(0deg)}20%{stroke-dasharray:1 68.115038379;transform:rotate(90deg)}30%{stroke-dasharray:34.5575191895;transform:rotate(180deg)}40%{stroke-dasharray:34.5575191895}50%{stroke-dasharray:1 68.115038379;transform:rotate(450deg)}57.5%{stroke-dasharray:1 68.115038379;transform:rotate(450deg)}70%{stroke-dasharray:34.5575191895;transform:rotate(540deg)}80%{stroke-dasharray:34.5575191895;transform:rotate(630deg)}90%{stroke-dasharray:34.5575191895}100%{stroke-dasharray:1 68.115038379;transform:rotate(900deg)}}@keyframes smallSpin{0%{stroke-dasharray:1 20.9911485751;transform:rotate(0deg)}7.5%{stroke-dasharray:1 20.9911485751;transform:rotate(0deg)}20%{stroke-dasharray:1 20.9911485751;transform:rotate(90deg)}30%{stroke-dasharray:10.9955742876;transform:rotate(180deg)}40%{stroke-dasharray:10.9955742876}50%{stroke-dasharray:1 20.9911485751;transform:rotate(450deg)}57.5%{stroke-dasharray:1 20.9911485751;transform:rotate(450deg)}70%{stroke-dasharray:10.9955742876;transform:rotate(540deg)}80%{stroke-dasharray:10.9955742876;transform:rotate(630deg)}90%{stroke-dasharray:10.9955742876}100%{stroke-dasharray:1 20.9911485751;transform:rotate(900deg)}}@keyframes largeThinSpin{0%{stroke-dasharray:1 71.2566310326;transform:rotate(0deg)}7.5%{stroke-dasharray:1 71.2566310326;transform:rotate(0deg)}20%{stroke-dasharray:1 71.2566310326;transform:rotate(90deg)}30%{stroke-dasharray:36.1283155163;transform:rotate(180deg)}40%{stroke-dasharray:36.1283155163}50%{stroke-dasharray:1 71.2566310326;transform:rotate(450deg)}57.5%{stroke-dasharray:1 71.2566310326;transform:rotate(450deg)}70%{stroke-dasharray:36.1283155163;transform:rotate(540deg)}80%{stroke-dasharray:36.1283155163;transform:rotate(630deg)}90%{stroke-dasharray:36.1283155163}100%{stroke-dasharray:1 71.2566310326;transform:rotate(900deg)}}:host{display:inline-block}div[role=progressbar] .gux-svg-container{display:block;inline-size:var(--gse-ui-progressAndLoading-spinner-large);block-size:var(--gse-ui-progressAndLoading-spinner-large)}div[role=progressbar] .gux-svg-container .gux-dynamic-circle,div[role=progressbar] .gux-svg-container .gux-dynamic-circle-mask{fill:none;stroke:var(--gse-ui-progressAndLoading-spinner-foreground);stroke-width:4;transform-origin:50% 50%;animation-name:largeSpin;animation-duration:2s;animation-timing-function:linear;animation-iteration-count:infinite, infinite}div[role=progressbar] .gux-svg-container .gux-dynamic-circle-mask{display:none;stroke:var(--gse-semantic-background-container-page-default);stroke-width:2}div[role=progressbar] .gux-svg-container .gux-static-circle{fill:none;stroke:var(--gse-ui-progressAndLoading-spinner-base);stroke-width:4}div[role=progressbar].gux-full-page .gux-svg-container .gux-dynamic-circle-mask{display:initial}div[role=progressbar].gux-full-page .gux-svg-container .gux-static-circle{display:none}div[role=progressbar].gux-input .gux-svg-container{inline-size:var(--gse-ui-progressAndLoading-spinner-small);block-size:var(--gse-ui-progressAndLoading-spinner-small)}div[role=progressbar].gux-input .gux-svg-container .gux-dynamic-circle{fill:none;stroke:var(--gse-ui-progressAndLoading-spinner-foreground);stroke-width:2;transform-origin:50% 50%;animation-name:smallSpin;animation-duration:2s;animation-timing-function:linear;animation-iteration-count:infinite, infinite}div[role=progressbar].gux-input .gux-svg-container .gux-static-circle{stroke:var(--gse-ui-progressAndLoading-spinner-base);stroke-width:2}";

const GuxRadialLoading = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * The display context the component is in.
         */
        this.context = 'modal';
        /**
         * Localized text to provide an accessible label for the component.
         * If no screenreader text is provided, the localized string "Loading" will be used by default.
         */
        this.screenreaderText = '';
    }
    async componentWillLoad() {
        trackComponent(this.root, { variant: this.context });
        this.getI18nValue = await buildI18nForComponent(this.root, modalComponentResources);
    }
    render() {
        return (h(GuxSpinnerState, { key: '998485d0f304fc0fd84dfaef872b9346455ef19f', context: this.context, screenreaderText: this.screenreaderText || this.getI18nValue('loading') }));
    }
    get root() { return getElement(this); }
};
GuxRadialLoading.style = guxRadialLoadingCss;

export { GuxRadialLoading as gux_radial_loading };
