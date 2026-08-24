import { r as registerInstance, c as createEvent, h, H as Host, a as getElement } from './index-xFL2agjT.js';
import { b as buildI18nForComponent } from './index-Dac2qHbK.js';
import { c as getIndexInParent } from './gux-column-manager.service-CB2ijDRX.js';
import './get-closest-element-Cd4R0amv.js';
import './clamp-CcCycvZh.js';
import './simulate-native-event-BMRf5pjV.js';

function getNewIndex(oldIndex, dropIndex, mouseOnTopHalfOfDropElement) {
    if (oldIndex < dropIndex) {
        if (mouseOnTopHalfOfDropElement) {
            return dropIndex - 1;
        }
        return dropIndex;
    }
    if (mouseOnTopHalfOfDropElement) {
        return dropIndex;
    }
    return dropIndex + 1;
}

const activateReordering = "Activate reordering mode for {columnName} column";
var translationResources = {
	activateReordering: activateReordering
};

const guxColumnManagerItemCss = ":host([gs-reorder-indicator=above]) .gux-container{border-block-start-color:var(--gse-ui-dataTableItems-editColumn-editColumnItem-drop-borderColor)}:host([gs-reorder-indicator=below]) .gux-container{border-block-end-color:var(--gse-ui-dataTableItems-editColumn-editColumnItem-drop-borderColor)}.gux-container{display:flex;flex-direction:row;flex-wrap:nowrap;gap:var(--gse-ui-dataTableItems-editColumn-editColumnItem-gap);place-content:stretch flex-start;align-items:center;margin-block-end:-2px;border-block-start:2px solid transparent;border-block-end:2px solid transparent}.gux-container.gux-drop-above{border-block-start-color:var(--gse-ui-dataTableItems-editColumn-editColumnItem-drop-borderColor)}.gux-container.gux-drop-below{border-block-end-color:var(--gse-ui-dataTableItems-editColumn-editColumnItem-drop-borderColor)}.gux-container.gux-dragging{border-block-start-color:transparent;border-block-end-color:transparent;opacity:0.4}.gux-container .gux-reorder{all:unset;display:flex;flex:0 1 auto;align-self:auto;order:0;color:var(--gse-ui-dataTableItems-editColumn-editColumnItem-foregroundColor);cursor:grab;border-radius:4px}.gux-container .gux-reorder:active{pointer-events:none;cursor:grabbing !important}.gux-container .gux-reorder:active gux-icon,.gux-container .gux-reorder:focus-visible gux-icon{color:var(--gse-ui-dataTableItems-editColumn-editColumnItem-active-foregroundColor)}.gux-container .gux-reorder:hover gux-icon{color:var(--gse-ui-dataTableItems-editColumn-editColumnItem-hover-foregroundColor)}.gux-container .gux-reorder:hover,.gux-container .gux-reorder:focus-visible{outline:var(--gse-semantic-focusOutline-sm-borderWidth) solid var(--gse-semantic-border-focus)}.gux-container .gux-select{position:relative;flex:1 1 auto;align-self:auto;order:1}.gux-container .gux-select gux-text-highlight{position:absolute;inset-block-start:1px;inset-inline-start:calc(var(--gse-ui-icon-small-size) + var(--gse-ui-checkbox-gap));color:transparent;pointer-events:none}.gux-sr-only:not(:focus):not(:active){position:absolute;width:1px;height:1px;overflow:hidden;white-space:nowrap;clip:rect(0 0 0 0);clip-path:inset(50%)}";

const GuxColumnManagerItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.internal_order_change = createEvent(this, "internal_order_change", 7);
        this.internal_keyboard_reorder_start = createEvent(this, "internal_keyboard_reorder_start", 7);
        this.internal_keyboard_reorder_move = createEvent(this, "internal_keyboard_reorder_move", 7);
        this.internal_keyboard_reorder_emit = createEvent(this, "internal_keyboard_reorder_emit", 7);
        this.internal_keyboard_reorder_finish = createEvent(this, "internal_keyboard_reorder_finish", 7);
        this.pendingReorder = 'none';
        this.isDragging = false;
        this.isReordering = false;
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async guxSetHighlight(highlight = '', highlightActive = false) {
        this.highlight = highlight;
        this.highlightActive = highlightActive;
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async guxFocus() {
        this.reorderButtonElement.focus();
    }
    onBlur() {
        this.setReorderMode(false);
    }
    onDragStart(event) {
        this.isDragging = true;
        const oldIndex = getIndexInParent(this.root);
        event.dataTransfer.setData('oldIndex', String(oldIndex));
        event.dataTransfer.effectAllowed = 'move';
    }
    onDragEnter(event) {
        event.dataTransfer.dropEffect = 'move';
        this.pendingReorder = this.mouseOnTopHalf(event) ? 'above' : 'below';
    }
    onDragOver(event) {
        event.preventDefault();
        this.pendingReorder = this.mouseOnTopHalf(event) ? 'above' : 'below';
    }
    onDragLeave() {
        this.pendingReorder = 'none';
    }
    onDragEnd() {
        this.isDragging = false;
    }
    onDrop(event) {
        const oldIndex = Number(event.dataTransfer.getData('oldIndex'));
        const dropIndex = getIndexInParent(this.root);
        event.stopPropagation(); // stops the browser from redirecting.
        event.stopImmediatePropagation();
        this.pendingReorder = 'none';
        const newIndex = getNewIndex(oldIndex, dropIndex, this.mouseOnTopHalf(event));
        this.internal_order_change.emit({ oldIndex, newIndex });
        return false;
    }
    mouseOnTopHalf(event) {
        const rect = this.root.getBoundingClientRect();
        return event.clientY - rect.top <= (rect.bottom - rect.top) / 2;
    }
    onSlotChange() {
        this.text = this.root.querySelector('gux-form-field-checkbox label').textContent;
    }
    setReorderMode(isReordering, doReorder = false) {
        if (this.isReordering !== isReordering) {
            this.isReordering = isReordering;
            if (isReordering) {
                this.internal_keyboard_reorder_start.emit(this.text);
            }
            else {
                if (doReorder) {
                    this.internal_keyboard_reorder_emit.emit();
                }
                this.internal_keyboard_reorder_finish.emit();
            }
        }
    }
    toggleReorderMode() {
        this.setReorderMode(!this.isReordering, true);
    }
    keyboardReorder(event) {
        if (this.isReordering) {
            switch (event.key) {
                case 'ArrowUp': {
                    event.preventDefault();
                    this.internal_keyboard_reorder_move.emit({
                        delta: -1,
                        column: this.text
                    });
                    break;
                }
                case 'ArrowDown': {
                    event.preventDefault();
                    this.internal_keyboard_reorder_move.emit({
                        delta: 1,
                        column: this.text
                    });
                    break;
                }
                case 'Home': {
                    event.preventDefault();
                    this.internal_keyboard_reorder_move.emit({
                        delta: -Infinity,
                        column: this.text
                    });
                    break;
                }
                case 'End': {
                    event.preventDefault();
                    this.internal_keyboard_reorder_move.emit({
                        delta: Infinity,
                        column: this.text
                    });
                    break;
                }
                case 'Escape': {
                    event.preventDefault();
                    this.setReorderMode(false);
                }
            }
        }
    }
    async componentWillLoad() {
        this.i18n = await buildI18nForComponent(this.root, translationResources);
    }
    render() {
        return (h(Host, { key: 'e6013e498a0c7f257528ace4073d8172583d08f8', draggable: "true" }, h("div", { key: '49ab2eb77431ae3133b5aa34697fc85139a146b6', class: {
                'gux-container': true,
                [`gux-drop-${this.pendingReorder}`]: true,
                'gux-dragging': this.isDragging
            } }, h("button", { key: '50c716123ee00cba66bd2f6fc8b15779113b4f47', class: {
                'gux-reorder': true,
                'gux-reordering': this.isReordering
            }, type: "button", onClick: () => this.toggleReorderMode(), onKeyDown: event => this.keyboardReorder(event), ref: el => (this.reorderButtonElement = el) }, h("gux-icon", { key: '97863cb76d1bf28dfa079c77a1c99eed6664972b', "icon-name": "fa/grip-vertical-solid", decorative: true, size: "small" }), h("span", { key: '6bd0d410c9d3d0c7772abfa40fae34987e3d41b4', class: "gux-sr-only" }, this.i18n('activateReordering', { columnName: this.text }))), h("div", { key: 'edf779e93542edcd8704fee84f330939460776de', class: "gux-select" }, h("slot", { key: '84f0bc882c16a3e478ea6a0e76f85bbe63b23686', onSlotchange: () => this.onSlotChange() }), h("gux-text-highlight", { key: '6e4e27282db27295a16cba27d063fe0f682f4901', highlight: this.highlight, text: this.text, strategy: "contains", dimmed: !this.highlightActive })))));
    }
    get root() { return getElement(this); }
};
GuxColumnManagerItem.style = guxColumnManagerItemCss;

export { GuxColumnManagerItem as gux_column_manager_item };
