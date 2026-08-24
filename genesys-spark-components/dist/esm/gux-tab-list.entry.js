import { r as registerInstance, d as readTask, w as writeTask, h, a as getElement } from './index-xFL2agjT.js';
import { a as afterNextRenderTimeout } from './after-next-render-Bg4q97BS.js';
import { b as buildI18nForComponent } from './index-Dac2qHbK.js';
import { O as OnMutation } from './on-mutation-CQXoeN9i.js';
import './get-closest-element-Cd4R0amv.js';

const scrollLeft = "Scroll Left";
const scrollRight = "Scroll Right";
const scrollUp = "Scroll Up";
const scrollDown = "Scroll Down";
var tabsResources = {
	scrollLeft: scrollLeft,
	scrollRight: scrollRight,
	scrollUp: scrollUp,
	scrollDown: scrollDown
};

const guxTabListCss = "gux-tabs[orientation=vertical]{block-size:100%}gux-tabs[orientation=vertical]>gux-tab-list .gux-tab-container{display:flex;flex-direction:column;inline-size:var(--gse-ui-tabs-set-vertical-width);block-size:100%;margin-inline-end:var(--gse-ui-tabs-set-vertical-marginRight);border-inline-end:var(--gse-ui-tabs-item-divider-horizontal-height) solid var(--gse-ui-tabs-item-divider-dividerColor)}gux-tabs[orientation=vertical]>gux-tab-list .gux-tab-container .gux-scroll-button-container{inline-size:100%}gux-tabs[orientation=vertical]>gux-tab-list .gux-tab-container .gux-scroll-button-container button{inline-size:100%}gux-tabs[orientation=vertical]>gux-tab-list .gux-tab-container .gux-scrollable-section{flex-direction:column;block-size:100%;overflow-y:auto;scrollbar-width:none;-ms-overflow-style:none;scroll-behavior:smooth}gux-tabs[orientation=vertical]>gux-tab-list .gux-tab-container .gux-scrollable-section::-webkit-scrollbar{inline-size:0;block-size:0}gux-tabs:not([orientation=vertical])>gux-tab-list .gux-tab-container{block-size:var(--gse-ui-tabs-set-horizontal-height);margin-block-end:var(--gse-ui-tabs-set-horizontal-marginBottom);border-block-end:var(--gse-ui-tabs-item-divider-horizontal-height) solid var(--gse-ui-tabs-item-divider-dividerColor)}gux-tabs:not([orientation=vertical])>gux-tab-list .gux-scrollable-section{overflow-x:auto}gux-tabs .gux-tab-container{box-sizing:content-box;display:flex;inline-size:100%;overflow:hidden;background-color:transparent}gux-tabs .gux-scrollable-section{display:flex;flex:1 1 auto;scroll-behavior:smooth;scrollbar-width:none}gux-tabs .gux-scrollable-section::-webkit-scrollbar{block-size:0}gux-tabs .gux-scroll-button-container{display:flex;align-items:center;justify-content:center;background-color:var(--gse-ui-advancedTabs-set-backgroundColor);border-radius:var(--gse-ui-button-borderRadius)}gux-tabs .gux-scroll-button-container gux-button-slot{inline-size:100%;block-size:100%}gux-tabs .gux-scroll-button-container button{display:flex;align-items:center;justify-content:center;block-size:100%}";

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const GuxTabList = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.currentScrollIndex = 0;
        this.focused = 0;
        this.hasHorizontalScrollbar = false;
        this.hasVerticalScrollbar = false;
        this.isScrolledToBeginning = false;
        this.isScrolledToEnd = false;
    }
    onFocusout(event) {
        if (!this.root.contains(event.relatedTarget)) {
            this.tabTriggers.forEach((tabTrigger, index) => {
                void tabTrigger.guxGetActive().then(activeElement => {
                    if (activeElement) {
                        this.focused = index;
                    }
                    else {
                        tabTrigger.querySelector('button').setAttribute('tabindex', '-1');
                    }
                });
            });
        }
    }
    onHasVerticalScrollBar() {
        this.checkDisabledScrollButtons();
    }
    onScroll() {
        this.checkDisabledScrollButtons();
    }
    onKeydown(event) {
        switch (event.key) {
            case 'ArrowRight':
            case 'ArrowDown':
                event.preventDefault();
                this.handleKeyboardScroll('forward');
                break;
            case 'ArrowLeft':
            case 'ArrowUp':
                event.preventDefault();
                this.handleKeyboardScroll('backward');
                break;
            case 'Escape':
                event.preventDefault();
                this.focusTab(this.focused);
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
    onMutation() {
        this.setTabTriggers();
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    async guxSetActive(activeTab) {
        const allTabs = this.root.querySelectorAll('gux-tab');
        allTabs.forEach(tab => {
            void tab.guxSetActive(false);
        });
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
                    tabTrigger.querySelector('button').setAttribute('tabindex', '-1');
                }
            });
        });
        this.tabTriggers[this.focused]
            .querySelector('button')
            .setAttribute('tabindex', '0');
        void this.tabTriggers[this.focused].guxFocus();
    }
    setTabTriggers() {
        this.tabTriggers = this.root.querySelectorAll('gux-tab:not([gux-disabled]), gux-tab[gux-disabled="false"]');
        if (this.tabTriggers) {
            this.triggerIds = Array.from(this.tabTriggers)
                .map(trigger => `gux-${trigger.getAttribute('tab-id')}-tab`)
                .join(' ');
        }
        else {
            this.triggerIds = '';
        }
    }
    checkForScrollbarHideOrShow() {
        readTask(() => {
            const el = this.root.querySelector('.gux-scrollable-section');
            const hasHorizontalScrollbar = el.clientWidth < el.scrollWidth;
            const hasVerticalScrollbar = el.clientHeight < el.scrollHeight;
            if (hasHorizontalScrollbar !== this.hasHorizontalScrollbar) {
                this.hasHorizontalScrollbar = hasHorizontalScrollbar;
            }
            if (hasVerticalScrollbar !== this.hasVerticalScrollbar) {
                this.hasVerticalScrollbar = hasVerticalScrollbar;
            }
            this.checkDisabledScrollButtons();
        });
    }
    handleKeyboardScroll(direction) {
        const scrollableSection = this.root.querySelector('.gux-scrollable-section');
        if (direction === 'forward') {
            if (this.focused < this.tabTriggers.length - 1) {
                writeTask(() => {
                    if (this.hasHorizontalScrollbar) {
                        this.scrollRight();
                    }
                    else {
                        this.scrollDown();
                    }
                });
                this.focusTab(this.focused + 1);
            }
            else {
                writeTask(() => {
                    if (this.hasHorizontalScrollbar) {
                        scrollableSection.scrollBy(-scrollableSection.scrollWidth, 0);
                    }
                    else {
                        scrollableSection.scrollBy(0, -scrollableSection.scrollHeight);
                    }
                });
                this.focusTab(0);
            }
        }
        else if (direction === 'backward') {
            if (this.focused > 0) {
                writeTask(() => {
                    if (this.hasHorizontalScrollbar) {
                        this.scrollLeft();
                    }
                    else {
                        this.scrollUp();
                    }
                });
                this.focusTab(this.focused - 1);
            }
            else {
                writeTask(() => {
                    if (this.hasHorizontalScrollbar) {
                        scrollableSection.scrollBy(scrollableSection.scrollWidth, 0);
                    }
                    else {
                        scrollableSection.scrollBy(0, scrollableSection.scrollHeight);
                    }
                });
                this.focusTab(this.tabTriggers.length - 1);
            }
        }
    }
    disconnectedCallback() {
        if (this.resizeObserver) {
            this.resizeObserver.unobserve(this.root.querySelector('.gux-tab-container'));
        }
        if (this.domObserver) {
            this.domObserver.disconnect();
        }
    }
    async componentWillLoad() {
        this.setTabTriggers();
        this.i18n = await buildI18nForComponent(this.root, tabsResources, 'gux-tabs');
    }
    componentDidLoad() {
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
    checkDisabledScrollButtons() {
        const scrollContainer = this.root.querySelector('.gux-scrollable-section');
        if (this.hasHorizontalScrollbar) {
            const scrollLeft = scrollContainer.scrollLeft;
            const scrollLeftMax = scrollContainer.scrollWidth - scrollContainer.clientWidth;
            this.isScrolledToBeginning = scrollLeft === 0;
            this.isScrolledToEnd = scrollLeftMax - scrollLeft === 0;
        }
        else {
            const scrollTop = scrollContainer.scrollTop;
            const scrollTopMax = scrollContainer.scrollHeight - scrollContainer.clientHeight;
            this.isScrolledToBeginning = scrollTop === 0;
            this.isScrolledToEnd = scrollTopMax - scrollTop === 0;
        }
    }
    getTabLength() {
        var _a;
        return (_a = this.tabTriggers[this.currentScrollIndex]) === null || _a === void 0 ? void 0 : _a.scrollWidth;
    }
    scrollLeft() {
        writeTask(() => {
            if (this.isScrolledToEnd) {
                this.currentScrollIndex = this.tabTriggers.length - 1;
            }
            else {
                this.currentScrollIndex = this.currentScrollIndex - 1;
            }
            this.root
                .querySelector('.gux-scrollable-section')
                .scrollBy(-this.getTabLength(), 0);
        });
    }
    scrollRight() {
        writeTask(() => {
            if (this.isScrolledToBeginning) {
                this.currentScrollIndex = 0;
            }
            this.root
                .querySelector('.gux-scrollable-section')
                .scrollBy(this.getTabLength(), 0);
            this.currentScrollIndex = this.currentScrollIndex + 1;
        });
    }
    scrollUp() {
        writeTask(() => {
            this.root
                .querySelector('.gux-scrollable-section')
                .scrollBy(0, -this.tabTriggers[this.focused].clientHeight);
        });
    }
    scrollDown() {
        writeTask(() => {
            this.root
                .querySelector('.gux-scrollable-section')
                .scrollBy(0, this.tabTriggers[this.focused].clientHeight);
        });
    }
    render() {
        return (h("div", { key: 'c5845287442a47d392b395a81d621eb676afa5f1', class: "gux-tab-container" }, this.hasHorizontalScrollbar
            ? this.renderScrollButton('scrollLeft')
            : this.renderScrollButton('scrollUp'), h("div", { key: '7fea2d8285bba7ec3b226d927d12ad9ee9358a9e', role: "tablist", class: "gux-scrollable-section", "aria-owns": this.triggerIds }, h("slot", { key: 'aaeaef7ff1162c7d285cd19e0729743c11bd4c9e' })), this.hasHorizontalScrollbar
            ? this.renderScrollButton('scrollRight')
            : this.renderScrollButton('scrollDown')));
    }
    renderScrollButton(direction) {
        return (h("div", { class: "gux-scroll-button-container" }, this.hasHorizontalScrollbar || this.hasVerticalScrollbar ? (h("gux-button-slot", { accent: "ghost", "icon-only": true }, h("button", { class: "gux-scroll-button", disabled: this.getButtonDisabled(direction), tabindex: "-1", title: this.i18n(direction), "aria-label": this.i18n(direction), onClick: () => this.getScrollDirection(direction) }, h("gux-icon", { "icon-name": this.getChevronIconName(direction), decorative: true, size: "small" })))) : null));
    }
    getButtonDisabled(direction) {
        switch (direction) {
            case 'scrollLeft':
            case 'scrollUp':
                return this.isScrolledToBeginning;
            case 'scrollRight':
            case 'scrollDown':
                return this.isScrolledToEnd;
        }
    }
    getScrollDirection(direction) {
        switch (direction) {
            case 'scrollLeft':
                this.scrollLeft();
                break;
            case 'scrollRight':
                this.scrollRight();
                break;
            case 'scrollUp':
                this.scrollUp();
                break;
            case 'scrollDown':
                this.scrollDown();
        }
    }
    getChevronIconName(direction) {
        switch (direction) {
            case 'scrollLeft':
                return 'custom/chevron-left-small-regular';
            case 'scrollRight':
                return 'custom/chevron-right-small-regular';
            case 'scrollUp':
                return 'custom/chevron-up-small-regular';
            case 'scrollDown':
                return 'custom/chevron-down-small-regular';
        }
    }
    get root() { return getElement(this); }
};
__decorate([
    OnMutation({ childList: true, subtree: true, attributes: true })
], GuxTabList.prototype, "onMutation", null);
GuxTabList.style = guxTabListCss;

export { GuxTabList as gux_tab_list };
