'use strict';

var index = require('./index-BLhHoh_r.js');

const guxFormDescriptionCss = "::slotted(*){margin:0 !important;font-family:var(--gse-semantic-body-sm-regular-fontFamily) !important;font-size:var(--gse-semantic-body-sm-regular-fontSize) !important;font-weight:var(--gse-semantic-body-sm-regular-fontWeight) !important;line-height:var(--gse-semantic-body-sm-regular-lineHeight) !important;color:var(--gse-semantic-foreground-container-midEmphasis) !important}";

const GuxFormDescription = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("slot", { key: '856101faf04e13b5c812769e6332eeb073bc92bf' }));
    }
};
GuxFormDescription.style = guxFormDescriptionCss;

exports.gux_form_description = GuxFormDescription;
