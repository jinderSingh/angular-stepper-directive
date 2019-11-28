import { Directive, HostListener } from '@angular/core';
import { StepperDirective } from '../stepper.directive';

@Directive({
    selector: '[nextStep]'
})
export class NextStepDirective {


    constructor(private stepper: StepperDirective) {}


    @HostListener('click', ['$event'])
    onClick(event): void {
        this.stepper.next();
    }

}
