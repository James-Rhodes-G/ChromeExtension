'use strict';

var index = require('./index-BLhHoh_r.js');

const guxFormFieldsetHeadingCss = "::slotted(*){margin:0;font-family:var(--gse-semantic-heading-md-bold-fontFamily) !important;font-size:var(--gse-semantic-heading-md-bold-fontSize) !important;font-weight:var(--gse-semantic-heading-md-bold-fontWeight) !important;line-height:var(--gse-semantic-heading-md-bold-lineHeight) !important;color:var(--gse-semantic-foreground-container-highEmphasis) !important}";

const GuxFormFieldsetHeading = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("slot", { key: '711c1a3ecbb67f3240b1ec27c57a3dccf8c915c4' }));
    }
};
GuxFormFieldsetHeading.style = guxFormFieldsetHeadingCss;

exports.gux_form_fieldset_heading = GuxFormFieldsetHeading;
