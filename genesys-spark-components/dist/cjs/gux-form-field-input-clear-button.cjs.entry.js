'use strict';

var index = require('./index-BLhHoh_r.js');
var usage = require('./usage-v50bi18B.js');
var index$1 = require('./index-QInGO-Pu.js');
require('./get-closest-element-CfyZl7i7.js');

const clear = "Clear";
var translationResources = {
	clear: clear
};

const guxFormFieldInputClearButtonCss = "button{display:flex;padding:0;color:var(--gse-ui-formControl-input-inputClearable-inputClearableColor);background:transparent;border:none;border-radius:var(--gse-ui-formControl-input-borderRadius)}button:not(:disabled):focus-visible,button:not(:disabled):hover{color:var(--gse-ui-formControl-input-inputIcon-iconEndColor);cursor:pointer}button gux-icon{border-radius:var(--gse-ui-formControl-input-borderRadius)}button:focus{outline:none}button:focus-visible:enabled gux-icon{outline:var(--gse-ui-formControl-input-focus-border-width) var(--gse-ui-formControl-input-focus-border-style) var(--gse-ui-formControl-input-focus-border-color);border:var(--gse-ui-formControl-input-active-border-width) var(--gse-ui-formControl-input-active-border-style) var(--gse-ui-formControl-input-active-border-color);border-radius:var(--gse-ui-formControl-focusRing-borderRadius)}";

const GuxFormFieldInputClearButton = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    async componentWillLoad() {
        usage.trackComponent(this.root);
        this.i18n = await index$1.buildI18nForComponent(this.root, translationResources);
    }
    render() {
        return (index.h("button", { key: '305675dae6c35eab394e01dc39155b2f352a8c5e', tabIndex: -1, type: "button", title: this.i18n('clear') }, index.h("gux-icon", { key: '35444cb25808da5079a96c9f0c12b710726b687a', "icon-name": "fa/xmark-large-regular", decorative: true, size: "small" })));
    }
    static get delegatesFocus() { return true; }
    get root() { return index.getElement(this); }
};
GuxFormFieldInputClearButton.style = guxFormFieldInputClearButtonCss;

exports.gux_form_field_input_clear_button = GuxFormFieldInputClearButton;
