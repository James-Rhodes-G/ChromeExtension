import { r as registerInstance, h, a as getElement } from './index-xFL2agjT.js';
import { t as trackComponent } from './usage-D2Q7fj4V.js';

const guxCardCss = ":host{display:block;inline-size:fit-content}.gux-card{box-sizing:border-box;padding:var(--gse-ui-card-padding);background-color:var(--gse-ui-card-backgroundColor);border:var(--gse-ui-card-default-border-width) var(--gse-ui-card-default-border-style) var(--gse-ui-card-default-border-color);border-radius:var(--gse-ui-card-borderRadius)}.gux-card.gux-bordered{border:var(--gse-ui-card-default-border-width) var(--gse-ui-card-default-border-style) var(--gse-ui-card-default-border-color)}.gux-card.gux-raised{border:var(--gse-ui-card-raised-border-width) var(--gse-ui-card-raised-border-style) var(--gse-ui-card-raised-border-color);box-shadow:var(--gse-ui-card-raised-boxShadow)}.gux-card.gux-borderless{border:var(--gse-ui-card-borderless-border-width) var(--gse-ui-card-borderless-border-style) var(--gse-ui-card-borderless-border-color)}";

const GuxCard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Card Accent.
         */
        this.accent = 'bordered';
    }
    componentWillLoad() {
        trackComponent(this.root, { variant: this.accent });
    }
    render() {
        return (h("div", { key: '363ba6f0a883e4e2f4a056f6d4d441efb0b3ea2c', class: {
                'gux-card': true,
                [`gux-${this.accent}`]: true
            } }, h("slot", { key: 'e36c2a015923aa961bd1c0a308f2066b702e6272' })));
    }
    get root() { return getElement(this); }
};
GuxCard.style = guxCardCss;

export { GuxCard as gux_card };
