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
import { h, Host, readTask, forceUpdate } from "@stencil/core";
import { OnResize } from "../../../utils/decorator/on-resize";
import { OnMutation } from "../../../utils/decorator/on-mutation";
import { trackComponent } from "../../../utils/tracking/usage";
import { setAccent, setActionsIconOnlyProp } from "./gux-table-toolbar.service";
import { getSlot } from "../../../utils/dom/get-slot";
import { afterNextRenderTimeout } from "../../../utils/dom/after-next-render";
import { logWarn } from "../../../utils/error/log-error";
/**
 * @slot search-and-filter - Slot for search and filter.
 * @slot contextual-actions - Slot for contextual actions.
 * @slot permanent-actions - Slot for permanent actions.
 * @slot menu-actions - Slot for menu actions.
 * @slot primary-action - Slot for a primary action.
 */
export class GuxTableToolbar {
    constructor() {
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
        forceUpdate(this.root);
    }
    /**
     * Record the minimum size for the current layout.
     */
    recordLayoutMinSize() {
        readTask(() => {
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
        return getSlot(this.root, 'search-and-filter');
    }
    get menuActionSlot() {
        return getSlot(this.root, 'menu-actions');
    }
    get permanentSlot() {
        // If permanent actions are not located at the root, then they are assumed to be located within the menu actions.
        // Permanent actions will be located in the menu actions if the previous display layout was condensed.
        return (getSlot(this.root, 'permanent-actions') ||
            (this.menuActionSlot &&
                getSlot(this.menuActionSlot, 'permanent-actions')));
    }
    get contextualSlot() {
        return getSlot(this.root, 'contextual-actions');
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
            logWarn(this.root, `gux-table-toolbar requires a ${slotName} slot`);
        }
    }
    componentWillRender() {
        trackComponent(this.root);
        this.hasContextDivider = this.needsContextDivider();
    }
    componentWillLoad() {
        this.validateSlot('menu-actions');
    }
    componentDidLoad() {
        // This timeout is required to calculate the correct size of the containers when the component loads. By including a timeout of 1 second the containers calculate correctly.
        afterNextRenderTimeout(() => {
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
        readTask(() => {
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
        return (h(Host, { key: '4ed2037a624e8d5d56a399e5caad63315c4d429a', role: "toolbar", "aria-orientation": "horizontal", "gs-layout": this.displayedLayout }, h("div", { key: 'c9dcd06c9e1a78b5c2d9649ca6bde777f344bff2', class: "search-filter-container" }, h("slot", { key: '458fd3c17caabc1c6c8d6cf315b5da470a22d771', name: "search-and-filter" })), h("div", { key: 'e9e6277c71164fe0df01f01662b5d11385de3544', class: "section-spacing" }), h("div", { key: 'e4d49247c8f0c3d8c2066351fbe4a37163b438eb', class: "gux-contextual-permanent-primary" }, h("div", { key: 'fc79d838983e1df921d6cdf6887a5f07709dada8', class: {
                'gux-contextual-wrapper': this.hasContextDivider
            } }, h("slot", { key: 'd8d2adf470663eb92068f082e19016ff3cde75ee', name: "contextual-actions" })), h("div", { key: '9cadc86d7ac5ea7ce117866d118329f83c387fe8', class: "gux-permanent-menu-primary-wrapper" }, h("slot", { key: '1ed399ff7f44199f8476cd6468974b687621cc34', name: "permanent-actions" }), h("gux-table-toolbar-menu-button", { key: '53000637631548cfa376472fd7d278fe2c7550f1', "show-menu": this.renderMenu() }, h("slot", { key: '1a86b75ddbb2d5ba7ccb51322481d81ca4014817', name: "menu-actions" })), h("slot", { key: '97c618b50caf926421f12ac98d4defbe78205603', name: "primary-action" })))));
    }
    static get is() { return "gux-table-toolbar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-table-toolbar.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-table-toolbar.css"]
        };
    }
    static get states() {
        return {
            "displayedLayout": {},
            "hasContextDivider": {}
        };
    }
    static get elementRef() { return "root"; }
}
__decorate([
    OnMutation({ childList: true, subtree: true })
], GuxTableToolbar.prototype, "onMutation", null);
__decorate([
    OnResize()
], GuxTableToolbar.prototype, "checkResponsiveLayout", null);
