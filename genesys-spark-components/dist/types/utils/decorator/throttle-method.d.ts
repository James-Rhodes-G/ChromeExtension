import { ComponentInterface } from '../../stencil-public-runtime';
declare type ThrottleMethodDecorator = (target: ComponentInterface, propertyKey: string, descriptor: PropertyDescriptor) => void;
export declare function ThrottleMethod(duration: number): ThrottleMethodDecorator;
export {};
