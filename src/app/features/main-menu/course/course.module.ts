import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCourseComponent } from './create-course/create-course.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { CourseComponent } from './course.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ViewCourseComponent } from './view-course/view-course.component';



@NgModule({
  declarations: [
    CourseComponent,
    CreateCourseComponent,
    EditCourseComponent,
    ViewCourseComponent],
  imports: [
    SharedModule,
  ],
  exports: [
    CourseComponent,
    CreateCourseComponent,
    EditCourseComponent,
    ViewCourseComponent
  ]
})
export class CourseModule { }
