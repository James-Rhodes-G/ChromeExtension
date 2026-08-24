'use strict';

var index = require('./index-BLhHoh_r.js');
var usage = require('./usage-v50bi18B.js');
var afterNextRender = require('./after-next-render-CeY_1Kbz.js');

const guxAnnounceCss = ":host{position:absolute;top:auto;left:-10000px;width:1px;height:1px;overflow:hidden}";

const GuxAnnounce = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.politeness = 'polite';
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async guxAnnounce(text) {
        this.containerElement.innerText = '';
        afterNextRender.afterNextRender(() => {
            this.containerElement.innerText = text;
        });
    }
    componentWillLoad() {
        usage.trackComponent(this.root);
    }
    render() {
        return (index.h(index.Host, { key: '96acda36ac04edb73e9fcc5af71fa83cd30fce92', "aria-live": this.politeness }, index.h("slot", { key: 'b490bf95af7e150220969cc20383b9406b4bcf19' }), index.h("div", { key: '2c731aff495c684d15bda9ed006030608bc9a4e7', ref: el => (this.containerElement = el) })));
    }
    get root() { return index.getElement(this); }
};
GuxAnnounce.style = guxAnnounceCss;

exports.gux_announce_beta = GuxAnnounce;
