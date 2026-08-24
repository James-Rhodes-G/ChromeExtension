'use strict';

var index = require('./index-BLhHoh_r.js');

const guxRichTextEditorActionGroupCss = ":host{display:flex;flex-direction:row}:host(.gux-hidden) .gux-divider{display:none}:host(.gux-hidden) ::slotted(:not(gux-rich-text-editor-action-link)){display:none}.gux-action-group-container{display:flex;flex-direction:row;flex-wrap:nowrap;gap:var(--gse-ui-rte-toolbarBtnGroup-gap);align-items:flex-start;justify-content:flex-start}.gux-divider{inline-size:var(--gse-ui-rte-divider-width);block-size:var(--gse-ui-rte-divider-height);margin:var(--gse-ui-rte-toolbar-divider-margin);background-color:var(--gse-ui-rte-toolbar-divider-color)}";

const GuxRichTextEditorActionGroup = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.hideActionDivider = false;
    }
    renderActionGroupDivider() {
        if (!this.hideActionDivider) {
            return (index.h("div", { class: "gux-divider" }));
        }
    }
    render() {
        return (index.h(index.Host, { key: 'ae6eedd0bacc0a7b8c07e48a0dcf24bfa65fae32' }, index.h("div", { key: '5c96762b070a13265e3635f68722854afa305341', class: "gux-action-group-container" }, index.h("slot", { key: '3a43e2691131b24f25ec64385b325e6fdf89731d' })), this.renderActionGroupDivider()));
    }
    get root() { return index.getElement(this); }
};
GuxRichTextEditorActionGroup.style = guxRichTextEditorActionGroupCss;

exports.gux_rich_text_editor_action_group = GuxRichTextEditorActionGroup;
