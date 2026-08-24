import { EventEmitter } from '../../../../../stencil-public-runtime';
/**
 * @slot - slot for text
 */
export declare class GuxStepTitle {
    private root;
    internalactivestepchange: EventEmitter<string>;
    onClick(): void;
    get stepDisabledState(): boolean;
    componentWillLoad(): void;
    render(): JSX.Element;
}
