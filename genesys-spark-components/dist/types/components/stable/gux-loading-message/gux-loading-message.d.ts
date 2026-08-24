import { JSX } from '../../../stencil-public-runtime';
/**
 * @slot progress - Required slot for progress.
 * @slot primary-guidance - Required slot for primary guidance.
 * @slot additional-guidance - Slot for additional guidance.
 */
export declare class GuxLoadingMessage {
    root: HTMLElement;
    componentWillLoad(): void;
    render(): JSX.Element;
}
