export function overflowNavigation(event, currentElement) {
    switch (event.key) {
        case 'ArrowUp':
        case 'ArrowLeft':
            event.stopPropagation();
            event.preventDefault();
            focusPreviousSiblingLoop(currentElement);
            break;
        case 'ArrowDown':
        case 'ArrowRight':
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
function focusFirstSibling(currentElement) {
    const firstFocusableElement = getFirstFocusableElement(currentElement);
    if (firstFocusableElement) {
        void firstFocusableElement.focus();
    }
}
function focusLastSibling(currentElement) {
    const lastFocusableElement = getLastFocusableElement(currentElement);
    if (lastFocusableElement) {
        void lastFocusableElement.focus();
    }
}
function focusPreviousSiblingLoop(currentElement) {
    const previousFocusableElement = currentElement.previousElementSibling;
    if (previousFocusableElement) {
        void previousFocusableElement.focus();
    }
    else {
        focusLastSibling(currentElement);
    }
}
function focusNextSiblingLoop(currentElement) {
    const nextFocusableElement = currentElement.nextElementSibling;
    if (nextFocusableElement) {
        void nextFocusableElement.focus();
    }
    else {
        focusFirstSibling(currentElement);
    }
}
function getFirstFocusableElement(currentElement) {
    let firstFocusableElement = currentElement;
    while (firstFocusableElement.previousElementSibling !== null) {
        firstFocusableElement = firstFocusableElement.previousElementSibling;
    }
    return firstFocusableElement;
}
function getLastFocusableElement(currentElement) {
    let lastFocusableElement = currentElement;
    while (lastFocusableElement.nextElementSibling !== null) {
        lastFocusableElement = lastFocusableElement.nextElementSibling;
    }
    return lastFocusableElement;
}
