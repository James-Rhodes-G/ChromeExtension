'use strict';

var index = require('./index-BLhHoh_r.js');
var usage = require('./usage-v50bi18B.js');
var index$1 = require('./index-QInGO-Pu.js');
var en = require('./en-ChMBIoFc.js');
var getClosestElement = require('./get-closest-element-CfyZl7i7.js');

const guxRichHighlightListItemCss = ":host{display:block;border-radius:var(--gse-ui-button-borderRadius)}.gux-highlight{inline-size:var(--gse-ui-rte-colorSwatch-width);block-size:var(--gse-ui-rte-colorSwatch-height);border-radius:var(--gse-ui-button-borderRadius)}.gux-highlight button{all:unset;inline-size:100%;block-size:100%;cursor:pointer}.gux-highlight button:focus-visible{outline:var(--gse-semantic-focusOutline-sm-borderWidth) solid var(--gse-semantic-border-focus);border-radius:var(--gse-semantic-focusOutline-sm-borderRadius)}.gux-highlight.gux-orange{background-color:var(--gse-ui-rte-colorSwatch-orange-default)}.gux-highlight.gux-coral{background-color:var(--gse-ui-rte-colorSwatch-coral-default)}.gux-highlight.gux-pear{background-color:var(--gse-ui-rte-colorSwatch-pear-default)}.gux-highlight.gux-raspberry{background-color:var(--gse-ui-rte-colorSwatch-raspberry-default)}.gux-highlight.gux-mango{background-color:var(--gse-ui-rte-colorSwatch-mango-default)}.gux-highlight.gux-blue{background-color:var(--gse-ui-rte-colorSwatch-azure-default)}.gux-highlight.gux-mineral{background-color:var(--gse-ui-rte-colorSwatch-mineral-default)}.gux-highlight.gux-island{background-color:var(--gse-ui-rte-colorSwatch-island-default)}.gux-highlight.gux-inherit{color:inherit;background-color:inherit}";

const GuxRichHighlightListItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.disabled = false;
        this.highlight = 'orange';
    }
    onMouseUp() {
        this.focusParentList();
    }
    onMouseOver() {
        this.focusParentList();
    }
    focusParentList() {
        const parentList = getClosestElement.getClosestElement('gux-rich-text-editor-list', this.root);
        if (parentList && parentList.shadowRoot.activeElement === null) {
            this.root.blur();
            parentList.focus({
                preventScroll: true
            });
        }
    }
    async componentWillLoad() {
        usage.trackComponent(this.root, { variant: this.highlight });
        this.i18n = await index$1.buildI18nForComponent(this.root, en.translationResources);
    }
    renderTooltip() {
        if (!this.disabled && this.highlight !== 'inherit') {
            return (index.h("gux-tooltip-beta", null, index.h("div", { slot: "content" }, this.i18n(`${this.highlight}`))));
        }
    }
    render() {
        return (index.h("div", { key: '50c3810ca3ad7f64567098681c701703eb4d7922', class: {
                'gux-highlight': true,
                [`gux-${this.highlight}`]: true
            }, role: "listitem" }, index.h("button", { key: '5d2c996348c87453395739b2c28267cadc7a74c6', type: "button", "aria-label": this.i18n(`${this.highlight}`), tabIndex: -1, disabled: this.disabled }), this.renderTooltip()));
    }
    static get delegatesFocus() { return true; }
    get root() { return index.getElement(this); }
};
GuxRichHighlightListItem.style = guxRichHighlightListItemCss;

exports.gux_rich_highlight_list_item = GuxRichHighlightListItem;
