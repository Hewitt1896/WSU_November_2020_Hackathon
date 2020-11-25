import { CourseDomainService } from 'src/app/core/services/domain-service/course-domain.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Course } from 'src/app/model/model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.scss']
})
export class ViewCourseComponent implements OnInit {

  courses: Course[] = [];
  displayedColumns: string[] = ['name', 'address', 'state', 'zipcode', 'phone', 'distance'];

  dataSource: MatTableDataSource<Course>;

  constructor(
    public courseDomainService: CourseDomainService
  ) { }

  ngOnInit(): void {
    this.courseDomainService.getCourses().subscribe(data => {
      this.courses = data;
      this.dataSource = new MatTableDataSource(this.courses);
    });
  }
}
