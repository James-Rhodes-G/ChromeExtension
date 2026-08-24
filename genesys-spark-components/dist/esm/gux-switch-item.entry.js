import { r as registerInstance, h, H as Host } from './index-xFL2agjT.js';

const guxSwitchItemCss = "gux-switch-item>.gux-switch-item{font-family:var(--gse-semantic-body-sm-regular-fontFamily), var(--gse-semantic-theme-fontFamily-body), sans-serif;font-size:var(--gse-semantic-body-sm-regular-fontSize);line-height:var(--gse-semantic-body-sm-regular-lineHeight);font-weight:var(--gse-semantic-body-sm-regular-fontWeight);font:unset;color:var(--gse-semantic-foreground-container-highEmphasis);text-align:center;outline:none;background:none;border:none}gux-switch-item>.gux-switch-item>gux-icon svg{fill:#99a4b8}gux-switch-item[disabled]{pointer-events:none;opacity:0.5}gux-switch-item.gux-selected{font-family:var(--gse-semantic-body-sm-regular-fontFamily), var(--gse-semantic-theme-fontFamily-body), sans-serif;font-size:var(--gse-semantic-body-sm-regular-fontSize);line-height:var(--gse-semantic-body-sm-regular-lineHeight);font-weight:var(--gse-semantic-body-sm-bold-fontWeight)}gux-switch-legacy>gux-switch-item .gux-switch-item{padding:0 8px 4px;border-bottom:1px solid var(--gse-ui-segmentedControl-button-active-backgroundColor)}gux-switch-legacy>gux-switch-item .gux-switch-item:focus-visible,gux-switch-legacy>gux-switch-item .gux-switch-item:hover{padding:0 8px 1px;border-bottom:4px solid var(--gse-ui-segmentedControl-button-default-foregroundColor)}gux-switch-legacy>gux-switch-item .gux-switch-item:focus-visible>gux-icon svg,gux-switch-legacy>gux-switch-item .gux-switch-item:hover>gux-icon svg{fill:var(--gse-ui-segmentedControl-button-disabled-foregroundColor)}gux-switch-legacy>gux-switch-item .gux-switch-item:focus-visible{outline:var(--gse-semantic-focusOutline-md-borderWidth) solid var(--gse-semantic-border-focus);outline-offset:var(--gse-semantic-focusOutline-offset);border-radius:2px}gux-switch-legacy>gux-switch-item .gux-switch-item>gux-icon{width:32px;height:32px}gux-switch-legacy>gux-switch-item.gux-selected .gux-switch-item{padding:0 8px 1px;border-bottom:4px solid var(--gse-ui-segmentedControl-button-default-foregroundColor)}gux-switch-legacy>gux-switch-item.gux-selected .gux-switch-item>gux-icon svg{fill:var(--gse-ui-segmentedControl-button-disabled-foregroundColor)}gux-switch-legacy.gux-small>gux-switch-item .gux-switch-item{font-family:var(--gse-semantic-body-sm-regular-fontFamily), var(--gse-semantic-theme-fontFamily-body), sans-serif;font-size:var(--gse-semantic-body-sm-regular-fontSize);line-height:var(--gse-semantic-body-sm-regular-lineHeight);font-weight:var(--gse-semantic-body-sm-regular-fontWeight);padding:0 4px;border-bottom:1px solid var(--gse-ui-segmentedControl-button-active-backgroundColor)}gux-switch-legacy.gux-small>gux-switch-item .gux-switch-item:focus-visible,gux-switch-legacy.gux-small>gux-switch-item .gux-switch-item:hover{border-bottom-color:var(--gse-ui-segmentedControl-button-disabled-foregroundColor)}gux-switch-legacy.gux-small>gux-switch-item .gux-switch-item>gux-icon{width:24px;height:24px}gux-switch-legacy.gux-small>gux-switch-item.gux-selected .gux-switch-item{border-bottom-color:var(--gse-ui-segmentedControl-button-disabled-foregroundColor)}";

const GuxSwitchItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.selected = false;
        this.disabled = false;
    }
    onClick(e) {
        if (this.disabled) {
            e.stopPropagation();
        }
    }
    render() {
        return (h(Host, { key: 'bbec0575109e6efd87682732b7663341876738a9', class: { 'gux-selected': this.selected } }, h("button", { key: '30ddf040c97d4b052ff3c3ebc6b5a8731691a613', type: "button", class: "gux-switch-item", disabled: this.disabled }, h("slot", { key: 'a5413e54bce99afc3cf4b1ae1d150241d5a32776' }))));
    }
};
GuxSwitchItem.style = guxSwitchItemCss;

export { GuxSwitchItem as gux_switch_item };
