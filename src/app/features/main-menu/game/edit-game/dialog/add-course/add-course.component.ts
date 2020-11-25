import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CourseDialogData, Course } from 'src/app/model/model';
import { BaseForm } from 'src/app/shared/base-form/base-form';
import { AbstractControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent extends BaseForm implements OnInit {

  addCourses: Course[] = [];

  public courseControl(): AbstractControl {
    return this.formGroup.get('courseCtrl');
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: CourseDialogData,
    protected formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddCourseComponent>,
    protected changeDetectorRef: ChangeDetectorRef
  ) {
    super(formBuilder, changeDetectorRef);
  }


  ngOnInit(): void {
    super.ngOnInit();

    this.formGroup = this.formBuilder.group({
      courseCtrl: [''],
    });
  }

  public addCourse(course: Course): void {
    if (course.name !== '' && course.name !== undefined) {
      this.addCourses.push(this.data.courses.find(dataCourse => dataCourse.name === course.name));
      this.data.courses.splice(this.data.courses.findIndex(dataCourse => dataCourse.name === course.name), 1);
      this.courseControl().setValue('');
    }
  }

  public submit(): void {
    this.dialogRef.close(this.addCourses);
  }
}
