'use strict';

var index = require('./index-BLhHoh_r.js');
var simulateNativeEvent = require('./simulate-native-event-_MPnVmRN.js');
var usage = require('./usage-v50bi18B.js');

const guxSegmentedControlCss = ":host{display:inline-flex}";

const GuxSegmentedControl = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.disabled = false; // This is used by child items
        this.items = [];
    }
    onClick(e) {
        e.stopPropagation();
        const switchItem = e.target.closest('gux-segmented-control-item');
        if (switchItem && this.value !== switchItem.value) {
            this.value = switchItem.value;
            simulateNativeEvent.simulateNativeEvent(this.root, 'input');
            simulateNativeEvent.simulateNativeEvent(this.root, 'change');
        }
    }
    watchDisabled() {
        this.items.forEach(switchItem => {
            index.forceUpdate(switchItem);
        });
    }
    slotChanged() {
        this.items = Array.from(this.root.children);
    }
    componentWillLoad() {
        usage.trackComponent(this.root);
    }
    componentWillRender() {
        this.items.forEach(switchItem => {
            switchItem.selected = switchItem.value === this.value;
        });
    }
    render() {
        return (index.h(index.Host, { key: '6313278a473c749972e2298b83f28cb11dd47a32', role: "group" }, index.h("slot", { key: '4d589907bbccb2a17d0912e6338ce5e6756e6071', onSlotchange: this.slotChanged.bind(this) })));
    }
    get root() { return index.getElement(this); }
    static get watchers() { return {
        "disabled": ["watchDisabled"]
    }; }
};
GuxSegmentedControl.style = guxSegmentedControlCss;

exports.gux_segmented_control_beta = GuxSegmentedControl;
