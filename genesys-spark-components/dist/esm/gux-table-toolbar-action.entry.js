import { r as registerInstance, h, a as getElement } from './index-xFL2agjT.js';
import { c as capitalizeFirstLetter } from './capitalize-first-letter-Cf6_BoFM.js';
import { t as trackComponent } from './usage-D2Q7fj4V.js';
import { b as buildI18nForComponent } from './index-Dac2qHbK.js';
import './get-closest-element-Cd4R0amv.js';

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
        registerInstance(this, hostRef);
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
        return this.i18n(`action${capitalizeFirstLetter(action)}`);
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
        trackComponent(this.root, { variant: this.action });
        this.i18n = await buildI18nForComponent(this.root, translationResources);
    }
    render() {
        return (h("gux-table-toolbar-custom-action", { key: 'f459ac4d8bb85c52d56e83300e74f658370c2e58', "icon-only": this.iconOnly, accent: this.accent, disabled: this.disabled }, h("span", { key: 'b0c50b3f8d4482f7cf2574c2330d1e4be892b7b0', slot: "text" }, this.returnActionLocale(this.action)), h("gux-icon", { key: '6f04f46a5403ee081a1ddf0761ce496e62ca66e0', slot: "icon", "icon-name": this.returnActionTypeIcon(this.action), decorative: true })));
    }
    get root() { return getElement(this); }
};
GuxTableToolbarAction.style = guxTableToolbarActionCss;

export { GuxTableToolbarAction as gux_table_toolbar_action };
