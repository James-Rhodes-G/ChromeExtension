import { r as registerInstance, f as forceUpdate, h, H as Host, a as getElement } from './index-xFL2agjT.js';
import { s as simulateNativeEvent } from './simulate-native-event-BMRf5pjV.js';
import { t as trackComponent } from './usage-D2Q7fj4V.js';

const guxSegmentedControlCss = ":host{display:inline-flex}";

const GuxSegmentedControl = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.disabled = false; // This is used by child items
        this.items = [];
    }
    onClick(e) {
        e.stopPropagation();
        const switchItem = e.target.closest('gux-segmented-control-item');
        if (switchItem && this.value !== switchItem.value) {
            this.value = switchItem.value;
            simulateNativeEvent(this.root, 'input');
            simulateNativeEvent(this.root, 'change');
        }
    }
    watchDisabled() {
        this.items.forEach(switchItem => {
            forceUpdate(switchItem);
        });
    }
    slotChanged() {
        this.items = Array.from(this.root.children);
    }
    componentWillLoad() {
        trackComponent(this.root);
    }
    componentWillRender() {
        this.items.forEach(switchItem => {
            switchItem.selected = switchItem.value === this.value;
        });
    }
    render() {
        return (h(Host, { key: '6313278a473c749972e2298b83f28cb11dd47a32', role: "group" }, h("slot", { key: '4d589907bbccb2a17d0912e6338ce5e6756e6071', onSlotchange: this.slotChanged.bind(this) })));
    }
    get root() { return getElement(this); }
    static get watchers() { return {
        "disabled": ["watchDisabled"]
    }; }
};
GuxSegmentedControl.style = guxSegmentedControlCss;

export { GuxSegmentedControl as gux_segmented_control_beta };
