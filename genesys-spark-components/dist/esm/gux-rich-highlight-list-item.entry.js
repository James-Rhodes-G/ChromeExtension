import { r as registerInstance, h, a as getElement } from './index-xFL2agjT.js';
import { t as trackComponent } from './usage-D2Q7fj4V.js';
import { b as buildI18nForComponent } from './index-Dac2qHbK.js';
import { t as translationResources } from './en-DN3YAdAX.js';
import { g as getClosestElement } from './get-closest-element-Cd4R0amv.js';

const guxRichHighlightListItemCss = ":host{display:block;border-radius:var(--gse-ui-button-borderRadius)}.gux-highlight{inline-size:var(--gse-ui-rte-colorSwatch-width);block-size:var(--gse-ui-rte-colorSwatch-height);border-radius:var(--gse-ui-button-borderRadius)}.gux-highlight button{all:unset;inline-size:100%;block-size:100%;cursor:pointer}.gux-highlight button:focus-visible{outline:var(--gse-semantic-focusOutline-sm-borderWidth) solid var(--gse-semantic-border-focus);border-radius:var(--gse-semantic-focusOutline-sm-borderRadius)}.gux-highlight.gux-orange{background-color:var(--gse-ui-rte-colorSwatch-orange-default)}.gux-highlight.gux-coral{background-color:var(--gse-ui-rte-colorSwatch-coral-default)}.gux-highlight.gux-pear{background-color:var(--gse-ui-rte-colorSwatch-pear-default)}.gux-highlight.gux-raspberry{background-color:var(--gse-ui-rte-colorSwatch-raspberry-default)}.gux-highlight.gux-mango{background-color:var(--gse-ui-rte-colorSwatch-mango-default)}.gux-highlight.gux-blue{background-color:var(--gse-ui-rte-colorSwatch-azure-default)}.gux-highlight.gux-mineral{background-color:var(--gse-ui-rte-colorSwatch-mineral-default)}.gux-highlight.gux-island{background-color:var(--gse-ui-rte-colorSwatch-island-default)}.gux-highlight.gux-inherit{color:inherit;background-color:inherit}";

const GuxRichHighlightListItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        const parentList = getClosestElement('gux-rich-text-editor-list', this.root);
        if (parentList && parentList.shadowRoot.activeElement === null) {
            this.root.blur();
            parentList.focus({
                preventScroll: true
            });
        }
    }
    async componentWillLoad() {
        trackComponent(this.root, { variant: this.highlight });
        this.i18n = await buildI18nForComponent(this.root, translationResources);
    }
    renderTooltip() {
        if (!this.disabled && this.highlight !== 'inherit') {
            return (h("gux-tooltip-beta", null, h("div", { slot: "content" }, this.i18n(`${this.highlight}`))));
        }
    }
    render() {
        return (h("div", { key: '50c3810ca3ad7f64567098681c701703eb4d7922', class: {
                'gux-highlight': true,
                [`gux-${this.highlight}`]: true
            }, role: "listitem" }, h("button", { key: '5d2c996348c87453395739b2c28267cadc7a74c6', type: "button", "aria-label": this.i18n(`${this.highlight}`), tabIndex: -1, disabled: this.disabled }), this.renderTooltip()));
    }
    static get delegatesFocus() { return true; }
    get root() { return getElement(this); }
};
GuxRichHighlightListItem.style = guxRichHighlightListItemCss;

export { GuxRichHighlightListItem as gux_rich_highlight_list_item };
