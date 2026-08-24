import { r as registerInstance, f as forceUpdate, h, a as getElement } from './index-xFL2agjT.js';
import { b as buildI18nForComponent } from './index-Dac2qHbK.js';
import { t as trackComponent } from './usage-D2Q7fj4V.js';
import './get-closest-element-Cd4R0amv.js';

const breadcrumbs = "Breadcrumbs";
var breadcrumbsResources = {
	breadcrumbs: breadcrumbs
};

const guxBreadcrumbsCss = "ol{display:flex;flex-direction:row;flex-wrap:wrap;place-content:flex-start flex-start;align-items:center;padding:0;margin:0;list-style:none}";

const GuxBreadcrumbs = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.accent = 'primary';
    }
    componentWillLoad() {
        trackComponent(this.root, { variant: this.accent });
    }
    async componentWillRender() {
        this.i18n = await buildI18nForComponent(this.root, breadcrumbsResources);
    }
    onSlotChange() {
        Array.from(this.root.children).forEach(child => forceUpdate(child));
    }
    render() {
        return (h("nav", { key: '97573bc551ca35d0f29c2f77f3cae221a7dbb532', "aria-label": this.i18n('breadcrumbs') }, h("ol", { key: 'b35d243aeb4bce30d1d5145a1efb62bfcc7e3806' }, h("slot", { key: '9f03f2e162e635d107284f73483f2bcd0405337f', onSlotchange: this.onSlotChange.bind(this) }))));
    }
    get root() { return getElement(this); }
};
GuxBreadcrumbs.style = guxBreadcrumbsCss;

export { GuxBreadcrumbs as gux_breadcrumbs };
