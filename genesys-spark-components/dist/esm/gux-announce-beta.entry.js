import { r as registerInstance, h, H as Host, a as getElement } from './index-xFL2agjT.js';
import { t as trackComponent } from './usage-D2Q7fj4V.js';
import { b as afterNextRender } from './after-next-render-Bg4q97BS.js';

const guxAnnounceCss = ":host{position:absolute;top:auto;left:-10000px;width:1px;height:1px;overflow:hidden}";

const GuxAnnounce = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.politeness = 'polite';
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async guxAnnounce(text) {
        this.containerElement.innerText = '';
        afterNextRender(() => {
            this.containerElement.innerText = text;
        });
    }
    componentWillLoad() {
        trackComponent(this.root);
    }
    render() {
        return (h(Host, { key: '96acda36ac04edb73e9fcc5af71fa83cd30fce92', "aria-live": this.politeness }, h("slot", { key: 'b490bf95af7e150220969cc20383b9406b4bcf19' }), h("div", { key: '2c731aff495c684d15bda9ed006030608bc9a4e7', ref: el => (this.containerElement = el) })));
    }
    get root() { return getElement(this); }
};
GuxAnnounce.style = guxAnnounceCss;

export { GuxAnnounce as gux_announce_beta };
