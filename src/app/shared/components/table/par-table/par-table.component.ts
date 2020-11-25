import { Par } from './../../../../model/model';
import { Component, OnInit, Input } from '@angular/core';
import { PARCOLUMNS } from 'src/app/shared/const/const';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-par-table',
  templateUrl: './par-table.component.html',
  styleUrls: ['./par-table.component.scss']
})
export class ParTableComponent implements OnInit {

  parColumns = PARCOLUMNS;

  dataSource: MatTableDataSource<any>;

  // tslint:disable-next-line: variable-name
  public _dataArray: Par[];

  @Input()
  public get dataArray(): Par[] {
    return this._dataArray;
  }
  public set dataArray(value: Par[]) {
    this._dataArray = value;
    this.dataSource = new MatTableDataSource(this._dataArray);
  }
  ngOnInit(): void {

  }
}
