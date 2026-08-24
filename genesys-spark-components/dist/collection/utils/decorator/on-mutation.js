/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Build as BUILD, getElement } from "@stencil/core";
export function OnMutation(options) {
    return (proto, methodName) => {
        // this is to resolve the 'compiler optimization issue':
        // lifecycle events not being called when not explicitly declared in at least one of components from bundle
        BUILD.connectedCallback = true;
        BUILD.disconnectedCallback = true;
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
    observer.observe(getElement(key), options);
}
function deregisterObserver(store, key) {
    if (store.has(key)) {
        store.get(key).disconnect();
    }
    store.delete(key);
}
