import { Directive, TemplateRef, ViewContainerRef, ViewRef } from '@angular/core';
import { StepperDirective } from './../stepper.directive';

@Directive({
    selector: '[step]'
})
export class StepDirective {

    private context: any = {};
    private interacted: boolean;
    private viewRef: ViewRef;
    private order: number;

    constructor(private stepper: StepperDirective,
                private vc: ViewContainerRef,
                private tr: TemplateRef<any>) {
        this.stepper.add(this);
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

}
