export function ThrottleMethod(duration) {
    let wait = false;
    let timeoutRef = null;
    return (_target, _propertyKey, descriptor) => {
        const original = descriptor.value;
        descriptor.value = function (...args) {
            if (!wait) {
                original.apply(this, args);
                wait = true;
                clearTimeout(timeoutRef);
                timeoutRef = setTimeout(() => {
                    wait = false;
                }, duration);
            }
        };
    };
}
