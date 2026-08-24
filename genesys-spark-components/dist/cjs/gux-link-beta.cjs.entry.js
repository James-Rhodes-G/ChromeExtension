'use strict';

var index = require('./index-BLhHoh_r.js');
var usage = require('./usage-v50bi18B.js');
var getClosestElement = require('./get-closest-element-CfyZl7i7.js');

const guxLinkCss = ":host{padding-block:var(--gse-ui-links-inLine-padding)}:host ::slotted(a){inline-size:fit-content;font-family:var(--gse-ui-links-inLine-medium-text-fontFamily), var(--gse-semantic-theme-fontFamily-body), sans-serif;font-size:var(--gse-ui-links-inLine-medium-text-fontSize);font-weight:var(--gse-ui-links-inLine-medium-text-fontWeight);line-height:var(--gse-ui-links-inLine-medium-text-lineHeight);color:var(--gse-ui-links-default-foregroundColor) !important;border-radius:var(--gse-ui-links-focusOutline-borderRadius) !important}:host ::slotted(a:hover){color:var(--gse-ui-links-hover-foregroundColor) !important}:host ::slotted(a:active){color:var(--gse-ui-links-active-foregroundColor) !important}:host ::slotted(a:visited){color:var(--gse-ui-links-visited-foregroundColor) !important}:host ::slotted(a:focus-visible){outline:var(--gse-semantic-focusOutline-md-borderWidth) solid var(--gse-semantic-border-focus);outline-offset:var(--gse-semantic-focusOutline-offset)}:host([size=small]) ::slotted(a){font-family:var(--gse-ui-links-inLine-small-text-fontFamily), var(--gse-semantic-theme-fontFamily-body), sans-serif;font-size:var(--gse-ui-links-inLine-small-text-fontSize);font-weight:var(--gse-ui-links-inLine-small-text-fontWeight);line-height:var(--gse-ui-links-inLine-small-text-lineHeight)}:host([standalone]){display:block;padding-block:var(--gse-ui-links-standalone-padding)}:host([standalone]) ::slotted(a){display:flex;gap:var(--gse-ui-links-standalone-gap);align-items:center;inline-size:fit-content;font-family:var(--gse-ui-links-standalone-medium-text-fontFamily), var(--gse-semantic-theme-fontFamily-body), sans-serif;font-size:var(--gse-ui-links-standalone-medium-text-fontSize);font-weight:var(--gse-ui-links-standalone-medium-text-fontWeight);line-height:var(--gse-ui-links-standalone-medium-text-lineHeight);text-decoration:none !important}:host([standalone]) ::slotted(a:hover){font-family:var(--gse-ui-links-standalone-medium-underlinedText-fontFamily), var(--gse-semantic-theme-fontFamily-body), sans-serif;font-size:var(--gse-ui-links-standalone-medium-underlinedText-fontSize);font-weight:var(--gse-ui-links-standalone-medium-underlinedText-fontWeight);line-height:var(--gse-ui-links-standalone-medium-underlinedText-lineHeight);text-decoration:var(--gse-ui-links-standalone-medium-underlinedText-textDecoration) !important}:host([standalone]) ::slotted(a:active){text-decoration:none !important}:host([size=small][standalone]) ::slotted(a){font-family:var(--gse-ui-links-standalone-small-text-fontFamily), var(--gse-semantic-theme-fontFamily-body), sans-serif;font-size:var(--gse-ui-links-standalone-small-text-fontSize);font-weight:var(--gse-ui-links-standalone-small-text-fontWeight);line-height:var(--gse-ui-links-standalone-small-text-lineHeight)}:host([size=small][standalone]) ::slotted(a:hover){font-family:var(--gse-ui-links-standalone-small-underlinedText-fontFamily), var(--gse-semantic-theme-fontFamily-body), sans-serif;font-size:var(--gse-ui-links-standalone-small-underlinedText-fontSize);font-weight:var(--gse-ui-links-standalone-small-underlinedText-fontWeight);line-height:var(--gse-ui-links-standalone-small-underlinedText-lineHeight);text-decoration:var(--gse-ui-links-standalone-small-underlinedText-textDecoration) !important}:host([standalone][class=gux-breadcrumb-link]){padding:0}";

const GuxLink = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.size = 'medium';
        this.standalone = false;
    }
    componentWillLoad() {
        usage.trackComponent(this.root, {
            variant: this.size + (this.standalone ? '-standalone' : '')
        });
    }
    checkBreadcrumbParent() {
        return !!getClosestElement.getClosestElement('.gux-breadcrumb-generation', this.root);
    }
    render() {
        return (index.h(index.Host, { key: '9bf00be3f4e8906b91364d00f28a6bd5d2fa2f7e', size: this.size, standalone: this.standalone, class: { 'gux-breadcrumb-link': this.checkBreadcrumbParent() } }, index.h("slot", { key: '519c3642d33eeac030274ba7d3516d6a6cc6edff' })));
    }
    get root() { return index.getElement(this); }
};
GuxLink.style = guxLinkCss;

exports.gux_link_beta = GuxLink;
