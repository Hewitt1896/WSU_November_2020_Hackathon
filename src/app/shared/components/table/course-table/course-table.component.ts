import { Component, OnInit, Input } from '@angular/core';
import { PLAYERCOLUMNS, COURSECOLUMNS } from 'src/app/shared/const/const';
import { MatTableDataSource } from '@angular/material/table';
import { Par, Course } from 'src/app/model/model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-table',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.scss']
})
export class CourseTableComponent implements OnInit {

  courseColumns = COURSECOLUMNS;

  dataSource: MatTableDataSource<any>;

  // tslint:disable-next-line: variable-name
  public _dataArray: Course[];


  @Input()
  public get dataArray(): Course[] {
    return this._dataArray;
  }
  public set dataArray(value: Course[]) {
    this._dataArray = value;
    this.dataSource = new MatTableDataSource(this._dataArray);
  }
  constructor(
    private router: Router
  ) {

  }
  ngOnInit(): void {
  }
}
