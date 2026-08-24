import { EventEmitter } from '../../../stencil-public-runtime';
import { GuxStepperOrientation } from './gux-stepper.types';
/**
 * @slot - for gux-step elements
 */
export declare class GuxStepper {
    private root;
    /**
     *  Specifies horizontal or vertical orientation of steps.
     */
    orientation: GuxStepperOrientation;
    /**
     * stepId of the currently active step.
     */
    activeStepId: string;
    disabled: boolean;
    stepList: HTMLGuxStepElement[];
    guxactivestepchange: EventEmitter<string>;
    onInternalActiveStepChange(event: CustomEvent): void;
    watchActiveStep(newStepId: string): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    private activateStep;
    private onSlotChange;
    render(): JSX.Element;
}
