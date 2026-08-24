'use strict';

var index = require('./index-BLhHoh_r.js');

/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
function OnMutation(options) {
    return (proto, methodName) => {
        const { connectedCallback, disconnectedCallback } = proto;
        const store = new Map();
        proto.connectedCallback = function () {
            const method = this[methodName];
            const observer = new MutationObserver(method.bind(this));
            registerObserver(store, this, observer, options);
            return connectedCallback && connectedCallback.call(this);
        };
        proto.disconnectedCallback = function () {
            deregisterObserver(store, this);
            return disconnectedCallback && disconnectedCallback.call(this);
        };
    };
}
function registerObserver(store, key, observer, options) {
    if (store.has(key)) {
        store.get(key).disconnect();
    }
    store.set(key, observer);
    observer.observe(index.getElement(key), options);
}
function deregisterObserver(store, key) {
    if (store.has(key)) {
        store.get(key).disconnect();
    }
    store.delete(key);
}

exports.OnMutation = OnMutation;
