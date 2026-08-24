'use strict';

var index = require('./index-BLhHoh_r.js');
var usage = require('./usage-v50bi18B.js');

const guxFormFooterCss = ":host ::slotted(footer){display:flex;align-items:center;justify-content:flex-start;margin-block-start:var(--gse-semantic-formControl-formBody-paddingBottom);border-block-start:var(--gse-ui-formFooter-separator-width) var(--gse-ui-formFooter-separator-style) var(--gse-ui-formFooter-separator-color)}:host(.gux-form-footer-page-desktop) ::slotted(footer){gap:var(--gse-ui-formFooter-page-desktop-gap);padding-block:var(--gse-ui-formFooter-page-desktop-topPadding) var(--gse-ui-formFooter-page-desktop-bottomPadding);padding-inline:var(--gse-ui-formFooter-page-desktop-horizontalPadding) var(--gse-ui-formFooter-page-desktop-horizontalPadding)}:host(.gux-form-footer-page-mobile) ::slotted(footer){flex-direction:column;gap:var(--gse-ui-formFooter-page-mobile-gap);align-items:stretch;justify-content:center;padding-block:var(--gse-ui-formFooter-page-mobile-topPadding) var(--gse-ui-formFooter-page-mobile-bottomPadding);padding-inline:var(--gse-ui-formFooter-page-mobile-horizontalPadding) var(--gse-ui-formFooter-page-mobile-horizontalPadding)}:host(.gux-form-footer-side-sheet-desktop) ::slotted(footer){gap:var(--gse-ui-formFooter-sideSheet-desktop-gap);padding-block:var(--gse-ui-formFooter-sideSheet-desktop-topPadding) var(--gse-ui-formFooter-sideSheet-desktop-bottomPadding);padding-inline:var(--gse-ui-formFooter-sideSheet-desktop-horizontalPadding) var(--gse-ui-formFooter-sideSheet-desktop-horizontalPadding)}";

const GuxFormFooter = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.placement = 'page-desktop';
    }
    componentWillLoad() {
        usage.trackComponent(this.root, { variant: this.placement });
    }
    render() {
        return (index.h(index.Host, { key: '4f6079d93cee9ed8f9ac2e99c23c61ce4266621e', class: {
                [`gux-form-footer-${this.placement}`]: true
            } }, index.h("slot", { key: '099c671fbbf9d2465a54e14c5314b219eda9fb74' })));
    }
    get root() { return index.getElement(this); }
};
GuxFormFooter.style = guxFormFooterCss;

exports.gux_form_footer = GuxFormFooter;
