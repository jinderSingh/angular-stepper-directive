export interface StepRef {
    isValid(): boolean;

    create(): void;

    clear(): void;
}

