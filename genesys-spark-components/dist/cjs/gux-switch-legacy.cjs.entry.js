'use strict';

var index = require('./index-BLhHoh_r.js');
var simulateNativeEvent = require('./simulate-native-event-_MPnVmRN.js');
var usage = require('./usage-v50bi18B.js');

const guxSwitchCss = ":host{display:flex;align-items:flex-end}";

const GuxSwitch = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.layout = 'default';
        this.switchItems = [];
    }
    onClick(e) {
        e.stopPropagation();
        const switchItem = e.target.closest('gux-switch-item');
        if (switchItem && this.value !== switchItem.value) {
            this.value = switchItem.value;
            simulateNativeEvent.simulateNativeEvent(this.root, 'input');
            simulateNativeEvent.simulateNativeEvent(this.root, 'change');
        }
    }
    slotChanged() {
        this.switchItems = Array.from(this.root.children);
    }
    componentWillLoad() {
        usage.trackComponent(this.root, { variant: this.layout });
    }
    componentWillRender() {
        this.switchItems.forEach(switchItem => {
            switchItem.selected = switchItem.value === this.value;
        });
    }
    render() {
        return (index.h(index.Host, { key: '88b86e36c2c9083bf79172dea82fbdd6b5040d4b', role: "group", class: `gux-${this.layout}` }, index.h("slot", { key: '6ac3e68b902ea94c0647b2161b11bbe423b54b12', onSlotchange: this.slotChanged.bind(this) })));
    }
    get root() { return index.getElement(this); }
};
GuxSwitch.style = guxSwitchCss;

exports.gux_switch_legacy = GuxSwitch;
