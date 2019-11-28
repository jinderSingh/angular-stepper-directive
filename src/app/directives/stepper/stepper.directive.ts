import { Directive, ElementRef, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { StepDirective } from './step/step.directive';

@Directive({
    selector: '[stepper]'
})
export class StepperDirective implements OnDestroy {


    @Input()
    set selectedIndex(val: number) {
        if (!this.isSelectable(val) || val === this.selectedIndex) {
            return;
        }
        if (this.selected) {
            this.selected.clear();
        }
        this.internalSelectedIndex = val;
        this.selected.create();
    }

    get selectedIndex(): number {
        return this.internalSelectedIndex;
    }

    get stepsLength(): number {
        return (this.steps && this.steps.length) - 1;
    }

    get isEmpty(): boolean {
        return !this.steps || !this.steps.length;
    }

    get selected(): StepDirective {
        return this.steps && this.steps[this.selectedIndex] || undefined;
    }

    @Output() selectedIndexChange: EventEmitter<any> = new EventEmitter();

    private steps: StepDirective[];
    private internalSelectedIndex;
    private isAlive = true;

    constructor(private tmp: ElementRef<any>) {
    }


    ngOnDestroy(): void {
        this.isAlive = false;
    }


    add(step: StepDirective): void {
        if (!step) {
            return;
        }
        if (!this.steps) {
            this.steps = [];
        }
        this.steps.push(step);

        if (this.selectedIndex === undefined) {
            this.selectedIndex = 0;
        }

    }

    next(): void {
        this.selectedIndex = Math.min(this.selectedIndex + 1, this.stepsLength);
    }


    prev(): void {
        this.selectedIndex = Math.max(this.selectedIndex - 1, 0);
    }


    private updateCurrentStep(): void {

    }

    private isSelectable(index: number): boolean {
        return !this.isEmpty && index <= this.stepsLength && index >= 0 ;
    }

}
