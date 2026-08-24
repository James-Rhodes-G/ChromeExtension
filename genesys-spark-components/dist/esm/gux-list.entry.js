import { r as registerInstance, h, H as Host, a as getElement } from './index-xFL2agjT.js';
import { l as last, n as next, f as first, p as previous, b as byId, a as byClosestId } from './gux-list.service-BebXX5IS.js';
import { t as trackComponent } from './usage-D2Q7fj4V.js';

const guxListCss = ":host{display:flex;flex-direction:column;flex-wrap:nowrap;place-content:stretch flex-start;align-items:flex-start;padding:var(--gse-ui-menu-padding)}";

/**
 * @slot - collection of gux-list-item, gux-list-divider elements
 */
const validFocusableItems = ['gux-list-item'];
const GuxList = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentWillLoad() {
        trackComponent(this.root);
    }
    onKeyDown(event) {
        switch (event.key) {
            case 'ArrowUp':
                event.preventDefault();
                previous(this.root, validFocusableItems);
                break;
            case 'Home':
                event.preventDefault();
                first(this.root, validFocusableItems);
                break;
            case 'ArrowDown':
                event.preventDefault();
                next(this.root, validFocusableItems);
                break;
            case 'End':
                event.preventDefault();
                last(this.root, validFocusableItems);
                break;
        }
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async guxFocusFirstItem() {
        first(this.root, validFocusableItems);
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async guxFocusItemById(id) {
        byId(this.root, validFocusableItems, id);
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async guxFocusItemByClosestId(id) {
        byClosestId(this.root, validFocusableItems, id);
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async guxFocusLastItem() {
        last(this.root, validFocusableItems);
    }
    render() {
        return (h(Host, { key: '53331bf67691b223922f5f855e2513a2390b1cc0', tabindex: "-1", role: "list" }, h("slot", { key: 'f34a9ff8b70dad57c71c701931ce58a193e07a4a' })));
    }
    get root() { return getElement(this); }
};
GuxList.style = guxListCss;

export { GuxList as gux_list };
