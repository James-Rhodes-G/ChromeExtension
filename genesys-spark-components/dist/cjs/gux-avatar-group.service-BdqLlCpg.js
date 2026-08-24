'use strict';

var getClosestElement = require('./get-closest-element-CfyZl7i7.js');
var logError = require('./log-error-nWO_o1C3.js');

function groupKeyboardNavigation(event, currentElement) {
    switch (event.key) {
        case 'ArrowLeft':
        case 'ArrowUp':
            event.stopPropagation();
            event.preventDefault();
            focusPreviousSiblingLoop(currentElement);
            break;
        case 'ArrowRight':
        case 'ArrowDown':
            event.stopPropagation();
            event.preventDefault();
            focusNextSiblingLoop(currentElement);
            break;
        case 'Home':
            event.stopPropagation();
            event.preventDefault();
            focusFirstSibling(currentElement);
            break;
        case 'End':
            event.stopPropagation();
            event.preventDefault();
            focusLastSibling(currentElement);
            break;
    }
}
function resetFocusableSibling(element) {
    const focusableSibling = getGroupItems(element).find((sibling) => {
        const button = getGroupItemButton(sibling);
        return button && button.tabIndex !== -1;
    });
    if (focusableSibling) {
        setItemTabIndex(focusableSibling, -1);
    }
}
function setFocusTarget(element) {
    setItemTabIndex(element, 0);
}
function focusFirstSibling(currentElement) {
    const firstFocusableElement = getFirstFocusableElement(currentElement);
    if (firstFocusableElement) {
        void firstFocusableElement.focus();
        void resetFocusableSibling(firstFocusableElement);
        void setItemTabIndex(firstFocusableElement, 0);
    }
}
function focusLastSibling(currentElement) {
    const lastFocusableElement = getLastFocusableElement(currentElement);
    if (lastFocusableElement) {
        void lastFocusableElement.focus();
        void resetFocusableSibling(lastFocusableElement);
        void setItemTabIndex(lastFocusableElement, 0);
    }
}
function focusPreviousSiblingLoop(currentElement) {
    const groupItems = getGroupItems(currentElement);
    const currentElementIndex = groupItems.findIndex((item) => item === currentElement);
    const previousIndex = (currentElementIndex - 1) % groupItems.length;
    const previousFocusableElement = groupItems[previousIndex];
    setItemTabIndex(currentElement, -1);
    if (previousFocusableElement) {
        void previousFocusableElement.focus();
        void setItemTabIndex(previousFocusableElement, 0);
    }
    else {
        focusLastSibling(currentElement);
    }
}
function focusNextSiblingLoop(currentElement) {
    const groupItems = getGroupItems(currentElement);
    const currentElementIndex = groupItems.findIndex((item) => item === currentElement);
    const nextIndex = (currentElementIndex + 1) % groupItems.length;
    if (nextIndex === 0) {
        focusFirstSibling(currentElement);
    }
    const nextFocusableElement = groupItems[nextIndex];
    setItemTabIndex(currentElement, -1);
    if (nextFocusableElement !== null) {
        void nextFocusableElement.focus();
        void setItemTabIndex(nextFocusableElement, 0);
    }
}
function getFirstFocusableElement(currentElement) {
    return getGroupItems(currentElement)[0];
}
function getLastFocusableElement(currentElement) {
    const groupItems = getGroupItems(currentElement);
    return groupItems[groupItems.length - 1];
}
function getGroupItemButton(element) {
    var _a;
    return (_a = element.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('button');
}
function getGroupItems(element) {
    const group = getClosestElement.getClosestElement('gux-avatar-group-beta', element);
    const slottedItems = Array.from(group.querySelectorAll('gux-avatar-group-item-beta, gux-avatar-group-add-item-beta')).filter(child => !isHidden(child));
    const overflow = group.shadowRoot.querySelector('gux-avatar-overflow-beta');
    if (overflow) {
        const addToGroup = group.shadowRoot.querySelector('gux-avatar-group-add-item-beta');
        slottedItems.push(overflow);
        if (addToGroup) {
            slottedItems.push(addToGroup);
        }
    }
    return slottedItems;
}
function setItemTabIndex(element, newIndex) {
    const button = getGroupItemButton(element);
    if (button) {
        button.tabIndex = newIndex;
    }
    else {
        logError.logWarn(element, 'gux-avatar-group-beta: No button found in the element');
    }
}
function isHidden(element) {
    return element.hasAttribute('hidden');
}

exports.groupKeyboardNavigation = groupKeyboardNavigation;
exports.resetFocusableSibling = resetFocusableSibling;
exports.setFocusTarget = setFocusTarget;
