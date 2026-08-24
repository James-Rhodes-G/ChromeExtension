var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { h, readTask, writeTask } from "@stencil/core";
import Sortable from "sortablejs";
import { OnMutation } from "../../../../utils/decorator/on-mutation";
import { eventIsFrom } from "../../../../utils/dom/event-is-from";
import { afterNextRenderTimeout } from "../../../../utils/dom/after-next-render";
import { buildI18nForComponent } from "../../../../i18n";
import tabsResources from "../i18n/en.json";
export class GuxTabAdvancedList {
    constructor() {
        /**
         * Enable new tab button
         */
        this.showNewTabButton = true;
        /**
         * Maximum nuber of tabs created
         */
        this.tabLimit = Infinity;
        /**
         * Enable tab sorting by drag/drop
         */
        this.allowSort = true;
        this.focused = 0;
        /**
         * Disable new tab button event
         */
        this.disableAddTabButton = false;
        /**
         * Tabs show scrollbar when tabs overflow container
         */
        this.hasScrollbar = false;
        /**
         * Keyboard sort has been triggered using space
         */
        this.keyboardSort = false;
        /**
         * Index of sort target before sort starts
         */
        this.initialSortIndex = 0;
        /**
         * Translation key for aria live alert for keyboard sort
         */
        this.ariaLiveAlert = '';
    }
    onFocusin(event) {
        if (this.allowSort &&
            eventIsFrom('.gux-tablist', event) &&
            !this.keyboardSort) {
            this.ariaLiveAlert = 'toggleSort';
        }
    }
    onFocusout(event) {
        if (!this.root
            .querySelector('.gux-tablist')
            .contains(event.relatedTarget)) {
            this.tabTriggers.forEach((tabTrigger, index) => {
                void tabTrigger.guxGetActive().then(activeElement => {
                    if (activeElement) {
                        this.focused = index;
                    }
                    else {
                        tabTrigger
                            .querySelector('.gux-tab-button')
                            .setAttribute('tabindex', '-1');
                        if (tabTrigger.querySelector('.gux-tab-options-button')) {
                            tabTrigger
                                .querySelector('.gux-tab-options-button')
                                .setAttribute('tabindex', '-1');
                        }
                    }
                });
            });
        }
    }
    watchAllowSort(allowSort) {
        if (allowSort) {
            this.validateSortableInstance();
        }
        else {
            this.destroySortable();
        }
    }
    onMutation() {
        this.setTabTriggers();
    }
    onKeydown(event) {
        switch (event.key) {
            case 'ArrowRight':
            case 'ArrowDown':
                event.preventDefault();
                if (this.keyboardSort &&
                    !eventIsFrom('.gux-tab-options-button', event)) {
                    this.ariaLiveAlert = '';
                    const parentNode = this.root.querySelector('.gux-tablist');
                    const allNodes = parentNode.querySelectorAll('gux-tab-advanced');
                    const targetNodeIndex = Array.prototype.indexOf.call(allNodes, this.sortTarget);
                    let insertBeforeTab;
                    if (targetNodeIndex === allNodes.length - 1) {
                        insertBeforeTab = allNodes[0];
                    }
                    else {
                        insertBeforeTab = allNodes[targetNodeIndex + 2];
                    }
                    parentNode.insertBefore(this.sortTarget, insertBeforeTab);
                    this.tabTriggers = this.root.querySelectorAll('gux-tab-advanced');
                    this.tabTriggers.forEach((tabTrigger, index) => {
                        var _a;
                        const active = tabTrigger.tabId ===
                            ((_a = this.sortTarget) === null || _a === void 0 ? void 0 : _a.getAttribute('tab-id'));
                        if (active) {
                            this.focused = index;
                        }
                    });
                    this.focusTab(this.focused);
                }
                else if (!eventIsFrom('.gux-tab-options-button', event) &&
                    !eventIsFrom('.gux-dropdown-option-container', event)) {
                    this.handleKeyboardScroll('forward');
                }
                break;
            case 'ArrowLeft':
            case 'ArrowUp':
                event.preventDefault();
                if (this.keyboardSort &&
                    !eventIsFrom('.gux-tab-options-button', event)) {
                    this.ariaLiveAlert = '';
                    const parentNode = this.root.querySelector('.gux-tablist');
                    const allNodes = parentNode.querySelectorAll('gux-tab-advanced');
                    const targetNodeIndex = Array.prototype.indexOf.call(allNodes, this.sortTarget);
                    const insertBeforeTab = allNodes[targetNodeIndex - 1] || null;
                    parentNode.insertBefore(this.sortTarget, insertBeforeTab);
                    this.tabTriggers = this.root.querySelectorAll('gux-tab-advanced');
                    this.tabTriggers.forEach((tabTrigger, index) => {
                        var _a;
                        const active = tabTrigger.tabId ===
                            ((_a = this.sortTarget) === null || _a === void 0 ? void 0 : _a.getAttribute('tab-id'));
                        if (active) {
                            this.focused = index;
                        }
                    });
                    this.focusTab(this.focused);
                }
                else if (!eventIsFrom('.gux-tab-options-button', event) &&
                    !eventIsFrom('.gux-dropdown-option-container', event)) {
                    this.handleKeyboardScroll('backward');
                }
                break;
            case 'Escape':
                event.preventDefault();
                if (this.keyboardSort && this.allowSort) {
                    this.keyboardSort = false;
                    this.ariaLiveAlert = 'sortCancelled';
                    const parentNode = this.root.querySelector('.gux-tablist');
                    const allNodes = this.tabTriggers;
                    const targetNodeIndex = this.initialSortIndex;
                    const insertBeforeTab = allNodes[targetNodeIndex] || null;
                    parentNode.insertBefore(this.sortTarget, insertBeforeTab);
                }
                this.tabTriggers = this.root.querySelectorAll('gux-tab-advanced');
                this.tabTriggers.forEach((tabTrigger, index) => {
                    var _a;
                    const active = tabTrigger.tabId ===
                        ((_a = this.sortTarget) === null || _a === void 0 ? void 0 : _a.getAttribute('tab-id'));
                    if (active) {
                        this.focused = index;
                    }
                });
                this.focusTab(this.initialSortIndex);
                afterNextRenderTimeout(() => {
                    this.focusTab(this.initialSortIndex);
                });
                break;
            case 'Enter':
                if (this.keyboardSort) {
                    event.preventDefault();
                    this.keyboardSort = false;
                    this.ariaLiveAlert = 'sortComplete';
                    this.tabTriggers = this.root.querySelectorAll('gux-tab-advanced');
                    this.tabTriggers.forEach((tabTrigger, index) => {
                        var _a;
                        const active = tabTrigger.tabId ===
                            ((_a = this.sortTarget) === null || _a === void 0 ? void 0 : _a.getAttribute('tab-id'));
                        if (active) {
                            this.focused = index;
                        }
                    });
                    this.emitSortChanged();
                }
                break;
            case 'Tab':
                if (this.keyboardSort) {
                    this.keyboardSort = false;
                    this.ariaLiveAlert = 'sortCancelled';
                }
                break;
            case 'Home':
                event.preventDefault();
                this.focusTab(0);
                break;
            case 'End':
                event.preventDefault();
                this.focusTab(this.tabTriggers.length - 1);
                break;
        }
    }
    onKeyup(event) {
        switch (event.key) {
            case ' ':
                if (eventIsFrom('.gux-tab', event) &&
                    !eventIsFrom('.gux-tab-options-button', event) &&
                    !eventIsFrom('gux-popover-list', event) &&
                    this.allowSort) {
                    event.preventDefault();
                    if (this.keyboardSort === true) {
                        this.keyboardSort = false;
                        this.ariaLiveAlert = 'sortComplete';
                        this.tabTriggers = this.root.querySelectorAll('gux-tab-advanced');
                        this.tabTriggers.forEach((tabTrigger, index) => {
                            var _a;
                            const active = tabTrigger.tabId ===
                                ((_a = this.sortTarget) === null || _a === void 0 ? void 0 : _a.getAttribute('tab-id'));
                            if (active) {
                                this.focused = index;
                            }
                        });
                        this.focusTab(this.focused);
                        this.emitSortChanged();
                    }
                    else {
                        this.keyboardSort = true;
                        this.sortTarget = event.target.closest('gux-tab-advanced');
                        this.tabTriggers.forEach((tabTrigger, index) => {
                            var _a;
                            const active = tabTrigger.tabId ===
                                ((_a = this.sortTarget) === null || _a === void 0 ? void 0 : _a.getAttribute('tab-id'));
                            if (active) {
                                this.initialSortIndex = index;
                            }
                        });
                        this.ariaLiveAlert = 'sortModeOn';
                    }
                }
        }
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async guxSetActive(activeTab) {
        this.tabTriggers.forEach((tabTrigger, index) => {
            const active = tabTrigger.tabId === activeTab;
            void tabTrigger.guxSetActive(active);
            if (active) {
                this.focused = index;
            }
        });
    }
    focusTab(tabIndex) {
        this.focused = tabIndex;
        this.tabTriggers.forEach((tabTrigger, index) => {
            void tabTrigger.guxGetActive().then(activeElement => {
                if (this.focused !== index && !activeElement) {
                    tabTrigger
                        .querySelector('.gux-tab-button')
                        .setAttribute('tabindex', '-1');
                    if (tabTrigger.querySelector('.gux-tab-options-button')) {
                        tabTrigger
                            .querySelector('.gux-tab-options-button')
                            .setAttribute('tabindex', '-1');
                    }
                }
            });
        });
        this.tabTriggers[this.focused]
            .querySelector('button')
            .setAttribute('tabindex', '0');
        if (this.tabTriggers[this.focused].querySelector('.gux-tab-options-button')) {
            this.tabTriggers[this.focused]
                .querySelector('.gux-tab-options-button')
                .setAttribute('tabindex', '0');
        }
        void this.tabTriggers[this.focused].guxFocus();
    }
    setTabTriggers() {
        this.tabTriggers = this.root.querySelectorAll('gux-tab-advanced');
        if (this.tabTriggers) {
            this.triggerIds = Array.from(this.tabTriggers)
                .map(trigger => `gux-${trigger.getAttribute('tab-id')}-tab`)
                .join(' ');
        }
        else {
            this.triggerIds = '';
        }
    }
    createSortable() {
        this.sortableInstance = new Sortable(this.root.querySelector('.gux-tablist'), {
            animation: 250,
            draggable: 'gux-tab-advanced',
            filter: '.ignore-sort',
            onMove: (event) => {
                return !event.related.classList.contains('ignore-sort');
            },
            onUpdate: () => {
                this.emitSortChanged();
            }
        });
    }
    destroySortable() {
        if (this.sortableInstance) {
            this.sortableInstance.destroy();
            this.sortableInstance = null;
        }
    }
    emitSortChanged() {
        const tabIds = Array.from(this.root.querySelectorAll('gux-tab-advanced')).map(tabElement => tabElement.tabId);
        this.sortChanged.emit(tabIds);
    }
    checkForScrollbarHideOrShow() {
        readTask(() => {
            const el = this.root.querySelector('.gux-scrollable-section');
            const hasScrollbar = el.clientWidth < el.scrollWidth;
            if (hasScrollbar !== this.hasScrollbar) {
                this.hasScrollbar = hasScrollbar;
            }
        });
    }
    handleKeyboardScroll(direction) {
        if (direction === 'forward') {
            if (this.focused < this.tabTriggers.length - 1) {
                if (this.hasScrollbar) {
                    this.scrollRight();
                }
                this.focusTab(this.focused + 1);
            }
            else {
                if (this.hasScrollbar) {
                    this.scrollToStart();
                }
                this.focusTab(0);
            }
        }
        else if (direction === 'backward') {
            if (this.focused > 0) {
                if (this.hasScrollbar) {
                    this.scrollLeft();
                }
                this.focusTab(this.focused - 1);
            }
            else {
                if (this.hasScrollbar) {
                    this.scrollToEnd();
                }
                this.focusTab(this.tabTriggers.length - 1);
            }
        }
    }
    disconnectedCallback() {
        if (this.sortableInstance) {
            this.destroySortable();
        }
        if (this.resizeObserver) {
            this.resizeObserver.unobserve(this.root.querySelector('.gux-tab-container'));
        }
        if (this.domObserver) {
            this.domObserver.disconnect();
        }
    }
    async componentWillLoad() {
        this.setTabTriggers();
        this.i18n = await buildI18nForComponent(this.root, tabsResources, 'gux-tabs-advanced');
    }
    validateSortableInstance() {
        if (this.allowSort && !this.sortableInstance) {
            this.createSortable();
        }
    }
    componentDidLoad() {
        this.validateSortableInstance();
        if (!this.resizeObserver && window.ResizeObserver) {
            this.resizeObserver = new ResizeObserver(() => this.checkForScrollbarHideOrShow());
        }
        if (this.resizeObserver) {
            this.resizeObserver.observe(this.root.querySelector('.gux-scrollable-section'));
        }
        if (!this.domObserver && window.MutationObserver) {
            this.domObserver = new MutationObserver(() => this.checkForScrollbarHideOrShow());
        }
        if (this.domObserver) {
            this.domObserver.observe(this.root, {
                childList: true,
                attributes: false,
                subtree: true
            });
        }
        afterNextRenderTimeout(() => {
            this.checkForScrollbarHideOrShow();
        }, 500);
    }
    scrollLeft() {
        writeTask(() => {
            var _a;
            this.root
                .querySelector('.gux-scrollable-section')
                .scrollBy(-((_a = this.root.querySelector('gux-tab-advanced')) === null || _a === void 0 ? void 0 : _a.scrollWidth), 0);
        });
    }
    scrollRight() {
        writeTask(() => {
            var _a;
            this.root
                .querySelector('.gux-scrollable-section')
                .scrollBy((_a = this.root.querySelector('gux-tab-advanced')) === null || _a === void 0 ? void 0 : _a.scrollWidth, 0);
        });
    }
    scrollToStart() {
        const scrollableSection = this.root.querySelector('.gux-scrollable-section');
        writeTask(() => {
            scrollableSection === null || scrollableSection === void 0 ? void 0 : scrollableSection.scrollBy(-(scrollableSection === null || scrollableSection === void 0 ? void 0 : scrollableSection.scrollWidth), 0);
        });
    }
    scrollToEnd() {
        const scrollableSection = this.root.querySelector('.gux-scrollable-section');
        writeTask(() => {
            scrollableSection.scrollBy(scrollableSection === null || scrollableSection === void 0 ? void 0 : scrollableSection.scrollWidth, 0);
        });
    }
    componentWillRender() {
        const tabs = Array.from(this.root.querySelectorAll('gux-tab-advanced'));
        this.disableAddTabButton = tabs.length >= this.tabLimit;
    }
    render() {
        return [
            this.renderAlert(),
            h("div", { key: '75298fa80e0367aec3073190714c952b1b3184d0', class: "gux-tab-container" }, this.renderScrollButton('scrollLeft'), h("div", { key: 'd09b2a947e47a06efa6678ca02a1c611235d8cc9', class: "gux-scrollable-section" }, h("div", { key: 'd42455c169f668fae9ef93b6e7a4bb088020bedb', class: "gux-tablist", role: "tablist", "data-gux-tab-sorting": this.keyboardSort, "aria-owns": this.triggerIds }, h("slot", { key: 'd0cc964cb3532079d15fac8658c585d7fa794714' }))), this.renderScrollButton('scrollRight'), this.renderAddButton())
        ];
    }
    renderAlert() {
        return (h("div", { class: "gux-sr-only gux-aria-live-region", "aria-live": "polite" }, this.ariaLiveAlert ? this.i18n(this.ariaLiveAlert) : ''));
    }
    renderAddButton() {
        return (h("div", null, this.showNewTabButton ? (h("gux-button-slot", { accent: "ghost" }, h("button", { onClick: () => this.newTab.emit(), disabled: this.disableAddTabButton }, h("slot", { name: "add-tab" }, h("gux-icon", { size: "small", "icon-name": "fa/plus-regular", decorative: true }), h("gux-screen-reader-beta", null, this.disableAddTabButton
            ? this.i18n('disableNewTab')
            : this.root.querySelector('[slot="add-tab"]')
                ? this.root
                    .querySelector('[slot="add-tab"]')
                    .textContent.trim()
                : this.i18n('createNewTab')))))) : null));
    }
    renderScrollButton(direction) {
        return (h("div", null, this.hasScrollbar ? (h("gux-button-slot", { class: "gux-scroll-button", accent: "ghost", "icon-only": true }, h("button", { tabindex: "-1", onDragOver: () => this.getScrollDirection(direction), onClick: () => this.getScrollDirection(direction) }, h("gux-icon", { size: "small", "icon-name": this.getChevronIconName(direction), decorative: true }), h("gux-screen-reader-beta", null, this.i18n(direction))))) : null));
    }
    getScrollDirection(direction) {
        switch (direction) {
            case 'scrollLeft':
                this.scrollLeft();
                break;
            case 'scrollRight':
                this.scrollRight();
                break;
        }
    }
    getChevronIconName(direction) {
        switch (direction) {
            case 'scrollLeft':
                return 'fa/chevron-left-regular';
            case 'scrollRight':
                return 'fa/chevron-right-regular';
        }
    }
    static get is() { return "gux-tab-advanced-list"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-tab-advanced-list.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-tab-advanced-list.css"]
        };
    }
    static get properties() {
        return {
            "showNewTabButton": {
                "type": "boolean",
                "attribute": "show-new-tab-button",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Enable new tab button"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            },
            "tabLimit": {
                "type": "number",
                "attribute": "tab-limit",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Maximum nuber of tabs created"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "Infinity"
            },
            "allowSort": {
                "type": "boolean",
                "attribute": "allow-sort",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Enable tab sorting by drag/drop"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            }
        };
    }
    static get states() {
        return {
            "focused": {},
            "disableAddTabButton": {},
            "tabTriggers": {},
            "hasScrollbar": {},
            "keyboardSort": {},
            "initialSortIndex": {},
            "sortTarget": {},
            "ariaLiveAlert": {}
        };
    }
    static get events() {
        return [{
                "method": "newTab",
                "name": "newTab",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Triggers when the new tab button is selected."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "sortChanged",
                "name": "sortChanged",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Triggers when the sorting of the tabs is changed."
                },
                "complexType": {
                    "original": "string[]",
                    "resolved": "string[]",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "guxSetActive": {
                "complexType": {
                    "signature": "(activeTab: string) => Promise<void>",
                    "parameters": [{
                            "name": "activeTab",
                            "type": "string",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "root"; }
    static get watchers() {
        return [{
                "propName": "allowSort",
                "methodName": "watchAllowSort"
            }];
    }
    static get listeners() {
        return [{
                "name": "focusin",
                "method": "onFocusin",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "focusout",
                "method": "onFocusout",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "keydown",
                "method": "onKeydown",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "keyup",
                "method": "onKeyup",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
__decorate([
    OnMutation({ childList: true, subtree: true })
], GuxTabAdvancedList.prototype, "onMutation", null);
