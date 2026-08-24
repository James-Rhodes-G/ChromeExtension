'use strict';

var index = require('./index-BLhHoh_r.js');
var guxList_service = require('./gux-list.service-CecJpxVa.js');
var usage = require('./usage-v50bi18B.js');

const guxListCss = ":host{display:flex;flex-direction:column;flex-wrap:nowrap;place-content:stretch flex-start;align-items:flex-start;padding:var(--gse-ui-menu-padding)}";

/**
 * @slot - collection of gux-list-item, gux-list-divider elements
 */
const validFocusableItems = ['gux-list-item'];
const GuxList = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    componentWillLoad() {
        usage.trackComponent(this.root);
    }
    onKeyDown(event) {
        switch (event.key) {
            case 'ArrowUp':
                event.preventDefault();
                guxList_service.previous(this.root, validFocusableItems);
                break;
            case 'Home':
                event.preventDefault();
                guxList_service.first(this.root, validFocusableItems);
                break;
            case 'ArrowDown':
                event.preventDefault();
                guxList_service.next(this.root, validFocusableItems);
                break;
            case 'End':
                event.preventDefault();
                guxList_service.last(this.root, validFocusableItems);
                break;
        }
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async guxFocusFirstItem() {
        guxList_service.first(this.root, validFocusableItems);
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async guxFocusItemById(id) {
        guxList_service.byId(this.root, validFocusableItems, id);
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async guxFocusItemByClosestId(id) {
        guxList_service.byClosestId(this.root, validFocusableItems, id);
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async guxFocusLastItem() {
        guxList_service.last(this.root, validFocusableItems);
    }
    render() {
        return (index.h(index.Host, { key: '53331bf67691b223922f5f855e2513a2390b1cc0', tabindex: "-1", role: "list" }, index.h("slot", { key: 'f34a9ff8b70dad57c71c701931ce58a193e07a4a' })));
    }
    get root() { return index.getElement(this); }
};
GuxList.style = guxListCss;

exports.gux_list = GuxList;
