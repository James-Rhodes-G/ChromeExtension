'use strict';

var index = require('./index-BLhHoh_r.js');
var capitalizeFirstLetter = require('./capitalize-first-letter-mZPrUEI2.js');
var usage = require('./usage-v50bi18B.js');
var index$1 = require('./index-QInGO-Pu.js');
require('./get-closest-element-CfyZl7i7.js');

const actionRefresh = "Refresh";
const actionDelete = "Delete";
const actionExport = "Export";
const actionImport = "Import";
const actionRevert = "Revert";
const actionAdd = "Add";
var translationResources = {
	actionRefresh: actionRefresh,
	actionDelete: actionDelete,
	actionExport: actionExport,
	actionImport: actionImport,
	actionRevert: actionRevert,
	actionAdd: actionAdd
};

const guxTableToolbarActionCss = ":host{display:inline-block}:host[disabled]{pointer-events:none}";

const GuxTableToolbarAction = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.accent = 'secondary';
        this.iconOnly = false;
        this.disabled = false;
    }
    handleClick(event) {
        if (this.disabled) {
            event.preventDefault();
            event.stopImmediatePropagation();
        }
    }
    returnActionLocale(action) {
        return this.i18n(`action${capitalizeFirstLetter.capitalizeFirstLetter(action)}`);
    }
    returnActionTypeIcon(action) {
        switch (action) {
            case 'refresh':
                return 'fa/arrows-rotate-regular';
            case 'delete':
                return 'fa/trash-regular';
            case 'export':
                return 'fa/arrow-up-from-line-regular';
            case 'import':
                return 'fa/file-import-regular';
            case 'revert':
                return 'fa/arrow-rotate-left-regular';
            case 'add':
                return 'fa/plus-regular';
            default:
                return 'fa/square-x-regular';
        }
    }
    async componentWillLoad() {
        usage.trackComponent(this.root, { variant: this.action });
        this.i18n = await index$1.buildI18nForComponent(this.root, translationResources);
    }
    render() {
        return (index.h("gux-table-toolbar-custom-action", { key: 'f459ac4d8bb85c52d56e83300e74f658370c2e58', "icon-only": this.iconOnly, accent: this.accent, disabled: this.disabled }, index.h("span", { key: 'b0c50b3f8d4482f7cf2574c2330d1e4be892b7b0', slot: "text" }, this.returnActionLocale(this.action)), index.h("gux-icon", { key: '6f04f46a5403ee081a1ddf0761ce496e62ca66e0', slot: "icon", "icon-name": this.returnActionTypeIcon(this.action), decorative: true })));
    }
    get root() { return index.getElement(this); }
};
GuxTableToolbarAction.style = guxTableToolbarActionCss;

exports.gux_table_toolbar_action = GuxTableToolbarAction;
