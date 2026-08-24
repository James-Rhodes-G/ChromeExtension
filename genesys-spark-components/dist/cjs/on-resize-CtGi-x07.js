'use strict';

var index = require('./index-BLhHoh_r.js');

/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
function OnResize() {
    return (proto, methodName) => {
        const { connectedCallback, disconnectedCallback } = proto;
        const store = new Map();
        proto.connectedCallback = function () {
            const method = this[methodName];
            const observer = new ResizeObserver(method.bind(this));
            registerObserver(store, this, observer);
            return connectedCallback && connectedCallback.call(this);
        };
        proto.disconnectedCallback = function () {
            deregisterObserver(store, this);
            return disconnectedCallback && disconnectedCallback.call(this);
        };
    };
}
function registerObserver(store, key, observer) {
    if (store.has(key)) {
        store.get(key).disconnect();
    }
    store.set(key, observer);
    const element = index.getElement(key);
    if (element instanceof Element) {
        observer.observe(element);
    }
}
function deregisterObserver(store, key) {
    if (store.has(key)) {
        store.get(key).disconnect();
    }
    store.delete(key);
}

exports.OnResize = OnResize;
