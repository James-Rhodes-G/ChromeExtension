'use strict';

var index = require('./index-BLhHoh_r.js');
var onResize = require('./on-resize-CtGi-x07.js');
var onMutation = require('./on-mutation-BoagtLIt.js');
var usage = require('./usage-v50bi18B.js');
var getSlot = require('./get-slot-EZYuUuno.js');
var afterNextRender = require('./after-next-render-CeY_1Kbz.js');
var logError = require('./log-error-nWO_o1C3.js');

function setAccent(actions, accent) {
    [].concat(actions).forEach(action => {
        if (action != null) {
            action.accent = accent;
        }
    });
}
function setActionsIconOnlyProp(iconOnly, ...actionSets) {
    actionSets
        .flat()
        .filter(action => action !== null &&
        action !== undefined &&
        !(action === null || action === void 0 ? void 0 : action.hasAttribute('icon-only')))
        .forEach(action => (action.iconOnly = iconOnly));
}

const guxTableToolbarCss = ":host{display:flex;flex-direction:row;align-items:center;justify-content:space-between;inline-size:100%;max-block-size:var(--gse-ui-dataTableItems-tableToolbar-height);visibility:hidden;transition:visibility 0s 0.5s;}@keyframes show-toolbar{to{visibility:visible}}:host .search-filter-container{min-inline-size:260px;padding-inline-end:var(--gse-ui-dataTableItems-tableToolbar-gap)}:host slot[name=search-and-filter]::slotted(*){display:flex;flex-direction:row;gap:var(--gse-ui-dataTableItems-tableToolbar-tableToolbarGroup-gap);align-content:flex-start;align-items:center}:host .section-spacing{display:flex;flex-direction:row;min-inline-size:72px}:host .gux-contextual-permanent-primary{display:flex;flex-direction:row;justify-content:space-between;padding-inline-start:var(--gse-ui-dataTableItems-tableToolbar-gap)}:host .gux-contextual-permanent-primary slot[name=permanent-actions]::slotted(*),:host .gux-contextual-permanent-primary slot[name=contextual-actions]::slotted(*){display:flex;flex-direction:row;flex-wrap:nowrap;gap:var(--gse-ui-dataTableItems-tableToolbar-tableToolbarGroup-gap);align-content:flex-end;align-items:center}:host .gux-contextual-permanent-primary .gux-contextual-wrapper{padding-inline-end:var(--gse-ui-dataTableItems-tableToolbar-gap);border-inline-end:var(--gse-ui-dataTableItems-tableToolbar-divider-width) solid var(--gse-ui-dataTableItems-tableToolbar-dividerColor)}:host .gux-contextual-permanent-primary .gux-permanent-menu-primary-wrapper{display:flex;flex-direction:row;flex-wrap:nowrap;gap:var(--gse-ui-dataTableItems-tableToolbar-tableToolbarGroup-gap);margin-inline-start:var(--gse-ui-dataTableItems-tableToolbar-gap)}";

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
const GuxTableToolbar = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.displayedLayout = 'full';
        this.hasContextDivider = false;
        this.minimumSizes = {
            full: 0,
            iconOnly: 0,
            condensed: 0
        };
    }
    onMutation() {
        this.hasContextDivider = this.needsContextDivider();
        index.forceUpdate(this.root);
    }
    /**
     * Record the minimum size for the current layout.
     */
    recordLayoutMinSize() {
        index.readTask(() => {
            var _a, _b, _c;
            const filterWidth = ((_a = this.searchAndFilterContainer) === null || _a === void 0 ? void 0 : _a.clientWidth) | 0;
            const controlWidth = ((_b = this.actionsContainer) === null || _b === void 0 ? void 0 : _b.clientWidth) | 0;
            const minControlSize = ((_c = this.minControlSize) === null || _c === void 0 ? void 0 : _c.clientWidth) | 0;
            const minSize = filterWidth + controlWidth + minControlSize;
            this.minimumSizes[this.displayedLayout] = minSize;
        });
    }
    get minControlSize() {
        return this.root.shadowRoot.querySelector('.section-spacing');
    }
    get actionsContainer() {
        return this.root.shadowRoot.querySelector('.gux-contextual-permanent-primary');
    }
    get searchAndFilterContainer() {
        return this.root.shadowRoot.querySelector('.search-filter-container');
    }
    get filterSlot() {
        return getSlot.getSlot(this.root, 'search-and-filter');
    }
    get menuActionSlot() {
        return getSlot.getSlot(this.root, 'menu-actions');
    }
    get permanentSlot() {
        // If permanent actions are not located at the root, then they are assumed to be located within the menu actions.
        // Permanent actions will be located in the menu actions if the previous display layout was condensed.
        return (getSlot.getSlot(this.root, 'permanent-actions') ||
            (this.menuActionSlot &&
                getSlot.getSlot(this.menuActionSlot, 'permanent-actions')));
    }
    get contextualSlot() {
        return getSlot.getSlot(this.root, 'contextual-actions');
    }
    get primaryAction() {
        var _a;
        return (_a = this.root) === null || _a === void 0 ? void 0 : _a.querySelector('gux-table-toolbar-custom-action[slot]');
    }
    get permanentActions() {
        var _a, _b;
        if ((_a = this.permanentSlot) === null || _a === void 0 ? void 0 : _a.hasChildNodes) {
            return Array.from((_b = this.permanentSlot) === null || _b === void 0 ? void 0 : _b.querySelectorAll('gux-table-toolbar-action, gux-table-toolbar-custom-action'));
        }
        return [];
    }
    get menuActionsItems() {
        var _a, _b;
        if ((_a = this.menuActionSlot) === null || _a === void 0 ? void 0 : _a.hasChildNodes) {
            return Array.from((_b = this.menuActionSlot) === null || _b === void 0 ? void 0 : _b.querySelectorAll('gux-table-toolbar-action, gux-table-toolbar-custom-action'));
        }
    }
    get contextualActions() {
        var _a, _b;
        if ((_a = this.contextualSlot) === null || _a === void 0 ? void 0 : _a.hasChildNodes) {
            return Array.from((_b = this.contextualSlot) === null || _b === void 0 ? void 0 : _b.querySelectorAll('gux-table-toolbar-action, gux-table-toolbar-custom-action'));
        }
        return [];
    }
    get filterActions() {
        var _a, _b;
        if ((_a = this.filterSlot) === null || _a === void 0 ? void 0 : _a.hasChildNodes) {
            return Array.from((_b = this.filterSlot) === null || _b === void 0 ? void 0 : _b.querySelectorAll('gux-table-toolbar-action, gux-table-toolbar-custom-action'));
        }
        return [];
    }
    get allFilterContextual() {
        var _a;
        return (_a = this.filterActions) === null || _a === void 0 ? void 0 : _a.concat(this.contextualActions);
    }
    needsContextDivider() {
        var _a;
        return (((_a = this.contextualActions) === null || _a === void 0 ? void 0 : _a.length) &&
            this.contextualSlot !== this.root.lastElementChild);
    }
    renderMenu() {
        var _a;
        return Boolean(((_a = this.menuActionsItems) === null || _a === void 0 ? void 0 : _a.length) || this.displayedLayout == 'condensed');
    }
    renderFullLayout() {
        this.displayedLayout = 'full';
        setActionsIconOnlyProp(false, this.primaryAction, ...this.allFilterContextual, ...this.permanentActions);
    }
    renderIconOnlyLayoutScaleDown() {
        this.displayedLayout = 'iconOnly';
        setActionsIconOnlyProp(true, this.primaryAction, ...this.allFilterContextual, ...this.permanentActions);
    }
    renderIconOnlyLayoutScaleUp() {
        var _a, _b;
        this.displayedLayout = 'iconOnly';
        setAccent(this.permanentActions, 'secondary');
        setAccent(this.primaryAction, 'primary');
        setActionsIconOnlyProp(true, this.primaryAction, ...this.allFilterContextual, ...this.permanentActions);
        if (this.permanentActions) {
            (_a = this.root) === null || _a === void 0 ? void 0 : _a.appendChild(this.permanentSlot);
        }
        if (this.primaryAction) {
            (_b = this.root) === null || _b === void 0 ? void 0 : _b.appendChild(this.primaryAction);
        }
    }
    renderCondensedLayout() {
        var _a, _b;
        this.displayedLayout = 'condensed';
        if (this.permanentActions) {
            (_a = this.menuActionSlot) === null || _a === void 0 ? void 0 : _a.appendChild(this.permanentSlot);
        }
        if (this.primaryAction) {
            (_b = this.menuActionSlot) === null || _b === void 0 ? void 0 : _b.appendChild(this.primaryAction);
        }
        setActionsIconOnlyProp(true, ...this.allFilterContextual);
        setActionsIconOnlyProp(false, ...this.permanentActions);
        setActionsIconOnlyProp(false, this.primaryAction);
        setAccent(this.menuActionsItems, 'ghost');
    }
    validateSlot(slotName) {
        const slottedElement = this.root.querySelector(`[slot=${slotName}]`);
        if (!slottedElement) {
            logError.logWarn(this.root, `gux-table-toolbar requires a ${slotName} slot`);
        }
    }
    componentWillRender() {
        usage.trackComponent(this.root);
        this.hasContextDivider = this.needsContextDivider();
    }
    componentWillLoad() {
        this.validateSlot('menu-actions');
    }
    componentDidLoad() {
        // This timeout is required to calculate the correct size of the containers when the component loads. By including a timeout of 1 second the containers calculate correctly.
        afterNextRender.afterNextRenderTimeout(() => {
            this.recordLayoutMinSize();
            this.checkResponsiveLayout();
        });
        setAccent(this.menuActionsItems, 'ghost');
    }
    /**
     * When the layout changes, also check one more time to see if further layout
     * changes are needed. This is mostly important at component start when we
     * may need to step down twice, full -> icon and icon -> condensed
     */
    componentDidUpdate() {
        this.recordLayoutMinSize();
        this.checkResponsiveLayout();
    }
    checkResponsiveLayout() {
        index.readTask(() => {
            const toolbarWidth = this.root.clientWidth;
            if (toolbarWidth <= this.minimumSizes.iconOnly) {
                if (this.displayedLayout == 'iconOnly') {
                    this.renderCondensedLayout();
                }
            }
            else if (toolbarWidth <= this.minimumSizes.full) {
                if (this.displayedLayout == 'full') {
                    this.renderIconOnlyLayoutScaleDown();
                }
                else if (this.displayedLayout == 'condensed') {
                    this.renderIconOnlyLayoutScaleUp();
                }
            }
            else if (this.minimumSizes.iconOnly > this.minimumSizes.full) {
                this.renderIconOnlyLayoutScaleUp();
            }
            else {
                this.renderFullLayout();
            }
        });
    }
    render() {
        return (index.h(index.Host, { key: '4ed2037a624e8d5d56a399e5caad63315c4d429a', role: "toolbar", "aria-orientation": "horizontal", "gs-layout": this.displayedLayout }, index.h("div", { key: 'c9dcd06c9e1a78b5c2d9649ca6bde777f344bff2', class: "search-filter-container" }, index.h("slot", { key: '458fd3c17caabc1c6c8d6cf315b5da470a22d771', name: "search-and-filter" })), index.h("div", { key: 'e9e6277c71164fe0df01f01662b5d11385de3544', class: "section-spacing" }), index.h("div", { key: 'e4d49247c8f0c3d8c2066351fbe4a37163b438eb', class: "gux-contextual-permanent-primary" }, index.h("div", { key: 'fc79d838983e1df921d6cdf6887a5f07709dada8', class: {
                'gux-contextual-wrapper': this.hasContextDivider
            } }, index.h("slot", { key: 'd8d2adf470663eb92068f082e19016ff3cde75ee', name: "contextual-actions" })), index.h("div", { key: '9cadc86d7ac5ea7ce117866d118329f83c387fe8', class: "gux-permanent-menu-primary-wrapper" }, index.h("slot", { key: '1ed399ff7f44199f8476cd6468974b687621cc34', name: "permanent-actions" }), index.h("gux-table-toolbar-menu-button", { key: '53000637631548cfa376472fd7d278fe2c7550f1', "show-menu": this.renderMenu() }, index.h("slot", { key: '1a86b75ddbb2d5ba7ccb51322481d81ca4014817', name: "menu-actions" })), index.h("slot", { key: '97c618b50caf926421f12ac98d4defbe78205603', name: "primary-action" })))));
    }
    get root() { return index.getElement(this); }
};
__decorate([
    onMutation.OnMutation({ childList: true, subtree: true })
], GuxTableToolbar.prototype, "onMutation", null);
__decorate([
    onResize.OnResize()
], GuxTableToolbar.prototype, "checkResponsiveLayout", null);
GuxTableToolbar.style = guxTableToolbarCss;

exports.gux_table_toolbar = GuxTableToolbar;
