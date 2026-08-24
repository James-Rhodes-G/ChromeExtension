import { r as registerInstance, c as createEvent, h, H as Host, a as getElement } from './index-xFL2agjT.js';
import { t as trackComponent } from './usage-D2Q7fj4V.js';
import { l as last, f as first, n as next, p as previous } from './gux-list.service-BebXX5IS.js';

const guxRichTextEditorListCss = ":host{display:flex;flex-direction:column;flex-wrap:nowrap;place-content:stretch flex-start;align-items:flex-start;padding:var(--gse-ui-menu-padding)}";

/**
 * @slot - collection of gux-rich-style-list-item, gux-rich-highlight-list-item or gux-rich-text-editor-sub-list elements.
 */
const validFocusableItems = [
    'gux-rich-style-list-item',
    'gux-rich-highlight-list-item',
    'gux-rich-text-editor-sub-list'
];
const GuxRichTextEditorList = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.internallistitemsupdated = createEvent(this, "internallistitemsupdated", 7);
        this.listItems = [];
    }
    get listItemsSlot() {
        return this.root.querySelector('slot');
    }
    get listItemElements() {
        var _a;
        const assignedElements = (_a = this.listItemsSlot) === null || _a === void 0 ? void 0 : _a.assignedElements();
        if (assignedElements) {
            return Array.from(assignedElements);
        }
        return [];
    }
    //Set the first gux-rich-highlight-list-item tab-index to 0 so we can tab to the list of colors.
    handleHighlighItemsNavigation() {
        if (this.listItemsSlot) {
            const firstHighlightItem = this.listItemsSlot
                .assignedElements()
                .find(el => el.tagName.toLowerCase() === 'gux-rich-highlight-list-item');
            if (firstHighlightItem) {
                const buttonElement = firstHighlightItem.shadowRoot.querySelector('button');
                if (buttonElement) {
                    buttonElement.tabIndex = 0;
                }
            }
        }
    }
    setListItems() {
        this.listItems = this.listItemElements;
        this.internallistitemsupdated.emit();
    }
    async componentWillLoad() {
        trackComponent(this.root);
        this.setListItems();
        this.handleHighlighItemsNavigation();
    }
    onKeyDown(event) {
        const target = event.target;
        if (!target) {
            return;
        }
        const keyHandlers = {
            ArrowUp: () => previous(this.root, validFocusableItems),
            ArrowDown: () => next(this.root, validFocusableItems),
            Home: () => first(this.root, validFocusableItems),
            End: () => last(this.root, validFocusableItems)
        };
        if (target.matches('gux-rich-highlight-list-item')) {
            Object.assign(keyHandlers, {
                ArrowLeft: () => previous(this.root, validFocusableItems),
                ArrowRight: () => next(this.root, validFocusableItems)
            });
        }
        const handler = keyHandlers[event.key];
        if (handler) {
            event.preventDefault();
            handler();
        }
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async guxFocusFirstItem() {
        first(this.root, validFocusableItems);
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async guxFocusLastItem() {
        last(this.root, validFocusableItems);
    }
    render() {
        return (h(Host, { key: '6fdcb0ec440c4df7c43cd121eef4e1980d8a61fd', role: "list" }, h("slot", { key: '52e975452d0955e53c1476e826a2da43b70ffd2a', onSlotchange: () => this.setListItems() })));
    }
    static get delegatesFocus() { return true; }
    get root() { return getElement(this); }
};
GuxRichTextEditorList.style = guxRichTextEditorListCss;

export { GuxRichTextEditorList as gux_rich_text_editor_list };
