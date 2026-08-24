export function getListOptions(list) {
    const listChildren = Array.from(list.children);
    return listChildren.reduce((accumulator, child) => {
        let childOptions = [];
        if (isOptionGroup(child)) {
            childOptions = Array.from(child.children).filter(item => isOption(item));
        }
        else if (isOption(child)) {
            childOptions = [child];
        }
        return [...accumulator, ...childOptions];
    }, []);
}
export function getAvailableListOptions(list) {
    return getListOptions(list).filter(option => {
        return !option.disabled && !option.filtered;
    });
}
export function isOptionGroup(item) {
    return item.tagName === 'GUX-OPTION-GROUP-BETA';
}
export function isOption(item) {
    const optionTypes = [
        'GUX-OPTION',
        'GUX-OPTION-ICON',
        'GUX-OPTION-MULTI',
        'GUX-OPTION-STATUS-BETA'
    ];
    return optionTypes.includes(item.tagName);
}
function getFirstSelectedOption(list) {
    return getListOptions(list).find(option => option.selected && !option.disabled && !option.filtered);
}
function getActiveOption(list) {
    return getListOptions(list).find(option => option.active);
}
function setActiveOption(list, element) {
    if (element) {
        getListOptions(list).forEach(option => {
            const active = (!option.disabled || !option.filtered) && option === element;
            option.active = active;
            if (active) {
                list.setAttribute('aria-activedescendant', option.id);
            }
        });
        element.scrollIntoView({ block: 'nearest' });
    }
}
function getFirstOption(list) {
    return getAvailableListOptions(list)[0];
}
function getNextOption(list) {
    if (hasActiveOption(list) && getActiveOption(list) !== getLastOption(list)) {
        const availableListOptions = getAvailableListOptions(list);
        const activeOption = getActiveOption(list);
        const activeOptionIndex = availableListOptions.indexOf(activeOption);
        return availableListOptions[activeOptionIndex + 1];
    }
    return getFirstOption(list);
}
function getPreviousOption(list) {
    if (hasActiveOption(list)) {
        const availableOptionsList = getAvailableListOptions(list);
        const activeOptionIndex = availableOptionsList.indexOf(getActiveOption(list));
        if (getActiveOption(list) === getFirstOption(list)) {
            return getLastOption(list);
        }
        return availableOptionsList[activeOptionIndex - 1];
    }
    return getFirstOption(list);
}
function getLastOption(list) {
    const availableOptions = getAvailableListOptions(list);
    return availableOptions[availableOptions.length - 1];
}
export function hasActiveOption(list) {
    return Boolean(getActiveOption(list));
}
export function getSearchOption(list, searchString) {
    return getListOptions(list).find(option => {
        return ((!option.disabled || !option.filtered) &&
            matchOption(option, searchString));
    });
}
function setSearchOptionActive(list, searchString) {
    const option = getSearchOption(list, searchString);
    if (option) {
        setActiveOption(list, option);
    }
}
export function clearActiveOptions(list) {
    getListOptions(list).forEach(option => {
        option.active = false;
    });
}
export function setInitialActiveOption(list) {
    setActiveOption(list, getFirstSelectedOption(list) || getFirstOption(list));
}
export function hasPreviousOption(list) {
    if (hasActiveOption(list)) {
        return Boolean(getPreviousOption(list));
    }
    return false;
}
export function hasNextOption(list) {
    if (hasActiveOption(list)) {
        return Boolean(getNextOption(list));
    }
    return false;
}
export function setFirstOptionActive(list) {
    setActiveOption(list, getFirstOption(list));
}
export function setNextOptionActive(list) {
    setActiveOption(list, getNextOption(list));
}
export function setPreviousOptionActive(list) {
    setActiveOption(list, getPreviousOption(list));
}
export function setLastOptionActive(list) {
    setActiveOption(list, getLastOption(list));
}
export function actOnActiveOption(list, handler) {
    if (hasActiveOption(list)) {
        handler(getActiveOption(list).value);
    }
}
export function onClickedOption(option, handler) {
    handler(option.value);
}
let timer;
let searchStringState = '';
// While there is less than 1s between key presses that will be considered one search operation.
// After 1s the next keypress will be considered the start of a new search.
// This is a mimic/approximation of the native select element`s functionality.
const continueSearchMaxInterval = 1000;
export function goToOption(list, letter) {
    clearTimeout(timer);
    searchStringState += letter;
    setSearchOptionActive(list, searchStringState);
    timer = setTimeout(() => {
        searchStringState = '';
    }, continueSearchMaxInterval);
}
export function matchOption(option, matchString) {
    var _a;
    //The text content needs to be trimmed as white space can occur around the textContent if options are populated asynchronously.
    return (_a = getOptionDefaultSlot(option)) === null || _a === void 0 ? void 0 : _a.textContent.trim().toLowerCase().startsWith(matchString.toLowerCase());
}
export function getOptionDefaultSlot(option) {
    var _a;
    return (_a = option.shadowRoot.querySelector('slot')) === null || _a === void 0 ? void 0 : _a.assignedNodes()[0];
}
export function convertValueToArray(value) {
    return value ? value.split(',') : [];
}
