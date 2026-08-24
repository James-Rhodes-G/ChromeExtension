'use strict';

var index = require('./index-BLhHoh_r.js');
var index$1 = require('./index-QInGO-Pu.js');
var usage = require('./usage-v50bi18B.js');
require('./get-closest-element-CfyZl7i7.js');

const navigationName = "Skip links navigation";
var translationResources = {
	navigationName: navigationName
};

const guxSkipNavigationListCss = ":host{position:absolute;top:auto;left:-10000px;width:1px;height:1px;overflow:hidden}:host(:focus-within){position:inherit;top:inherit;left:inherit;width:inherit;height:inherit;overflow:inherit;position:absolute;inset:0}.gux-container nav{inline-size:fit-content;margin-block:40px;margin-inline:auto}.gux-container nav ul{padding:0;margin:0}";

const GuxSkipNavigationList = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    async componentWillLoad() {
        usage.trackComponent(this.root);
        this.i18n = await index$1.buildI18nForComponent(this.root, translationResources);
    }
    render() {
        return (index.h("div", { key: '0879e8494f729dc4a40c71d2cd455592bc833869', class: "gux-container" }, index.h("nav", { key: '73cf4ba6e9781a3d2e56f67d7da8bf00afabe450', "aria-label": this.i18n('navigationName') }, index.h("ul", { key: 'acdb0f31bd6f8a321ad2929077191992f325deda', role: "list" }, index.h("slot", { key: 'e6f551ce84abde67c2e99686ec8c1501779f2009' })))));
    }
    static get delegatesFocus() { return true; }
    get root() { return index.getElement(this); }
};
GuxSkipNavigationList.style = guxSkipNavigationListCss;

exports.gux_skip_navigation_list = GuxSkipNavigationList;
