import { ComponentInterface } from '../../stencil-public-runtime';
declare type OnMutationDecorator = (target: ComponentInterface, propertyKey: string) => void;
export declare function OnMutation(options: MutationObserverInit): OnMutationDecorator;
export {};
