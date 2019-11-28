import { Directive, HostListener } from '@angular/core';
import { StepperDirective } from '../stepper.directive';

@Directive({
    selector: '[prevStep]'
})
export class PrevStepDirective {


    constructor(private stepper: StepperDirective) {}


    @HostListener('click', ['$event'])
    onClick(event): void {
        this.stepper.prev();
    }
}
