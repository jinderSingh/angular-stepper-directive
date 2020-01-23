import { Directive, Input, isDevMode, TemplateRef, ViewContainerRef, ViewRef } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { StepRef } from './../models/step-ref';
import { StepperDirective } from './../stepper.directive';


@Directive({
    selector: '[step]'
})
export class StepDirective implements StepRef {

    private context: any = {}; // TODO add type for Step context
    private interacted: boolean;
    private viewRef: ViewRef;
    private control: AbstractControl;

    constructor(private stepper: StepperDirective,
                private vc: ViewContainerRef,
                private tr: TemplateRef<any>) {

        if (!this.stepper && isDevMode()) {
            throw new Error(`No Stepper directive found, please provide one. Hint use Step structure directive as a child of Stepper directive.`);
        }
        this.stepper.add(this);
    }


    @Input()
    set stepWith(control: AbstractControl) {
        this.control = control;
    }

    get stepWith(): AbstractControl {
        return this.control;
    }


    create(): void {
        if (!this.interacted) {
            this.vc.createEmbeddedView(this.tr, this.context);
            return;
        }

        if (this.viewRef) {
            this.vc.insert(this.viewRef);
        }

    }

    clear(): void {
        this.interacted = true;
        this.viewRef = this.vc.detach();
    }

    isValid(): boolean {
        return !this.control || this.control.valid;
    }

}
