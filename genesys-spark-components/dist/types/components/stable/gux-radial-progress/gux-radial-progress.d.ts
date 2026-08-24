import { JSX } from '../../../stencil-public-runtime';
export declare class GuxRadialProgress {
    private root;
    /**
     * The progress made in the progress spinner compared to the max value
     */
    value: number;
    /**
     * The max value of the progress spinner
     */
    max: number;
    /**
     * Required localized text to provide an accessible label for the component
     */
    screenreaderText: string;
    componentWillLoad(): void;
    componentDidLoad(): void;
    render(): JSX.Element;
}
