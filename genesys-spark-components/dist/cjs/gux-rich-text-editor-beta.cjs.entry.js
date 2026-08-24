'use strict';

var index = require('./index-BLhHoh_r.js');
var onResize = require('./on-resize-CtGi-x07.js');
var hasSlot = require('./has-slot-BFTyqu_U.js');
var usage = require('./usage-v50bi18B.js');
var guxRichTextEditor_service = require('./gux-rich-text-editor.service-DvQrMYXi.js');
var index$1 = require('./index-QInGO-Pu.js');
var en = require('./en-ChMBIoFc.js');
var afterNextRender = require('./after-next-render-CeY_1Kbz.js');
var onMutation = require('./on-mutation-BoagtLIt.js');
require('./get-closest-element-CIMI0Cx4.js');
require('./get-closest-element-CfyZl7i7.js');

const guxRichTextEditorCss = ":host{display:block}:host([style*=resize]){overflow:auto;resize:inherit}.gux-rich-text-editor-container{box-sizing:border-box;display:flex;flex-direction:column;gap:var(--gse-ui-rte-innerContainer-gap);inline-size:100%;max-inline-size:100%;block-size:100%;max-block-size:100%;padding:var(--gse-ui-rte-padding);overflow:hidden scroll;background-color:var(--gse-ui-formControl-input-backgroundColor);border:var(--gse-ui-rte-mainContainer-default-border-width) var(--gse-ui-rte-mainContainer-default-border-color) var(--gse-ui-rte-mainContainer-default-border-style);border-radius:var(--gse-ui-rte-container-borderRadius)}.gux-rich-text-editor-container.gux-toolbar-hidden{gap:0}.gux-rich-text-editor-container .gux-rich-text-editor-toolbar-container{display:flex;flex-direction:row;justify-content:flex-start}.gux-rich-text-editor-container .gux-rich-text-editor-toolbar-container .gux-global-action-container{margin-inline-start:auto}.gux-rich-text-editor-container.gux-disabled{pointer-events:none;cursor:default;user-select:none;border:var(--gse-ui-rte-mainContainer-disabled-border-width) var(--gse-ui-rte-mainContainer-disabled-border-color) var(--gse-ui-rte-mainContainer-disabled-border-style);opacity:0.5}.gux-rich-text-editor-container:active:enabled{border:var(--gse-ui-rte-mainContainer-active-border-width) var(--gse-ui-rte-mainContainer-active-border-color) var(--gse-ui-rte-mainContainer-active-border-style)}.gux-rich-text-editor-container:focus-within:not(.gux-disabled),.gux-rich-text-editor-container:hover:not(.gux-disabled){border:var(--gse-ui-rte-mainContainer-hover-border-width) var(--gse-ui-rte-mainContainer-hover-border-color) var(--gse-ui-rte-mainContainer-hover-border-style)}.gux-rich-text-editor-container:focus-within:not(.gux-disabled){outline:var(--gse-ui-rte-mainContainer-focus-border-width) var(--gse-ui-rte-mainContainer-focus-border-color) var(--gse-ui-rte-mainContainer-focus-border-style)}";

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
const GuxRichTextEditor = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.guxToggleAction = index.createEvent(this, "guxToggleAction", 7);
        this.disabled = false;
        this.typographicalEmphasisActions = [];
        this.textStylingActions = [];
        this.listsAndIndentationActions = [];
        this.insertingActions = [];
        this.hasToolbar = false;
    }
    checkResponsiveLayout() {
        index.readTask(() => {
            this.handleOverflow();
            this.getHiddenActions();
        });
    }
    onMutation() {
        this.hasToolbar = this.hasToolbarChildren();
    }
    async componentWillLoad() {
        usage.trackComponent(this.root);
        this.i18n = await index$1.buildI18nForComponent(this.root, en.translationResources);
        this.hasToolbar = this.hasToolbarChildren();
    }
    componentDidLoad() {
        // This timeout is required to calculate the correct size of the containers when the component loads. By including a timeout of 1 second the containers calculate correctly.
        afterNextRender.afterNextRenderTimeout(() => {
            this.checkResponsiveLayout();
        });
    }
    componentDidUpdate() {
        this.handleOverflow();
    }
    isOverFlowing() {
        var _a;
        const container = (_a = this.root) === null || _a === void 0 ? void 0 : _a.shadowRoot.querySelector('.gux-rich-text-editor-toolbar-container');
        // A group of gux-rich-text-editor-action-group.
        const children = Array.from(container.children);
        // Calculate the total width of all children excluding hidden (gux-rich-text-editor-action-groups).
        const totalWidth = children
            .filter(child => !child.classList.contains('gux-hidden'))
            .reduce((sum, child) => sum + child.clientWidth, 0);
        return totalWidth > container.clientWidth;
    }
    handleOverflow() {
        const actionGroups = Array.from(this.root.querySelectorAll('gux-rich-text-editor-action-group'));
        // Hide last visible action group until there's no overflow.
        while (this.isOverFlowing()) {
            let hidden = false;
            for (let i = actionGroups.length - 1; i >= 0; i--) {
                if (!actionGroups[i].classList.contains('gux-hidden')) {
                    actionGroups[i].classList.add('gux-hidden');
                    hidden = true;
                    break;
                }
            }
            // If no more action groups to hide, exit loop
            if (!hidden) {
                break;
            }
        }
        // Show previously hidden groups if space is available
        for (const group of actionGroups) {
            if (group.classList.contains('gux-hidden')) {
                group.classList.remove('gux-hidden');
                // If it causes overflow again, re-hide the group and stop the loop
                if (this.isOverFlowing()) {
                    group.classList.add('gux-hidden');
                    break;
                }
            }
        }
    }
    getHiddenActions() {
        this.typographicalEmphasisActions = guxRichTextEditor_service.getActionsFromGroup(this.root, 'gux-rich-text-editor-action-group[slot="typographical-emphasis"]', 'gux-hidden');
        this.listsAndIndentationActions = guxRichTextEditor_service.getActionsFromGroup(this.root, 'gux-rich-text-editor-action-group[slot="lists-indentation"]', 'gux-hidden');
        this.textStylingActions = guxRichTextEditor_service.getActionsFromGroup(this.root, 'gux-rich-text-editor-action-group[slot="text-styling"]', 'gux-hidden');
        this.insertingActions = guxRichTextEditor_service.getActionsFromGroup(this.root, 'gux-rich-text-editor-action-group[slot="inserting"]', 'gux-hidden');
    }
    getAllActions() {
        return [
            ...this.textStylingActions,
            ...this.typographicalEmphasisActions,
            ...this.listsAndIndentationActions,
            ...this.insertingActions
        ];
    }
    categorizeActions(allActions) {
        const richStylePrefix = 'rich-style-';
        const highlightPrefix = 'highlight-';
        const richStyleActions = [];
        const highlightActions = [];
        const filteredActions = [];
        allActions.forEach(action => {
            if (action.startsWith(richStylePrefix)) {
                richStyleActions.push(action.slice(richStylePrefix.length));
            }
            else if (action.startsWith(highlightPrefix)) {
                highlightActions.push(action.slice(highlightPrefix.length));
            }
            else {
                filteredActions.push(action);
            }
        });
        return { richStyleActions, highlightActions, filteredActions };
    }
    renderListItems(actions, useInnerHTML = false) {
        return actions.map((action, index$1) => {
            const actionText = action.replace(/<\/?[^>]+(>|$)/g, ''); // Remove HTML tags
            return (index.h("gux-rich-style-list-item", Object.assign({ onClick: () => this.guxToggleAction.emit(actionText), key: index$1, value: actionText }, (useInnerHTML ? { innerHTML: action } : {})), !useInnerHTML && (this.i18n(actionText) || actionText)));
        });
    }
    renderSubList(labelKey, actions, useInnerHTML = false) {
        if (actions.length > 0) {
            return (index.h("gux-rich-text-editor-sub-list", { label: this.i18n(labelKey) }, this.renderListItems(actions, useInnerHTML)));
        }
    }
    renderHighlightSubList(actions) {
        if (actions.length > 0) {
            return (index.h("gux-rich-text-editor-sub-list", { label: this.i18n('textHighlight') }, this.renderListItems(actions), index.h("gux-rich-style-list-item", { onClick: () => this.guxToggleAction.emit('noHighlightAction'), value: "noHighlight" }, index.h("gux-truncate", { "max-lines": 1 }, this.i18n('noHighlight')))));
        }
    }
    renderTextEditorMenu() {
        const allActions = this.getAllActions();
        if (allActions.length > 0) {
            const { richStyleActions, highlightActions, filteredActions } = this.categorizeActions(allActions);
            return (index.h("gux-rich-text-editor-menu", null, this.renderListItems(filteredActions), this.renderSubList('richStyle', richStyleActions, true), this.renderHighlightSubList(highlightActions)));
        }
    }
    renderSlot(slotName, containerClass) {
        if (hasSlot.hasSlot(this.root, slotName)) {
            return (index.h("div", { class: containerClass }, index.h("slot", { name: slotName })));
        }
        return null;
    }
    renderTypographicalEmphasis() {
        return this.renderSlot('typographical-emphasis', 'gux-typographical-emphasis-container');
    }
    renderTextStyling() {
        return this.renderSlot('text-styling', 'gux-text-styling-container');
    }
    renderListsIndentation() {
        return this.renderSlot('lists-indentation', 'gux-lists-indentation-container');
    }
    renderInserting() {
        return this.renderSlot('inserting', 'gux-inserting-container');
    }
    renderGlobalAction() {
        return this.renderSlot('global-action', 'gux-global-action-container');
    }
    hasToolbarChildren() {
        return [
            this.renderTypographicalEmphasis(),
            this.renderTextStyling(),
            this.renderListsIndentation(),
            this.renderInserting(),
            this.renderTextEditorMenu(),
            this.renderGlobalAction()
        ].some(child => child !== null && child !== undefined);
    }
    render() {
        return (index.h("div", { key: '0c30232dc23ef57def4f584a7e6d698adf283ab4', class: {
                'gux-rich-text-editor-container': true,
                'gux-disabled': this.disabled,
                'gux-toolbar-hidden': !this.hasToolbar
            } }, index.h("div", { key: '8d8c9dc9f48809b588ca2dc0db47c58e00fbd999', class: "gux-rich-text-editor-toolbar-container" }, this.renderTypographicalEmphasis(), this.renderTextStyling(), this.renderListsIndentation(), this.renderInserting(), this.renderTextEditorMenu(), this.renderGlobalAction()), index.h("slot", { key: 'd5142a425c14642edd1723d24f9caeff0707545d', name: "editor" })));
    }
    get root() { return index.getElement(this); }
};
__decorate([
    onResize.OnResize()
], GuxRichTextEditor.prototype, "checkResponsiveLayout", null);
__decorate([
    onMutation.OnMutation({ childList: true, subtree: true })
], GuxRichTextEditor.prototype, "onMutation", null);
GuxRichTextEditor.style = guxRichTextEditorCss;

exports.gux_rich_text_editor_beta = GuxRichTextEditor;
