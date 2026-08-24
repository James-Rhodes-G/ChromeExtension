import { EventEmitter } from '../../../../stencil-public-runtime';
import { GuxStepStatus } from '../gux-stepper.types';
/**
 * @slot title - Slot for gux-step-title element.
 * @slot helper - Optional slot for help message.
 */
export declare class GuxStep {
    private root;
    status: GuxStepStatus;
    /**
     * Step id for the step
     */
    stepId: string;
    disabled: boolean;
    active: boolean;
    internalactivatestep: EventEmitter<string>;
    onClick(): void;
    guxSetActive(active: boolean): Promise<void>;
    componentWillLoad(): void;
    private getStatusIcon;
    render(): JSX.Element;
}
