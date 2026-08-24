function getListOptions(list) {
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
function getAvailableListOptions(list) {
    return getListOptions(list).filter(option => {
        return !option.disabled && !option.filtered;
    });
}
function isOptionGroup(item) {
    return item.tagName === 'GUX-OPTION-GROUP-BETA';
}
function isOption(item) {
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
function hasActiveOption(list) {
    return Boolean(getActiveOption(list));
}
function getSearchOption(list, searchString) {
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
function clearActiveOptions(list) {
    getListOptions(list).forEach(option => {
        option.active = false;
    });
}
function setInitialActiveOption(list) {
    setActiveOption(list, getFirstSelectedOption(list) || getFirstOption(list));
}
function hasPreviousOption(list) {
    if (hasActiveOption(list)) {
        return Boolean(getPreviousOption(list));
    }
    return false;
}
function hasNextOption(list) {
    if (hasActiveOption(list)) {
        return Boolean(getNextOption(list));
    }
    return false;
}
function setFirstOptionActive(list) {
    setActiveOption(list, getFirstOption(list));
}
function setNextOptionActive(list) {
    setActiveOption(list, getNextOption(list));
}
function setPreviousOptionActive(list) {
    setActiveOption(list, getPreviousOption(list));
}
function setLastOptionActive(list) {
    setActiveOption(list, getLastOption(list));
}
function actOnActiveOption(list, handler) {
    if (hasActiveOption(list)) {
        handler(getActiveOption(list).value);
    }
}
function onClickedOption(option, handler) {
    handler(option.value);
}
let timer;
let searchStringState = '';
// While there is less than 1s between key presses that will be considered one search operation.
// After 1s the next keypress will be considered the start of a new search.
// This is a mimic/approximation of the native select element`s functionality.
const continueSearchMaxInterval = 1000;
function goToOption(list, letter) {
    clearTimeout(timer);
    searchStringState += letter;
    setSearchOptionActive(list, searchStringState);
    timer = setTimeout(() => {
        searchStringState = '';
    }, continueSearchMaxInterval);
}
function matchOption(option, matchString) {
    var _a;
    //The text content needs to be trimmed as white space can occur around the textContent if options are populated asynchronously.
    return (_a = getOptionDefaultSlot(option)) === null || _a === void 0 ? void 0 : _a.textContent.trim().toLowerCase().startsWith(matchString.toLowerCase());
}
function getOptionDefaultSlot(option) {
    var _a;
    return (_a = option.shadowRoot.querySelector('slot')) === null || _a === void 0 ? void 0 : _a.assignedNodes()[0];
}
function convertValueToArray(value) {
    return value ? value.split(',') : [];
}

export { getOptionDefaultSlot as a, getListOptions as b, convertValueToArray as c, clearActiveOptions as d, setLastOptionActive as e, setFirstOptionActive as f, getSearchOption as g, hasActiveOption as h, hasPreviousOption as i, setPreviousOptionActive as j, hasNextOption as k, setNextOptionActive as l, actOnActiveOption as m, goToOption as n, onClickedOption as o, matchOption as p, setInitialActiveOption as s };
