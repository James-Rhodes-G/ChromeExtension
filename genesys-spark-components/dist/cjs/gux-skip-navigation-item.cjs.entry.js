'use strict';

var index = require('./index-BLhHoh_r.js');

const guxSkipNavigationItemCss = ":host{position:absolute;top:auto;left:-10000px;width:1px;height:1px;overflow:hidden}:host(:focus-within){position:inherit;top:inherit;left:inherit;width:inherit;height:inherit;overflow:inherit}::slotted(a){padding:12px;font-size:2rem;background-color:var(--gse-semantic-background-container-elevated-default)}";

const GuxSkipNavigationItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '37b07a7b5ea621008e76cd732a31d5fa3cfa1f6d', role: "listitem" }, index.h("slot", { key: 'e01d917548c8eab5d8acab039acacee89bc8e4d0' })));
    }
    static get delegatesFocus() { return true; }
};
GuxSkipNavigationItem.style = guxSkipNavigationItemCss;

exports.gux_skip_navigation_item = GuxSkipNavigationItem;
