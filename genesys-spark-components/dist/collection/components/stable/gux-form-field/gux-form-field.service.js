import { randomHTMLId } from "../../../utils/dom/random-html-";
import { logError } from "../../../utils/error/log-error";
import setInputValue from "../../../utils/dom/set-input-value";
import { hasSlot } from "../../../utils/dom/has-slot";
export function clearInput(input) {
    setInputValue(input, '', true);
}
export function hasContent(input) {
    return Boolean(input === null || input === void 0 ? void 0 : input.value);
}
export function getComputedLabelPosition(label, labelPosition) {
    if (label) {
        if (['above', 'beside', 'screenreader'].includes(labelPosition)) {
            return labelPosition;
        }
        else if (label.offsetWidth > 1 && label.offsetWidth < 40) {
            return 'beside';
        }
        else {
            return 'above';
        }
    }
}
export function validateFormIds(root, input) {
    var _a, _b, _c, _d, _e, _f;
    if (hasLabelSlot(root)) {
        const label = root.querySelector('label[slot="label"]');
        const inputHasId = Boolean(input.hasAttribute('id'));
        const labelHasFor = Boolean(label.hasAttribute('for'));
        if (!inputHasId && labelHasFor) {
            logError(root, 'A "for" attribute has been provided on the label but there is no corresponding id on the input. Either provide an id on the input or omit the "for" attribute from the label. If there is no input id and no "for" attribute provided, the component will automatically generate an id and link it to the "for" attribute.');
        }
        else if (!inputHasId) {
            const defaultInputId = randomHTMLId('gux-form-field-input');
            input.setAttribute('id', defaultInputId);
            label.setAttribute('for', defaultInputId);
        }
        else if (inputHasId && !labelHasFor) {
            const forId = input.getAttribute('id');
            label.setAttribute('for', forId);
        }
        else if (inputHasId &&
            labelHasFor &&
            input.getAttribute('id') !== label.getAttribute('for')) {
            logError(root, 'The input id and label for attribute should match.');
        }
    }
    else {
        logError(root, 'A label is required for this component. If a visual label is not needed for this use case, please add localized text for a screenreader and set the label-position attribute to "screenreader" to visually hide the label.');
    }
    if (hasSlot(root, 'error')) {
        const error = root.querySelector('[slot="error"]');
        const errorId = randomHTMLId('gux-form-field-error');
        const describedByIds = ((_a = input
            .getAttribute('aria-describedby')) === null || _a === void 0 ? void 0 : _a.split(' ').filter(id => !id.startsWith(`gux-form-field-error`))) || [];
        error.setAttribute('id', errorId);
        describedByIds.push(errorId);
        if (input.tagName === 'INPUT' ||
            input.tagName === 'SELECT' ||
            input.tagName === 'TEXTAREA') {
            input.setAttribute('aria-invalid', 'true');
        }
        if (describedByIds) {
            input.setAttribute('aria-describedby', describedByIds.join(' '));
        }
    }
    else if (input.getAttribute('aria-describedby')) {
        const describedByIds = ((_b = input
            .getAttribute('aria-describedby')) === null || _b === void 0 ? void 0 : _b.split(' ').filter(id => !id.startsWith(`gux-form-field-error`))) || [];
        input.setAttribute('aria-describedby', describedByIds.join(' '));
    }
    if (hasSlot(root, 'help')) {
        const help = root.querySelector('[slot="help"]');
        const helpId = randomHTMLId('gux-form-field-help');
        const describedByIds = ((_c = input
            .getAttribute('aria-describedby')) === null || _c === void 0 ? void 0 : _c.split(' ').filter(id => !id.startsWith(`gux-form-field-help`))) || [];
        help.setAttribute('id', helpId);
        describedByIds.push(helpId);
        if (describedByIds) {
            input.setAttribute('aria-describedby', describedByIds.join(' '));
        }
    }
    else if (input.getAttribute('aria-describedby')) {
        const describedByIds = ((_d = input
            .getAttribute('aria-describedby')) === null || _d === void 0 ? void 0 : _d.split(' ').filter(id => !id.startsWith(`gux-form-field-help`))) || [];
        input.setAttribute('aria-describedby', describedByIds.join(' '));
    }
    if (hasSlot(root, 'label-info')) {
        const labelInfo = root.querySelector('[slot="label-info"]');
        const labelInfoId = randomHTMLId('gux-label-info-beta');
        const describedByIds = ((_e = input
            .getAttribute('aria-describedby')) === null || _e === void 0 ? void 0 : _e.split(' ').filter(id => !id.startsWith(`gux-label-info-beta`))) || [];
        labelInfo.setAttribute('id', labelInfoId);
        describedByIds.push(labelInfoId);
        if (describedByIds) {
            input.setAttribute('aria-describedby', describedByIds.join(' '));
        }
    }
    else if (input.getAttribute('aria-describedby')) {
        const describedByIds = ((_f = input
            .getAttribute('aria-describedby')) === null || _f === void 0 ? void 0 : _f.split(' ').filter(id => !id.startsWith(`gux-label-info-beta`))) || [];
        input.setAttribute('aria-describedby', describedByIds.join(' '));
    }
}
export function setSlotAriaAttribute(root, attribute, input, slotName) {
    var _a;
    if (hasSlot(root, slotName)) {
        const slottedElement = root.querySelector(`[slot=${slotName}]`);
        const randomId = randomHTMLId(`gux-${slotName}`);
        const ariaAttributeIds = ((_a = input
            .getAttribute(attribute)) === null || _a === void 0 ? void 0 : _a.split(' ').filter(id => !id.startsWith(`gux-${slotName}`))) || [];
        slottedElement.setAttribute('id', randomId);
        ariaAttributeIds === null || ariaAttributeIds === void 0 ? void 0 : ariaAttributeIds.push(randomId);
        if (ariaAttributeIds) {
            input.setAttribute(attribute, ariaAttributeIds.join(' '));
        }
    }
}
export function setSlotAriaLabelledby(root, input, slotName) {
    setSlotAriaAttribute(root, 'aria-labelledby', input, slotName);
}
export function setSlotAriaDescribedby(root, input, slotName) {
    setSlotAriaAttribute(root, 'aria-describedby', input, slotName);
}
export function getSlottedInput(root, inputSelector) {
    const inputElement = root.querySelector(inputSelector);
    if (!inputElement) {
        logError(root, `This component requires an input element that matches the following selector: ${inputSelector}`);
    }
    return inputElement;
}
function hasLabelSlot(root) {
    return Boolean(root.querySelector('label[slot="label"]'));
}
