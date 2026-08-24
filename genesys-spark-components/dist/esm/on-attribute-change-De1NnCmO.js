function onDisabledChange(element, callback) {
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.attributeName === 'disabled') {
                callback(element.disabled);
            }
        });
    });
    observer.observe(element, { attributes: true });
    return observer;
}
function onRequiredChange(element, callback) {
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.attributeName === 'required') {
                callback(element.required);
            }
        });
    });
    observer.observe(element, { attributes: true });
    return observer;
}
function onMultipleChange(element, callback) {
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.attributeName === 'multiple') {
                callback(element.multiple);
            }
        });
    });
    observer.observe(element, { attributes: true });
    return observer;
}

export { onDisabledChange as a, onMultipleChange as b, onRequiredChange as o };
