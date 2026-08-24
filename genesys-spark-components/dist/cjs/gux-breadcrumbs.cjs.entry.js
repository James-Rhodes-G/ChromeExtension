'use strict';

var index = require('./index-BLhHoh_r.js');
var index$1 = require('./index-QInGO-Pu.js');
var usage = require('./usage-v50bi18B.js');
require('./get-closest-element-CfyZl7i7.js');

const breadcrumbs = "Breadcrumbs";
var breadcrumbsResources = {
	breadcrumbs: breadcrumbs
};

const guxBreadcrumbsCss = "ol{display:flex;flex-direction:row;flex-wrap:wrap;place-content:flex-start flex-start;align-items:center;padding:0;margin:0;list-style:none}";

const GuxBreadcrumbs = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.accent = 'primary';
    }
    componentWillLoad() {
        usage.trackComponent(this.root, { variant: this.accent });
    }
    async componentWillRender() {
        this.i18n = await index$1.buildI18nForComponent(this.root, breadcrumbsResources);
    }
    onSlotChange() {
        Array.from(this.root.children).forEach(child => index.forceUpdate(child));
    }
    render() {
        return (index.h("nav", { key: '97573bc551ca35d0f29c2f77f3cae221a7dbb532', "aria-label": this.i18n('breadcrumbs') }, index.h("ol", { key: 'b35d243aeb4bce30d1d5145a1efb62bfcc7e3806' }, index.h("slot", { key: '9f03f2e162e635d107284f73483f2bcd0405337f', onSlotchange: this.onSlotChange.bind(this) }))));
    }
    get root() { return index.getElement(this); }
};
GuxBreadcrumbs.style = guxBreadcrumbsCss;

exports.gux_breadcrumbs = GuxBreadcrumbs;
