import { r as registerInstance, h, a as getElement } from './index-xFL2agjT.js';
import { t as trackComponent } from './usage-D2Q7fj4V.js';

const guxPageLoadingSpinnerCss = ":host{display:flex}.gux-spinner{margin:auto}";

const GuxPageLoadingSpinner = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentWillLoad() {
        trackComponent(this.root);
    }
    render() {
        return (h("gux-radial-loading", { key: 'c7b94a36199c69318067bb31917d17a951bed4ad', class: "gux-spinner", "screenreader-text": this.screenreaderText, context: "full-page" }));
    }
    get root() { return getElement(this); }
};
GuxPageLoadingSpinner.style = guxPageLoadingSpinnerCss;

export { GuxPageLoadingSpinner as gux_page_loading_spinner };
