import { r as registerInstance, h, a as getElement } from './index-xFL2agjT.js';
import { t as trackComponent } from './usage-D2Q7fj4V.js';

const guxScreenReaderCss = ":host{position:relative}.gux-sr-only:not(:focus):not(:active){position:absolute;width:1px;height:1px;overflow:hidden;white-space:nowrap;clip:rect(0 0 0 0);clip-path:inset(50%)}";

const GuxScreenReader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentWillLoad() {
        trackComponent(this.root);
    }
    render() {
        return (h("span", { key: '95824e610f97c40b42b517f7ff0782ec60f0385e', class: "gux-sr-only" }, h("slot", { key: '5017a13a4fa03145ac42029c7c9ae6908d357aa3' })));
    }
    get root() { return getElement(this); }
};
GuxScreenReader.style = guxScreenReaderCss;

export { GuxScreenReader as gux_screen_reader_beta };
