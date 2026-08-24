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
import { h, readTask } from "@stencil/core";
import { OnResize } from "../../../utils/decorator/on-resize";
import { hasSlot } from "../../../utils/dom/has-slot";
import { trackComponent } from "../../../utils/tracking/usage";
import { getActionsFromGroup } from "./gux-rich-text-editor.service";
import { buildI18nForComponent } from "../../../i18n/index";
import translationResources from "./gux-rich-text-editor-action/i18n/en.json";
import { afterNextRenderTimeout } from "../../../utils/dom/after-next-render";
import { OnMutation } from "../../../utils/decorator/on-mutation";
/**
 * @slot typographical-emphasis - Slot for typographical actions.
 * @slot text-styling - Slot for text-styling actions.
 * @slot lists-indentation - Slot for lists and indentation actions.
 * @slot inserting - Slot for inserting actions.
 * @slot global-action - Slot for global action.
 * @slot editor - Slot for the editor.
 */
export class GuxRichTextEditor {
    constructor() {
        this.disabled = false;
        this.typographicalEmphasisActions = [];
        this.textStylingActions = [];
        this.listsAndIndentationActions = [];
        this.insertingActions = [];
        this.hasToolbar = false;
    }
    checkResponsiveLayout() {
        readTask(() => {
            this.handleOverflow();
            this.getHiddenActions();
        });
    }
    onMutation() {
        this.hasToolbar = this.hasToolbarChildren();
    }
    async componentWillLoad() {
        trackComponent(this.root);
        this.i18n = await buildI18nForComponent(this.root, translationResources);
        this.hasToolbar = this.hasToolbarChildren();
    }
    componentDidLoad() {
        // This timeout is required to calculate the correct size of the containers when the component loads. By including a timeout of 1 second the containers calculate correctly.
        afterNextRenderTimeout(() => {
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
        this.typographicalEmphasisActions = getActionsFromGroup(this.root, 'gux-rich-text-editor-action-group[slot="typographical-emphasis"]', 'gux-hidden');
        this.listsAndIndentationActions = getActionsFromGroup(this.root, 'gux-rich-text-editor-action-group[slot="lists-indentation"]', 'gux-hidden');
        this.textStylingActions = getActionsFromGroup(this.root, 'gux-rich-text-editor-action-group[slot="text-styling"]', 'gux-hidden');
        this.insertingActions = getActionsFromGroup(this.root, 'gux-rich-text-editor-action-group[slot="inserting"]', 'gux-hidden');
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
        return actions.map((action, index) => {
            const actionText = action.replace(/<\/?[^>]+(>|$)/g, ''); // Remove HTML tags
            return (h("gux-rich-style-list-item", Object.assign({ onClick: () => this.guxToggleAction.emit(actionText), key: index, value: actionText }, (useInnerHTML ? { innerHTML: action } : {})), !useInnerHTML && (this.i18n(actionText) || actionText)));
        });
    }
    renderSubList(labelKey, actions, useInnerHTML = false) {
        if (actions.length > 0) {
            return (h("gux-rich-text-editor-sub-list", { label: this.i18n(labelKey) }, this.renderListItems(actions, useInnerHTML)));
        }
    }
    renderHighlightSubList(actions) {
        if (actions.length > 0) {
            return (h("gux-rich-text-editor-sub-list", { label: this.i18n('textHighlight') }, this.renderListItems(actions), h("gux-rich-style-list-item", { onClick: () => this.guxToggleAction.emit('noHighlightAction'), value: "noHighlight" }, h("gux-truncate", { "max-lines": 1 }, this.i18n('noHighlight')))));
        }
    }
    renderTextEditorMenu() {
        const allActions = this.getAllActions();
        if (allActions.length > 0) {
            const { richStyleActions, highlightActions, filteredActions } = this.categorizeActions(allActions);
            return (h("gux-rich-text-editor-menu", null, this.renderListItems(filteredActions), this.renderSubList('richStyle', richStyleActions, true), this.renderHighlightSubList(highlightActions)));
        }
    }
    renderSlot(slotName, containerClass) {
        if (hasSlot(this.root, slotName)) {
            return (h("div", { class: containerClass }, h("slot", { name: slotName })));
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
        return (h("div", { key: '0c30232dc23ef57def4f584a7e6d698adf283ab4', class: {
                'gux-rich-text-editor-container': true,
                'gux-disabled': this.disabled,
                'gux-toolbar-hidden': !this.hasToolbar
            } }, h("div", { key: '8d8c9dc9f48809b588ca2dc0db47c58e00fbd999', class: "gux-rich-text-editor-toolbar-container" }, this.renderTypographicalEmphasis(), this.renderTextStyling(), this.renderListsIndentation(), this.renderInserting(), this.renderTextEditorMenu(), this.renderGlobalAction()), h("slot", { key: 'd5142a425c14642edd1723d24f9caeff0707545d', name: "editor" })));
    }
    static get is() { return "gux-rich-text-editor-beta"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["gux-rich-text-editor.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["gux-rich-text-editor.css"]
        };
    }
    static get properties() {
        return {
            "disabled": {
                "type": "boolean",
                "attribute": "disabled",
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "typographicalEmphasisActions": {},
            "textStylingActions": {},
            "listsAndIndentationActions": {},
            "insertingActions": {},
            "hasToolbar": {}
        };
    }
    static get events() {
        return [{
                "method": "guxToggleAction",
                "name": "guxToggleAction",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "root"; }
}
__decorate([
    OnResize()
], GuxRichTextEditor.prototype, "checkResponsiveLayout", null);
__decorate([
    OnMutation({ childList: true, subtree: true })
], GuxRichTextEditor.prototype, "onMutation", null);
