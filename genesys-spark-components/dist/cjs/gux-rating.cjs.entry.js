'use strict';

var index = require('./index-BLhHoh_r.js');
var simulateNativeEvent = require('./simulate-native-event-_MPnVmRN.js');
var clamp = require('./clamp-BlDLYO0F.js');
var usage = require('./usage-v50bi18B.js');
var logError = require('./log-error-nWO_o1C3.js');

const guxRatingCss = ":host{display:inline-block;min-inline-size:fit-content;user-select:none}:host(:host:focus-visible){outline:var(--gse-semantic-focusOutline-sm-borderWidth) solid var(--gse-semantic-border-focus);outline-offset:var(--gse-semantic-focusOutline-offset);box-shadow:0 0 0 1px var(--gse-semantic-border-focus)}.gux-rating-star-container{display:flex;gap:var(--gse-ui-rating-star-gap);justify-content:space-between;color:var(--gse-ui-rating-default-color)}.gux-rating-star-container.gux-disabled{color:var(--gse-ui-rating-disabled-color);pointer-events:none;opacity:var(--gse-ui-rating-disabled-opacity)}.gux-rating-star-container gux-icon{flex:0 0 auto;color:var(--gse-ui-rating-default-color)}.gux-rating-star-container gux-icon:hover:not(.gux-disabled){color:var(--gse-ui-rating-hover-color)}";

const GuxRating = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.value = 0;
        this.maxValue = 5;
        this.disabled = false;
        this.readonly = false;
        this.increment = 'default';
    }
    onClick(event) {
        event.stopPropagation();
        if (this.disabled || this.readonly) {
            return;
        }
        const [clickedElement] = event.composedPath();
        const ratingStar = clickedElement.getRootNode();
        const clickedStarIndex = Array.from(this.starContainer.children).findIndex(child => child.shadowRoot === ratingStar);
        const clickedStarNominalValue = clickedStarIndex + 1;
        if (clickedStarNominalValue === this.value + 0.5) {
            this.updateRatingValue(clickedStarNominalValue);
        }
        else if (clickedStarNominalValue === this.value) {
            this.updateRatingValue(0);
        }
        else if (clickedStarNominalValue !== Math.floor(this.value)) {
            if (this.increment === 'half') {
                this.updateRatingValue(clickedStarNominalValue - 0.5);
            }
            else {
                this.updateRatingValue(clickedStarNominalValue);
            }
        }
        else {
            this.updateRatingValue(clickedStarNominalValue);
        }
    }
    onKeyDown(event) {
        event.stopPropagation();
        if (this.disabled || this.readonly) {
            return;
        }
        const increment = this.increment === 'half' ? 0.5 : 1;
        switch (event.key) {
            case 'ArrowUp':
            case 'ArrowRight':
                event.preventDefault();
                this.updateRatingValue(this.value + increment);
                break;
            case 'ArrowDown':
            case 'ArrowLeft':
                event.preventDefault();
                this.updateRatingValue(this.value - increment);
                break;
            case 'End':
                event.preventDefault();
                this.updateRatingValue(Infinity);
                break;
            case 'Home':
                event.preventDefault();
                this.updateRatingValue(-Infinity);
                break;
        }
    }
    updateRatingValue(newValue) {
        const clampedNewValue = clamp.clamp(newValue, 0, Array.from(this.starContainer.children).length);
        const increment = this.increment === 'half' ? 0.5 : 1;
        const validatedNewValue = Math.round(clampedNewValue / increment) * increment;
        if (this.value !== validatedNewValue) {
            this.value = validatedNewValue;
            simulateNativeEvent.simulateNativeEvent(this.root, 'input');
            simulateNativeEvent.simulateNativeEvent(this.root, 'change');
        }
    }
    getRatingStarElements() {
        return [...Array(this.maxValue).keys()]
            .reduce((acc, cv) => {
            if (cv + 0.5 === this.value) {
                return acc.concat('fa/star-sharp-half-stroke-regular');
            }
            else if (cv + 1 <= this.value) {
                return acc.concat('fa/star-solid');
            }
            return acc.concat('fa/star-regular');
        }, [])
            .map(iconName => (index.h("gux-icon", { "icon-name": iconName, decorative: true, size: "small" })));
    }
    getTabIndex() {
        return this.disabled ? -1 : 0;
    }
    componentWillLoad() {
        usage.trackComponent(this.root);
    }
    componentDidLoad() {
        if (!(this.root.getAttribute('aria-label') ||
            this.root.getAttribute('aria-labelledby'))) {
            logError.logWarn(this.root, '`gux-rating` requires a label. Either provide a label and associate it with the gux-rating element using `aria-labelledby` or add an `aria-label` attribute to the gux-rating element.');
        }
    }
    render() {
        return (index.h(index.Host, { key: 'd22ed4f6c5c2307405398ada32c9f0e97f074f36', role: "spinbutton", tabindex: this.getTabIndex(), "aria-readonly": this.readonly.toString(), "aria-valuenow": this.value, "aria-valuemin": "0", "aria-valuemax": this.maxValue }, index.h("div", { key: 'dfd8c8054e8019305f9fb9a2db43b2c11ddba799', ref: (el) => (this.starContainer = el), class: {
                'gux-rating-star-container': true,
                'gux-disabled': this.disabled
            } }, this.getRatingStarElements())));
    }
    get root() { return index.getElement(this); }
};
GuxRating.style = guxRatingCss;

exports.gux_rating = GuxRating;
