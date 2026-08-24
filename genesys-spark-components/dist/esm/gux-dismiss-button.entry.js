import { r as registerInstance, h, a as getElement } from './index-xFL2agjT.js';
import { t as trackComponent } from './usage-D2Q7fj4V.js';
import { b as buildI18nForComponent } from './index-Dac2qHbK.js';
import './get-closest-element-Cd4R0amv.js';

const dismiss = "Dismiss";
var translationResources = {
	dismiss: dismiss
};

const guxDismissButtonCss = "gux-button-slot{position:absolute;inset-block-start:4px;inset-inline-end:4px;inline-size:var(--gse-ui-button-dismiss-medium-width);block-size:var(--gse-ui-button-dismiss-medium-height)}gux-button-slot.gux-dismiss-small{inline-size:var(--gse-ui-button-dismiss-small-width);block-size:var(--gse-ui-button-dismiss-small-height)}gux-button-slot.gux-dismiss-small button{inline-size:var(--gse-ui-button-dismiss-small-width);min-inline-size:var(--gse-ui-button-dismiss-small-width);block-size:var(--gse-ui-button-dismiss-small-height);padding:0}gux-button-slot.gux-inherit{position:inherit;inset-block-start:inherit;inset-inline-end:inherit}gux-button-slot .gux-icon-container{display:flex;flex-direction:row;flex-wrap:nowrap;place-content:stretch center;align-items:center}gux-button-slot .gux-icon-container gux-icon{flex:0 0 auto;align-self:auto;order:0;color:var(--gse-ui-dismissButton-foregroundColor)}";

const GuxDismissButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.position = 'absolute';
        this.size = 'medium';
    }
    async componentWillLoad() {
        trackComponent(this.root, { variant: this.position });
        this.i18n = await buildI18nForComponent(this.root, translationResources);
    }
    render() {
        return (h("gux-button-slot", { key: '699c5876801bf26edbae2803ca5f7ba7d047b27e', accent: "ghost", class: {
                'gux-inherit': this.position == 'inherit',
                'gux-dismiss-small': this.size == 'small'
            } }, h("button", { key: 'de66227205545b4dbf92210167fa4d5ca1ca4a48', type: "button", title: this.i18n('dismiss') }, h("div", { key: 'f9284ac02c27e32ea3646718efcad36954099ce6', class: "gux-icon-container" }, h("gux-icon", { key: 'fc37236b5f832358416119d97e8aa6cc3612a825', "icon-name": "fa/xmark-large-regular", decorative: true, size: "small" })))));
    }
    static get delegatesFocus() { return true; }
    get root() { return getElement(this); }
};
GuxDismissButton.style = guxDismissButtonCss;

export { GuxDismissButton as gux_dismiss_button };
