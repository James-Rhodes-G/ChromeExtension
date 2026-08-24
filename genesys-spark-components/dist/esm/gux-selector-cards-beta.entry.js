import { r as registerInstance, h, a as getElement } from './index-xFL2agjT.js';
import { t as trackComponent } from './usage-D2Q7fj4V.js';

const guxSelectorCardsCss = ".gux-selector-cards{display:flex;flex-wrap:wrap;gap:var(--gse-ui-selectorCard-simple-gap)}";

const GuxSelectorCards = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentWillLoad() {
        trackComponent(this.root);
    }
    render() {
        return (h("div", { key: '89a3e4a7b94ff9a0b21bf654631736f728dc21b0', class: "gux-selector-cards" }, h("slot", { key: 'c74c7d62000770e26a6534bcc9854a7c478775d0' })));
    }
    get root() { return getElement(this); }
};
GuxSelectorCards.style = guxSelectorCardsCss;

export { GuxSelectorCards as gux_selector_cards_beta };
