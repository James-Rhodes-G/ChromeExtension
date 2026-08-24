import { EventEmitter, JSX } from '../../../../stencil-public-runtime';
export declare class GuxAllRowSelect {
    private inputElement;
    private id;
    private i18n;
    root: HTMLElement;
    selected: boolean;
    disabled: boolean;
    internalallrowselectchange: EventEmitter;
    onCheck(event: CustomEvent): void;
    setIndeterminate(indeterminate?: boolean): Promise<void>;
    componentWillLoad(): Promise<void>;
    render(): JSX.Element;
}
