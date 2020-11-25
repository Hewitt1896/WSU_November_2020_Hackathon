import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCourseComponent } from './create-course/create-course.component';
import { CourseComponent } from './course.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    CourseComponent,
    CreateCourseComponent],
  imports: [
    SharedModule,
  ],
  exports: [
    CourseComponent,
    CreateCourseComponent,
  ]
})
export class CourseModule { }
