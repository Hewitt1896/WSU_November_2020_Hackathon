import { AbstractControl, FormGroup, FormArray, FormControl } from '@angular/forms';

export const FORM_MARK_TOUCHED = (x: AbstractControl): void => {
    const fg: FormGroup | FormArray = (x instanceof FormGroup) ? x as FormGroup : x as FormArray;

    Object.values(fg.controls).forEach((y: AbstractControl) => {
        if (y instanceof FormControl) {
            (y as FormControl).markAsTouched();
            (y as FormControl).updateValueAndValidity();
            return;
        }
    });
}