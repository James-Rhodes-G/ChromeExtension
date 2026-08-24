'use strict';

var index = require('./index-BLhHoh_r.js');
var usage = require('./usage-v50bi18B.js');

const guxSelectorCardsCss = ".gux-selector-cards{display:flex;flex-wrap:wrap;gap:var(--gse-ui-selectorCard-simple-gap)}";

const GuxSelectorCards = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    componentWillLoad() {
        usage.trackComponent(this.root);
    }
    render() {
        return (index.h("div", { key: '89a3e4a7b94ff9a0b21bf654631736f728dc21b0', class: "gux-selector-cards" }, index.h("slot", { key: 'c74c7d62000770e26a6534bcc9854a7c478775d0' })));
    }
    get root() { return index.getElement(this); }
};
GuxSelectorCards.style = guxSelectorCardsCss;

exports.gux_selector_cards_beta = GuxSelectorCards;
