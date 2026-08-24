'use strict';

//https://inindca.atlassian.net/browse/COMUI-2673
// utility to get the closest element passing shadow dom boundaries
function getClosestElement(baseElement, selector) {
    function closest(element) {
        if (!element || element === document || element === window) {
            return null;
        }
        if (element.assignedSlot) {
            element = element.assignedSlot;
        }
        const found = element.closest(selector);
        return found
            ? found
            : closest(element.getRootNode().host);
    }
    return closest(baseElement);
}

exports.getClosestElement = getClosestElement;
