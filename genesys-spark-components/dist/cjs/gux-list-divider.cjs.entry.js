'use strict';

var index = require('./index-BLhHoh_r.js');

const guxListDividerCss = ":host{position:relative;display:flex;inline-size:100%;block-size:var(--gse-ui-menu-divider-height);padding:0;margin:var(--gse-ui-menu-divider-margin);pointer-events:none;cursor:pointer;cursor:default;background-color:var(--gse-ui-menu-divider-backgroundColor)}";

const GuxListDivider = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '3746ba873e6e1a8553b4a38859f549713f2e369f', role: "presentation" }));
    }
};
GuxListDivider.style = guxListDividerCss;

exports.gux_list_divider = GuxListDivider;
