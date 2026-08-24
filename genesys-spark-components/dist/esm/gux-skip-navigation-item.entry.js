import { r as registerInstance, h, H as Host } from './index-xFL2agjT.js';

const guxSkipNavigationItemCss = ":host{position:absolute;top:auto;left:-10000px;width:1px;height:1px;overflow:hidden}:host(:focus-within){position:inherit;top:inherit;left:inherit;width:inherit;height:inherit;overflow:inherit}::slotted(a){padding:12px;font-size:2rem;background-color:var(--gse-semantic-background-container-elevated-default)}";

const GuxSkipNavigationItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '37b07a7b5ea621008e76cd732a31d5fa3cfa1f6d', role: "listitem" }, h("slot", { key: 'e01d917548c8eab5d8acab039acacee89bc8e4d0' })));
    }
    static get delegatesFocus() { return true; }
};
GuxSkipNavigationItem.style = guxSkipNavigationItemCss;

export { GuxSkipNavigationItem as gux_skip_navigation_item };
