import { r as registerInstance, h, a as getElement } from './index-xFL2agjT.js';
import { b as buildI18nForComponent } from './index-Dac2qHbK.js';
import { t as trackComponent } from './usage-D2Q7fj4V.js';
import './get-closest-element-Cd4R0amv.js';

const navigationName = "Skip links navigation";
var translationResources = {
	navigationName: navigationName
};

const guxSkipNavigationListCss = ":host{position:absolute;top:auto;left:-10000px;width:1px;height:1px;overflow:hidden}:host(:focus-within){position:inherit;top:inherit;left:inherit;width:inherit;height:inherit;overflow:inherit;position:absolute;inset:0}.gux-container nav{inline-size:fit-content;margin-block:40px;margin-inline:auto}.gux-container nav ul{padding:0;margin:0}";

const GuxSkipNavigationList = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    async componentWillLoad() {
        trackComponent(this.root);
        this.i18n = await buildI18nForComponent(this.root, translationResources);
    }
    render() {
        return (h("div", { key: '0879e8494f729dc4a40c71d2cd455592bc833869', class: "gux-container" }, h("nav", { key: '73cf4ba6e9781a3d2e56f67d7da8bf00afabe450', "aria-label": this.i18n('navigationName') }, h("ul", { key: 'acdb0f31bd6f8a321ad2929077191992f325deda', role: "list" }, h("slot", { key: 'e6f551ce84abde67c2e99686ec8c1501779f2009' })))));
    }
    static get delegatesFocus() { return true; }
    get root() { return getElement(this); }
};
GuxSkipNavigationList.style = guxSkipNavigationListCss;

export { GuxSkipNavigationList as gux_skip_navigation_list };
