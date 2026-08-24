import { JSX } from '../../../stencil-public-runtime';
import { GuxFlagCode } from './sprite-utils/sprites.generated';
export declare class GuxFlagIconBeta {
    private i18n;
    root: HTMLElement;
    flag: GuxFlagCode;
    screenreaderText: string;
    componentWillLoad(): Promise<void>;
    render(): JSX.Element;
    private getLabel;
}
