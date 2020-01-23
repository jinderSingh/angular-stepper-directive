import { Directive, ElementRef, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { StepChangeEvent } from './models/step-change.event';
import { StepRef } from './models/step-ref';

@Directive({
    selector: '[stepper]'
})
export class StepperDirective implements OnDestroy {

    @Output() selectedIndexChange: EventEmitter<StepChangeEvent> = new EventEmitter();

    @Input() linear: boolean;

    @Input() editable: boolean;

    @Input()
    set selectedIndex(val: number) {
        if (!this.isSelectable(val) || val === this.selectedIndex) {
            return;
        }

        if (this.selected) {

            if (this.linear && !this.selected.isValid()) {
                return;
            }
            this.selected.clear();
        }

        const prevIndex = this.selectedIndex;

        this.internalSelectedIndex = val;
        this.selected.create();

        this.selectedIndexChange.emit({index: val, prevIndex});
    }

    get selectedIndex(): number {
        return this.internalSelectedIndex;
    }

    get stepsLength(): number {
        return (this.steps && this.steps.length) - 1;
    }

    get isStepsArrayEmpty(): boolean {
        return !this.steps || !this.steps.length;
    }

    get selected(): StepRef {
        return this.steps && this.steps[this.selectedIndex] || undefined;
    }

    private steps: StepRef[];
    private internalSelectedIndex;
    private isAlive = true;

    constructor(private tmpl: ElementRef<any>) {
    }


    ngOnDestroy(): void {
        this.isAlive = false;
    }


    add(step: StepRef): void {
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
        return !this.isStepsArrayEmpty && index <= this.stepsLength && index >= 0 ;
    }

}
