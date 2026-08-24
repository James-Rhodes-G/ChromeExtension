import { r as registerInstance, h, H as Host, a as getElement } from './index-xFL2agjT.js';
import { s as simulateNativeEvent } from './simulate-native-event-BMRf5pjV.js';
import { t as trackComponent } from './usage-D2Q7fj4V.js';

const guxSwitchCss = ":host{display:flex;align-items:flex-end}";

const GuxSwitch = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.layout = 'default';
        this.switchItems = [];
    }
    onClick(e) {
        e.stopPropagation();
        const switchItem = e.target.closest('gux-switch-item');
        if (switchItem && this.value !== switchItem.value) {
            this.value = switchItem.value;
            simulateNativeEvent(this.root, 'input');
            simulateNativeEvent(this.root, 'change');
        }
    }
    slotChanged() {
        this.switchItems = Array.from(this.root.children);
    }
    componentWillLoad() {
        trackComponent(this.root, { variant: this.layout });
    }
    componentWillRender() {
        this.switchItems.forEach(switchItem => {
            switchItem.selected = switchItem.value === this.value;
        });
    }
    render() {
        return (h(Host, { key: '88b86e36c2c9083bf79172dea82fbdd6b5040d4b', role: "group", class: `gux-${this.layout}` }, h("slot", { key: '6ac3e68b902ea94c0647b2161b11bbe423b54b12', onSlotchange: this.slotChanged.bind(this) })));
    }
    get root() { return getElement(this); }
};
GuxSwitch.style = guxSwitchCss;

export { GuxSwitch as gux_switch_legacy };
