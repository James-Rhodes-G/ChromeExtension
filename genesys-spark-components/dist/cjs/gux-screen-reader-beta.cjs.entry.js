'use strict';

var index = require('./index-BLhHoh_r.js');
var usage = require('./usage-v50bi18B.js');

const guxScreenReaderCss = ":host{position:relative}.gux-sr-only:not(:focus):not(:active){position:absolute;width:1px;height:1px;overflow:hidden;white-space:nowrap;clip:rect(0 0 0 0);clip-path:inset(50%)}";

const GuxScreenReader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    componentWillLoad() {
        usage.trackComponent(this.root);
    }
    render() {
        return (index.h("span", { key: '95824e610f97c40b42b517f7ff0782ec60f0385e', class: "gux-sr-only" }, index.h("slot", { key: '5017a13a4fa03145ac42029c7c9ae6908d357aa3' })));
    }
    get root() { return index.getElement(this); }
};
GuxScreenReader.style = guxScreenReaderCss;

exports.gux_screen_reader_beta = GuxScreenReader;
