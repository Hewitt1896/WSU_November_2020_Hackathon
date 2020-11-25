import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

import { RequiredStateMatcher } from '../validator/error-state-matcher';
import { FORM_MARK_TOUCHED } from '../utils/validation.util';

export class BaseForm implements OnInit, OnDestroy {

    public formGroup: FormGroup;
    public matcher = new RequiredStateMatcher();

    protected componentIdle: Subject<boolean> = new Subject();
    protected abstractControl: AbstractControl;

    constructor(
        protected formBuilder: FormBuilder,
        protected changeDetectorRef: ChangeDetectorRef
    ) {
    }

    public ngOnInit(): void {
    }

    public ngOnDestroy(): void {
        this.componentIdle.next(true);
        this.componentIdle.complete();
    }

    public checkFieldNameError(fieldName: string): boolean {
        if (this.formGroup) {
            const formGroup: AbstractControl = this.formGroup.get(fieldName) as AbstractControl;
            return formGroup && formGroup.invalid && (formGroup.dirty || formGroup.touched);
        }
        return false;
    }

    execFOrmValidation(): void {
        FORM_MARK_TOUCHED(this.abstractControl);
    }
}
