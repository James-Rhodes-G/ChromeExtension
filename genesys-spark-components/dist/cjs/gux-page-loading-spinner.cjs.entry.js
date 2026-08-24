'use strict';

var index = require('./index-BLhHoh_r.js');
var usage = require('./usage-v50bi18B.js');

const guxPageLoadingSpinnerCss = ":host{display:flex}.gux-spinner{margin:auto}";

const GuxPageLoadingSpinner = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    componentWillLoad() {
        usage.trackComponent(this.root);
    }
    render() {
        return (index.h("gux-radial-loading", { key: 'c7b94a36199c69318067bb31917d17a951bed4ad', class: "gux-spinner", "screenreader-text": this.screenreaderText, context: "full-page" }));
    }
    get root() { return index.getElement(this); }
};
GuxPageLoadingSpinner.style = guxPageLoadingSpinnerCss;

exports.gux_page_loading_spinner = GuxPageLoadingSpinner;
