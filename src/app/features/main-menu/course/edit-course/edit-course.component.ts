import { ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { CourseDomainService } from 'src/app/core/services/domain-service/course-domain.service';
import { NotifyTabService } from 'src/app/core/services/emit/notify-tab.service';
import { Course } from 'src/app/model/model';
import { BaseForm } from 'src/app/shared/base-form/base-form';
import { ConfirmComponent } from 'src/app/shared/components/snack-bar/confirm/confirm.component';
import { PARS, STATES } from 'src/app/shared/const/const';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditCourseComponent extends BaseForm implements OnInit {

  public thisCourse: Course;
  courses: Course[] = [];
  id: string;
  states = STATES;
  pars = PARS;

  public nameControl(): AbstractControl {
    return this.formGroup.get('nameCtrl');
  }

  public hole1Control(): AbstractControl {
    return this.formGroup.get('hole1Ctrl');
  }

  public hole2Control(): AbstractControl {
    return this.formGroup.get('hole2Ctrl');
  }

  public hole3Control(): AbstractControl {
    return this.formGroup.get('hole3Ctrl');
  }

  public hole4Control(): AbstractControl {
    return this.formGroup.get('hole4Ctrl');
  }

  public hole5Control(): AbstractControl {
    return this.formGroup.get('hole5Ctrl');
  }

  public hole6Control(): AbstractControl {
    return this.formGroup.get('hole6Ctrl');
  }

  public hole7Control(): AbstractControl {
    return this.formGroup.get('hole7Ctrl');
  }

  public hole8Control(): AbstractControl {
    return this.formGroup.get('hole8Ctrl');
  }

  public hole9Control(): AbstractControl {
    return this.formGroup.get('hole9Ctrl');
  }

  public hole10Control(): AbstractControl {
    return this.formGroup.get('hole10Ctrl');
  }

  public hole11Control(): AbstractControl {
    return this.formGroup.get('hole11Ctrl');
  }

  public hole12Control(): AbstractControl {
    return this.formGroup.get('hole12Ctrl');
  }
  public hole13Control(): AbstractControl {
    return this.formGroup.get('hole13Ctrl');
  }

  public hole14Control(): AbstractControl {
    return this.formGroup.get('hole14Ctrl');
  }

  public hole15Control(): AbstractControl {
    return this.formGroup.get('hole15Ctrl');
  }

  public hole16Control(): AbstractControl {
    return this.formGroup.get('hole16Ctrl');
  }

  public hole17Control(): AbstractControl {
    return this.formGroup.get('hole17Ctrl');
  }

  public hole18Control(): AbstractControl {
    return this.formGroup.get('hole18Ctrl');
  }
  constructor(
    private courseDomainService: CourseDomainService,
    private snackBar: MatSnackBar,
    private notifyTabService: NotifyTabService,
    protected formBuilder: FormBuilder,
    protected changeDetectorRef: ChangeDetectorRef,
    private activatedRoute: ActivatedRoute,
  ) {
    super(formBuilder, changeDetectorRef);
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.courseDomainService.getCourses().subscribe(data => {
      this.courses = data;
      this.thisCourse = this.courses[this.id];

      this.formGroup = this.formBuilder.group({
        nameCtrl: [this.thisCourse.name, [Validators.required]],
        hole1Ctrl: [this.thisCourse.pars[0].hole1, [Validators.required]],
        hole2Ctrl: [this.thisCourse.pars[0].hole2, [Validators.required]],
        hole3Ctrl: [this.thisCourse.pars[0].hole3, [Validators.required]],
        hole4Ctrl: [this.thisCourse.pars[0].hole4, [Validators.required]],
        hole5Ctrl: [this.thisCourse.pars[0].hole5, [Validators.required]],
        hole6Ctrl: [this.thisCourse.pars[0].hole6, [Validators.required]],
        hole7Ctrl: [this.thisCourse.pars[0].hole7, [Validators.required]],
        hole8Ctrl: [this.thisCourse.pars[0].hole8, [Validators.required]],
        hole9Ctrl: [this.thisCourse.pars[0].hole9, [Validators.required]],
        hole10Ctrl: [this.thisCourse.pars[0].hole10, [Validators.required]],
        hole11Ctrl: [this.thisCourse.pars[0].hole11, [Validators.required]],
        hole12Ctrl: [this.thisCourse.pars[0].hole12, [Validators.required]],
        hole13Ctrl: [this.thisCourse.pars[0].hole13, [Validators.required]],
        hole14Ctrl: [this.thisCourse.pars[0].hole14, [Validators.required]],
        hole15Ctrl: [this.thisCourse.pars[0].hole15, [Validators.required]],
        hole16Ctrl: [this.thisCourse.pars[0].hole16, [Validators.required]],
        hole17Ctrl: [this.thisCourse.pars[0].hole17, [Validators.required]],
        hole18Ctrl: [this.thisCourse.pars[0].hole18, [Validators.required]],
      });
    });
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  public submit(): void {
    if (!this.formGroup.invalid) {
      this.thisCourse.id = this.thisCourse.id;
      this.thisCourse.name = this.nameControl().value;
      this.thisCourse.pars[0].hole1 = this.hole1Control().value;
      this.thisCourse.pars[0].hole2 = this.hole2Control().value;
      this.thisCourse.pars[0].hole3 = this.hole3Control().value;
      this.thisCourse.pars[0].hole4 = this.hole4Control().value;
      this.thisCourse.pars[0].hole5 = this.hole5Control().value;
      this.thisCourse.pars[0].hole6 = this.hole6Control().value;
      this.thisCourse.pars[0].hole7 = this.hole7Control().value;
      this.thisCourse.pars[0].hole8 = this.hole8Control().value;
      this.thisCourse.pars[0].hole9 = this.hole9Control().value;
      this.thisCourse.pars[0].hole10 = this.hole10Control().value;
      this.thisCourse.pars[0].hole11 = this.hole11Control().value;
      this.thisCourse.pars[0].hole12 = this.hole12Control().value;
      this.thisCourse.pars[0].hole13 = this.hole13Control().value;
      this.thisCourse.pars[0].hole14 = this.hole14Control().value;
      this.thisCourse.pars[0].hole15 = this.hole15Control().value;
      this.thisCourse.pars[0].hole16 = this.hole16Control().value;
      this.thisCourse.pars[0].hole17 = this.hole17Control().value;
      this.thisCourse.pars[0].hole18 = this.hole18Control().value;
      this.courseDomainService.saveCourse(this.thisCourse).toPromise().then((data) => {
        this.toastConfirm('You have successfully created a Course');
        this.notifyTabService.emitTab(0);
      });
    }
  }

  public toastConfirm(message: string): void {
    this.snackBar.openFromComponent(ConfirmComponent, {
      data: message,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }
}
