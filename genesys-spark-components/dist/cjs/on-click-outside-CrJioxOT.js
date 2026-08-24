'use strict';

var index = require('./index-BLhHoh_r.js');

/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
const OnClickOutsideOptionsDefaults = {
    triggerEvents: 'click',
    exclude: ''
};
function OnClickOutside(opt = OnClickOutsideOptionsDefaults) {
    return (proto, methodName) => {
        const { connectedCallback, disconnectedCallback } = proto;
        const store = new Map();
        proto.connectedCallback = function () {
            const host = index.getElement(this);
            const method = this[methodName];
            registerOnClickOutside(store, this, host, method, opt);
            return connectedCallback && connectedCallback.call(this);
        };
        proto.disconnectedCallback = function () {
            removeOnClickOutside(store, this, opt);
            return disconnectedCallback && disconnectedCallback.call(this);
        };
    };
}
function registerOnClickOutside(store, component, element, callback, opt = OnClickOutsideOptionsDefaults) {
    const excludedNodes = getExcludedNodes(opt);
    const listener = (e) => {
        initOnClickOutside(e, component, element, callback, excludedNodes);
    };
    store.set(component, listener);
    getTriggerEvents(opt).forEach(triggerEvent => {
        window.addEventListener(triggerEvent, listener, false);
    });
}
function removeOnClickOutside(store, component, opt = OnClickOutsideOptionsDefaults) {
    const listener = store.get(component);
    store.delete(component);
    getTriggerEvents(opt).forEach(triggerEvent => {
        window.removeEventListener(triggerEvent, listener, false);
    });
}
function initOnClickOutside(event, component, element, callback, excludedNodes) {
    const composedPath = event.composedPath();
    if (!composedPath.includes(element) &&
        !isExcluded(composedPath, excludedNodes) &&
        element.isConnected) {
        callback.call(component, event);
    }
}
function getTriggerEvents(opt) {
    let events;
    if (opt.triggerEvents) {
        events = opt.triggerEvents.split(',').map(e => e.trim());
    }
    else {
        events = ['click'];
    }
    if (!events.includes('blur')) {
        events.push('blur');
    }
    return events;
}
function getExcludedNodes(opt) {
    if (opt.exclude) {
        try {
            return Array.from(document.querySelectorAll(opt.exclude));
        }
        catch (err) {
            console.warn(`@OnClickOutside: Exclude: '${opt.exclude}' will not be evaluated. Check your exclude selector syntax.`, err);
        }
    }
    return;
}
function isExcluded(composedPath, excudedNodes) {
    if (composedPath && excudedNodes) {
        return excudedNodes.some(excudedNode => composedPath.includes(excudedNode));
    }
    return false;
}

exports.OnClickOutside = OnClickOutside;
